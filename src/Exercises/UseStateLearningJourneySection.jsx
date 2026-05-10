import  { useState } from "react";
import "../styles/UsestateLearningJourney.css";

const UseStateLearningJourneySection = () => {
  const [activeJourney, setActiveJourney] = useState(0);

  const handleJourneyClick = (index, link) => {
    setActiveJourney(index);
    if (link) {
      // FIX: Use .assign() instead of direct .href mutation to satisfy strict environments
      window.location.assign(link);
    }
  };

  const journeySteps = [
    {
      icon: "⚡",
      title: "useState Fundamentals",
      description: "Master state management basics with useState hook",
      details: "Learn the foundation of React state management: declaring state variables and handling re-renders.",
      progress: "Current Lesson",
      isCurrentLesson: true,
      link: null,
    },
    {
      icon: "🛠️",
      title: "Build Practice Projects",
      description: "Code 5 real-world useState projects and examples",
      details: "Apply your knowledge through progressive projects like a shopping cart and user profile forms.",
      progress: "Practice",
      link: "https://www.projectschool.dev/exercises",
    },
    {
      icon: "🎯",
      title: "Master Advanced Patterns",
      description: "Learn complex state patterns and best practices",
      details: "Dive into state batching, functional updates, and performance optimization.",
      progress: "Advanced",
      link: null,
    },
    {
      icon: "💼",
      title: "Ace React Interviews",
      description: "Master useState interview questions and challenges",
      details: "Prepare with curated questions and hands-on coding challenges focused on hooks.",
      progress: "Interview Prep",
      link: "https://www.projectschool.dev/interview",
    },
    {
      icon: "🚀",
      title: "Next: useEffect Hook",
      description: "Ready for side effects and lifecycle management?",
      details: "Mastered useState? Now learn useEffect for API calls and subscriptions.",
      progress: "Next Lesson",
      isNextLesson: true,
      link: "https://www.projectschool.dev/guides/useeffect",
    },
  ];

  return (
    <div className='learning-journey-container'>
      <div className='stats-grid'>
        <div className='stat-card'><div className='stat-number purple'>7</div><div className='stat-label'>Examples</div></div>
        <div className='stat-card'><div className='stat-number blue'>35</div><div className='stat-label'>Tasks</div></div>
        <div className='stat-card'><div className='stat-number green'>3</div><div className='stat-label'>Perspectives</div></div>
        <div className='stat-card'><div className='stat-number orange'>1000+</div><div className='stat-label'>Lines</div></div>
      </div>

      <section className='learning-journey-section'>
        <div className='journey-header'>
          <h2 className='journey-title'>Your useState Mastery Journey</h2>
        </div>

        <div className='journey-timeline'>
          <div className='timeline-progress-line'></div>
          {journeySteps.map((step, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
              <div className={`timeline-content ${index % 2 === 0 ? "content-right" : "content-left"}`}>
                <div 
                  className={`journey-card gradient-${index} ${activeJourney === index ? "active" : ""}`}
                  onClick={() => handleJourneyClick(index, step.link)}
                >
                  {step.isCurrentLesson && <div className='current-lesson-badge'>📍 You are here!</div>}
                  {step.isNextLesson && <div className='next-lesson-badge'>➡️ Next Step</div>}
                  <div className='card-icon'>{step.icon}</div>
                  <h3 className='card-title'>{step.title}</h3>
                  <p className='card-description'>{step.description}</p>
                  <p className='card-details'>{step.details}</p>
                  {step.link && <div className='card-link-indicator'>Click to explore →</div>}
                </div>
              </div>
              <div className='timeline-node'><div className={`node-inner gradient-${index}`}></div></div>
              <div className='timeline-spacer'></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UseStateLearningJourneySection;