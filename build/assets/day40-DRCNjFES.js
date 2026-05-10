var e=[`
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
    // Handle disconnect silently
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

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`,`
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

    // Use the time as-is (e.g., "12:00 PM") since Date can parse it with a space
    const lessonDateTime = new Date(\`\${date} \${time}\`);
    if (isNaN(lessonDateTime.getTime())) {
      console.log("Invalid lessonDateTime:", \`\${date} \${time}\`);
      return res.status(400).json({ message: "Invalid date or time format" });
    }

    const lessonDateStr = lessonDateTime.toISOString().split("T")[0];
    const lessonTime = time; // Keep as "12:00 PM" for comparison

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
  const { teacher, students, lessonType, date, time, location, status } =
    req.body;

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
      { teacher, students, lessonType, date, time, location, status },
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

    // Only students (for booking) and admins (for lesson cancellation) are allowed
    if (!isStudent && !isAdmin) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }

    const io = req.app.get("socketio"); // Get Socket.IO instance

    if (isStudent && req.user.role === "Student") {
      // Student cancels their booking only
      lesson.students = lesson.students.filter(
        (student) => student._id.toString() !== req.user._id.toString()
      );

      await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { "studentDetails.enrolledLessons": lesson.lessonType } },
        { new: true }
      );

      // Lesson status remains unchanged (e.g., "Scheduled")
      await lesson.save();

      // Notify teacher and remaining students
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
      // Admin cancels the entire lesson
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
        // Skip if the studentId matches the admin's ID (just in case admin is enrolled)
        if (studentId.toString() === req.user._id.toString()) return null;

        const message = new Message({
          sender: req.user._id, // Admin as sender
          receiver: studentId,
          content: messageContent,
        });
        await message.save();
        return Message.findById(message._id)
          .populate("sender", "name email _id")
          .populate("receiver", "name email _id");
      });

      const sentMessages = (await Promise.all(messagePromises)).filter(Boolean); // Filter out null values

      // Notify via Socket.IO
      if (io) {
        const notification = {
          lessonId: lesson._id,
          lessonType: lesson.lessonType,
          status: lesson.status,
          cancelledBy: "Admin",
          timestamp: new Date(),
        };

        // Notify teacher
        io.to(lesson.teacher._id.toString()).emit("lessonUpdate", notification);

        // Notify students only (exclude admin from message receipt)
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

        // Notify admin of the status change (optional, no message sent to admin's inbox)
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
// src/compoennts/Messages.js

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import io from "socket.io-client";
import "../styles/messages.css";

const Messages = ({ user }) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNewMessageForm, setShowNewMessageForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const socketRef = useRef(null);
  const chatEndRef = useRef(null);
  const selectedConversationRef = useRef(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    selectedConversationRef.current = selectedConversation;
  }, [selectedConversation]);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    socketRef.current = io(backendUrl, {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      socketRef.current.emit("join", user._id);
    });

    socketRef.current.on("connect_error", () => {
      setError("Failed to connect to messaging service");
    });

    socketRef.current.on("receiveMessage", (message) => {
      setMessages((prev) => {
        if (prev.some((msg) => msg._id === message._id)) return prev;
        return [...prev, message];
      });

      const currentSelected = selectedConversationRef.current;
      if (
        currentSelected &&
        message.sender?._id && // Check if sender exists
        message.receiver?._id && // Check if receiver exists
        (message.sender._id === currentSelected.user._id ||
          message.receiver._id === currentSelected.user._id)
      ) {
        setSelectedConversation((prev) => ({
          ...prev,
          messages: prev.messages.some((msg) => msg._id === message._id)
            ? prev.messages
            : [...prev.messages, message],
          lastMessage: message.sentAt,
        }));
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user, backendUrl, navigate]);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(\`\${backendUrl}/api/messages/\${user._id}\`, {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [user, backendUrl]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation]);

  const handleSearchUsers = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(
        \`\${backendUrl}/api/users/search?query=\${encodeURIComponent(
          searchQuery
        )}&excludeId=\${user._id}\`,
        { credentials: "include" }
      );
      if (!response.ok) {
        const errorText = await response.json();
        throw new Error(
          \`Failed to search users: \${errorText.message || "Unknown error"}\`
        );
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const startNewConversation = (receiver) => {
    const existingConversation = getConversations().find(
      (conv) => conv.user._id === receiver._id
    );

    if (existingConversation) {
      setSelectedConversation(existingConversation);
    } else {
      setSelectedConversation({
        user: receiver,
        messages: [],
        lastMessage: null,
      });
    }

    setShowNewMessageForm(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const getConversations = () => {
    const conversations = {};
    messages.forEach((message) => {
      // Safety checks for sender and receiver
      if (!message.sender || !message.receiver) {
        console.warn(
          "Skipping message with missing sender or receiver:",
          message
        );
        return;
      }

      const senderId = message.sender._id;
      const receiverId = message.receiver._id;

      if (!senderId || !receiverId) {
        console.warn("Skipping message with missing IDs:", message);
        return;
      }

      const otherUserId = senderId === user._id ? receiverId : senderId;
      const otherUser =
        senderId === user._id ? message.receiver : message.sender;

      if (!conversations[otherUserId]) {
        conversations[otherUserId] = {
          user: {
            _id: otherUser._id,
            name: otherUser.name || "Unknown",
            email: otherUser.email || "No email",
          },
          messages: [],
          lastMessage: message.sentAt,
        };
      }
      conversations[otherUserId].messages.push(message);
      if (
        new Date(message.sentAt) >
        new Date(conversations[otherUserId].lastMessage)
      ) {
        conversations[otherUserId].lastMessage = message.sentAt;
      }
    });

    return Object.values(conversations).sort(
      (a, b) => new Date(b.lastMessage) - new Date(a.lastMessage)
    );
  };

  const sendMessage = async (receiverId) => {
    if (!newMessage.trim()) return;

    const messageData = {
      sender: user._id,
      receiver: receiverId,
      content: newMessage,
    };

    try {
      setIsLoading(true);
      socketRef.current.emit("sendMessage", messageData);
      setNewMessage("");
    } catch (error) {
      setError(\`Failed to send message: \${error.message}\`);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (messageId) => {
    try {
      await fetch(\`\${backendUrl}/api/messages/\${messageId}/read\`, {
        method: "PATCH",
        credentials: "include",
      });
    } catch (error) {
      setError(\`Error marking message as read: \${error.message}\`);
    }
  };

  const conversations = getConversations();

  return (
    <div className='messages-container'>
      {error && <div className='messages-error'>{error}</div>}
      {isLoading && <div className='messages-loading'>Loading...</div>}

      <div className='conversation-list'>
        <h2 className='conversation-header'>Conversations</h2>
        <button
          className='chat-send-button new-message-button'
          onClick={() => setShowNewMessageForm(!showNewMessageForm)}
        >
          {showNewMessageForm ? "Cancel" : "Start New Message"}
        </button>

        {showNewMessageForm && (
          <div className='new-message-form'>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearchUsers}
              className='chat-input-field'
              placeholder='Search by email or name...'
            />
            {searchResults.length > 0 && (
              <div className='search-results'>
                {searchResults.map((result) => (
                  <div
                    key={result._id}
                    className='search-result-item'
                    onClick={() => startNewConversation(result)}
                  >
                    <span className='conversation-name'>{result.name}</span>
                    <small className='conversation-email'>{result.email}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {conversations.length === 0 && !isLoading && !showNewMessageForm && (
          <p className='no-conversations'>No conversations yet</p>
        )}
        {conversations.map((conv) => (
          <div
            key={conv.user._id}
            className={\`conversation-item \${
              selectedConversation?.user._id === conv.user._id ? "active" : ""
            }\`}
            onClick={() => {
              setSelectedConversation({
                ...conv,
                messages: conv.messages.sort(
                  (a, b) => new Date(a.sentAt) - new Date(b.sentAt)
                ),
              });
              conv.messages
                .filter((msg) => !msg.isRead && msg.receiver._id === user._id)
                .forEach((msg) => markAsRead(msg._id));
            }}
          >
            <div className='conversation-details'>
              <h4 className='conversation-name'>{conv.user.name}</h4>
              <p className='conversation-email'>{conv.user.email}</p>
            </div>
            <p className='conversation-preview'>
              {conv.messages[conv.messages.length - 1].content.slice(0, 30)}
            </p>
            <small className='conversation-date'>
              {new Date(conv.lastMessage).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>

      <div className='chat-window'>
        {selectedConversation ? (
          <>
            <h3 className='chat-header'>
              Chat with: {selectedConversation.user.name}
            </h3>
            <div className='chat-messages'>
              {selectedConversation.messages.map((msg) => (
                <div
                  key={msg._id}
                  className={\`chat-message \${
                    msg.sender._id === user._id ? "right" : "left"
                  }\`}
                >
                  <div
                    className={\`message-bubble \${
                      msg.sender._id === user._id ? "right" : "left"
                    }\`}
                  >
                    {msg.content}
                  </div>
                  <div className='message-time'>
                    {new Date(msg.sentAt).toLocaleTimeString()}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className='chat-input'>
              <input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(selectedConversation.user._id);
                  }
                }}
                className='chat-input-field'
                placeholder='Type a message...'
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage(selectedConversation.user._id)}
                className='chat-send-button'
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className='chat-placeholder'>
            <p>Please start a new conversation or select an existing one</p>
          </div>
        )}
      </div>
    </div>
  );
};

Messages.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default Messages;

`,`
// src/pages/Activity.js

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
        // Fetch user's full data to get enrolledLessons
        const userResponse = await fetch(\`\${backendUrl}/auth/me\`, {
          credentials: "include",
        });
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const userData = await userResponse.json();
        const enrolledLessonTypes =
          userData.studentDetails?.enrolledLessons || [];

        if (enrolledLessonTypes.length === 0) {
          setBookedLessons([]);
          return;
        }

        // Fetch all lessons
        const lessonsResponse = await fetch(\`\${backendUrl}/api/lessons\`, {
          credentials: "include",
        });
        if (!lessonsResponse.ok) throw new Error("Failed to fetch lessons");
        const allLessons = await lessonsResponse.json();

        // Filter lessons: must match lessonType and include the student in students array
        const userBookedLessons = allLessons.filter(
          (lesson) =>
            enrolledLessonTypes.includes(lesson.lessonType) &&
            lesson.students.some(
              (student) => student._id.toString() === user._id.toString()
            )
        );
        setBookedLessons(userBookedLessons);
      } catch (error) {
        console.error("Error fetching booked lessons:", error);
        setBookedLessons([]);
      }
    };

    if (user) fetchBookedLessons();
  }, [user, backendUrl]);

  const handleCancelLesson = async (lessonId) => {
    if (!confirm("Are you sure you want to cancel this lesson?")) return;

    try {
      const response = await fetch(
        \`\${backendUrl}/api/lessons/cancel/\${lessonId}\`,
        {
          method: "PUT",
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to cancel lesson");
      }

      alert("Lesson booking cancelled successfully!");
      setBookedLessons(
        bookedLessons.filter((lesson) => lesson._id !== lessonId)
      );
    } catch (error) {
      alert(\`Error cancelling lesson: \${error.message}\`);
    }
  };

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
              {lesson.status !== "Cancelled" && (
                <button
                  onClick={() => handleCancelLesson(lesson._id)}
                  className='cancel-button'
                >
                  Cancel Booking
                </button>
              )}
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
// src/pages/ProfileSetup.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "../styles/profileSetup.css";

const ProfileSetup = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
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

  useEffect(() => {
    setFormData({
      name: user.name || "",
      profilePicture: user.profilePicture || "",
      contactNumber: user.contactNumber || "",
      address: user.address || "",
      teacherDetails: {
        bio: user.teacherDetails?.bio || "",
        expertise: user.teacherDetails?.expertise || [],
        availability: user.teacherDetails?.availability
          ? user.teacherDetails.availability.map((slot) => ({
              dateTime: slot.date ? new Date(slot.date) : null,
            }))
          : [],
      },
      studentDetails: user.studentDetails || { enrolledLessons: [] },
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTeacherDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      teacherDetails: { ...formData.teacherDetails, [name]: value },
    });
  };

  const handleExpertiseChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        expertise: value.split(",").map((item) => item.trim()),
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
          { dateTime: null },
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

  const handleDateTimeChange = (index, selectedDates) => {
    const date = selectedDates[0];
    const updatedAvailability = [...formData.teacherDetails.availability];
    updatedAvailability[index].dateTime = date;
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

    const formattedAvailability = formData.teacherDetails.availability
      .filter((slot) => slot.dateTime)
      .map((slot) => ({
        date: slot.dateTime,
        day: slot.dateTime.toLocaleString("en-US", { weekday: "long" }),
        timeSlots: [
          slot.dateTime.toLocaleTimeString("en-US", {
            hour12: true,
            hour: "numeric",
            minute: "2-digit",
          }),
        ],
      }));

    const payload = {
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        availability: formattedAvailability,
      },
    };

    try {
      const backendUrl =
        process.env.REACT_APP_API_URL || "http://localhost:5001";
      const response = await fetch(\`\${backendUrl}/auth/profile\`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        alert(\`Failed to update profile: \${data.message}\`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
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
                    <Flatpickr
                      value={availability.dateTime}
                      onChange={(selectedDates) =>
                        handleDateTimeChange(index, selectedDates)
                      }
                      options={{
                        enableTime: true,
                        time_24hr: false,
                        minuteIncrement: 15,
                        dateFormat: "F j, Y h:i K",
                        placeholder: "Select date and time",
                      }}
                      placeholder='Select date and time (e.g., March 31, 2025 2:00 PM)'
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
          date: PropTypes.instanceOf(Date),
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

`,`
// src/pages/Services.js

import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/services.css";

const ServicesPage = ({ user }) => {
  const [lessons, setLessons] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchLessons = useCallback(async () => {
    try {
      const response = await fetch(\`\${backendUrl}/api/lessons\`, {
        credentials: "include",
      });
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
  }, [backendUrl, user]); // Dependencies for useCallback

  useEffect(() => {
    fetchLessons();
  }, [fetchLessons]); // Only fetchLessons as dependency

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
      fetchLessons(); // Refresh lessons after booking
    } catch (error) {
      alert(\`Error booking lesson: \${error.message}\`);
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
                !lesson.students.some((s) => s._id === user._id) &&
                lesson.status === "Scheduled" && (
                  <button
                    onClick={() => handleBookLesson(lesson._id)}
                    className='book-button'
                  >
                    Book Now
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
    </div>
  );
};

ServicesPage.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
    _id: PropTypes.string,
  }),
};

export default ServicesPage;

`,`
// src/pages/admin/LessonListTable.js

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./LessonListTable.css";

const LessonListTable = ({ refreshLessons, onEditLesson }) => {
  const [lessons, setLessons] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

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
              {lesson.status !== "Cancelled" && (
                <button
                  className='cancel-btn'
                  onClick={() => handleCancel(lesson._id)}
                >
                  Cancel
                </button>
              )}
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
//# sourceMappingURL=day40-DRCNjFES.js.map