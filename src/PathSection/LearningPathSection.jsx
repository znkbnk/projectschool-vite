import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// CONSOLIDATED LUCIDE IMPORTS
import { 
  MessageCircle, 
  Mail, 
 Camera, 
  CheckCircle, 
  ArrowRight, 
  Star 
} from "lucide-react";

import { learningPhases } from "../data/LearningPathSectionData";
import "../styles/LearningPathSection.css";

// Use the imported Instagram component directly
const InstagramIcon = Camera;

const LearningPathSection = () => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  /* ---------- RESET MODAL ---------- */
  const [showResetModal, setShowResetModal] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  /* ---------- ACTIVE PHASE (real state) ---------- */
  const [activePhase, setActivePhase] = useState(() => {
    if (typeof window === "undefined") return 0;
    return 0;
  });

  const handleResetProgress = () => {
    if (confirmText !== "RESET") return;

    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (
        key?.includes("Guide") ||
        key?.includes("Project") ||
        key?.includes("TimeSpent") ||
        key?.includes("completedTasks")
      ) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));

    setActivePhase(0);
    setShowResetModal(false);
    setConfirmText("");

    navigate("/guides");
    window.location.reload();
  };

  /* --------------------------------------------------------------
     1.  PHASE DATA + CAREER-STEP DATA (intro + check)
  -------------------------------------------------------------- */
  const phaseData = [
    {
      intro: {
        title: "Beginner: Starting Your Coding Journey",
        text: "You're just starting out, with little to no coding experience. Begin with **Phase 1: Theory & Guides** to master React fundamentals. Learn concepts like components, state, and props through structured lessons and practical tasks. By the end, you'll understand the basics and feel ready to code simple applications.",
        color: "#3b82f6",
      },
      check: {
        question: "Do you feel confident enough to start coding simple apps?",
        yesLink: "/exercises",
        yesText: "Yes, I'm ready for Phase 2!",
        noLink: "/guides",
        noText: "No, let's revisit Phase 1 guides.",
        color: "#3b82f6",
      },
    },
    {
      intro: {
        title: "Intermediate: Building Confidence with Projects",
        text: "You've grasped the theory from Phase 1. Now **Phase 2: Guided Projects** helps you apply your knowledge by building 60+ simple components and small projects. You'll learn to solve problems and find solutions independently. Completing these projects will prepare you for larger, real-world challenges.",
        color: "#a855f7",
      },
      check: {
        question: "Are you ready to tackle bigger projects?",
        yesLink: "/exercises",
        yesText: "Yes, take me to Phase 3!",
        noLink: "/exercises/reactlessons",
        noText: "No, I need more practice with Phase 2 projects.",
        color: "#a855f7",
      },
    },
    {
      intro: {
        title: "Advanced: Real-World Projects",
        text: "With a solid foundation from Phase 2, **Phase 3: Freelancer Projects & Workshops** challenges you with real-world freelancer projects and a full MERN stack application. You'll gain experience with complex integrations and deployment, making you confident in handling professional-level tasks.",
        color: "#f97316",
      },
      check: {
        question: "Do you feel ready for job interviews?",
        yesLink: "/interview",
        yesText: "Yes, I'm ready for Phase 4!",
        noLink: "/exercises",
        noText: "No, let's do more projects from Phase 2 or 3.",
        color: "#f97316",
      },
    },
    {
      intro: {
        title: "Job-Ready: Mastering the Interview",
        text: "You've built real projects in Phase 3. Now **Phase 4: Interview Preparation** equips you with 265+ questions, coding challenges, and quizzes from top companies. Practice until you're confident to ace real job interviews and land your dream web developer role!",
        color: "#22c55e",
      },
      check: {
        question: "Are you ready to apply for web developer jobs?",
        yesLink: "#",
        yesText: "Are you ready to apply for web developer jobs?",
        noLink: "#",
        noText: "Start Fresh (Reset All Progress)",
        color: "#22c55e",
      },
    },
  ];

  /* --------------------------------------------------------------
     2.  MEMOIZED LISTS
  -------------------------------------------------------------- */
  const phase1Guides = useMemo(() => learningPhases[0].guides || [], []);
  const phase2Projects = useMemo(() => learningPhases[1].projects || [], []);
  const phase3Projects = useMemo(() => learningPhases[2].projects || [], []);
  const phase4Interviews = useMemo(
    () => learningPhases[3].interviews || [],
    []
  );

  const getExpectedSeconds = useCallback((title) => {
    if (title === "JavaScript/React Interview Tasks") return 36000;
    return 3600;
  }, []);

  const formatTime = (seconds) => {
    if (seconds < 60) return `${seconds} sec`;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return h ? `${h} hr ${m} min` : `${m} min`;
  };

  /* --------------------------------------------------------------
     3.  COMPLETION LOGIC
  -------------------------------------------------------------- */
  const totalPhase1Checkboxes = phase1Guides.reduce(
    (s, g) => s + g.checkboxCount,
    0
  );
  const totalPhase2Projects = phase2Projects.length;
  const totalPhase3Projects =
    phase3Projects.filter((p) => p.taskType === "Live").length +
    phase3Projects.filter((p) => p.taskType === "Workshop").length;
  const totalPhase4Checkboxes = phase4Interviews.reduce(
    (s, i) => s + i.checkboxCount,
    0
  );
  const totalCompletionPoints =
    totalPhase1Checkboxes +
    totalPhase2Projects +
    totalPhase3Projects +
    totalPhase4Checkboxes;

  const isGuideComplete = useCallback((key, cnt) => {
    const saved = localStorage.getItem(key);
    if (!saved) return false;
    const checked = JSON.parse(saved);
    return (
      Object.keys(checked).length === cnt &&
      Object.values(checked).every((v) => v)
    );
  }, []);

  const isProjectComplete = useCallback((key, id) => {
    const saved = localStorage.getItem(key);
    if (!saved) return false;
    return !!JSON.parse(saved)[id];
  }, []);

  const isInterviewComplete = useCallback(
    (key, title) => {
      const spent = parseInt(
        localStorage.getItem(`${key}TimeSpent`) || "0",
        10
      );
      return spent >= getExpectedSeconds(title);
    },
    [getExpectedSeconds]
  );

  const areAllPhase1Checked = useCallback(
    () =>
      phase1Guides.every((g) =>
        isGuideComplete(g.localStorageKey, g.checkboxCount)
      ),
    [phase1Guides, isGuideComplete]
  );
  const areAllPhase2Checked = useCallback(
    () =>
      phase2Projects.every((p) =>
        isProjectComplete(p.localStorageKey, p.taskId)
      ),
    [phase2Projects, isProjectComplete]
  );
  const areAllPhase3Checked = useCallback(
    () =>
      phase3Projects.every((p) =>
        isProjectComplete(p.localStorageKey, p.taskId)
      ),
    [phase3Projects, isProjectComplete]
  );
  const areAllPhase4Checked = useCallback(
    () =>
      phase4Interviews.every((i) =>
        isInterviewComplete(i.localStorageKey, i.title)
      ),
    [phase4Interviews, isInterviewComplete]
  );

  const getCompletedPoints = useCallback(() => {
    let pts = 0;
    phase1Guides.forEach((g) => {
      const saved = localStorage.getItem(g.localStorageKey);
      if (saved) pts += Object.values(JSON.parse(saved)).filter(Boolean).length;
    });
    phase2Projects.forEach((p) => {
      if (isProjectComplete(p.localStorageKey, p.taskId)) pts += 1;
    });
    phase3Projects.forEach((p) => {
      if (isProjectComplete(p.localStorageKey, p.taskId)) pts += 1;
    });
    phase4Interviews.forEach((i) => {
      const spent = parseInt(
        localStorage.getItem(`${i.localStorageKey}TimeSpent`) || "0",
        10
      );
      const expected = getExpectedSeconds(i.title);
      const progress = Math.min(spent / expected, 1);
      pts += progress * i.checkboxCount;
    });
    return pts;
  }, [
    phase1Guides,
    phase2Projects,
    phase3Projects,
    phase4Interviews,
    isProjectComplete,
    getExpectedSeconds,
  ]);

  /* --------------------------------------------------------------
     4.  ACTIVE PHASE + PROGRESS
  -------------------------------------------------------------- */
  const [progressPercentage, setProgressPercentage] = useState(() => {
    const pts = getCompletedPoints();
    return totalCompletionPoints
      ? Math.round((pts / totalCompletionPoints) * 100)
      : 0;
  });

  useEffect(() => {
    const init = () => {
      if (areAllPhase1Checked())
        if (areAllPhase2Checked())
          if (areAllPhase3Checked())
            setActivePhase(areAllPhase4Checked() ? 3 : 3);
          else setActivePhase(2);
        else setActivePhase(1);
      else setActivePhase(0);
    };
    init();
  }, [
    areAllPhase1Checked,
    areAllPhase2Checked,
    areAllPhase3Checked,
    areAllPhase4Checked,
  ]);

  useEffect(() => {
    const handler = () => {
      if (areAllPhase1Checked()) {
        if (areAllPhase2Checked()) {
          if (areAllPhase3Checked()) {
            setActivePhase(areAllPhase4Checked() ? 3 : 3);
          } else setActivePhase(2);
        } else setActivePhase(1);
      } else setActivePhase(0);

      const pts = getCompletedPoints();
      setProgressPercentage(
        totalCompletionPoints
          ? Math.round((pts / totalCompletionPoints) * 100)
          : 0
      );
    };

    window.addEventListener("storage", handler);
    window.addEventListener("customStorageChange", handler);
    handler();

    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("customStorageChange", handler);
    };
  }, [
    areAllPhase1Checked,
    areAllPhase2Checked,
    areAllPhase3Checked,
    areAllPhase4Checked,
    getCompletedPoints,
    totalCompletionPoints,
  ]);

  /* --------------------------------------------------------------
     5.  PHASE CARD (no animation)
  -------------------------------------------------------------- */
  const PhaseCard = ({ phase, index, isActive }) => {
    const isCompleted = index < activePhase;

    return (
      <div
        className={`learning-phase-card ${isActive ? "active" : ""} ${
          isCompleted ? "completed" : ""
        } ${index !== 0 ? "non-interactive" : ""}`}
        onClick={index === 0 ? () => setActivePhase(index) : undefined}
      >
        {isCompleted && (
          <div className='phase-badge completed-badge'>
            <CheckCircle size={24} />
          </div>
        )}

        <div className='phase-header'>
          <div className={`phase-icon ${phase.color}`}>
            <phase.icon size={32} color='white' />
          </div>
          <div className='phase-info'>
            <div className='phase-label'>{phase.phase}</div>
            <h3 className='phase-title'>{phase.title}</h3>
            <p className='phase-description'>{phase.description}</p>
          </div>
        </div>

        <div className='phase-courses'>
          {phase.courses.map((course, idx) => {
            let isCourseComplete = false;
            let courseLink = phase.link;
            let timeDisplay = null;

            if (index === 0) {
              const guide = phase1Guides.find((g) => g.title === course.title);
              if (guide) {
                isCourseComplete = isGuideComplete(
                  guide.localStorageKey,
                  guide.checkboxCount
                );
                courseLink = `/guides/${guide.id}`;
              }
            } else if (index === 3) {
              const interview = phase4Interviews.find(
                (i) => i.title === course.title
              );
              if (interview) {
                isCourseComplete = isInterviewComplete(
                  interview.localStorageKey,
                  interview.title
                );
                courseLink = interview.to;
                const spent = parseInt(
                  localStorage.getItem(
                    `${interview.localStorageKey}TimeSpent`
                  ) || "0",
                  10
                );
                const expected = getExpectedSeconds(interview.title);
                timeDisplay = `${formatTime(spent)} / ${formatTime(expected)}`;
              }
            } else {
              if (index === 1) {
                isCourseComplete = phase2Projects.some((p) =>
                  course.title.includes(p.title)
                    ? isProjectComplete(p.localStorageKey, p.taskId)
                    : false
                );
              } else if (index === 2) {
                if (course.title === "Freelancer Projects")
                  isCourseComplete = phase3Projects
                    .filter((p) => p.taskType === "Live")
                    .every((p) =>
                      isProjectComplete(p.localStorageKey, p.taskId)
                    );
                else if (course.title === "Build With Me - Music Academy")
                  isCourseComplete = phase3Projects
                    .filter((p) => p.taskType === "Workshop")
                    .every((p) =>
                      isProjectComplete(p.localStorageKey, p.taskId)
                    );
              }
            }

            const isClickable = index === 0 || index === 3;

            return (
              <div
                key={idx}
                className={`course-item ${isClickable ? "clickable" : ""}`}
                onClick={(e) => {
                  if (isClickable) {
                    e.stopPropagation();
                    window.location.href = courseLink;
                  }
                }}
                style={isClickable ? { cursor: "pointer" } : {}}
              >
                <Star
                  size={16}
                  color='#fbbf24'
                  fill={isCourseComplete ? "#fbbf24" : "none"}
                  className='course-star'
                />
                <div className='course-details'>
                  <div className='course-title'>{course.title}</div>
                  <div className='course-desc'>{course.desc}</div>
                  <div className='course-meta'>
                    {index === 0 &&
                    course.lessons &&
                    course.tasks !== undefined ? (
                      <>
                        <span>{course.lessons} lessons</span>
                        <span>{course.tasks} tasks</span>
                      </>
                    ) : index === 1 && course.count && course.difficulty ? (
                      <span>
                        {course.count} {course.difficulty}
                      </span>
                    ) : index === 2 && course.count && course.type ? (
                      <span>
                        {course.count} {course.type}
                      </span>
                    ) : index === 3 && timeDisplay ? (
                      <span>{timeDisplay}</span>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='phase-stats'>
          {Object.entries(phase.stats).map(([key, value]) => (
            <div key={key} className='stat-item'>
              <div className='stat-value'>
                {key === "projects" && index === 1
                  ? phase2Projects.length
                  : key === "projects" && index === 2
                  ? phase3Projects.filter((p) => p.taskType === "Live").length
                  : value}
              </div>
              <div className='stat-label'>{key}</div>
            </div>
          ))}
        </div>

        <div className='phase-footer'>
          <span className='phase-duration'>Duration: {phase.duration}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = phase.link;
            }}
            className={`phase-btn ${isActive ? "active" : ""}`}
          >
            {isCompleted ? "Review" : isActive ? "Continue" : "Start"}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  };

  /* --------------------------------------------------------------
     6.  INTRO & CHECK COMPONENTS (no animation)
  -------------------------------------------------------------- */
  const PhaseIntro = ({ title, text, color }) => (
    <div className='phase-intro'>
      <div className='intro-header' style={{ background: color }}>
        <h3>{title}</h3>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    </div>
  );

  const PhaseCheck = ({
    question,
    yesLink,
    yesText,
    noLink,
    noText,
    color,
    onResetClick,
    onContactClick,
  }) => (
    <div className='phase-check'>
      <div className='check-question'>
        <CheckCircle size={20} color='#22c55e' />
        <span>{question}</span>
      </div>

      <div className='check-actions'>
        {onContactClick ? (
          <button
            type='button'
            className='check-btn primary'
            style={{ borderColor: color }}
            onClick={onContactClick}
          >
            {yesText} <ArrowRight size={16} />
          </button>
        ) : (
          <a
            href={yesLink}
            className='check-btn primary'
            style={{ borderColor: color }}
          >
            {yesText} <ArrowRight size={16} />
          </a>
        )}

        {onResetClick ? (
          <button
            type='button'
            className='check-btn secondary'
            onClick={onResetClick}
          >
            {noText} <ArrowRight size={16} />
          </button>
        ) : (
          <a href={noLink} className='check-btn secondary'>
            {noText} <ArrowRight size={16} />
          </a>
        )}
      </div>
    </div>
  );

  /* --------------------------------------------------------------
     7.  RENDER
  -------------------------------------------------------------- */
  return (
    <div>
      <Navbar />
      <ScrollToTopOnNavigation />
      <section className='learning-path-section'>
        {/* ---- Header + Progress ---- */}
        <div className='section-header'>
          <h1>Your React Mastery Journey</h1>
          <p>A structured path from beginner to React expert in 20-28 weeks</p>

          <div className='learning-phase-progress-container'>
            <div className='learning-phase-progress-labels'>
              {learningPhases.map((_, i) => (
                <span key={i}>Phase {i + 1}</span>
              ))}
            </div>
            <div className='learning-phase-progress-bar'>
              <div
                className='learning-phase-progress-fill'
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className='learning-phase-progress-status'>
              {progressPercentage}% Complete
            </div>
          </div>
        </div>

        {/* ---- GRID ---- */}
        <div className='phases-grid'>
          {learningPhases.map((phase, idx) => (
            <React.Fragment key={phase.id}>
              <PhaseIntro
                title={phaseData[idx].intro.title}
                text={phaseData[idx].intro.text}
                color={phaseData[idx].intro.color}
              />

              <PhaseCard
                phase={phase}
                index={idx}
                isActive={idx === activePhase}
              />

              <PhaseCheck
                question={phaseData[idx].check.question}
                yesLink={phaseData[idx].check.yesLink}
                yesText={phaseData[idx].check.yesText}
                noLink={phaseData[idx].check.noLink}
                noText={phaseData[idx].check.noText}
                color={phaseData[idx].check.color}
                onContactClick={
                  idx === 3 ? () => setShowContactModal(true) : undefined
                }
                onResetClick={
                  idx === 3 ? () => setShowResetModal(true) : undefined
                }
              />
            </React.Fragment>
          ))}
        </div>

        {/* ---- RESET MODAL ---- */}
        {showResetModal && (
          <motion.div
            className='reset-modal-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResetModal(false)}
          >
            <motion.div
              className='reset-modal'
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Start Fresh?</h3>
              <p>
                This will <strong>permanently delete</strong> all your progress:
              </p>
              <ul>
                <li>Completed guides & checkboxes</li>
                <li>Project task completions</li>
                <li>Time spent on interviews</li>
              </ul>
              <p>
                Type <strong>RESET</strong> to confirm:
              </p>
              <input
                type='text'
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder='Type RESET'
                className='reset-input'
                autoFocus
              />
              <div className='reset-actions'>
                <button
                  onClick={handleResetProgress}
                  disabled={confirmText !== "RESET"}
                  className='reset-btn danger'
                >
                  Yes, Start Over
                </button>
                <button
                  onClick={() => {
                    setShowResetModal(false);
                    setConfirmText("");
                  }}
                  className='reset-btn secondary'
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ---- CONTACT MODAL ---- */}
        {showContactModal && (
          <motion.div
            className='contact-modal-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              className='contact-modal'
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Contact Us</h3>
              <p>Choose how you'd like to get in touch:</p>

              <div className='contact-options'>
                <a
                  href='/livechat'
                  className='contact-btn'
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/livechat");
                    setShowContactModal(false);
                  }}
                >
                  <MessageCircle size={20} />
                  <span>Live Chat</span>
                </a>

                <a
                  href='mailto:support@projectschool.dev'
                  className='contact-btn'
                >
                  <Mail size={20} />
                  <span>support@projectschool.dev</span>
                </a>

                <a
                  href='https://instagram.com/reactlessons'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-btn'
                >
                  <InstagramIcon size={20} />
                  <span>@reactlessons</span>
                </a>
              </div>

              <button
                onClick={() => setShowContactModal(false)}
                className='contact-close-btn'
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* ---- JOURNEY INFO ---- */}
        <div className='journey-info'>
          <h2>How Your Journey Works</h2>
          <div className='journey-steps'>
            <div className='steps-list'>
              {[
                {
                  num: 1,
                  color: "#3b82f6",
                  title: "Start with Theory",
                  desc: "Begin with comprehensive guides covering all React fundamentals. Each guide includes detailed examples and practical tasks.",
                },
                {
                  num: 2,
                  color: "#a855f7",
                  title: "Build 60+ Projects",
                  desc: "Apply your knowledge with hands-on projects ranging from beginner to advanced difficulty.",
                },
                {
                  num: 3,
                  color: "#f97316",
                  title: "Work on Real Projects",
                  desc: "Tackle actual freelancer projects and build a complete MERN stack application with expert guidance.",
                },
                {
                  num: 4,
                  color: "#22c55e",
                  title: "Ace Your Interview",
                  desc: "Prepare with 265+ questions, coding challenges, and interactive quizzes from top companies.",
                },
              ].map((step) => (
                <div key={step.num} className='step-item'>
                  <div
                    className='step-number'
                    style={{ background: step.color }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='journey-sidebar'>
              <div className='mastery-list'>
                <h3>What You'll Master</h3>
                <ul>
                  {[
                    "React fundamentals to advanced patterns",
                    "Full MERN stack development",
                    "Real-world project experience",
                    "API integrations & deployment",
                    "Interview-ready skills",
                    "Industry best practices",
                  ].map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={16} color='#22c55e' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='investment-info'>
                <h3>Total Learning Investment</h3>
                <div className='investment-hours'>220-290 hours</div>
                <p>
                  Complete all 4 phases and become job-ready in 5-7 months with
                  consistent practice
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- CTA ---- */}
        <div className='cta-section'></div>
      </section>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default LearningPathSection;
