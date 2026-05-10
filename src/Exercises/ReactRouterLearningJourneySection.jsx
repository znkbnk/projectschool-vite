import { useState, useEffect } from "react";
import "../styles/ReactRouterLearningJourneySection.css";

const ReactRouterLearningJourneySection = () => {
  const [activeJourney, setActiveJourney] = useState(1);
  const [pendingLink, setPendingLink] = useState(null);

  // Auto-scroll to current lesson on mount
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

  // Handle external navigation safely via Effect
  useEffect(() => {
    if (pendingLink) {
      window.location.assign(pendingLink);
    }
  }, [pendingLink]);

  // Restored handleJourneyClick function
  const handleJourneyClick = (index, link) => {
    setActiveJourney(index);
    if (link) {
      setPendingLink(link);
    }
  };

  const journeySteps = [
    {
      icon: "🛤️",
      title: "Router Basics Completed",
      description: "Mastered core routing concepts",
      details:
        "Learned fundamental React Router concepts: BrowserRouter, Routes, Route components, and basic navigation setup.",
      progress: "Completed",
      color: "from-green-600 to-emerald-600",
      link: "https://www.projectschool.dev/guides/react-router-basics",
      isCompleted: true,
    },
    {
      icon: "🔗",
      title: "Navigation & Links",
      description: "Mastered programmatic navigation",
      details:
        "Explored Link, NavLink, and useNavigate for creating navigation patterns and handling dynamic routing in React applications.",
      progress: "Completed",
      color: "from-blue-600 to-indigo-600",
      link: null,
      isCompleted: true,
    },
    {
      icon: "📍",
      title: "Dynamic Routing",
      description: "Mastered route parameters",
      details:
        "Learned to handle dynamic routes, useParams, and nested routes to create flexible, data-driven navigation structures.",
      progress: "Completed",
      color: "from-violet-600 to-purple-700",
      link: null,
      isCompleted: true,
    },
    {
      icon: "💼",
      title: "Ace Router Interviews",
      description: "Mastered routing interview challenges",
      details:
        "Prepared with React Router-focused interview questions, coding challenges, and quizzes on routing patterns and best practices.",
      progress: "Practice",
      color: "from-orange-600 to-red-600",
      link: "https://www.projectschool.dev/interview",
      isCompleted: null,
    },
    {
      icon: "🏗️",
      title: "Build Router Projects",
      description: "Create projects with React Router",
      details:
        "Applied React Router in real-world projects: multi-page dashboards, protected routes, or e-commerce navigation systems.",
      progress: "Practice",
      color: "from-teal-600 to-cyan-600",
      link: "https://www.projectschool.dev/exercises",
    },
    {
      icon: "📡",
      title: "Next: Data Fetching",
      description: "Ready to fetch data in React?",
      details:
        "You've mastered React Router! Next, learn data fetching with fetch, axios, and async/await to integrate APIs into your applications.",
      progress: "Next Lesson",
      color: "from-blue-700 to-indigo-800",
      link: "https://www.projectschool.dev/guides/datafetching",
      isNextLesson: true,
    },
  ];

  return (
    <div className='learning-journey-container'>
      {/* Stats Grid */}
      <div className='stats-grid'>
        <div className='stat-card'>
          <div className='stat-number purple'>18</div>
          <div className='stat-label'>Routing Examples</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number blue'>100</div>
          <div className='stat-label'>Practice Tasks</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number green'>6</div>
          <div className='stat-label'>Learning Perspectives</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number orange'>12000+</div>
          <div className='stat-label'>Lines of Code</div>
        </div>
      </div>
      <section className='learning-journey-section'>
        <div className='journey-header'>
          <h2 className='journey-title'>Your React Router Mastery Journey</h2>
          <p className='journey-subtitle'>
            Follow our structured path to master React Router for building
            dynamic, multi-page applications with seamless client-side
            navigation.
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
                  {step.link && (
                    <div className='card-link-indicator'>
                      Click to explore →
                    </div>
                  )}
                  {step.isNextLesson && (
                    <div className='next-lesson-text'>🎓 Ready to advance?</div>
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

export default ReactRouterLearningJourneySection;
