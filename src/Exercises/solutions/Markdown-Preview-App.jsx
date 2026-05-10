const solutionCode1 = `
//App.js

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './styles.css'


function App() {
  const [markdown, setMarkdown] = useState('# Markdown Preview:')

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;