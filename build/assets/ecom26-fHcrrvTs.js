var e=[`
//server/controllers/authController.js

import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import RefreshToken from '../models/RefreshToken.js';

const generateTokens = async (user) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1m' },
  );

  const refreshToken = jwt.sign(
    { id: user._id, timestamp: Date.now() },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' },
  );

  await RefreshToken.deleteMany({ user: user._id });
  await RefreshToken.create({
    user: user._id,
    token: refreshToken,
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

    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!storedToken) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      await RefreshToken.deleteOne({ token: refreshToken });
      return res.status(401).json({ message: 'Expired refresh token' });
    }

    const user = await User.findById(payload.id);
    if (!user) {
      await RefreshToken.deleteOne({ token: refreshToken });
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

`,`
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const getOrCreateCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: req.user.id },
      { $setOnInsert: { items: [] } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    ).populate('items.productId', 'name price images stock');

    res.status(200).json({ cart });
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity = 1 } = req.body;
    if (!productId || quantity < 1) {
      return res
        .status(400)
        .json({ message: 'Valid productId and quantity (>=1) required' });
    }

    const product = await Product.findById(productId).select('stock price');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let availableStock = product.stock;
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );
    let newQuantity = quantity;
    if (existingItemIndex > -1) {
      newQuantity += cart.items[existingItemIndex].quantity;
    }

    if (availableStock < newQuantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity = newQuantity;
      cart.items[existingItemIndex].price = product.price;
      cart.items[existingItemIndex].addedAt = Date.now();
    } else {
      cart.items.push({
        productId,
        quantity,
        price: product.price,
        addedAt: Date.now(),
      });
    }

    await cart.save();
    await cart.populate('items.productId', 'name price images stock');

    res.status(200).json({ cart });
  } catch (error) {
    next(error);
  }
};

export const updateCartItemQty = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    if (!productId || quantity < 0) {
      return res
        .status(400)
        .json({ message: 'Valid productId and quantity (>=0) required' });
    }

    const product = await Product.findById(productId).select('stock');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not in cart' });
    }

    if (quantity === 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      if (product.stock < quantity) {
        return res.status(400).json({ message: 'Insufficient stock' });
      }
      cart.items[itemIndex].quantity = quantity;
      cart.items[itemIndex].addedAt = Date.now();
    }

    await cart.save();
    await cart.populate('items.productId', 'name price images stock');

    res.status(200).json({ cart });
  } catch (error) {
    next(error);
  }
};

export const removeFromCart = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    if (productId) {
      const itemExists = cart.items.some(
        (item) => item.productId.toString() === productId,
      );
      if (!itemExists) {
        return res.status(404).json({ message: 'Item not in cart' });
      }
      cart.items = cart.items.filter(
        (item) => item.productId.toString() !== productId,
      );
    } else {
      cart.items = [];
    }

    await cart.save();
    await cart.populate('items.productId', 'name price images stock');
    res.status(200).json({ cart });
  } catch (error) {
    next(error);
  }
};

`,`
//server/controllers/orderController.js

import Product from '../models/Product.js';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const createOrder = async (req, res, next) => {
  try {
    const { items, paymentMethod, shippingAddress } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ message: 'Items array is required and cannot be empty' });
    }
    if (!paymentMethod) {
      return res.status(400).json({ message: 'Payment method is required' });
    }
    if (
      !shippingAddress ||
      !shippingAddress.fullName ||
      !shippingAddress.street ||
      !shippingAddress.city ||
      !shippingAddress.country
    ) {
      return res.status(400).json({
        message:
          'Shipping address must include fullName, street, city, and country',
      });
    }
    const productIds = items.map((item) => item.productId);
    const dbProducts = await Product.find({ _id: { $in: productIds } });
    if (dbProducts.length !== productIds.length) {
      return res
        .status(400)
        .json({ message: 'One or more products not found' });
    }
    for (const item of items) {
      const dbProduct = dbProducts.find(
        (p) => p._id.toString() === item.productId,
      );
      if (dbProduct.stock < item.quantity) {
        return res.status(400).json({
          message: \`Insufficient stock for \${dbProduct.name}. Available: \${dbProduct.stock}\`,
        });
      }
    }
    const orderItems = items.map((item) => {
      const dbProduct = dbProducts.find(
        (p) => p._id.toString() === item.productId,
      );
      return {
        productId: item.productId,
        name: dbProduct.name,
        image: dbProduct.images[0] || '',
        price: dbProduct.price,
        quantity: item.quantity,
      };
    });
    const totalAmount = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const order = new Order({
      user: req.user.id,
      items: orderItems,
      shippingAddress,
      totalAmount,
      paymentMethod,
      status: 'pending',
      paymentStatus: 'pending',
    });
    await order.save();

    for (const item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    await Cart.findOneAndUpdate({ user: req.user.id }, { $set: { items: [] } });

    res.status(201).json({ order });
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .populate('items.productId', 'name images price');
    const total = await Order.countDocuments({ user: req.user.id });
    res.json({
      orders,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user.id,
    }).populate('items.productId', 'name images price');
    if (!order) {
      return res
        .status(404)
        .json({ message: 'Order not found or not authorized' });
    }
    res.json({ order });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const updates = req.body;
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    if (updates.paymentStatus === 'paid' && !updates.paidAt) {
      updates.paidAt = new Date();
    }
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true },
    ).populate('items.productId', 'name images price');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ order });
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .populate('items.productId', 'name images price')
      .populate('user', 'name email');
    const total = await Order.countDocuments({});
    res.json({
      orders,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

`,`
// server/controllers/productController.js
import Product from '../models/Product.js';

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Product.distinct('category');
    res.json({ categories: categories.filter(Boolean).sort() });
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      minPrice,
      maxPrice,
      search,
    } = req.query;
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
      .select(
        'name description price stock category images averageRating numReviews createdAt updatedAt',
      );
    const total = await Product.countDocuments(query);
    res.json({
      products,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      'ratings.user',
      'name email',
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      category,
      images,
      ratings = [],
    } = req.body;
    if (!name || !description || !price || typeof stock !== 'number') {
      return res.status(400).json({
        message:
          'Required fields: name, description, price, and stock must be provided',
      });
    }
    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
      images,
      ratings,
      averageRating: 0,
      numReviews: 0,
    });
    await product.save();
    res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updates = req.body;
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true },
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const addRating = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    if (!rating) {
      return res.status(400).json({ message: 'Rating is required' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const alreadyRated = product.ratings.some(
      (r) => r.user.toString() === req.user.id,
    );
    if (alreadyRated) {
      return res
        .status(400)
        .json({ message: 'User has already rated this product' });
    }
    product.ratings.push({
      user: req.user.id,
      rating,
      comment,
      createdAt: new Date(),
    });
    product.numReviews = product.ratings.length;
    product.averageRating =
      product.ratings.reduce((sum, r) => sum + r.rating, 0) /
      product.numReviews;
    await product.save();
    await product.populate('ratings.user', 'name email');
    res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
};

export const editRating = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    if (!rating) {
      return res.status(400).json({ message: 'Rating is required' });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const userRating = product.ratings.find(
      (r) => r.user.toString() === req.user.id,
    );
    if (!userRating) {
      return res
        .status(404)
        .json({ message: 'Rating not found for this user' });
    }
    userRating.rating = rating;
    userRating.comment = comment || '';
    userRating.createdAt = new Date();
    product.numReviews = product.ratings.length;
    product.averageRating =
      product.ratings.reduce((sum, r) => sum + r.rating, 0) /
      product.numReviews;
    await product.save();
    await product.populate('ratings.user', 'name email');
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const getProductRatings = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = 'createdAt:desc',
      minRating,
      maxRating,
    } = req.query;
    const product = await Product.findById(req.params.id).populate(
      'ratings.user',
      'name email',
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    let ratings = [...product.ratings];
    if (minRating || maxRating) {
      const min = minRating ? Number(minRating) : 1;
      const max = maxRating ? Number(maxRating) : 5;
      ratings = ratings.filter((r) => r.rating >= min && r.rating <= max);
    }
    const [sortField, sortOrder] = sortBy.split(':');
    const validFields = ['rating', 'createdAt'];
    const field = validFields.includes(sortField) ? sortField : 'createdAt';
    const order = sortOrder === 'asc' ? 1 : -1;
    ratings.sort((a, b) => {
      if (field === 'createdAt') {
        return order * (new Date(a.createdAt) - new Date(b.createdAt));
      }
      return order * (a.rating - b.rating);
    });
    const total = ratings.length;
    const paginatedRatings = ratings
      .slice((page - 1) * limit, page * limit)
      .map((rating) => ({
        _id: rating._id,
        user: rating.user,
        rating: rating.rating,
        comment: rating.comment,
        createdAt: rating.createdAt,
      }));
    res.json({
      ratings: paginatedRatings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteRating = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const userRatingIndex = product.ratings.findIndex(
      (r) => r.user.toString() === req.user.id,
    );
    if (userRatingIndex === -1) {
      return res
        .status(404)
        .json({ message: 'Rating not found for this user' });
    }
    product.ratings.splice(userRatingIndex, 1);
    product.numReviews = product.ratings.length;
    product.averageRating =
      product.ratings.length > 0
        ? product.ratings.reduce((sum, r) => sum + r.rating, 0) /
          product.ratings.length
        : 0;
    await product.save();
    await product.populate('ratings.user', 'name email');
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

`,`
//server/models/Order.js
import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    image: String,
    price: Number,
    quantity: Number,
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    items: [OrderItemSchema],
    shippingAddress: {
      fullName: String,
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
      phone: String,
    },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'paid', 'shipped', 'delivered', 'canceled'],
      default: 'pending',
      index: true,
    },
    paymentMethod: { type: String, enum: ['stripe', 'paypal', 'cod'] },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
    paidAt: Date,
  },
  { timestamps: true },
);

orderSchema.index({ createdAt: 1 });

export default mongoose.model('Order', orderSchema);

`,`
//server/models/Product.js
import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: String,
    createdAt: { type: Date, default: Date.now },
  },
  { _id: true },
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0, default: 0 },
    category: { type: String, index: true },
    images: [String],
    ratings: [RatingSchema],
    averageRating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  { timestamps: true },
);

productSchema.index({ name: 'text', description: 'text', category: 'text' });

export default mongoose.model('Product', productSchema);

`,`
//server/routes/authRoutes.js

import express from 'express';
import { rateLimit } from 'express-rate-limit';
import {
  register,
  login,
  getMe,
  logout,
  refresh,
} from '../controllers/AuthController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // 100 requests p[er IP
  message: 'Too many requests, please try again later.',
});

router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);
router.post('/refresh', authLimiter, refresh);
router.get('/me', authMiddleware, getMe);
router.post('/logout', logout);

export default router;

`,`
//client/src/components/ProductDetailPage.js

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as styles from './ProductDetailPage.module.css';
import { useAuth } from '../context/AuthContext';

const ProductDetailPage = () => {
  const { updateCartCount, user, fetchWithAuth } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviewForm, setReviewForm] = useState({ rating: 5, comment: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(\`http://localhost:5001/api/products/\${id}\`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Product not found');

        setProduct(data.product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product || product.stock < quantity) return;

    try {
      setAdding(true);
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setToast({ type: 'error', message: 'Please log in to add to cart' });
        return;
      }

      const res = await fetchWithAuth('http://localhost:5001/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product._id, quantity }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to add to cart');
      setToast({ type: 'success', message: \`Added \${quantity} to cart!\` });
      setQuantity(1);
      updateCartCount();
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setAdding(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const res = await fetchWithAuth(
        \`http://localhost:5001/api/products/\${id}/ratings\`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewForm),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setProduct(data.product);
      setReviewForm({ rating: 5, comment: '' });
      setToast({ type: 'success', message: 'Review added!' });
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className={styles.loading}>Loading product...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!product) return <p className={styles.empty}>Product not found</p>;

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        {/* breadcrumb */}
        <Link to="/" className={styles.breadLink}>
          Home
        </Link>
        <span className={styles.breadSep}>/</span>
        <Link to="/products" className={styles.breadLink}>
          Products
        </Link>
        <span className={styles.breadSep}>/</span>
        <span className={styles.breadCurrent}>{product.name}</span>
      </nav>

      <div className={styles.main}>
        {/*image gallery*/}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img
              src={product.images[selectedImage] || '/placeholder.jpg'}
              alt={product.name}
              className={styles.image}
            />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={\`\${product.name} \${i + 1}\`}
                  className={\`\${styles.thumb} \${i === selectedImage ? styles.thumbActive : ''}\`}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/*product info*/}
        <div className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.rating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={\`\${styles.star} \${
                    i < Math.floor(product.averageRating || 0)
                      ? styles.starFilled
                      : ''
                  }\`}
                >
                  star
                </span>
              ))}
            </div>
            <span className={styles.reviewCount}>
              ({product.numReviews || 0} reviews)
            </span>
          </div>

          <div className={styles.price}>\${product.price?.toFixed(2)}</div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.stock}>
            {product.stock > 0 ? (
              <span className={styles.inStock}>
                In Stock ({product.stock} left)
              </span>
            ) : (
              <span className={styles.outOfStock}>Out of Stock</span>
            )}
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={styles.qtyBtn}
                disabled={product.stock === 0}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Math.min(product.stock, +e.target.value)),
                  )
                }
                className={styles.qtyInput}
                min="1"
                max={product.stock}
              />
              <button
                onClick={() =>
                  setQuantity(Math.min(product.stock, quantity + 1))
                }
                className={styles.qtyBtn}
                disabled={product.stock === 0}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={
                adding || product.stock === 0 || product.stock < quantity
              }
              className={styles.addBtn}
            >
              {adding ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>

          <section className={styles.reviews}>
            <h2>Customer Reviews</h2>
            {user && (
              <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
                <div>
                  <label>Rating:</label>
                  <select
                    value={reviewForm.rating}
                    onChange={(e) =>
                      setReviewForm((prev) => ({
                        ...prev,
                        rating: +e.target.value,
                      }))
                    }
                  >
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>
                        {n} star{n !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  value={reviewForm.comment}
                  onChange={(e) =>
                    setReviewForm((prev) => ({
                      ...prev,
                      comment: e.target.value,
                    }))
                  }
                  placeholder="Share your experience..."
                  rows="4"
                />
                <button type="submit" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            )}

            {product.ratings.length === 0 ? (
              <p>No reviews yet. Be the first!</p>
            ) : (
              <div className={styles.reviewList}>
                {product.ratings.map((r, i) => (
                  <div key={i} className={styles.review}>
                    <div className={styles.reviewHeader}>
                      <strong>{r.user?.name || 'Anonymous'}</strong>
                      <span className={styles.reviewRating}>
                        {'★'.repeat(r.rating)}
                        {'☆'.repeat(5 - r.rating)}
                      </span>
                    </div>
                    <p>{r.comment || '(No comment)'}</p>
                    <small>{new Date(r.createdAt).toLocaleDateString()}</small>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* toast */}
      {toast && (
        <div className={\`\${styles.toast} \${styles[toast.type]}\`}>
          {toast.message}
        </div>
      )}

      {/* related products*/}
      <section className={styles.related}>
        <h2 className={styles.relatedTitle}>Related Products</h2>
        {/* in reall apss fetch related by castegory*/}
        <div className={styles.relatedGrid}>
          <p className={styles.comingSoon}>Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;

`,`
//client/src/pages/OrderDetailPage.js

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as styles from './OrderDetailPage.module.css';

const OrderDetailPage = () => {
  const { id } = useParams();
  const { fetchWithAuth } = useAuth();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('Please log in');

        const res = await fetchWithAuth(
          \`http://localhost:5001/api/orders/\${id}\`,
        );

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Order not found');

        setOrder(data.order);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <p className={styles.loading}>Loading order...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!order) return <p className={styles.empty}>Order not found</p>;

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = order.totalAmount - subtotal;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/profile" className={styles.backLink}>
          ← Back to Profile
        </Link>
        <h1 className={styles.title}>Order Details</h1>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.infoRow}>
          <div>
            <strong>Order ID:</strong> #{order._id.slice(-8)}
          </div>
          <div>
            <strong>Date:</strong>{' '}
            {new Date(order.createdAt).toLocaleDateString()}
          </div>
        </div>

        <div className={styles.statusBadge}>
          <span className={\`\${styles.status} \${styles[order.status]}\`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.itemsSection}>
          <h2 className={styles.sectionTitle}>Items Ordered</h2>
          <div className={styles.items}>
            {order.items.map((item, index) => (
              <div
                key={item.productId?._id || \`item-\${index}\`}
                className={styles.item}
              >
                <img
                  src={
                    item.productId?.images?.[0] ||
                    item.image ||
                    '/placeholder.jpg'
                  }
                  alt={item.productId?.name || item.name || 'Product'}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>
                    {item.productId?.name ||
                      item.name ||
                      'Product no longer available'}
                  </h3>
                  <p className={styles.itemQty}>Quantity: {item.quantity}</p>
                  <p className={styles.itemPrice}>
                    £{item.price.toFixed(2)} each
                  </p>
                </div>
                <div className={styles.itemTotal}>
                  £{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.summarySection}>
          <div className={styles.summaryCard}>
            <h2 className={styles.sectionTitle}>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax (20%)</span>
              <span>£{tax.toFixed(2)}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>£{order.totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.paymentMethod}>
              <strong>Payment:</strong> {order.paymentMethod}
            </div>
          </div>

          <div className={styles.addressCard}>
            <h2 className={styles.sectionTitle}>Shipping Address</h2>
            <div className={styles.address}>
              <p>
                <strong>{order.shippingAddress.fullName}</strong>
              </p>
              <p>{order.shippingAddress.street}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
              </p>
              <p>{order.shippingAddress.country}</p>
              <p>{order.shippingAddress.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;

`,`
//client/src/pages/Checkout.js

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { fetchWithAuth, updateCartCount } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [placing, setPlacing] = useState(false);
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    paymentMethod: 'stripe',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('Please log in');

        const res = await fetchWithAuth('http://localhost:5001/api/cart');
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        if (!data.cart?.items?.length) throw new Error('Cart is empty');
        setCart(data.cart);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.match(/^\\S+@\\S+\\.\\S+$/))
      newErrors.email = 'Valid email required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postcode.match(/^[A-Z]{1,2}\\d{1,2}[A-Z]?\\s?\\d[A-Z]{2}$/i))
      newErrors.postcode = 'Valid UK postcode required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    try {
      setPlacing(true);
      const res = await fetchWithAuth('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items.map((i) => ({
            productId: i.productId._id,
            quantity: i.quantity,
            price: i.price,
          })),
          shippingAddress: {
            fullName: formData.fullName,
            email: formData.email,
            street: formData.address,
            city: formData.city,
            postalCode: formData.postcode,
            country: formData.country,
          },
          paymentMethod: formData.paymentMethod,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      await updateCartCount();
      setToast({ type: 'success', message: 'Order placed!' });
      setTimeout(() => navigate(\`/orders/\${data.order._id}\`), 1500);
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setPlacing(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  if (loading) return <p className={styles.loading}>Loading checkout...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  const subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.2; // UK 20% tax
  const total = subtotal + tax;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>

      <div className={styles.main}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Shipping Address</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? styles.inputError : styles.input}
              />
              {errors.fullName && (
                <span className={styles.errorMsg}>{errors.fullName}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.inputError : styles.input}
              />
              {errors.email && (
                <span className={styles.errorMsg}>{errors.email}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={errors.address ? styles.inputError : styles.input}
              />
              {errors.address && (
                <span className={styles.errorMsg}>{errors.address}</span>
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? styles.inputError : styles.input}
                />
                {errors.city && (
                  <span className={styles.errorMsg}>{errors.city}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label>Postcode</label>
                <input
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className={errors.postcode ? styles.inputError : styles.input}
                  placeholder="SW1A 1AA"
                />
                {errors.postcode && (
                  <span className={styles.errorMsg}>{errors.postcode}</span>
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={styles.select}
              >
                <option>United Kingdom</option>
              </select>
            </div>

            <h3 className={styles.paymentTitle}>Payment Method</h3>
            <div className={styles.paymentOptions}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={formData.paymentMethod === 'stripe'}
                  onChange={handleChange}
                />
                Credit/Debit Card
              </label>
            </div>
          </form>
        </div>

        <div className={styles.summary}>
          <h2 className={styles.sectionTitle}>Order Summary</h2>
          <div>
            {cart.items.map((item) => (
              <div key={item.productId._id} className={styles.summaryItem}>
                <span>
                  {item.productId.name} × {item.quantity}
                </span>
                <span>£{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className={styles.totals}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>VAT (20%)</span>
              <span>£{tax.toFixed(2)}</span>
            </div>
            <div className={styles.totalFinal}>
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            disabled={placing}
            className={styles.placeOrderBtn}
          >
            {placing ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      </div>

      {toast && (
        <div className={\`\${styles.toast} \${styles[toast.type]}\`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

`,`
//client/src/pages/CartPage.js

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './CartPage.module.css';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
  const { updateCartCount, fetchWithAuth } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null);
  const [toast, setToast] = useState(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('Please log in to view cart');

      const res = await fetchWithAuth('http://localhost:5001/api/cart');
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to load cart');
      setCart(data.cart);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (productId, newQty) => {
    if (newQty < 1) return;
    try {
      setUpdating(productId);
      const token = localStorage.getItem('accessToken');
      const res = await fetch('http://localhost:5001/api/cart', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify({ productId, quantity: newQty }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setCart(data.cart);
      updateCartCount();
      setToast({ type: 'success', message: 'Cart updated' });
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setUpdating(null);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const removeItem = async (productId) => {
    try {
      setUpdating(productId);
      const token = localStorage.getItem('accessToken');
      const res = await fetch('http://localhost:5001/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setCart(data.cart);
      updateCartCount();
      setToast({ type: 'success', message: 'Item removed' });
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setUpdating(null);
      setTimeout(() => setToast(null), 3000);
    }
  };

  if (loading) return <p className={styles.loading}>Loading cart...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!cart || cart.items.length === 0)
    return (
      <div className={styles.empty}>
        <p>Your cart is empty</p>
        <Link to="/products" className={styles.shopLink}>
          Continue Shopping
        </Link>
      </div>
    );

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>

      <div className={styles.main}>
        {/* Cart Items */}
        <div className={styles.items}>
          {cart.items.map((item) => (
            <div key={item.productId._id} className={styles.item}>
              <Link
                to={\`/products/\${item.productId._id}\`}
                className={styles.itemLink}
              >
                <img
                  src={item.productId.images[0] || '/placeholder.jpg'}
                  alt={item.productId.name}
                  className={styles.itemImage}
                />
              </Link>

              <div className={styles.itemInfo}>
                <Link
                  to={\`/products/\${item.productId._id}\`}
                  className={styles.itemName}
                >
                  {item.productId.name}
                </Link>
                <div className={styles.itemPrice}>\${item.price.toFixed(2)}</div>
              </div>

              <div className={styles.itemActions}>
                <div className={styles.quantity}>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity - 1)
                    }
                    disabled={
                      updating === item.productId._id || item.quantity <= 1
                    }
                    className={styles.qtyBtn}
                  >
                    −
                  </button>
                  <span className={styles.qty}>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId._id, item.quantity + 1)
                    }
                    disabled={updating === item.productId._id}
                    className={styles.qtyBtn}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.productId._id)}
                  disabled={updating === item.productId._id}
                  className={styles.removeBtn}
                >
                  Remove
                </button>
              </div>

              <div className={styles.itemTotal}>
                \${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>\${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Tax (8%)</span>
            <span>\${tax.toFixed(2)}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>\${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className={styles.checkoutBtn}>
            Proceed to Checkout
          </Link>
        </div>
      </div>

      {toast && (
        <div className={\`\${styles.toast} \${styles[toast.type]}\`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default CartPage;

`];export{e as default};
//# sourceMappingURL=ecom26-fHcrrvTs.js.map