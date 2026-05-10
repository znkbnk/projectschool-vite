const solutionCode1 = `
// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import TestSelection from "./components/TestSelection";
import Test from "./components/Test";
import Results from "./components/Results";
import QuestionForm from "./components/QuestionForm";

const App = () => {
  const [user, setUser] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [results, setResults] = useState(null);
  const [name, setName] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // Reset test state on login to ensure TestSelection is shown
      setTestStarted(false);
      setResults(null);
    });
    return () => unsubscribe();
  }, []);

  const startTest = (name, numQuestions) => {
    setName(name);
    setNumQuestions(numQuestions);
    setTestStarted(true);
    setResults(null); // Clear results to ensure fresh test
  };

  const endTest = (results) => {
    setResults(results);
    setTestStarted(false);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setTestStarted(false);
      setResults(null);
      setName("");
      setNumQuestions(10);
    });
  };

  const handleStartTest = () => {
    setTestStarted(false); // Reset test state to show TestSelection
    setResults(null); // Clear results to allow starting a new test
  };

  return (
    <Router>
      <div className='app-container'>
        <header className='header'>
          <h1>English Terms Test App</h1>
          {/* Show navigation buttons only when user is logged in */}
          {user && (
            <div className='header-buttons'>
              {/* Button to start a new test */}
              {!testStarted && !results && (
                <Link to='/'>
                  <button onClick={handleStartTest} className='start-test-btn'>
                    Start Test
                  </button>
                </Link>
              )}
              {/* Button to navigate to Add Question form */}
              {!testStarted && !results && (
                <Link to='/add-question'>
                  <button className='add-question-btn'>Add New Question</button>
                </Link>
              )}
              {/* Logout button */}
              <button onClick={handleLogout} className='logout-btn'>
                Logout
              </button>
            </div>
          )}
        </header>

        {!user ? (
          <Auth setUser={setUser} />
        ) : (
          <Routes>
            <Route path='/add-question' element={<QuestionForm />} />
            <Route
              path='/'
              element={
                results ? (
                  <Results
                    results={results}
                    onRetake={handleStartTest} // Pass handleStartTest to Results for retake functionality
                  />
                ) : testStarted ? (
                  <Test
                    name={name}
                    numQuestions={numQuestions}
                    endTest={endTest}
                  />
                ) : (
                  <TestSelection startTest={startTest} />
                )
              }
            />
          </Routes>
        )}

        <footer className='footer'>
          <p>© {new Date().getFullYear()} English Terms Test App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

`;

