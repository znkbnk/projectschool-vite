var e=[`
// backend/models/userSchema.js

import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
  },
  email: { 
    type: String, 
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Invalid email format"],
  },
  password: { 
    type: String, 
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
  },
  role: { 
    type: String, 
    enum: {
      values: ["Student", "Teacher", "Admin"],
      message: "{VALUE} is not a valid role",
    }, 
    required: [true, "Role is required"],
  },
  profilePicture: { 
    type: String,
    validate: {
      validator: function (v) {
        return !v || validator.isURL(v, { require_protocol: false });
      },
      message: "Invalid profile picture URL",
    },
  },
  contactNumber: { 
    type: String,
    validate: {
      validator: function (v) {
        return !v || validator.isMobilePhone(v, "any");
      },
      message: "Invalid contact number",
    },
  },
  address: { type: String },
  teacherDetails: {
    bio: { type: String },
    expertise: [String],
    availability: [{
      date: { type: Date },
      day: { type: String },
      timeSlots: [String],
    }],
  },
  studentDetails: {
    enrolledLessons: [String],
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
`,`
// backend/routes/authRoutes.js

import express from "express";
import bcrypt from "bcryptjs";
import validator from "validator"; // Import validator
import User from "../models/userSchema.js";
import { protect } from "../middleware/authMiddleware.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

// Password strength validation function
const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return "Password must be at least 8 characters long";
  }
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
    return "Password must include uppercase, lowercase, numbers, and special characters";
  }
  return null;
};

// Register user
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Validate inputs
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      return res.status(400).json({ message: passwordError });
    }

    if (!["Student", "Teacher"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate inputs
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Logout user
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// Get authenticated user info
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// Update profile
router.put("/profile", protect, async (req, res) => {
  try {
    const {
      name,
      profilePicture,
      contactNumber,
      address,
      teacherDetails,
      studentDetails,
    } = req.body;

    // Validate inputs
    if (name && typeof name !== "string") {
      return res.status(400).json({ message: "Invalid name format" });
    }
    if (
      profilePicture &&
      !validator.isURL(profilePicture, { require_protocol: false })
    ) {
      return res.status(400).json({ message: "Invalid profile picture URL" });
    }
    if (contactNumber && !validator.isMobilePhone(contactNumber, "any")) {
      return res.status(400).json({ message: "Invalid contact number" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.profilePicture = profilePicture || user.profilePicture;
    user.contactNumber = contactNumber || user.contactNumber;
    user.address = address || user.address;

    if (user.role === "Teacher" && teacherDetails) {
      user.teacherDetails = teacherDetails;
    }
    if (user.role === "Student" && studentDetails) {
      user.studentDetails = studentDetails;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

export default router;

`,`
// backend/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import Message from "./models/messageSchema.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import http from "http";
import rateLimit from "express-rate-limit";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://musicacademy-kpf5.onrender.com",
      "https://musiccademy.netlify.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.set("socketio", io);

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://musicacademy-kpf5.onrender.com",
      "https://musiccademy.netlify.app",
    ],
    credentials: true,
  })
);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10, 
  message: "Too many requests, please try again later.",
});

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

// Socket.IO connection handling
io.on("connection", (socket) => {
  // Join user-specific room based on userId
  socket.on("join", (userId) => {
    socket.join(userId);
  });

  // Handle sending messages
  socket.on("sendMessage", async (messageData) => {
    try {
      const { sender, receiver, content } = messageData;
      const message = new Message({ sender, receiver, content });
      await message.save();

      // Populate sender and receiver details
      const populatedMessage = await Message.findById(message._id)
        .populate("sender", "name email _id") // Adjust fields as needed
        .populate("receiver", "name email _id");

      // Emit the populated message
      io.to(sender).to(receiver).emit("receiveMessage", populatedMessage);
    } catch (error) {
      // Emit an error message back to the client
      socket.emit("messageError", {
        success: false,
        message: "Failed to send message. Please try again.",
        error: error.message,
      });
    }
  });

  socket.on("disconnect", () => {
    // Handle disconnect silently ( hsould be like that )
  });
});

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", authLimiter);

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`,`
// src/pages/admin/LessonManagement/CreateLessonForm.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import IsolatedMusicSpinner from "../../../components/Loading.js";

const CreateLessonForm = ({
  onLessonCreated,
  lessonToEdit,
  setLessonToEdit,
}) => {
  const [formData, setFormData] = useState({
    teacher: "",
    lessonType: "",
    dateTime: null,
    location: "",
    status: "Scheduled",
    capacity: 10,
  });

  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherAvailability, setSelectedTeacherAvailability] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (lessonToEdit) {
      try {
        const dateParts = lessonToEdit.date.split("-");
        const timeParts = lessonToEdit.time.match(/(\\d+):(\\d+) (\\ w+)/);

        let hours = parseInt(timeParts[1]);
        const minutes = parseInt(timeParts[2]);
        const period = timeParts[3];

        if (period === "PM" && hours < 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;

        const lessonDateTime = new Date(
          parseInt(dateParts[0]),
          parseInt(dateParts[1]) - 1,
          parseInt(dateParts[2]),
          hours,
          minutes
        );

        setFormData({
          teacher: lessonToEdit.teacher._id,
          lessonType: lessonToEdit.lessonType,
          dateTime: lessonDateTime,
          location: lessonToEdit.location,
          status: lessonToEdit.status,
          capacity: lessonToEdit.capacity || 10,
        });
      } catch (error) {
        console.error("Error parsing lesson date/time:", error);
        setErrors({ server: "Invalid lesson date/time format" });
      }
    }
  }, [lessonToEdit]);

  useEffect(() => {
    const fetchTeachers = async () => {
      setIsLoading(true);
      try {
        const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
        const response = await fetch(\`\${backendUrl}/api/users\`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch teachers");
        }

        const users = await response.json();
        const teachers = users.filter((user) => user.role === "Teacher");
        setTeachers(teachers);
      } catch (error) {
        setErrors({ server: error.message });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    if (formData.teacher) {
      const selectedTeacher = teachers.find(
        (teacher) => teacher._id === formData.teacher
      );
      const availability = selectedTeacher?.teacherDetails?.availability || [];
      setSelectedTeacherAvailability(availability);

      if (formData.dateTime) {
        const selectedDateStr = formData.dateTime.toISOString().split("T")[0];
        const selectedTime = formData.dateTime.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
        });
        const isAvailable = availability.some(
          (slot) =>
            slot.date &&
            new Date(slot.date).toISOString().split("T")[0] === selectedDateStr &&
            slot.timeSlots.includes(selectedTime)
        );

        if (!isAvailable) {
          setErrors({
            dateTime: \`Teacher is not available on \${formData.dateTime.toLocaleDateString(
              "en-US",
              { month: "long", day: "numeric", year: "numeric" }
            )} at \${selectedTime}\`,
          });
        } else {
          setErrors((prev) => ({ ...prev, dateTime: "" }));
        }
      }
    } else {
      setSelectedTeacherAvailability([]);
      setErrors((prev) => ({ ...prev, dateTime: "" }));
    }
  }, [formData.teacher, formData.dateTime, teachers]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.teacher) {
      newErrors.teacher = "Teacher is required";
    }
    if (!formData.lessonType.trim()) {
      newErrors.lessonType = "Lesson type is required";
    }
    if (!formData.dateTime || isNaN(formData.dateTime.getTime())) {
      newErrors.dateTime = "Valid date and time are required";
    }
    if (formData.capacity < 1) {
      newErrors.capacity = "Capacity must be at least 1";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "capacity" ? Number(value) : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateTimeChange = (selectedDates) => {
    const date = selectedDates[0];
    setFormData((prevData) => ({
      ...prevData,
      dateTime: date,
    }));
    setErrors((prev) => ({ ...prev, dateTime: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    const payload = {
      teacher: formData.teacher,
      lessonType: formData.lessonType,
      date: formData.dateTime.toISOString().split("T")[0],
      time: formData.dateTime.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      }),
      location: formData.location,
      status: formData.status,
      capacity: Number(formData.capacity),
    };

    const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
    const url = lessonToEdit
      ? \`\${backendUrl}/api/lessons/\${lessonToEdit._id}\`
      : \`\${backendUrl}/api/lessons\`;
    const method = lessonToEdit ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || \`Failed to \${lessonToEdit ? "update" : "create"} lesson\`);
      }

      alert(\`Lesson \${lessonToEdit ? "updated" : "created"} successfully!\`);
      setFormData({
        teacher: "",
        lessonType: "",
        dateTime: null,
        location: "",
        status: "Scheduled",
        capacity: 10,
      });
      setLessonToEdit(null);
      onLessonCreated();
    } catch (error) {
      setErrors({ server: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-lesson-form">
      {isLoading && <IsolatedMusicSpinner />}
      {errors.server && <p className="error-message">{errors.server}</p>}
      <div className="form-group">
        <label>Teacher:</label>
        <select
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
          required
          disabled={isLoading}
          className={errors.teacher ? "input-error" : ""}
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher._id} value={teacher._id}>
              {teacher.name} ({teacher.teacherDetails?.expertise?.join(", ") || "No expertise"})
            </option>
          ))}
        </select>
        {errors.teacher && <p className="error-message">{errors.teacher}</p>}
        {selectedTeacherAvailability.length > 0 && (
          <div className="teacher-availability">
            <p><strong>All Availability:</strong></p>
            <ul>
              {selectedTeacherAvailability.map((slot, index) => (
                <li key={index}>
                  {slot.date
                    ? new Date(slot.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : \`\${slot.day || "Unknown day"} (date missing)\`}
                  : {slot.timeSlots.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formData.teacher && selectedTeacherAvailability.length === 0 && (
          <p className="no-availability">This teacher has no availability set.</p>
        )}
      </div>
      <div className="form-group">
        <label>Lesson Type:</label>
        <input
          type="text"
          name="lessonType"
          value={formData.lessonType}
          onChange={handleChange}
          required
          disabled={isLoading}
          className={errors.lessonType ? "input-error" : ""}
        />
        {errors.lessonType && <p className="error-message">{errors.lessonType}</p>}
      </div>
      <div className="form-group">
        <label>Date and Time:</label>
        <Flatpickr
          value={formData.dateTime}
          onChange={handleDateTimeChange}
          options={{
            enableTime: true,
            time_24hr: false,
            minuteIncrement: 15,
            dateFormat: "F j, Y h:i K",
            placeholder: "Select date and time",
          }}
          placeholder="Select date and time (e.g., March 31, 2025 2:00 PM)"
          required
          disabled={isLoading}
          className={errors.dateTime ? "input-error" : ""}
        />
        {errors.dateTime && <p className="error-message">{errors.dateTime}</p>}
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      <div className="form-group">
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          disabled={isLoading}
        >
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="form-group">
        <label>Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          min="1"
          required
          disabled={isLoading}
          className={errors.capacity ? "input-error" : ""}
        />
        {errors.capacity && <p className="error-message">{errors.capacity}</p>}
      </div>
      <button type="submit" className="submit-btn" disabled={isLoading}>
        {lessonToEdit ? "Update Lesson" : "Create Lesson"}
      </button>
      {lessonToEdit && (
        <button
          type="button"
          className="cancel-btn"
          onClick={() => setLessonToEdit(null)}
          disabled={isLoading}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

CreateLessonForm.propTypes = {
  onLessonCreated: PropTypes.func.isRequired,
  lessonToEdit: PropTypes.object,
  setLessonToEdit: PropTypes.func.isRequired,
};

export default CreateLessonForm;
`,`
// src/pages/Auth.js

import { useState } from "react";
import PropTypes from "prop-types";
import IsolatedMusicSpinner from "../components/Loading";
import "../styles/auth.css";

const Auth = ({ onRegistrationSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!isLogin && formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!isLogin) {
      // Only enforce strong password on register
      if (!/[A-Z]/.test(formData.password)) {
        newErrors.password = "Password must include an uppercase letter";
      } else if (!/[a-z]/.test(formData.password)) {
        newErrors.password = "Password must include a lowercase letter";
      } else if (!/\\d/.test(formData.password)) {
        newErrors.password = "Password must include a number";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
        newErrors.password = "Password must include a special character";
      }
    }

    if (!isLogin && !["Student", "Teacher"].includes(formData.role)) {
      newErrors.role = "Invalid role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear specific error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
    const url = isLogin
      ? \`\${backendUrl}/auth/login\`
      : \`\${backendUrl}/auth/register\`;
    const body = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (isLogin) {
        if (!data.user) {
          console.warn("No user data in login response, relying on /auth/me");
        }
        onRegistrationSuccess(data.user || {});
      } else {
        setIsLogin(true);
        alert("Registration successful! Please log in.");
        setFormData({ name: "", email: "", password: "", role: "Student" });
      }
    } catch (err) {
      setErrors({ server: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {errors.server && <p className="error-message">{errors.server}</p>}
        {isLoading ? (
          <IsolatedMusicSpinner />
        ) : (
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <div className="select-wrapper">
                    <select
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className={errors.role ? "input-error" : ""}
                    >
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                    </select>
                  </div>
                  {errors.role && <p className="error-message">{errors.role}</p>}
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        )}
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleAuthMode} className="toggle-auth">
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

Auth.propTypes = {
  onRegistrationSuccess: PropTypes.func.isRequired,
};

export default Auth;
`,`
// src/App.js

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import ProfileSetup from "./pages/ProfileSetup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Activity from "./pages/Activity";
import { useState, useEffect, useCallback } from "react";
import Messages from "./components/Messages";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

function App() {
  const [user, setUser] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  // Fetch user data function, memoized with useCallback
  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/me\`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null); // Ensure user is null if fetch fails
    }
  }, [backendUrl]);

  // Fetch user data on mount
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Handle successful registration/login
  const handleRegistrationSuccess = async (registeredUser) => {
    // Set initial user data from login/register response
    setUser(registeredUser);
    // Immediately fetch full profile to ensure all data is loaded
    await fetchUserData();
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/logout\`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setUser(null);
        console.log("Logged out successfully");
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route
            path='/services'
            element={<Services user={user} setUser={setUser} />}
          />
          <Route
            path='/services/calendar'
            element={<Services user={user} setUser={setUser} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />

          {/* Protected Routes (Require Login) */}
          <Route
            path='/messages'
            element={user ? <Messages user={user} /> : <Navigate to='/auth' />}
          />
          <Route
            path='/auth'
            element={
              user ? (
                <Navigate to='/' />
              ) : (
                <Auth onRegistrationSuccess={handleRegistrationSuccess} />
              )
            }
          />
          <Route
            path='/profile-setup'
            element={
              user ? <ProfileSetup user={user} /> : <Navigate to='/auth' />
            }
          />
          <Route
            path='/admin'
            element={
              <ProtectedRoute user={user}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/teacher-dashboard'
            element={
              user && user.role === "Teacher" ? (
                <TeacherDashboard user={user} />
              ) : (
                <Navigate to='/auth' />
              )
            }
          />
          <Route
            path='/activity'
            element={user ? <Activity user={user} /> : <Navigate to='/auth' />}
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

`,`
// src/components/Loading.js

import { motion } from 'framer-motion';

const IsolatedMusicSpinner = () => {
  //  isolated style object to avoid conflicts
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative',
  };
  
  const spinnerContainerStyle = {
    position: 'relative',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const backgroundCircleStyle = {
    position: 'absolute',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
    opacity: 0.8
  };
  
  const centerDiscStyle = {
    position: 'relative',
    zIndex: 10,
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const innerDiscStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const innerDotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'white'
  };
  
  const noteStyle = {
    position: 'absolute',
    zIndex: 20,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6366f1',
    fontSize: '20px',
    fontWeight: 'bold'
  };
  
  const ringStyle = (size) => ({
    position: 'absolute',
    width: \`\${size}px\`,
    height: \`\${size}px\`,
    borderRadius: '50%',
    border: '1px solid rgba(99, 102, 241, 0.5)',
    boxSizing: 'border-box'
  });
  
  const loadingTextStyle = {
    position: 'absolute',
    bottom: '-40px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#6366f1'
  };

  // Calculate positions for the four notes
const notePositions = [
  { id: 1, initialRotation: 0, delay: 0, symbol: '♪' },
  { id: 2, initialRotation: 90, delay: 0.5, symbol: '♫' },
  { id: 3, initialRotation: 180, delay: 1, symbol: '♪' },
  { id: 4, initialRotation: 270, delay: 1.5, symbol: '♫' },
  { id: 5, initialRotation: 360, delay: 2, symbol: '♪' },
  { id: 6, initialRotation: 450, delay: 2.5, symbol: '♫' },
  { id: 7, initialRotation: 540, delay: 3, symbol: '♪' },
  { id: 8, initialRotation: 630, delay: 3.5, symbol: '♫' },
  { id: 9, initialRotation: 720, delay: 4, symbol: '♪' },
  { id: 10, initialRotation: 810, delay: 4.5, symbol: '♫' },
  { id: 11, initialRotation: 900, delay: 5, symbol: '♪' },
  { id: 12, initialRotation: 990, delay: 5.5, symbol: '♫' },
  { id: 13, initialRotation: 1080, delay: 6, symbol: '♪' },
  { id: 14, initialRotation: 1170, delay: 6.5, symbol: '♫' },
  { id: 15, initialRotation: 1260, delay: 7, symbol: '♪' },
  { id: 16, initialRotation: 1350, delay: 7.5, symbol: '♫' },
  { id: 17, initialRotation: 1440, delay: 8, symbol: '♪' },
  { id: 18, initialRotation: 1530, delay: 8.5, symbol: '♫' },
  { id: 19, initialRotation: 1620, delay: 9, symbol: '♪' },
  { id: 20, initialRotation: 1710, delay: 9.5, symbol: '♫' }
];

  

  return (
    <div style={containerStyle} className="music-spinner-isolated">
      <div style={spinnerContainerStyle}>
        {/* Background circle */}
        <motion.div 
          style={backgroundCircleStyle}
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Center disc */}
        <motion.div 
          style={centerDiscStyle}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 4,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <div style={innerDiscStyle}>
            <div style={innerDotStyle}></div>
          </div>
        </motion.div>

        {/* Rings */}
        {[100, 140].map((size, index) => (
          <motion.div
            key={\`ring-\${index}\`}
            style={ringStyle(size)}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Orbiting notes */}
        {notePositions.map((note) => (
          <motion.div
            key={note.id}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transformOrigin: 'center center'
            }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              delay: note.delay
            }}
          >
            <motion.div
              style={{
                ...noteStyle,
                left: '50%',
                top: '-15px',
                marginLeft: '-15px'
              }}
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: note.delay / 2
              }}
            >
              {note.symbol}
            </motion.div>
          </motion.div>
        ))}
        
        {/* Loading text */}
        <motion.div 
          style={loadingTextStyle}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          LOADING MUSIC
        </motion.div>
      </div>
    </div>
  );
};

export default IsolatedMusicSpinner;
`];export{e as default};
//# sourceMappingURL=day45-Fx8iCuRv.js.map