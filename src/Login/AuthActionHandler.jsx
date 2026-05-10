// src/Login/AuthActionHandler.js
import  { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthActionHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const mode = searchParams.get("mode"); // Get the mode (e.g., "verifyEmail" or "resetPassword")
    const oobCode = searchParams.get("oobCode"); // Get the oobCode

    console.log("Mode:", mode); // Debugging
    console.log("oobCode:", oobCode); // Debugging

    if (!mode || !oobCode) {
      console.error("Missing mode or oobCode"); // Debugging
      navigate("/"); // Redirect to home if parameters are missing
      return;
    }

    // Handle different modes
    switch (mode) {
      case "verifyEmail":
        console.log("Redirecting to verify-email"); // Debugging
        navigate(`/verify-email?oobCode=${oobCode}`);
        break;
      case "resetPassword":
        console.log("Redirecting to reset-password-confirm"); // Debugging
        navigate(`/reset-password-confirm?oobCode=${oobCode}`);
        break;
      default:
        console.error("Unknown mode:", mode); // Debugging
        navigate("/"); // Redirect to home for unknown modes
    }
  }, [searchParams, navigate]);

  return <div>Loading...</div>; // Show a loading message while redirecting
};

export default AuthActionHandler;