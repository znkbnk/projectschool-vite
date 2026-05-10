// reacttask1.js

const solutionCode1 = `
// App.js 

import React from 'react';
import Card from './Card'; 
import './styles.css'

const App = () => {
  return (
    <div className="app-container">
      <Card />
    </div>
  );
}

export default App;

`;

const solutionCode2 = `
// Card.js 

import React, { useRef } from 'react';
import './styles.css';


const Card = () => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const sneakerImageRef = useRef(null);
  const descriptionRef = useRef(null);
  const difficultyButtonsRef = useRef(null);
  const startButtonRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const rotateX = y * 30;
    const rotateY = x * 30;

    card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    card.style.transition = 'none';

    titleRef.current.style.transform = 'translateZ(150px)';
    sneakerImageRef.current.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    descriptionRef.current.style.transform = 'translateZ(125px)';
    difficultyButtonsRef.current.style.transform = 'translateZ(100px)';
    startButtonRef.current.style.transform = 'translateZ(75px)';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transition = 'transform 0.5s';
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';

    titleRef.current.style.transform = 'translateZ(0px)';
    sneakerImageRef.current.style.transform = 'translateZ(0px) rotateZ(0deg)';
    descriptionRef.current.style.transform = 'translateZ(0px)';
    difficultyButtonsRef.current.style.transform = 'translateZ(0px)';
    startButtonRef.current.style.transform = 'translateZ(0px)';
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sneaker-image" ref={sneakerImageRef}>
        <div className="circle"></div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' alt="React" />
      </div>
      <div className="info">
        <h1 className="title" ref={titleRef}>React</h1>
        <p className="description" ref={descriptionRef}>
          This is text..
        </p>
        <div className="difficulty-buttons" ref={difficultyButtonsRef}>
          <button>Easy</button>
          <button>Advanced</button>
          <button>Hard</button>
          <button>Pro</button>
        </div>
        <div className="start-button" ref={startButtonRef}>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
