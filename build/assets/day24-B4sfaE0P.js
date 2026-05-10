var e=[`
// backend/middleware/authMiddelware.js

import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';
import asyncHandler from 'express-async-handler';

// rotect routes/require authentication
const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user.role = decoded.role; // attach role to req.user

        next();
    } catch {
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
});


const admin = (req, res, next) => {
    if (req.user && req.user.role === 'Admin') {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
};

export { protect, admin };

`,`
// backend/models/create-admin.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./userSchema.js";

dotenv.config({ path: "../.env" });

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI environment variable is missing!");
  process.exit(1); // Exit if MONGO_URI is not set
}

const createAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const name = "Admin User";
    const email = "admin@example.com";
    const password = "Admin123"; // Use a strong password in production
    const role = "Admin";

    const adminExists = await User.findOne({ email });
    if (adminExists) {
      console.log("Admin user already exists");
      await mongoose.disconnect();
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      profilePicture: "http://example.com/default-admin.jpg",
      contactNumber: "123-456-7890",
      address: "123 Admin Street, City, Country",
    });

    console.log("Admin user created successfully:", admin);

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error creating admin user:", error.message);
    process.exit(1); // Exit with error
  }
};

createAdmin();

`,`
// backend/routes/blogRoutes.js

import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import BlogPost from '../models/blogPostSchema.js';

const router = express.Router();

// Create a new blog post (Admin only)
router.post('/', protect, admin, async (req, res) => {
  const { title, content, author, tags } = req.body;

  try {
    const blogPost = new BlogPost({ title, content, author, tags });
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a blog post (Admin only)
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

// Delete a blog post (Admin only)
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all blog posts (Public)
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', 'name');
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch a single blog post by ID (Public)
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
// backend/routes/lessonRoutes.js

import express from 'express';
import LessonSchedule from '../models/lessonScheduleSchema.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', async (req, res) => {
  try {
    const lessons = await LessonSchedule.find().populate('teacher').populate('student');
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const lesson = await LessonSchedule.findById(req.params.id).populate('teacher').populate('student');
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Protected routes (Admin only)
router.post('/', protect, admin, async (req, res) => {
  const { teacher, student, lessonType, date, time, location, status } = req.body;

  try {
    const newLesson = new LessonSchedule({
      teacher,
      student,
      lessonType,
      date,
      time,
      location,
      status
    });

    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', protect, admin, async (req, res) => {
  const { teacher, student, lessonType, date, time, location, status } = req.body;

  try {
    const updatedLesson = await LessonSchedule.findByIdAndUpdate(
      req.params.id,
      { teacher, student, lessonType, date, time, location, status },
      { new: true, runValidators: true }
    ).populate('teacher').populate('student');

    if (!updatedLesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const deletedLesson = await LessonSchedule.findByIdAndDelete(req.params.id);
    if (!deletedLesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json({ message: 'Lesson deleted successfully' });
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

export default router;
`,`
// backend/routes/testimonialRoutes.js

import express from 'express';
import Testimonial from '../models/testimonialSchema.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().populate('user', 'name email');
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const testimonials = await Testimonial.find({ user: userId }).populate('user', 'name email');
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching testimonials for user', error: error.message });
  }
});

// Protected routes (Admin only)
router.post('/', protect, admin, async (req, res) => {
  const { user, content, rating } = req.body;

  try {
    const newTestimonial = new Testimonial({ user, content, rating });
    const createdTestimonial = await newTestimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error creating testimonial', error: error.message });
  }
});

router.put('/:id', protect, admin, async (req, res) => {
  const { content, rating, approved } = req.body;
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { content, rating, approved },
      { new: true }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error updating testimonial', error: error.message });
  }
});

router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deletedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting testimonial', error: error.message });
  }
});

export default router;
`,`
// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
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

app.use(cors());
app.use(express.json()); 

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

`];export{e as default};
//# sourceMappingURL=day24-B4sfaE0P.js.map