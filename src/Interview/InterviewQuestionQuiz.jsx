import { useState, useEffect } from "react";
import ReactInterviewQuestionQuiz from "../data/ReactInterviewQuestionQuiz";
import { useParams, useNavigate } from "react-router-dom";
import "./InterviewQuestionQuiz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";
import useTrackTime from "../PathSection/useTrackTime";

const getQuestionBySlug = (slug) => {
  return ReactInterviewQuestionQuiz.find((quiz) => quiz.slug === slug);
};

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const InterviewQuestionQuiz = () => {
  useTrackTime("interviewQuizCheckedTitlesTimeSpent");
  const { slug } = useParams();
  const navigate = useNavigate();

  // --- FIX: USE LAZY INITIALIZATION ---
  // This function runs only once on the very first render.
  const [quizState, setQuizState] = useState(() => {
    // If there is a slug in the URL, try to load that specific quiz state
    if (slug && slug !== 'slug') {
      const specificQuestion = getQuestionBySlug(slug);
      if (specificQuestion) {
        const randomized = shuffleArray(ReactInterviewQuestionQuiz).slice(0, 20);
        // Ensure the specific question from URL is part of the 20 questions
        if (!randomized.find(q => q.slug === slug)) {
          randomized[0] = specificQuestion;
        }
        return {
          started: true,
          questions: randomized,
          current: specificQuestion
        };
      }
    }
    // Default state if no slug or quiz not started
    return { started: false, questions: [], current: null };
  });
const { started: quizStarted, questions: quizQuestions, current: currentQuestion } = quizState;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  // START QUIZ logic updated to use the consolidated state
  const startQuiz = () => {
    const randomizedQuestions = shuffleArray(ReactInterviewQuestionQuiz).slice(0, 20);
    setQuizState({
      started: true,
      questions: randomizedQuestions,
      current: randomizedQuestions[0]
    });
    navigate(`/interview/interview-quiz/${randomizedQuestions[0].slug}`);
  };

  // Effect now only handles side effects (scrolling), not state syncing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, currentQuestion]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === quizState.current.correctAnswer) {
      setScore(s => s + 1);
    }
    setShowResult(true);
    setAnsweredQuestions(prev => prev + 1);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");
    const currentIndex = quizState.questions.indexOf(quizState.current);
    
    if (currentIndex < quizState.questions.length - 1) {
      const nextQ = quizState.questions[currentIndex + 1];
      setQuizState(prev => ({ ...prev, current: nextQ }));
      navigate(`/interview/interview-quiz/${nextQ.slug}`);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer("");
    setShowResult(false);
    setAnsweredQuestions(0);
    setQuizState({ started: false, questions: [], current: null });
    navigate('/interview/interview-quiz');
  };



  if (!quizStarted) {
    return (
      <div>
        <ScrollToTopOnNavigation />
        <Navbar />
        <h1 className="component-title">Interview Question Quiz</h1>
        <div className="quiz-container">
          <div className="quiz-card" style={{ minHeight: 'auto' }}>
            <h2>How It Works</h2>
            <p className="quiz-intro-text">
              Test your React knowledge with 20 randomized theory questions.
            </p>
            <button className="next-btn" onClick={startQuiz}>Start Quiz</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!currentQuestion) return <div>Loading...</div>;

  const progressPercentage = (answeredQuestions / quizQuestions.length) * 100;

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <h1 className="component-title">Interview Question Quiz</h1>
      <div className="quiz-container">
        <div className="quiz-card">
          {!quizCompleted ? (
            <>
              <h2>{currentQuestion.question}</h2>
              <div className="options">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${
                      showResult && option === currentQuestion.correctAnswer
                        ? "correct"
                        : showResult && option === selectedAnswer
                        ? "incorrect"
                        : ""
                    }`}
                    onClick={() => handleAnswerClick(option)}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showResult && (
                <div className="feedback">
                  {selectedAnswer === currentQuestion.correctAnswer ? "Correct! 🎉" : "Incorrect 😞"}
                </div>
              )}
              {showResult && (
                <button className="next-btn" onClick={handleNextQuestion}>
                  {quizQuestions.indexOf(currentQuestion) < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </button>
              )}
              <div className="quiz-progress-bar">
                <div className="quiz-progress" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </>
          ) : (
            <div className="quiz-result">
              <h2>Quiz Completed!</h2>
              <p>Your score: {score}/{quizQuestions.length}</p>
              <button className="retry-btn" onClick={resetQuiz}>Retry Quiz</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewQuestionQuiz;