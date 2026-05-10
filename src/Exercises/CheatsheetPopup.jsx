import React, { useState } from "react";
import { motion } from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Custom theme matching the guide styling
const customCodeTheme = {
  ...atomOneDark,
  hljs: {
    ...atomOneDark.hljs,
    background: "transparent",
    padding: "0",
  },
};

// Copy Icon SVG component
const CopyIcon = () => (
  <svg
    className='copy-icon'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
  >
    <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
    <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
  </svg>
);

// Check Icon SVG component
const CheckIcon = () => (
  <svg
    className='check-icon'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

// Close Icon SVG component
const CloseIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    width='20'
    height='20'
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);

// Detect language from code content
const detectLanguage = (code) => {
  if (
    code.includes("import React") ||
    code.includes("useState") ||
    (code.includes("<") && code.includes("/>"))
  ) {
    return "jsx";
  }
  if (
    code.includes("const ") ||
    code.includes("let ") ||
    code.includes("function") ||
    code.includes("=>")
  ) {
    return "javascript";
  }
  if (
    code.includes("<html") ||
    code.includes("<!DOCTYPE") ||
    code.includes("<div")
  ) {
    return "html";
  }
  if (
    code.includes("{") &&
    code.includes("}") &&
    code.includes(":") &&
    code.includes(";") &&
    !code.includes("const")
  ) {
    return "css";
  }
  if (code.includes("npm ") || code.includes("yarn ") || code.includes("cd ")) {
    return "bash";
  }
  return "javascript";
};

const CheatsheetPopup = ({ cheatsheetContent, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyToClipboard = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  // Close when clicking the overlay (not the popup itself)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className='cheatsheet-overlay'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleOverlayClick}
    >
      <motion.div
        className='cheatsheet-popup'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='cheatsheet-header'>
          <h2 className='cheatsheet-title'>
            <span className='title-icon'>📚</span>
            Cheatsheet
          </h2>
          <button
            className='cheatsheet-close-btn'
            onClick={onClose}
            aria-label='Close cheatsheet'
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className='cheatsheet-content'>
          <div className='cheatsheet-text'>
            {cheatsheetContent.content?.map((section, index) => (
              <div key={index} className='cheatsheet-section'>
                {section.title && (
                  <h3 className='section-title'>{section.title}</h3>
                )}
                {section.subtitle && (
                  <h4 className='section-subtitle'>{section.subtitle}</h4>
                )}

                {section.details && section.details.length > 0 && (
                  <ul className='cheatsheet-list'>
                    {section.details.map((detail, idx) => (
                      <li
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: detail }}
                      />
                    ))}
                  </ul>
                )}

                {section.text && <p className='section-text'>{section.text}</p>}

                {section.moreText && (
                  <span className='section-more-text'>{section.moreText}</span>
                )}

                {section.image && (
                  <div className='cheatsheet-image-wrapper'>
                    <img
                      src={section.image}
                      alt={`cheatsheet-${index}`}
                      className='cheatsheet-image'
                    />
                  </div>
                )}

                {section.code && (
                  <div className='cheatsheet-code-container'>
                    {/* Code Header */}
                    <div className='code-header'>
                      <div className='code-header-left'>
                        <div className='code-dots'>
                          <span className='code-dot red'></span>
                          <span className='code-dot yellow'></span>
                          <span className='code-dot green'></span>
                        </div>
                        <span className='code-language'>
                          {detectLanguage(section.code)}
                        </span>
                      </div>
                      <button
                        className={`code-copy-btn ${
                          copiedIndex === index ? "copied" : ""
                        }`}
                        onClick={() =>
                          handleCopyToClipboard(section.code, index)
                        }
                        aria-label={
                          copiedIndex === index ? "Copied!" : "Copy code"
                        }
                      >
                        {copiedIndex === index ? <CheckIcon /> : <CopyIcon />}
                        <span>
                          {copiedIndex === index ? "Copied!" : "Copy"}
                        </span>
                      </button>
                    </div>

                    {/* Code Content */}
                    <div className='code-content'>
                      <SyntaxHighlighter
                        language={detectLanguage(section.code)}
                        style={customCodeTheme}
                        wrapLongLines={true}
                        showLineNumbers={false}
                        customStyle={{
                          background: "transparent",
                          padding: "1.5rem 1.25rem",
                          margin: 0,
                          fontSize: "inherit",
                        }}
                      >
                        {section.code}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className='cheatsheet-footer'>
          <button className='cheatsheet-close-button' onClick={onClose}>
            Close Cheatsheet
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CheatsheetPopup;
