const solutionCode1 = `
// backend/server.js

// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import lessonRoutes from './routes/lessonRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import authRoutes from './routes/authRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/auth', authRoutes);
app.use('/api/teachers', teacherRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`;

const solutionCode2 = `
// backend/middleware/authMiddleware.js

import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    req.user.role = decoded.role;
    next();
  } catch {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.role === "Admin") {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};

export { protect, admin };

`;
const solutionCode3 = `
// backend/routes/AuthRoutes.js

// authRoutes.js
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";
import { protect } from "../middleware/authMiddleware.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
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
    res
      .status(500)
      .json({ message: \`Error registering user: \${error.message}\` });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id, user.role);

    // Set the token in an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
    });

    // Send the token in the response for debugging purposes
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token, // Include the token in the response for debugging
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: \`Error logging in user: \${error.message}\` });
  }
});

// Logout user
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// Get authenticated user info
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: \`Error fetching user: \${error.message}\` });
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
    const user = await User.findById(req.user.id);

    if (user) {
      user.name = name || user.name;
      user.profilePicture = profilePicture || user.profilePicture;
      user.contactNumber = contactNumber || user.contactNumber;
      user.address = address || user.address;

      if (user.role === "Teacher") {
        user.teacherDetails = teacherDetails || user.teacherDetails;
      }

      if (user.role === "Student") {
        user.studentDetails = studentDetails || user.studentDetails;
      }

      const updatedUser = await user.save();
      res.status(200).json({
        message: "Profile updated successfully",
        user: updatedUser,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: \`Error updating profile: \${error.message}\` });
  }
});

export default router;

`;
const solutionCode4 = `
// App.js

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import ProfileSetup from "./pages/ProfileSetup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import BlogManagement from "./pages/admin/BlogManagement";
import LessonManagement from "./pages/admin/LessonManagement";
import TestimonialManagement from "./pages/admin/TestimonialManagement";
import TeacherManagement from "./pages/admin/TeacherManagement";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(\`http://localhost:5001/auth/me\`, {
          credentials: "include", 
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUser(data); 
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

  // Handle successful registration/login
  const handleRegistrationSuccess = (registeredUser) => {
    setUser(registeredUser);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5001/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        localStorage.removeItem("token");
        setUser(null);
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
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />

          {/* Auth Route */}
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

          {/* Profile Setup Route */}
          <Route
            path='/profile-setup'
            element={
              user ? <ProfileSetup user={user} /> : <Navigate to='/auth' />
            }
          />          

          {/* Catch-all Route */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

`;
const solutionCode5 = `
// pages/Auth.js

import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/auth.css";

const Auth = ({ onRegistrationSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });
  const [error, setError] = useState("");

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const backendUrl = "http://localhost:5001";
    const url = isLogin
      ? \`\${backendUrl}/auth/login\`
      : \`\${backendUrl}/auth/register\`;
    const body = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (isLogin) {
        if (!data.token) {
          throw new Error("No token received from the server.");
        }
        onRegistrationSuccess(data.user);
      } else {
        setIsLogin(true);
        alert("Registration successful! Please log in.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {error && <p className='error-message'>{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='role'>Role</label>
                <div className='select-wrapper'>
                  <select
                    id='role'
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value='Student'>Student</option>
                    <option value='Teacher'>Teacher</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit' className='auth-button'>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleAuthMode} className='toggle-auth'>
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

`;
const solutionCode6 = `
// pages/ProfileSetup.js

// ProfileSetup.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/profileSetup.css";

const ProfileSetup = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    profilePicture: user.profilePicture || "",
    contactNumber: user.contactNumber || "",
    address: user.address || "",
    teacherDetails: user.teacherDetails || {
      bio: "",
      expertise: [],
      availability: [],
    },
    studentDetails: user.studentDetails || { enrolledLessons: [] },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTeacherDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        [name]: value,
      },
    });
  };

  const handleExpertiseChange = (e) => {
    const { value } = e.target;
    const expertiseArray = value.split(",").map((item) => item.trim());
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        expertise: expertiseArray,
      },
    });
  };

  const handleAvailabilityChange = (e, index, field) => {
    const { value } = e.target;
    const updatedAvailability = [...formData.teacherDetails.availability];
    if (field === "day") {
      updatedAvailability[index] = {
        ...updatedAvailability[index],
        day: value,
      };
    } else if (field === "timeSlots") {
      updatedAvailability[index] = {
        ...updatedAvailability[index],
        timeSlots: value.split(",").map((slot) => slot.trim()),
      };
    }

    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        availability: updatedAvailability,
      },
    });
  };

  const addAvailability = () => {
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        availability: [
          ...formData.teacherDetails.availability,
          { day: "", timeSlots: [] },
        ],
      },
    });
  };

  const removeAvailability = (index) => {
    const updatedAvailability = formData.teacherDetails.availability.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        availability: updatedAvailability,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(\`http://localhost:5001/auth/profile\`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        alert(\`Failed to update profile: \${data.message}\`);
      }
    } catch {
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <div className='profile-setup-container'>
      <h1>Profile Setup</h1>
      <form className='profile-setup-form' onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Picture URL:</label>
          <input
            type='text'
            name='profilePicture'
            value={formData.profilePicture}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type='text'
            name='contactNumber'
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {user.role === "Teacher" && (
          <div className='profile-role-section'>
            <h2>Teacher Details</h2>
            <div>
              <label>Bio:</label>
              <textarea
                name='bio'
                value={formData.teacherDetails.bio}
                onChange={handleTeacherDetailsChange}
              />
            </div>
            <div>
              <label>Expertise:</label>
              <textarea
                name='expertise'
                value={formData.teacherDetails.expertise.join(", ")}
                onChange={handleExpertiseChange}
                placeholder='Enter expertise as comma-separated values (e.g., piano, guitar)'
              />
            </div>
            <div>
              <label>Availability:</label>
              {formData.teacherDetails.availability.map(
                (availability, index) => (
                  <div key={index} className='availability-entry'>
                    <input
                      type='text'
                      placeholder='Day (e.g., Monday)'
                      value={availability.day}
                      onChange={(e) =>
                        handleAvailabilityChange(e, index, "day")
                      }
                    />
                    <input
                      type='text'
                      placeholder='Time Slots (e.g., 10:00 AM, 2:00 PM)'
                      value={availability.timeSlots.join(", ")}
                      onChange={(e) =>
                        handleAvailabilityChange(e, index, "timeSlots")
                      }
                    />
                    <button
                      type='button'
                      onClick={() => removeAvailability(index)}
                    >
                      Remove
                    </button>
                  </div>
                )
              )}
              <button type='button' onClick={addAvailability}>
                Add Availability
              </button>
            </div>
          </div>
        )}

        {user.role === "Student" && (
          <div className='profile-role-section'>
            <h2>Student Details</h2>
            <div>
              <label>Enrolled Lessons:</label>
              <textarea
                name='enrolledLessons'
                value={formData.studentDetails.enrolledLessons.join(", ")}
                onChange={(e) => {
                  const { value } = e.target;
                  setFormData({
                    ...formData,
                    studentDetails: {
                      ...formData.studentDetails,
                      enrolledLessons: value
                        .split(",")
                        .map((item) => item.trim()),
                    },
                  });
                }}
              />
            </div>
          </div>
        )}

        <button type='submit'>Save Profile</button>
      </form>
    </div>
  );
};

ProfileSetup.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    contactNumber: PropTypes.string,
    address: PropTypes.string,
    role: PropTypes.oneOf(["Student", "Teacher", "Admin"]).isRequired,
    teacherDetails: PropTypes.shape({
      bio: PropTypes.string,
      expertise: PropTypes.arrayOf(PropTypes.string),
      availability: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string,
          timeSlots: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    }),
    studentDetails: PropTypes.shape({
      enrolledLessons: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default ProfileSetup;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
 
];
