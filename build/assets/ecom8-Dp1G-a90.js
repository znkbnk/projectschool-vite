var e=[`
// server/server.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';


dotenv.config();

connectDB();

const app = express();
app.use(morgan('dev'))
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));



`,`
//server/controllers/authController.js

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' },
  );
  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' },
  );
  return { accessToken, refreshToken };
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password, addresses } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email, and password are required',
      });
    }

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

    const { accessToken, refreshToken } = generateTokens(user);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
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
    next(err);
  }
};
`,`
//server/routes/authRoutes.js

import express from 'express';
import { register } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);

export default router;

`];export{e as default};
//# sourceMappingURL=ecom8-Dp1G-a90.js.map