const solutionCode1 = `
//AboutSection.js 

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-cards">
          <div className="about-card">
            <i className="fas fa-dumbbell"></i>
            <h3>Customized Fitness</h3>
            <p>Tailored programs to meet your unique goals and needs.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-hard-hat"></i>
            <h3>Personal Training</h3>
            <p>One-on-one sessions with expert trainers, anywhere you prefer.</p>
          </div>
          <div className="about-card">
            <i className="fas fa-users"></i>
            <h3>Group Sessions</h3>
            <p>Energizing team workouts to boost motivation and results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
`;

const solutionCode2 = `
//ContactSection.js 

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  send the form data to your server
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <div className="success-message">
            <h3>Thank you for contacting us!</h3>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

`;
const solutionCode3 = `
//Footer.js 

import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Orange Gym</h3>
            <p>Get fit, stay healthy, live better.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="home" smooth={true}>Home</Link></li>
              <li><Link to="about" smooth={true}>About</Link></li>
              <li><Link to="trainers" smooth={true}>Trainers</Link></li>
              <li><Link to="contact" smooth={true}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Orange Gym. All rights reserved.</p>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <Link to="home" smooth={true} className="back-to-top">
        <i className="fas fa-chevron-up"></i>
      </Link>
    </footer>
  );
};

export default Footer
`;
const solutionCode4 = `
//HeroSection.js 

import React from 'react';
import { Link } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>
          GET FIT, STRONG & <span className="highlight">HEALTHY</span>
        </h1>
        <p>
          An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        </p>
        <Link to="contact" smooth={true} duration={500} className="btn btn-primary">Let's Start</Link>
      </div>
      <div className="scroll-down">
        <Link to="about" smooth={true} duration={500}>
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

`;
const solutionCode5 = `
//Navbar.js 

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={\`navbar \${isScrolled ? 'scrolled' : ''}\`}>
      <div className="container">
        <ScrollLink to="home" smooth={true} duration={500} className="navbar-brand">
          <span className="brand-highlight">Orange Gym</span>
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="btn btn-primary join-now"
          onClick={() => setIsNavOpen(false)}
        >
          Join Now
        </ScrollLink>
        <button className="navbar-toggler" onClick={() => setIsNavOpen(!isNavOpen)}>
          <span className="burger-icon"></span>
        </button>
        <div className={\`navbar-collapse \${isNavOpen ? 'show' : ''}\`}>
          <ul className="navbar-nav">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setIsNavOpen(false)}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="trainers"
                smooth={true}
                duration={500}
                onClick={() => setIsNavOpen(false)}
              >
                Trainers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

`;
const solutionCode6 = `
//TrainersSection.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const trainers = [
  {
    name: 'Trainer 1',
    image: 'https://images.unsplash.com/photo-1533681717801-1bbd2ec8d269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: ['twitter', 'facebook']
  },
  {
    name: 'Trainer 2',
    image: 'https://images.unsplash.com/photo-1584863431255-3997371dcc01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: ['twitter', 'instagram']
  },
  {
    name: 'Trainer 3',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: ['twitter', 'instagram']
  }
];

const TrainersSection = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
  
    return (
      <section id="trainers" className="trainers-section">
        <div className="container">
          <h2>Our Trainers</h2>
          <Slider {...settings}>
            {trainers.map((trainer, index) => (
              <div key={index} className="trainer-card">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <p>Professional Trainer</p>
                  <div className="trainer-social">
                    {trainer.social.map((platform) => (
                      <a key={platform} href="/" className={\`social-btn \${platform}\`}>
                        <i className={\`fab fa-\${platform}\`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };

export default TrainersSection;

`;
const solutionCode7 = `
//App.js 

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TrainersSection from './components/TrainersSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TrainersSection />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
  solutionCode7,
];
