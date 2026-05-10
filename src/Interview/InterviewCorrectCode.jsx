import { useState, useEffect } from "react";
import ReactInterviewCorrectCodeData from "../data/InterviewCorrectCodeData";
import { useParams, useNavigate } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./InterviewCorrectCode.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useTrackTime from "../PathSection/useTrackTime";

// Custom theme (remains the same)
const customDarkTheme = {
  ...dark,
  'hljs-keyword': { color: '#7aa6da', fontWeight: 'bold' },
  'hljs-function': { color: '#d87b5e' },
  'hljs-params': { color: '#d87b5e' },
  'hljs-string': { color: '#98c379' },
  'hljs-variable': { color: '#d7ba7d' },
  'hljs-comment': { color: 'lightGreen' },
  'hljs-number': { color: '#d19a66' },
  'hljs-class .hljs-title': { color: '#e06c75' },
  'hljs-attr': { color: '#c678dd' },
  'hljs-tag': { color: '#e5c07b' },
  'hljs-type': { color: '#c678dd' },
  'hljs-built_in': { color: '#56b6c2' },
  'hljs-symbol': { color: '#d19a66' },
  'hljs-link': { color: '#61afef' },
  'hljs-doctag': { color: '#e5c07b' },
  'hljs-title': { color: '#d7ba7d' },
  'hljs-section': { color: '#56b6c2' },
  'hljs-meta': { color: '#e5c07b' },
  'hljs-subst': { color: '#e06c75' },
  'hljs-deletion': { color: '#be5046' },
  'hljs-addition': { color: '#98c379' },
  'hljs-regexp': { color: '#c678dd' },
  'hljs-selector-id': { color: '#e06c75' },
  'hljs-selector-class': { color: '#61afef' },
  'hljs-selector-attr': { color: '#c678dd' },
  'hljs-attribute': { color: '#98c379' },
  'hljs-meta-keyword': { color: '#7aa6da' },
  'hljs-meta-string': { color: '#98c379' },
  'hljs-emphasis': { fontStyle: 'italic', color: '#d19a66' },
  'hljs-strong': { fontWeight: 'bold', color: '#d87b5e' },
  'hljs-code': { fontFamily: 'monospace', backgroundColor: '#2c313c', padding: '2px 4px', borderRadius: '4px' },
  'hljs-decorator': { color: '#e06c75' },
  'hljs-punctuation': { color: '#abb2bf' },
  'hljs-selector-pseudo': { color: '#c678dd' },
  'hljs-function .hljs-title': { color: '#d87b5e' },
  'hljs-literal': { color: '#d19a66' },
  'hljs-tag .hljs-name': { color: '#61afef' },
  'hljs-tag .hljs-value': { color: '#98c379' },
  'hljs-keyword .hljs-title': { color: '#7aa6da' },
  'hljs-link .hljs-url': { color: '#56b6c2' },
  'hljs-function .hljs-params': { color: '#d87b5e' },
};

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const getQuestionBySlug = (slug) => {
  return ReactInterviewCorrectCodeData.find((quiz) => quiz.slug === slug);
};

const InterviewCorrectCode = () => {
  useTrackTime("interviewQuizCheckedTitlesTimeSpent");
  const { slug } = useParams();
  const navigate = useNavigate();

  // --- FIX: CONSOLIDATED LAZY INITIALIZER ---
  const [quizState, setQuizState] = useState(() => {
    if (slug && slug !== 'slug') {
      const specificQuestion = getQuestionBySlug(slug);
      if (specificQuestion) {
        const randomized = shuffleArray(ReactInterviewCorrectCodeData).slice(0, 20);
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
    return { started: false, questions: [], current: null };
  });

const { started: quizStarted, questions: quizQuestions, current: currentQuestion } = quizState;

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  

  const dedent = (str) => {
    const lines = str.split('\n');
    const nonEmpty = lines.filter(l => l.trim());
    if (!nonEmpty.length) return str;
    const minIndent = Math.min(...nonEmpty.map(l => l.match(/^\s*/)[0].length));
    return lines.map(l => l.slice(minIndent)).join('\n').trim();
  };

  // Re-run simple effect for scrolling when the question changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, currentQuestion]);

  const startQuiz = () => {
    const randomizedQuestions = shuffleArray(ReactInterviewCorrectCodeData).slice(0, 20);
    setQuizState({
      started: true,
      questions: randomizedQuestions,
      current: randomizedQuestions[0]
    });
    navigate(`/interview/interview-correct-code/${randomizedQuestions[0].slug}`);
  };

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option.isCorrect) {
      setScore(s => s + 1);
    }
    setShowResult(true);
    setAnsweredQuestions((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    const currentIndex = quizState.questions.indexOf(quizState.current);
    if (currentIndex < quizState.questions.length - 1) {
      const nextQ = quizState.questions[currentIndex + 1];
      setQuizState(prev => ({ ...prev, current: nextQ }));
      navigate(`/interview/interview-correct-code/${nextQ.slug}`);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnsweredQuestions(0);
    setQuizState({ started: false, questions: [], current: null });
    navigate('/interview/interview-correct-code');
  };



  if (!quizStarted) {
    return (
      <div>
        <Navbar />
        <h1 className="component-title">React Interview Correct Code</h1>
        <div className="correctCode-container">
          <div className="correctCode-card">
            <h2>How It Works</h2>
            <p className="quiz-intro-text">
              Pick the snippet that correctly implements the described React concept.
            </p>
            <ul className="quiz-intro-details">
              <li>📝 20 randomized questions</li>
              <li>⏱️ No time limit</li>
              <li>✅ Instant feedback</li>
            </ul>
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
      <Navbar />
      <h1 className='component-title'>Interview Question Quiz</h1>
      <div className="correctCode-container">
        <div className="correctCode-card">
          {!quizCompleted ? (
            <>
              <h2>{currentQuestion.question}</h2>
              <div className="correctCode">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`correctCode-btn ${
                      showResult && option.isCorrect
                        ? "correct"
                        : showResult && option === selectedAnswer
                        ? "incorrect"
                        : ""
                    }`}
                    onClick={() => handleAnswerClick(option)}
                    disabled={showResult}
                  >
                    <div className="code-container">
                      <SyntaxHighlighter language="javascript" style={customDarkTheme}>
                        {dedent(option.code)}
                      </SyntaxHighlighter>
                    </div>
                  </button>
                ))}
              </div>
              {showResult && (
                <div className="feedback">
                  {selectedAnswer && selectedAnswer.isCorrect ? "Correct! 🎉" : "Incorrect 😞"}
                </div>
              )}
              {showResult && (
                <button className="next-btn" onClick={handleNextQuestion}>
                  {quizQuestions.indexOf(currentQuestion) < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </button>
              )}
              <div className="correctCode-progress-bar">
                <div className="correctCode-progress" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </>
          ) : (
            <div className="correctCode-result">
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

export default InterviewCorrectCode;