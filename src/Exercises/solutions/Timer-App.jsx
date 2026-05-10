


const solutionCode1 = `
//App.js

import React, { useState, useEffect } from 'react';
import './styles.css'; 

const App = () => {
  const [time, setTime] = useState(600); 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(600);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
  };

  return (
    <div className="timer-container">
      <div className={\`timer \${isActive ? 'active' : ''}\`}>
        <div className="time-display">{formatTime(time)}</div>
        <div className="button-container">
          {!isActive ? (
            <button className="start-btn" onClick={startTimer}>Start</button>
          ) : (
            <button className="pause-btn" onClick={pauseTimer}>Pause</button>
          )}
          <button className="reset-btn" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;