import  { useEffect, useState } from 'react';
import styles from './interviewQuestions.module.css';
import InterviewQuestionsCard from './InterviewQuestionsCard';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactInterviewQuestions from '../data/ReactInterviewQuestions';
import useTrackTime from '../PathSection/useTrackTime';

const InterviewQuestions = () => {
  useTrackTime("interviewQuizCheckedTitlesTimeSpent");
  const [quizStarted, setQuizStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showContentState, setShowContentState] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * ReactInterviewQuestions.length);
    return randomIndex;
  };

  const handleNextCard = () => {
    const randomIndex = getRandomIndex();
    if (randomIndex !== activeIndex) {
      setShowContentState(prevState => ({
        ...prevState,
        [activeIndex]: false,
      }));
      setActiveIndex(randomIndex);
    } else {
      handleNextCard();
    }
  };

  const handlePrevCard = () => {
    if (activeIndex > 0) {
      setShowContentState(prevState => ({
        ...prevState,
        [activeIndex]: false,
      }));
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleToggleContent = () => {
    setShowContentState(prevState => ({
      ...prevState,
      [activeIndex]: !prevState[activeIndex],
    }));
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setActiveIndex(Math.floor(Math.random() * ReactInterviewQuestions.length));
    window.scrollTo(0, 0);
  };

  // START SCREEN
  if (!quizStarted) {
    return (
      <div>
        <Navbar />
        <h1 className="component-title">Interview Questions</h1>
        <div className={styles.startContainer}>
          <div className={styles.startCard}>
            <h2>How It Works</h2>
            <p className={styles.introText}>
              Flip through {ReactInterviewQuestions.length} React interview questions.
              Each card has a question on the front — try to answer it before revealing the solution.
            </p>
            <ul className={styles.introDetails}>
              <li>🃏 Flashcard-style Q&A</li>
              <li>🔀 Randomized order each session</li>
              <li>👁️ Reveal answers when you're ready</li>
            </ul>
            <button className={styles.startBtn} onClick={startQuiz}>
              Start Practice
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 className="component-title">Interview Questions</h1>

      <div className={styles.container}>
        <div className={styles.carousel}>
          {activeIndex > 0 && (
            <button
              className={`${styles.nav} ${styles.left}`}
              onClick={handlePrevCard}
            >
              <TiChevronLeftOutline />
            </button>
          )}

          <div className={styles.cardContainer}>
            <InterviewQuestionsCard
              question={ReactInterviewQuestions[activeIndex].question}
              answer={ReactInterviewQuestions[activeIndex].answer}
              showContent={showContentState[activeIndex]}
              onToggleContent={handleToggleContent}
            />
          </div>

          {activeIndex < ReactInterviewQuestions.length - 1 && (
            <button
              className={`${styles.nav} ${styles.right}`}
              onClick={handleNextCard}
            >
              <TiChevronRightOutline />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewQuestions;