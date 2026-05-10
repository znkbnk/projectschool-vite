/* eslint-disable import/no-anonymous-default-export */


const solutionCode1 = `
//App.js 

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css'

const App = () => {
  return (
    <motion.div 
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Header />
      <motion.div className="content-wrapper">
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default App;
`;

const solutionCode2 = `
//About.js 

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const handleMoreClick = () => setShowMore(!showMore);

  return (
    <motion.div 
      className="container section-padding" 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="row">
        <div className="col-md-12 text-center">
          <motion.h1 
            className="text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            About Me
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm Alex, <span className="highlight">Aspiring Web Developer</span>
          </motion.h3>
          <motion.p 
            id="about-me-text" 
            className="text-justify lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I am a beginner in web development with a growing passion for coding. I have recently started exploring web technologies and am excited to expand my skills. I am learning HTML, CSS, and JavaScript to build basic websites and enhance my understanding of web development practices.
            {showMore && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              > Currently, I'm focusing on creating simple web pages and projects to practice my skills and gain hands-on experience.</motion.span>
            )}
          </motion.p>
          <motion.button 
            id="more" 
            className="btn btn-lg btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMoreClick}
          >
            {showMore ? 'Less' : 'More'}
          </motion.button>
        </div>
      </div>
      <motion.div 
        className="row education-work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="col-md-6">
          <h2>Education</h2>
          <motion.div className="timeline">
            {[
              { year: '2012 - 2014', title: 'High School', institution: 'Local High School, Your City' },
              { year: '2004 - 2012', title: 'Primary School', institution: 'Local Primary School, Your City' },
              { year: '2022 - 2024', title: 'Web Development Bootcamp', institution: 'Online Web Development Course' },
            ].map((edu, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-badge">{edu.year}</div>
                <div className="timeline-panel">
                  <h4>{edu.title}</h4>
                  <p>{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="col-md-6">
          <h2>Work Experience & Skills</h2>
          <motion.div className="timeline">
            <motion.div 
              className="timeline-item"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="timeline-badge">2023</div>
              <div className="timeline-panel">
                <h4>Intern</h4>
                <p>Internship at a local tech company, assisting with website updates and learning on the job.</p>
              </div>
            </motion.div>
            <motion.div 
              className="timeline-item"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="timeline-badge">Languages</div>
              <div className="timeline-panel">
                <p>English - intermediate, Spanish - beginner</p>
              </div>
            </motion.div>
            <motion.div 
              className="timeline-item"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="timeline-badge">Tech Skills</div>
              <div className="timeline-panel">
                <p>HTML, CSS, JavaScript (beginner)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

`;

const solutionCode3 = `
//Contact.js 

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div 
      className="contact-section"
      id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container section-padding">
        <motion.h1 
          className="text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Get in Touch
        </motion.h1>
        <div className="row">
          <div className="col-md-6 contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <ul className="contact-details">
              <li><FaEnvelope /> email@example.com</li>
              <li><FaUser /> +1 234 567 8900</li>
            </ul>
          </div>
          <div className="col-md-6">
            <form className="contact-form" action="https://formspree.io/yo@yourdomain.com" method="POST">
              <div className="form-group">
                <FaUser className="input-icon" />
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <FaEnvelope className="input-icon" />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <FaComment className="input-icon" />
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
`;

const solutionCode4 = `
// Footer.js

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope,  FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact</h3>
            <ul className="contact-list">
              <li><FaPhone /> <a href="tel:+447878787787">+447878787787</a></li>
              <li><FaEnvelope /> <a href="mailto:email@gmail.com">email@example.com</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <motion.a href="#" whileHover={{ scale: 1.2 }}><FaGithub /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }}><FaLinkedin /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }}><FaTwitter /></motion.a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <hr />
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
`;

