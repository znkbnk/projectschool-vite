
const solutionCode1 = `
//App.js

import React from 'react';
import AnalogClock from './AnalogClock';
import './styles.css'


const App = () => {
  return (
    <div className="App">
      <AnalogClock />
    </div>
  );
};

export default App;
`;

const solutionCode2 = `
//AnalogClock.js

import React, { useState, useEffect } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0
  });

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      setTime({
        seconds: seconds * 6,
        minutes: (minutes + seconds / 60) * 6,
        hours: (hours + (minutes + seconds / 60) / 60) * 30
      });
    };

    getCurrentTime(); // Set initial time

    const intervalId = setInterval(() => {
      setTime(prevTime => ({
        seconds: prevTime.seconds + 6,
        minutes: prevTime.minutes + 6 / 60,
        hours: prevTime.hours + 30 / 3600
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <div className="time time-12">12</div>
        <div className="time time-6">6</div>
        <div className="time time-3">3</div>
        <div className="time time-9">9</div>

        <div className="mid"></div>

        <div 
          className="line" 
          id="hours" 
          style={{ transform: \`rotate(\${time.hours}deg)\` }}
        ></div>
        <div 
          className="line" 
          id="seconds" 
          style={{ transform: \`rotate(\${time.seconds}deg)\` }}
        ></div>
        <div 
          className="line" 
          id="minutes" 
          style={{ transform: \`rotate(\${time.minutes}deg)\` }}
        ></div>
      </div>
    </div>
  );
};

export default AnalogClock;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];