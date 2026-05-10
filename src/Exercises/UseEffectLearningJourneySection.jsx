import { useState, useEffect, useMemo } from "react";
import "../styles/UseEffectLearningJourneySection.css";

const UseEffectLearningJourneySection = () => {
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

  // Memoizing the array prevents it from being recreated on every render
  const journeySteps = useMemo(() => [
    {
      icon: "✅",
      title: "useState Completed",
      description: "You've mastered state management basics",
      details: "You've learned the foundation of React state management with useState: declaring state variables, updating state, and handling forms.",
      progress: "Completed",
      link: "https://www.projectschool.dev/guides/usestate",
      isCompleted: true,
    },
    {
      icon: "⚡",
      title: "useEffect Fundamentals",
      description: "Master side effects and lifecycle with useEffect hook",
      details: "Learn the core concepts of useEffect: handling side effects, managing component lifecycle, cleanup functions, and dependency arrays.",
      progress: "Current Lesson",
      link: null, // No link for the current page
      isCurrentLesson: true,
    },
    {
      icon: "🛠️",
      title: "Build Effect Projects",
      description: "Code 5 real-world useEffect projects",
      details: "Apply useEffect through projects: live data dashboard, real-time search, and subscription managers.",
      progress: "Practice",
      link: "https://www.projectschool.dev/exercises",
    },
    {
      icon: "🎯",
      title: "Advanced Effect Patterns",
      description: "Master complex side effect patterns",
      details: "Dive into advanced techniques: debouncing, throttling, handling async operations, and optimizations.",
      progress: "Advanced",
      link: "https://www.projectschool.dev/exercises/workshoplist",
    },
    {
      icon: "💼",
      title: "Ace Effect Interviews",
      description: "Master useEffect interview challenges",
      details: "Prepare with useEffect-focused interview questions, coding challenges, and quizzes.",
      progress: "Interview Prep",
      link: "https://www.projectschool.dev/interview",
    },
    {
      icon: "🚀",
      title: "Next: useContext Hook",
      description: "Ready for global state management?",
      details: "You've mastered useEffect! Next, learn useContext for managing global state and building scalable apps.",
      progress: "Next Lesson",
      link: "https://www.projectschool.dev/guides/usecontext",
      isNextLesson: true,
    },
  ], []);

  return (
    <div className='learning-journey-container'>
      {/* Stats Grid - Using meaningful numbers for SEO authority signals */}
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
          <div className='stat-number orange'>4000+</div>
          <div className='stat-label'>Lines of Code</div>
        </div>
      </div>

      <section className='learning-journey-section'>
        <header className='journey-header'>
          <h2 className='journey-title'>Your useEffect Mastery Journey</h2>
          <p className='journey-subtitle'>
            Follow our structured path from useState mastery to useEffect
            expertise, then continue to useContext.
          </p>
        </header>

        <div className='journey-timeline'>
          <div className='timeline-progress-line'></div>

          {journeySteps.map((step, index) => {
            const isLink = !!step.link;
            const Tag = isLink ? "a" : "div";

            return (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
              >
                <div className={`timeline-content ${index % 2 === 0 ? "content-right" : "content-left"}`}>
                  <Tag
                    href={step.link || undefined}
                    className={`journey-card gradient-${index} ${activeJourney === index ? "active" : ""} ${isLink ? "is-link" : ""}`}
                    onClick={() => setActiveJourney(index)}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    {/* Badges for visual & context cues */}
                    {step.isCompleted && <div className='completed-lesson-badge'>✅ Done!</div>}
                    {step.isCurrentLesson && <div className='current-lesson-badge'>📍 You are here!</div>}
                    {step.isNextLesson && <div className='next-lesson-badge'>➡️ Next Step</div>}

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

export default UseEffectLearningJourneySection;