const solutionCode5 = `
//Header.js

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div 
      className="jumbotron homepage"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row">
          <motion.div 
            className="col-md-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556636530-6b7482d80e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="img-circle  profile-image" 
              alt="Profile"
            />
          </motion.div>
          <motion.div 
            className="col-md-8 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="header-text">
              <motion.h1 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 1 }}
              >
                HELLO!
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                I'm Alex, <span className="highlight">Aspiring Web Developer</span>
              </motion.h3>
              <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <a href="#portfolio" className="btn btn-primary btn-lg">View My Projects</a>
                <a href="#contact" className="btn btn-outline-light btn-lg">Get in Touch</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

`;

const solutionCode6 = `
//Navbar.js 

import React, { useState, useEffect, useRef } from 'react';
import icon1 from '../assets/1.gif';
import icon2 from '../assets/2.gif';
import icon3 from '../assets/3.gif';
import icon4 from '../assets/4.gif';
import logo from '../assets/logo.png';

const Navbar = () => {
  const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797"];
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const borderRef = useRef(null);

  const icons = [icon1, icon2, icon3, icon4];

 const clickItem = (index) => {
  setActiveIndex(index);
  document.body.style.backgroundColor = bgColorsBody[index];
  offsetMenuBorder(menuRef.current.children[index], borderRef.current);
  
  // Smooth scroll to the section
  const sectionId = ["top", "about", "portfolio", "contact"][index];
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -600; 
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  const offsetMenuBorder = (element, menuBorder) => {
    const offsetActiveItem = element.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left - menuRef.current.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";
    menuBorder.style.transform = \`translate3d(\${left}, 0 , 0)\`;
  };

  useEffect(() => {
    offsetMenuBorder(menuRef.current.children[activeIndex], borderRef.current);
    const handleResize = () => offsetMenuBorder(menuRef.current.children[activeIndex], borderRef.current);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#top" className="navbar-brand">
              <img src={logo} alt="Logo" className="logo-img" />
            </a>
          </div>
          <div id="navbar" className="navbar-menu">
            <ul className="navbar-nav" ref={menuRef}>
              {icons.map((icon, index) => (
                <li key={index} className={\`menu__item \${activeIndex === index ? 'active' : ''}\`}
                  style={{ '--bgColorItem': bgColorsBody[index] }}
                  onClick={() => clickItem(index)}>
                  <a href={["#top", "#about", "#portfolio", "#contact"][index]}>
                    <img src={icon} alt={\`Icon \${index + 1}\`} />
                  </a>
                </li>
              ))}
              <div className="menu__border" ref={borderRef}></div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
`;

const solutionCode7 = `
// Portfolio.js

import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { name: 'Project1', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://github.com' },
    { name: 'Project2', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://github.com' },
    { name: 'Project3', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: 'https://github.com' },
  ];

  return (
    <motion.div 
      className="container section-padding" 
      id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        My Portfolio
      </motion.h1>
      <motion.h4 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Web Design and Development
      </motion.h4>
      <div className="row portfolio-items">
        {projects.map((project, index) => (
          <motion.div 
            key={project.name} 
            className="col-md-4 portfolio-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div 
              className="portfolio-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} className="img-responsive" alt={project.name}/>
              <div className="portfolio-overlay">
                <h3>{project.name}</h3>
                <a href={project.link} className="btn btn-primary">View Project</a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
`;

const solutionCode8 = `
//Skills.js 

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 98, color: '#E44D26' },
    { name: 'CSS', level: 95, color: '#264DE4' },
    { name: 'Bootstrap', level: 90, color: '#563D7C' },
    { name: 'JavaScript', level: 85, color: '#F0DB4F' },
   
  ];

  return (
    <motion.div 
      className="skills-section section-padding"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-center">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            className="skill-item"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <motion.div 
              className="skill-bar"
              initial={{ width: 0 }}
              animate={{ width: \`\${skill.level}%\` }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{ backgroundColor: skill.color }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

`;


export default [
    solutionCode1,
    solutionCode2,
    solutionCode3,
    solutionCode4,
    solutionCode5,
    solutionCode6,
    solutionCode7,
    solutionCode8,

  ];