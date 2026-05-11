// src/Login/AuthActionHandler.js
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthActionHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const mode = searchParams.get("mode"); // Get the mode (e.g., "verifyEmail" or "resetPassword")
    const oobCode = searchParams.get("oobCode"); // Get the oobCode

    if (!mode || !oobCode) {
      navigate("/"); // Redirect to home if parameters are missing
      return;
    }

    // Handle different modes
    switch (mode) {
      case "verifyEmail":
        navigate(`/verify-email?oobCode=${encodeURIComponent(oobCode)}`);
        break;
      case "resetPassword":
        navigate(
          `/reset-password-confirm?oobCode=${encodeURIComponent(oobCode)}`,
        );
        break;
      default:
        navigate("/"); // Redirect to home for unknown modes
    }
  }, [searchParams, navigate]);

  return <div>Loading...</div>; // Show a loading message while redirecting
};

export default AuthActionHandler;
