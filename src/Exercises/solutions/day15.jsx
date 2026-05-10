const solutionCode1 = `
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

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`;

const solutionCode2 = `
// backend/routes/testimonialRoutes.js

import express from 'express';
import Testimonial from '../models/testimonialModel.js';

const router = express.Router();


router.post('/', async (req, res) => {
  const { user, content, rating } = req.body;

  try {
    const newTestimonial = new Testimonial({
      user,
      content,
      rating,
    });

    const createdTestimonial = await newTestimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error creating testimonial', error: error.message });
  }
});

// get all 
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().populate('user', 'name email'); 
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
  }
});

// get by specific user
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const testimonials = await Testimonial.find({ user: userId }).populate('user', 'name email');
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching testimonials for user', error: error.message });
  }
});

// update (approval, rating, content)
router.put('/:id', async (req, res) => {
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

// Delete testimonial
router.delete('/:id', async (req, res) => {
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

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
 
];
