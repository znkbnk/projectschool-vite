const solutionCode1 = `
// src/pages/admin/Blogmanagment/BlogListTable.js

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './BlogListTable.css'

const BlogListTable = ({ refreshBlogs }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [refreshBlogs]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/blogs", {
        credentials: "include",
      });
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
      const response = await fetch(\`http://localhost:5001/api/blogs/\${id}\`, {
        method: "DELETE",
        credentials: "include",
      });

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
    <table className="blog-table">
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
                className="delete-btn"
                onClick={() => handleDelete(blog._id)}
              >
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => {/* Add edit functionality */}}
              >
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
};

export default BlogListTable;
`;

const solutionCode2 = `
// src/pages/admin/BlogManagment/BlogManagement.js

import { useState } from "react";
import CreateBlogForm from "./CreateBlogForm.js";
import BlogListTable from "./BlogListTable.js";
import './BlogManagement.css'

const BlogManagement = () => {
  const [refreshBlogs, setRefreshBlogs] = useState(false);

  const handleBlogCreated = () => {
    setRefreshBlogs((prev) => !prev);
  };

  return (
    <div className="blog-management">
      <h1>Blog Management</h1>
      <CreateBlogForm onBlogCreated={handleBlogCreated} />
      <BlogListTable refreshBlogs={refreshBlogs} />
    </div>
  );
};

export default BlogManagement;
`;
const solutionCode3 = `
// src/pages/admin/Blogmanagment/CreateBlogForm.js

import { useState } from "react";
import PropTypes from "prop-types";
import './CreateBlogForm.css'

const CreateBlogForm = ({ onBlogCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    thumbnail: null,
  });

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
    formDataToSend.append("tags", formData.tags.split(",").map((tag) => tag.trim()));
    formDataToSend.append("thumbnail", formData.thumbnail);

    try {
      const response = await fetch("http://localhost:5001/api/blogs", {
        method: "POST",
        body: formDataToSend,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      alert("Blog created successfully!");
      setFormData({ title: "", content: "", tags: "", thumbnail: null });
      onBlogCreated();
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-blog-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Tags (comma-separated):</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Thumbnail:</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleChange}
          accept="image/*"
        />
      </div>
      <button type="submit" className="submit-btn">Create Blog</button>
    </form>
  );
};

CreateBlogForm.propTypes = {
  onBlogCreated: PropTypes.func.isRequired,
};

export default CreateBlogForm;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  
];
