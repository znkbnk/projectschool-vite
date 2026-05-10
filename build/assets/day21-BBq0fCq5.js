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
        fetch("http://localhost:5001/auth/me", {
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
// backend/models/userSchema.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Teacher', 'Admin'], required: true },
  profilePicture: { type: String },
  contactNumber: { type: String },
  address: { type: String },
  teacherDetails: {
    bio: { type: String },
    expertise: [String], //  ["piano", "guitar"]
    availability: [{ day: String, timeSlots: [String] }], // [{ day: "monday", timeSlots: ["10:00 AM", "2:00 PM"] }]
  },
  studentDetails: {
    enrolledLessons: [String], 
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);

`,`
// backend/routes/authRoutes.js

//authRoutes.js

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        // Return user data 
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: \`Error registering user: \${error.message}\` });
    }
});


// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: \`Error logging in user: \${error.message}\` });
    }
});

// Get authenticated user info (protect provided in endpoint)
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user); // Ensure this is returning JSON
    } catch (error) {
        res.status(500).json({ message: \`Error fetching user: \${error.message}\` });
    }
});

router.put('/profile', protect, async (req, res) => {
    try {
      const { name, profilePicture, contactNumber, address, teacherDetails, studentDetails } = req.body;
  
      const user = await User.findById(req.user.id);
  
      if (user) {
        // Update basic fields
        user.name = name || user.name;
        user.profilePicture = profilePicture || user.profilePicture;
        user.contactNumber = contactNumber || user.contactNumber;
        user.address = address || user.address;
  
        // Update teacher details (if role is Teacher)
        if (user.role === 'Teacher') {
          user.teacherDetails = teacherDetails || user.teacherDetails;
        }
  
        // Update student details (if role is Student)
        if (user.role === 'Student') {
          user.studentDetails = studentDetails || user.studentDetails;
        }
  
        // Save the updated user
        const updatedUser = await user.save();
  
        res.status(200).json({
          message: 'Profile updated successfully',
          user: updatedUser
        });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: \`Error updating profile: \${error.message}\` });
    }
  });

export default router;

`];export{e as default};
//# sourceMappingURL=day21-BBq0fCq5.js.map