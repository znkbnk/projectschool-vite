const solutionCode1 = `
//App.js 

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css'

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="app-container">
      <table className="info-table">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Occupation:</td>
            <td>Software Developer</td>
          </tr>
        </tbody>
      </table>
      <motion.button
        className="btn"
        onClick={togglePopup}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Read more
      </motion.button>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="popup"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to My Profile
              </motion.h1>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Hello! My name is John Doe, a 30-year-old software developer with over 10 years of experience in the tech industry. I specialize in web development, working primarily with React, Node.js, and other modern JavaScript frameworks. In my free time, I enjoy hiking, photography, and exploring new technologies.
              </motion.p>
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I'm passionate about creating efficient and scalable web applications, and I'm always looking for new challenges and opportunities to grow. Feel free to reach out to me if you have any interesting projects or just want to chat about tech!
              </motion.p>
              <motion.button
                className="close-btn"
                onClick={togglePopup}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>
            </motion.div>
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
