var e=[`
// backend/routes/lessonRoutes.js

import express from "express";
import LessonSchedule from "../models/lessonScheduleSchema.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", async (req, res) => {
  try {
    const lessons = await LessonSchedule.find()
      .populate("teacher")
      .populate("student");
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const lesson = await LessonSchedule.findById(req.params.id)
      .populate("teacher")
      .populate("student");
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Protected routes (Admin only)
router.post("/", protect, admin, async (req, res) => {
  const { teacher, lessonType, date, time, location, status } = req.body;
  
  if (!teacher || !lessonType || !date || !time || !location || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newLesson = new LessonSchedule({
      teacher,
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
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/:id", protect, admin, async (req, res) => {
  const { teacher, student, lessonType, date, time, location, status } =
    req.body;

  try {
    const updatedLesson = await LessonSchedule.findByIdAndUpdate(
      req.params.id,
      { teacher, student, lessonType, date, time, location, status },
      { new: true, runValidators: true }
    )
      .populate("teacher")
      .populate("student");

    if (!updatedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
// backend/routes/teacherRoutes.js

import express from 'express';
import User from '../models/userSchema.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Fetch all teachers (Admin only)
router.get('/', protect, admin, async (req, res) => {
  try {
    const teachers = await User.find({ role: 'Teacher' }).select('-password');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a teacher's profile (Admin only)
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const teacher = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select('-password');
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/teachers', protect, admin, async (req, res) => {
  try {
    const teachers = await User.find({ role: 'Teacher' }).select('-password');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
`,`
// src/pages/Services.js

import { useState, useEffect } from "react";
import "../styles/services.css";

const ServicesPage = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
        const response = await fetch(\`\${backendUrl}/api/lessons\`);
        if (!response.ok) {
          throw new Error("Failed to fetch lessons");
        }
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div className='services-page'>
      <header className='services-header'>
        <h1>Our Lessons</h1>
        <p>Explore our lessons and start your musical journey today!</p>
      </header>
      <div className='lessons-grid'>
        {lessons.map((lesson) => (
          <div key={lesson._id} className='lesson-card'>
            <div className='lesson-icon'>🎵</div>
            <h2>{lesson.lessonType}</h2>
            <p>Teacher: {lesson.teacher?.name}</p>
            <p>Date: {new Date(lesson.date).toLocaleDateString()}</p>
            <p>Time: {lesson.time}</p>
            <p>Location: {lesson.location}</p>
            <p>Status: {lesson.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
`,`
// scr/pages/admin/AdminDashboard.js

import { useState } from "react";
import BlogManagement from "./BlogManagement/BlogManagement.js";
import LessonManagement from "./LessonManagement/LessonManagement.js";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("blogs")}
          className={activeTab === "blogs" ? "active" : ""}
        >
          Blogs
        </button>
        <button
          onClick={() => setActiveTab("lessons")}
          className={activeTab === "lessons" ? "active" : ""}
        >
          Lessons
        </button>
      </div>

      {activeTab === "blogs" && <BlogManagement />}
      {activeTab === "lessons" && <LessonManagement />}
    </div>
  );
};

export default AdminDashboard;
`];export{e as default};
//# sourceMappingURL=day31-uZm2aPJH.js.map