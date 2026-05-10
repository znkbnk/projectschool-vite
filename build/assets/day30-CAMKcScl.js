var e=[`
// src/pages/admin/LessonManagement/CreateLessonForm.js

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CreateLessonForm = ({
  onLessonCreated,
  lessonToEdit,
  setLessonToEdit,
}) => {
  const [formData, setFormData] = useState({
    teacher: "",
    lessonType: "",
    date: "",
    time: { hour: "1", minute: "00", period: "AM" }, // Time is now an object
    location: "",
    status: "Scheduled",
  });

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    if (lessonToEdit) {
      const [time, period] = lessonToEdit.time.split(" ");
      const [hour, minute] = time.split(":");
      setFormData({
        teacher: lessonToEdit.teacher._id,
        lessonType: lessonToEdit.lessonType,
        date: new Date(lessonToEdit.date).toISOString().split("T")[0],
        time: { hour, minute, period },
        location: lessonToEdit.location,
        status: lessonToEdit.status,
      });
    }
  }, [lessonToEdit]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(\`http://localhost:5001/api/users\`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const users = await response.json();
        const teachers = users.filter((user) => user.role === "Teacher");
        setTeachers(teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      time: {
        ...prevData.time,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine time fields into a single string (e.g., "2:30 PM")
    const timeString = \`\${formData.time.hour}:\${formData.time.minute} \${formData.time.period}\`;

    // Prepare the payload
    const payload = {
      teacher: formData.teacher,
      lessonType: formData.lessonType,
      date: formData.date,
      time: timeString,
      location: formData.location,
      status: formData.status,
    };

    console.log("Payload being sent:", payload); // Log the payload

    const url = lessonToEdit
      ? \`http://localhost:5001/api/lessons/\${lessonToEdit._id}\`
      : \`http://localhost:5001/api/lessons\`;

    const method = lessonToEdit ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json(); // Log the error response from the server
        console.error("Server error response:", errorData);
        throw new Error(
          \`Failed to \${lessonToEdit ? "update" : "create"} lesson\`
        );
      }

      alert(\`Lesson \${lessonToEdit ? "updated" : "created"} successfully!\`);
      setFormData({
        teacher: "",
        lessonType: "",
        date: "",
        time: { hour: "1", minute: "00", period: "AM" },
        location: "",
        status: "Scheduled",
      });
      setLessonToEdit(null);
      onLessonCreated();
    } catch (error) {
      console.error(
        \`Error \${lessonToEdit ? "updating" : "creating"} lesson:\`,
        error
      );
      alert(
        \`Failed to \${
          lessonToEdit ? "update" : "create"
        } lesson. Please try again.\`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className='create-lesson-form'>
      <div className='form-group'>
        <label>Teacher:</label>
        <select
          name='teacher'
          value={formData.teacher}
          onChange={handleChange}
          required
        >
          <option value=''>Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher._id} value={teacher._id}>
              {teacher.name} ({teacher.teacherDetails?.expertise?.join(", ")})
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label>Lesson Type:</label>
        <input
          type='text'
          name='lessonType'
          value={formData.lessonType}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Date:</label>
        <input
          type='date'
          name='date'
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Time:</label>
        <div className='time-selectors'>
          <select
            name='hour'
            value={formData.time.hour}
            onChange={handleTimeChange}
            required
            className='time-select'
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            name='minute'
            value={formData.time.minute}
            onChange={handleTimeChange}
            required
            className='time-select'
          >
            {["00", "15", "30", "45"].map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
          <select
            name='period'
            value={formData.time.period}
            onChange={handleTimeChange}
            required
            className='time-select'
          >
            <option value='AM'>AM</option>
            <option value='PM'>PM</option>
          </select>
        </div>
      </div>
      <div className='form-group'>
        <label>Location:</label>
        <input
          type='text'
          name='location'
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Status:</label>
        <select
          name='status'
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value='Scheduled'>Scheduled</option>
          <option value='Completed'>Completed</option>
          <option value='Cancelled'>Cancelled</option>
        </select>
      </div>
      <button type='submit' className='submit-btn'>
        {lessonToEdit ? "Update Lesson" : "Create Lesson"}
      </button>
      {lessonToEdit && (
        <button
          type='button'
          className='cancel-btn'
          onClick={() => setLessonToEdit(null)}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

CreateLessonForm.propTypes = {
  onLessonCreated: PropTypes.func.isRequired,
  lessonToEdit: PropTypes.object,
  setLessonToEdit: PropTypes.func.isRequired,
};

export default CreateLessonForm;

`,`
// src/pages/admin/LessonManagement/LessonListTable.js
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./LessonListTable.css";

const LessonListTable = ({ refreshLessons, onEditLesson }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, [refreshLessons]);

  const fetchLessons = async () => {
    try {
      const response = await fetch(\`http://localhost:5001/api/lessons\`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch lessons");
      }
      const data = await response.json();
      setLessons(data);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(\`http://localhost:5001/api/lessons/\${id}\`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to delete lesson");
      }

      alert("Lesson deleted successfully!");
      fetchLessons();
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert("Failed to delete lesson. Please try again.");
    }
  };

  return (
    <table className='lesson-table'>
      <thead>
        <tr>
          <th>Teacher</th>
          <th>Lesson Type</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {lessons.map((lesson) => (
          <tr key={lesson._id}>
            <td>{lesson.teacher?.name}</td>
            <td>{lesson.lessonType}</td>
            <td>{new Date(lesson.date).toLocaleDateString()}</td>
            <td>{lesson.time}</td>
            <td>{lesson.location}</td>
            <td>{lesson.status}</td>
            <td>
              <button
                className='delete-btn'
                onClick={() => handleDelete(lesson._id)}
              >
                Delete
              </button>
              <button className='edit-btn' onClick={() => onEditLesson(lesson)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

LessonListTable.propTypes = {
  refreshLessons: PropTypes.bool.isRequired,
  onEditLesson: PropTypes.func.isRequired,
};

export default LessonListTable;
`,`
// src/pages/admin/LessonManagement/LessonManagement.js

import { useState } from "react";
import CreateLessonForm from "./CreateLessonForm.js";
import LessonListTable from "./LessonListTable.js";
import  "./LessonManagement.css";

const LessonManagement = () => {
  const [refreshLessons, setRefreshLessons] = useState(false);
  const [lessonToEdit, setLessonToEdit] = useState(null);

  const handleLessonCreated = () => {
    setRefreshLessons((prev) => !prev);
  };

  const handleEditLesson = (lesson) => {
    setLessonToEdit(lesson);
  };

  return (
    <div className="lesson-management">
      <h1>Lesson Management</h1>
      <CreateLessonForm
        onLessonCreated={handleLessonCreated}
        lessonToEdit={lessonToEdit}
        setLessonToEdit={setLessonToEdit}
      />
      <LessonListTable
        refreshLessons={refreshLessons}
        onEditLesson={handleEditLesson}
      />
    </div>
  );
};

export default LessonManagement;
`];export{e as default};
//# sourceMappingURL=day30-CAMKcScl.js.map