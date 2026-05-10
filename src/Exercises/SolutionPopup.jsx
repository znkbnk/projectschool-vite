import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../styles/solution.css";

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

// Code Icon
const CodeIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    width='22'
    height='22'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='16 18 22 12 16 6' />
    <polyline points='8 6 2 12 8 18' />
  </svg>
);

// File Icon for navigation
const FileIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    width='14'
    height='14'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
    <polyline points='14 2 14 8 20 8' />
  </svg>
);

// Detect language from code content
const detectLanguage = (code) => {
  if (!code) return "javascript";

  if (
    code.includes("import React") ||
    code.includes("useState") ||
    code.includes("useEffect") ||
    (code.includes("<") && code.includes("/>")) ||
    code.includes("className=")
  ) {
    return "jsx";
  }
  if (
    code.includes("<html") ||
    code.includes("<!DOCTYPE") ||
    (code.includes("<div") && !code.includes("className"))
  ) {
    return "html";
  }
  if (
    code.includes("{") &&
    code.includes("}") &&
    code.includes(":") &&
    code.includes(";") &&
    !code.includes("const") &&
    !code.includes("let") &&
    !code.includes("function")
  ) {
    return "css";
  }
  if (code.includes("npm ") || code.includes("yarn ") || code.includes("cd ")) {
    return "bash";
  }
  return "javascript";
};

// Get a friendly file name based on language and index
const getFileName = (code, index) => {
  const lang = detectLanguage(code);
  const langNames = {
    jsx: "Component",
    javascript: "Script",
    css: "Styles",
    html: "HTML",
    bash: "Terminal",
  };
  return `${langNames[lang] || "File"} ${index + 1}`;
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className='solution-loading'>
    <div className='loading-spinner'></div>
    <p>Loading solution...</p>
  </div>
);

