const solutionCode1 = `
// src/App.js

import React, { useState, useEffect } from "react";
import BreathingTimer from "./components/BreathingTimer";
import DurationSelector from "./components/DurationSelector";
import "./App.css";

const App = () => {
  const defaultSettings = {
    phaseDurations: { inhale: 4, hold: 4, exhale: 4 },
    sessionDuration: 1,
  };

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("breathingSettings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("breathingSettings", JSON.stringify(settings));
  }, [settings]);

  const handleDurationChange = (minutes) => {
    setSettings((prev) => ({ ...prev, sessionDuration: minutes }));
    setIsRunning(false);
  };

  return (
    <div className='app'>
      <h1>Breathing Exercise</h1>
      <DurationSelector
        selectedDuration={settings.sessionDuration}
        onDurationChange={handleDurationChange}
      />
      <BreathingTimer
        phaseDurations={settings.phaseDurations}
        sessionDuration={settings.sessionDuration}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
};

export default App;

`;

const solutionCode2 = `
// src/components/BreathingTimer.js

import React, { useState, useEffect, useRef } from 'react';

const BreathingTimer = ({ phaseDurations, sessionDuration, isRunning, setIsRunning }) => {
  const [phase, setPhase] = useState('inhale');
  const [secondsLeft, setSecondsLeft] = useState(phaseDurations.inhale);
  const [totalSecondsLeft, setTotalSecondsLeft] = useState(sessionDuration * 60);
  const timerRef = useRef(null);

  const playTone = (phase) => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    const frequencies = {
      inhale: 523.25,
      hold: 392.00,
      exhale: 329.63,
    };
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequencies[phase], ctx.currentTime);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.5);
  };

  useEffect(() => {
    if (isRunning && totalSecondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            if (phase === 'inhale') {
              setPhase('hold');
              playTone('hold');
              return phaseDurations.hold;
            } else if (phase === 'hold') {
              setPhase('exhale');
              playTone('exhale');
              return phaseDurations.exhale;
            } else {
              setPhase('inhale');
              playTone('inhale');
              return phaseDurations.inhale;
            }
          }
          return prev - 1;
        });
        setTotalSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (totalSecondsLeft <= 0) {
      setIsRunning(false);
      setPhase('inhale');
      setSecondsLeft(phaseDurations.inhale);
      setTotalSecondsLeft(sessionDuration * 60);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, phaseDurations, sessionDuration, totalSecondsLeft, phase]);

  const toggleTimer = () => {
    if (!isRunning) {
      setPhase('inhale');
      setSecondsLeft(phaseDurations.inhale);
      setTotalSecondsLeft(sessionDuration * 60);
      playTone('inhale');
    }
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
  };

  const getPhaseMessage = () => {
    switch(phase) {
      case 'inhale':
        return 'Breathe in deeply';
      case 'hold':
        return 'Hold your breath';
      case 'exhale':
        return 'Release slowly';
      default:
        return '';
    }
  };

  return (
    <div className="breathing-timer">
      <div className={\`breathing-circle \${phase}\`}>
        <span className="seconds">{secondsLeft}</span>
      </div>
      
      <h2 className={phase}>{phase.charAt(0).toUpperCase() + phase.slice(1)}</h2>
      <p className="instruction">{getPhaseMessage()}</p>
      <p className="time-left">Session time: {formatTime(totalSecondsLeft)}</p>
      
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default BreathingTimer;
`;
const solutionCode3 = `
// src/components/DurationSelector.js

import React from 'react';

const DurationSelector = ({ selectedDuration, onDurationChange }) => {
  const durations = [1, 3, 5, 10];

  return (
    <div className="duration-selector">
      <h3>Select Duration</h3>
      <div>
        {durations.map((duration) => (
          <button
            key={duration}
            className={selectedDuration === duration ? 'selected' : ''}
            onClick={() => onDurationChange(duration)}
          >
            {duration} min
          </button>
        ))}
      </div>
    </div>
  );
};

export default DurationSelector;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
 
];
