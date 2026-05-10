const solutionCode1 = `
//App.js 

import React from 'react';
import PomodoroTimer from './PomodoroTimer';
import './styles.css'

const App = () => (
  <div>
    <PomodoroTimer />
  </div>
);

export default App
`;

const solutionCode2 = `
//PomodoroTimer.js 

import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds <= 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsRotating(false);
            return 0;
          }
          return seconds - 1;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const reset = () => {
    setIsActive(false);
    setIsRotating(false);
    setSeconds(workTime * 60);
  };

  const startCountdown = (duration) => {
    setSeconds(duration * 60);
    setIsActive(true);
    // Reset the rotation
    setIsRotating(false);
    setTimeout(() => setIsRotating(true), 50);
  };

  const startWorkCountdown = () => startCountdown(workTime);
  const startBreakCountdown = () => startCountdown(breakTime);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return \`\${minutes < 10 ? '0' : ''}\${minutes}:\${sec < 10 ? '0' : ''}\${sec}\`;
  };

  return (
    <main>
      <h1>Pomodoro Timer</h1>
      <section id="pomodoro">
        <div id="clock-container">
          <div id="clockBody" className={isRotating ? 'rotating' : ''}></div>
          <div id="timer">{formatTime(seconds)}</div>
        </div>
        <div id="settings">
          <label htmlFor="work">Work</label>
          <input
            id="work"
            type="number"
            value={workTime}
            max="60"
            min="0"
            onChange={(e) => setWorkTime(parseInt(e.target.value))}
          />
          <button onClick={startWorkCountdown}>Work</button>
          <label htmlFor="breakT">Break</label>
          <input
            id="breakT"
            type="number"
            value={breakTime}
            max="60"
            min="0"
            onChange={(e) => setBreakTime(parseInt(e.target.value))}
          />
          <button onClick={startBreakCountdown}> Break</button>
          <button id="reset" type="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default PomodoroTimer;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
