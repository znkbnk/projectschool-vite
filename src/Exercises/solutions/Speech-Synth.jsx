/* eslint-disable no-useless-escape */
const solutionCode1 = `
//App.js 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'

const TextToSpeechApp = () => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [symbolCount, setSymbolCount] = useState(0);

  useEffect(() => {
    // Update symbol count whenever inputText changes
    setSymbolCount(inputText.length);
  }, [inputText]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSpeak = async () => {
    if (inputText.trim() === '') return;

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3001/synthesize', {
        text: inputText,
      }, {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'speech.mp3'); // Changed to mp3 as per the server
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading speech:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Text to Speech</h2>
      <p>Type text below and click 'Speak' to generate and download speech.</p>
      <textarea
        className="input-text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type text here..."
      ></textarea>
      <p>Number of symbols: {symbolCount}</p>
      <button className="btn-style" onClick={handleSpeak} disabled={loading}>
        {loading ? 'Processing...' : 'Generate Speech'}
      </button>
    </div>
  );
};

export default TextToSpeechApp;

`;

const solutionCode2 = `
//server.js 

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const gTTS = require('gtts');

const app = express();
const port = 3001;

app.use(cors()); 
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
  }));
  

  app.post('/synthesize', (req, res) => {
    const { text } = req.body;
    const gtts = new gTTS(text, 'en');
    const filePath = path.join(__dirname, 'output.mp3');
  
    gtts.save(filePath, (err) => {
      if (err) {
        console.error('Error generating speech:', err);
        return res.status(500).send('Error generating speech');
      }
      res.download(filePath, 'speech.mp3', (err) => {
        if (err) {
          console.error('Error sending file:', err);
        }
        fs.unlink(filePath, () => {}); 
      });
    });
  });
  

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
