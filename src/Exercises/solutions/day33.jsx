const solutionCode1 = `
// backend/models/testimonialSchema.js

import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String }, 
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true }, 
    approved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
`;

const solutionCode2 = `
// backend/routes/testimonialRoutes.js

import express from "express";
import Testimonial from "../models/testimonialSchema.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route: Get only approved testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true }).populate(
      "user",
      "name email"
    );
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials", error: error.message });
  }
});

// Public route: Get testimonials by user (only approved ones)
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const testimonials = await Testimonial.find({ user: userId, approved: true }).populate(
      "user",
      "name email"
    );
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials for user", error: error.message });
  }
});

// Protected route: Any authenticated user can submit a testimonial
router.post("/submit", protect, async (req, res) => {
  const { title, content, rating } = req.body;
  try {
    const newTestimonial = new Testimonial({
      user: req.user._id,
      title,
      content,
      rating,
      approved: false, // Pending approval
    });
    const createdTestimonial = await newTestimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error submitting testimonial", error: error.message });
  }
});

// Admin route: Get all testimonials (approved or not)
router.get("/all", protect, admin, async (req, res) => {
  try {
    const testimonials = await Testimonial.find().populate("user", "name email");
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials", error: error.message });
  }
});

// Admin route: Create a testimonial manually
router.post("/", protect, admin, async (req, res) => {
  const { user, title, content, rating, approved } = req.body;
  try {
    const newTestimonial = new Testimonial({ user, title, content, rating, approved });
    const createdTestimonial = await newTestimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error creating testimonial", error: error.message });
  }
});

// Admin route: Update a testimonial (including approval status)
router.put("/:id", protect, admin, async (req, res) => {
  const { title, content, rating, approved } = req.body;
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { title, content, rating, approved },
      { new: true }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error updating testimonial", error: error.message });
  }
});

// Admin route: Delete a testimonial
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting testimonial", error: error.message });
  }
});

export default router;
`;
const solutionCode3 = `
// src/pages/TestimonialsPage.js

import { useState, useEffect } from "react";
import "../styles/testimonials.css";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
        const response = await fetch(\`\${backendUrl}/api/testimonials\`);
        if (!response.ok) throw new Error("Failed to fetch testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  if (testimonials.length === 0) return <p>No testimonials available.</p>;

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Students Say</h2>
      <div className="testimonial-card">
        <p className="testimonial-text">{testimonials[activeIndex].content}</p>
        <div className="testimonial-author">{testimonials[activeIndex].user?.name || "Anonymous"}</div>
        <div className="testimonial-role">Rating: {testimonials[activeIndex].rating}/5</div>
      </div>
      <div className="testimonial-nav">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={\`nav-dot \${index === activeIndex ? "active" : ""}\`}
            onClick={() => handleNavClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;
`;
const solutionCode4 = `
// src/pages/admin/AdminDashboard.js

import { useState } from "react";
import BlogManagement from "./BlogManagement/BlogManagement.js";
import LessonManagement from "./LessonManagement/LessonManagement.js";
import "./AdminDashboard.css";
import TestimonialManagement from "./TestimonialManagment/TestimonialManagement.js";

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
        <button
          onClick={() => setActiveTab("testimonials")}
          className={activeTab === "testimonials" ? "active" : ""}
        >
          Testimonials
        </button>
      </div>

      {activeTab === "blogs" && <BlogManagement />}
      {activeTab === "lessons" && <LessonManagement />}
      {activeTab === "testimonials" && <TestimonialManagement />}
    </div>
  );
};

export default AdminDashboard;
`;
const solutionCode5 = `
solution
`;
const solutionCode6 = `
solution
`;
const solutionCode7 = `
solution
`;
const solutionCode8 = `
solution
`;
const solutionCode9 = `
solution
`;
const solutionCode10 = `
solution
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
  solutionCode7,
  solutionCode8,
  solutionCode9,
  solutionCode10,
];