// File Navigation Component
const FileNavigation = ({ files, activeIndex, onFileClick }) => {
  if (!files || files.length <= 1) return null;

  return (
    <div className='solution-file-nav'>
      <div className='file-nav-label'>
        <FileIcon />
        <span>Jump to file:</span>
      </div>
      <div className='file-nav-list'>
        {files.map((code, index) => {
          const lang = detectLanguage(code);
          return (
            <button
              key={index}
              className={`file-nav-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => onFileClick(index)}
              aria-label={`Go to ${getFileName(code, index)}`}
            >
              <span className='file-nav-index'>{index + 1}</span>
              <span className='file-nav-name'>{getFileName(code, index)}</span>
              <span className={`file-nav-lang ${lang}`}>{lang}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Code block component for each solution
const SolutionCodeBlock = React.forwardRef(
  ({ code, index, copiedIndex, onCopy, showIndex }, ref) => {
    const isCopied = copiedIndex === index;
    const language = detectLanguage(code);

    return (
      <div className='solution-code-block' ref={ref}>
        <div className='solution-code-container'>
          {/* Code Header */}
          <div className='code-header'>
            <div className='code-header-left'>
              <div className='code-dots'>
                <span className='code-dot red'></span>
                <span className='code-dot yellow'></span>
                <span className='code-dot green'></span>
              </div>
              <span className='code-language'>{language}</span>
              {showIndex && (
                <span className='code-file-badge'>File {index + 1}</span>
              )}
            </div>
            <button
              className={`code-copy-btn ${isCopied ? "copied" : ""}`}
              onClick={() => onCopy(code, index)}
              aria-label={isCopied ? "Copied!" : "Copy code"}
            >
              {isCopied ? <CheckIcon /> : <CopyIcon />}
              <span>{isCopied ? "Copied!" : "Copy"}</span>
            </button>
          </div>

          {/* Code Content */}
          <div className='code-content'>
            <SyntaxHighlighter
              language={language}
              style={customCodeTheme}
              wrapLongLines={true}
              showLineNumbers={true}
              lineNumberStyle={{
                minWidth: "3em",
                paddingRight: "1em",
                color: "rgba(255, 255, 255, 0.25)",
                borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                marginRight: "1em",
                userSelect: "none",
              }}
              customStyle={{
                background: "transparent",
                padding: "1.5rem 1.25rem",
                margin: 0,
                fontSize: "inherit",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  },
);

SolutionCodeBlock.displayName = "SolutionCodeBlock";

const SolutionPopup = ({
  showSolution,
  taskTitle,
  loadingSolution,
  solutionCodes,
  onClose,
}) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const codeBlockRefs = useRef([]);
  const contentRef = useRef(null);

  // Set up refs for each code block
  const setCodeBlockRef = useCallback((el, index) => {
    codeBlockRefs.current[index] = el;
  }, []);

  const handleCopyToClipboard = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  // Handle file navigation click
  const handleFileClick = useCallback((index) => {
    setActiveFileIndex(index);
    const targetRef = codeBlockRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  // Copy all code blocks
  const handleCopyAll = async () => {
    try {
      const allCode = solutionCodes.join(
        "\n\n// ========== Next File ==========\n\n",
      );
      await navigator.clipboard.writeText(allCode);
      setCopiedIndex("all");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy all code:", error);
    }
  };

  // Close when clicking the overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Track which file is in view (intersection observer)
  React.useEffect(() => {
    if (!showSolution || !solutionCodes || solutionCodes.length <= 1) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = codeBlockRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1) {
              setActiveFileIndex(index);
            }
          }
        });
      },
      {
        root: contentRef.current,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    codeBlockRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [showSolution, solutionCodes]);

  return (
    <AnimatePresence>
      {showSolution && (
        <motion.div
          className='solution-overlay'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className='solution-popup'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='solution-header'>
              <div className='solution-header-left'>
                <div className='solution-icon'>
                  <CodeIcon />
                </div>
                <div className='solution-header-text'>
                  <h2 className='solution-title'>Solution</h2>
                  <p className='solution-subtitle'>
                    {taskTitle || "Task Solution"}
                    {solutionCodes && solutionCodes.length > 1 && (
                      <span className='solution-file-count'>
                        {" "}
                        • {solutionCodes.length} files
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <button
                className='solution-close-btn'
                onClick={onClose}
                aria-label='Close solution'
              >
                <CloseIcon />
              </button>
            </div>

            {/* File Navigation */}
            {!loadingSolution && solutionCodes && solutionCodes.length > 1 && (
              <FileNavigation
                files={solutionCodes}
                activeIndex={activeFileIndex}
                onFileClick={handleFileClick}
              />
            )}

            {/* Content */}
            <div className='solution-content' ref={contentRef}>
              {loadingSolution ? (
                <LoadingSpinner />
              ) : (
                <div className='solution-code-list'>
                  {solutionCodes && solutionCodes.length > 0 ? (
                    solutionCodes.map((code, index) => (
                      <SolutionCodeBlock
                        key={index}
                        ref={(el) => setCodeBlockRef(el, index)}
                        code={code}
                        index={index}
                        copiedIndex={copiedIndex}
                        onCopy={handleCopyToClipboard}
                        showIndex={solutionCodes.length > 1}
                      />
                    ))
                  ) : (
                    <div className='solution-empty'>
                      <p>No solution available for this task.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className='solution-footer'>
              {solutionCodes && solutionCodes.length > 1 && (
                <button
                  className={`solution-copy-all-btn ${
                    copiedIndex === "all" ? "copied" : ""
                  }`}
                  onClick={handleCopyAll}
                >
                  {copiedIndex === "all" ? (
                    <>
                      <CheckIcon /> Copied All!
                    </>
                  ) : (
                    <>
                      <CopyIcon /> Copy All Files
                    </>
                  )}
                </button>
              )}
              <button className='solution-close-button' onClick={onClose}>
                Close Solution
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionPopup;
