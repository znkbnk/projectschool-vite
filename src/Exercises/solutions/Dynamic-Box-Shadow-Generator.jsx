const solutionCode1 = `
//App.js

import React, { useState } from "react";
import ControlBox from "./ControlBox.js";
import './styles.css'


function App() {
  const [shadows, setShadows] = useState([]);
  const [controls, setControls] = useState([{ index: 0 }]);

  const updateShadow = (s, id) => {
    const newShadow = s.inset
      ? \`inset \${s.x}px \${s.y}px \${s.blur}px \${s.spread}px \${s.color}\`
      : \`\${s.x}px \${s.y}px \${s.blur}px \${s.spread}px \${s.color}\`;
    const updatedShadows = [...shadows];
    updatedShadows[id] = newShadow;
    setShadows(updatedShadows);
  };

  const addShadow = () => {
    setControls([...controls, { index: controls.length }]);
    setShadows([...shadows, ""]);
  };

  const undoAddLayer = () => {
    if (controls.length > 1) {
      const updatedControls = [...controls];
      updatedControls.pop(); 
      setControls(updatedControls);
      const updatedShadows = [...shadows];
      updatedShadows.pop(); 
      setShadows(updatedShadows);
    }
  };

  return (
    <div className='container'>
      <div className='preview'>
        <div
          className='preview-box'
          style={{ boxShadow: shadows.join(", ") }}
        ></div>
      </div>
      <div className='controls'>
        {controls.map((c, index) => (
          <ControlBox key={index} id={index} updateShadow={updateShadow} />
        ))}
        <p className='text-right'>
          <button onClick={addShadow}>Add Layer</button>
          <button onClick={undoAddLayer}>Undo</button> 
        </p>
        <div className='codes controls-box'>
          <span className='prop-name'>box-shadow: </span>
          <span className='code'>{shadows.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

`;

const solutionCode2 = `
import { useState, useEffect } from 'react'


function ControlBox({ updateShadow, id }) {
  const [shadowModel, setShadowModel] = useState({
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: "#000",
    inset: false,
  });

  const updateShadowModel = (propr, val) => {
    setShadowModel({
      ...shadowModel,
      [propr]: val,
    });
  };

  useEffect(() => {
    updateShadow(shadowModel, id);
  }, [shadowModel]);

  return (
    <div className='controls-box'>
      <label>Offset X</label>
      <input
        type='range'
        min='-100'
        max='100'
        defaultValue='0'
        onChange={(e) => updateShadowModel("x", e.target.value)}
      />
      <label>Offset Y</label>
      <input
        type='range'
        min='-100'
        max='100'
        defaultValue='0'
        onChange={(e) => updateShadowModel("y", e.target.value)}
      />
      <label>Blur</label>
      <input
        type='range'
        min='0'
        max='100'
        defaultValue='0'
        onChange={(e) => updateShadowModel("blur", e.target.value)}
      />
      <label>Spread</label>
      <input
        type='range'
        min='0'
        max='100'
        defaultValue='0'
        onChange={(e) => updateShadowModel("spread", e.target.value)}
      />
      <label>Color</label>
      <input
        type='color'
        onChange={(e) => updateShadowModel("color", e.target.value)}
      />
      <p>
        <span style={{ marginRight: ".5em" }}>Inset:</span>
        <input
          type='checkbox'
          onChange={(e) => updateShadowModel("inset", !shadowModel.inset)}
        />
      </p>
    </div>
  );
}

export default ControlBox
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
