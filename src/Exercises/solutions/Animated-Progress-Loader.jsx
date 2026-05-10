const solutionCode1 = `
//App.js 

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css'


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
    <div className="app-container">
            <AnimatePresence mode='wait'>

        {loading ? (
          <motion.div
            className="loader"
            key="loader"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
          >
            <div className="circular-progress" style={{ background: \`conic-gradient(from 0deg, #6366f1 \${progress * 3.6}deg, #e0e0e0 \${progress * 3.6}deg)\` }}>
              <div className="circular-progress-inner"></div>
            </div>
            <div className="progress-text">{progress}%</div>
          </motion.div>
        ) : (
          <motion.div
            className="content"
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Welcome to Our Website</h1>
            <p>This is your beautifully loaded content!</p>
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