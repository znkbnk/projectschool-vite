


const solutionCode1 = `
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './styles.css'

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const showBtn = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(evaluate(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const resetDisplay = () => {
    setDisplay('');
  };

  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <div className="container">
      <header>
        <h3>Calculator</h3>
      </header>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons-container">
          {['7', '8', '9', 'del', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', '*'].map((btn) => (
            <button key={btn} onClick={() => (btn === 'del' ? deleteLast() : showBtn(btn))}>
              {btn}
            </button>
          ))}
          <button onClick={resetDisplay} id="reset">reset</button>
          <button onClick={calculateResult} id="equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;