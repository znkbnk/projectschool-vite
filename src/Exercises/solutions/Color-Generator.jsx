const solutionCode1 = `
//App.js

import React, { useState } from 'react'
import SingleColor from './SingleColor'
import './styles.css'


import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#000000').all(20))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(20)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='Enter HEX code'
            className={\`\${error ? 'error' : null}\`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App

`;

const solutionCode2 = `
//SingleColor.js

import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = \`#\${hexColor}\`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hexValue)
      setAlert(true)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <article
      className={\`color \${index > 10 && 'color-light'}\`}
      style={{
        backgroundColor: \`rgb(\${bcg})\`
      }}
      onClick={copyToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
