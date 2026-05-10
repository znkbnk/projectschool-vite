/* eslint-disable no-useless-escape */
const solutionCode1 = `
//App.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './styles.css'

const App = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [infoText, setInfoText] = useState(
    "Type any existing word and press Search to get meaning, example, synonyms, etc."
  );

  const fetchApi = (word) => {
    setInfoText("Searching...");
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
      .then((response) => response.json())
      .then((result) => {
        if (result.title) {
          setInfoText("Can't find the meaning. Please, try to search for another word.");
          setResult(null);
        } else {
          const wordData = result[0];
          const definitions = wordData.meanings[0].definitions[0];
          const phonetics = wordData.phonetics[0]?.text
            ? wordData.meanings[0].partOfSpeech + " /" + wordData.phonetics[0].text + "/"
            : "No phonetic transcription available";
          setResult({
            word: wordData.word,
            phonetics,
            meaning: definitions.definition,
            example: definitions.example,
            synonyms: definitions.synonyms || [],
          });
          setInfoText("");
        }
      })
      .catch(() => {
        setInfoText("Can't find the meaning. Please, try to search for another word.");
        setResult(null);
      });
  };

  const handleSearch = () => {
    if (word.trim()) {
      fetchApi(word.trim());
    } else {
      setInfoText("Please enter a word to search for its meaning.");
    }
  };

  const handleRemove = () => {
    setWord("");
    setResult(null);
    setInfoText(
      "Type any existing word and press Search to get meaning, example, synonyms, etc."
    );
  };

  return (
    <div className="wrapper">
      <header>English Dictionary</header>
      <div className="search">
        <input
          type="text"
          placeholder="Search a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <span className="material-icons" onClick={handleRemove}>
          clear
        </span>
      </div>
      <button onClick={handleSearch} className="search-btn">
        Search
      </button>
      <p className="info-text">{infoText}</p>
      <AnimatePresence>
        {result && (
          <motion.ul
            initial={{ opacity: 0, transform: "scaleY(0)" }}
            animate={{ opacity: 1, transform: "scaleY(1)" }}
            exit={{ opacity: 0, transform: "scaleY(0)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.li
              className="word"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="details">
                <p>{result.word}</p>
                <span>{result.phonetics}</span>
              </div>
            </motion.li>
            <div className="content">
              <motion.li
                className="meaning"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="details">
                  <p>Meaning</p>
                  <span>{result.meaning}</span>
                </div>
              </motion.li>
              <motion.li
                className="example"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="details">
                  <p>Example</p>
                  <span>{result.example}</span>
                </div>
              </motion.li>
              {result.synonyms.length > 0 && (
                <motion.li
                  className="synonyms"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="details">
                    <p>Synonyms</p>
                    <div className="list">
                      {result.synonyms.slice(0, 5).map((synonym, index) => (
                        <span key={index} onClick={() => fetchApi(synonym)}>
                          {synonym}
                          {index < 4 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.li>
              )}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

`;

export default solutionCode1;
