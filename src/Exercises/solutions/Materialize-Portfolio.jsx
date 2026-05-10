const solutionCode1 = `
// App.js

import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './styles.css'


const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;

`;

const solutionCode2 = `
// Navbar.js

import React from 'react';

const Navbar = () => (
  <nav className="white z-depth-0">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        <img src="./img/pslogosmalljpg.png" alt="Logo" />
      </a>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger button-collapse">
        <i className="material-icons">menu</i>
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Intro</a></li>
        <li><a href="/">Header</a></li>
        <li><a href="/">Footer</a></li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
      <li><a href="/">Intro</a></li>
        <li><a href="/">Header</a></li>
        <li><a href="/">Footer</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

`;
const solutionCode3 = `
// Header.js

import React from 'react';

const Header = () => {
  const handleDirectionsClick = () => {
    // Find the position of the iframe element
    const iframeElement = document.getElementById('googleMapIframe');
    if (iframeElement) {
      // Scroll to the iframe element
      iframeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header valign-wrapper">
      <div className="wrapper valign">
        <h1>
          <div className="light hide-on-small-only">Hello World </div>
        </h1>
        <center>
          <button onClick={handleDirectionsClick} className="btn-large blue waves-effect waves-light">To GoogleMaps<i className="material-icons right">map</i></button>
          <a href="/" className="btn-large blue-text white waves-effect">white button</a>
          <div className="scroll-down light">scroll down ok?<i className="material-icons">arrow_downward</i></div>
        </center>
      </div>
    </div>
  );
};

export default Header;

`;
const solutionCode4 = `
// Content.js

import React from 'react';

const Content = () => (
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h2>Intro</h2>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="divider"></div>
        </div>
        <div className="col s12">
          <h2>header</h2><span className="text center">Clickable Link: <a href="/">link text </a></span>.
          <div className="divider"></div>
        </div>
        <div className="col s12">
          <div className="col s12">
            <h2>Add more stuff here</h2>
          </div>
          <div className="col s12 m6">
            <div className="img-box"><img className="responsive-img materialboxed" src="./img/js.png" alt="Placeholder 1" />
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="img-box"><img className="responsive-img materialboxed" src="./img/css.png" alt="Placeholder 2" />
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
          </div>
          <div className="col s12 divider"></div>
        </div>
        <div className="col s12" id="googleMapIframe">
          <h2>Directions</h2>
          <iframe title="Google Maps" className="z-depth-1 hoverable" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.8398865692!2d-0.2664030556096407!3d51.528739805074714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1720367641567!5m2!1sen!2suk"  width="100%" height="450"  style={{ borderRadius: '5px' }} allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Content;

`;
const solutionCode5 = `
// Footer.js

import React from 'react';

const Footer = () => (
  <footer className="page-footer transparent">
    <div className="container">
      <div className="row">
        <div className="col s6 copyright">© 2015 Copyright by YOU</div>
        <div className="col s6 right-align"><a href="/legal">Footer</a></div>
      </div>
    </div>
  </footer>
);

export default Footer;

`;

const solutionCode6 = `
//public/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3, solutionCode4, solutionCode5, solutionCode6];
