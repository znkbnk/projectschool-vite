const solutionCode1 = `
//server/controllers/authController.js

import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import RefreshToken from '../models/RefreshToken.js';
import crypto from 'crypto';


const generateTokens = async (user) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' },
  );

  const refreshToken = jwt.sign(
    { id: user._id, timestamp: Date.now() },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' },
  );

    const hashedToken = crypto
    .createHash('sha256')
    .update(refreshToken)
    .digest('hex');

  await RefreshToken.deleteMany({ user: user._id });
  await RefreshToken.create({
    user: user._id,
    token: hashedToken,
  });

  return { accessToken, refreshToken };
};

export const register = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
      }

      const { name, email, password, addresses } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          message: 'Email already in use',
        });
      }

      const user = new User({
        name,
        email,
        password,
        addresses: addresses || [],
      });
      await user.save();

      const { accessToken, refreshToken: newRefreshToken } =
        await generateTokens(user);

      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(201).json({
        accessToken,
        user: {
          id: user._id,
          name,
          email,
          role: user.role,
          addresses: user.addresses,
        },
      });
    } catch (error) {
      next(error);
    }
  },
];

export const login = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email }).select('+password');
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const { accessToken, refreshToken } = await generateTokens(user);

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({
        accessToken,
        user: {
          id: user._id,
          name: user.name,
          email,
          role: user.role,
          addresses: user.addresses,
        },
      });
    } catch (error) {
      next(error);
    }
  },
];

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(401).json({ message: 'No refresh token provided' });
    }
    const hashedToken = crypto
      .createHash('sha256')
      .update(refreshToken)
      .digest('hex');

    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedToken) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      await RefreshToken.deleteOne({ token: hashedToken });
      return res.status(401).json({ message: 'Expired refresh token' });
    }

    const user = await User.findById(payload.id);
    if (!user) {
      await RefreshToken.deleteOne({ token: hashedToken });
      return res.status(401).json({ message: 'User not found' });
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await generateTokens(user);

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        addresses: user.addresses,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        addresses: user.addresses,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};
`;

const solutionCode2 = `
import mongoose from 'mongoose';

export const validateObjectId = (req, res, next) => {
  const id = req.params.id;
  
  if (id && !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  
  next();
};
`;
const solutionCode3 = `
import express from 'express';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getAllOrders,
} from '../controllers/orderController.js';
import {
  authMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js';
import { validateObjectId } from '../middleware/validateId.js';

const router = express.Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);
router.get('/all', [authMiddleware, adminMiddleware], getAllOrders);
router.get('/:id', validateObjectId, authMiddleware, getOrderById);
router.patch(
  '/:id',
  validateObjectId,
  [authMiddleware, adminMiddleware],
  updateOrder,
);
router.delete(
  '/:id',
  validateObjectId,
  [authMiddleware, adminMiddleware],
  deleteOrder,
);

export default router;
`;
const solutionCode4 = `
//server/routes/productRoutes.js

import express from 'express';
import { getProducts, getCategories, getProductById, createProduct, updateProduct, deleteProduct, addRating, editRating, getProductRatings, deleteRating } from '../controllers/productController.js';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware.js';
import { validateObjectId } from '../middleware/validateId.js';

const router = express.Router();

router.get('/categories', getCategories);
router.get('/', getProducts);
router.get('/:id',validateObjectId, getProductById);
router.post('/', [authMiddleware, adminMiddleware], createProduct);
router.patch('/:id',validateObjectId, [authMiddleware, adminMiddleware], updateProduct);
router.delete('/:id',validateObjectId, [authMiddleware, adminMiddleware], deleteProduct);
router.post('/:id/ratings',validateObjectId, authMiddleware, addRating);
router.patch('/:id/ratings',validateObjectId, authMiddleware, editRating);
router.get('/:id/ratings',validateObjectId, getProductRatings);
router.delete('/:id/ratings',validateObjectId, authMiddleware, deleteRating);

export default router;
`;
const solutionCode5 = `
//server/routes/userRoutes.js

import express from 'express';
import {
  getProfile,
  updateProfile,
  getUserById,
  getAllUsers,
  updateUserRole,
} from '../controllers/userController.js';
import {
  authMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js';
import { validateObjectId } from '../middleware/validateId.js';

const router = express.Router();

router.get('/profile', authMiddleware, getProfile);
router.patch('/profile', authMiddleware, updateProfile);
router.get('/', [authMiddleware, adminMiddleware], getAllUsers);
router.get('/:id',validateObjectId, [authMiddleware, adminMiddleware], getUserById);
router.patch('/:id/role',validateObjectId, [authMiddleware, adminMiddleware], updateUserRole);

export default router;
`;
const solutionCode6 = `
// server/server.js

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import hpp from 'hpp';

dotenv.config();

connectDB();

const app = express();
app.use(helmet());

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 500, // 500 requests per IP
  message: { message: 'Too many requests, please try again later.' },
  standardHeaders: true, // return rate limitt info in RateLimit eaders
  legacyHeaders: false, // disable deprecated X-ratelimit headera
});
app.use(globalLimiter);

const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50, // 50 requests per 15 minutes
  message: { message: 'Too many attempts, please try again later.' },
});

const sanitize = (obj) => {
  if (obj === null || typeof obj !== 'object') return;
  for (const key in obj) {
    if (key.startsWith('$') || key.includes('.')) {
      delete obj[key];
    } else if (typeof obj[key] === 'object') {
      sanitize(obj[key]);
    }
  }
};

const sanitizeRequest = (req, res, next) => {
  sanitize(req.body);
  sanitize(req.params);
  next();
};

app.use(morgan('dev'));
const allowedOrigins = [
  process.env.CLIENT_URL, // this we will add in our .env file
  'http://localhost:8080', // fallback for local devs
].filter(Boolean); // removes endefined values

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(sanitizeRequest);
app.use(hpp({ whitelist: ['category', 'images'] }));

//Routes
app.use('/api/users', strictLimiter);
app.use('/api/orders', strictLimiter);
app.use('/api/admin', strictLimiter);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(\`[\${new Date().toISOString()}] Error:\`, {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  const statusCode = err.status || err.statusCode || 500;

  if (process.env.NODE_ENV === 'production') {
    return res.status(statusCode).json({ message: 'Something went wrong' });
  }

  res.status(statusCode).json({ message: err.message, stack: err.stack });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
];
