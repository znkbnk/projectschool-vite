import  { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/success.css"; // Reusing styles – adjust if needed
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="cancel-container">
        <div className="cancel-card">
          <div className="cancel-icon-container">
            <i className="cancel-checkmark">✘</i>
          </div>
          <h1>Payment Declined</h1>
          <p className="success-text">
            Your payment could not be processed at this time.
            <br />
            Please check your card details and try again, or contact support if the issue persists.
            <br />
            <br />
            Redirecting you home in 8 seconds...
          </p>
          <button
            className="home-button"
            onClick={() => navigate("/pricing")}
          >
            Try Again
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cancel;