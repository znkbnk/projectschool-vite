const solutionCode1 = `
// backend/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"; // Added admin routes
import Message from "./models/messageSchema.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import http from "http";
import rateLimit from "express-rate-limit";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://musicacademy-kpf5.onrender.com",
      "https://musiccademy.netlify.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.set("socketio", io);

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://musicacademy-kpf5.onrender.com",
      "https://musiccademy.netlify.app",
    ],
    credentials: true,
  })
);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests, please try again later.",
});

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

connectDB();

io.on("connection", (socket) => {
  socket.on("join", (userId) => {
    if (userId && userId !== "undefined") {
      socket.join(userId);
    }
  });

  socket.on("sendMessage", async (messageData) => {
    try {
      const { sender, receiver, content } = messageData;
      const message = new Message({ sender, receiver, content });
      await message.save();

      const populatedMessage = await Message.findById(message._id)
        .populate("sender", "name email id")
        .populate("receiver", "name email id");

      const unreadCount = await Message.countDocuments({
        receiver: receiver,
        isRead: false,
      });
      io.to(receiver).emit("updateUnreadCount", unreadCount);

      io.to(sender).to(receiver).emit("receiveMessage", populatedMessage);
    } catch (error) {
      socket.emit("messageError", {
        success: false,
        message: "Failed to send message. Please try again.",
        error: error.message,
      });
    }
  });

  socket.on("disconnect", () => {});
});

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/admin", adminRoutes); // Added admin routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", authLimiter);

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

`;

