import  { useState } from "react";
import ReactInterviewQuestionQuiz from "../data/ReactInterviewCodeQuiz";
import "./interviewCodeQuiz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Helmet } from "react-helmet";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";
import useTrackTime from "../PathSection/useTrackTime";

const customDarkTheme = {
  ...dark,
  'hljs-keyword': { color: '#7aa6da', fontWeight: 'bold' },
  'hljs-function': { color: '#d87b5e' },
  'hljs-params': { color: '#d87b5e' },
  'hljs-string': { color: '#98c379' },
  'hljs-variable': { color: '#d7ba7d' },
  'hljs-comment': { color: '#5c6370' },
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

const getRandomQuestions = (questions, count) => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const InterviewCodeQuiz = () => {
  useTrackTime("interviewQuizCheckedTitlesTimeSpent");
  const [questions] = useState(ReactInterviewQuestionQuiz);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const dedent = (str) => {
  const lines = str.split('\n');
  const nonEmpty = lines.filter(l => l.trim());
  if (!nonEmpty.length) return str;
  const minIndent = Math.min(...nonEmpty.map(l => l.match(/^\s*/)[0].length));
  return lines.map(l => l.slice(minIndent)).join('\n').trim();
};

  const startQuiz = () => {
    const newRandomQuestions = getRandomQuestions(questions, 20);
    setRandomQuestions(newRandomQuestions);
    setQuizStarted(true);
    window.scrollTo(0, 0);
  };

  const currentQuestion = randomQuestions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);

    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
    window.scrollTo(0, 0);
  };

  const resetQuiz = () => {
    setScore(0);
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResult(false);
    setQuizStarted(false);
    setRandomQuestions([]);
  };

  // START SCREEN
  if (!quizStarted) {
    return (
      <div>
        <Helmet>
          <title>React Interview Code Quiz</title>
        </Helmet>
        <ScrollToTopOnNavigation />
        <Navbar />
        <h1 className="component-title">Interview Code Quiz</h1>
        <div className="quiz-container">
          <div className="quiz-card" style={{ minHeight: 'auto' }}>
            <h2>How It Works</h2>
            <p className="quiz-intro-text">
              You'll see a code snippet and need to predict what it does
              or identify the correct output. Test your ability to read React code!
            </p>
            <ul className="quiz-intro-details">
              <li>💻 20 code-based questions</li>
              <li>⏱️ No time limit — read carefully</li>
              <li>✅ Instant feedback after each answer</li>
            </ul>
            <button className="next-btn" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const progressPercentage =
    ((currentQuestionIndex + 1) / randomQuestions.length) * 100;

  return (
    <div>
      <Helmet>
        <title>React Interview Code Quiz</title>
      </Helmet>
      <ScrollToTopOnNavigation />
      <Navbar />
      <h1 className="component-title">Interview Code Quiz</h1>

      <div className="quiz-container">
        {!isFinished ? (
          <div className="quiz-card">
            <h2>{currentQuestion?.question}</h2>

            <SyntaxHighlighter language="javascript" style={customDarkTheme}>
              {dedent(currentQuestion?.codeSnippet || '')}
            </SyntaxHighlighter>
            <div className="options">
              {currentQuestion?.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    showResult && option === currentQuestion.correctAnswer
                      ? "correct"
                      : showResult &&
                        option === selectedAnswers[currentQuestionIndex]
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
                {selectedAnswers[currentQuestionIndex] ===
                currentQuestion.correctAnswer
                  ? "Correct! 🎉"
                  : "Incorrect 😞"}
              </div>
            )}
            {showResult && (
              <button className="next-btn" onClick={handleNextQuestion}>
                {currentQuestionIndex < randomQuestions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            )}
            <div className="quiz-progress-bar">
              <div
                className="quiz-progress"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            <h2>Quiz Completed!</h2>
            <p>
              Your score: {score}/{randomQuestions.length}
            </p>
            <button className="retry-btn" onClick={resetQuiz}>
              Retry Quiz
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default InterviewCodeQuiz;