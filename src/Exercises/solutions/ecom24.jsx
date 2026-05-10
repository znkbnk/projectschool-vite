const solutionCode1 = `
//client/src/pages/AdminDashboard.js

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import * as styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const { user } = useAuth();
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
        const token = localStorage.getItem('accessToken');

        const [statsRes, productsRes, ordersRes, usersRes] = await Promise.all([
          fetch('http://localhost:5001/api/admin/stats', {
            headers: { Authorization: \`Bearer \${token}\` },
          }),
          fetch('http://localhost:5001/api/products?limit=100', {
            headers: { Authorization: \`Bearer \${token}\` },
          }),
          fetch('http://localhost:5001/api/orders/all', {
            headers: { Authorization: \`Bearer \${token}\` },
          }),
          fetch('http://localhost:5001/api/users', {
            headers: { Authorization: \`Bearer \${token}\` },
          }),
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
      await fetch(\`http://localhost:5001/api/orders/\${orderId}/status\`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
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
      await fetch(\`http://localhost:5001/api/users/\${userId}/role\`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
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
        {['overview', 'products', 'orders', 'users',].map((tab) => (
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
`;

const solutionCode2 = `
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
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

`;
const solutionCode3 = `
//server/controllers/userController.js

import User from '../models/User.js';

export const getProfile = async (req, res, next) => {
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

export const updateProfile = async (req, res, next) => {
  try {
    const { name, email, password, addresses } = req.body;
    const updates = {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (password) updates.password = password; // !!Will be hashed by User schema
    if (addresses) updates.addresses = addresses;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No valid fields to update' });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true, runValidators: true },
    ).select('-password');

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

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json({ users });
  } catch (error) {
    next(error);
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;

    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true },
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
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

`;
const solutionCode4 = `
//server/routes/adminRoutes.js

import express from 'express';
import {
  authMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js';
import User from '../models/User.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

const router = express.Router();

router.use(authMiddleware, adminMiddleware);

router.get('/stats', async (req, res, next) => {
  try {
    const [products, orders, users] = await Promise.all([
      Product.countDocuments(),
      Order.find(),
      User.countDocuments(),
    ]);

    const revenue = orders.reduce(
      (sum, order) => sum + (order.totalAmount || 0),
      0,
    );

    res.json({
      products,
      orders: orders.length,
      revenue,
      users,
    });
  } catch (error) {
    next(error);
  }
});

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

const router = express.Router();

router.get('/profile', authMiddleware, getProfile);
router.patch('/profile', authMiddleware, updateProfile);
router.get('/', [authMiddleware, adminMiddleware], getAllUsers);
router.get('/:id', [authMiddleware, adminMiddleware], getUserById);
router.patch('/:id/role', [authMiddleware, adminMiddleware], updateUserRole);

export default router;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  
];


