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
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import ProfileSetup from "./pages/ProfileSetup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Activity from "./pages/Activity";
import { useState, useEffect, useCallback } from "react";
import Messages from "./components/Messages";

function App() {
  const [user, setUser] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  // Fetch user data function, memoized with useCallback
  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/me\`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null); // Ensure user is null if fetch fails
    }
  }, [backendUrl]);

  // Fetch user data on mount
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Handle successful registration/login
  const handleRegistrationSuccess = async (registeredUser) => {
    // Set initial user data from login/register response
    setUser(registeredUser);
    // Immediately fetch full profile to ensure all data is loaded
    await fetchUserData();
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/logout\`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setUser(null);
        console.log("Logged out successfully");
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

          {/* Protected Routes (Require Login) */}
          <Route
            path='/messages'
            element={user ? <Messages user={user} /> : <Navigate to='/auth' />}
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
            path='/activity'
            element={user ? <Activity user={user} /> : <Navigate to='/auth' />}
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
// src/components/CalendarView.js

// src/components/CalendarView.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import moment from "moment";
import "../styles/calendar.css";

const CalendarView = ({ user }) => {
  const [events, setEvents] = useState([]);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(\`\${backendUrl}/api/lessons\`, {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch lessons");
        const lessons = await response.json();

        const formattedEvents = lessons.map((lesson) => {
          const dateStr = lesson.date.split("T")[0];
          const start = moment(
            \`\${dateStr} \${lesson.time}\`,
            "YYYY-MM-DD h:mm A"
          ).format();
          const end = moment(start).add(1, "hour").format();

          return {
            title: \`\${lesson.lessonType} with \${
              lesson.teacher?.name || "Teacher"
            }\`,
            start,
            end,
            allDay: false,
            extendedProps: {
              lessonId: lesson._id,
              teacher: lesson.teacher,
              students: lesson.students,
              location: lesson.location,
              status: lesson.status,
            },
            backgroundColor: getEventColor(lesson.status),
            borderColor: getEventColor(lesson.status),
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, [backendUrl, user]);

  const getEventColor = (status) => {
    switch (status) {
      case "Completed":
        return "#10b981";
      case "Cancelled":
        return "#ef4444";
      default:
        return "#8b5cf6";
    }
  };

  const handleEventClick = (clickInfo) => {
    const event = clickInfo.event;
    clickInfo.jsEvent.preventDefault();

    // Create a custom modal instead of alert
    const modal = document.createElement("div");
    modal.className = "calendar-modal";
    modal.innerHTML = \`
      <div class="modal-content">
        <h3>\${event.title}</h3>
        <p><strong>Time:</strong> \${moment(event.start).format("LLLL")}</p>
        <p><strong>Status:</strong> <span class="status-\${event.extendedProps.status.toLowerCase()}">\${
      event.extendedProps.status
    }</span></p>
        <p><strong>Location:</strong> \${
          event.extendedProps.location || "Not specified"
        }</p>
        <button class="modal-close">Close</button>
      </div>
    \`;

    modal.querySelector(".modal-close").addEventListener("click", () => {
      document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
  };

  return (
    <div className='calendar-section'>
      <div className='calendar-container'>
        <h2 className='calendar-title'>Lesson Calendar</h2>
        <div className='calendar-wrapper'>
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView='timeGridWeek'
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            events={events}
            eventClick={handleEventClick}
            selectable={user?.role === "Admin" || user?.role === "Teacher"}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            eventDisplay='block'
            height='auto'
            contentHeight='auto'
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: "short",
            }}
            themeSystem='standard'
          />
        </div>
      </div>
    </div>
  );
};

CalendarView.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default CalendarView;

`,`
// src/pages/Services.js

import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/services.css";
import CalendarView from "../components/CalendarView";

const ServicesPage = ({ user }) => {
  const [lessons, setLessons] = useState([]);
  const [viewMode, setViewMode] = useState("cards");
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchLessons = useCallback(async () => {
    try {
      const response = await fetch(\`\${backendUrl}/api/lessons\`, {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to fetch lessons");
      const data = await response.json();

      if (user?.role === "Admin") {
        setLessons(data);
      } else if (user?.role === "Student") {
        const availableLessons = data.filter(
          (lesson) =>
            !lesson.students.some((student) => student._id === user._id)
        );
        setLessons(availableLessons);
      } else {
        setLessons(data);
      }
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  }, [backendUrl, user]);

  useEffect(() => {
    fetchLessons();
  }, [fetchLessons]);

  const handleBookLesson = async (lessonId) => {
    try {
      const response = await fetch(
        \`\${backendUrl}/api/lessons/book/\${lessonId}\`,
        {
          method: "PUT",
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to book lesson");
      }

      alert("Lesson booked successfully!");
      fetchLessons();
    } catch (error) {
      alert(\`Error booking lesson: \${error.message}\`);
    }
  };

  return (
    <div className='services-page'>
      <header className='services-header'>
        <h1>Our Lessons</h1>
        <p>Explore our lessons and start your musical journey today!</p>

        <div className='view-toggle'>
          <button
            onClick={() => setViewMode("cards")}
            className={viewMode === "cards" ? "active" : ""}
          >
            Card View
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={viewMode === "calendar" ? "active" : ""}
          >
            Calendar View
          </button>
        </div>
      </header>

      {viewMode === "calendar" ? (
        <CalendarView user={user} />
      ) : (
        <div className='lessons-grid'>
          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <div key={lesson._id} className='lesson-card'>
                <div className='lesson-icon'>🎵</div>
                <h2>{lesson.lessonType}</h2>
                <p>Teacher: {lesson.teacher?.name || "Unknown"}</p>
                <p>Date: {new Date(lesson.date).toLocaleDateString()}</p>
                <p>Time: {lesson.time}</p>
                <p>Location: {lesson.location || "Not specified"}</p>
                <p>Status: {lesson.status}</p>
                {user?.role === "Admin" && (
                  <p>
                    Students:{" "}
                    {lesson.students.map((s) => s.name).join(", ") || "None"}
                  </p>
                )}
                {user?.role === "Student" &&
                  !lesson.students.some((s) => s._id === user._id) &&
                  lesson.status === "Scheduled" && (
                    <button
                      onClick={() => handleBookLesson(lesson._id)}
                      className='book-button'
                    >
                      Book Now
                    </button>
                  )}
                {lesson.status === "Cancelled" && (
                  <span className='cancelled-label'>
                    This lesson is cancelled
                  </span>
                )}
              </div>
            ))
          ) : (
            <p>No available lessons at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

ServicesPage.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["Student", "Teacher", "Admin"]).isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default ServicesPage;

`];export{e as default};
//# sourceMappingURL=day41-CjJMZPho.js.map