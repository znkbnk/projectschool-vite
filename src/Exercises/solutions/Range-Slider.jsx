const solutionCode1 = `
//App.js

import DoubleRangeSlider from './DoubleRangeSlider';
import './styles.css'

function App() {
  return (
    <div className="range">
      <DoubleRangeSlider min={100} max={500}/>
    </div>
  );
}

export default App;

`;

const solutionCode2 = `
import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const DoubleRangeSlider = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const leftval = useRef();
  const rightval = useRef();

  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const minPercent2 = getPercent(maxVal);
    const maxPercent = getPercent(maxValRef.current);

    leftval.current.style.left = minPercent + "%";
    leftval.current.style.transform = \`translate(-\${minPercent + "%"}, -50%)\`;

    rightval.current.style.transform = \`translate(-\${minPercent2 + "%"}, -50%)\`;

    if (range.current) {
      range.current.style.left = \`\${minPercent}%\`;
      range.current.style.width = \`\${maxPercent - minPercent}%\`;
      // rightval.current.style.left = minPercent2 + "%"
    }
  }, [minVal, getPercent, maxVal]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    // console.log(maxPercent)

    if (range.current) {
      range.current.style.width = \`\${maxPercent - minPercent}%\`;
      rightval.current.style.left = \`\${maxPercent}%\`;
      rightval.current.style.transform = \`translate(-\${
        maxPercent + "%"
      }, -50%)\`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className='container'>
      <input
        id='inputone'
        type='range'
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className='thumb thumb--left'
        style={{ zIndex: minVal > max - 100 && "8" }}
      />
      <input
        type='range'
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className='thumb thumb--right'
      />

      <div className='slider'>
        <div className='slider__track'></div>
        <div ref={range} className='slider__range'></div>
        <div className='leftvalue' ref={leftval}>
          {minVal} <span></span>
        </div>
        <div className='rightvalue' ref={rightval}>
          {maxVal} <span></span>
        </div>
      </div>
    </div>
  );
};

DoubleRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DoubleRangeSlider;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];