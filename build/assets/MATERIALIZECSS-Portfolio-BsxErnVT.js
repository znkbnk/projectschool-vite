var e=`
//App.js

import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "material-icons/iconfont/material-icons.css";
import M from "materialize-css";
import './styles.css'


function App() {
  React.useEffect(() => {
    M.Parallax.init(document.querySelectorAll(".parallax"), {});
    M.Sidenav.init(document.querySelectorAll(".sidenav"), {});
  }, []);

  const handleNavClick = (event, section) => {
    event.preventDefault();
    const target = document.getElementById(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="main-container">
      {/* Navigation */}
      <nav>
        <div className='nav-wrapper blue-grey darken-4'>
          <a href='#!' className='brand-logo'>
            <span className='logo'>
              <b>Your Logo</b>
            </span>
          </a>
          <div className='hide-on-large-only'>
            {" "}
            <button data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </button>
          </div>
          <ul className='right hide-on-med-and-down'>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "projects")}
                className='waves-effect waves-light btn'
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "about")}
                className='waves-effect waves-light btn'
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className='waves-effect waves-light btn'
              >
                Contact
              </button>
            </li>
          </ul>
          <ul className='sidenav' id='mobile-demo'>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "projects")}
                className='waves-effect waves-light btn'
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "about")}
                className='waves-effect waves-light btn'
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className='waves-effect waves-light btn'
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Parallax */}
      <div className='parallax-container'>
        <div className='parallax'>
          <img
            src='https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg'
            width='100%'
            alt='Parallax'
          />
        </div>
      </div>

      {/* About Section */}
      <div className='section white' id='about'>
        <div className='row container'>
          <h1 className='header'>Big Header</h1>
          <p className='grey-text text-darken-3 lighten-3'>Small text</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className='parallax-container valign-wrapper'>
        <div className='container'>
          <div className='row center'>
            <div className='col l10 offset-l1'>
              <h2 className='center-align white-text cta'>
                Some more text blablabla2
              </h2>
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className='cente btn-large hoverable red accent-2 waves-effect waves-light'
              >
                Text me baby ;)
              </button>
            </div>
          </div>
        </div>
        <div className='parallax'>
          <img
            src='https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            width='100%'
            alt='Parallax'
          />
        </div>
      </div>

      {/* Projects */}
      <div className='container text-center'>
        <h2 className='section-header positioner project' id='projects'>
          Projects
        </h2>
        <div className='row'>
          <div className='col s12 m6 13'>
            <div className='card'>
              <div className='card-image waves-effect waves-block waves-light'>
                <img
                  className='activator'
                  src='https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='Ashton app'
                />
              </div>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                  Ashton and Moore
                  <i className='material-icons right'></i>
                </span>
                <p>
                  <a
                    href='https://znkbnk.github.io/React-ashton/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>Link</b>
                  </a>
                </p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>
                  Company Website
                  <i className='material-icons right'>close</i>
                </span>
                <p>some text like bla bla bla</p>
              </div>
            </div>
          </div>
          <div className='col s12 m6 13'>
            <div className='card'>
              <div className='card-image waves-effect waves-block waves-light'>
                <img
                  className='activator'
                  src='https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='Habit app'
                />
              </div>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                  Habit App
                  <i className='material-icons right'></i>
                </span>
                <p>
                  <a
                    href='https://znkbnk.github.io/React-Habit/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>Link</b>
                  </a>
                </p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>
                  Habit App
                  <i className='material-icons right'>close</i>
                </span>
                <p>some text about project</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className='container ' id='contact'>
        <div className='row '>
          <h2 className='section-header '>Contact Me</h2>
        </div>
      </div>
      <div className='container white cform'>
        <div className='row'>
          <div className='col l8 offset-l2 m12 s12'>
            <div className='row'>
              <form
                className='col s12 '
                action='https://formspree.io/shubhamchinda07@gmail.com'
                method='POST'
              >
                <div className='row'>
                  <div className='input-field col s6'>
                    <input
                      id='first_name'
                      name='Firstname'
                      type='text'
                      className='validate'
                    />
                    <label htmlFor='first_name'>First Name</label>
                  </div>
                  <div className='input-field col s6'>
                    <input
                      id='last_name'
                      name='Lastname'
                      type='text'
                      className='validate'
                    />
                    <label htmlFor='last_name'>Last Name</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input
                      id='email'
                      type='email'
                      name='_replyto'
                      className='validate'
                    />
                    <label htmlFor='email'>Email</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <textarea
                      id='textarea1'
                      className='materialize-textarea'
                    ></textarea>
                    <label htmlFor='textarea1'>Textarea</label>
                  </div>
                </div>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                >
                  Submit
                  <i className='material-icons right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='page-footer black'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>Footer Content</h5>
              <p className='grey-text text-lighten-4'>
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Links</h5>
              <ul>
                <li>
                  <button
                    onClick={(e) => handleNavClick(e, "projects")}
                    className='waves-effect waves-light btn'
                  >
                    Projects
                  </button>
                </li>
                <li>
                  {" "}
                  <button
                    onClick={(e) => handleNavClick(e, "about")}
                    className='waves-effect waves-light btn'
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => handleNavClick(e, "contact")}
                    className='waves-effect waves-light btn'
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            © 2024 Copyright Text
            <a
              className='grey-text text-lighten-4 right'
              href='https://github.com/znkbnk'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='material-icons'></i> GitHub
            </a>
            <a
              className='grey-text text-lighten-4 right'
              href='https://www.projectschool.dev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='material-icons'></i> ProjectSchool
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

`;export{e as default};
//# sourceMappingURL=MATERIALIZECSS-Portfolio-BsxErnVT.js.map