const solutionCode1 = `
// FAQ.js

import React, { useState } from 'react';
import './styles.css'


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes."
  },
  {
    question: "How does React work?",
    answer: "React creates a virtual DOM, which is a lightweight representation of the actual DOM. When the state of an object changes, React updates the virtual DOM, then efficiently updates the real DOM to match."
  },
  {
    question: "What are components in React?",
    answer: "Components are the building blocks of a React application. They are JavaScript functions or classes that accept inputs (props) and return React elements that describe what should appear on the screen."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write elements inside your JavaScript code and is used with React to describe what the UI should look like."
  },
  {
    question: "What is state in React?",
    answer: "State is an object that holds data that may change over the lifetime of the component. It's managed within the component and can be passed as props to child components."
  },
  {
    question: "What are props in React?",
    answer: "Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to be shared between components."
  },
  {
    question: "What is a hook in React?",
    answer: "Hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are useState and useEffect."
  }
];


  return (
    <div className="faq-container">
      <div className="faq-background"></div>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className={\`faq-item \${activeIndex === index ? 'active' : ''}\`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-question-text">{item.question}</span>
              <div className="faq-icon">
                <div className="faq-icon-bar"></div>
                <div className="faq-icon-bar"></div>
              </div>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;