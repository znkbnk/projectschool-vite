import { useEffect } from "react";
import "../styles/success.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Login/useAuthContext"; // ← Import the context
import { auth } from "../components/firebase"; // ← For token refresh

const Success = () => {
  const navigate = useNavigate();
  const { refreshUserData } = useAuthContext();

  useEffect(() => {
    const handleSuccess = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          // 1. Force refresh the Firebase ID token (invalidates cached claims)
          await user.getIdToken(true);
          console.log("[Success] Firebase ID token refreshed");

          // 2. Force refresh subscription status from backend + clear sessionStorage cache
          await refreshUserData();
          console.log("[Success] Subscription data refreshed");
        }
      } catch (error) {
        console.error("[Success] Error refreshing auth/subscription:", error);
      }
    };

    handleSuccess();

    // Redirect after 10 seconds (gives time to read message + data to sync)
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate, refreshUserData]);

  return (
    <div>
      <Navbar />
      <div className='success-container'>
        <div className='success-card'>
          <div className='icon-container'>
            <i className='checkmark'>✓</i>
          </div>
          <h1>Payment Successful!</h1>
          <p className='success-text'>
            Thank you for your purchase!
            <br />
            <strong>Your subscription is now active</strong> — you can access
            all solutions immediately.
            <br />
            <br />
            Redirecting you home in 10 seconds...
          </p>
          <button className='home-button' onClick={() => navigate("/")}>
            Go Home Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
