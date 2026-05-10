var e=[`
// server/controllers/productController.js
import Product from '../models/Product.js';

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
    })
    const total = ratings.length;
    const paginatedRatings = ratings.slice((page - 1) * limit, page * limit)
    .map(rating => ({
        _id: rating._id,
        user: rating.user,
        rating: rating.rating,
        comment: rating.comment,
        createdAt: rating.createdAt
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
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

`,`
import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, addRating, editRating, getProductRatings, deleteRating } from '../controllers/productController.js';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', [authMiddleware, adminMiddleware], createProduct);
router.patch('/:id', [authMiddleware, adminMiddleware], updateProduct);
router.delete('/:id', [authMiddleware, adminMiddleware], deleteProduct);
router.post('/:id/ratings', authMiddleware, addRating);
router.patch('/:id/ratings', authMiddleware, editRating);
router.get('/:id/ratings', getProductRatings);
router.delete('/:id/ratings', authMiddleware, deleteRating);

export default router;
`];export{e as default};
//# sourceMappingURL=ecom16-B2SLtHwo.js.map