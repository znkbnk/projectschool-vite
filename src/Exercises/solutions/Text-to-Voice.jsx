const solutionCode1 = `
//App.js

import React, { useState } from 'react';
import './styles.css'

const TextToSpeechApp = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSpeak = () => {
        if (inputText.trim() !== '') {
            const utterance = new SpeechSynthesisUtterance(inputText);
            speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="container">
            <h2>Text to Speech</h2>
            <p>Type text below and click 'Speak' to hear it spoken aloud.</p>

            <textarea
                className="input-text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type text here..."
            ></textarea>

            <button className="btn-style" onClick={handleSpeak}>
                Speak
            </button>
        </div>
    );
};

export default TextToSpeechApp;

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;