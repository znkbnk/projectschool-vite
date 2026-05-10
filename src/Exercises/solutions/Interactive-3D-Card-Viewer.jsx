const solutionCode1 = `
//App.js 

import React, { useEffect } from 'react';
import './styles.css'

const App = () => {
    
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      document.querySelector('.card').style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg)\`;
    };

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX;
      const y = e.touches[0].pageY;
      document.querySelector('.card').style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg)\`;
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="card">
        <div className="front">
          <img src="./img/one.jpg" alt="Front of the card" />
        </div>
        <div className="back">
          <img src="./img/three.jpg" alt="Back of the card" />
        </div>
      </div>
    </div>
  );
};

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;