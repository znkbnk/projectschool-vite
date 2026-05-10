import { CheckCircle, XCircle, ArrowLeft, Sparkles } from "lucide-react";
import "./SubscriptionConfirmation.css";

const PARTICLES = [
  { left: "10%", top: "20%", delay: "0s", duration: "2s" },
  { left: "25%", top: "55%", delay: "0.5s", duration: "3s" },
  { left: "40%", top: "10%", delay: "1s", duration: "2.5s" },
  { left: "55%", top: "75%", delay: "0.2s", duration: "2s" },
  { left: "70%", top: "30%", delay: "1.5s", duration: "3.5s" },
  { left: "80%", top: "60%", delay: "0.8s", duration: "2s" },
  { left: "90%", top: "15%", delay: "0.3s", duration: "2.8s" },
  { left: "15%", top: "85%", delay: "1.2s", duration: "3s" },
  { left: "60%", top: "45%", delay: "0.7s", duration: "2.2s" },
  { left: "35%", top: "90%", delay: "1.8s", duration: "2.5s" },
  { left: "5%", top: "50%", delay: "0.4s", duration: "3.2s" },
  { left: "50%", top: "5%", delay: "1.1s", duration: "2s" },
  { left: "75%", top: "80%", delay: "0.9s", duration: "2.7s" },
  { left: "20%", top: "35%", delay: "1.6s", duration: "3s" },
  { left: "85%", top: "40%", delay: "0.1s", duration: "2.3s" },
  { left: "45%", top: "65%", delay: "1.3s", duration: "3.5s" },
  { left: "65%", top: "95%", delay: "0.6s", duration: "2s" },
  { left: "30%", top: "70%", delay: "1.9s", duration: "2.8s" },
  { left: "95%", top: "25%", delay: "0.4s", duration: "3.1s" },
  { left: "8%", top: "95%", delay: "1.4s", duration: "2.4s" },
];

const Confirmation = () => {
  const status =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("status") || "success"
      : "success";

  const isSuccess = status === "success";

  return (
    <div className="confirmation-container">
      <div className="background-particles">
        {PARTICLES.map((style, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: style.left,
              top: style.top,
              animationDelay: style.delay,
              animationDuration: style.duration,
            }}
          />
        ))}
      </div>

      <div className="confirmation-card animate-in">
        <div
          className={`glow-border ${isSuccess ? "success-glow" : "error-glow"}`}
        />

        <div className="card-content">
          <div
            className={`icon-container icon-animate ${
              isSuccess ? "success-icon" : "error-icon"
            }`}
          >
            {isSuccess ? (
              <CheckCircle className="main-icon success-bounce" />
            ) : (
              <XCircle className="main-icon error-pulse" />
            )}

            {isSuccess && (
              <>
                <Sparkles className="sparkle sparkle-1" />
                <Sparkles className="sparkle sparkle-2" />
              </>
            )}
          </div>

          <h1 className="confirmation-title">
            {isSuccess ? "Subscription Confirmed!" : "Subscription Failed"}
          </h1>

          {isSuccess ? (
            <div className="success-content">
              <p className="success-description">
                You're all set! Enjoy full access to all premium content on
                Project School.
              </p>
            </div>
          ) : (
            <div className="error-content">
              <p className="error-title">Oops! Something went wrong</p>
              <p className="error-description">
                We couldn't process your subscription. Please try again or reach
                out to our support team.
              </p>

              <div className="support-box">
                <p className="support-label">Need help?</p>
                <a
                  href="mailto:support@projectschool.dev"
                  className="support-email"
                >
                  support@projectschool.dev
                </a>
              </div>
            </div>
          )}

          <div className="return-section">
            <a href="https://www.projectschool.dev" className="return-button">
              <ArrowLeft className="return-arrow" />
              <span>Return to www.projectschool.dev</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
