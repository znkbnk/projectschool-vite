import { useState, useEffect } from "react";
import "../styles/DataFetchingLearningJourneySection.css";

const ReactIntroLearningJourneySection = () => {
  const [activeJourney, setActiveJourney] = useState(1);

  useEffect(() => {
    const currentLessonElement = document.querySelector(
      ".current-lesson-badge",
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
      window.location.assign(link);
    }
  };

  const journeySteps = [
    {
      icon: "🌌",
      title: "React Fundamentals",
      description: "Launch into the React universe",
      details:
        "Understand React’s core: JSX for declarative UIs, functional vs. class components, and props for data flow. Build a solid foundation with beginner-friendly explanations.",
      progress: "Completed",
      color: "from-purple-600 to-indigo-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "⚛️",
      title: "Hooks Introduction",
      description: "Unlock dynamic behavior",
      details:
        "Dive into Hooks: master useState for state management and useEffect for side effects. Learn how Hooks simplify functional components with practical examples.",
      progress: "Completed",
      color: "from-blue-600 to-cyan-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "🚀",
      title: "Routing & Navigation",
      description: "Navigate with React Router",
      details:
        "Set up React Router for dynamic and nested routes. Implement lazy loading and protected routes to create seamless single-page application navigation.",
      progress: "Completed",
      color: "from-green-600 to-emerald-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "🎨",
      title: "Styling in React",
      description: "Style your components",
      details:
        "Explore Tailwind CSS, styled-components, and Emotion for modern styling. Learn inline styles and best practices for scalable, maintainable CSS in React.",
      progress: "Completed",
      color: "from-yellow-600 to-orange-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "🌐",
      title: "Data Fetching & APIs",
      description: "Connect to APIs",
      details:
        "Fetch data with useEffect, handle loading/error states, and optimize with SWR or React Query. Implement debouncing, pagination, and infinite scrolling.",
      progress: "Completed",
      color: "from-indigo-600 to-purple-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "⚡",
      title: "State Management",
      description: "Manage complex state",
      details:
        "Compare useState, useReducer, Redux Toolkit, and Recoil. Learn scalable state management patterns for handling complex application data.",
      progress: "Completed",
      color: "from-teal-600 to-blue-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "💼",
      title: "React Interview Prep",
      description: "Ace React interviews",
      details:
        "Tackle React-specific interview questions and coding challenges on Hooks, routing, state management, and performance optimization.",
      progress: "Practice",
      color: "from-orange-600 to-red-600",
      link: "https://www.projectschool.dev/interview",
      isCompleted: null,
    },
    {
      icon: "🏗️",
      title: "Build React Projects",
      description: "Apply your skills",
      details:
        "Develop real-world apps like dashboards or e-commerce platforms. Combine Hooks, routing, styling, and data fetching for production-ready projects.",
      progress: "Practice",
      color: "from-teal-600 to-cyan-600",
      link: "https://www.projectschool.dev/exercises",
      isCompleted: null,
    },
    {
      icon: "🔥",
      title: "Understanding useState",
      description: "Master component state",
      details:
        "Master the useState hook in React to manage component state efficiently. Learn how to declare state variables, update values dynamically, and use state effectively to build interactive UIs.",
      progress: "Next Stop is useState",
      color: "from-blue-700 to-indigo-800",
      link: "https://www.projectschool.dev/guides/usestate",
      isNextLesson: true,
    },
  ];

  return (
    <div className='learning-journey-container'>
      <section className='learning-journey-section'>
        <div className='journey-header'>
          <h2 className='journey-title'>Your React Mastery Journey</h2>
          <p className='journey-subtitle'>
            Navigate the cosmic odyssey from React fundamentals to MERN mastery.
            Master JSX, Hooks, routing, styling, state management, and advanced
            patterns through our structured galactic expedition.
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
                  style={{
                    position: "relative",
                    overflow: "visible",
                    cursor: "pointer", // Ensures the user knows it's a link
                  }}
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

export default ReactIntroLearningJourneySection;
