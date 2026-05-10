const solutionCode1 = `
//client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HomePage = () => <div>HomePage</div>;
const ProductListPage = () => <div>Product List Page</div>;
const ProductDetailPage = () => <div>Product Detail Page</div>;
const CartPage = () => <div>Cart Page</div>;
const CheckoutPage = () => <div>Checkout Page</div>;
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

`;

const solutionCode2 = `
//client/src/components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Navbar.module.css';

const Navbar = () => {
  const isLoggedIn = false; // this is temp
  const isAdmin = false; // this is temp

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <NavLink to="/" className={styles.navbar__logo}>
          E-Shop
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
          {isLoggedIn && (
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
                  Profile
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
            </>
          )}
          {!isLoggedIn && (
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

`;
const solutionCode3 = `
//client/src/components/Footer.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <ul className={styles.footer__links_list}>
            <li>
              <NavLink to="/" className={styles.footer__link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={styles.footer__link}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={styles.footer__link}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.footer__copyright}>
          <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3];
