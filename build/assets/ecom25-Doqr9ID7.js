var e=[`
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

dotenv.config();

connectDB();

const app = express();
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);
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

`,`
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

  const refreshAccessToken = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('accessToken', data.accessToken);
        setUser(data.user);
        return data.accessToken;
      }
      return null;
    } catch (err) {
      console.error('Token refresh failed:', err);
      return null;
    }
  };

  const fetchWithAuth = async (url, options = {}) => {
    let token = localStorage.getItem('accessToken');

    let res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: \`Bearer \${token}\`,
      },
    });

    if (res.status === 401) {
      console.log('Access token expired, attempting refresh...');
      const newToken = await refreshAccessToken();

      if (newToken) {
        console.log('Token refreshed successfully, retrying request...');
        res = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: \`Bearer \${newToken}\`,
          },
        });
      } else {
        console.log('Refresh failed, logging out...');
        logout();
      }
    }

    return res;
  };

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
        let res = await fetch('http://localhost:5001/api/auth/me', {
          headers: { Authorization: \`Bearer \${token}\` },
        });

        if (res.status === 401) {
          console.log('Access token expired on load, attempting refresh...');
          const newToken = await refreshAccessToken();

          if (newToken) {
            res = await fetch('http://localhost:5001/api/auth/me', {
              headers: { Authorization: \`Bearer \${newToken}\` },
            });
          } else {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setLoading(false);
            return;
          }
        }

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
          await fetchCartCount(localStorage.getItem('accessToken'));
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      } catch (err) {
        console.error('Auth load failed:', err);
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
    fetchWithAuth, // Export this for other components to use
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

`,`
//client/src/pages/AdminDashboard.js

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import * as styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const { fetchWithAuth, user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
    users: 0,
  });
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [statsRes, productsRes, ordersRes, usersRes] = await Promise.all([
          fetchWithAuth('http://localhost:5001/api/admin/stats'),
          fetchWithAuth('http://localhost:5001/api/products?limit=100'),
          fetchWithAuth('http://localhost:5001/api/orders/all'),
          fetchWithAuth('http://localhost:5001/api/users'),
        ]);

        const [statsData, productsData, ordersData, usersData] =
          await Promise.all([
            statsRes.json(),
            productsRes.json(),
            ordersRes.json(),
            usersRes.json(),
          ]);

        setStats(statsData);
        setProducts(productsData.products || []);
        setOrders(ordersData.orders || []);
        setUsers(usersData.users || []);
      } catch (err) {
        console.error('Admin fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem('accessToken');
      await fetchWithAuth(
        \`http://localhost:5001/api/orders/\${orderId}/status\`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: \`Bearer \${token}\`,
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? { ...o, status: newStatus } : o)),
      );
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const handleToggleAdmin = async (userId, currentRole) => {
    try {
      const token = localStorage.getItem('accessToken');
      await fetchWithAuth(\`http://localhost:5001/api/users/\${userId}/role\`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',          
        },
        body: JSON.stringify({
          role: currentRole === 'admin' ? 'user' : 'admin',
        }),
      });
      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId
            ? { ...u, role: currentRole === 'admin' ? 'user' : 'admin' }
            : u,
        ),
      );
    } catch (err) {
      alert('Failed to update role');
    }
  };

  if (loading)
    return <div className={styles.loading}>Loading dashboard...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <p className={styles.welcome}>
        Welcome back, <strong>{user?.name}</strong>
      </p>

      <div className={styles.tabs}>
        {['overview', 'products', 'orders', 'users'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? styles.tabActive : styles.tab}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className={styles.grid}>
          <div className={styles.statCard}>
            <h3>Total Products</h3>
            <p className={styles.statNumber}>{stats.products}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Total Orders</h3>
            <p className={styles.statNumber}>{stats.orders}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Revenue</h3>
            <p className={styles.statNumber}>
              £{stats.revenue?.toFixed(2) || '0.00'}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Users</h3>
            <p className={styles.statNumber}>{stats.users}</p>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div className={styles.section}>
          <h2>Products ({products.length})</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>£{p.price.toFixed(2)}</td>
                    <td>{p.stock}</td>
                    <td>{p.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className={styles.section}>
          <h2>Orders ({orders.length})</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o._id}>
                    <td>#{o._id.slice(-6)}</td>
                    <td>{new Date(o.createdAt).toLocaleDateString()}</td>
                    <td>{o.shippingAddress.fullName}</td>
                    <td>£{o.totalAmount.toFixed(2)}</td>
                    <td>
                      <select
                        value={o.status}
                        onChange={(e) =>
                          handleStatusChange(o._id, e.target.value)
                        }
                        className={styles.statusSelect}
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </td>
                    <td>
                      <button className={styles.viewBtn}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className={styles.section}>
          <h2>Users ({users.length})</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>
                      <button
                        onClick={() => handleToggleAdmin(u._id, u.role)}
                        className={
                          u.role === 'admin'
                            ? styles.demoteBtn
                            : styles.promoteBtn
                        }
                      >
                        {u.role === 'admin' ? 'Demote' : 'Make Admin'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

`,`
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
        credentials: 'include',
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
//client/src/pages/ProfilePage.js

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import * as styles from './ProfilePage.module.css';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { fetchWithAuth, user } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('accessToken');
        // fetchWithAuth users
        const userRes = await fetchWithAuth(
          'http://localhost:5001/api/auth/me',
          {},
        );
        const userData = await userRes.json();
        if (userRes.ok) {
          setProfile({ name: userData.user.name, email: userData.user.email });
        }
        //fetchWithAuth orders
        const ordersRes = await fetchWithAuth(
          'http://localhost:5001/api/orders',
          {},
        );
        const ordersData = await ordersRes.json();
        if (ordersRes.ok) {
          setOrders(ordersData.orders || []);
        }
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError('');
      const token = localStorage.getItem('accessToken');

      const res = await fetchWithAuth(
        'http://localhost:5001/api/users/profile',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: \`Bearer \${token}\`,
          },
          body: JSON.stringify(profile),
        },
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Update failed');

      setToast({ type: 'success', message: 'Profile updated!' });
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  if (loading) return <p className={styles.loading}>Loading profile...</p>;
  if (error && !editing) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Profile</h1>

      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Personal Information</h2>
            <button
              onClick={() => setEditing(!editing)}
              className={styles.editBtn}
            >
              {editing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          {editing ? (
            <div className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              {error && <p className={styles.errorMsg}>{error}</p>}

              <button
                onClick={handleSave}
                disabled={saving}
                className={styles.saveBtn}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          ) : (
            <div className={styles.info}>
              <p>
                <strong>Name:</strong> {profile.name}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Role:</strong> {user?.role || 'Customer'}
              </p>
              <p>
                <strong>Member since:</strong>{' '}
                {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>

        <div className={styles.ordersSection}>
          <h2 className={styles.sectionTitle}>Order History</h2>

          {orders.length === 0 ? (
            <p className={styles.empty}>
              No orders yet.{' '}
              <Link to="/products" className={styles.shopLink}>
                Start shopping!
              </Link>
            </p>
          ) : (
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>#{order._id.slice(-6)}</td>
                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td>{order.items.length}</td>
                      <td>£{order.totalAmount?.toFixed(2)}</td>
                      <td>
                        <span
                          className={\`\${styles.status} \${styles[order.status]}\`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <Link
                          to={\`/orders/\${order._id}\`}
                          className={styles.viewLink}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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

export default ProfilePage;

`,`
solution
`,`
solution
`];export{e as default};
//# sourceMappingURL=ecom25-Doqr9ID7.js.map