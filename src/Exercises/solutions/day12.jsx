const solutionCode1 = `
// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import lessonRoutes from './routes/lessonRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/lessons', lessonRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`;

const solutionCode2 = `
// backend/routes/lessonRoutes.js

import express from 'express';
import LessonSchedule from '../models/lessonScheduleSchema.js';

const router = express.Router();

// Create a new lesson
router.post('/', async (req, res) => {
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

// Get all lessons
router.get('/', async (req, res) => {
  try {
    const lessons = await LessonSchedule.find().populate('teacher').populate('student');
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a lesson by ID
router.get('/:id', async (req, res) => {
  try {
    const lesson = await LessonSchedule.findById(req.params.id).populate('teacher').populate('student');
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a lesson by ID
router.put('/:id', async (req, res) => {
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

// Delete a lesson by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedLesson = await LessonSchedule.findByIdAndDelete(req.params.id);
    if (!deletedLesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
 
];