const solutionCode2 = `
// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };

`;
const solutionCode3 = `
// backend/.env

MONGO_URI=mongodb+srv://username:password@cluster0.ehamx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000

`;
const solutionCode4 = `
// backend/seedQuestions.js

const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection string from your .env file
const MONGO_URI = process.env.MONGO_URI;

// Define the Question schema (corrected to use proper types)
const questionSchema = new mongoose.Schema({
  questionText: String,
  correctAnswer: String,
  incorrectAnswers: [String],
  explanation: String,
});

const Question = mongoose.model('Question', questionSchema);

// Sample questions for beginner English learners
const sampleQuestions = [
  {
    questionText: "What is the English word for 'gato'?",
    correctAnswer: "cat",
    incorrectAnswers: ["dog", "bird", "fish"],
    explanation: "In English, 'gato' is translated as 'cat'. It is a common household pet.",
  },
  {
    questionText: "What is the color of the sky on a clear day?",
    correctAnswer: "blue",
    incorrectAnswers: ["green", "red", "yellow"],
    explanation: "The sky appears blue on a clear day due to the scattering of sunlight in the atmosphere.",
  },
  {
    questionText: "What do you say when you meet someone for the first time?",
    correctAnswer: "Hello",
    incorrectAnswers: ["Goodbye", "Thank you", "Sorry"],
    explanation: "'Hello' is a friendly greeting used when meeting someone for the first time.",
  },
  {
    questionText: "What is the opposite of 'big'?",
    correctAnswer: "small",
    incorrectAnswers: ["large", "huge", "tall"],
    explanation: "The word 'small' is the opposite of 'big' and describes something of little size.",
  },
  {
    questionText: "What is the English word for 'agua'?",
    correctAnswer: "water",
    incorrectAnswers: ["fire", "air", "earth"],
    explanation: "In English, 'agua' is translated as 'water'. It is essential for life.",
  },
  {
    questionText: "What do you wear on your feet?",
    correctAnswer: "shoes",
    incorrectAnswers: ["hat", "gloves", "shirt"],
    explanation: "'Shoes' are worn on your feet to protect them and keep them warm.",
  },
  {
    questionText: "What is the first day of the week?",
    correctAnswer: "Monday",
    incorrectAnswers: ["Friday", "Sunday", "Wednesday"],
    explanation: "In many cultures, Monday is considered the first day of the workweek.",
  },
  {
    questionText: "What is the English word for 'sol'?",
    correctAnswer: "sun",
    incorrectAnswers: ["moon", "star", "cloud"],
    explanation: "In English, 'sol' is translated as 'sun'. It provides light and warmth to the Earth.",
  },
  {
    questionText: "What do you use to write on paper?",
    correctAnswer: "pen",
    incorrectAnswers: ["spoon", "brush", "cup"],
    explanation: "A 'pen' is a tool used to write or draw on paper with ink.",
  },
  {
    questionText: "What is the number after two?",
    correctAnswer: "three",
    incorrectAnswers: ["one", "four", "five"],
    explanation: "The number after two is three. It comes in the sequence: one, two, three.",
  },
];

// Function to connect to MongoDB and seed the questions
const seedQuestions = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing questions (optional, comment out if you don't want to clear the database)
    await Question.deleteMany({});
    console.log('Cleared existing questions');

    // Insert the sample questions
    await Question.insertMany(sampleQuestions);
    console.log('Inserted 10 sample questions');

    // Close the connection
    mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding questions:', error);
    mongoose.connection.close();
  }
};

// Run the seeding function
seedQuestions();


`;
const solutionCode5 = `
// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Question Schema
const questionSchema = new mongoose.Schema({
  questionText: String,
  correctAnswer: String,
  incorrectAnswers: [String],
  explanation: String,
});

const Question = mongoose.model('Question', questionSchema);

// Routes
app.get('/questions', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

app.post('/questions', async (req, res) => {
  const newQuestion = new Question(req.body);
  await newQuestion.save();
  res.json(newQuestion);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`;
