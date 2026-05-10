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
import ProfilePage from './pages/ProfilePage';
import OrderDetailPage from './pages/OrderDetailPage';
import AdminDashboard from './pages/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders/:id"
              element={
                <ProtectedRoute>
                  <OrderDetailPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer /> 
          <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />                    
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
`,`
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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
  const [categories, setCategories] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    images: '',
  });
  const [productFormErrors, setProductFormErrors] = useState({});
  const [savingProduct, setSavingProduct] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [statsRes, productsRes, ordersRes, usersRes, categoriesRes] =
          await Promise.all([
            fetchWithAuth('http://localhost:5001/api/admin/stats'),
            fetchWithAuth('http://localhost:5001/api/products?limit=100'),
            fetchWithAuth('http://localhost:5001/api/orders/all'),
            fetchWithAuth('http://localhost:5001/api/users'),
            fetchWithAuth('http://localhost:5001/api/products/categories'),
          ]);

        const [statsData, productsData, ordersData, usersData, categoriesData] =
          await Promise.all([
            statsRes.json(),
            productsRes.json(),
            ordersRes.json(),
            usersRes.json(),
            categoriesRes.json(),
          ]);

        setStats(statsData);
        setProducts(productsData.products || []);
        setOrders(ordersData.orders || []);
        setUsers(usersData.users || []);
        setCategories(categoriesData.categories || []);
      } catch (err) {
        console.error('Admin fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };
    if (!user) return;
    fetchData();
  }, [user]);

  const resetProductForm = () => {
    setProductForm({
      name: '',
      description: '',
      price: '',
      stock: '',
      category: '',
      images: '',
    });
    setProductFormErrors({});
    setEditingProduct(null);
  };

  const openAddProduct = () => {
    resetProductForm();
    setShowProductModal(true);
  };

  const openEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name || '',
      description: product.description || '',
      price: product.price?.toString() || '',
      stock: product.stock?.toString() || '',
      category: product.category || '',
      images: product.images?.join(', ') || '',
    });
    setProductFormErrors({});
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    resetProductForm();
  };

  const handleProductFormChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
    if (productFormErrors[name]) {
      setProductFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateProductForm = () => {
    const errors = {};
    if (!productForm.name.trim()) errors.name = 'Name is required';
    if (!productForm.description.trim())
      errors.description = 'Description is required';
    if (
      !productForm.price ||
      isNaN(productForm.price) ||
      +productForm.price < 0
    )
      errors.price = 'Valid price is required';
    if (
      productForm.stock === '' ||
      isNaN(productForm.stock) ||
      +productForm.stock < 0
    )
      errors.stock = 'Valid stock quantity is required';
    setProductFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveProduct = async () => {
    if (!validateProductForm()) return;
    try {
      setSavingProduct(true);

      const imagesArray = productForm.images
        .split(',')
        .map((img) => img.trim())
        .filter((img) => img.length > 0);

      const productData = {
        name: productForm.name.trim(),
        description: productForm.description.trim(),
        price: parseFloat(productForm.price),
        stock: parseInt(productForm.stock, 10),
        category: productForm.category.trim(),
        images: imagesArray,
      };

      let res;
      if (editingProduct) {
        res = await fetchWithAuth(
          \`http://localhost:5001/api/products/\${editingProduct._id}\`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData),
          },
        );
      } else {
        res = await fetchWithAuth('http://localhost:5001/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
        });
      }

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to save product');

      if (editingProduct) {
        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? data.product : p)),
        );
        toast.success('Product updated successfully!');
      } else {
        setProducts((prev) => [data.product, ...prev]);
        setStats((prev) => ({ ...prev, products: prev.products + 1 }));
        toast.success('Product created successfully!');
      }

      if (productData.category && !categories.includes(productData.category)) {
        setCategories((prev) => [...prev, productData.category].sort());
      }
      closeProductModal();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSavingProduct(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      setDeleting(true);

      const res = await fetchWithAuth(
        \`http://localhost:5001/api/products/\${productId}\`,
        { method: 'DELETE' },
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete product');
      }

      setProducts((prev) => prev.filter((p) => p._id !== productId));
      setStats((prev) => ({ ...prev, products: prev.products - 1 }));
      toast.success('Product deleted successfully!');
      setDeleteConfirm(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleting(false);
    }
  };

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
      toast.success('Order status updated!');
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const handleToggleAdmin = async (userId, currentRole) => {
    try {
      const token = localStorage.getItem('accessToken');
      await fetchWithAuth(\`http://localhost:5001/api/users/\${userId}/role\`, {
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
      toast.success(\`User role updated to \${currentRole === 'admin' ? 'user' : 'admin'}!\`);
    } catch (err) {
      toast.error('Failed to update role');
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
          <div className={styles.sectionHeader}>
            <h2>Products ({products.length})</h2>
            <button onClick={openAddProduct} className={styles.addBtn}>
              + Add Product
            </button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <img
                        src={p.images?.[0] || '/placeholder.jpg'}
                        alt={p.name}
                        className={styles.productThumb}
                      />
                    </td>
                    <td>{p.name}</td>
                    <td>£{p.price.toFixed(2)}</td>
                    <td>
                      <span
                        className={
                          p.stock > 10
                            ? styles.stockGood
                            : p.stock > 0
                              ? styles.stockLow
                              : styles.stockOut
                        }
                      >
                        {p.stock}
                      </span>
                    </td>
                    <td>{p.category || '-'}</td>
                    <td className={styles.actions}>
                      <button
                        onClick={() => openEditProduct(p)}
                        className={styles.editBtn}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(p)}
                        className={styles.deleteBtn}
                      >
                        Delete
                      </button>
                    </td>
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

      {showProductModal && (
        <div className={styles.modalOverlay} onClick={closeProductModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={closeProductModal} className={styles.modalClose}>
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={productForm.name}
                  onChange={handleProductFormChange}
                  className={
                    productFormErrors.name ? styles.inputError : styles.input
                  }
                  placeholder="Enter product name"
                />
                {productFormErrors.name && (
                  <span className={styles.errorText}>
                    {productFormErrors.name}
                  </span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label>Description *</label>
                <textarea
                  name="description"
                  value={productForm.description}
                  onChange={handleProductFormChange}
                  className={
                    productFormErrors.description
                      ? styles.inputError
                      : styles.input
                  }
                  placeholder="Enter product description"
                  rows="3"
                />
                {productFormErrors.description && (
                  <span className={styles.errorText}>
                    {productFormErrors.description}
                  </span>
                )}
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Price (£) *</label>
                  <input
                    type="number"
                    name="price"
                    value={productForm.price}
                    onChange={handleProductFormChange}
                    className={
                      productFormErrors.price ? styles.inputError : styles.input
                    }
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                  {productFormErrors.price && (
                    <span className={styles.errorText}>
                      {productFormErrors.price}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Stock *</label>
                  <input
                    type="number"
                    name="stock"
                    value={productForm.stock}
                    onChange={handleProductFormChange}
                    className={
                      productFormErrors.stock ? styles.inputError : styles.input
                    }
                    placeholder="0"
                    min="0"
                  />
                  {productFormErrors.stock && (
                    <span className={styles.errorText}>
                      {productFormErrors.stock}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={productForm.category}
                  onChange={handleProductFormChange}
                  className={styles.input}
                  placeholder="e.g., Electronics, Clothing"
                  list="category-list"
                />
                <datalist id="category-list">
                  {categories.map((cat) => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>
              <div className={styles.formGroup}>
                <label>Image URLs (comma-separated)</label>
                <textarea
                  name="images"
                  value={productForm.images}
                  onChange={handleProductFormChange}
                  className={styles.input}
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                  rows="2"
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                onClick={closeProductModal}
                className={styles.cancelBtn}
                disabled={savingProduct}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProduct}
                className={styles.saveBtn}
                disabled={savingProduct}
              >
                {savingProduct
                  ? 'Saving...'
                  : editingProduct
                    ? 'Update Product'
                    : 'Create Product'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div
          className={styles.modalOverlay}
          onClick={() => setDeleteConfirm(null)}
        >
          <div
            className={styles.confirmModal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Delete Product</h3>
            <p>
              Are you sure you want to delete "
              <strong>{deleteConfirm.name}</strong>
              "? This action cannot be undone.
            </p>
            <div className={styles.confirmActions}>
              <button
                onClick={() => setDeleteConfirm(null)}
                className={styles.cancelBtn}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProduct(deleteConfirm._id)}
                className={styles.confirmDeleteBtn}
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
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
import { toast } from 'react-toastify';
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

      localStorage.setItem('accessToken', data.accessToken);
      if (formData.remember) {
        localStorage.setItem('refreshToken', data.refreshToken);
      }

      login(data, data.accessToken, formData.remember);

      toast.success(isLogin ? 'Welcome back!' : 'Account created!');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
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
    </div>
  );
};

export default AuthPage;
`,`
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as styles from './CartPage.module.css';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
  const { updateCartCount, fetchWithAuth, user } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);

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
    if (!user) return;
    fetchCart();
  }, [user]);

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
      toast.success('Cart updated');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdating(null);
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
      toast.success('Item removed');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdating(null);
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
    </div>
  );
};

export default CartPage;
`,`
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import * as styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { fetchWithAuth, updateCartCount, user } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [placing, setPlacing] = useState(false);

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
    if (!user) return;
    fetchCart();
  }, [user]);

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
      toast.success('Order placed successfully!');
      setTimeout(() => navigate(\`/orders/\${data.order._id}\`), 1500);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setPlacing(false);
    }
  };

  if (loading) return <p className={styles.loading}>Loading checkout...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  const subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.2;
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
    </div>
  );
};

export default CheckoutPage;
`,`
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import * as styles from './HomePage.module.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'http://localhost:5001/api/products?limit=6&sort=-createdAt',
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch products');
        }

        setProducts(data.products || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to PLUG</h1>
          <p className={styles.heroSubtitle}>
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/products" className={styles.heroCta}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredContainer}>
          <h2 className={styles.featuredTitle}>Featured Products</h2>

          {loading && <div className={styles.loading}>Loading products...</div>}

          {error && <div className={styles.error}>{error}</div>}

          {!loading && !error && products.length === 0 && (
            <div className={styles.empty}>No products available right now.</div>
          )}

          {!loading && !error && products.length > 0 && (
            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;


`,`
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as styles from './OrderDetailPage.module.css';

const OrderDetailPage = () => {
  const { id } = useParams();
  const { fetchWithAuth, user } = useAuth();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        setError(null);

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
    if (!user) return;
    fetchOrder();
  }, [id, user]);

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
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
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
        toast.error('Please log in to add to cart');
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
      toast.success(\`Added \${quantity} to cart!\`);
      setQuantity(1);
      updateCartCount();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAdding(false);
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
      toast.success('Review added!');
    } catch (err) {
      toast.error(err.message);
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

      <section className={styles.related}>
        <h2 className={styles.relatedTitle}>Related Products</h2>
        <div className={styles.relatedGrid}>
          <p className={styles.comingSoon}>Coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
`,`
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as styles from './ProductListPage.module.css';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const [formData, setFormData] = useState({
    search: search,
    category: category,
    minPrice: minPrice,
    maxPrice: maxPrice,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          'http://localhost:5001/api/products/categories',
        );
        const data = await res.json();
        if (res.ok) setCategories(data.categories || []);
      } catch (err) {
        console.error('Failed to load categories');
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (category) params.append('category', category);
        if (minPrice) params.append('minPrice', minPrice);
        if (maxPrice) params.append('maxPrice', maxPrice);
        params.append('page', page);
        params.append('limit', 12);

        const res = await fetch(\`http://localhost:5001/api/products?\${params}\`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Failed to load products');

        setProducts(data.products || []);
        setTotalPages(data.pagination?.totalPages || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, category, minPrice, maxPrice, page]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParams = {};
    if (formData.search) newParams.search = formData.search;
    if (formData.category) newParams.category = formData.category;
    if (formData.minPrice) newParams.minPrice = formData.minPrice;
    if (formData.maxPrice) newParams.maxPrice = formData.maxPrice;
    newParams.page = 1;
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams((prev) => {
        const p = new URLSearchParams(prev);
        p.set('page', newPage);
        return p;
      });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>All Products</h1>
        <p className={styles.subtitle}>Browse our full collection</p>
      </section>

      <div className={styles.main}>
        <aside className={styles.filters}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="search"
              value={formData.search}
              onChange={handleInputChange}
              placeholder="Search products..."
              className={styles.input}
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <div className={styles.priceRange}>
              <input
                type="number"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleInputChange}
                placeholder="Min $"
                className={styles.priceInput}
              />
              <input
                type="number"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleInputChange}
                placeholder="Max $"
                className={styles.priceInput}
              />
            </div>

            <button type="submit" className={styles.applyBtn}>
              Apply Filters
            </button>
          </form>
        </aside>

        <section className={styles.gridSection}>
          {loading && <p className={styles.loading}>Loading products...</p>}

          {error && <p className={styles.error}>{error}</p>}

          {!loading && !error && products.length === 0 && (
            <p className={styles.empty}>No products match your filters.</p>
          )}

          {!loading && !error && products.length > 0 && (
            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className={styles.pageBtn}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={\`\${styles.pageBtn} \${page === i + 1 ? styles.pageBtnActive : ''}\`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className={styles.pageBtn}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductListPage;
`,`
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const userRes = await fetchWithAuth(
          'http://localhost:5001/api/auth/me',
          {},
        );
        const userData = await userRes.json();
        if (userRes.ok) {
          setProfile({ name: userData.user.name, email: userData.user.email });
        }

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
    if (!user) return;
    loadData();
  }, [user]);

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

      toast.success('Profile updated!');
      setEditing(false);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setSaving(false);
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
    </div>
  );
};

export default ProfilePage;
`,`
import { toast } from 'react-toastify';

export const showSuccess = (message) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const showError = (message) => {
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 4000, 
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const showInfo = (message) => {
  toast.info(message, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const showWarning = (message) => {
  toast.warn(message, {
    position: 'bottom-right',
    autoClose: 3500,  // Intermediate display time
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
`];export{e as default};
//# sourceMappingURL=ecom29-BVlAypcs.js.map