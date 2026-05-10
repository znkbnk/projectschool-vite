const solutionCode1 = `
//App.js 

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './styles.css'


const LoaderShape = ({ progress }) => {
  return (
    <svg className='loader-shape' viewBox='0 0 100 100'>
      <motion.circle
        cx='50'
        cy='50'
        r='45'
        fill='none'
        stroke='#00ffff'
        strokeWidth='2'
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{ pathLength: progress / 100, rotate: 360 }}
        transition={{
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.circle
        cx='50'
        cy='50'
        r='35'
        fill='none'
        stroke='#ff00ff'
        strokeWidth='4'
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{ pathLength: progress / 100, rotate: -360 }}
        transition={{
          rotate: { duration: 6, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.path
        d='M50,15 A35,35 0 0,1 85,50 A35,35 0 0,1 50,85 A35,35 0 0,1 15,50 A35,35 0 0,1 50,15'
        fill='none'
        stroke='#00ff00'
        strokeWidth='3'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress / 100 }}
      />
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx='50'
          cy='50'
          r='5'
          fill='#ffffff'
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          transform={\`rotate(\${i * 90} 50 50) translate(0 -40)\`}
        />
      ))}
    </svg>
  );
};
const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='app-container'>
      <AnimatePresence mode='wait'>
        {loading ? (
          <motion.div
            className='loader'
            key='loader'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LoaderShape progress={progress} />
            <motion.div className='progress-text'>{progress}%</motion.div>
          </motion.div>
        ) : (
          <motion.div
            className='content'
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1>Welcome</h1>
            <p>Your future awaits.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;