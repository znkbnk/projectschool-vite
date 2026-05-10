var e=[`
//App.js

import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Links from './components/Links';
import './styles.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Main />
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
      <Links />
    </div>
  );
}

export default App;

`,`
//components/Links.js

import React from 'react';

function Links() {
  return (
    <div className="links">
      <ul>
        <li><a href="/" style={{ '--i': '0.05s' }}>Home</a></li>
        <li><a href="/" style={{ '--i': '0.1s' }}>Services</a></li>
        <li><a href="/" style={{ '--i': '0.15s' }}>About</a></li>
        <li><a href="/" style={{ '--i': '0.2s' }}>Contact</a></li>
      </ul>
    </div>
  );
}

export default Links;

`,`
//components/Main.js

import React from 'react';

function Main() {
  return (
    <div className="main">
      <header>
        <div className="overlay">
          <div className="inner">
            <h2 className="title">Embrace the Beauty of Nature</h2>
            <p>
              Discover the wonders of nature, where every moment is a masterpiece of tranquility and harmony.
              Immerse yourself in the serene landscapes and let the soothing embrace of the natural world captivate your soul.
            </p>
            <button className="btn">
              Explore Nature
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Main;

`,`
//components/Navbar.js

import React from 'react';

function Navbar() {
  const toggleMenu = () => {
    document.querySelector('.container').classList.toggle('active');
  };

  return (
    <div className="navbar">
      <div className="menu">
        <h3 className="logo">
          Nature <span>Beauty</span>
        </h3>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

`];export{e as default};
//# sourceMappingURL=Natures-Beauty-BhY96hqF.js.map