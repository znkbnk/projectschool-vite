const solutionCode1 = `
// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./Components/Footer";
import './styles.css'


function App() {
  return (
    <BrowserRouter>
      <div>        
        <Routes>          
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



`;

const solutionCode2 = `
// pages/About.js

import '../styles/about.css';

const About = () => {
  return (
    <div className="about">
      {/* About Section */}
      <section className="about-intro">
        <div className="about-content">
          <h1 className="about-title">About Harmony Music Academy</h1>
          <p className="about-description">
            At Harmony Music Academy, we believe in the transformative power of music. 
            With over 25 years of experience, we have nurtured countless aspiring musicians to 
            discover their passion and excel in their musical journey.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/7322012/pexels-photo-7322012.jpeg"
            alt="About Us"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-description">
          To inspire and empower individuals through high-quality music education, fostering a lifelong love for music.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {[
            {
              name: "John Smith",
              role: "Founder & Director",
              image: "https://via.placeholder.com/150",
            },
            {
              name: "Emily Davis",
              role: "Vocal Instructor",
              image: "https://via.placeholder.com/150",
            },
            {
              name: "Michael Brown",
              role: "Guitar Instructor",
              image: "https://via.placeholder.com/150",
            },
            {
              name: "Sophia Wilson",
              role: "Piano Instructor",
              image: "https://via.placeholder.com/150",
            },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h2 className="section-title">Our Achievements</h2>
        <ul className="achievement-list">
          <li>Over 25 years of excellence in music education</li>
          <li>Trained 1000+ students across various instruments</li>
          <li>Certified and highly experienced instructors</li>
          <li>Recognized by leading music organizations worldwide</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

`;
const solutionCode3 = `
// Components/Footer.js

import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Harmony Music Academy</h3>
          <p>
            Transforming lives through the power of music for over 25 years. Join us to embark on your musical journey!
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@harmonymusic.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Music Lane, Melody City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Harmony Music Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,

];
