// Create this file: src/components/AuthDebug.jsx
// Add this component temporarily to your app to debug auth state

import { useAuth } from "../Login/useAuthContext";
import { useEffect, useState } from "react";

const AuthDebug = () => {
  const {
    isLoggedIn,
    userEmail,
    subscriptionStatus,
    isLoading,
    error,
    isAdmin,
  } = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("=== AUTH DEBUG ===");
    console.log("isLoggedIn:", isLoggedIn);
    console.log("userEmail:", userEmail);
    console.log("subscriptionStatus:", subscriptionStatus);
    console.log(
      "subscriptionStatus === 'subscribed':",
      subscriptionStatus === "subscribed",
    );
    console.log(
      "subscriptionStatus?.toLowerCase() === 'subscribed':",
      subscriptionStatus?.toLowerCase() === "subscribed",
    );
    console.log("isAdmin:", isAdmin);
    console.log("isLoading:", isLoading);
    console.log("error:", error);
    console.log("==================");
  }, [isLoggedIn, userEmail, subscriptionStatus, isLoading, error, isAdmin]);

  // Simple toggle button - add to Navbar or somewhere visible
  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      <button
        onClick={() => setShow(!show)}
        style={{
          padding: "8px 12px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        Debug
      </button>
      {show && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 0,
            backgroundColor: "#222",
            color: "#0f0",
            padding: "12px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "11px",
            maxWidth: "300px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          <strong>Auth State:</strong>
          <br />
          Logged In: {String(isLoggedIn)}
          <br />
          Email: {userEmail || "N/A"}
          <br />
          Subscription: {subscriptionStatus}
          <br />
          Is Subscribed:{" "}
          {String(subscriptionStatus?.toLowerCase() === "subscribed")}
          <br />
          Admin: {String(isAdmin)}
          <br />
          Loading: {String(isLoading)}
          <br />
          Error: {error || "None"}
        </div>
      )}
    </div>
  );
};

export default AuthDebug;