const solutionCode2 = `
// backend/routes/adminRoutes.js

import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import LessonSchedule from "../models/lessonScheduleSchema.js";
import User from "../models/userSchema.js";
import Payment from "../models/paymentSchema.js";

const router = express.Router();

// GET /api/admin/stats - Fetch analytics data for admin
router.get("/stats", protect, admin, async (req, res) => {
  try {
    // Lesson statistics
    const totalLessons = await LessonSchedule.countDocuments();
    const scheduledLessons = await LessonSchedule.countDocuments({
      status: "Scheduled",
    });
    const completedLessons = await LessonSchedule.countDocuments({
      status: "Completed",
    });
    const cancelledLessons = await LessonSchedule.countDocuments({
      status: "Cancelled",
    });

    // User statistics
    const totalUsers = await User.countDocuments();
    const students = await User.countDocuments({ role: "Student" });
    const teachers = await User.countDocuments({ role: "Teacher" });
    const admins = await User.countDocuments({ role: "Admin" });

    // Payment statistics
    const totalPayments = await Payment.countDocuments();
    const totalRevenue = await Payment.aggregate([
      { $match: { status: "Completed" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    const revenue = totalRevenue.length > 0 ? totalRevenue[0].total : 0;

    // User registrations over time (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const registrationsByDay = await User.aggregate([
      { $match: { createdAt: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Lesson bookings over time (last 30 days)
    const bookingsByDay = await LessonSchedule.aggregate([
      { $match: { date: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          count: { $sum: { $size: "$students" } },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      lessons: {
        total: totalLessons,
        scheduled: scheduledLessons,
        completed: completedLessons,
        cancelled: cancelledLessons,
      },
      users: {
        total: totalUsers,
        students,
        teachers,
        admins,
      },
      payments: {
        total: totalPayments,
        revenue,
      },
      trends: {
        registrations: registrationsByDay,
        bookings: bookingsByDay,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching analytics", error: error.message });
  }
});

export default router;

`;
const solutionCode3 = `
// src/components/Analytics.js

import { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/analytics.css";
import Loading from "../components/Loading.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch(\`\${backendUrl}/api/admin/stats\`, {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch analytics");
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, [backendUrl]);

  if (loading) return <Loading />;
  if (!analyticsData) return <div>No analytics data available.</div>;

  // Lesson Status Chart
  const lessonChartData = {
    labels: ["Total", "Scheduled", "Completed", "Cancelled"],
    datasets: [
      {
        label: "Lessons",
        data: [
          analyticsData.lessons.total,
          analyticsData.lessons.scheduled,
          analyticsData.lessons.completed,
          analyticsData.lessons.cancelled,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  };

  // User Roles Chart
  const userChartData = {
    labels: ["Students", "Teachers", "Admins"],
    datasets: [
      {
        label: "Users",
        data: [
          analyticsData.users.students,
          analyticsData.users.teachers,
          analyticsData.users.admins,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  // Registrations Trend Chart
  const registrationDates = analyticsData.trends.registrations.map(
    (item) => item._id
  );
  const registrationCounts = analyticsData.trends.registrations.map(
    (item) => item.count
  );
  const registrationChartData = {
    labels: registrationDates,
    datasets: [
      {
        label: "User Registrations",
        data: registrationCounts,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  // Bookings Trend Chart
  const bookingDates = analyticsData.trends.bookings.map((item) => item._id);
  const bookingCounts = analyticsData.trends.bookings.map((item) => item.count);
  const bookingChartData = {
    labels: bookingDates,
    datasets: [
      {
        label: "Lesson Bookings",
        data: bookingCounts,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "" },
    },
  };

  return (
    <div className='analytics-container'>
      <h1>Analytics Dashboard</h1>
      <div className='analytics-grid'>
        <div className='chart-container'>
          <h2>Lesson Status</h2>
          <Bar
            data={lessonChartData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: "Lesson Status Distribution" },
              },
            }}
          />
        </div>
        <div className='chart-container'>
          <h2>User Roles</h2>
          <Bar
            data={userChartData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: "User Role Distribution" },
              },
            }}
          />
        </div>
        <div className='chart-container'>
          <h2>User Registrations (Last 30 Days)</h2>
          <Line
            data={registrationChartData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: "User Registrations Trend" },
              },
            }}
          />
        </div>
        <div className='chart-container'>
          <h2>Lesson Bookings (Last 30 Days)</h2>
          <Line
            data={bookingChartData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { text: "Lesson Bookings Trend" },
              },
            }}
          />
        </div>
        <div className='stats-container'>
          <h2>Quick Stats</h2>
          <p>Total Lessons: {analyticsData.lessons.total}</p>
          <p>Total Users: {analyticsData.users.total}</p>
          {/* <p>Total Payments: {analyticsData.payments.total}</p>
          <p>Total Revenue: \${analyticsData.payments.revenue.toFixed(2)}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;

`;
const solutionCode4 = `
// src/components/Navbar.js

import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "react-feather";
import "../styles/navbar.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    if (!user || !user.id) {
      setUnreadCount(0);
      return;
    }

    const socket = io(backendUrl, { withCredentials: true });

    socket.on("connect", () => {
      socket.emit("join", user.id);
    });

    socket.on("updateUnreadCount", (count) => {
      setUnreadCount(count);
    });

    const fetchUnreadCount = async () => {
      try {
        const response = await fetch(
          \`\${backendUrl}/api/messages/\${user.id}/unread-count\`,
          {
            credentials: "include",
          }
        );
        if (!response.ok) {
          if (response.status === 401) {
            setUnreadCount(0);
            return;
          }
          throw new Error("Failed to fetch unread count");
        }
        const { count } = await response.json();
        setUnreadCount(count);
      } catch (error) {
        console.error("Error fetching unread count:", error);
        setUnreadCount(0);
      }
    };

    fetchUnreadCount();

    return () => {
      socket.disconnect();
    };
  }, [user, backendUrl]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-header'>
          <span className='brand-name'>Music Academy</span>
        </div>

        <div
          className={\`navbar-toggle \${isMenuOpen ? "open" : ""}\`}
          onClick={toggleMenu}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <ul className={\`navbar-list \${isMenuOpen ? "open" : ""}\`}>
          <li className='navbar-item'>
            <Link className='dropdown-toggle' to='/'>
              <span>Home</span>
            </Link>
          </li>
          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Services</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/'>Home Option 1</Link>
                <ul className='sub-dropdown-menu'>
                  <li className='sub-dropdown-item'>
                    <Link to='/services'>Services</Link>
                  </li>
                  <li className='sub-dropdown-item'>
                    <Link to='/'>Sub Option 2</Link>
                  </li>
                </ul>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Home Option 2</Link>
                <ul className='sub-dropdown-menu'>
                  <li className='sub-dropdown-item'>
                    <Link to='/'>Sub Option 3</Link>
                  </li>
                  <li className='sub-dropdown-item'>
                    <Link to='/'>Sub Option 4</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>About</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/about'>About</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Team</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Careers</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Blog</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/blog'>Blog</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Blog Team</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Testimonials</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/testimonials'>Testimonials</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Testimonials 2</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <div className='dropdown-toggle'>
              <span>Contact</span>
              <ChevronDown className='chevron-icon' />
            </div>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Phone</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Social Media</Link>
              </li>
            </ul>
          </li>

          {user && user.role === "Admin" && (
            <li className='navbar-item'>
              <Link className='dropdown-toggle' to='/admin'>
                <span>Analytics</span>
              </Link>
            </li>
          )}

          <li className='navbar-item'>
            {user ? (
              <div className='user-dropdown'>
                <div className='dropdown-toggle'>
                  <span>Welcome, {user.name}</span>
                  <ChevronDown className='chevron-icon' />
                </div>
                <ul className='dropdown-menu'>
                  <li className='dropdown-item'>
                    <Link to='/profile-setup'>Profile</Link>
                  </li>
                  {user.role === "Admin" && (
                    <li className='dropdown-item'>
                      <Link to='/admin'>Admin Dashboard</Link>
                    </li>
                  )}
                  {user.role === "Student" && (
                    <li className='dropdown-item'>
                      <Link to='/activity'>Activity</Link>
                    </li>
                  )}
                  {user.role === "Teacher" && (
                    <li className='dropdown-item'>
                      <Link to='/teacher-dashboard'>Teacher Dashboard</Link>
                    </li>
                  )}
                  <li className='dropdown-item'>
                    <Link to='/messages'>
                      Messages{" "}
                      {unreadCount > 0 && (
                        <span className='unread-count'>({unreadCount})</span>
                      )}
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to='/auth' className='auth-button'>
                Register/Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    id: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;

`;
const solutionCode5 = `
// src/pages/admin/AdminDashboard.js

// src/components/AdminDashboard.js
import { useState } from "react";
import BlogManagement from "./BlogManagement/BlogManagement.js";
import LessonManagement from "./LessonManagement/LessonManagement.js";
import "./AdminDashboard.css";
import TestimonialManagement from "./TestimonialManagment/TestimonialManagement.js";
import Analytics from "../../components/Analytics.js";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div className='admin-dashboard'>
      <h1>Admin Dashboard</h1>
      <div className='tabs'>
        <button
          onClick={() => setActiveTab("blogs")}
          className={activeTab === "blogs" ? "active" : ""}
        >
          Blogs
        </button>
        <button
          onClick={() => setActiveTab("lessons")}
          className={activeTab === "lessons" ? "active" : ""}
        >
          Lessons
        </button>
        <button
          onClick={() => setActiveTab("testimonials")}
          className={activeTab === "testimonials" ? "active" : ""}
        >
          Testimonials
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={activeTab === "analytics" ? "active" : ""}
        >
          Analytics
        </button>
      </div>

      {activeTab === "blogs" && <BlogManagement />}
      {activeTab === "lessons" && <LessonManagement />}
      {activeTab === "testimonials" && <TestimonialManagement />}
      {activeTab === "analytics" && <Analytics />}
    </div>
  );
};

export default AdminDashboard;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,

];
