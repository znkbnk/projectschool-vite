const solutionCode1 = `
//App.js

import Testimonials from "./Testimonials";
import './styles.css'

function App() {
  return <Testimonials />;
}

export default App;

`;

const solutionCode2 = `
//Testimonials.js

import React, { useState, useEffect } from "react";
import gsap from "gsap";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "Studying at www.projectschool.dev was an incredible experience!",
      author: "Alice Lee",
    },
    {
      quote: "I'm amazed by the quality of education at www.projectschool.dev!",
      author: "Emily Wang",
    },
    {
      quote: "www.projectschool.dev made learning so enjoyable!",
      author: "Michael Chen",
    },
    {
      quote: "This is the best educational platform I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend www.projectschool.dev to everyone!",
      author: "John Smith",
    },
    {
      quote: "www.projectschool.dev has completely changed my approach to learning!",
      author: "Bob Johnson",
    },
  ];

  useEffect(() => {
    gsap.to(".testimonials", {
      duration: 4,
      backgroundColor: "#87CEEB",
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut" 
    });
  }, []); 

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
