import './polyfills';  // MUST be first!
import React from "react";
import "./index.css";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { AuthProvider } from "./Login/AuthProvider"; // Updated path
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

const AppWrapper = (
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Prerender check (for react-snap or similar)
const isPrerendered =
  window.__PRERENDER__ === true ||
  (rootElement.hasChildNodes() &&
    rootElement.children.length > 0 &&
    !rootElement.querySelector(".loading-placeholder"));

if (isPrerendered) {
  hydrateRoot(rootElement, AppWrapper);
} else {
  createRoot(rootElement).render(AppWrapper);
}

// Fixed for Vite environment check
if (import.meta.env.DEV) {
  reportWebVitals(console.log);
}