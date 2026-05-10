const solutionCode1 = `
//About.js

import React from "react";
import "../index.css";

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='section-title'>
          <h1>
            About <span className='accent-text'>Me</span>
          </h1>
        </div>
        <div className='row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg'>
          <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
            <div className='about-content'>
              <p>
                Hello, I'm You, a web designer and developer dedicated to
                creating impactful React projects and sharing educational
                content on Instagram. With a strong background in both design
                and development, I excel in crafting dynamic and user-friendly
                interfaces.
              </p>
              <p>
                My primary focus is developing innovative React projects that
                showcase the latest trends and techniques. Additionally, I enjoy
                creating informative and engaging lessons on Instagram, covering
                various aspects of React to empower others in their journey as
                developers.
              </p>
              <p>
                Outside of my React projects and content creation, I cherish
                spending time with my family and exploring the outdoors. I
                thrive on continuous learning and am always seeking new
                challenges to further evolve as a designer and developer. If
                you're interested in collaborating or have a project in mind,
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

`;

const solutionCode2 = `
//Clients.js

import React from "react";
import "../index.css";

const Clients = () => {
  return (
    <section id='client'>
      <div className='container'>
        <div className='section-title'>
          <h1>
            My <span className='accent-text'>Clients</span>
          </h1>
        </div>
        <div className='clients-grid'>
          <div className='client-item'>
            <img src='/img/one.jpg' alt='Client 1' />
          </div>
          <div className='client-item'>
            <img src='/img/two.jpg' alt='Client 2' />
          </div>
          <div className='client-item'>
            <img src='/img/three.jpg' alt='Client 3' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

`;
const solutionCode3 = `
//Contact.js

import React from 'react';
import '../index.css';


const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h1>Contact <span className="accent-text">Me</span></h1>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

`;
const solutionCode4 = `
//Footer.js

import React from 'react';
import '../index.css';


const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 You. All Rights Reserved.</p>
          <ul className="social-links">
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

`;
const solutionCode5 = `
//Header.js

import React, { useState } from 'react';
import '../index.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="main-header" className={isNavOpen ? 'open-nav' : ''}>
      <div className="header-wrapper">
        <a className="logo" href="/">reactlessons</a>
        <div className="mobile-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={isNavOpen ? 'open' : ''}>
          <ul>
            <li><a id="hero-link" href="#hero" onClick={toggleNav}>Home</a></li>
            <li><a id="about-link" href="#about" onClick={toggleNav}>About</a></li>
            <li><a id="services-link" href="#services" onClick={toggleNav}>Services</a></li>
            <li><a id="portfolio-link" href="#portfolio" onClick={toggleNav}>Portfolio</a></li>
            <li><a id="client-link" href="#client" onClick={toggleNav}>Clients</a></li>
            <li><a id="contact-link" href="#contact" onClick={toggleNav}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
`;
const solutionCode6 = `
//Hero.js

import React from 'react';
import '../index.css';


const Hero = () => {
  return (
    <section id="hero">
        <div className='container'>
      <div id="particles-js">
        <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <div className="hero-content">
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
              <h1>Hi! I'm You</h1>
              <h2 id="hero-text-animation">www.projectschool.dev</h2>
              <button className="download"><a download href="downloads/example.txt">Download CV</a></button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

`;
const solutionCode7 = `
//Portfolio.js

import React, { useState } from "react";
import "../index.css"; 

const Portfolio = () => {
  const [currentFilter, setCurrentFilter] = useState("*"); 

  
  const handleFilterClick = (filterValue) => {
    setCurrentFilter(filterValue); 
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-title">
          <h1>
            My <span className="accent-text">Portfolio</span>
          </h1>
        </div>
        <div id="filter-btn" className="button-group">
          <ul>
            <li>
              <button
                className={\`button \${currentFilter === "*" ? "is-checked" : ""}\`}
                onClick={() => handleFilterClick("*")}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={\`button \${currentFilter === ".one" ? "is-checked" : ""}\`}
                onClick={() => handleFilterClick(".one")}
              >
                One
              </button>
            </li>
            <li>
              <button
                className={\`button \${currentFilter === ".two" ? "is-checked" : ""}\`}
                onClick={() => handleFilterClick(".two")}
              >
                Two
              </button>
            </li>
            <li>
              <button
                className={\`button \${currentFilter === ".three" ? "is-checked" : ""}\`}
                onClick={() => handleFilterClick(".three")}
              >
                Three
              </button>
            </li>
          </ul>
        </div>
        <div className="img-grid">
          <div className={\`img-container \${currentFilter === "*" || currentFilter === ".one" ? "" : "hidden"}\`}>
            <img src="/img/one.jpg" alt="One" />
          </div>
          <div className={\`img-container \${currentFilter === "*" || currentFilter === ".two" ? "" : "hidden"}\`}>
            <img src="/img/two.jpg" alt="Two" />
          </div>
          <div className={\`img-container \${currentFilter === "*" || currentFilter === ".three" ? "" : "hidden"}\`}>
            <img src="/img/three.jpg" alt="Three" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

`;
const solutionCode8 = `
//Services.js

import React from "react";
import "../index.css";

const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <div className='section-title'>
          <h1>
            My <span className='accent-text'>Services</span>
          </h1>
        </div>
        <div className='services-grid'>
          <div className='service-item'>
            <h2>Text1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='service-item'>
            <h2>text2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='service-item'>
            <h2>text3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

`;
const solutionCode9 = `
//Skills.js

import React from 'react';
import '../index.css';


const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="accent-text">Skills</span></h1>
        </div>
        <div className="skills-grid">
          <div className="skill-item">
            <h2>HTML</h2>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h2>CSS</h2>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h2>JavaScript</h2>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h2>React</h2>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

`;
const solutionCode10 = `
//App.js

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

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
  solutionCode8,
  solutionCode9,
  solutionCode10,
];

// const todayFormatted = \`\${today.getMonth() + 1}-\${today.getDate()}\`;
