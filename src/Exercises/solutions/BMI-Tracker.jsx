// solutionTasj2.js

const solutionCode1 = `
//BMI.js

import React, { useState } from "react";
import "./styles.css";

function BMI() {
  // State
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Calculate BMI
  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      const heightInCm = height / 100;
      const calculatedBmi = weight / (heightInCm * heightInCm);
      setBmi(calculatedBmi.toFixed(1));

      // Determine BMI message
     if (calculatedBmi < 16.0) {
       setMessage("Severely Underweight");
     } else if (calculatedBmi >= 16.0 && calculatedBmi < 18.5) {
       setMessage("Underweight");
     } else if (calculatedBmi >= 18.5 && calculatedBmi < 25.0) {
       setMessage("Normal");
     } else if (calculatedBmi >= 25.0 && calculatedBmi < 30.0) {
       setMessage("Overweight");
     } else if (calculatedBmi >= 30.0 && calculatedBmi < 35.0) {
       setMessage("Moderately Obese");
     } else if (calculatedBmi >= 35.0 && calculatedBmi < 40.0) {
       setMessage("Severely Obese");
     } else {
       setMessage("Morbidly Obese");
     }
    }
  };

  // Reload page
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className='app'>
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>
              Submit
            </button>
            <button className='btn btn-outline' onClick={reload} type='button'>
              Reload
            </button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default BMI;

`;

export default solutionCode1;

