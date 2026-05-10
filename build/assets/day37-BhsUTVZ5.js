var e=[`
// backend/models/lessonScheduleSchema.js

import mongoose from 'mongoose';

const lessonScheduleSchema = new mongoose.Schema({
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    lessonType: { type: String, required: true }, //  "piano", "viol;in"
    date: { type: Date, required: true },
    time: { type: String, required: true }, 
    location: { type: String }, //  link or physical location
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' },
  }, { timestamps: true });
  
  export default mongoose.model('LessonSchedule', lessonScheduleSchema);
  
`,`
// backend/routes/lessonRoutes.js

import express from "express";
import LessonSchedule from "../models/lessonScheduleSchema.js";
import User from "../models/userSchema.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route: Get all lessons
router.get("/", async (req, res) => {
  try {
    const lessons = await LessonSchedule.find()
      .populate("teacher", "name email")
      .populate("students", "name email");
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Public route: Get lesson by ID
router.get("/:id", async (req, res) => {
  try {
    const lesson = await LessonSchedule.findById(req.params.id)
      .populate("teacher", "name email")
      .populate("students", "name email");
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin route: Create a lesson
router.post("/", protect, admin, async (req, res) => {
  const { teacher, lessonType, date, time, location, status } = req.body;

  if (!teacher || !lessonType || !date || !time || !location || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newLesson = new LessonSchedule({
      teacher,
      students: [],
      lessonType,
      date,
      time,
      location,
      status,
    });

    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    console.error("Error creating lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

// Student route: Book a lesson
router.put("/book/:id", protect, async (req, res) => {
  if (req.user.role !== "Student") {
    return res.status(403).json({ message: "Only students can book lessons" });
  }

  try {
    const lesson = await LessonSchedule.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    // Check if the student has already booked this lesson
    if (lesson.students.includes(req.user._id)) {
      return res
        .status(400)
        .json({ message: "You have already booked this lesson" });
    }

    // Add the student to the lesson
    lesson.students.push(req.user._id);
    await lesson.save();

    // Update user's enrolledLessons
    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { "studentDetails.enrolledLessons": lesson._id } },
      { new: true }
    );

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin route: Update a lesson
router.put("/:id", protect, admin, async (req, res) => {
  const { teacher, students, lessonType, date, time, location, status } =
    req.body;

  try {
    const updatedLesson = await LessonSchedule.findByIdAndUpdate(
      req.params.id,
      { teacher, students, lessonType, date, time, location, status },
      { new: true, runValidators: true }
    )
      .populate("teacher", "name email")
      .populate("students", "name email");

    if (!updatedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Admin route: Delete a lesson
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const deletedLesson = await LessonSchedule.findByIdAndDelete(req.params.id);
    if (!deletedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

`,`
// App.js

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
import Activity from "./pages/Activity"; // Import the Activity component
import { useState, useEffect } from "react";
import Messages from "./components/Messages";

function App() {
  const [user, setUser] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
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
      }
    };

    fetchUserData();
  }, [backendUrl]);

  // Handle successful registration/login
  const handleRegistrationSuccess = (registeredUser) => {
    setUser(registeredUser);
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
            path='/activity'
            element={user ? <Activity user={user} /> : <Navigate to='/auth' />} // Protect Activity route
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

`,`
// src/components/Navbar.js

// src/components/Navbar.jsx
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "react-feather";
import "../styles/navbar.css";
import { useState, useEffect } from "react";

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  // Fetch unread messages count
  useEffect(() => {
    if (!user) return;

    const fetchUnreadCount = async () => {
      try {
        const response = await fetch(\`\${backendUrl}/api/messages/\${user._id}\`, {
          credentials: "include",
        });
        const messages = await response.json();
        const count = messages.filter(
          (msg) => !msg.isRead && msg.receiver._id === user._id
        ).length;
        setUnreadCount(count);
      } catch (error) {
        console.error("Error fetching unread messages:", error);
      }
    };

    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 30000); // Poll every 30 seconds
    return () => clearInterval(interval);
  }, [user, backendUrl]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-header'>
          <span className='brand-name'>Music Academy</span>
        </div>

        <div
          className={\`navbar-toggle \${isMenuOpen ? "open" : ""}\`}
          onClick={toggleMenu}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <ul className={\`navbar-list \${isMenuOpen ? "open" : ""}\`}>
          <li className='navbar-item'>
            <Link className='dropdown-toggle' to='/'>
              <span>Home</span>
            </Link>
          </li>
          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Services</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/'>Home Option 1</Link>
                <ul className='sub-dropdown-menu'>
                  <li className='sub-dropdown-item'>
                    <Link to='/services'>Services</Link>
                  </li>
                  <li className='sub-dropdown-item'>
                    <Link to='/'>Sub Option 2</Link>
                  </li>
                </ul>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Home Option 2</Link>
                <ul className='sub-dropdown-menu'>
                  <li className='sub-dropdown-item'>
                    <Link to='/'>Sub Option 3</Link>
                  </li>
                  <li className='sub-dropdown-item'>
                    <Link to='/'>Sub Option 4</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* About Section with Dropdown */}
          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>About</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/about'>About</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Team</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Careers</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Blog</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/blog'>Blog</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Blog Team</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Testimonials</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/testimonials'>Testimonials</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Testimonials 2</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Contact</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Phone</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Social Media</Link>
              </li>
            </ul>
          </li>

          {/* Conditional Auth Button */}
          <li className='navbar-item'>
            {user ? (
              <div className='user-dropdown'>
                <div className='dropdown-toggle'>
                  <span>Welcome, {user.name}</span>
                  <ChevronDown className='chevron-icon' />
                </div>
                <ul className='dropdown-menu'>
                  <li className='dropdown-item'>
                    <Link to='/profile-setup'>Profile</Link>
                  </li>
                  {user.role === "Admin" && (
                    <li className='dropdown-item'>
                      <Link to='/admin'>Admin Dashboard</Link>
                    </li>
                  )}
                  {user.role === "Student" && (
                    <li className='dropdown-item'>
                      {" "}
                      <Link to='/activity'>Activity</Link>
                    </li>
                  )}
                  <li className='dropdown-item'>
                    <Link to='/messages'>
                      Messages{" "}
                      {unreadCount > 0 && (
                        <span className='unread-count'>({unreadCount})</span>
                      )}
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to='/auth' className='auth-button'>
                Register/Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    _id: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;

`,`
// src/pages/Activity.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/activity.css";

const Activity = ({ user }) => {
  const [bookedLessons, setBookedLessons] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchBookedLessons = async () => {
      if (!user || user.role !== "Student") return;

      try {
        const userResponse = await fetch(\`\${backendUrl}/auth/me\`, {
          credentials: "include",
        });
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const userData = await userResponse.json();
        const enrolledLessonIds =
          userData.studentDetails?.enrolledLessons || [];

        if (enrolledLessonIds.length === 0) {
          setBookedLessons([]);
          return;
        }

        const lessonsResponse = await fetch(\`\${backendUrl}/api/lessons\`, {
          credentials: "include",
        });
        if (!lessonsResponse.ok) throw new Error("Failed to fetch lessons");
        const allLessons = await lessonsResponse.json();

        const userBookedLessons = allLessons.filter((lesson) =>
          enrolledLessonIds.includes(lesson._id.toString())
        );
        setBookedLessons(userBookedLessons);
      } catch (error) {
        console.error("Error fetching booked lessons:", error);
        setBookedLessons([]);
      }
    };

    if (user) fetchBookedLessons();
  }, [user, backendUrl]);

  return (
    <div className='activity-container'>
      <h1>Your Booked Lessons</h1>
      {bookedLessons.length > 0 ? (
        <div className='lessons-list'>
          {bookedLessons.map((lesson) => (
            <div key={lesson._id} className='lesson-item'>
              <h3>{lesson.lessonType}</h3>
              <p>Teacher: {lesson.teacher?.name || "Unknown"}</p>
              <p>Date: {new Date(lesson.date).toLocaleDateString()}</p>
              <p>Time: {lesson.time}</p>
              <p>Location: {lesson.location || "Not specified"}</p>
              <p>Status: {lesson.status}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You haven’t booked any lessons yet.</p>
      )}
    </div>
  );
};

Activity.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    role: PropTypes.string,
    studentDetails: PropTypes.shape({
      enrolledLessons: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default Activity;

`,`
// src/pages/Services.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/services.css";

const ServicesPage = ({ user, setUser }) => {
  const [lessons, setLessons] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(\`\${backendUrl}/api/lessons\`, {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch lessons");
        const data = await response.json();

        if (user?.role === "Admin") {
          setLessons(data);
        } else if (user?.role === "Student") {
          // show lessons to the student whom hasnt bookedin yet
          const availableLessons = data.filter(
            (lesson) =>
              !lesson.students.some((student) => student._id === user._id)
          );
          setLessons(availableLessons);
        } else {
          // not logged in users see all lessons
          setLessons(data);
        }
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };
    fetchLessons();
  }, [backendUrl, user]);

  const handleBookLesson = async (lessonId) => {
    if (!user || user.role !== "Student") {
      alert("Please log in as a student to book a lesson.");
      return;
    }

    try {
      const response = await fetch(
        \`\${backendUrl}/api/lessons/book/\${lessonId}\`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to book lesson");
      }
      alert("Lesson booked successfully!");
      setLessons(lessons.filter((lesson) => lesson._id !== lessonId));

      // Refresh user data
      const userResponse = await fetch(\`\${backendUrl}/auth/me\`, {
        credentials: "include",
      });
      if (userResponse.ok) {
        const updatedUser = await userResponse.json();
        setUser(updatedUser);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='services-page'>
      <header className='services-header'>
        <h1>Our Lessons</h1>
        <p>Explore our lessons and start your musical journey today!</p>
      </header>
      <div className='lessons-grid'>
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div key={lesson._id} className='lesson-card'>
              <div className='lesson-icon'>🎵</div>
              <h2>{lesson.lessonType}</h2>
              <p>Teacher: {lesson.teacher?.name || "Unknown"}</p>
              <p>Date: {new Date(lesson.date).toLocaleDateString()}</p>
              <p>Time: {lesson.time}</p>
              <p>Location: {lesson.location || "Not specified"}</p>
              <p>Status: {lesson.status}</p>
              {user?.role === "Admin" && (
                <p>
                  Students:{" "}
                  {lesson.students.map((s) => s.name).join(", ") || "None"}
                </p>
              )}
              {user?.role === "Student" &&
                !lesson.students.some((s) => s._id === user._id) && (
                  <button
                    onClick={() => handleBookLesson(lesson._id)}
                    className='book-button'
                  >
                    Book Now
                  </button>
                )}
            </div>
          ))
        ) : (
          <p>No available lessons at the moment.</p>
        )}
      </div>
    </div>
  );
};

ServicesPage.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
    _id: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default ServicesPage;

`,`
// src/pages/admin/CreateLessonForm.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CreateLessonForm = ({
  onLessonCreated,
  lessonToEdit,
  setLessonToEdit,
}) => {
  const [formData, setFormData] = useState({
    teacher: "",
    lessonType: "",
    date: "",
    time: { hour: "1", minute: "00", period: "AM" },
    location: "",
    status: "Scheduled",
  });

  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherAvailability, setSelectedTeacherAvailability] =
    useState([]);

  useEffect(() => {
    if (lessonToEdit) {
      const [time, period] = lessonToEdit.time.split(" ");
      const [hour, minute] = time.split(":");
      setFormData({
        teacher: lessonToEdit.teacher._id,
        lessonType: lessonToEdit.lessonType,
        date: new Date(lessonToEdit.date).toISOString().split("T")[0],
        time: { hour, minute, period },
        location: lessonToEdit.location,
        status: lessonToEdit.status,
      });
    }
  }, [lessonToEdit]);

  // Fetch all teachers
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const backendUrl =
          process.env.REACT_APP_API_URL || "http://localhost:5001";
        const response = await fetch(\`\${backendUrl}/api/users\`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const users = await response.json();
        const teachers = users.filter((user) => user.role === "Teacher");
        setTeachers(teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  // update selected teachers availability when teacher changes
  useEffect(() => {
    if (formData.teacher) {
      const selectedTeacher = teachers.find(
        (teacher) => teacher._id === formData.teacher
      );
      setSelectedTeacherAvailability(
        selectedTeacher?.teacherDetails?.availability || []
      );
    } else {
      setSelectedTeacherAvailability([]);
    }
  }, [formData.teacher, teachers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      time: {
        ...prevData.time,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const timeString = \`\${formData.time.hour}:\${formData.time.minute} \${formData.time.period}\`;

    const payload = {
      teacher: formData.teacher,
      lessonType: formData.lessonType,
      date: formData.date,
      time: timeString,
      location: formData.location,
      status: formData.status,
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
        console.error("Server error response:", errorData);
        throw new Error(
          \`Failed to \${lessonToEdit ? "update" : "create"} lesson\`
        );
      }

      alert(\`Lesson \${lessonToEdit ? "updated" : "created"} successfully!\`);
      setFormData({
        teacher: "",
        lessonType: "",
        date: "",
        time: { hour: "1", minute: "00", period: "AM" },
        location: "",
        status: "Scheduled",
      });
      setLessonToEdit(null);
      onLessonCreated();
    } catch (error) {
      console.error(
        \`Error \${lessonToEdit ? "updating" : "creating"} lesson:\`,
        error
      );
      alert(
        \`Failed to \${
          lessonToEdit ? "update" : "create"
        } lesson. Please try again.\`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className='create-lesson-form'>
      <div className='form-group'>
        <label>Teacher:</label>
        <select
          name='teacher'
          value={formData.teacher}
          onChange={handleChange}
          required
        >
          <option value=''>Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher._id} value={teacher._id}>
              {teacher.name} (
              {teacher.teacherDetails?.expertise?.join(", ") || "No expertise"})
            </option>
          ))}
        </select>
        {/* Display selected teacher's availability */}
        {selectedTeacherAvailability.length > 0 && (
          <div className='teacher-availability'>
            <p>
              <strong>Availability:</strong>
            </p>
            <ul>
              {selectedTeacherAvailability.map((slot, index) => (
                <li key={index}>
                  {slot.day}: {slot.timeSlots.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        )}
        {formData.teacher && selectedTeacherAvailability.length === 0 && (
          <p className='no-availability'>
            This teacher has no availability set.
          </p>
        )}
      </div>
      <div className='form-group'>
        <label>Lesson Type:</label>
        <input
          type='text'
          name='lessonType'
          value={formData.lessonType}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Date:</label>
        <input
          type='date'
          name='date'
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Time:</label>
        <div className='time-selectors'>
          <select
            name='hour'
            value={formData.time.hour}
            onChange={handleTimeChange}
            required
            className='time-select'
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            name='minute'
            value={formData.time.minute}
            onChange={handleTimeChange}
            required
            className='time-select'
          >
            {["00", "15", "30", "45"].map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
          <select
            name='period'
            value={formData.time.period}
            onChange={handleTimeChange}
            required
            className='time-select'
          >
            <option value='AM'>AM</option>
            <option value='PM'>PM</option>
          </select>
        </div>
      </div>
      <div className='form-group'>
        <label>Location:</label>
        <input
          type='text'
          name='location'
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Status:</label>
        <select
          name='status'
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value='Scheduled'>Scheduled</option>
          <option value='Completed'>Completed</option>
          <option value='Cancelled'>Cancelled</option>
        </select>
      </div>
      <button type='submit' className='submit-btn'>
        {lessonToEdit ? "Update Lesson" : "Create Lesson"}
      </button>
      {lessonToEdit && (
        <button
          type='button'
          className='cancel-btn'
          onClick={() => setLessonToEdit(null)}
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
//src/pages/admin/LessonListTable.js

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./LessonListTable.css";

const LessonListTable = ({ refreshLessons, onEditLesson }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, [refreshLessons]);

  const fetchLessons = async () => {
    try {
      const backendUrl =
        process.env.REACT_APP_API_URL || "http://localhost:5001";
      const response = await fetch(\`\${backendUrl}/api/lessons\`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch lessons");
      }
      const data = await response.json();
      setLessons(data);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const backendUrl =
        process.env.REACT_APP_API_URL || "http://localhost:5001";
      const response = await fetch(\`\${backendUrl}/api/lessons/\${id}\`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to delete lesson");
      }

      alert("Lesson deleted successfully!");
      fetchLessons();
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert("Failed to delete lesson. Please try again.");
    }
  };

  return (
    <table className='lesson-table'>
      <thead>
        <tr>
          <th>Teacher</th>
          <th>Lesson Type</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Status</th>
          <th>Students</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {lessons.map((lesson) => (
          <tr key={lesson._id}>
            <td>{lesson.teacher?.name}</td>
            <td>{lesson.lessonType}</td>
            <td>{new Date(lesson.date).toLocaleDateString()}</td>
            <td>{lesson.time}</td>
            <td>{lesson.location}</td>
            <td>{lesson.status}</td>
            <td>{lesson.students.map((s) => s.name).join(", ") || "None"}</td>
            <td>
              <button
                className='delete-btn'
                onClick={() => handleDelete(lesson._id)}
              >
                Delete
              </button>
              <button className='edit-btn' onClick={() => onEditLesson(lesson)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

LessonListTable.propTypes = {
  refreshLessons: PropTypes.bool.isRequired,
  onEditLesson: PropTypes.func.isRequired,
};

export default LessonListTable;

`];export{e as default};
//# sourceMappingURL=day37-BhsUTVZ5.js.map