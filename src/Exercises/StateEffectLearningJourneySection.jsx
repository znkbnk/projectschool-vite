import { useState, useEffect } from "react";
import "../styles/DataFetchingLearningJourneySection.css";

const StateEffectLearningJourneySection = () => {
  const [activeJourney, setActiveJourney] = useState(3); // Set to index 3 for useState + useEffect

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
    // This is generally treated as a method call rather than a mutation
    window.open(link, "_self"); 
  }
};

  const journeySteps = [
    {
      icon: "🌟",
      title: "React Intro",
      description: "Foundations of React",
      details:
        "Mastered the basics of React: components, JSX, and the declarative paradigm. Built a strong foundation for your React journey.",
      progress: "Completed",
      color: "from-purple-600 to-indigo-600",
      link: "https://www.projectschool.dev/guides/reactintro",
      isCompleted: true,
    },
    {
      icon: "🧠",
      title: "useState Hook",
      description: "Managing component state",
      details:
        "Learned to manage dynamic state with useState: handling user inputs, updating UI, and creating reactive components.",
      progress: "Completed",
      color: "from-blue-600 to-cyan-600",
      link: "https://www.projectschool.dev/guides/usestate",
      isCompleted: true,
    },
    {
      icon: "⚙️",
      title: "useEffect Hook",
      description: "Handling side effects",
      details:
        "Mastered side-effect management with useEffect: syncing with external systems, fetching data, and handling cleanup.",
      progress: "Completed",
      color: "from-green-600 to-emerald-600",
      link: "https://www.projectschool.dev/guides/useeffect",
      isCompleted: true,
    },
    {
      icon: "🔄",
      title: "useState + useEffect Symphony",
      description: "Powerful hook combination",
      details:
        "You're here! Mastering the interplay of useState and useEffect: synchronizing state updates with side effects, managing lifecycles, and building interactive features.",
      progress: "In Progress",
      color: "from-yellow-600 to-orange-600",
      link: null,
      isCurrentLesson: true,
    },
    {
      icon: "🏗️",
      title: "Practice Projects",
      description: "Apply your Hook mastery",
      details:
        "Build real-world applications: dynamic forms, dashboards, and interactive widgets. Combine useState and useEffect for production-grade projects.",
      progress: "Practice",
      color: "from-teal-600 to-blue-600",
      link: "https://www.projectschool.dev/exercises",
      isCompleted: null,
    },
    {
      icon: "💼",
      title: "Ace Hook Interviews",
      description: "Master Hook-related challenges",
      details:
        "Prepare for interviews with questions and coding challenges on useState, useEffect, and their interplay. Nail Hook-based problems with confidence.",
      progress: "Practice",
      color: "from-orange-600 to-red-600",
      link: "https://www.projectschool.dev/interview",
      isCompleted: null,
    },
    {
      icon: "🌍",
      title: "useContext Hook",
      description: "Global state management",
      details:
        "Ready for global state management? Next, learn useContext for managing global state, sharing data across components, and building scalable React applications.",
      progress: "Next Lesson",
      color: "from-blue-700 to-indigo-800",
      link: "https://www.projectschool.dev/guides/usecontext",
      isNextLesson: true,
    },
  ];

  return (
    <div className='learning-journey-container'>
      {/* Stats Grid */}
      <div className='stats-grid'>
        <div className='stat-card'>
          <div className='stat-number purple'>12</div>
          <div className='stat-label'>Comprehensive Examples</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number blue'>60</div>
          <div className='stat-label'>Practice Scenarios</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number green'>7</div>
          <div className='stat-label'>Learning Perspectives</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number orange'>12000</div>
          <div className='stat-label'>Lines of Theory</div>
        </div>
      </div>
      <section className='learning-journey-section'>
        <div className='journey-header'>
          <h2 className='journey-title'>Your React Hooks Mastery Journey</h2>
          <p className='journey-subtitle'>
            Navigate the complete odyssey from React fundamentals to advanced
            Hooks. Master useState, useEffect, and their interplay, preparing
            for global state management with useContext.
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
                  {step.isCurrentLesson && (
                    <div className='current-lesson-badge'>📍 You're Here</div>
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

export default StateEffectLearningJourneySection;
