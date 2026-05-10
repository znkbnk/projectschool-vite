var e=`
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

`;export{e as default};
//# sourceMappingURL=Markdown-Preview-App-CTpozym7.js.map