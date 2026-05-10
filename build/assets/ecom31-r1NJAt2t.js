var e=[`
//client/src/components/StripePaymentForm.js

import { useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import * as styles from './StripePaymentForm.module.css';

const StripePaymentForm = ({
  clientSecret,
  onSuccess,
  onError,
  total,
  shippingAddress,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [cardBrand, setCardBrand] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setProcessing(true);
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: shippingAddress.fullName,
              email: shippingAddress.email,
              address: {
                line1: shippingAddress.street,
                city: shippingAddress.city,
                postal_code: shippingAddress.postalCode,
                country: 'GB',
              },
            },
          },
        },
      );

      if (error) {
        onError(error.message);
        setProcessing(false);
        return;
      }
      if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent.id);
      }
    } catch (err) {
      onError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };

  const elementOptions = {
    style: {
      base: {
        fontSize: '16px',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSmoothing: 'antialiased',
        color: '#1a1a1a',
        '::placeholder': {
          color: '#a0aec0',
        },
      },
      invalid: {
        color: '#e53e3e',
        iconColor: '#e53e3e',
      },
    },
  };

  const handleCardChange = (event) => {
    if (event.brand) {
      setCardBrand(event.brand);
    }
  };

  const getCardIcon = () => {
    const icons = {
      visa: '💳 Visa',
      mastercard: '💳 Mastercard',
      amex: '💳 Amex',
      discover: '💳 Discover',
    };
    return icons[cardBrand] || null;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.secureHeader}>
        <svg
          className={styles.lockIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>Secure Payment</span>
      </div>

      <div className={styles.cardGroup}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Card Number</label>
          <div className={styles.cardInputContainer}>
            <CardNumberElement
              options={elementOptions}
              className={styles.stripeInput}
              onChange={handleCardChange}
            />
            {cardBrand && cardBrand !== 'unknown' && (
              <span className={styles.cardBrand}>{getCardIcon()}</span>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputWrapper}>
            <label className={styles.label}>Expiry</label>
            <div className={styles.cardInputContainer}>
              <CardExpiryElement
                options={elementOptions}
                className={styles.stripeInput}
              />
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>CVC</label>
            <div className={styles.cardInputContainer}>
              <CardCvcElement
                options={elementOptions}
                className={styles.stripeInput}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || processing}
        className={styles.submitButton}
      >
        {processing ? (
          <span className={styles.spinner}></span>
        ) : (
          <>Pay £{total?.toFixed(2) || '0.00'}</>
        )}
      </button>

      <div className={styles.cardLogos}>
        <img
          src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
          alt="Visa"
        />
        <img
          src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
          alt="Mastercard"
        />
        <img
          src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
          alt="Amex"
        />
      </div>

      <p className={styles.poweredBy}>
        Powered by <span className={styles.stripeLogo}>Stripe</span>
      </p>
    </form>
  );
};

export default StripePaymentForm;
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
    const refreshToken = localStorage.getItem('refreshToken');
    
    // No refresh token available (user didn't check "remember me")
    if (!refreshToken) {
      return null;
    }
    
    const res = await fetch('http://localhost:5001/api/auth/refresh', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
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
//client/src/pages/CheckoutPage.js

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePaymentForm from '../components/StripePaymentForm';
import { useAuth } from '../context/AuthContext';
import * as styles from './CheckoutPage.module.css';

console.log(
  'STRIPE_PUBLISHABLE_KEY:',
  process.env.STRIPE_PUBLISHABLE_KEY ? 'loaded' : 'not loaded',
);

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { fetchWithAuth, updateCartCount, user } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [placing, setPlacing] = useState(false);

  const [clientSecret, setClientSecret] = useState(null);
  const [paymentIntentId, setPaymentIntentId] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

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

  const handleProceedToPayment = async () => {
    if (!validateForm()) return;

    try {
      setPlacing(true);
      const res = await fetchWithAuth(
        'http://localhost:5001/api/payment/create-payment-intent',
        {
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
          }),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setClientSecret(data.clientSecret);
      setPaymentIntentId(data.paymentIntentId);
      setShowPaymentForm(true);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setPlacing(false);
    }
  };

  const handlePaymentSuccess = async (confirmedPaymentIntentId) => {
    try {
      const res = await fetchWithAuth(
        'http://localhost:5001/api/payment/confirm-payment',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentIntentId: confirmedPaymentIntentId,
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
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setCart({ items: [] });

      await updateCartCount();
      toast.success('Payment successful! Order placed.');
      setTimeout(() => navigate(\`/orders/\${data.order._id}\`), 1500);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handlePaymentError = (errorMessage) => {
    toast.error(errorMessage);
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
            onClick={handleProceedToPayment}
            disabled={placing}
            className={styles.placeOrderBtn}
          >
            {placing ? 'Processing...' : 'Proceed to Payment'}
          </button>
          {showPaymentForm && clientSecret && (
            <div className={styles.paymentFormOverlay}>
              <div className={styles.paymentFormContainer}>
                <button
                  className={styles.closeBtn}
                  onClick={() => setShowPaymentForm(false)}
                  aria-label="Close payment form"
                >
                  ×
                </button>
                <h2>Complete Payment</h2>
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <StripePaymentForm
                    clientSecret={clientSecret}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                    cart={cart}
                    total={total}
                    shippingAddress={{
                      fullName: formData.fullName,
                      email: formData.email,
                      street: formData.address,
                      city: formData.city,
                      postalCode: formData.postcode,
                    }}
                  />
                </Elements>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
`,`
//server/controllers/paymentController.js

import Stripe from 'stripe';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Cart from '../models/Cart.js';
console.log(
  'STRIPE_SECRET_KEY:',
  process.env.STRIPE_SECRET_KEY ? 'loaded' : 'not loaded',
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res, next) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: 'Items array is required and cannot be empty',
      });
    }

    const productIds = items.map((item) => item.productId);
    const dbProducts = await Product.find({ _id: { $in: productIds } });

    if (dbProducts.length !== productIds.length) {
      return res.status(400).json({
        message: 'One or more products not found',
      });
    }

    for (const item of items) {
      const dbProduct = dbProducts.find(
        (p) => p._id.toString() === item.productId,
      );
      if (dbProduct.stock < item.quantity) {
        return res.status(400).json({
          message: \`Insufficient stock for \${dbProduct.name}.\`,
        });
      }
    }

    const orderItems = items.map((item) => {
      const dbProduct = dbProducts.find(
        (p) => p._id.toString() === item.productId,
      );
      return {
        productId: item.productId,
        name: dbProduct.name,
        image: dbProduct.images[0] || '',
        price: dbProduct.price, // databasde price
        quantity: item.quantity,
      };
    });

    const totalAmount = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount * 100),
      currency: 'gbp',
      metadata: {
        userId: req.user.id,
        items: JSON.stringify(items),
      },
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Payment Intent Error:', error);
    next(error);
  }
};

export const confirmPayment = async (req, res, next) => {
  try {
    const { paymentIntentId, items, shippingAddress, paymentMethod } = req.body;

    if (!paymentIntentId) {
      return res.status(400).json({
        message: 'Payment Intent ID is required',
      });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({
        message: 'Payment not completed',
        status: paymentIntent.status,
      });
    }

    const productIds = items.map((item) => item.productId);
    const dbProducts = await Product.find({ _id: { $in: productIds } });

    const orderItems = items.map((item) => {
      const dbProduct = dbProducts.find(
        (p) => p._id.toString() === item.productId,
      );
      return {
        productId: item.productId,
        name: dbProduct.name,
        image: dbProduct.images[0] || '',
        price: dbProduct.price,
        quantity: item.quantity,
      };
    });

    const totalAmount = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const order = new Order({
      user: req.user.id,
      items: orderItems,
      shippingAddress,
      totalAmount,
      paymentMethod: paymentMethod || 'stripe',
      status: 'paid',
      paymentStatus: 'paid',
      paidAt: new Date(),
    });

    await order.save();

    for (const item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    await Cart.findOneAndDelete({ user: req.user.id })

    res.status(201).json({ order });
  } catch (error) {
    next(error);
  }
};

export const stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(\`Webhook Error: \${err.message}\`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent succeeded:', paymentIntent.id);
      // add more functionality
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      console.log('PaymentIntent failed:', failedPayment.id);
      // add more functionality
      break;

    default:
      console.log(\`Unhandled event type \${event.type}\`);
  }
  res.json({ received: true });
};
`,`
//server/middleware/validateId.js

import mongoose from 'mongoose';

export const validateObjectId = (req, res, next) => {
  const id = req.params.id;
  
  if (id && !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  
  next();
};
`,`
//server/routes/ orderRoutes.js

import express from 'express';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getAllOrders,
} from '../controllers/orderController.js';
import {
  authMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js';
import { validateObjectId } from '../middleware/validateId.js';

const router = express.Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);
router.get('/all', [authMiddleware, adminMiddleware], getAllOrders);
router.get('/:id', validateObjectId, authMiddleware, getOrderById);
router.patch(
  '/:id',
  validateObjectId,
  [authMiddleware, adminMiddleware],
  updateOrder,
);
router.delete(
  '/:id',
  validateObjectId,
  [authMiddleware, adminMiddleware],
  deleteOrder,
);

export default router;
`,`
// server/routes/paymentRoutes.js

import express from 'express';
import {
  createPaymentIntent,
  confirmPayment,
  stripeWebhook,
} from '../controllers/paymentController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-payment-intent', authMiddleware, createPaymentIntent);
router.post('/confirm-payment', authMiddleware, confirmPayment);
router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  stripeWebhook,
);

export default router;
`,`
// server/server.js

import 'dotenv/config';
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
import paymentRoutes from './routes/paymentRoutes.js';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import hpp from 'hpp';


connectDB();

const app = express();
app.use(helmet());

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 500, // 500 requests per IP
  message: { message: 'Too many requests, please try again later.' },
  standardHeaders: true, // return rate limitt info in RateLimit eaders
  legacyHeaders: false, // disable deprecated X-ratelimit headera
});
app.use(globalLimiter);

const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50, // 50 requests per 15 minutes
  message: { message: 'Too many attempts, please try again later.' },
});

const sanitize = (obj) => {
  if (obj === null || typeof obj !== 'object') return;
  for (const key in obj) {
    if (key.startsWith('$') || key.includes('.')) {
      delete obj[key];
    } else if (typeof obj[key] === 'object') {
      sanitize(obj[key]);
    }
  }
};

const sanitizeRequest = (req, res, next) => {
  sanitize(req.body);
  sanitize(req.params);
  next();
};

app.use(morgan('dev'));
const allowedOrigins = [
  process.env.CLIENT_URL, // this we will add in our .env file
  'http://localhost:8080', // fallback for local devs
].filter(Boolean); // removes endefined values

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(sanitizeRequest);
app.use(hpp({ whitelist: ['category', 'images'] }));

//Routes
app.use('/api/users', strictLimiter);
app.use('/api/orders', strictLimiter);
app.use('/api/admin', strictLimiter);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(\`[\${new Date().toISOString()}] Error:\`, {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  const statusCode = err.status || err.statusCode || 500;

  if (process.env.NODE_ENV === 'production') {
    return res.status(statusCode).json({ message: 'Something went wrong' });
  }

  res.status(statusCode).json({ message: err.message, stack: err.stack });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`];export{e as default};
//# sourceMappingURL=ecom31-r1NJAt2t.js.map