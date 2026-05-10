const solutionCode1 = `
// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
`;

const solutionCode2 = `
// Components/Home.js

import  { useState } from 'react';
import '../styles.css'

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Parker",
      role: "Piano Student",
      text: "The online lessons have been incredible. I've made more progress in 3 months than I did in a year of self-learning."
    },
    {
      name: "Mike Johnson",
      role: "Guitar Student",
      text: "The instructors are world-class and the curriculum is perfectly structured for beginners like me."
    },
    {
      name: "Lisa Chen",
      role: "Vocal Student",
      text: "Found my voice and confidence through these amazing classes. The support is outstanding!"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg" 
            alt="Music Academy Background"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Harmony Music Academy</h1>
          <p className="hero-description">Where passion meets expertise in music education</p>
          <div className="button-group">
            <button className="button-primary">
              Start Your Journey
              <span>→</span>
            </button>
            <button 
              className="button-secondary"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? '❚❚' : '▶'} Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          {[
            { value: "15+", label: "Instruments" },
            { value: "1000+", label: "Students" },
            { value: "200+", label: "Online Classes" },
            { value: "25+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2 className="section-title">Our Programs</h2>
        <div className="programs-grid">
          {[
            {
              title: "Instrumental Classes",
              description: "Master your chosen instrument with personalized guidance from expert instructors.",
              features: ["One-on-one sessions", "Flexible scheduling", "All skill levels"]
            },
            {
              title: "Vocal Training",
              description: "Develop your voice and singing technique with professional vocal coaches.",
              features: ["Breath control", "Pitch training", "Performance skills"]
            },
            {
              title: "Online Lessons",
              description: "Learn music from anywhere in the world with our virtual classroom experience.",
              features: ["HD video calls", "Recording features", "Digital resources"]
            }
          ].map((program, index) => (
            <div key={index} className="program-card">
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <ul className="feature-list">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">Student Stories</h2>
        <div className="testimonial-card">
          <div className="testimonial-text">{testimonials[activeTestimonial].text}</div>
          <div className="testimonial-author">{testimonials[activeTestimonial].name}</div>
          <div className="testimonial-role">{testimonials[activeTestimonial].role}</div>
        </div>
        <div className="testimonial-nav">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={\`nav-dot \${index === activeTestimonial ? 'active' : ''}\`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
]
