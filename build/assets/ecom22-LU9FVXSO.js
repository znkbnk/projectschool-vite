var e=[`
//client/src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const ProfilePage = () => <div>Profile Page</div>;
const OrderDetailPage = () => <div>Order Detail Page</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders/:id" element={<OrderDetailPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

`,`
//client/src/components/Navbar.js

import { NavLink, useNavigate } from 'react-router-dom';
import * as styles from './Navbar.module.css';
import logo from '../../assets/logo.webp';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, isAdmin, cartCount, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <NavLink to="/" className={styles.navbar__logo}>
          <img src={logo} alt="E-Shop" className={styles.navbar__logoImage} />
        </NavLink>

        <ul className={styles.navbar__links}>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? \`\${styles.navbar__link} \${styles['navbar__link--active']}\`
                  : styles.navbar__link
              }
            >
              Products
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? \`\${styles.navbar__link} \${styles['navbar__link--active']}\`
                      : styles.navbar__link
                  }
                >
                  Cart
                  {cartCount > 0 && (
                    <span className={styles.cartBadge}>{cartCount}</span>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? \`\${styles.navbar__link} \${styles['navbar__link--active']}\`
                      : styles.navbar__link
                  }
                >
                  {user?.name || 'Profile'}
                </NavLink>
              </li>

              {isAdmin && (
                <li>
                  <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? \`\${styles.navbar__link} \${styles['navbar__link--active']}\`
                        : styles.navbar__link
                    }
                  >
                    Admin
                  </NavLink>
                </li>
              )}

              <li>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? \`\${styles.navbar__link} \${styles['navbar__link--active']}\`
                      : styles.navbar__link
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? \`\${styles.navbar__link} \${styles['navbar__link--active']}\`
                      : styles.navbar__link
                  }
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

`,`
//client/src/components/ProtectedRoute.js

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isLoggedIn, isAdmin, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (adminOnly && !isAdmin) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
`,`
//client/src/context/AuthContext.js

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCartCount = async (token) => {
    try {
      const res = await fetch('http://localhost:5001/api/cart', {
        headers: { Authorization: \`Bearer \${token}\` },
      });
      if (res.ok) {
        const data = await res.json();
        const count =
          data.cart?.items?.reduce((sum, i) => sum + i.quantity, 0) || 0;
        setCartCount(count);
      }
    } catch (err) {
      console.error('Cart count fetch failed');
    }
  };

  const updateCartCount = async () => {
    const token = localStorage.getItem('accessToken');
    if (token) await fetchCartCount(token);
  };

  useEffect(() => {
    const loadAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('http://localhost:5001/api/auth/me', {
          headers: { Authorization: \`Bearer \${token}\` },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          await fetchCartCount(token);
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      } catch (err) {
        console.error('Auth load failed');
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
  }, []);

  const login = async (authData, accessToken, remember = false) => {
    localStorage.setItem('accessToken', accessToken);
    if (remember && authData.refreshToken) {
      localStorage.setItem('refreshToken', authData.refreshToken);
    }
    setUser(authData.user || authData);
    await fetchCartCount(accessToken);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    setCartCount(0);
  };

  const value = {
    user,
    cartCount,
    loading,
    isLoggedIn: !!user,
    isAdmin: user?.role === 'admin',
    login,
    logout,
    updateCartCount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

`,`
//client/src/pages/AuthPage.js

import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as styles from './AuthPage.module.css';
import { useAuth } from '../context/AuthContext';

const AuthPage = () => {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (error) setError('');
  };

  const validate = () => {
    if (!formData.email.match(/^\\S+@\\S+\\.\\S+$/)) {
      setError('Please enter a valid email');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (!isLogin && formData.name.trim().length < 2) {
      setError('Name must be at least 2 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      setError('');

      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const body = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const res = await fetch(\`http://localhost:5001\${endpoint}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      //save token for remember-me checkbox
      localStorage.setItem('accessToken', data.accessToken);
      if (formData.remember) {
        localStorage.setItem('refreshToken', data.refreshToken);
      }

      login(data, data.accessToken, formData.remember);

      setToast({
        type: 'success',
        message: isLogin ? 'Welcome back!' : 'Account created!',
      });
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className={styles.subtitle}>
          {isLogin ? 'Log in to continue shopping' : 'Join Plug today'}
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {!isLogin && (
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Name Surname"
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              className={styles.input}
              placeholder="••••••••"
            />
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Please wait...' : isLogin ? 'Log In' : 'Create Account'}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <Link to={isLogin ? '/register' : '/login'} className={styles.link}>
              {isLogin ? 'Sign up' : 'Log in'}
            </Link>
          </p>
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

export default AuthPage;

`,`
//server/controllers/cartController.js

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
    
    const product = await Product.findById(productId).select('stock price');
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
      cart.items[existingItemIndex].price = product.price;     
      cart.items[existingItemIndex].addedAt = Date.now();
    } else {
      cart.items.push({ productId, quantity, price: product.price, addedAt: Date.now() });
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
//server/models/Cart.js

import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
    addedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
    index: true,
  },
  items: [CartItemSchema],
  updatedAt: { type: Date, default: Date.now },
});

cartSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Cart', cartSchema);
`];export{e as default};
//# sourceMappingURL=ecom22-LU9FVXSO.js.map