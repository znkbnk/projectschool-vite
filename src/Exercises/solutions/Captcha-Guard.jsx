/* eslint-disable no-useless-escape */
const solutionCode1 = `
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

const App = () => {
  const captchaCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const generateCaptcha = () => {
    let newCaptcha = '';
    for (let i = 0; i < 6; i++) {
      const randomCharacter = captchaCharacters[Math.floor(Math.random() * captchaCharacters.length)];
      newCaptcha += randomCharacter + ' ';
    }
    setCaptcha(newCaptcha.trim());
    setMessage('');
    setUserInput('');
    setIsSuccess(false);
  };

  const checkCaptcha = () => {
    if (userInput.replace(/\s/g, '') === captcha.replace(/\s/g, '')) {
      setMessage('Captcha matched. You are not a robot');
      setIsSuccess(true);
      setTimeout(generateCaptcha, 2500);
    } else {
      setMessage('Captcha not matched. Please try again!');
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="container">
      <h3 className="title">
        <FontAwesomeIcon icon={faRobot} /> Captcha Validator
      </h3>
      <div className="captcha">
        <h3>{captcha}</h3>
      </div>
      <input
        type="text"
        placeholder="Enter captcha"
        className="user-input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div className="button-container">
        <button className="check-btn" onClick={checkCaptcha}>Verify</button>
        <button className="generate-btn" onClick={generateCaptcha}>Refresh</button>
      </div>
      {message && (
        <div className="message-container">
          <p className={\`message \${isSuccess ? 'success' : 'error'}\`}>
            <FontAwesomeIcon icon={isSuccess ? faCircleCheck : faTriangleExclamation} /> {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;