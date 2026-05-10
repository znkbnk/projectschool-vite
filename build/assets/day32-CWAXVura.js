var e=[`
// src/pages/admin/TestimonialManagement/CreateTestimonialForm.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CreateTestimonialForm.css";

const CreateTestimonialForm = ({ onTestimonialCreated, testimonialToEdit, setTestimonialToEdit }) => {
  const [formData, setFormData] = useState({
    user: "",
    title: "",
    content: "",
    rating: 5,
    approved: false,
  });
  const [users, setUsers] = useState([]); 

  // Fetch all registered users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
        const response = await fetch(\`\${backendUrl}/api/users\`, {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Populate form data if editing a testimonial
  useEffect(() => {
    if (testimonialToEdit) {
      setFormData({
        user: testimonialToEdit.user._id,
        title: testimonialToEdit.title || "",
        content: testimonialToEdit.content,
        rating: testimonialToEdit.rating,
        approved: testimonialToEdit.approved,
      });
    }
  }, [testimonialToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
    const url = testimonialToEdit
      ? \`\${backendUrl}/api/testimonials/\${testimonialToEdit._id}\`
      : \`\${backendUrl}/api/testimonials\`;
    const method = testimonialToEdit ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to process testimonial");
      }

      alert(\`Testimonial \${testimonialToEdit ? "updated" : "created"} successfully!\`);
      setFormData({ user: "", title: "", content: "", rating: 5, approved: false });
      setTestimonialToEdit(null);
      onTestimonialCreated();
    } catch (error) {
      console.error(\`Error \${testimonialToEdit ? "updating" : "creating"} testimonial:\`, error.message);
      alert(\`Failed to \${testimonialToEdit ? "update" : "create"} testimonial: \${error.message}\`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-testimonial-form">
      <div className="form-group">
        <label>User:</label>
        <select
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Title (Optional):</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
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
        <label>Rating (1-5):</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>
          Approved ( Visible for public ):
          <input
            type="checkbox"
            name="approved"
            checked={formData.approved}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" className="submit-btn">
        {testimonialToEdit ? "Update Testimonial" : "Create Testimonial"}
      </button>
      {testimonialToEdit && (
        <button
          type="button"
          className="cancel-btn"
          onClick={() => setTestimonialToEdit(null)}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

CreateTestimonialForm.propTypes = {
  onTestimonialCreated: PropTypes.func.isRequired,
  testimonialToEdit: PropTypes.object,
  setTestimonialToEdit: PropTypes.func.isRequired,
};

export default CreateTestimonialForm;
`,`
// src/pages/admin/TestimonialManagement/TestimonialListTable.js

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./TestimonialListTable.css";

const TestimonialListTable = ({ refreshTestimonials, onEditTestimonial }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, [refreshTestimonials]);

  const fetchTestimonials = async () => {
    try {
      const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
      const response = await fetch(\`\${backendUrl}/api/testimonials/all\`, {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to fetch testimonials");
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
      const response = await fetch(\`\${backendUrl}/api/testimonials/\${id}\`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to delete testimonial");
      alert("Testimonial deleted successfully!");
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      alert("Failed to delete testimonial. Please try again.");
    }
  };

  return (
    <table className="testimonial-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Title</th>
          <th>Content</th>
          <th>Rating</th>
          <th>Approved</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {testimonials.map((testimonial) => (
          <tr key={testimonial._id}>
            <td>{testimonial.user?.name || "Unknown"}</td>
            <td>{testimonial.title || "N/A"}</td>
            <td>{testimonial.content.substring(0, 50)}...</td>
            <td>{testimonial.rating}</td>
            <td>{testimonial.approved ? "Yes" : "No"}</td>
            <td>
              <button className="edit-btn" onClick={() => onEditTestimonial(testimonial)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(testimonial._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TestimonialListTable.propTypes = {
  refreshTestimonials: PropTypes.bool.isRequired,
  onEditTestimonial: PropTypes.func.isRequired,
};

export default TestimonialListTable;

`,`
// src/pages/admin/TestimonialManagement/TestimonialManagement.js

import { useState } from "react";
import CreateTestimonialForm from "./CreateTestimonialForm.js";
import TestimonialListTable from "./TestimonialListTable.js";
import "./TestimonialManagement.css";

const TestimonialManagement = () => {
  const [refreshTestimonials, setRefreshTestimonials] = useState(false);
  const [testimonialToEdit, setTestimonialToEdit] = useState(null);

  const handleTestimonialCreated = () => {
    setRefreshTestimonials((prev) => !prev);
  };

  const handleEditTestimonial = (testimonial) => {
    setTestimonialToEdit(testimonial);
  };

  return (
    <div className="testimonial-management">
      <h1>Testimonial Management</h1>
      <CreateTestimonialForm
        onTestimonialCreated={handleTestimonialCreated}
        testimonialToEdit={testimonialToEdit}
        setTestimonialToEdit={setTestimonialToEdit}
      />
      <TestimonialListTable
        refreshTestimonials={refreshTestimonials}
        onEditTestimonial={handleEditTestimonial}
      />
    </div>
  );
};

export default TestimonialManagement;
`];export{e as default};
//# sourceMappingURL=day32-CWAXVura.js.map