const solutionCode6 = `
// src/components/Auth.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signInWithEmail = async () => {
    try {
      setError('');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error signing in with email:", error.message);
      setError(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setError('');
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="auth-container card">
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signInWithEmail}>Sign In with Email</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Auth;
`;
const solutionCode7 = `
// src/components/QuestionForm.js

import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [questionText, setQuestionText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [incorrectAnswers, setIncorrectAnswers] = useState(['', '', '']);
  const [explanation, setExplanation] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/questions', {
        questionText,
        correctAnswer,
        incorrectAnswers,
        explanation,
      });
      setSuccess(true);
      setQuestionText('');
      setCorrectAnswer('');
      setIncorrectAnswers(['', '', '']);
      setExplanation('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <div className="question-form-container card">
      <h2>Add New Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question Text</label>
          <input
            type="text"
            placeholder="Enter the question text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Correct Answer</label>
          <input
            type="text"
            placeholder="Enter the correct answer"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
        </div>
        
        {incorrectAnswers.map((answer, index) => (
          <div key={index}>
            <label>Incorrect Answer {index + 1}</label>
            <input
              type="text"
              placeholder={\`Enter incorrect answer \${index + 1}\`}
              value={answer}
              onChange={(e) => {
                const newAnswers = [...incorrectAnswers];
                newAnswers[index] = e.target.value;
                setIncorrectAnswers(newAnswers);
              }}
              required
            />
          </div>
        ))}
        
        <div>
          <label>Explanation</label>
          <textarea
            placeholder="Enter explanation for the correct answer"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Add Question</button>
      </form>
      
      {success && (
        <div className="success-message">
          Question added successfully!
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
`;
const solutionCode8 = `
//src/components/Results.js

import React from 'react';

const Results = ({ results, onRetake }) => {
  const { score, total, incorrectAnswers, timeTaken } = results;
  const percentage = ((score / total) * 100).toFixed(2);
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;

  return (
    <div className="results-container card">
      <h2>Test Results</h2>
      
      <p>
        Score: <span className="score">{score}/{total}</span>
      </p>
      
      <p>
        Percentage: <span className="percentage">{percentage}%</span>
      </p>
      
      <p>
        Time Taken: <span className="time-taken">{minutes}m {seconds}s</span>
      </p>
      
      {incorrectAnswers.length > 0 && (
        <div className="incorrect-answers">
          <h3>Incorrect Answers:</h3>
          
          {incorrectAnswers.map((item, index) => (
            <div key={index}>
              <p><strong>Question:</strong> {item.question.questionText}</p>
              <p><strong>Your Answer:</strong> <span className="selected-answer">{item.selectedAnswer}</span></p>
              <p><strong>Correct Answer:</strong> <span className="correct-answer">{item.question.correctAnswer}</span></p>
              {item.question.explanation && (
                <p><strong>Explanation:</strong> {item.question.explanation}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      <button onClick={onRetake}>Take Another Test</button>
    </div>
  );
};

export default Results;
`;
const solutionCode9 = `
// src/components/Test.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = ({ name, numQuestions, endTest }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [startTime] = useState(Date.now());
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/questions');
        const shuffled = response.data.sort(() => Math.random() - 0.5).slice(0, numQuestions);
        setQuestions(shuffled);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuestions();
  }, [numQuestions]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correctAnswer = questions[currentQuestion].correctAnswer;
    
    if (answer === correctAnswer) {
      setScore(score + 1);
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    } else {
      setIncorrectAnswers([...incorrectAnswers, { 
        question: questions[currentQuestion], 
        selectedAnswer: answer 
      }]);
      setShowExplanation(true);
    }
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);
      endTest({ 
        score, 
        total: questions.length, 
        incorrectAnswers, 
        timeTaken 
      });
    }
  };

  if (isLoading) return <div className="loading">Loading questions...</div>;
  if (questions.length === 0) return <div className="card">No questions available. Please add some questions first.</div>;

  const currentQ = questions[currentQuestion];
  const options = [...currentQ.incorrectAnswers, currentQ.correctAnswer].sort(() => Math.random() - 0.5);

  const getButtonClass = (option) => {
    if (selectedAnswer === null) return "";
    if (option === currentQ.correctAnswer) return "correct";
    if (option === selectedAnswer && selectedAnswer !== currentQ.correctAnswer) return "incorrect";
    return "";
  };

  return (
    <div className="test-container card">
      <h2>Question {currentQuestion + 1}/{questions.length}</h2>
      <p className="question-text">{currentQ.questionText}</p>
      
      <div className="answer-options">
        {options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => selectedAnswer === null && handleAnswer(option)}
            className={getButtonClass(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      
      {showExplanation && (
        <div className="explanation">
          <p>The correct answer is: <span className="correct-answer">{currentQ.correctAnswer}</span></p>
          {currentQ.explanation && <p><strong>Explanation:</strong> {currentQ.explanation}</p>}
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Test;
`;
const solutionCode10 = `
// src/components/TestSelection.js

import React, { useState } from "react";

const TestSelection = ({ startTest }) => {
  const [name, setName] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);
  const [error, setError] = useState("");

  const handleStart = () => {
    if (name.trim()) {
      setError("");
      startTest(name, numQuestions);
    } else {
      setError("Please enter your name");
    }
  };

  return (
    <div className='test-selection-container card'>
      <h2>Start a Test</h2>

      <label>Your Name</label>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Number of Questions</label>
      <select
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
      >
        <option value={10}>10 Questions</option>
        <option value={20}>20 Questions</option>
        <option value={30}>30 Questions</option>
        <option value={50}>50 Questions</option>
      </select>

      <button onClick={handleStart}>Start Test</button>

      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default TestSelection;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
  solutionCode5,
  solutionCode6,
  solutionCode7,
  solutionCode8,
  solutionCode9,
  solutionCode10,
];
