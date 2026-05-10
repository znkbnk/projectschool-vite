/* eslint-disable no-useless-escape */
const solutionCode1 = `
//App.js

import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import MainSection from './components/MainSection';
import Specials from './components/Specials';
import Footer from './components/Footer';
import './styles.css'


const App = () => {
    const [scrolled, setScrolled] = useState(false);
  

    const handleScroll = () => {
        setScrolled(window.scrollY > 220);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

 

    return (
        <div className={\`App \${scrolled ? 'scrolled' : ''}\`}>
            <NavBar />
            <MainSection />
            <Specials />
            <Footer />
           
           
        </div>
    );
};

export default App;
`;

const solutionCode2 = `
//NavBar.js 

// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import useScrollEffect from '../hooks/useScrollEffect';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect(20);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(Math.floor(Math.random() * 5));
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className={\`navbar \${scrolled ? 'scrolled' : ''}\`}>
      <div className="nav-container">
        <a href="/" className="logo">
          <img src="./img/pslogosmalljpg.png" alt="Sweet Delights Logo" />
        </a>
        <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className={\`nav-links \${isOpen ? 'open' : ''}\`}>
          <li><a href="/" onClick={toggleNav}>Home</a></li>
          <li><a href="/menu" onClick={toggleNav}>Our Cakes</a></li>
          <li><a href="/book" onClick={toggleNav}>Order Custom Cake</a></li>
          <li><a href="/about" onClick={toggleNav}>About</a></li>
          <li><a href="/contact" onClick={toggleNav}>Contact Us</a></li>
        </ul>
        <div className="cart-icon">
          <FiShoppingCart />
          {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
`;
const solutionCode3 = `
//Main.js

// components/Main.js
import React, { useState, useEffect } from 'react';
import { FaBirthdayCake, FaLeaf, FaHeart } from 'react-icons/fa';

const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "url('https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="main-section" style={{backgroundImage: images[currentImage]}}>
      <div className="main-content">
        <h1>Welcome to Sweet Delights</h1>
        <p className="tagline">Where every slice is a celebration</p>
        <div className="features">
          <div className="feature">
            <FaBirthdayCake className="feature-icon" />
            <span>Premium Ingredients</span>
          </div>
          <div className="feature">
            <FaLeaf className="feature-icon" />
            <span>Vegan Options</span>
          </div>
          <div className="feature">
            <FaHeart className="feature-icon" />
            <span>Baked with Love</span>
          </div>
        </div>
        <a href="/menu" className="cta-button">Explore Our Cakes</a>
      </div>
    </section>
  );
};

export default Main;
`;
const solutionCode4 = `
//Specials.js

import React, { useState } from 'react';
import { FaBirthdayCake, FaChild, FaArrowRight } from 'react-icons/fa';

const WeddingCakeIcon = () => (
  <svg className="special-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
    <path d="M2 21h20"></path>
    <path d="M7 8v2"></path>
    <path d="M12 8v2"></path>
    <path d="M17 8v2"></path>
    <path d="M7 4h.01"></path>
    <path d="M12 4h.01"></path>
    <path d="M17 4h.01"></path>
  </svg>
);

const SpecialCard = ({ title, time, description, price, extraInfo, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={\`special-card \${isHovered ? 'hovered' : ''}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <h3>{title}</h3>
      <p className="time">{time}</p>
      <p className="description">{description}</p>
      <p className="price">\${price}</p>
      {extraInfo && <p className="extra-info">{extraInfo}</p>}
      {isHovered && (
        <button className="order-now">
          Order Now <FaArrowRight />
        </button>
      )}
    </div>
  );
};

const Specials = () => {
  return (
    <section className="specials-section">
      <div className="container">
        <h2>Our Special Cakes</h2>
        <div className="specials-grid">
          <SpecialCard
            title="Birthday Cake Bundle"
            time="Available daily"
            description="Cake, candles, and party favors"
            price="49.99"
            icon={<FaBirthdayCake className="special-icon" />}
          />
          <SpecialCard
            title="Wedding Cake Tasting"
            time="By appointment"
            description="Sample our top 5 wedding cake flavors"
            price="29.99"
            extraInfo="Per couple"
            icon={<WeddingCakeIcon />}
          />
        </div>
        <div className="children-offer">
          <FaChild className="child-icon" />
          <p>
            Kids' Birthday Cake Special<br />
            Free personalized message and candles<br />
            <strong>Every day!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specials;
`;
const solutionCode5 = `
//Footer.js

// components/Footer.js
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import useEmailValidation from '../hooks/useEmailValidation';

const Footer = () => {
  const [email, setEmail] = useState('');
  const isEmailValid = useEmailValidation(email);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      alert('Thank you for subscribing!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="./img/pslogosmalljpg.png" alt="Sweet Delights Logo" className="footer-logo" />
          <h3>Sweet Delights</h3>
          <nav className="footer-nav">
            <a href="/book">Order a cake</a>
            <a href="/menu">See our cakes</a>
            <a href="/catering">Catering</a>
          </nav>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Location</p>
          <p><FaPhone /> Phone number</p>
          <p><FaEnvelope /> Email</p>
          <p>Mon - Sat: 9:00am - 8:00pm</p>
          <p>Sun: 10:00am - 6:00pm</p>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={isEmailValid ? 'valid' : ''}
              placeholder="Enter your email"
            />
            <button type="submit" className="subscribe-btn" disabled={!isEmailValid}>Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="/"><FaFacebook /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sweet Delights. All rights reserved.</p>
        <p>Licence Number</p>
      </div>
    </footer>
  );
};

export default Footer;
`;
const solutionCode6 = `
//EmailInput.js

import { useState } from 'react';
import useEmailValidation from './hooks/useEmailValidation';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const isValidEmail = useEmailValidation(email);

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className={isValidEmail ? 'valid' : 'invalid'}
      />
      {!isValidEmail && <p>Please enter a valid email address</p>}
    </div>
  );
};

export default EmailInput;
`;
const solutionCode7 = `
//useEmailValidation.js

import { useState, useEffect } from 'react';

const useEmailValidation = (email) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^([A-Za-z\d_-]+)@([A-Za-z\d_-]+)\.([A-Za-z]{2,14})(\.[A-Za-z]{2,8})?$/;
    setIsValid(emailRegex.test(email));
  }, [email]);

  return isValid;
};

export default useEmailValidation;
`;
const solutionCode8 = `
//useScrollEffect.js

import { useEffect, useState } from 'react';

const useScrollEffect = (threshold = 220) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
};

export default useScrollEffect;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4, solutionCode5, solutionCode6, solutionCode7, solutionCode8];