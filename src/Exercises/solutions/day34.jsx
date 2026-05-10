const solutionCode1 = `
// backend/server.js

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
import Message from './models/messageSchema.js';
import teacherRoutes from './routes/teacherRoutes.js';
import path from "path";
import { fileURLToPath } from "url";
import { Server } from 'socket.io'; 
import http from 'http'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001", "https://musicacademy-kpf5.onrender.com", "https://musiccademy.netlify.app"],
    methods: ["GET", "POST"],
    credentials: true,
  },
}); 

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", 'https://musicacademy-kpf5.onrender.com', "https://musiccademy.netlify.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

// Socket.IO connection handling
io.on('connection', (socket) => {
  // Join user-specific room based on userId
  socket.on('join', (userId) => {
    socket.join(userId);
  });

  // Handle sending messages
  socket.on('sendMessage', async (messageData) => {
    try {
      const { sender, receiver, content } = messageData;
      const message = new Message({ sender, receiver, content });
      await message.save();
  
      // Populate sender and receiver details
      const populatedMessage = await Message.findById(message._id)
        .populate('sender', 'name email _id') // Adjust fields as needed
        .populate('receiver', 'name email _id');
  
      // Emit the populated message
      io.to(sender).to(receiver).emit('receiveMessage', populatedMessage);
    } catch (error) {
      // Emit an error message back to the client
      socket.emit('messageError', {
        success: false,
        message: 'Failed to send message. Please try again.',
        error: error.message, 
      });
    }
  });

  socket.on('disconnect', () => {
    // Handle disconnect silently
  });
});

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

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`;

const solutionCode2 = `
// src/components/Messages.js

// Messages.jsx
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

  return <div></div>;
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

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
 
];
