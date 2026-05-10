var e=[`
//client/src/pages/CartPage.js

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
//client/src/pages/CheckoutPage.js

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
//client/src/pages/OrderDetailPage.js

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
//client/src/pages/ProfilePage.js

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

`];export{e as default};
//# sourceMappingURL=ecom28-dMYVb5lQ.js.map