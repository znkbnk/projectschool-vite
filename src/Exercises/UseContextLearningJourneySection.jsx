import { useState, useEffect, useMemo } from "react";
import "../styles/UseContextLearningJourneySection.css";

const UseContextLearningJourneySection = () => {
  // Use a lazy initializer if you ever decide to persist this to localStorage
  const [activeJourney, setActiveJourney] = useState(1);

  useEffect(() => {
    // Auto-scroll to current lesson on mount
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

  const journeySteps = useMemo(() => [
    {
      icon: "✅",
      title: "useEffect Completed",
      description: "You've mastered side effect management",
      details:
        "You've learned the core concepts of useEffect: handling side effects, managing component lifecycle, cleanup functions, and dependency arrays.",
      progress: "Completed",
      color: "from-green-600 to-emerald-600",
      link: "https://www.projectschool.dev/guides/useeffect",
      isCompleted: true,
    },
    {
      icon: "🌐",
      title: "useContext Fundamentals",
      description: "Master global state with useContext hook",
      details:
        "Learn the core concepts of useContext: creating context, providing and consuming context, managing global state, and avoiding prop drilling.",
      progress: "Current Lesson",
      color: "from-blue-600 to-indigo-600",
      link: null,
      isCurrentLesson: true,
    },
    {
      icon: "🛠️",
      title: "Build Context Projects",
      description: "Code real-world useContext projects",
      details:
        "Apply useContext through projects: multi-language app, global notification system, and shopping carts.",
      progress: "Practice",
      color: "from-teal-500 to-cyan-500",
      link: "https://www.projectschool.dev/exercises",
    },
    {
      icon: "🎯",
      title: "Advanced Context Patterns",
      description: "Master complex context patterns",
      details:
        "Dive into advanced useContext techniques: combining with useReducer and optimizing performance with memoization.",
      progress: "Advanced",
      color: "from-purple-600 to-pink-600",
      link: "https://www.projectschool.dev/exercises/workshoplist",
    },
    {
      icon: "💼",
      title: "Ace Context Interviews",
      description: "Master useContext interview challenges",
      details:
        "Prepare with useContext-focused interview questions, coding challenges, and quizzes.",
      progress: "Interview Prep",
      color: "from-orange-600 to-red-600",
      link: "https://www.projectschool.dev/interview",
    },
    {
      icon: "🚀",
      title: "Next: useReducer Hook",
      description: "Ready for complex state logic?",
      details:
        "You've mastered useContext! Next, learn useReducer for managing complex state logic and transitions.",
      progress: "Next Lesson",
      color: "from-violet-600 to-purple-700",
      link: null,
      isNextLesson: true,
    },
  ], []);

  return (
    <div className='learning-journey-container'>
      <div className='stats-grid'>
        <div className='stat-card'>
          <div className='stat-number purple'>14</div>
          <div className='stat-label'>Real Examples</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number blue'>70</div>
          <div className='stat-label'>Practice Tasks</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number green'>5</div>
          <div className='stat-label'>Learning Perspectives</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number orange'>6000+</div>
          <div className='stat-label'>Lines of Code</div>
        </div>
      </div>

      <section className='learning-journey-section'>
        <header className='journey-header'>
          <h2 className='journey-title'>Your useContext Mastery Journey</h2>
          <p className='journey-subtitle'>
            Follow our structured path from useEffect mastery to useContext
            expertise.
          </p>
        </header>

        <div className='journey-timeline'>
          <div className='timeline-progress-line'></div>

          {journeySteps.map((step, index) => {
            const isLink = !!step.link;
            const CardTag = isLink ? "a" : "div";

            return (
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
                  <CardTag
                    href={step.link || undefined}
                    className={`journey-card gradient-${index} ${
                      activeJourney === index ? "active" : ""
                    } ${isLink ? "is-link" : ""}`}
                    onClick={() => setActiveJourney(index)}
                    style={{ 
                        display: 'block', 
                        textDecoration: 'none', 
                        color: 'inherit',
                        cursor: 'pointer'
                    }}
                  >
                    {step.isCompleted && (
                      <div className='completed-lesson-badge'>✅ Done!</div>
                    )}
                    {step.isCurrentLesson && (
                      <div className='current-lesson-badge'>📍 You are here!</div>
                    )}
                    {step.isNextLesson && (
                      <div className='next-lesson-badge'>➡️ Next Step</div>
                    )}

                    <div className='card-icon' aria-hidden="true">{step.icon}</div>
                    <h3 className='card-title'>{step.title}</h3>
                    <p className='card-description'>{step.description}</p>
                    <p className='card-details'>{step.details}</p>
                    <div className='card-progress-badge'>{step.progress}</div>
                    
                    {isLink && (
                      <div className='card-link-indicator'>
                        Explore Lesson →
                      </div>
                    )}
                  </CardTag>
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