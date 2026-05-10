var e=[`
// backend/routes/lessonRoutes.js

import express from "express";
import LessonSchedule from "../models/lessonScheduleSchema.js";
import User from "../models/userSchema.js";
import Message from "../models/messageSchema.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route: Get all lessons
router.get("/", async (req, res) => {
  try {
    const { teacher, date, status } = req.query;

    // Build the filter object dynamically
    let filter = {};

    if (teacher) {
      filter.teacher = teacher;
    }

    if (date) {
      // Assuming date comes in YYYY-MM-DD format
      const startOfDay = new Date(date);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setUTCHours(23, 59, 59, 999);
      filter.date = { $gte: startOfDay, $lte: endOfDay };
    }

    if (status) {
      filter.status = status;
    }

    const lessons = await LessonSchedule.find(filter)
      .populate("teacher", "name email")
      .populate("students", "name email")
      .sort({ date: 1, time: 1 }); // Sort by date and time ascending

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

  try {
    console.log("Received payload:", req.body);

    const teacherData = await User.findById(teacher);
    if (!teacherData || teacherData.role !== "Teacher") {
      return res.status(400).json({ message: "Invalid teacher" });
    }

    const availability = teacherData.teacherDetails?.availability || [];
    console.log("Teacher availability:", availability);

    if (!date || !time) {
      return res.status(400).json({ message: "Date and time are required" });
    }

    const lessonDateTime = new Date(\`\${date} \${time}\`);
    if (isNaN(lessonDateTime.getTime())) {
      console.log("Invalid lessonDateTime:", \`\${date} \${time}\`);
      return res.status(400).json({ message: "Invalid date or time format" });
    }

    const lessonDateStr = lessonDateTime.toISOString().split("T")[0];
    const lessonTime = time;

    const isAvailable = availability.some((slot) => {
      if (!slot.date) {
        console.log("Slot missing date:", slot);
        return false;
      }
      const slotDate = new Date(slot.date);
      return (
        slotDate.toISOString().split("T")[0] === lessonDateStr &&
        slot.timeSlots.includes(lessonTime)
      );
    });

    if (!isAvailable) {
      return res.status(400).json({
        message: \`Teacher is not available on \${lessonDateTime.toLocaleDateString(
          "en-US",
          { month: "long", day: "numeric", year: "numeric" }
        )} at \${lessonTime}\`,
      });
    }

    const newLesson = new LessonSchedule({
      teacher,
      students: [],
      lessonType,
      date,
      time,
      location,
      status,
      capacity: req.body.capacity || 10,
    });

    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    console.error("Error creating lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/book/:id", protect, async (req, res) => {
  if (req.user.role !== "Student") {
    return res.status(403).json({ message: "Only students can book lessons" });
  }

  try {
    const lesson = await LessonSchedule.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    // Check if lesson is already full
    if (lesson.students.length >= (lesson.capacity || 10)) {
      return res.status(400).json({ message: "This lesson is already full" });
    }

    if (lesson.students.includes(req.user._id)) {
      return res
        .status(400)
        .json({ message: "You have already booked this lesson" });
    }

    lesson.students.push(req.user._id);
    await lesson.save();

    await User.findByIdAndUpdate(
      req.user._id,
      { $push: { "studentDetails.enrolledLessons": lesson.lessonType } },
      { new: true }
    );

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin route: Update a lesson
router.put("/:id", protect, admin, async (req, res) => {
  const {
    teacher,
    students,
    lessonType,
    date,
    time,
    location,
    status,
    capacity,
  } = req.body;

  try {
    if (teacher || date || time) {
      const lesson = await LessonSchedule.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }

      const teacherId = teacher || lesson.teacher;
      const lessonDate = date || lesson.date;
      const lessonTime = time || lesson.time;

      const teacherData = await User.findById(teacherId);
      if (!teacherData || teacherData.role !== "Teacher") {
        return res.status(400).json({ message: "Invalid teacher" });
      }

      const lessonDateTime = new Date(\`\${lessonDate} \${lessonTime}\`);
      if (isNaN(lessonDateTime.getTime())) {
        console.log("Invalid lessonDateTime:", \`\${lessonDate} \${lessonTime}\`);
        return res.status(400).json({ message: "Invalid date or time format" });
      }

      const lessonDateStr = lessonDateTime.toISOString().split("T")[0];
      const formattedTime = lessonTime;

      const availability = teacherData.teacherDetails?.availability || [];
      const isAvailable = availability.some((slot) => {
        if (!slot.date) return false;
        const slotDate = new Date(slot.date);
        return (
          slotDate.toISOString().split("T")[0] === lessonDateStr &&
          slot.timeSlots.includes(formattedTime)
        );
      });

      if (!isAvailable) {
        return res.status(400).json({
          message: \`Teacher is not available on \${lessonDateTime.toLocaleDateString(
            "en-US",
            { month: "long", day: "numeric", year: "numeric" }
          )} at \${formattedTime}\`,
        });
      }
    }

    const updatedLesson = await LessonSchedule.findByIdAndUpdate(
      req.params.id,
      {
        teacher,
        students,
        lessonType,
        date,
        time,
        location,
        status,
        capacity,
      },
      { new: true, runValidators: true }
    )
      .populate("teacher", "name email")
      .populate("students", "name email");

    if (!updatedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json(updatedLesson);
  } catch (error) {
    console.error("Error updating lesson:", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/cancel/:id", protect, async (req, res) => {
  try {
    const lesson = await LessonSchedule.findById(req.params.id)
      .populate("teacher", "name email _id")
      .populate("students", "name email _id");

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    const isStudent = lesson.students.some(
      (student) => student._id.toString() === req.user._id.toString()
    );
    const isAdmin = req.user.role === "Admin";

    if (!isStudent && !isAdmin) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }

    const io = req.app.get("socketio");

    if (isStudent && req.user.role === "Student") {
      lesson.students = lesson.students.filter(
        (student) => student._id.toString() !== req.user._id.toString()
      );

      await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { "studentDetails.enrolledLessons": lesson.lessonType } },
        { new: true }
      );

      await lesson.save();

      if (io) {
        const notification = {
          lessonId: lesson._id,
          lessonType: lesson.lessonType,
          status: lesson.status,
          cancelledBy: "Student",
          userId: req.user._id,
          timestamp: new Date(),
        };
        io.to(lesson.teacher._id.toString()).emit("lessonUpdate", notification);
        lesson.students.forEach((student) => {
          io.to(student._id.toString()).emit("lessonUpdate", notification);
        });
        io.to(req.user._id.toString()).emit("lessonUpdate", notification);
      }

      res.json({ message: "Booking cancelled successfully", lesson });
    }

    if (isAdmin) {
      if (lesson.status === "Cancelled") {
        return res.status(400).json({ message: "Lesson is already cancelled" });
      }

      lesson.status = "Cancelled";
      await lesson.save();

      // Send message notifications to enrolled students only (not admin)
      const studentIds = lesson.students.map((student) => student._id);
      const messageContent = \`The lesson "\${
        lesson.lessonType
      }" scheduled for \${new Date(lesson.date).toLocaleDateString()} at \${
        lesson.time
      } has been cancelled by the admin.\`;

      const messagePromises = studentIds.map(async (studentId) => {
        if (studentId.toString() === req.user._id.toString()) return null;

        const message = new Message({
          sender: req.user._id,
          receiver: studentId,
          content: messageContent,
        });
        await message.save();
        return Message.findById(message._id)
          .populate("sender", "name email _id")
          .populate("receiver", "name email _id");
      });

      const sentMessages = (await Promise.all(messagePromises)).filter(Boolean);

      if (io) {
        const notification = {
          lessonId: lesson._id,
          lessonType: lesson.lessonType,
          status: lesson.status,
          cancelledBy: "Admin",
          timestamp: new Date(),
        };

        io.to(lesson.teacher._id.toString()).emit("lessonUpdate", notification);

        studentIds.forEach((studentId) => {
          if (studentId.toString() !== req.user._id.toString()) {
            // Skip admin
            io.to(studentId.toString()).emit("lessonUpdate", notification);
            const message = sentMessages.find(
              (msg) => msg?.receiver._id.toString() === studentId.toString()
            );
            if (message) {
              io.to(studentId.toString()).emit("receiveMessage", message);
            }
          }
        });

        io.to(req.user._id.toString()).emit("lessonUpdate", notification);
      }

      res.json({ message: "Lesson cancelled successfully", lesson });
    }
  } catch (error) {
    console.error("Error cancelling lesson:", error);
    res.status(500).json({ message: error.message });
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
// src/pages/Services.js

import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/services.css";
import CalendarView from "../components/CalendarView";

const ServicesPage = ({ user }) => {
  const [lessons, setLessons] = useState([]);
  const [viewMode, setViewMode] = useState("cards");
  const [filters, setFilters] = useState({
    date: "",
    status: "Scheduled",
  });
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchLessons = useCallback(async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const url = \`\${backendUrl}/api/lessons\${query ? \`?\${query}\` : ""}\`;
      const response = await fetch(url, { credentials: "include" });
      if (!response.ok) throw new Error("Failed to fetch lessons");
      const data = await response.json();

      if (user?.role === "Admin") {
        setLessons(data);
      } else if (user?.role === "Student") {
        const availableLessons = data.filter(
          (lesson) =>
            !lesson.students.some((student) => student._id === user._id)
        );
        setLessons(availableLessons);
      } else {
        setLessons(data);
      }
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  }, [backendUrl, user, filters]);

  useEffect(() => {
    fetchLessons();
  }, [fetchLessons]);

  const handleBookLesson = async (lessonId) => {
    try {
      const response = await fetch(
        \`\${backendUrl}/api/lessons/book/\${lessonId}\`,
        {
          method: "PUT",
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to book lesson");
      }

      alert("Lesson booked successfully!");
      fetchLessons();
    } catch (error) {
      alert(\`Error booking lesson: \${error.message}\`);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='services-page'>
      <header className='services-header'>
        <h1>Our Lessons</h1>
        <p>Explore our lessons and start your musical journey today!</p>

        <div className='tabs'>
          <button
            onClick={() => setViewMode("cards")}
            className={viewMode === "cards" ? "active" : ""}
          >
            Card View
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={viewMode === "calendar" ? "active" : ""}
          >
            Calendar View
          </button>
        </div>

        {viewMode === "cards" && (
          <div className='filter-section'>
            <input
              type='date'
              name='date'
              value={filters.date}
              onChange={handleFilterChange}
            />
            <select
              name='status'
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value='Scheduled'>Scheduled</option>
              <option value='Completed'>Completed</option>
              <option value='Cancelled'>Cancelled</option>
            </select>
            <button onClick={fetchLessons}>Apply Filters</button>
          </div>
        )}
      </header>

      {viewMode === "calendar" ? (
        <CalendarView user={user} />
      ) : (
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
                <p>
                  Spots: {lesson.students?.length || 0}/{lesson.capacity || 1}
                </p>
                {user?.role === "Admin" && (
                  <p>
                    Students:{" "}
                    {lesson.students.map((s) => s.name).join(", ") || "None"}
                  </p>
                )}
                {user?.role === "Student" &&
                  !lesson.students.some((s) => s._id === user._id) &&
                  lesson.status === "Scheduled" && (
                    <button
                      onClick={() => handleBookLesson(lesson._id)}
                      className='book-button'
                      disabled={lesson.students?.length >= lesson.capacity}
                    >
                      {lesson.students?.length >= lesson.capacity
                        ? "Fully Booked"
                        : "Book Now"}
                    </button>
                  )}
                {lesson.status === "Cancelled" && (
                  <span className='cancelled-label'>
                    This lesson is cancelled
                  </span>
                )}
              </div>
            ))
          ) : (
            <p>No available lessons at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

ServicesPage.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["Student", "Teacher", "Admin"]).isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default ServicesPage;

`,`
// src/pages/admin/LessonManagement/LessonListTable.js

import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./LessonListTable.css";

const LessonListTable = ({ refreshLessons, onEditLesson, filters }) => {
  const [lessons, setLessons] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchLessons = useCallback(async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const url = \`\${backendUrl}/api/lessons\${query ? \`?\${query}\` : ""}\`;
      const response = await fetch(url, {
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
  }, [filters, backendUrl]);

  useEffect(() => {
    fetchLessons();
  }, [refreshLessons, fetchLessons]);

  const handleDelete = async (id) => {
    try {
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

  const handleCancel = async (id) => {
    if (!confirm("Are you sure you want to cancel this lesson?")) return;

    try {
      const response = await fetch(\`\${backendUrl}/api/lessons/cancel/\${id}\`, {
        method: "PUT",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to cancel lesson");
      }

      alert("Lesson cancelled successfully!");
      fetchLessons();
    } catch (error) {
      alert(\`Error cancelling lesson: \${error.message}\`);
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
          <th>Capacity</th>
          <th>Students</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {lessons.map((lesson) => (
          <tr key={lesson._id}>
            <td data-label='Teacher'>{lesson.teacher?.name}</td>
            <td data-label='Lesson Type'>{lesson.lessonType}</td>
            <td data-label='Date'>
              {new Date(lesson.date).toLocaleDateString()}
            </td>
            <td data-label='Time'>{lesson.time}</td>
            <td data-label='Location'>{lesson.location}</td>
            <td data-label='Status'>{lesson.status}</td>
            <td data-label='Capacity'>
              {lesson.students?.length || 0}/{lesson.capacity || 10}
            </td>
            <td data-label='Students'>
              {lesson.students.map((s) => s.name).join(", ") || "None"}
            </td>
            <td data-label='Actions'>
              <div className='actions-container'>
                <button
                  className='delete-btn'
                  onClick={() => handleDelete(lesson._id)}
                >
                  Delete
                </button>
                <button
                  className='edit-btn'
                  onClick={() => onEditLesson(lesson)}
                >
                  Edit
                </button>
                {lesson.status !== "Cancelled" && (
                  <button
                    className='cancel-btn'
                    onClick={() => handleCancel(lesson._id)}
                  >
                    Cancel
                  </button>
                )}
              </div>
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
  filters: PropTypes.shape({
    date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default LessonListTable;

`,`
// src/pages/admin/LessonManagement/LessonManagement.js

import { useState } from "react";
import CreateLessonForm from "./CreateLessonForm.js";
import LessonListTable from "./LessonListTable.js";
import "./LessonManagement.css";

const LessonManagement = () => {
  const [refreshLessons, setRefreshLessons] = useState(false);
  const [lessonToEdit, setLessonToEdit] = useState(null);
  const [filters, setFilters] = useState({
    date: "",
    status: "",
  });

  const handleLessonCreated = () => {
    setRefreshLessons((prev) => !prev);
  };

  const handleEditLesson = (lesson) => {
    setLessonToEdit(lesson);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='lesson-management'>
      <h1>Lesson Management</h1>
      <div className='filter-section'>
        <input
          type='date'
          name='date'
          value={filters.date}
          onChange={handleFilterChange}
        />
        <select
          name='status'
          value={filters.status}
          onChange={handleFilterChange}
        >
          <option value=''>All Statuses</option>
          <option value='Scheduled'>Scheduled</option>
          <option value='Completed'>Completed</option>
          <option value='Cancelled'>Cancelled</option>
        </select>
      </div>
      <CreateLessonForm
        onLessonCreated={handleLessonCreated}
        lessonToEdit={lessonToEdit}
        setLessonToEdit={setLessonToEdit}
      />
      <LessonListTable
        refreshLessons={refreshLessons}
        onEditLesson={handleEditLesson}
        filters={filters}
      />
    </div>
  );
};

export default LessonManagement;

`];export{e as default};
//# sourceMappingURL=day44-BJgW5KpE.js.map