import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InterviewCardList from "./InterviewCardList";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";
import { useAuthContext } from "../Login/useAuthContext";

import "../styles/lockedOverlay.css";

const Interview = () => {
  const { subscriptionStatus } = useAuthContext();
  const isSubscribed = subscriptionStatus === "subscribed";

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <div className='header'>
        <h1 className='component-title'>React Interview Preparation</h1>
        <p className='header-subtitle'>
          265+ questions, coding challenges, and quizzes to get you job-ready.
        </p>

        {!isSubscribed && (
          <div className='access-info-banner'>
            <span className='access-info-icon'>🔓</span>
            <span>
              <strong>2 sections free</strong> — Upgrade to unlock all 5
              interview prep tools
            </span>
            <a href='/pricing' className='access-info-cta'>
              Upgrade →
            </a>
          </div>
        )}
      </div>
      <InterviewCardList />
      <Footer />
    </div>
  );
};

export default Interview;
