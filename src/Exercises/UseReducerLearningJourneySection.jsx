import { useState, useEffect, useMemo } from "react";
import "../styles/UseReducerLearningJourneySection.css";

const UseContextLearningJourneySection = () => {
  const [activeJourney, setActiveJourney] = useState(1);

  useEffect(() => {
    // Auto-scroll to current lesson on mount
    const currentLessonElement = document.querySelector(".current-lesson-badge");
    if (currentLessonElement) {
      currentLessonElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  // useMemo prevents the array from being redefined on every render
  const journeySteps = useMemo(() => [
    {
      icon: "✅",
      title: "useEffect Completed",
      description: "You've mastered side effect management",
      details: "You've learned the core concepts of useEffect: handling side effects, managing component lifecycle, cleanup functions, and dependency arrays.",
      progress: "Completed",
      link: "https://www.projectschool.dev/guides/useeffect",
      isCompleted: true,
    },
    {
      icon: "🌐",
      title: "useContext Fundamentals",
      description: "Mastered global state with useContext hook",
      details: "Learned the core concepts of useContext: creating context, providing and consuming context, managing global state, and avoiding prop drilling.",
      progress: "Completed",
      link: null, 
      isCompleted: true,
    },
    {
      icon: "🔄",
      title: "useReducer Completed",
      description: "Mastered complex state logic",
      details: "Learned useReducer for managing complex state logic and building predictable state management systems with reducer functions.",
      progress: "Completed",
      link: null,
      isCompleted: true,
    },
    {
      icon: "💼",
      title: "Ace Context Interviews",
      description: "Mastered useContext interview challenges",
      details: "Prepared with useContext-focused interview questions, coding challenges, and quizzes.",
      progress: "Completed",
      link: "https://www.projectschool.dev/interview",
      isCompleted: true,
    },
    {
      icon: "🏗️",
      title: "Build Advanced Projects",
      description: "Create projects with useContext & useReducer",
      details: "Apply combined useContext and useReducer in real-world projects like multi-user collaboration apps.",
      progress: "Practice",
      link: "https://www.projectschool.dev/exercises",
    },
    {
      icon: "🚦",
      title: "Next: React Router",
      description: "Ready for client-side routing?",
      details: "Next, learn React Router for building dynamic, multi-page applications.",
      progress: "Next Lesson",
      link: "https://www.projectschool.dev/guides/react-router",
      isNextLesson: true,
    },
  ], []);

  return (
    <div className='learning-journey-container'>
      <div className='stats-grid'>
        {/* Stats items... */}
        <div className='stat-card'><div className='stat-number purple'>24</div><div className='stat-label'>Real Examples</div></div>
        <div className='stat-card'><div className='stat-number blue'>120</div><div className='stat-label'>Practice Tasks</div></div>
        <div className='stat-card'><div className='stat-number green'>7</div><div className='stat-label'>Learning Perspectives</div></div>
        <div className='stat-card'><div className='stat-number orange'>15000+</div><div className='stat-label'>Lines of Code</div></div>
      </div>

      <section className='learning-journey-section'>
        <div className='journey-header'>
          <h2 className='journey-title'>Your State Management Mastery Journey</h2>
        </div>

        <div className='journey-timeline'>
          <div className='timeline-progress-line'></div>

          {journeySteps.map((step, index) => {
            // Determine if the card should be a link or a div
            const Tag = step.link ? "a" : "div";
            
            return (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
                <div className={`timeline-content ${index % 2 === 0 ? "content-right" : "content-left"}`}>
                  <Tag
                    href={step.link || undefined}
                    className={`journey-card gradient-${index} ${activeJourney === index ? "active" : ""}`}
                    onClick={() => setActiveJourney(index)}
                    style={{ 
                        textDecoration: 'none', 
                        color: 'inherit', 
                        display: 'block', 
                        cursor: step.link ? 'pointer' : 'default' 
                    }}
                  >
                    {step.isCompleted && <div className='completed-lesson-badge'>✅ Done!</div>}
                    {step.isNextLesson && <div className='next-lesson-badge'>➡️ Next Step</div>}

                    <div className='card-icon' aria-hidden="true">{step.icon}</div>
                    <h3 className='card-title'>{step.title}</h3>
                    <p className='card-description'>{step.description}</p>
                    <p className='card-details'>{step.details}</p>
                    <div className='card-progress-badge'>{step.progress}</div>
                    
                    {step.link && (
                      <div className='card-link-indicator'>Click to explore →</div>
                    )}
                  </Tag>
                </div>

                <div className='timeline-node'>
                  <div className={`node-inner gradient-${index}`}></div>
                </div>
                <div className='timeline-spacer'></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default UseContextLearningJourneySection;