const solutionCode1 = `
//backend/.env

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

`;

const solutionCode2 = `
//backend/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);

`;
const solutionCode3 = `
//backend/models/Project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);

`;
const solutionCode4 = `
//backend/routes/authRoutes.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// POST /login - Admin login and generate JWT
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

`;
const solutionCode5 = `
//backend/routes/projectRoutes.js

const express = require('express');
const Project = require('../models/Project');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// GET /projects - Fetch all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /projects - Create a new project (admin only)
router.post('/projects', authMiddleware, async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const project = new Project({ title, description, image });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /projects/:id - Update an existing project (admin only)
router.put('/projects/:id', authMiddleware, async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true }
    );
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /projects/:id - Delete a project (admin only)
router.delete('/projects/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted', project });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

`;
const solutionCode6 = `
//backend/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

`;
const solutionCode7 = `
backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server running');
    });
  })
  .catch((err) => console.log(err));

`;
const solutionCode8 = `
//frontend/src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
    </header>
  );
};

export default Header;

`;
const solutionCode9 = `
//frontend/src/components/ProjectCard.js

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
};

export default ProjectCard;

`;
const solutionCode10 = `
//frontend/src/components/AdminPanel.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', image: '' });
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('/api/projects', { headers: { Authorization: \`Bearer \${token}\` } });
      setProjects(res.data);
    };
    fetchProjects();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/projects', newProject, { headers: { Authorization: \`Bearer \${token}\` } });
    setProjects((prev) => [...prev, res.data]);
    setNewProject({ title: '', description: '', image: '' });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          placeholder="Project Title"
        />
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          placeholder="Project Description"
        />
        <input
          type="text"
          name="image"
          value={newProject.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <button type="submit">Add Project</button>
      </form>

      <div>
        {projects.map((project) => (
          <div key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;

`;const solutionCode11 = `
// /frontend/src/pages/Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Portfolio</h2>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Home;

`;const solutionCode12 = `
//frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
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
  solutionCode8,
  solutionCode9,
  solutionCode10,
  solutionCode11,
  solutionCode12,
];
