var e=[`
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
import teacherRoutes from './routes/teacherRoutes.js';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", 'https://musicacademy-kpf5.onrender.com', "https://musiccademy.netlify.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Serve static files from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
`,`
// backend/models/blogPostSchema.js

import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [String],
    thumbnail: { type: String },
    published: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("BlogPost", blogPostSchema);
`,`
// backend/routes/authRoutes.js

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
      secure: true,
      sameSite: "none",
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
    res
      .status(500)
      .json({ message: \`Error registering user: \${error.message}\` });
  }
});

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

    // Set the token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Return the user object in the response
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

`,`
// backend/routes/blogRoutes.js

import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import BlogPost from '../models/blogPostSchema.js';
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only images are allowed"), false); 
  }
};

const upload = multer({
  storage,
  fileFilter, 
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 
});

router.post("/", protect, admin, upload.single("thumbnail"), async (req, res) => {
  if (req.fileValidationError) {
    return res.status(400).json({ message: req.fileValidationError });
  }

  const { title, content, tags = [] } = req.body;
  const thumbnail = req.file ? req.file.path : null;
  const author = req.user._id;

  console.log("Request Body:", req.body);
  console.log("Uploaded File:", req.file);

  try {
    const blogPost = new BlogPost({ title, content, author, tags, thumbnail });
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put('/:id', protect, admin, async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', 'name');
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id).populate('author', 'name');
    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
`,`
// src/pages/Auth.js

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

    const backendUrl = \`\${process.env.REACT_APP_API_URL}\`;
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
        if (!data.user) {
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

`,`
// src/pages/Blog.js

import { useState, useEffect } from "react";
import "../styles/blog.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(\`\${process.env.REACT_APP_API_URL}/api/blogs\`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Our Blog</h1>
        <p>Discover tips, tricks, and stories from our music experts.</p>
      </header>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <img
              src={\`\${process.env.REACT_APP_API_URL}/\${blog.thumbnail}\`} 
              alt={blog.title}
              className="blog-thumbnail"
            />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <span className="date">{new Date(blog.createdAt).toLocaleDateString()}</span>
              <p>{blog.content.substring(0, 100)}...</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
`];export{e as default};
//# sourceMappingURL=day28-BNInO7Zd.js.map