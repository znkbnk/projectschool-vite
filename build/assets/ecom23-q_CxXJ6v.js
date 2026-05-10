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
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

`,`
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
          fetch('http://localhost:5001/api/orders', {
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
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
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
//client/src/pages/CartPage.js

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './CartPage.module.css';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
  const { updateCartCount } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null); // item _id
  const [toast, setToast] = useState(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('Please log in to view cart');

      const res = await fetch('http://localhost:5001/api/cart', {
        headers: { Authorization: \`Bearer \${token}\` },
      });
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

`,`
//client/src/pages/OrderDetailPage.js

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as styles from './OrderDetailPage.module.css';

const OrderDetailPage = () => {
  const { id } = useParams();
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

        const res = await fetch(\`http://localhost:5001/api/orders/\${id}\`, {
          headers: { Authorization: \`Bearer \${token}\` },
        });

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
          <span className={\${styles.status} \${styles[order.status]}\`}>
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
              <p>{order.shippingAddress.address}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.postcode}
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
//client/src/components/ProductDetailPage.js

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as styles from './ProductDetailPage.module.css';
import { useAuth } from '../context/AuthContext';

const ProductDetailPage = () => {
  const { updateCartCount } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState(null);

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

      const res = await fetch('http://localhost:5001/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
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
              src={product.images[0] || '/placeholder.jpg'}
              alt={product.name}
              className={styles.image}
            />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.slice(0, 4).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={\`\${product.name} \${i + 1}\`}
                  className={styles.thumb}
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
  const { user } = useAuth();
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
        // fetch users
        const userRes = await fetch('http://localhost:5001/api/auth/me', {
          headers: { Authorization: \`Bearer \${token}\` },
        });
        const userData = await userRes.json();
        if (userRes.ok) {
          setProfile({ name: userData.user.name, email: userData.user.email });
        }
        //fetch orders
        const ordersRes = await fetch('http://localhost:5001/api/orders', {
          headers: { Authorization: \`Bearer \${token}\` },
        });
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

      const res = await fetch('http://localhost:5001/api/users/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify(profile),
      });

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

`];export{e as default};
//# sourceMappingURL=ecom23-q_CxXJ6v.js.map