const solutionCode1 = `
//App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Model from './components/Model';
import Footer from './components/Footer';
import models from './data/models';
import './styles.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {models.map((model, index) => (
          <Route
            key={index}
            path={model.path}
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Model {...model} />
              </motion.div>
            }
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

`;

const solutionCode2 = `
//data/models.js

const models = [
    {
      path: "/models",
      backgroundImage: "https://images.unsplash.com/photo-1716558964076-1abe07448abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      modelName: "Model S",
      speed: "1.99 s",
      topSpeed: "200 mph",
      range: "396 mi",
      price: "$79,990",
      description: "Tesla Model S is designed for speed and endurance, with incredible aerodynamics, ludicrous performance and uncompromised aesthetics."
    },
    {
      path: "/model3",
      backgroundImage: "https://images.unsplash.com/photo-1562178235-7ba56b202338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      modelName: "Model 3",
      speed: "3.1 s",
      topSpeed: "162 mph",
      range: "358 mi",
      price: "$39,990",
      description: "Tesla Model 3 is designed for electric-powered performance, with dual motor AWD, quick acceleration, long range and fast charging."
    },
    {
      path: "/modelx",
      backgroundImage: "https://images.pexels.com/photos/12086516/pexels-photo-12086516.jpeg",
      modelName: "Model X",
      speed: "2.5 s",
      topSpeed: "163 mph",
      range: "348 mi",
      price: "$89,990",
      description: "Tesla Model X is the safest, quickest, and most capable sport utility vehicle in history. With all-wheel drive and best in class storage."
    },
    {
      path: "/modely",
      backgroundImage: "https://cdn.motor1.com/images/mgl/8Ap7Xe/s1/tesla-model-y.webp",
      modelName: "Model Y",
      speed: "3.5 s",
      topSpeed: "155 mph",
      range: "326 mi",
      price: "$52,990",
      description: "Tesla Model Y is a fully electric, mid-size SUV with unparalleled protection and versatile cargo space, designed for maximum safety."
    }
  ];
  
  export default models;
  
`;
const solutionCode3 = `
// components/Footer.js

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p>&copy; {new Date().getFullYear()} Tesla, Inc.</p>
      <p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.1, color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          Privacy & Legal
        </motion.a>{' '}
        |{' '}
        <motion.a
          href="/"
          whileHover={{ scale: 1.1, color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          Contact
        </motion.a>{' '}
        |{' '}
        <motion.a
          href="/"
          whileHover={{ scale: 1.1, color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          Careers
        </motion.a>{' '}
        |{' '}
        <motion.a
          href="/"
          whileHover={{ scale: 1.1, color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          Get Newsletter
        </motion.a>{' '}
        |{' '}
        <motion.a
          href="/"
          whileHover={{ scale: 1.1, color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          Locations
        </motion.a>
      </p>
    </motion.footer>
  );
};

export default Footer;
`;
const solutionCode4 = `
//components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import models from '../data/models'

const Header = () => {
  const location = useLocation();

  return (
    <motion.div
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="header-nav">
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img src="https://i.postimg.cc/8CD1RNbR/logo.png" className="logo" alt="Tesla Logo" />
        </motion.a>
        <ul className="header-links">
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </motion.li>
          {models.map((model, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={model.path}
                className={location.pathname === model.path ? 'active' : ''}
              >
                {model.modelName}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.a
          href="/"
          className="btn"
          whileHover={{ scale: 1.1, backgroundColor: '#c01118' }}
          transition={{ duration: 0.3 }}
        >
          Reserve Now
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default Header;

`;
const solutionCode5 = `
//components/Home.js

import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ y: 0, opacity: 1 });
  }, [controls]);

  return (
    <motion.div
      className="home"
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <section className="intro">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome to Tesla
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Discover the latest in electric vehicle technology and explore our models.
        </motion.p>
      </section>
      <section className="features">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Why Tesla?
        </motion.h2>
        <div className="feature-cards">
          <motion.div
            className="feature-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Electric Performance</h3>
            <p>Experience instant torque and smooth acceleration with zero emissions.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3>Autopilot</h3>
            <p>Advanced driver assistance system enhances safety and convenience on the road.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3>Long Range</h3>
            <p>Go further with the industry's best range and supercharger network.</p>
          </motion.div>
        </div>
      </section>
      <section className="test-drive">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Schedule a Test Drive
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Experience Tesla vehicles firsthand with a personalized test drive at your convenience.
        </motion.p>
        <motion.a
          href="/"
          className="btn"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.1, backgroundColor: '#c01118' }}
        >
          Book Now
        </motion.a>
      </section>
    </motion.div>
  );
};

export default Home;
`;
const solutionCode6 = `
//components/Model.js

import React from 'react';
import { motion } from 'framer-motion';

const Model = ({ backgroundImage, modelName, speed, topSpeed, range, price, description }) => {
  return (
    <motion.div
      className="model"
      style={{ backgroundImage: \`url(\${backgroundImage})\` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="model-info">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {modelName}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <div className="specs">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>{speed}</h2>
            <p>0-60 mph</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>{topSpeed}</h2>
            <p>Top Speed</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2>{range}</h2>
            <p>Range</p>
          </motion.div>
        </div>
        <div className="price">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {price}
          </motion.h2>
        </div>
        <motion.a
          href="/"
          className="btn"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.1, backgroundColor: '#c01118' }}
        >
          Order Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Model;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4, solutionCode5, solutionCode6, ];
