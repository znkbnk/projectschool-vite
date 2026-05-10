const solutionCode1 = `
// server/controllers/productController.js

import Product from '../models/Product.js';

export const getProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category, minPrice, maxPrice, search } = req.query;
    const query = {};
    if (category) query.category = category;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) query.$text = { $search: search };
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select('name description price stock category images averageRating numReviews createdAt updatedAt');
    const total = await Product.countDocuments(query);
    res.json({
      products,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('ratings.user', 'name email');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ product });
  } catch (error) {
    next(error);
  }
};
`;

const solutionCode2 = `
// server/routes/productRoutes.js

import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);

export default router;
`;
const solutionCode3 = `
// server/server.js

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';


dotenv.config();
@@ -21,6 +22,7 @@ app.use(express.urlencoded({ extended: true }));
//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
`;
const solutionCode4 = `
// server/seeder.js

import dotenv from 'dotenv';
import Product from './models/Product.js'; 
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const products = [
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life.",
    price: 25.99,
    stock: 100,
    category: "electronics",
    images: ["https://images.pexels.com/photos/34030114/pexels-photo-34030114.jpeg"],
    ratings: [],
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Cotton T-Shirt",
    description: "Comfortable cotton t-shirt in multiple colors.",
    price: 15.0,
    stock: 50,
    category: "clothing",
    images: ["https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg"],
    ratings: [],
    averageRating: 0,
    numReviews: 0,
  },
];

const importData = async () => {
  try {
    
    await Product.insertMany(products);
    console.log('Mock products added!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,

];


