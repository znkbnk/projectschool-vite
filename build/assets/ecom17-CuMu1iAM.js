var e=[`
//server/controllers/cartControllers.js

import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const getOrCreateCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: req.user.id },
      { $setOnInsert: { items: [] } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
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
      return res.status(400).json({ message: 'Valid productId and quantity (>=1) required' });
    }
    
    const product = await Product.findById(productId).select('stock');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    let availableStock = product.stock;
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    let newQuantity = quantity;
    if (existingItemIndex > -1) {
      newQuantity += cart.items[existingItemIndex].quantity;
    }
    
    if (availableStock < newQuantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }
    
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity = newQuantity;
      cart.items[existingItemIndex].addedAt = Date.now();
    } else {
      cart.items.push({ productId, quantity, addedAt: Date.now() });
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
      return res.status(400).json({ message: 'Valid productId and quantity (>=0) required' });
    }
    
    const product = await Product.findById(productId).select('stock');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
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
      const itemExists = cart.items.some(item => item.productId.toString() === productId);
      if (!itemExists) {
        return res.status(404).json({ message: 'Item not in cart' });
      }
      cart.items = cart.items.filter(item => item.productId.toString() !== productId);
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
//server/routes/cartRoutes.js

import express from 'express';
import {
  getOrCreateCart,
  addToCart,
  updateCartItemQty,
  removeFromCart,
} from '../controllers/cartController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', getOrCreateCart);
router.post('/', addToCart);
router.patch('/', updateCartItemQty);
router.delete('/', removeFromCart);

export default router;

`,`
//server/server.js 

// server/server.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`];export{e as default};
//# sourceMappingURL=ecom17-CuMu1iAM.js.map