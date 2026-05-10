import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../styles/showStyles.css";

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

// Palette Icon (for header)
const PaletteIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    width='22'
    height='22'
  >
    <circle cx='13.5' cy='6.5' r='1.5' fill='currentColor' />
    <circle cx='17.5' cy='10.5' r='1.5' fill='currentColor' />
    <circle cx='8.5' cy='7.5' r='1.5' fill='currentColor' />
    <circle cx='6.5' cy='12.5' r='1.5' fill='currentColor' />
    <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z' />
  </svg>
);

// Palette Icon (for button)
const PaletteButtonIcon = () => (
  <svg
    className='btn-icon'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='13.5' cy='6.5' r='1.5' fill='currentColor' />
    <circle cx='17.5' cy='10.5' r='1.5' fill='currentColor' />
    <circle cx='8.5' cy='7.5' r='1.5' fill='currentColor' />
    <circle cx='6.5' cy='12.5' r='1.5' fill='currentColor' />
    <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z' />
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
  >
    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
    <polyline points='14 2 14 8 20 8' />
  </svg>
);

// Code block component for each style section
const CodeBlock = React.forwardRef(
  ({ title, code, language = "css", copiedKey, onCopy, copyKey, id }, ref) => {
    const isCopied = copiedKey === copyKey;

    return (
      <div className='styles-code-block' id={id} ref={ref}>
        {title && <h4 className='code-block-title'>{title}</h4>}
        <div className='styles-code-container'>
          {/* Code Header */}
          <div className='code-header'>
            <div className='code-header-left'>
              <div className='code-dots'>
                <span className='code-dot red'></span>
                <span className='code-dot yellow'></span>
                <span className='code-dot green'></span>
              </div>
              <span className='code-language'>{language}</span>
            </div>
            <button
              className={`code-copy-btn ${isCopied ? "copied" : ""}`}
              onClick={() => onCopy(code, copyKey)}
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
              showLineNumbers={false}
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

CodeBlock.displayName = "CodeBlock";

const StylesPopup = ({ taskId, stylesData }) => {
  const [showStyles, setShowStyles] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const contentRef = useRef(null);
  const codeBlockRefs = useRef({});

  // Build navigation items from selected styles
  const getNavItems = () => {
    if (!selectedStyle) return [];

    const items = [];
    selectedStyle.forEach((style, styleIndex) => {
      // Primary CSS
      if (style.css && style.title) {
        items.push({
          id: `${styleIndex}-css`,
          title: style.title,
        });
      }
      // CSS 2
      if (style.css2 && style.title2) {
        items.push({
          id: `${styleIndex}-css2`,
          title: style.title2,
        });
      }
      // CSS 3
      if (style.css3 && style.title3) {
        items.push({
          id: `${styleIndex}-css3`,
          title: style.title3,
        });
      }
      // CSS 4
      if (style.css4 && style.title4) {
        items.push({
          id: `${styleIndex}-css4`,
          title: style.title4,
        });
      }
      // Add more if needed (css5, css6, etc.)
      if (style.css5 && style.title5) {
        items.push({
          id: `${styleIndex}-css5`,
          title: style.title5,
        });
      }
      if (style.css6 && style.title6) {
        items.push({
          id: `${styleIndex}-css6`,
          title: style.title6,
        });
      }
      if (style.css7 && style.title7) {
        items.push({
          id: `${styleIndex}-css7`,
          title: style.title7,
        });
      }
      if (style.css8 && style.title8) {
        items.push({
          id: `${styleIndex}-css8`,
          title: style.title8,
        });
      }
      if (style.css9 && style.title9) {
        items.push({
          id: `${styleIndex}-css9`,
          title: style.title9,
        });
      }
      if (style.css10 && style.title10) {
        items.push({
          id: `${styleIndex}-css10`,
          title: style.title10,
        });
      }
      if (style.css11 && style.title11) {
        items.push({
          id: `${styleIndex}-css11`,
          title: style.title11,
        });
      }
      if (style.css12 && style.title12) {
        items.push({
          id: `${styleIndex}-css12`,
          title: style.title12,
        });
      }
    });

    return items;
  };

  const navItems = getNavItems();

  // Scroll to specific code block
  const scrollToCodeBlock = (id) => {
    const element = codeBlockRefs.current[id];
    if (element && contentRef.current) {
      const containerTop = contentRef.current.getBoundingClientRect().top;
      const elementTop = element.getBoundingClientRect().top;
      const offset =
        elementTop - containerTop + contentRef.current.scrollTop - 20;

      contentRef.current.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setActiveNavItem(id);
    }
  };

  // Track scroll position to highlight active nav item
  useEffect(() => {
    const container = contentRef.current;
    if (!container || !showStyles) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      let currentActive = null;

      Object.entries(codeBlockRefs.current).forEach(([id, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const relativeTop = rect.top - containerRect.top;

          if (relativeTop <= 100 && relativeTop > -rect.height + 100) {
            currentActive = id;
          }
        }
      });

      if (currentActive !== activeNavItem) {
        setActiveNavItem(currentActive);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [showStyles, activeNavItem]);

  const handleToggleStyles = () => {
    try {
      const currentStyles = stylesData.filter(
        (style) => style.taskId === taskId,
      );

      if (currentStyles.length === 0) {
        toast.error("No styles available for this task.");
        setShowStyles(false);
        return;
      }

      setSelectedStyle(currentStyles);
      setShowStyles((prev) => !prev);
      setActiveNavItem(null);
      codeBlockRefs.current = {};
    } catch (error) {
      console.error("Error toggling styles:", error);
      toast.error("Failed to toggle styles.");
    }
  };

  const handleCloseStyles = () => {
    setShowStyles(false);
    setCopiedKey(null);
    setActiveNavItem(null);
  };

  const handleCopyToClipboard = async (css, key) => {
    try {
      await navigator.clipboard.writeText(css);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast.error("Failed to copy to clipboard.");
    }
  };

  // Close when clicking the overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseStyles();
    }
  };

  // Register ref for a code block
  const registerRef = (id, element) => {
    if (element) {
      codeBlockRefs.current[id] = element;
    }
  };

  return (
    <>
      <button
        className='button-84 btn-styles'
        onClick={handleToggleStyles}
        aria-label='Toggle Styles'
      >
        <PaletteButtonIcon />
        <span>Show Styles</span>
      </button>

      <AnimatePresence>
        {showStyles && selectedStyle && (
          <motion.div
            className='styles-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className='styles-popup'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className='styles-header'>
                <div className='styles-header-left'>
                  <div className='styles-icon'>
                    <PaletteIcon />
                  </div>
                  <h2 className='styles-title'>CSS Styles</h2>
                  <span className='styles-count'>{navItems.length} files</span>
                </div>
                <button
                  className='styles-close-btn'
                  onClick={handleCloseStyles}
                  aria-label='Close styles'
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Navigation */}
              {navItems.length > 1 && (
                <div className='styles-nav'>
                  <div className='styles-nav-label'>Jump to:</div>
                  <div className='styles-nav-list'>
                    {navItems.map((item, index) => (
                      <button
                        key={item.id}
                        className={`styles-nav-item ${activeNavItem === item.id ? "active" : ""}`}
                        onClick={() => scrollToCodeBlock(item.id)}
                      >
                        <FileIcon />
                        <span className='nav-item-number'>{index + 1}.</span>
                        <span className='nav-item-title'>{item.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className='styles-content' ref={contentRef}>
                <div className='styles-text'>
                  {selectedStyle.map((style, styleIndex) => (
                    <div key={styleIndex} className='style-item'>
                      {/* Primary CSS */}
                      <CodeBlock
                        ref={(el) => registerRef(`${styleIndex}-css`, el)}
                        id={`${styleIndex}-css`}
                        title={style.title}
                        code={style.css}
                        language='css'
                        copiedKey={copiedKey}
                        onCopy={handleCopyToClipboard}
                        copyKey={`${styleIndex}-css`}
                      />

                      {/* CSS 2 */}
                      {style.css2 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css2`, el)}
                          id={`${styleIndex}-css2`}
                          title={style.title2}
                          code={style.css2}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css2`}
                        />
                      )}

                      {/* CSS 3 */}
                      {style.css3 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css3`, el)}
                          id={`${styleIndex}-css3`}
                          title={style.title3}
                          code={style.css3}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css3`}
                        />
                      )}

                      {/* CSS 4 */}
                      {style.css4 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css4`, el)}
                          id={`${styleIndex}-css4`}
                          title={style.title4}
                          code={style.css4}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css4`}
                        />
                      )}

                      {/* CSS 5-12 for extended support */}
                      {style.css5 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css5`, el)}
                          id={`${styleIndex}-css5`}
                          title={style.title5}
                          code={style.css5}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css5`}
                        />
                      )}

                      {style.css6 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css6`, el)}
                          id={`${styleIndex}-css6`}
                          title={style.title6}
                          code={style.css6}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css6`}
                        />
                      )}

                      {style.css7 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css7`, el)}
                          id={`${styleIndex}-css7`}
                          title={style.title7}
                          code={style.css7}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css7`}
                        />
                      )}

                      {style.css8 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css8`, el)}
                          id={`${styleIndex}-css8`}
                          title={style.title8}
                          code={style.css8}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css8`}
                        />
                      )}

                      {style.css9 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css9`, el)}
                          id={`${styleIndex}-css9`}
                          title={style.title9}
                          code={style.css9}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css9`}
                        />
                      )}

                      {style.css10 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css10`, el)}
                          id={`${styleIndex}-css10`}
                          title={style.title10}
                          code={style.css10}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css10`}
                        />
                      )}

                      {style.css11 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css11`, el)}
                          id={`${styleIndex}-css11`}
                          title={style.title11}
                          code={style.css11}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css11`}
                        />
                      )}

                      {style.css12 && (
                        <CodeBlock
                          ref={(el) => registerRef(`${styleIndex}-css12`, el)}
                          id={`${styleIndex}-css12`}
                          title={style.title12}
                          code={style.css12}
                          language='css'
                          copiedKey={copiedKey}
                          onCopy={handleCopyToClipboard}
                          copyKey={`${styleIndex}-css12`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className='styles-footer'>
                <button
                  className='styles-close-button'
                  onClick={handleCloseStyles}
                >
                  Close Styles
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StylesPopup;
