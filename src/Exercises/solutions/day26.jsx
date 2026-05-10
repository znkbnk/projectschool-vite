const solutionCode1 = `
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
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(\`\${process.env.REACT_APP_API_URL}/auth/me\`, {
          credentials: "include", 
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Handle successful registration/login
  const handleRegistrationSuccess = (registeredUser) => {
    setUser(registeredUser); 
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch(\`\${process.env.REACT_APP_API_URL}/auth/logout\`, {
        method: "POST",
        credentials: "include", 
      });

      if (response.ok) {
        setUser(null); 
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />

          {/* Auth Route */}
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

          {/* Profile Setup Route */}
          <Route
            path='/profile-setup'
            element={
              user ? <ProfileSetup user={user} /> : <Navigate to='/auth' />
            }
          />

          {/* Admin Routes */}
          <Route
            path='/admin'
            element={
              <ProtectedRoute user={user}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Catch-all Route */}
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
// pages/admin/AdminDashboard.js

import { useState } from "react";
import BlogManagement from "./BlogManagement/index.js";
import './styles/AdminDashboard.css'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("blogs")}
          className={activeTab === "blogs" ? "active" : ""}
        >
          Blogs
        </button>
      </div>

      {activeTab === "blogs" && <BlogManagement />}
    </div>
  );
};

export default AdminDashboard;
`;
const solutionCode3 = `
// components/ProtectedRoute.js

import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (!user || user?.role !== "Admin") {
    return <Navigate to='/auth' />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
 
];
