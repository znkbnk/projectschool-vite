const solutionCode1 = `
//App.js

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './styles.css'


function App() {
  const optionsArray = ["JavaScript", "Python", "Java", "C++", "Swift", "Ruby"];
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const languageInput = useRef();

  function selectLanguage(e) {
    languageInput.current.value = e.target.textContent;
    setIsOpenSelect(false);
  }

  function toggleOptions() {
    setIsOpenSelect(!isOpenSelect);
  }

  return (
    <div className='App'>
      <div className='selectOption'>
        <input
          onClick={toggleOptions}
          onBlur={() => {
            setIsOpenSelect(false);
          }}
          ref={languageInput}
          id='language'
          type='text'
          placeholder='Select Your Language'
          readOnly
        />

        <span className={isOpenSelect ? "icon active" : "icon"}>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>

        <div className={isOpenSelect ? "options active" : "options"}>
          {optionsArray.map((item, index) => (
            <li onClick={selectLanguage} key={index}>
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;