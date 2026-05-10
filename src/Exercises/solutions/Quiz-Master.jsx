const solutionCode1 = `
// App.js

import React from 'react';
import Quiz from './components/Quiz';
import './styles.css'

const App = () => (
  <div className="App">
    <div className="react-logo"></div>
    <header className="App-header">
      <h1>React Mastery Challenge</h1>
      <Quiz />
    </header>
  </div>
);

export default App;
`;

const solutionCode2 = `
//components/Quiz.js 


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import quizData from '../data/quizData';


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionTimes, setQuestionTimes] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false); 

  useEffect(() => {
    if (quizFinished) return; 
    setStartTime(Date.now());
  }, [currentQuestion, quizFinished]);

  const handleOptionClick = (index) => {
    if (selectedOption !== null || quizFinished) return; 

    const endTime = Date.now();
    const timeTaken = endTime - startTime; 

    const correct = index === quizData[currentQuestion].a;
    if (correct) {
      setScore(score + 1);
    }

    setQuestionTimes([...questionTimes, { question: currentQuestion, time: timeTaken, correct }]);
    setSelectedOption(index);
    
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true); 
      }
    }, 500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setQuestionTimes([]);
    setStartTime(Date.now());
    setQuizFinished(false);
  };

  const correctAnswers = questionTimes.filter(q => q.correct).length;
  const incorrectAnswers = questionTimes.length - correctAnswers;
  const totalTime = questionTimes.reduce((sum, q) => sum + q.time, 0) / 1000; // Convert to seconds

  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!quizFinished ? (
        <>
          <motion.div 
            className="quiz-question"
            key={currentQuestion}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{quizData[currentQuestion].q}</h2>
          </motion.div>
          <div className="quiz-options">
            <AnimatePresence>
              {quizData[currentQuestion].o.map((option, index) => (
                <motion.div
                key={index}
                className={\`quiz-option \${
                  selectedOption === index
                    ? index === quizData[currentQuestion].a
                      ? 'correct'
                      : 'wrong'
                    : ''
                }\`}
                onClick={() => handleOptionClick(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option}
              </motion.div>
              
              ))}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <motion.div 
          className="quiz-result"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            You have answered {score} of {quizData.length} correctly.
          </h2>
          <h3>Details:</h3>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          <p>Total Time: {totalTime.toFixed(2)} seconds</p>
          <motion.button 
            onClick={restartQuiz}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Restart Quiz
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Quiz;

`;


const solutionCode3 = `
//data/quizData.js

const quizData = [
    {
      q: "What is the primary function of the React 'useState' hook?",
      o: [
        "Manage side effects",
        "Handle routing",
        "Manage state in functional components",
        "Optimize performance"
      ],
      a: 2
    },
    {
      q: "What does JSX stand for in React?",
      o: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript XSL",
        "JavaScript XMode"
      ],
      a: 0
    },
    {
      q: "Which method in React is used to render components to the DOM?",
      o: [
        "renderComponent()",
        "ReactDOM.render()",
        "componentDidMount()",
        "createElement()"
      ],
      a: 1
    },
    {
      q: "What is the purpose of the 'useEffect' hook?",
      o: [
        "To manage local component state",
        "To perform side effects in functional components",
        "To handle user input",
        "To optimize rendering performance"
      ],
      a: 1
    },
    {
      q: "What is the key benefit of using React's 'virtual DOM'?",
      o: [
        "Improved security",
        "Better API integration",
        "Faster UI updates and rendering",
        "Simplified state management"
      ],
      a: 2
    }
  ];
  
  export default quizData;
  
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2, solutionCode3];