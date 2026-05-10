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

const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;
const ProfilePage = () => <div>Profile Page</div>;
const OrderDetailPage = () => <div>Order Detail Page</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders/:id" element={<OrderDetailPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

`,`
//client/src/pages/CartPage.js

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './CartPage.module.css';


const CartPage = () => {
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
        headers: { 'Authorization': \`Bearer \${token}\` },
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
          'Authorization': \`Bearer \${token}\`,
        },
        body: JSON.stringify({ productId, quantity: newQty }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setCart(data.cart);
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
          'Authorization': \`Bearer \${token}\`,
        },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setCart(data.cart);
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
        <Link to="/products" className={styles.shopLink}>Continue Shopping</Link>
      </div>
    );

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
              <Link to={\`/products/\${item.productId._id}\`} className={styles.itemLink}>
                <img
                  src={item.productId.images[0] || '/placeholder.jpg'}
                  alt={item.productId.name}
                  className={styles.itemImage}
                />
              </Link>

              <div className={styles.itemInfo}>
                <Link to={\`/products/\${item.productId._id}\`} className={styles.itemName}>
                  {item.productId.name}
                </Link>
                <div className={styles.itemPrice}>\${item.price.toFixed(2)}</div>
              </div>

              <div className={styles.itemActions}>
                <div className={styles.quantity}>
                  <button
                    onClick={() => updateQuantity(item.productId._id, item.quantity - 1)}
                    disabled={updating === item.productId._id || item.quantity <= 1}
                    className={styles.qtyBtn}
                  >
                    −
                  </button>
                  <span className={styles.qty}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.productId._id, item.quantity + 1)}
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
//client/src/pages/Checkout.js

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [placing, setPlacing] = useState(false);
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    paymentMethod: 'card',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('accessToken');
        if (!token) throw new Error('Please log in');

        const res = await fetch('http://localhost:5001/api/cart', {
          headers: { Authorization: \`Bearer \${token}\` },
        });
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
    fetchCart();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.match(/^S+@S+.S+$/))
      newErrors.email = 'Valid email required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postcode.match(/^[A-Z]{1,2}d{1,2}[A-Z]?s?d[A-Z]{2}$/i))
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
      const token = localStorage.getItem('accessToken');
      const res = await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
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
            address: formData.address,
            city: formData.city,
            postcode: formData.postcode,
            country: formData.country,
          },
          paymentMethod: formData.paymentMethod,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setToast({ type: 'success', message: 'Order placed!' });
      setTimeout(() => navigate(\`/orders/\${data.order._id}\`), 1500);
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setPlacing(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  if (loading) return <p className={styles.loading}>Loading checkout...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  const subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.2; // UK 20% tax
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
                  value="card"
                  checked={formData.paymentMethod === 'card'}
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

      {toast && (
        <div className={\`\${styles.toast} \${styles[toast.type]}\`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

`];export{e as default};
//# sourceMappingURL=ecom21-cRaVLkEZ.js.map