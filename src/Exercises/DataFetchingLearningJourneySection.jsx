import React, { useState, useEffect } from "react";
import "../styles/DataFetchingLearningJourneySection.css";

const DataFetchingLearningJourneySection = () => {
  const [activeJourney, setActiveJourney] = useState(1);

  useEffect(() => {
    const currentLessonElement = document.querySelector(
      ".current-lesson-badge"
    );
    if (currentLessonElement) {
      currentLessonElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  const handleJourneyClick = (index, link) => {
    setActiveJourney(index);
    if (link) {
      window.location.href = link;
    }
  };

  const journeySteps = [
    {
      icon: "🌌",
      title: "Data Fetching Fundamentals",
      description: "Master the Galactic Data Network basics",
      details:
        "Understand the philosophy of declarative data flows, explore fetch vs axios trade-offs, and learn async/await patterns. Build your foundation with multi-level explanations from kid-friendly to pro-level.",
      progress: "Completed",
      color: "from-purple-600 to-indigo-600",
      link: "https://www.projectschool.dev/guides/data-fetching-basics",
      isCompleted: true,
    },
    {
      icon: "📡",
      title: "fetch API Mastery",
      description: "Native browser fetching with zero dependencies",
      details:
        "Master the browser's native fetch API: handle JSON parsing, implement robust error checking, use AbortController for cancellation, and leverage ReadableStream for large datasets.",
      progress: "Completed",
      color: "from-blue-600 to-cyan-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "🚀",
      title: "axios Advanced Techniques",
      description: "Enterprise-grade HTTP client mastery",
      details:
        "Harness axios's power: automatic JSON parsing, request/response interceptors, global configurations, SSR compatibility, and progress tracking for file uploads.",
      progress: "Completed",
      color: "from-green-600 to-emerald-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "⚡",
      title: "async/await Patterns",
      description: "Clean, readable asynchronous code",
      details:
        "Transform Promise chains into linear, debuggable code. Master try/catch error handling, sequential vs parallel fetching, and complex async workflows in React components.",
      progress: "Completed",
      color: "from-yellow-600 to-orange-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "🔄",
      title: "React Integration Patterns",
      description: "Seamless data flow with React Hooks",
      details:
        "Integrate fetching with useEffect lifecycles, useState for data storage, useContext for global state, and useReducer for complex state transitions. Handle loading states and errors elegantly.",
      progress: "Completed",
      color: "from-teal-600 to-blue-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "🌐",
      title: "Real-World Applications",
      description: "Production-ready fetching patterns",
      details:
        "Build 10 comprehensive examples: Movie Search, Weather Forecast, Job Board, Analytics Dashboard. From beginner foundations to advanced edge cases and production applications.",
      progress: "Completed",
      color: "from-indigo-600 to-purple-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "💼",
      title: "Ace Data Fetching Interviews",
      description: "Master data fetching interview challenges",
      details:
        "Prepared with React data fetching interview questions, coding challenges, and quizzes on fetch, axios, async patterns, and error handling best practices.",
      progress: "Practice",
      color: "from-orange-600 to-red-600",
      link: "https://www.projectschool.dev/interview",
      isCompleted: null,
    },
    {
      icon: "🏗️",
      title: "Build Data-Driven Projects",
      description: "Apply your data fetching mastery",
      details:
        "Create production-grade applications: real-time dashboards, e-commerce platforms, social media feeds. Combine fetching with routing, authentication, and complex state management.",
      progress: "Practice",
      color: "from-teal-600 to-cyan-600",
      link: "https://www.projectschool.dev/exercises",
      isCompleted: null,
    },
    {
      icon: "📝",
      title: "Form Handling Mastery",
      description: "Master interactive user input patterns",
      details:
        "You've mastered data fetching! Next, learn comprehensive form handling: controlled components, validation patterns, form submission with data fetching, error handling, and building dynamic forms that create seamless user experiences.",
      progress: "Next Lesson",
      color: "from-blue-700 to-indigo-800",
      link: null,
      isNextLesson: true,
    },
  ];

  return (
    <div className='learning-journey-container'>
      {/* Stats Grid */}
      <div className='stats-grid'>
        <div className='stat-card'>
          <div className='stat-number purple'>10</div>
          <div className='stat-label'>Comprehensive Examples</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number blue'>50</div>
          <div className='stat-label'>Practice Scenarios</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number green'>5</div>
          <div className='stat-label'>Learning Perspectives</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number orange'>10000</div>
          <div className='stat-label'>Lines of Theory</div>
        </div>
      </div>
      <section className='learning-journey-section'>
        <div className='journey-header'>
          <h2 className='journey-title'>Your Data Fetching Mastery Journey</h2>
          <p className='journey-subtitle'>
            Navigate the complete odyssey from fundamental concepts to advanced
            patterns. Master fetch, axios, and async/await through our
            structured galactic expedition across the Galactic Data Network.
          </p>
        </div>

        {/* Interactive Journey Timeline */}
        <div className='journey-timeline'>
          <div className='timeline-progress-line'></div>

          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
            >
              <div
                className={`timeline-content ${
                  index % 2 === 0 ? "content-right" : "content-left"
                }`}
              >
                <div
                  className={`journey-card gradient-${index} ${
                    activeJourney === index ? "active" : ""
                  }`}
                  onClick={() => handleJourneyClick(index, step.link)}
                  style={{ position: "relative", overflow: "visible" }}
                >
                  {step.isCompleted && (
                    <div className='completed-lesson-badge'>✅ Done!</div>
                  )}
                  {step.isNextLesson && (
                    <div className='next-lesson-badge'>➡️ Next Step</div>
                  )}
                  <div className='card-icon'>{step.icon}</div>
                  <h3 className='card-title'>{step.title}</h3>
                  <p className='card-description'>{step.description}</p>
                  <p className='card-details'>{step.details}</p>
                  <div className='card-progress-badge'>{step.progress}</div>

                  {step.isNextLesson && (
                    <div className='next-lesson-text'>Don't click yet!</div>
                  )}
                </div>
              </div>
              <div className='timeline-node'>
                <div className={`node-inner gradient-${index}`}></div>
              </div>
              <div className='timeline-spacer'></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DataFetchingLearningJourneySection;
