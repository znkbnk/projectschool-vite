const solutionCode1 = `
//App.js

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import './styles.css'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ctaRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    // Initial setup - drawer is down, CTA visible
    gsap.set(".order-details-container", { y: -40 });
    gsap.set([".cta-button", ".cta-text"], { opacity: 1, y: 0 });
  }, []);

  const hideCTA = () => {
    gsap.to([".cta-button", ".cta-text"], {
      y: -15,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      stagger: 0.1,
      onComplete: () => {
        slideUp();
      },
    });
  };

  const showCTA = () => {
    gsap.to([".cta-button", ".cta-text"], {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
    });
  };

  const slideUp = () => {
    gsap.to(".order-details-container", {
      y: -550,
      duration: 1,
      ease: "power2.in",
      onStart: () => {
        document.querySelector(".order-details-container").classList.add("hidden-odc-header");
      },
      onComplete: () => {
        setDrawerOpen(true);
      },
    });
  };

  const slideDown = () => {
    gsap.to(".order-details-container", {
      y: -40,
      duration: 1,
      ease: "power2.out",
      onStart: () => {
        document.querySelector(".order-details-container").classList.remove("hidden-odc-header");
        setDrawerOpen(false);
      },
      onComplete: () => {
        showCTA();
      },
    });
  };

  return (
    <div className='container'>
      <div className='iphone'>
        <div className='header'>
          <div className='order-summary'>
            <div className='order-status'>Arriving date</div>
            <div className='order-date'>29 May, 2024</div>
            <div className='order-day'>Saturday</div>
          </div>
        </div>
        <div className='hero-img-container'>
          <div className='triangle1'></div>
          <div className='arc'></div>
          <img src='./img/reactWaiting.png' className='hero-img' alt='Hero' />
        </div>
        <div className='order-status-container'>
          <div className='status-item first'>
            <div className='status-circle'></div>
            <div className='status-text'>Paid</div>
          </div>
          <div className='status-item second'>
            <div className='status-circle'></div>
            <div className='status-text'>Dispatched</div>
          </div>
          <div className='status-item'>
            <div className='status-circle'></div>
            <div className='status-text green'>
              <span>Out</span>
              <span>for delivery</span>
            </div>
          </div>
          <div className='status-item'>
            <div className='status-circle'></div>
            <div className='status-text green'>
              <span>Ariving</span>
              <span>07&nbsp;-&nbsp;May&nbsp;2024</span>
            </div>
          </div>
        </div>
        <div className='order-details-container' ref={drawerRef}>
          <div className='odc-header'>
            <div className='cta-text' ref={ctaRef}>See your order details</div>
            <div className='cta-button-container'>
              <button
                className='cta-button'
                onClick={hideCTA}
              >
                View
              </button>
            </div>
          </div>
          <div className='odc-wrapper'>
            <div className='top-of-order'>
              <div className='odc-header-line'>Your order details</div>
              <div
                className='action-btn'
                onClick={() => {
                  if (drawerOpen) {
                    slideDown();
                  }
                }}
              >
                <div className='back-btn'>
                  <FontAwesomeIcon icon={faCircleDown} />
                </div>
              </div>
            </div>
            <div className='odc-header-details'>
              Your order number: 4563546
            </div>
            <div className='product-container'>
              <div className='product'>
                <div className='product-photo'>
                  <img
                    src='./img/css.png'
                    className='img-photo'
                    alt='Product 1'
                  />
                </div>
                <div className='product-desc'>
                  <span>CSS 3</span>
                  <span>10$</span>
                </div>
              </div>
              <div className='product'>
                <div className='product-photo'>
                  <img
                    src='./img/js.png'
                    className='img-photo'
                    alt='Product 2'
                  />
                </div>
                <div className='product-desc'>
                  <span>JavaScript</span>
                  <span>50$</span>
                </div>
              </div>
            </div>
            <a href='order-cancellationReqtoken12.netlify.app'>
              <div className='cancellation'>Request Cancellation</div>
            </a>
            <div className='shipping-desc'>Your Shipping Address</div>
            <div className='shipping-address'>
              Address 1<br />
              City
              <br />
              PostCode
              <br />
              Country
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;