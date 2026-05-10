const solutionCode1 = `
//App.js

import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import './styles.css'

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;

`;

const solutionCode2 = `
// SearchBar.js

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { SearchResultsList } from "./SearchResultsList";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
        setShowResults(true); 
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setSelectedResult(null);
  };

  const handleSelect = (result) => {
    setSelectedResult(result);
    setShowResults(false); 
    setInput('');

  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setShowResults(false); 
    }
  };

  return (
    <div className='search-bar'>
      <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input
          placeholder='Type to search...'
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyPress} 
        />
      </div>
      {selectedResult && (
        <div className="result-container">
          <p>You selected:</p>
          <p>Name: {selectedResult.name}</p>
          <p>Email: {selectedResult.email}</p>
          <p>
            Address: {selectedResult.address.street},{" "}
            {selectedResult.address.city}, {selectedResult.address.zipcode}
          </p>
          {/* add more if u need */}
        </div>
      )}
      {showResults && (
        <SearchResultsList results={results} onSelect={handleSelect} />
      )}
    </div>
  );
};

`;
const solutionCode3 = `
// SearchResult.js

import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ user, onSelect }) => {
  return (
    <div className='search-result' onClick={() => onSelect(user)}>
      <div>{user.name}</div>
     
    </div>
  );
};
`;
const solutionCode4 = `
// SearchResultsList.js

import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, onSelect }) => {
  return (
    <div className='results-list'>
      {results.map((user, id) => {
        return <SearchResult user={user} key={id} onSelect={onSelect} />;
      })}
    </div>
  );
};

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  solutionCode3,
  solutionCode4,
];
