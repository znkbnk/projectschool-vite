// src/components/CookiePopup.js
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCookie } from "../context/CookieProvider";
import "../styles/CookiePopup.css";

// Icons
const CookieIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <circle cx='8' cy='9' r='1' fill='currentColor' />
    <circle cx='15' cy='8' r='1' fill='currentColor' />
    <circle cx='10' cy='14' r='1' fill='currentColor' />
    <circle cx='16' cy='13' r='1' fill='currentColor' />
    <circle cx='12' cy='17' r='1' fill='currentColor' />
  </svg>
);

const CheckIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='3'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='3' />
    <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' />
  </svg>
);

const CookiePopup = () => {
  const {
    showCookiePopup,
    hideCookiePopup,
    cookiePreferences,
    updatePreferences,
  } = useCookie();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [tempPreferences, setTempPreferences] = useState(cookiePreferences);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent || showCookiePopup) {
      // Small delay for smooth animation on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showCookiePopup]);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    updatePreferences({ essential: true, analytics: true, marketing: true });
    setIsVisible(false);
    hideCookiePopup();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    updatePreferences({ essential: true, analytics: false, marketing: false });
    setIsVisible(false);
    hideCookiePopup();
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setTempPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "custom");
    updatePreferences(tempPreferences);
    setIsVisible(false);
    hideCookiePopup();
  };

  const handleBackToMain = () => {
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='cookie-popup'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className='cookie-container'>
            {/* Header */}
            <div className='cookie-header'>
              <div className='cookie-icon'>
                <CookieIcon />
              </div>
              <p className='cookie-title'>
                {showPreferences
                  ? "Cookie Preferences"
                  : "We Value Your Privacy"}
              </p>
            </div>

            {/* Content */}
            <AnimatePresence mode='wait'>
              {!showPreferences ? (
                <motion.div
                  key='main'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className='cookie-text'>
                    We use cookies to enhance your browsing experience and
                    analyze site traffic. By clicking "Accept All", you consent
                    to our use of cookies. Learn more in our{" "}
                    <Link to='/privacy' className='cookie-link'>
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <div className='cookie-buttons'>
                    <button
                      className='cookie-btn cookie-btn-primary'
                      onClick={handleAcceptAll}
                      aria-label='Accept all cookies'
                    >
                      <CheckIcon />
                      <span>Accept All</span>
                    </button>
                    <button
                      className='cookie-btn cookie-btn-secondary'
                      onClick={handleDecline}
                      aria-label='Decline optional cookies'
                    >
                      Decline
                    </button>
                    <button
                      className='cookie-btn cookie-btn-outline'
                      onClick={handleCustomize}
                      aria-label='Customize cookie preferences'
                    >
                      <SettingsIcon />
                      <span>Customize</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key='preferences'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className='cookie-preferences'
                >
                  <div className='preference-list'>
                    {/* Essential */}
                    <label className='preference-item'>
                      <div className='preference-info'>
                        <span className='preference-name'>
                          Essential Cookies
                        </span>
                        <span className='preference-desc'>
                          Required for the website to function properly
                        </span>
                      </div>
                      <div className='toggle-wrapper'>
                        <input
                          type='checkbox'
                          name='essential'
                          checked={tempPreferences.essential}
                          disabled
                          className='toggle-input'
                        />
                        <span className='toggle-slider disabled'></span>
                        <span className='required-badge'>Required</span>
                      </div>
                    </label>

                    {/* Analytics */}
                    <label className='preference-item'>
                      <div className='preference-info'>
                        <span className='preference-name'>
                          Analytics Cookies
                        </span>
                        <span className='preference-desc'>
                          Help us understand how visitors interact with our site
                        </span>
                      </div>
                      <div className='toggle-wrapper'>
                        <input
                          type='checkbox'
                          name='analytics'
                          checked={tempPreferences.analytics}
                          onChange={handlePreferenceChange}
                          className='toggle-input'
                        />
                        <span
                          className={`toggle-slider ${
                            tempPreferences.analytics ? "active" : ""
                          }`}
                        ></span>
                      </div>
                    </label>

                    {/* Marketing */}
                    <label className='preference-item'>
                      <div className='preference-info'>
                        <span className='preference-name'>
                          Marketing Cookies
                        </span>
                        <span className='preference-desc'>
                          Used to deliver personalized advertisements
                        </span>
                      </div>
                      <div className='toggle-wrapper'>
                        <input
                          type='checkbox'
                          name='marketing'
                          checked={tempPreferences.marketing}
                          onChange={handlePreferenceChange}
                          className='toggle-input'
                        />
                        <span
                          className={`toggle-slider ${
                            tempPreferences.marketing ? "active" : ""
                          }`}
                        ></span>
                      </div>
                    </label>
                  </div>

                  <div className='cookie-buttons preferences-buttons'>
                    <button
                      className='cookie-btn cookie-btn-ghost'
                      onClick={handleBackToMain}
                      aria-label='Go back'
                    >
                      ← Back
                    </button>
                    <button
                      className='cookie-btn cookie-btn-primary'
                      onClick={handleSavePreferences}
                      aria-label='Save cookie preferences'
                    >
                      <CheckIcon />
                      <span>Save Preferences</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePopup;
