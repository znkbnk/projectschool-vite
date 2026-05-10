const solutionCode1 = `
// src/App.js

// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import ProfileSetup from "./pages/ProfileSetup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Activity from "./pages/Activity";
import { useState, useEffect, useCallback } from "react";
import Messages from "./components/Messages";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

function App() {
  const [user, setUser] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/me\`, {
        credentials: "include",
      });
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      if (data && data._id) {
        const newUser = {
          _id: data._id || data.id,
          name: data.name,
          email: data.email,
          role: data.role,
          studentDetails: data.studentDetails,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      }
    } catch (error) {
      console.error("fetchUserData error:", error.message);
    }
  }, [backendUrl]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      fetchUserData();
    }
  }, [fetchUserData]);

  const handleRegistrationSuccess = async (registeredUser) => {
    const newUser = {
      _id: registeredUser.id || registeredUser._id,
      name: registeredUser.name,
      email: registeredUser.email,
      role: registeredUser.role,
      studentDetails: registeredUser.studentDetails,
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    await fetchUserData();
  };

  const handleLogout = async () => {
    try {
      await fetch(\`\${backendUrl}/auth/logout\`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      localStorage.removeItem("user");
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route
            path='/services'
            element={<Services user={user} setUser={setUser} />}
          />
          <Route
            path='/services/calendar'
            element={<Services user={user} setUser={setUser} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
          console.log(User in App.js Messages route, user);
          <Route
            path='/messages'
            element={
              (console.log("Rendering Messages route - user exists?", !!user),
              user ? <Messages user={user} /> : <Navigate to='/auth' />)
            }
          />
          <Route
            path='/auth'
            element={
              user ? (
                <Navigate to='/' />
              ) : (
                <Auth onRegistrationSuccess={handleRegistrationSuccess} />
              )
            }
          />
          <Route
            path='/profile-setup'
            element={
              user ? <ProfileSetup user={user} /> : <Navigate to='/auth' />
            }
          />
          <Route
            path='/admin'
            element={
              <ProtectedRoute user={user}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/teacher-dashboard'
            element={
              user && user.role === "Teacher" ? (
                <TeacherDashboard user={user} />
              ) : (
                <Navigate to='/auth' />
              )
            }
          />
          <Route
            path='/activity'
            element={user ? <Activity user={user} /> : <Navigate to='/auth' />}
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

`;

const solutionCode2 = `
// src/components/WelcomeWidget.js

// WelcomeWidget.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./WelcomeWidget.css";

const WelcomeWidget = ({ user }) => {
  const [nextLesson, setNextLesson] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    if (user && user._id) {
      const fetchNextLesson = async () => {
        try {
          const response = await fetch(
            \`\${backendUrl}/api/lessons?user=\${user._id}&upcoming=true\`,
            {
              credentials: "include",
            }
          );
          if (response.ok) {
            const lessons = await response.json();
            setNextLesson(lessons[0] || null);
          }
        } catch (error) {
          console.error("Error fetching next lesson:", error);
        }
      };
      fetchNextLesson();
    }
  }, [user, backendUrl]);

  if (!user) return null;

  return (
    <div className='welcome-widget'>
      <div className='welcome-content'>
        <h2 className='welcome-title'>Welcome back, {user.name}!</h2>
        {nextLesson ? (
          <div className='lesson-info'>
            <p className='lesson-text'>
              Your next lesson is on{" "}
              <strong>{new Date(nextLesson.date).toLocaleDateString()}</strong>{" "}
              at <strong>{nextLesson.time}</strong> with{" "}
              <strong>{nextLesson.teacher?.name || "Unknown Teacher"}</strong>.
            </p>
            <Link to='/activity' className='action-button'>
              View Details
            </Link>
          </div>
        ) : (
          <div className='lesson-info'>
            <p className='lesson-text'>
              No upcoming lessons. Ready to start your musical journey?
            </p>
            <Link to='/services' className='action-button'>
              Book a Lesson
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

WelcomeWidget.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    role: PropTypes.string,
    studentDetails: PropTypes.object,
  }),
};

export default WelcomeWidget;

`;
const solutionCode3 = `
// src/pages/Home.js

import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/home.css";
import WelcomeWidget from "../components/WelcomeWidget";

const Home = ({ user }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Parker",
      role: "Piano Student",
      text: "The online lessons have been incredible. I've made more progress in 3 months than I did in a year of self-learning.",
    },
    {
      name: "Mike Johnson",
      role: "Guitar Student",
      text: "The instructors are world-class and the curriculum is perfectly structured for beginners like me.",
    },
    {
      name: "Lisa Chen",
      role: "Vocal Student",
      text: "Found my voice and confidence through these amazing classes. The support is outstanding!",
    },
  ];

  return (
    <div className='home'>
      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-background'>
          <img
            src='https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg'
            alt='Music Academy Background'
          />
        </div>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1 className='hero-title'>Harmony Music Academy</h1>
          <WelcomeWidget user={user} />
          <p className='hero-description'>
            Where passion meets expertise in music education
          </p>
          <div className='button-group'>
            <button className='button-primary'>
              Start Your Journey
              <span>→</span>
            </button>
            <button
              className='button-secondary'
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? "❚❚" : "▶"} Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='stats'>
        <div className='stats-grid'>
          {[
            { value: "15+", label: "Instruments" },
            { value: "1000+", label: "Students" },
            { value: "200+", label: "Online Classes" },
            { value: "25+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className='stat-card'>
              <div className='stat-number'>{stat.value}</div>
              <div className='stat-label'>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className='programs'>
        <h2 className='section-title'>Our Programs</h2>
        <div className='programs-grid'>
          {[
            {
              title: "Instrumental Classes",
              description:
                "Master your chosen instrument with personalized guidance from expert instructors.",
              features: [
                "One-on-one sessions",
                "Flexible scheduling",
                "All skill levels",
              ],
            },
            {
              title: "Vocal Training",
              description:
                "Develop your voice and singing technique with professional vocal coaches.",
              features: [
                "Breath control",
                "Pitch training",
                "Performance skills",
              ],
            },
            {
              title: "Online Lessons",
              description:
                "Learn music from anywhere in the world with our virtual classroom experience.",
              features: [
                "HD video calls",
                "Recording features",
                "Digital resources",
              ],
            },
          ].map((program, index) => (
            <div key={index} className='program-card'>
              <h3 className='program-title'>{program.title}</h3>
              <p className='program-description'>{program.description}</p>
              <ul className='feature-list'>
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className='feature-item'>
                    <span className='feature-dot'></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='testimonials'>
        <h2 className='section-title'>Student Stories</h2>
        <div className='testimonial-card'>
          <div className='testimonial-text'>
            {testimonials[activeTestimonial].text}
          </div>
          <div className='testimonial-author'>
            {testimonials[activeTestimonial].name}
          </div>
          <div className='testimonial-role'>
            {testimonials[activeTestimonial].role}
          </div>
        </div>
        <div className='testimonial-nav'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={\`nav-dot \${
                index === activeTestimonial ? "active" : ""
              }\`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    studentDetails: PropTypes.object,
  }),
};

export default Home;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
 
];
