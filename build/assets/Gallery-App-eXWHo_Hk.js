var e=[`
// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// src/index.js or main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactGA from "react-ga4";
import "./index.css";

// replace with your GA4 Measurement ID
ReactGA.initialize("G-XXXXXXXXXX");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

`,`
// src/components/ArtGallery.js

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

const Gallery = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const overlayRef = useRef(null);
  const imgOverlayRefs = useRef([]);

  const images = [
    {
      src: "https://unsplash.it/500",
      href: "https://unsplash.it/500",
      title: "Custom Pet Portrait",
      price: "$89.99",
    },
    {
      src: "https://unsplash.it/600",
      href: "https://unsplash.it/600",
      title: "Family Portrait",
      price: "$129.99",
    },
    {
      src: "https://unsplash.it/700",
      href: "https://unsplash.it/700",
      title: "Custom Pet Portrait",
      price: "$89.99",
    },
    {
      src: "https://unsplash.it/800",
      href: "https://unsplash.it/800",
      title: "Family Portrait",
      price: "$129.99",
    },
    {
      src: "https://unsplash.it/900",
      href: "https://unsplash.it/900",
      title: "Custom Pet Portrait",
      price: "$89.99",
    },
    {
      src: "https://unsplash.it/1000",
      href: "https://unsplash.it/1000",
      title: "Family Portrait",
      price: "$129.99",
    },
    {
      src: "https://unsplash.it/1100",
      href: "https://unsplash.it/1100",
      title: "Custom Pet Portrait",
      price: "$89.99",
    },
    {
      src: "https://unsplash.it/1200",
      href: "https://unsplash.it/1200",
      title: "Family Portrait",
      price: "$129.99",
    },
  ];

  const handleBuyNow = () => {
    // Track the button click
    ReactGA.event({
      category: "Ecommerce",
      action: "Click Buy Now Button",
      label: "Gallery Buy Now",
    });
    navigate("/checkout");
  };

  const handleImageClick = (index, e) => {
    e.preventDefault();
    setCurrentImageIndex(index);
    setIsOverlayVisible(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setIsOverlayVisible(false);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleExit = () => {
    setIsOverlayVisible(false);
  };

  useEffect(() => {
    imgOverlayRefs.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener("mouseenter", () => {
          ref.style.opacity = "1";
        });
        ref.addEventListener("mouseleave", () => {
          ref.style.opacity = "0";
        });
      }
    });

    return () => {
      // Clean up event listeners
      imgOverlayRefs.current.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("mouseenter", () => {});
          ref.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  return (
    <section id='gallery'>
      <div className='container'>
        <h2>String Art Portrait Gallery</h2>
        <p className='gallery-description'>
          Handcrafted custom string art portraits made to order
        </p>

        <div id='image-gallery'>
          <div className='row'>
            {images.map((image, index) => (
              <div
                key={index}
                className='col-lg-3 col-md-6 col-sm-6 col-xs-12 image'
              >
                <div className='img-wrapper'>
                  <a href={image.href}>
                    <img
                      src={image.src}
                      className='img-responsive'
                      alt={\`String Art \${index}\`}
                    />
                  </a>
                  <div
                    className='img-overlay'
                    onClick={(e) => handleImageClick(index, e)}
                    ref={(el) => (imgOverlayRefs.current[index] = el)}
                  >
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </div>
                </div>
                <div className='image-info'>
                  <h3>{image.title}</h3>
                  <p>{image.price}</p>
                  <button className='btn buy-now' onClick={handleBuyNow}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOverlayVisible && (
        <div id='overlay' ref={overlayRef} onClick={handleOverlayClick}>
          <div id='prevButton' onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <img src={images[currentImageIndex].href} alt='Enlarged view' />
          <div id='nextButton' onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div id='exitButton' onClick={handleExit}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

`,`
// src/somponents/Footer.js

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>
          © {new Date().getFullYear()} String Art Portraits. All rights
          reserved. |
          <Link
            to='/privacy'
            style={{ color: "rgba(224, 219, 216, 0.8)", marginLeft: "10px" }}
          >
            Privacy Policy
          </Link>{" "}
          |
          <Link
            to='/terms'
            style={{ color: "rgba(224, 219, 216, 0.8)", marginLeft: "10px" }}
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

`,`
// src/components/Footer.js

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>
          © {new Date().getFullYear()} String Art Portraits. All rights
          reserved. |
          <Link
            to='/privacy'
            style={{ color: "rgba(224, 219, 216, 0.8)", marginLeft: "10px" }}
          >
            Privacy Policy
          </Link>{" "}
          |
          <Link
            to='/terms'
            style={{ color: "rgba(224, 219, 216, 0.8)", marginLeft: "10px" }}
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

`,`
// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='navbar'>
          <Link to='/' className='logo'>
            String Art Portraits
            <span
              style={{
                fontSize: "0.6em",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            >
              ®
            </span>
          </Link>
          <Link to='/checkout' className='btn btn-order'>
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

`,`
// src/pages/Checkout.js

import React, { useState } from "react";
import ReactGA from "react-ga4";

function Checkout() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "Lead Generation",
      action: "Submit Email",
      label: "Checkout Form",
    });

    //  send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className='checkout'>
      <div className='checkout-container'>
        <h1>Coming Soon!</h1>
        <p className='subtitle'>
          Our custom string art portraits are being perfected. Be the first to
          know when we launch! Join our waitlist for exclusive early access and
          discounts.
        </p>

        {submitted ? (
          <div className='success-message'>
            <h2>Thank You!</h2>
            <p>
              We've added you to our waiting list. You'll be the first to know
              when we launch.
            </p>
            <p>Check your email for a confirmation message.</p>
          </div>
        ) : (
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Enter your best email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className='btn btn-primary' type='submit'>
              Join Waitlist
            </button>
            <p className='privacy-notice'>
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </form>
        )}

        <div className='benefits'>
          <h3>Why join our waitlist?</h3>
          <ul>
            <li>Exclusive launch discount (20% off your first order)</li>
            <li>Early access to new designs before the public</li>
            <li>Behind-the-scenes updates on our creative process</li>
            <li>Special limited edition designs only for waitlist members</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Checkout;

`,`
// src pages/Home.js

import React, { useState } from "react";
import ReactGA from "react-ga4";

function Checkout() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "Lead Generation",
      action: "Submit Email",
      label: "Checkout Form",
    });

    //  send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className='checkout'>
      <div className='checkout-container'>
        <h1>Coming Soon!</h1>
        <p className='subtitle'>
          Our custom string art portraits are being perfected. Be the first to
          know when we launch! Join our waitlist for exclusive early access and
          discounts.
        </p>

        {submitted ? (
          <div className='success-message'>
            <h2>Thank You!</h2>
            <p>
              We've added you to our waiting list. You'll be the first to know
              when we launch.
            </p>
            <p>Check your email for a confirmation message.</p>
          </div>
        ) : (
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Enter your best email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className='btn btn-primary' type='submit'>
              Join Waitlist
            </button>
            <p className='privacy-notice'>
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </form>
        )}

        <div className='benefits'>
          <h3>Why join our waitlist?</h3>
          <ul>
            <li>Exclusive launch discount (20% off your first order)</li>
            <li>Early access to new designs before the public</li>
            <li>Behind-the-scenes updates on our creative process</li>
            <li>Special limited edition designs only for waitlist members</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Checkout;

`];export{e as default};
//# sourceMappingURL=Gallery-App-eXWHo_Hk.js.map