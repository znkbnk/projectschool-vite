/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articlesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import "../styles/articles.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Custom theme that works with our CSS variables
const customCodeTheme = {
  ...atomOneDark,
  hljs: {
    ...atomOneDark.hljs,
    background: "transparent",
    padding: "0",
  },
};

const Articles = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (code, index) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

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
    if (
      code.includes("npm ") ||
      code.includes("yarn ") ||
      code.includes("cd ")
    ) {
      return "bash";
    }
    return "javascript";
  };

  // Copy Icon SVG component
  const CopyIcon = () => (
    <svg className='copy-icon' viewBox='0 0 24 24'>
      <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
    </svg>
  );

  // Check Icon SVG component
  const CheckIcon = () => (
    <svg className='check-icon' viewBox='0 0 24 24'>
      <polyline points='20 6 9 17 4 12' />
    </svg>
  );

  // Code Block Component
  const CodeBlock = ({ code, index, language }) => {
    const isCopied = copiedIndex === index;
    const detectedLang = language || detectLanguage(code);

    return (
      <div className='code-container-article'>
        {/* Header with dots, language, and copy button */}
        <div className='code-header'>
          <div className='code-header-left'>
            <div className='code-dots'>
              <span className='code-dot red'></span>
              <span className='code-dot yellow'></span>
              <span className='code-dot green'></span>
            </div>
            <span className='code-language'>{detectedLang}</span>
          </div>
          <button
            className={`code-copy-btn ${isCopied ? "copied" : ""}`}
            onClick={() => handleCopy(code, index)}
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

  if (!article) {
    return (
      <div className='article-not-found'>
        <Navbar />
        <div className='not-found-content'>
          <h1>Article not found</h1>
          <p>The article you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{article.title} | Project School</title>
        <meta
          name='description'
          content={
            article.excerpt ||
            article.paragraphs?.[0]?.content?.slice(0, 155) ||
            "Learn React development tips and best practices."
          }
        />
        <link
          rel='canonical'
          href={`https://www.projectschool.dev/blogs/devessentials/${id}`}
        />
      </Helmet>
      <Navbar />
      <main>
        <div id='articles-main' className='wrapper'>
          <article key={article.id}>
            <section className='articles-section'>
              <h1>{article.title}</h1>
              <img
                className='top-image'
                src={article.image}
                alt={article.title}
              />
              {article.paragraphs && Array.isArray(article.paragraphs) ? (
                <>
                  {article.paragraphs.map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.type === "text" && (
                        <p
                          className='article-paragraph'
                          dangerouslySetInnerHTML={{
                            __html: paragraph.content,
                          }}
                        />
                      )}
                      {paragraph.type === "boldText" && (
                        <span className='bold-article-paragraph'>
                          {paragraph.content}
                        </span>
                      )}
                      {paragraph.type === "title" && (
                        <h2 className='article-title'>{paragraph.content}</h2>
                      )}
                      {paragraph.type === "list" && (
                        <ul>
                          {paragraph.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {paragraph.type === "image" && (
                        <img src={paragraph.src} alt={paragraph.alt} />
                      )}
                      {paragraph.type === "code" && (
                        <CodeBlock
                          code={paragraph.content}
                          index={index}
                          language={paragraph.language}
                        />
                      )}
                      {paragraph.type === "linkedText" && (
                        <p className='article-paragraph'>
                          {paragraph.content}
                          <Link
                            to={paragraph.linkHref}
                            className='article-inline-link'
                          >
                            {paragraph.linkText}
                          </Link>
                          {paragraph.contentAfter}
                        </p>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <p>{article.content}</p>
              )}
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
