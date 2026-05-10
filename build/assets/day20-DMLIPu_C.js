var e=[`
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
    // split input string into an array of strings ,
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
      const response = await fetch("http://localhost:5001/auth/profile", {
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
//# sourceMappingURL=day20-DMLIPu_C.js.map