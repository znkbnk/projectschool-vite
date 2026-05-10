const solutionCode1 = `
// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
       <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
`;

const solutionCode2 = `
//Components/Navbar.js

import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";
import "../styles.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-header'>
          <span className='brand-name'>Music Academy</span>
        </div>

        <div className={\`navbar-toggle \${isMenuOpen ? 'open' : ''}\`} onClick={toggleMenu}>

          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <ul className={\`navbar-list \${isMenuOpen ? 'open' : ''}\`} onClick={toggleMenu}>
          <li className='navbar-item'>
            <Link className='dropdown-toggle' to='/'>
              <span>Home</span>
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='dropdown-toggle' >
              <span>Services</span>
              <ChevronDown className='chevron-icon' />
            </Link>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/'>Home Option 1</Link>
                <ul className='sub-dropdown-menu'>
                  <li className='sub-dropdown-item'>
                    <Link to='/'>Sub Option 1</Link>
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
            <Link className='dropdown-toggle' >
              <span>About</span>
              <ChevronDown className='chevron-icon' />
            </Link>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/'>Company Info</Link>
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
            <Link className='dropdown-toggle' >
              <span>Blog</span>
              <ChevronDown className='chevron-icon' />
            </Link>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/'>Blog Info</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Blog Team</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <Link className='dropdown-toggle' >
              <span>Testimonials</span>
              <ChevronDown className='chevron-icon' />
            </Link>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/'>Testimonials 1</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Testimonials 2</Link>
              </li>
            </ul>
          </li>

          <li className='navbar-item'>
            <Link className='dropdown-toggle' >
              <span>Contact</span>
              <ChevronDown className='chevron-icon' />
            </Link>
            <ul className='dropdown-menu'>
              <li className='dropdown-item'>
                <Link to='/'>Email</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Phone</Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/'>Social Media</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div >
    </nav >
  );
};

export default Navbar;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  
];
