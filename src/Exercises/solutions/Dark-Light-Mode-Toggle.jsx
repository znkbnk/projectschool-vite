// solutionTask3.js

const solutionCode1 = `
//App.js

import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import './styles.css'

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overReacting</h1>
          <button className='btn' onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;

`;

const solutionCode2 = `
//Article.js

import React from 'react'
import moment from 'moment'
const Article = ({ title, snippet, date, length }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
