var e=[`
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
import Activity from "./pages/Activity";
import { useState, useEffect, useCallback } from "react";
import Messages from "./components/Messages";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

function App() {
  const [user, setUser] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(\`\${backendUrl}/auth/me\`, {
        credentials: "include",
      });
      if (!response.ok) {
        return; 
      }
      const data = await response.json();
      if (data && data._id) {
        const newUser = {
          _id: data._id || data.id,
          name: data.name,
          email: data.email,
          role: data.role,
          studentDetails: data.studentDetails,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      }
    } catch (error) {
      console.error("fetchUserData error:", error.message);
    }
  }, [backendUrl]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      fetchUserData();
    }
  }, [fetchUserData]);

  const handleRegistrationSuccess = async (registeredUser) => {
    const newUser = {
      _id: registeredUser.id || registeredUser._id,
      name: registeredUser.name,
      email: registeredUser.email,
      role: registeredUser.role,
      studentDetails: registeredUser.studentDetails,
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    await fetchUserData();
  };

  const handleLogout = async () => {
    try {
      await fetch(\`\${backendUrl}/auth/logout\`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      localStorage.removeItem("user");
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
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
          console.log(User in App.js Messages route, user);
          <Route
            path='/messages'
            element={
              (console.log("Rendering Messages route - user exists?", !!user),
              user ? <Messages user={user} /> : <Navigate to='/auth' />)
            }
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
            path='/teacher-dashboard'
            element={
              user && user.role === "Teacher" ? (
                <TeacherDashboard user={user} />
              ) : (
                <Navigate to='/auth' />
              )
            }
          />
          <Route
            path='/activity'
            element={user ? <Activity user={user} /> : <Navigate to='/auth' />}
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
// src/components/Messages.js

import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import "../styles/messages.css";

const Messages = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNewMessageForm, setShowNewMessageForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const socketRef = useRef(null);
  const chatEndRef = useRef(null);
  const selectedConversationRef = useRef(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    selectedConversationRef.current = selectedConversation;
  }, [selectedConversation]);

  useEffect(() => {
    if (!user?._id) return;

    socketRef.current = io(backendUrl, { withCredentials: true });

    socketRef.current.on("connect", () => {
      socketRef.current.emit("join", user._id);
    });

    socketRef.current.on("connect_error", () => {
      setError("Failed to connect to messaging service");
    });

    socketRef.current.on("receiveMessage", (message) => {
      setMessages((prev) => {
        if (prev.some((msg) => msg._id === message._id)) return prev;
        return [...prev, message];
      });

      const currentSelected = selectedConversationRef.current;
      if (
        currentSelected &&
        message.sender?._id &&
        message.receiver?._id &&
        (message.sender._id === currentSelected.user._id ||
          message.receiver._id === currentSelected.user._id)
      ) {
        setSelectedConversation((prev) => ({
          ...prev,
          messages: prev.messages.some((msg) => msg._id === message._id)
            ? prev.messages
            : [...prev.messages, message],
          lastMessage: message.sentAt,
        }));
      }
    });

    socketRef.current.on("messageError", ({ message }) => {
      setError(message);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user, backendUrl]);

  useEffect(() => {
    const fetchMessages = async () => {
      // Add this check
      if (!user?._id) return;

      setIsLoading(true);
      try {
        const response = await fetch(\`\${backendUrl}/api/messages/\${user._id}\`, {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [user, backendUrl]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation]);

  const handleSearchUsers = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    // Add this check
    if (!user?._id) {
      setError("User ID is missing. Please try again.");
      return;
    }

    try {
      const response = await fetch(
        \`\${backendUrl}/api/users/search?query=\${encodeURIComponent(
          searchQuery
        )}&excludeId=\${user._id}\`,
        { credentials: "include" }
      );
      if (!response.ok) {
        const errorText = await response.json();
        throw new Error(
          \`Failed to search users: \${errorText.message || "Unknown error"}\`
        );
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const startNewConversation = (receiver) => {
    const existingConversation = getConversations().find(
      (conv) => conv.user._id === receiver._id
    );

    if (existingConversation) {
      setSelectedConversation(existingConversation);
    } else {
      setSelectedConversation({
        user: receiver,
        messages: [],
        lastMessage: null,
      });
    }

    setShowNewMessageForm(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const getConversations = () => {
    const conversations = {};
    messages.forEach((message) => {
      if (!message.sender || !message.receiver) {
        console.warn(
          "Skipping message with missing sender or receiver:",
          message
        );
        return;
      }

      const senderId = message.sender._id;
      const receiverId = message.receiver._id;

      if (!senderId || !receiverId) {
        console.warn("Skipping message with missing IDs:", message);
        return;
      }

      const otherUserId = senderId === user._id ? receiverId : senderId;
      const otherUser =
        senderId === user._id ? message.receiver : message.sender;

      if (!conversations[otherUserId]) {
        conversations[otherUserId] = {
          user: {
            _id: otherUser._id,
            name: otherUser.name || "Unknown",
            email: otherUser.email || "No email",
          },
          messages: [],
          lastMessage: message.sentAt,
          hasUnread: false,
        };
      }
      conversations[otherUserId].messages.push(message);
      if (
        new Date(message.sentAt) >
        new Date(conversations[otherUserId].lastMessage)
      ) {
        conversations[otherUserId].lastMessage = message.sentAt;
      }
      if (!message.isRead && message.receiver._id === user._id) {
        conversations[otherUserId].hasUnread = true;
      }
    });

    return Object.values(conversations).sort(
      (a, b) => new Date(b.lastMessage) - new Date(a.lastMessage)
    );
  };

  const sendMessage = async (receiverId) => {
    if (!newMessage.trim()) return;

    const messageData = {
      sender: user._id,
      receiver: receiverId,
      content: newMessage,
    };

    try {
      setIsLoading(true);
      socketRef.current.emit("sendMessage", messageData);
      setNewMessage("");
    } catch (error) {
      setError(\`Failed to send message: \${error.message}\`);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (messageId) => {
    try {
      await fetch(\`\${backendUrl}/api/messages/\${messageId}/read\`, {
        method: "PATCH",
        credentials: "include",
      });
    } catch (error) {
      setError(\`Error marking message as read: \${error.message}\`);
    }
  };

  const conversations = getConversations();

  return (
    <div className='messages-container'>
      {error && <div className='messages-error'>{error}</div>}
      {isLoading && <div className='messages-loading'>Loading...</div>}

      <div className='conversation-list'>
        <h2 className='conversation-header'>Conversations</h2>
        <button
          className='chat-send-button new-message-button'
          onClick={() => setShowNewMessageForm(!showNewMessageForm)}
        >
          {showNewMessageForm ? "Cancel" : "Start New Message"}
        </button>

        {showNewMessageForm && (
          <div className='new-message-form'>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearchUsers}
              className='chat-input-field'
              placeholder='Search by email or name...'
            />
            {searchResults.length > 0 && (
              <div className='search-results'>
                {searchResults.map((result) => (
                  <div
                    key={result._id}
                    className='search-result-item'
                    onClick={() => startNewConversation(result)}
                  >
                    <span className='conversation-name'>{result.name}</span>
                    <small className='conversation-email'>{result.email}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {conversations.length === 0 && !isLoading && !showNewMessageForm && (
          <p className='no-conversations'>No conversations yet</p>
        )}
        {conversations.map((conv) => (
          <div
            key={conv.user._id}
            className={\`conversation-item \${
              selectedConversation?.user._id === conv.user._id ? "active" : ""
            } \${conv.hasUnread ? "unread" : ""}\`}
            onClick={() => {
              setSelectedConversation({
                ...conv,
                messages: conv.messages.sort(
                  (a, b) => new Date(a.sentAt) - new Date(b.sentAt)
                ),
              });
              conv.messages
                .filter((msg) => !msg.isRead && msg.receiver._id === user._id)
                .forEach((msg) => markAsRead(msg._id));
            }}
          >
            <div className='conversation-details'>
              <h4 className='conversation-name'>{conv.user.name}</h4>
              <p className='conversation-email'>{conv.user.email}</p>
            </div>
            <p className='conversation-preview'>
              {conv.messages[conv.messages.length - 1].content.slice(0, 30)}
            </p>
            <small className='conversation-date'>
              {new Date(conv.lastMessage).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>

      <div className='chat-window'>
        {selectedConversation ? (
          <>
            <h3 className='chat-header'>
              Chat with: {selectedConversation.user.name}
            </h3>
            <div className='chat-messages'>
              {selectedConversation.messages.map((msg) => (
                <div
                  key={msg._id}
                  className={\`chat-message \${
                    msg.sender._id === user._id ? "right" : "left"
                  }\`}
                >
                  <div
                    className={\`message-bubble \${
                      msg.sender._id === user._id ? "right" : "left"
                    }\`}
                  >
                    {msg.content}
                  </div>
                  <div className='message-time'>
                    {new Date(msg.sentAt).toLocaleTimeString()}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className='chat-input'>
              <input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(selectedConversation.user._id);
                  }
                }}
                className='chat-input-field'
                placeholder='Type a message...'
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage(selectedConversation.user._id)}
                className='chat-send-button'
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className='chat-placeholder'>
            <p>Please start a new conversation or select an existing one</p>
          </div>
        )}
      </div>
    </div>
  );
};

Messages.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default Messages;

`,`
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
    if (!user || !user._id) {
      setUnreadCount(0);
      return;
    }

    const socket = io(backendUrl, { withCredentials: true });

    socket.on("connect", () => {
      socket.emit("join", user._id);
    });

    socket.on("updateUnreadCount", (count) => {
      setUnreadCount(count);
    });

    const fetchUnreadCount = async () => {
      try {
        const response = await fetch(
          \`\${backendUrl}/api/messages/\${user._id}/unread-count\`,
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
    _id: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;

`,`
// src/components/PaymentForm.js

import { useState } from "react";
import PropTypes from "prop-types";
import { useStripe } from "@stripe/react-stripe-js";
import "./paymentForm.css";

const PaymentForm = ({ amount, lessonId, onClose }) => {
  const stripe = useStripe();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe) {
      setError("Stripe.js hasn't loaded yet.");
      setProcessing(false);
      return;
    }

    try {
      console.log("Creating checkout session for lesson:", lessonId);
      const response = await fetch(\`\${backendUrl}/api/payments/checkout\`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ lessonId, amount }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to create checkout session"
        );
      }

      const { sessionId } = await response.json();
      console.log("Redirecting to Stripe Checkout with sessionId:", sessionId);

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        console.error("Stripe redirect error:", stripeError.message);
        setError(stripeError.message);
      }
    } catch (err) {
      console.error("Error initiating payment:", err);
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className='payment-form-container'>
      <h2>Complete Your Payment</h2>
      <p className='payment-amount'>Amount: \${amount.toFixed(2)}</p>
      {error && <p className='error-message'>{error}</p>}
      <form onSubmit={handleSubmit} className='payment-form'>
        <div className='button-group'>
          <button
            type='submit'
            disabled={!stripe || processing}
            className='pay-button'
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
          <button
            onClick={onClose}
            disabled={processing}
            className='payment-cancel-button'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

PaymentForm.propTypes = {
  amount: PropTypes.number.isRequired,
  lessonId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PaymentForm;

`,`
// src/pages/Activity.js

import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/activity.css";

const Activity = ({ user }) => {
  const [bookedLessons, setBookedLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchBookedLessons = useCallback(async () => {
    if (!user || user.role !== "Student") {
      setBookedLessons([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const lessonsResponse = await fetch(
        \`\${backendUrl}/api/lessons?student=\${user._id}\`,
        {
          credentials: "include",
        }
      );
      if (!lessonsResponse.ok) {
        throw new Error("Failed to fetch lessons");
      }
      const lessons = await lessonsResponse.json();

      const userBookedLessons = lessons.filter(
        (lesson) =>
          lesson.status !== "Cancelled" &&
          lesson.students?.some(
            (student) =>
              student?._id && student._id.toString() === user._id.toString()
          )
      );
      setBookedLessons(userBookedLessons);
      console.log("Fetched booked lessons:", userBookedLessons);
    } catch (error) {
      console.error("Error fetching booked lessons:", error);
      setError("Failed to load your booked lessons. Please try again.");
      setBookedLessons([]);
    } finally {
      setIsLoading(false);
    }
  }, [user, backendUrl]);

  useEffect(() => {
    if (user) fetchBookedLessons();
  }, [user, fetchBookedLessons]);

  const handleCancelLesson = async (lessonId) => {
    if (!window.confirm("Are you sure you want to cancel this lesson?")) return;

    try {
      const response = await fetch(
        \`\${backendUrl}/api/lessons/cancel/\${lessonId}\`,
        {
          method: "PUT",
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to cancel lesson");
      }

      alert("Lesson booking cancelled successfully!");
      await fetchBookedLessons();
    } catch (error) {
      alert(\`Error cancelling lesson: \${error.message}\`);
    }
  };

  return (
    <div className='activity-container'>
      <h1>Your Booked Lessons</h1>
      {isLoading && <p>Loading your lessons...</p>}
      {error && <p className='error-message'>{error}</p>}
      {!isLoading && !error && bookedLessons.length > 0 ? (
        <div className='lessons-list'>
          {bookedLessons.map((lesson) => (
            <div key={lesson._id} className='lesson-item'>
              <h3>{lesson.lessonType || "Unknown Lesson"}</h3>
              <p>Teacher: {lesson.teacher?.name || "Unknown"}</p>
              <p>
                Date:{" "}
                {lesson.date
                  ? new Date(lesson.date).toLocaleDateString()
                  : "Not specified"}
              </p>
              <p>Time: {lesson.time || "Not specified"}</p>
              <p>Location: {lesson.location || "Not specified"}</p>
              <p>Status: {lesson.status || "Unknown"}</p>
              {lesson.status === "Scheduled" && (
                <button
                  onClick={() => handleCancelLesson(lesson._id)}
                  className='cancel-button'
                >
                  Cancel Booking
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        !isLoading && !error && <p>You haven&apos;t booked any lessons yet.</p>
      )}
    </div>
  );
};

Activity.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default Activity;

`,`
// src/pages/Services.js

import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CalendarView from "../components/CalendarView";
import PaymentForm from "../components/PaymentForm";
import "../styles/services.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const ServicesPage = ({ user, setUser }) => {
  const [lessons, setLessons] = useState([]);
  const [viewMode, setViewMode] = useState("cards");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  const fetchLessons = useCallback(async () => {
    setIsLoading(true);
    try {
      const url = \`\${backendUrl}/api/lessons?status=Scheduled\`;
      console.log("Fetching lessons from:", url);
      const response = await fetch(url, { credentials: "include" });
      if (!response.ok) throw new Error("Failed to fetch lessons");
      const data = await response.json();

      let filteredLessons = data;
      if (user?.role === "Admin") {
        filteredLessons = data;
      } else if (user?.role === "Student" && user?._id) {
        filteredLessons = data.filter((lesson) =>
          lesson.students?.every(
            (student) =>
              !student?._id || student._id.toString() !== user._id.toString()
          )
        );
      }
      setLessons(filteredLessons);
    } catch (error) {
      console.error("Error fetching lessons:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [backendUrl, user]);

  const bookLessonAfterPayment = useCallback(
    async (lessonId) => {
      try {
        console.log("Booking lesson after payment:", lessonId);
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
        console.log("Lesson booked:", lessonId);
        return await response.json();
      } catch (error) {
        console.error("Error booking lesson:", error);
        throw error;
      }
    },
    [backendUrl]
  );

  const confirmPayment = useCallback(
    async (sessionId, lessonId) => {
      console.log(
        "Confirming payment with sessionId:",
        sessionId,
        "lessonId:",
        lessonId
      );
      try {
        const response = await fetch(\`\${backendUrl}/api/payments/confirm\`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ sessionId }),
        });

        const data = await response.json();
        console.log("Payment confirmation response:", data);

        if (data.success) {
          await bookLessonAfterPayment(lessonId);
          setPaymentStatus("success");
          setShowPaymentModal(false);
          setSelectedLesson(null);
          localStorage.removeItem("pendingLesson");
          await fetchLessons();

          const userResponse = await fetch(\`\${backendUrl}/auth/me\`, {
            credentials: "include",
          });
          if (userResponse.ok) {
            const userData = await userResponse.json();
            setUser({
              _id: userData._id,
              name: userData.name,
              email: userData.email,
              role: userData.role,
            });
          }

          window.history.replaceState({}, document.title, "/services");
        } else {
          setError("Payment verification failed");
          setPaymentStatus("failed");
          localStorage.removeItem("pendingLesson");
        }
      } catch (err) {
        console.error("Error confirming payment:", err);
        setError(err.message);
        setPaymentStatus("failed");
        localStorage.removeItem("pendingLesson");
      }
    },
    [backendUrl, bookLessonAfterPayment, fetchLessons, setUser]
  );

  useEffect(() => {
    fetchLessons();
  }, [fetchLessons]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get("payment");
    const sessionId = urlParams.get("session_id");

    console.log(
      "URL params - payment:",
      paymentStatus,
      "session_id:",
      sessionId
    );

    if (paymentStatus === "success" && sessionId) {
      const pendingLesson = JSON.parse(localStorage.getItem("pendingLesson"));
      if (pendingLesson) {
        setSelectedLesson(pendingLesson);
        confirmPayment(sessionId, pendingLesson._id);
      } else {
        console.error("No pending lesson found in localStorage");
        setError("Payment processing error: Lesson not found");
        setPaymentStatus("failed");
      }
    } else if (paymentStatus === "canceled") {
      setError("Payment was canceled. Please try again.");
      setPaymentStatus("canceled");
      localStorage.removeItem("pendingLesson");
      setShowPaymentModal(true);
    }
  }, [confirmPayment]);

  const handleBookLesson = (lesson) => {
    if (!user) {
      alert("Please login to book a lesson");
      return;
    }
    console.log("Initiating booking for lesson:", lesson._id);
    setSelectedLesson(lesson);
    localStorage.setItem("pendingLesson", JSON.stringify(lesson));
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedLesson(null);
    setError(null);
    setPaymentStatus(null);
    localStorage.removeItem("pendingLesson");
    window.history.replaceState({}, document.title, "/services");
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

      {isLoading && <p>Loading lessons...</p>}
      {error && <p className='error-message'>{error}</p>}
      {paymentStatus === "success" && (
        <p className='success-message'>Lesson booked successfully!</p>
      )}
      {paymentStatus === "canceled" && (
        <p className='error-message'>Payment was canceled.</p>
      )}

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
                <p className='price'>\${lesson.price || 50}</p>
                <p>
                  Spots: {lesson.students?.length || 0}/{lesson.capacity || 1}
                </p>
                {user?.role === "Admin" && (
                  <p>
                    Students:{" "}
                    {lesson.students
                      ?.map((s) => s.name)
                      .filter(Boolean)
                      .join(", ") || "None"}
                  </p>
                )}
                {user?.role === "Student" && lesson.status === "Scheduled" && (
                  <button
                    onClick={() => handleBookLesson(lesson)}
                    className='book-button'
                    disabled={
                      lesson.students?.length >= lesson.capacity ||
                      lesson.students?.some(
                        (s) => s?._id?.toString() === user?._id?.toString()
                      )
                    }
                  >
                    {lesson.students?.length >= lesson.capacity
                      ? "Fully Booked"
                      : lesson.students?.some(
                          (s) => s?._id?.toString() === user?._id?.toString()
                        )
                      ? "Already Booked"
                      : "Book Now"}
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

      {showPaymentModal && selectedLesson && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <Elements stripe={stripePromise}>
              <PaymentForm
                amount={selectedLesson.price || 50}
                lessonId={selectedLesson._id}
                onClose={closePaymentModal}
              />
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
};

ServicesPage.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    role: PropTypes.oneOf(["Student", "Teacher", "Admin"]),
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default ServicesPage;

`];export{e as default};
//# sourceMappingURL=day49-SnHPRSMi.js.map