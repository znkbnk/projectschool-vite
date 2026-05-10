// src/components/Footer.js
import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useCookie } from "../context/CookieProvider";

const Footer = memo(() => {
  const { toggleCookiePopup } = useCookie();

  const handleManageCookies = useCallback(() => {
    localStorage.removeItem("cookieConsent");
    toggleCookiePopup();
  }, [toggleCookiePopup]);

  return (
    <footer id='footer'>
      <div className='main-footer'>
        <div className='logoinfo' data-aos='fade-up'>
          <div className='contact-details'>
            <h1>Contact Us</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href='mailto:support@projectschool.dev'>
                  support@projectschool.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='info' data-aos='fade-up'>
          <h1>Legals</h1>
          <div className='sociallogos'>
            <div className='logobox'>
              <Link to='/terms' target='_blank' rel='noopener noreferrer'>
                <p>Terms and Conditions</p>
              </Link>
              <Link to='/privacy' target='_blank' rel='noopener noreferrer'>
                <p>Privacy Policy</p>
              </Link>
              <button
                onClick={handleManageCookies}
                style={{
                  background: "none",
                  margin: "5px",
                  border: "none",
                  color: "#fff",
                  fontFamily: '"Lato", sans-serif',
                  fontSize: "16px",
                  cursor: "pointer",
                  padding: "0",
                }}
                className='manage-cookies-button'
              >
                <p>Manage Cookies</p>
              </button>
            </div>
          </div>
        </div>

        <div className='info' data-aos='fade-up'>
          <h1>Links</h1>
          <div className='sociallogos'>
            <div className='logobox'>
              <Link to='/exercises' rel='noopener noreferrer'>
                <p>Exercises</p>
              </Link>
              <Link to='/interview' rel='noopener noreferrer'>
                <p>Interview Prep</p>
              </Link>
              <Link to='/guides' rel='noopener noreferrer'>
                <p>Guides</p>
              </Link>
            </div>
          </div>
        </div>

        <div className='info' data-aos='fade-up'>
          <h1>Social Media</h1>
          <div className='sociallogos'>
            <div className='logobox'>
              <a
                href='https://instagram.com/reactlessons'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Follow us on Instagram'
              >
                Follow us on Instagram
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>© 2025 All Rights Reserved</div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
