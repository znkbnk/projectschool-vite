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
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null); // Clear the user state
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
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

`,`
// components/Navbar.js 

import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "react-feather";
import "../styles/navbar.css";
import { useState } from "react";

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

          {/* About Section with Dropdown */}
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

          {/* Conditional Auth Button */}
          <li className='navbar-item'>
            {user ? (
              <div className='user-dropdown'>
                <div className='dropdown-toggle'>
                  <span>Welcome, {user.name}</span>
                  <ChevronDown className='chevron-icon' />
                </div>
                <ul className='dropdown-menu'>
                  <li className='dropdown-item'>
                    <Link to='/'>Profile</Link>
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
  }),
  onLogout: PropTypes.func.isRequired, 
};

export default Navbar;
`,`
// pages/Auth.js 

import { useState } from "react";
import "../styles/auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form>
          {!isLogin && (
            <>
              {/* Name  */}
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter your name' />
              </div>

              {/* Role  */}
              <div className='form-group'>
                <label htmlFor='role'>Role</label>
                <div className='select-wrapper'>
                  <select id='role'>
                    <option value='Student'>Student</option>
                    <option value='Teacher'>Teacher</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Common  */}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
            />
          </div>

          <button type='submit' className='auth-button'>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleAuthMode} className='toggle-auth'>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;

`];export{e as default};
//# sourceMappingURL=day18-u8Kjul8D.js.map