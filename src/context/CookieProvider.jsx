// src/context/CookieContext.js
import React, { createContext, useState, useContext } from 'react';

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Essential cookies are always enabled
    analytics: false,
    marketing: false,
  });

  const toggleCookiePopup = () => {
    setShowCookiePopup(true); // Show the popup
  };

  const hideCookiePopup = () => {
    setShowCookiePopup(false); // Hide the popup
  };

  const updatePreferences = (newPreferences) => {
    setCookiePreferences((prev) => ({ ...prev, ...newPreferences }));
  };

  return (
    <CookieContext.Provider
      value={{
        showCookiePopup,
        toggleCookiePopup,
        hideCookiePopup,
        cookiePreferences,
        updatePreferences,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookie = () => useContext(CookieContext);