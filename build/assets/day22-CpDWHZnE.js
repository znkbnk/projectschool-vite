var e=[`
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
import Auth from "./pages/Auth";
import ProfileSetup from "./pages/ProfileSetup";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(\`\${process.env.REACT_APP_API_URL}/auth/me\`, {
            headers: {
                Authorization: \`Bearer \${token}\`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setUser(data))
            .catch((err) => console.error("Error fetching user data:", err));
    }
}, []);

  const handleRegistrationSuccess = (registeredUser) => {
    setUser(registeredUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setUser(null); 
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
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
              user ? (
                <ProfileSetup user={user} />
              ) : (
                <Navigate to='/auth' />
              )
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
`,`
// pages/Auth.js

import { useState } from "react";
import PropTypes from "prop-types"; // Import prop-types
import "../styles/auth.css";

const Auth = ({ onRegistrationSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });
  const [error, setError] = useState("");

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const backendUrl = process.env.REACT_APP_API_URL; 
    const url = isLogin
      ? \`\${backendUrl}/auth/login\`
      : \`\${backendUrl}/auth/register\`;

    const body = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // If registration or login is successful
      if (isLogin) {
        localStorage.setItem("token", data.token);
        onRegistrationSuccess(data.user); 
      } else {
        setIsLogin(true);
        alert("Registration successful! Please log in.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {error && <p className='error-message'>{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              {/* Name */}
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Role */}
              <div className='form-group'>
                <label htmlFor='role'>Role</label>
                <div className='select-wrapper'>
                  <select
                    id='role'
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value='Student'>Student</option>
                    <option value='Teacher'>Teacher</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Common */}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className='auth-button'>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleAuthMode} className='toggle-auth'>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};


Auth.propTypes = {
  onRegistrationSuccess: PropTypes.func.isRequired,
};

export default Auth;
`,`
// pages/ProfileSetup.js

import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/profileSetup.css";

const ProfileSetup = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    profilePicture: user.profilePicture || "",
    contactNumber: user.contactNumber || "",
    address: user.address || "",
    teacherDetails: user.teacherDetails || {
      bio: "",
      expertise: [],
      availability: [],
    },
    studentDetails: user.studentDetails || { enrolledLessons: [] },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTeacherDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        [name]: value,
      },
    });
  };

  const handleExpertiseChange = (e) => {
    const { value } = e.target;    
    const expertiseArray = value.split(",").map((item) => item.trim());
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        expertise: expertiseArray,
      },
    });
  };

  const handleAvailabilityChange = (e, index, field) => {
    const { value } = e.target;
    const updatedAvailability = [...formData.teacherDetails.availability];
    if (field === "day") {
      updatedAvailability[index] = {
        ...updatedAvailability[index],
        day: value,
      };
    } else if (field === "timeSlots") {
      updatedAvailability[index] = {
        ...updatedAvailability[index],
        timeSlots: value.split(",").map((slot) => slot.trim()),
      };
    }

    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        availability: updatedAvailability,
      },
    });
  };

  const addAvailability = () => {
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        availability: [
          ...formData.teacherDetails.availability,
          { day: "", timeSlots: [] },
        ],
      },
    });
  };

  const removeAvailability = (index) => {
    const updatedAvailability = formData.teacherDetails.availability.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      teacherDetails: {
        ...formData.teacherDetails,
        availability: updatedAvailability,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(\`\${process.env.REACT_APP_API_URL}/auth/profile\`,  {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        alert(\`Failed to update profile: \${data.message}\`);
      }
    } catch {
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <div className='profile-setup-container'>
      <h1>Profile Setup</h1>
      <form className='profile-setup-form' onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Picture URL:</label>
          <input
            type='text'
            name='profilePicture'
            value={formData.profilePicture}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type='text'
            name='contactNumber'
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {user.role === "Teacher" && (
          <div className='profile-role-section'>
            <h2>Teacher Details</h2>
            <div>
              <label>Bio:</label>
              <textarea
                name='bio'
                value={formData.teacherDetails.bio}
                onChange={handleTeacherDetailsChange}
              />
            </div>
            <div>
              <label>Expertise:</label>
              <textarea
                name='expertise'
                value={formData.teacherDetails.expertise.join(", ")}
                onChange={handleExpertiseChange}
                placeholder="Enter expertise as comma-separated values (e.g., piano, guitar)"
              />
            </div>
            <div>
              <label>Availability:</label>
              {formData.teacherDetails.availability.map((availability, index) => (
                <div key={index} className='availability-entry'>
                  <input
                    type='text'
                    placeholder='Day (e.g., Monday)'
                    value={availability.day}
                    onChange={(e) => handleAvailabilityChange(e, index, "day")}
                  />
                  <input
                    type='text'
                    placeholder='Time Slots (e.g., 10:00 AM, 2:00 PM)'
                    value={availability.timeSlots.join(", ")}
                    onChange={(e) => handleAvailabilityChange(e, index, "timeSlots")}
                  />
                  <button
                    type='button'
                    onClick={() => removeAvailability(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type='button' onClick={addAvailability}>
                Add Availability
              </button>
            </div>
          </div>
        )}

        {user.role === "Student" && (
          <div className='profile-role-section'>
            <h2>Student Details</h2>
            <div>
              <label>Enrolled Lessons:</label>
              <textarea
                name='enrolledLessons'
                value={formData.studentDetails.enrolledLessons.join(", ")}
                onChange={(e) => {
                  const { value } = e.target;
                  setFormData({
                    ...formData,
                    studentDetails: {
                      ...formData.studentDetails,
                      enrolledLessons: value.split(",").map((item) => item.trim()),
                    },
                  });
                }}
              />
            </div>
          </div>
        )}

        <button type='submit'>Save Profile</button>
      </form>
    </div>
  );
};

ProfileSetup.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    contactNumber: PropTypes.string,
    address: PropTypes.string,
    role: PropTypes.oneOf(["Student", "Teacher", "Admin"]).isRequired,
    teacherDetails: PropTypes.shape({
      bio: PropTypes.string,
      expertise: PropTypes.arrayOf(PropTypes.string),
      availability: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string,
          timeSlots: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    }),
    studentDetails: PropTypes.shape({
      enrolledLessons: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default ProfileSetup;
`];export{e as default};
//# sourceMappingURL=day22-CpDWHZnE.js.map