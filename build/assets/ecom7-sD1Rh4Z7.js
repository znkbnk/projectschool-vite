var e=[`
//server/controllers/AuthController.js

import jwt from 'jsonwebtoken';
import User from '../models/User';

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

`];export{e as default};
//# sourceMappingURL=ecom7-sD1Rh4Z7.js.map