import { useState, useEffect, useRef, useMemo } from "react";
import { linkifyKeywords } from "../utils/linkifyKeywords";
import { reactFormsData } from "../data/reactFormsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/usestateGuide.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import PropTypes from "prop-types";
// import ReactFormsLearningJourneySection from "./ReactFormsLearningJourneySection";

import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Custom theme that works with CSS variables
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
    code.includes(";")
  ) {
    return "css";
  }
  if (code.includes("npm ") || code.includes("yarn ") || code.includes("cd ")) {
    return "bash";
  }
  return "javascript";
};

const CodeDisplay = ({ code, index, handleCopy, copiedIndex, language }) => {
  const isCopied = copiedIndex === index;
  const detectedLang = language || detectLanguage(code);

  return (
    <div className='code-container'>
      {/* Header with dots, language badge, and copy button */}
      <div className='code-header'>
        <div className='code-header-left'>
          {/* macOS style dots */}
          <div className='code-dots'>
            <span className='code-dot red'></span>
            <span className='code-dot yellow'></span>
            <span className='code-dot green'></span>
          </div>
          {/* Language badge */}
          <span className='code-language'>{detectedLang}</span>
        </div>

        {/* Copy button */}
        <button
          onClick={() => handleCopy(code, index)}
          className={`copy-button ${isCopied ? "copied" : ""}`}
          aria-label={isCopied ? "Copied!" : "Copy code"}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
          <span>{isCopied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      {/* Code content */}
      <div className='code-content'>
        <SyntaxHighlighter
          language={detectedLang}
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
  );
};

const ReactForms = () => {
  const guide = reactFormsData[0];
  const initialActiveTab = {};
  guide?.paragraphs
    ?.filter((p) => p.type === "examples")
    ?.forEach((ex, index) => {
      if (ex.tabs?.length > 0) {
        initialActiveTab[`example-${index}`] = ex.tabs[0].id;
      }
    });
  const getActiveTabCode = (sectionId, tabs) => {
    const activeTabId = activeTab[sectionId] || tabs[0]?.id;
    return (
      tabs.find((tab) => tab.id === activeTabId)?.code || tabs[0]?.code || ""
    );
  };
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const [showSolution, setShowSolution] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [checkedTitles, setCheckedTitles] = useState(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem("reactFormsCheckedTitles");
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return {};
    }
  });
  const tabRefs = useRef({});
  const tocRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackToTop(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    tocRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "reactFormsCheckedTitles",
      JSON.stringify(checkedTitles),
    );
  }, [checkedTitles]);

  const toc = useMemo(() => {
    const titles = [];
    guide?.paragraphs?.forEach((p, index) => {
      if (p.type === "title") {
        titles.push({ id: `section-${index}`, title: p.content });
      }
    });
    return titles;
  }, [guide]);

  const handleCopy = (code, index) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          alert("Failed to copy code. Please copy it manually.");
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      } catch (err) {
        console.error("Fallback copy failed:", err);
        alert("Failed to copy code. Please copy it manually.");
      }
      document.body.removeChild(textarea);
    }
  };

  const handleTabKeyDown = (event, sectionId, tabs) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const currentIndex = tabs.findIndex(
        (tab) => tab.id === activeTab[sectionId],
      );
      let nextIndex;
      if (event.key === "ArrowLeft") {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      } else {
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      }
      setActiveTab({ ...activeTab, [sectionId]: tabs[nextIndex].id });
      const nextTab = tabRefs.current[`${sectionId}-${tabs[nextIndex].id}`];
      if (nextTab) {
        nextTab.focus();
      }
    }
  };

  const toggleSolution = (index) => {
    setShowSolution((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleCheckboxChange = (index) => {
    setCheckedTitles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!guide) {
    return <div>Guide not found</div>;
  }

  return (
    <div>
      <Navbar />
      <main className='main'>
        <div className='guide'>
          <article>
            <section className='hero-section'>
              <h1 className='title'>
                <span className='title-main'>{guide.title}</span>
                <span className='title-sub'>Master Every Input Type</span>
              </h1>
              <img className='top-image' src={guide.image} alt={guide.title} />
            </section>

            {/* Table of Contents */}
            {toc.length > 0 && (
              <section ref={tocRef} className='section'>
                <h2 className='heading green'>Table of Contents</h2>
                <ul className='toc-list'>
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Content Sections */}
            <section className='section'>
              {guide.paragraphs.map((paragraph, index) => (
                <div
                  key={`para-${index}-${paragraph.type}`}
                  id={
                    paragraph.type === "title" ? `section-${index}` : undefined
                  }
                >
                  {paragraph.type === "text" && (
                    <p className='article-paragraph'>
                      {linkifyKeywords(paragraph.content)}
                    </p>
                  )}
                  {paragraph.type === "boldText" && (
                    <span className='bold-article-paragraph'>
                      {linkifyKeywords(paragraph.content)}
                    </span>
                  )}
                  {paragraph.type === "title" && (
                    <div className='title-container'>
                      <div className='checkbox-container'>
                        <input
                          type='checkbox'
                          id={`title-checkbox-${index}`}
                          checked={checkedTitles[index] || false}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <label htmlFor={`title-checkbox-${index}`}></label>
                      </div>
                      <h2 className='article-title'>{paragraph.content}</h2>
                    </div>
                  )}
                  {paragraph.type === "list" && (
                    <ul className='list'>
                      {paragraph.items.map((item, idx) => (
                        <li key={`item-${index}-${idx}`}>
                          {linkifyKeywords(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                  {paragraph.type === "image" && (
                    <img
                      className='image'
                      src={paragraph.src}
                      alt={paragraph.alt}
                    />
                  )}
                  {paragraph.type === "code" && (
                    <CodeDisplay
                      code={paragraph.content}
                      index={index}
                      handleCopy={handleCopy}
                      copiedIndex={copiedIndex}
                    />
                  )}
                  {paragraph.type === "examples" && (
                    <div className='code-tabs'>
                      <div
                        role='tablist'
                        aria-label='Code Examples'
                        className='tab-buttons'
                      >
                        {paragraph.tabs.map((tab) => {
                          const sectionId = `example-${index}`;
                          const tabId = `${sectionId}-${tab.id}`;
                          const panelId = `${tabId}-panel`;
                          return (
                            <button
                              key={tab.id}
                              id={tabId}
                              role='tab'
                              aria-selected={activeTab[sectionId] === tab.id}
                              aria-controls={panelId}
                              className={
                                activeTab[sectionId] === tab.id ? "active" : ""
                              }
                              onClick={() =>
                                setActiveTab({
                                  ...activeTab,
                                  [sectionId]: tab.id,
                                })
                              }
                              onKeyDown={(e) =>
                                handleTabKeyDown(
                                  e,
                                  sectionId,
                                  paragraph.tabs,
                                  index,
                                )
                              }
                              tabIndex={
                                activeTab[sectionId] === tab.id ? 0 : -1
                              }
                              ref={(el) => (tabRefs.current[tabId] = el)}
                            >
                              {tab.label}
                            </button>
                          );
                        })}
                      </div>
                      <div
                        role='tabpanel'
                        id={`example-${index}-${
                          activeTab[`example-${index}`] || paragraph.tabs[0].id
                        }-panel`}
                        aria-labelledby={`example-${index}-${
                          activeTab[`example-${index}`] || paragraph.tabs[0].id
                        }`}
                        className='tab-content'
                      >
                        <CodeDisplay
                          code={getActiveTabCode(
                            `example-${index}`,
                            paragraph.tabs,
                          )}
                          index={index}
                          handleCopy={handleCopy}
                          copiedIndex={copiedIndex}
                        />
                      </div>
                    </div>
                  )}
                  {paragraph.type === "practiceTask" && (
                    <div className='practice-task'>
                      <p className='article-paragraph'>
                        {linkifyKeywords(paragraph.content)}
                      </p>
                      <p className='article-paragraph'>
                        {" "}
                        {linkifyKeywords(paragraph.hint)}
                      </p>
                      <div className='code-editor'>
                        <h3>Try It Yourself</h3>
                        <textarea
                          className='editor-textarea'
                          placeholder='Write your code here...'
                          rows={10}
                        ></textarea>
                      </div>
                      <button
                        className='solution-button'
                        onClick={() => toggleSolution(index)}
                      >
                        {showSolution[index]
                          ? "Hide Solution"
                          : "Show Solution"}
                      </button>
                      {showSolution[index] && (
                        <CodeDisplay
                          code={paragraph.solution}
                          index={`solution-${index}`}
                          handleCopy={handleCopy}
                          copiedIndex={copiedIndex}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Features Grid */}
            {/* <ReactFormsLearningJourneySection /> */}
            {showBackToTop && (
              <button
                className='back-to-top'
                onClick={scrollToTop}
                aria-label='Scroll back to Table of Contents'
              >
                ↑ Back to Contents
              </button>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleCopy: PropTypes.func.isRequired,
  copiedIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  language: PropTypes.string,
};

export default ReactForms;
