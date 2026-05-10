var e=[`
// backend/routes/blogRoutes.js

import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import BlogPost from '../models/blogPostSchema.js';
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); 
  } else {
    cb(new Error("Only images are allowed"), false); 
  }
};

const upload = multer({
  storage,
  fileFilter, 
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 
});

router.post("/", protect, admin, upload.single("thumbnail"), async (req, res) => {
  if (req.fileValidationError) {
    return res.status(400).json({ message: req.fileValidationError });
  }

  const { title, content, tags = [] } = req.body;
  const thumbnail = req.file ? req.file.path : null;
  const author = req.user._id;

  console.log("Request Body:", req.body);
  console.log("Uploaded File:", req.file);

  try {
    const blogPost = new BlogPost({ title, content, author, tags, thumbnail });
    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put('/:id', protect, admin, upload.single('thumbnail'), async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const updateData = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()), // Convert tags string to array
    };

    if (req.file) {
      updateData.thumbnail = req.file.path; // Update thumbnail if a new file is uploaded
    }

    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', 'name');
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id).populate('author', 'name');
    if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
`,`
// src/App.js

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
        const response = await fetch(
          \`\${process.env.REACT_APP_API_URL}/auth/me\`,
          {
            credentials: "include",
          }
        );

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
      const response = await fetch(
        \`\${process.env.REACT_APP_API_URL}/auth/logout\`,
        {
          method: "POST",
          credentials: "include",
        }
      );

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

`,`
// src/pages/Blog.js

import { useState, useEffect } from "react";
import "../styles/blog.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogId, setExpandedBlogId] = useState(null); // Track which blog is expanded

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          \`\${process.env.REACT_APP_API_URL}/api/blogs\`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to toggle the expanded state of a blog
  const toggleReadMore = (blogId) => {
    if (expandedBlogId === blogId) {
      setExpandedBlogId(null); // Collapse if already expanded
    } else {
      setExpandedBlogId(blogId); // Expand the clicked blog
    }
  };

  return (
    <div className='blog-page'>
      <header className='blog-header'>
        <h1>Our Blog</h1>
        <p>Discover tips, tricks, and stories from our music experts.</p>
      </header>
      <div className='blog-list'>
        {blogs.map((blog) => (
          <div key={blog._id} className='blog-card'>
            <img
              src={\`\${process.env.REACT_APP_API_URL}/\${blog.thumbnail}\`}
              alt={blog.title}
              className='blog-thumbnail'
            />
            <div className='blog-content'>
              <h2>{blog.title}</h2>
              <span className='date'>
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <p>
                {expandedBlogId === blog._id
                  ? blog.content // Show full content if expanded
                  : \`\${blog.content.substring(0, 100)}...\`}{" "}
                {/* Truncate content if not expanded */}
              </p>
              <button
                className='read-more-btn'
                onClick={() => toggleReadMore(blog._id)} // Toggle on click
              >
                {expandedBlogId === blog._id ? "Read Less" : "Read More"}{" "}
                {/* Change button text */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

`,`
// src/pages/ProfileSetup.js

// ProfileSetup.jsx
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
      const response = await fetch(
        \`\${process.env.REACT_APP_API_URL}/auth/profile\`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

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
                placeholder='Enter expertise as comma-separated values (e.g., piano, guitar)'
              />
            </div>
            <div>
              <label>Availability:</label>
              {formData.teacherDetails.availability.map(
                (availability, index) => (
                  <div key={index} className='availability-entry'>
                    <input
                      type='text'
                      placeholder='Day (e.g., Monday)'
                      value={availability.day}
                      onChange={(e) =>
                        handleAvailabilityChange(e, index, "day")
                      }
                    />
                    <input
                      type='text'
                      placeholder='Time Slots (e.g., 10:00 AM, 2:00 PM)'
                      value={availability.timeSlots.join(", ")}
                      onChange={(e) =>
                        handleAvailabilityChange(e, index, "timeSlots")
                      }
                    />
                    <button
                      type='button'
                      onClick={() => removeAvailability(index)}
                    >
                      Remove
                    </button>
                  </div>
                )
              )}
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
                      enrolledLessons: value
                        .split(",")
                        .map((item) => item.trim()),
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

`,`
// src/pages/admin/BlogListtable.js

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BlogListTable.css";

const BlogListTable = ({ refreshBlogs, onEditBlog }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [refreshBlogs]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        \`\${process.env.REACT_APP_API_URL}/api/blogs\`,
        {
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        \`\${process.env.REACT_APP_API_URL}/api/blogs/\${id}\`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      alert("Blog deleted successfully!");
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    }
  };

  return (
    <table className='blog-table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog._id}>
            <td>{blog.title}</td>
            <td>{blog.author.name}</td>
            <td>{blog.tags.join(", ")}</td>
            <td>
              <button
                className='delete-btn'
                onClick={() => handleDelete(blog._id)}
              >
                Delete
              </button>
              <button className='edit-btn' onClick={() => onEditBlog(blog)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BlogListTable.propTypes = {
  refreshBlogs: PropTypes.bool.isRequired,
  onEditBlog: PropTypes.func.isRequired,
};

export default BlogListTable;

`,`
// src/pages/admin/BlogManagement.js

import { useState } from "react";
import CreateBlogForm from "./CreateBlogForm.js";
import BlogListTable from "./BlogListTable.js";
import './BlogManagement.css';

const BlogManagement = () => {
  const [refreshBlogs, setRefreshBlogs] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null); // State to track the blog being edited

  const handleBlogCreated = () => {
    setRefreshBlogs((prev) => !prev);
  };

  const handleEditBlog = (blog) => {
    setBlogToEdit(blog); // Set the blog to edit
  };

  return (
    <div className="blog-management">
      <h1>Blog Management</h1>
      <CreateBlogForm
        onBlogCreated={handleBlogCreated}
        blogToEdit={blogToEdit}
        setBlogToEdit={setBlogToEdit}
      />
      <BlogListTable
        refreshBlogs={refreshBlogs}
        onEditBlog={handleEditBlog} // Pass the edit handler to BlogListTable
      />
    </div>
  );
};

export default BlogManagement;
`,`
// src/pages/admin/CreateBlogForm.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CreateBlogForm.css";

const CreateBlogForm = ({ onBlogCreated, blogToEdit, setBlogToEdit }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    thumbnail: null,
  });

 
  useEffect(() => {
    if (blogToEdit) {
      setFormData({
        title: blogToEdit.title,
        content: blogToEdit.content,
        tags: blogToEdit.tags.join(", "),
        thumbnail: null, 
      });
    }
  }, [blogToEdit]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail") {
      setFormData({ ...formData, thumbnail: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append(
      "tags",
      formData.tags.split(",").map((tag) => tag.trim())
    );
    if (formData.thumbnail) {
      formDataToSend.append("thumbnail", formData.thumbnail);
    }

    const url = blogToEdit
      ? \`\${process.env.REACT_APP_API_URL}/api/blogs/\${blogToEdit._id}\`
      : \`\${process.env.REACT_APP_API_URL}/api/blogs\`;

    const method = blogToEdit ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: formDataToSend,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(\`Failed to \${blogToEdit ? "update" : "create"} blog\`);
      }

      alert(\`Blog \${blogToEdit ? "updated" : "created"} successfully!\`);
      setFormData({ title: "", content: "", tags: "", thumbnail: null });
      setBlogToEdit(null); // Reset the blog to edit
      onBlogCreated();
    } catch (error) {
      console.error(
        \`Error \${blogToEdit ? "updating" : "creating"} blog:\`,
        error
      );
      alert(
        \`Failed to \${blogToEdit ? "update" : "create"} blog. Please try again.\`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className='create-blog-form'>
      <div className='form-group'>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Content:</label>
        <textarea
          name='content'
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Tags (comma-separated):</label>
        <input
          type='text'
          name='tags'
          value={formData.tags}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Thumbnail:</label>
        <input
          type='file'
          name='thumbnail'
          onChange={handleChange}
          accept='image/*'
        />
      </div>
      <button type='submit' className='submit-btn'>
        {blogToEdit ? "Update Blog" : "Create Blog"}
      </button>
      {blogToEdit && (
        <button
          type='button'
          className='cancel-btn'
          onClick={() => setBlogToEdit(null)} // Cancel editing
        >
          Cancel
        </button>
      )}
    </form>
  );
};

CreateBlogForm.propTypes = {
  onBlogCreated: PropTypes.func.isRequired,
  blogToEdit: PropTypes.object,
  setBlogToEdit: PropTypes.func.isRequired,
};

export default CreateBlogForm;

`];export{e as default};
//# sourceMappingURL=day29-CAuUSJMI.js.map