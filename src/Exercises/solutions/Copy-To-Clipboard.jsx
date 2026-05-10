


const solutionCode1 = `
//App.js

import React, { useState, useEffect, useRef } from 'react';
import Clipboard from 'clipboard';
import './styles.css';

const App = () => {
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const clipboard = new Clipboard('.clipboard-button', {
      text: () => textAreaRef.current.value,
    });

    clipboard.on('success', () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });

    clipboard.on('error', (e) => {
      console.error('Failed to copy text: ', e);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="clipboard-container">
      <div className="clipboard-card">
        <h1 className="clipboard-title">Copy to Clipboard</h1>
        <div className="clipboard-content">
          <textarea
            ref={textAreaRef}
            defaultValue="Write something and copy it into your clipboard by clicking the button below."
            className="clipboard-textarea"
            rows={4}
            spellCheck="false"
          />
          <button className={\`clipboard-button \${copied ? 'copied' : ''}\`}>
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </button>
          <textarea
            placeholder="Paste your copied content here. Just to test…"
            className="clipboard-textarea"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;