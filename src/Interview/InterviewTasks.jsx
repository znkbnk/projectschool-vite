import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import questions from "../data/InterviewTasksData";
import styles from "./InterviewTasks.module.css";
import ReactDOMServer from "react-dom/server";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";
import useTrackTime from "../PathSection/useTrackTime";

const InterviewTasks = () => {
  useTrackTime("interviewQuizCheckedTitlesTimeSpent");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const textareaRef = useRef(null);

  // --- REFS FOR RATE LIMITING ---
  const codeRunsRef = useRef(0);
  // Initialize with 0 to satisfy the "pure" rule;
  // it will be updated the first time handleRunCode is clicked.
  const lastCodeRunRef = useRef(0);

  const MAX_CODE_RUNS = 5;
  const TIME_LIMIT = 60000;

  // REMOVE the let codeRuns, let lastCodeRun, etc. from here!
  // They were causing the "unused variable" and "impure function" errors.

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div>No questions available</div>;
  }

  const question = questions[currentQuestion];

  const handleTextAreaChange = (e) => {
    setUserCode(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setFeedback("");
  };

  const sanitizeCode = (code) => {
    return code
      .replace(/<script.*?>.*?<\/script>/g, "")
      .replace(/javascript:/g, "")
      .replace(/on\w+="[^"]*"/g, "");
  };

  const handleRunCode = () => {
    const now = Date.now();

    // 1. Check if we should reset the counter based on time elapsed
    // If more than 60 seconds have passed since the LAST click, reset the count to 0
    if (now - lastCodeRunRef.current > TIME_LIMIT) {
      codeRunsRef.current = 0;
    }

    // 2. ALWAYS update the timestamp of the "last attempt" to right now
    lastCodeRunRef.current = now;

    // 3. Check if they are currently over the limit
    if (codeRunsRef.current >= MAX_CODE_RUNS) {
      setFeedback(
        "❌ You've reached the maximum number of code runs per minute. Please wait a moment.",
      );
      return;
    }

    // 4. If they passed the check, increment the counter and proceed
    codeRunsRef.current++;
    const { testCases } = question;

    const forbiddenCodeRegex = new RegExp(
      [
        /eval/,
        /setTimeout/,
        /setInterval/,
        /window\./,
        /document\./,
        /localStorage/,
        /sessionStorage/,
        /navigator\./,
        /screen\./,
        /geolocation\./,
        /console\./,
        /parent\./,
        /self\./,
        /location\./,
        /document\.body/,
        /document\.write/,
        /Function\./,
        /constructor/,
        /XMLHttpRequest/,
        /fetch/,
        /dangerouslySetInnerHTML/,
        /document\.createElement/,
        /document\.getElementById/,
        /document\.querySelector/,
        /document\.createTextNode/,
        /document\.appendChild/,
        /alert/,
        /WebSocket/,
        /ServiceWorker/,
        /navigator\.serviceWorker/,
        /RTCPeerConnection/,
        /getUserMedia/,
        /webkitURL/,
        /Blob/,
      ]
        .map((regex) => regex.source)
        .join("|"),
    );

    const match = userCode.match(forbiddenCodeRegex);

    if (match) {
      setFeedback(`❌ Forbidden code detected: '${match[0]}'.`);
      return;
    }

    const sanitizedCode = sanitizeCode(userCode);

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.sandbox = "allow-scripts allow-same-origin";
    document.body.appendChild(iframe);

    const contentSecurityPolicy =
      "default-src 'self'; script-src 'self' https://unpkg.com https://cdnjs.cloudflare.com 'unsafe-eval'; object-src 'none';";
    const metaTag = document.createElement("meta");
    metaTag.httpEquiv = "Content-Security-Policy";
    metaTag.content = contentSecurityPolicy;
    iframe.contentDocument.head.appendChild(metaTag);

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;

    const reactScript = iframeDocument.createElement("script");
    reactScript.src = "https://unpkg.com/react@18/umd/react.development.js";
    reactScript.integrity =
      "sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L";
    reactScript.crossOrigin = "anonymous";
    iframeDocument.body.appendChild(reactScript);

    reactScript.onload = () => {
      const reactDOMScript = iframeDocument.createElement("script");
      reactDOMScript.src =
        "https://unpkg.com/react-dom@18/umd/react-dom.development.js";
      reactDOMScript.integrity =
        "sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm";
      reactDOMScript.crossOrigin = "anonymous";
      iframeDocument.body.appendChild(reactDOMScript);

      reactDOMScript.onload = () => {
        try {
          const iframeWindow = iframe.contentWindow;

          if (!iframeWindow.React || !iframeWindow.ReactDOM) {
            throw new Error(
              "❌ Error: React or ReactDOM are not loaded correctly.",
            );
          }

          const babelScript = iframeDocument.createElement("script");
          babelScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.1/babel.min.js";
          babelScript.integrity =
            "sha384-olG3IEhy5pD0eAXSS/PbUdcna473AAbflsc3YXem22afyFBR9nwIzHX05ZxmhzyQ";
          babelScript.crossOrigin = "anonymous";
          iframeDocument.body.appendChild(babelScript);

          babelScript.onload = () => {
            try {
              const transpiledCode = iframeWindow.Babel.transform(
                sanitizedCode,
                {
                  presets: ["react", "env"],
                },
              ).code;

              const functionRegex =
                /(?:const|function|class)\s+([a-zA-Z$_][a-zA-Z0-9$_]*)/;
              const match = sanitizedCode.match(functionRegex);

              if (!match) {
                throw new Error(
                  "❌ Error: Could not detect a valid function or component in your code.",
                );
              }

              const detectedFunctionName = match[1];

              const wrappedCode = `(
                function() {
                  ${transpiledCode}
                  window.${detectedFunctionName} = ${detectedFunctionName};
                })();
              `;

              const func = new iframeWindow.Function(wrappedCode);

              const timeoutPromise = new Promise((_, reject) =>
                setTimeout(
                  () => reject(new Error("❌ Code execution timed out.")),
                  5000,
                ),
              );

              Promise.race([func(), timeoutPromise])
                .then(() => {
                  const userFunction = iframeWindow[detectedFunctionName];

                  if (
                    typeof userFunction !== "function" &&
                    !React.isValidElement(userFunction)
                  ) {
                    throw new Error(
                      `❌ Error: '${detectedFunctionName}' is not a valid function or React component.`,
                    );
                  }

                  let allTestsPassed = true;
                  let failedTestDetails = [];

                  testCases.forEach(({ inputs, expectedOutput }, index) => {
                    const result = userFunction(...inputs);

                    if (
                      typeof result === "object" &&
                      result !== null &&
                      React.isValidElement(result)
                    ) {
                      const resultString =
                        ReactDOMServer.renderToStaticMarkup(result);
                      const expectedString = expectedOutput;

                      if (resultString !== expectedString) {
                        allTestsPassed = false;
                        failedTestDetails.push({
                          testCaseIndex: index + 1,
                          inputs,
                          expectedOutput,
                          result: resultString,
                        });
                      }
                    } else {
                      if (
                        JSON.stringify(result) !==
                        JSON.stringify(expectedOutput)
                      ) {
                        allTestsPassed = false;
                        failedTestDetails.push({
                          testCaseIndex: index + 1,
                          inputs,
                          expectedOutput,
                          result,
                        });
                      }
                    }
                  });

                  if (allTestsPassed) {
                    setFeedback("✅ Correct! All test cases passed.");
                  } else {
                    let errorMessages =
                      "❌ Some test cases failed. Try again!\n\n";
                    failedTestDetails.forEach((testDetail) => {
                      errorMessages += `Test Case ${testDetail.testCaseIndex} failed:\n`;
                      errorMessages += `Inputs: ${JSON.stringify(
                        testDetail.inputs,
                      )}\n`;
                      errorMessages += `Expected Output: ${testDetail.expectedOutput}\n`;
                      errorMessages += `Actual Output: ${testDetail.result}\n\n`;
                    });
                    setFeedback(errorMessages);
                  }
                })
                .catch((error) => {
                  setFeedback(`❌ Error: ${error.message}`);
                })
                .finally(() => {
                  document.body.removeChild(iframe);
                });
            } catch (error) {
              setFeedback(`❌ Error: ${error.message}`);
            }
          };
        } catch (error) {
          setFeedback(`❌ Error: ${error.message}`);
        }
      };
    };
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
    setUserCode("");
    setFeedback("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "300px";
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) =>
      prev === 0 ? questions.length - 1 : prev - 1,
    );
    setUserCode("");
    setFeedback("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "300px";
    }
  };

  const startPractice = () => {
    setQuizStarted(true);
    window.scrollTo(0, 0);
  };

  // START SCREEN
  if (!quizStarted) {
    return (
      <div>
        <ScrollToTopOnNavigation />
        <Navbar />
        <h1 className='component-title'>Interview Tasks</h1>
        <div className={styles.startContainer}>
          <div className={styles.startCard}>
            <h2>How It Works</h2>
            <p className={styles.introText}>
              Solve real JavaScript and React coding challenges in a built-in
              editor. Write your solution and run it against test cases to check
              your work.
            </p>
            <ul className={styles.introDetails}>
              <li>🧩 {questions.length} coding challenges</li>
              <li>▶️ Run code against test cases</li>
              <li>🔄 Navigate freely between tasks</li>
            </ul>
            <button className={styles.startBtn} onClick={startPractice}>
              Start Practice
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <h1 className='component-title'>Interview Tasks</h1>

      <div className={styles.container}>
        <div className={styles.questionCard}>
          <h3>React/JavaScript Question: {question.id}</h3>
          <h4>Task type: {question.type}</h4>
          <p className={styles.questionText}>{question.text}</p>
          <div className={styles.navigationButtons}>
            <button onClick={handlePreviousQuestion} className={styles.button}>
              Previous
            </button>
            <button onClick={handleNextQuestion} className={styles.button}>
              Next
            </button>
          </div>
        </div>

        <div className={styles.codeEditor}>
          <textarea
            placeholder='Type your code here...'
            className={styles.textArea}
            value={userCode}
            onChange={handleTextAreaChange}
            ref={textareaRef}
          />
          <button onClick={handleRunCode} className={styles.runButton}>
            Run
          </button>
          {feedback && (
            <p
              className={`${styles.feedback} ${
                feedback.startsWith("✅")
                  ? styles.correct
                  : feedback.startsWith("❌")
                    ? styles.error
                    : ""
              }`}
            >
              {feedback}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewTasks;
