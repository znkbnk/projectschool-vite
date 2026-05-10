const solutionCode1 = `
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
const server = http.createServer(app);
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
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

connectDB();

io.on("connection", (socket) => {
  socket.on("join", (userId) => {
    if (userId && userId !== "undefined") {
      socket.join(userId);
    }
  });

  socket.on("sendMessage", async (messageData) => {
    try {
      const { sender, receiver, content } = messageData;
      const message = new Message({ sender, receiver, content });
      await message.save();

      const populatedMessage = await Message.findById(message._id)
        .populate("sender", "name email id") 
        .populate("receiver", "name email id");

      const unreadCount = await Message.countDocuments({
        receiver: receiver,
        isRead: false,
      });
      io.to(receiver).emit("updateUnreadCount", unreadCount);

      io.to(sender).to(receiver).emit("receiveMessage", populatedMessage);
    } catch (error) {
      socket.emit("messageError", {
        success: false,
        message: "Failed to send message. Please try again.",
        error: error.message,
      });
    }
  });

  socket.on("disconnect", () => {});
});

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", authLimiter);

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`;

const solutionCode2 = `
// backend/routes/messageRoutes.js

import express from "express";
import Message from "../models/messageSchema.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new message
router.post("/", protect, async (req, res) => {
  const { sender, receiver, content } = req.body;

  try {
    const message = new Message({ sender, receiver, content });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get messages for a specific user
router.get("/:userId", protect, async (req, res) => {
  const { userId } = req.params;

  try {
    if (!userId || userId === "undefined") {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const messages = await Message.find({
      $or: [{ sender: userId }, { receiver: userId }],
    })
      .populate("sender", "name email")
      .populate("receiver", "name email")
      .sort({ sentAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get unread message count
router.get("/:userId/unread-count", protect, async (req, res) => {
  const { userId } = req.params;

  try {
    if (!userId || userId === "undefined") {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const count = await Message.countDocuments({
      receiver: userId,
      isRead: false,
    });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mark a message as read
router.patch("/:id/read", protect, async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Message.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    const io = req.app.get("socketio");
    const unreadCount = await Message.countDocuments({
      receiver: message.receiver,
      isRead: false,
    });
    io.to(message.receiver.toString()).emit("updateUnreadCount", unreadCount);

    res.json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a message
router.delete("/:id", protect, async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

`;
const solutionCode3 = `
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

  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/me\`, {
        credentials: "include",
      });
      if (!response.ok) {
        if (response.status === 401) {
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          setUser(null);
          return;
        }
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      // Normalize user data
      setUser({
        id: data._id || data.id,
        name: data.name,
        email: data.email,
        role: data.role,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  }, [backendUrl]);

  useEffect(() => {
    // Check for token cookie
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      fetchUserData();
    } else {
      setUser(null);
    }
  }, [fetchUserData]);

  const handleRegistrationSuccess = async (registeredUser) => {
    // Normalize user data
    setUser({
      id: registeredUser.id || registeredUser._id,
      name: registeredUser.name,
      email: registeredUser.email,
      role: registeredUser.role,
    });
    await fetchUserData();
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/logout\`, {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
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

`;
const solutionCode4 = `
// src/components/Messages.js

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
    if (!user || !user.id) {
      navigate("/auth");
      return;
    }

    socketRef.current = io(backendUrl, {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      socketRef.current.emit("join", user.id);
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
        message.sender?._id &&
        message.receiver?._id &&
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

    socketRef.current.on("messageError", ({ message }) => {
      setError(message);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user, backendUrl, navigate]);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(\`\${backendUrl}/api/messages/\${user.id}\`, {
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

    if (user && user.id) {
      fetchMessages();
    }
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
        )}&excludeId=\${user.id}\`,
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

      const otherUserId = senderId === user.id ? receiverId : senderId;
      const otherUser =
        senderId === user.id ? message.receiver : message.sender;

      if (!conversations[otherUserId]) {
        conversations[otherUserId] = {
          user: {
            _id: otherUser._id,
            name: otherUser.name || "Unknown",
            email: otherUser.email || "No email",
          },
          messages: [],
          lastMessage: message.sentAt,
          hasUnread: false, 
        };
      }
      conversations[otherUserId].messages.push(message);
      if (
        new Date(message.sentAt) >
        new Date(conversations[otherUserId].lastMessage)
      ) {
        conversations[otherUserId].lastMessage = message.sentAt;
      }
      // Check if message is unread and received by the current user
      if (!message.isRead && message.receiver._id === user.id) {
        conversations[otherUserId].hasUnread = true;
      }
    });

    return Object.values(conversations).sort(
      (a, b) => new Date(b.lastMessage) - new Date(a.lastMessage)
    );
  };

  const sendMessage = async (receiverId) => {
    if (!newMessage.trim()) return;

    const messageData = {
      sender: user.id,
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
            } \${conv.hasUnread ? "unread" : ""}\`}
            onClick={() => {
              setSelectedConversation({
                ...conv,
                messages: conv.messages.sort(
                  (a, b) => new Date(a.sentAt) - new Date(b.sentAt)
                ),
              });
              conv.messages
                .filter((msg) => !msg.isRead && msg.receiver._id === user.id)
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
                    msg.sender._id === user.id ? "right" : "left"
                  }\`}
                >
                  <div
                    className={\`message-bubble \${
                      msg.sender._id === user.id ? "right" : "left"
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default Messages;

`;
const solutionCode5 = `
// src/components/Navbar.js

import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "react-feather";
import "../styles/navbar.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    if (!user || !user.id) {
      setUnreadCount(0);
      return;
    }

    const socket = io(backendUrl, { withCredentials: true });

    socket.on("connect", () => {
      socket.emit("join", user.id);
    });

    socket.on("updateUnreadCount", (count) => {
      setUnreadCount(count);
    });

    const fetchUnreadCount = async () => {
      try {
        const response = await fetch(
          \`\${backendUrl}/api/messages/\${user.id}/unread-count\`,
          {
            credentials: "include",
          }
        );
        if (!response.ok) {
          if (response.status === 401) {
            setUnreadCount(0);
            return;
          }
          throw new Error("Failed to fetch unread count");
        }
        const { count } = await response.json();
        setUnreadCount(count);
      } catch (error) {
        console.error("Error fetching unread count:", error);
        setUnreadCount(0);
      }
    };

    fetchUnreadCount();

    return () => {
      socket.disconnect();
    };
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
          className={\`\navbar-toggle \${isMenuOpen ? "open" : ""}\`}
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
                      <Link to='/activity'>Activity</Link>
                    </li>
                  )}
                  {user.role === "Teacher" && (
                    <li className='dropdown-item'>
                      <Link to='/teacher-dashboard'>Teacher Dashboard</Link>
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
    id: PropTypes.string, 
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;

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
