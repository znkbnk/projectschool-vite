var e=[`
//App.js

import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import './styles.css'

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>React? yes React!</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

`,`
//Question.js

import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

`];export{e as default};
//# sourceMappingURL=FAQ-BZDBXh0m.js.map