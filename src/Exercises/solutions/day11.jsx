const solutionCode1 = `
// backend/routes/blogRoutes.js

import express from 'express';
import BlogPost from '../models/blogPostSchema.js'; // Adjust the path as needed

const router = express.Router();

// create 
router.post('/', async (req, res) => {
    const { title, content, author, tags } = req.body;

    try {
        const blogPost = new BlogPost({ title, content, author, tags });
        await blogPost.save();
        res.status(201).json(blogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//  all blog posts
router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find().populate('author', 'name'); 
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//  single blog post by ID
router.get('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id).populate('author', 'name');
        if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
        res.json(blogPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// update 
router.put('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Run schema validators
        });
        if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
        res.json(blogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// delete 
router.delete('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
        res.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

`;

const solutionCode2 = `
// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
