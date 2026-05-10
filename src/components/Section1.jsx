import  { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useCheckout from "../hooks/useCheckout";

// Import styles
import "../styles/section1.css";

// Import images
import pslogo from "../images/pslogo.webp";
import longBackground from "../images/longBacroundTop.webp";

// ============================================
// LIGHTWEIGHT SCROLL ANIMATIONS (replaces GSAP)
// ============================================
const useScrollAnimations = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".fade-in-up-scroll, .scale-in-scroll")
        .forEach((el) => {
          el.classList.add("in-view");
        });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(".fade-in-up-scroll, .scale-in-scroll")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);
};

// ============================================
// ANIMATED COUNTER (replaces GSAP textContent animation)
// ============================================
const AnimatedStat = ({ target, suffix, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCount(Math.round(target * easeProgress));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          setTimeout(() => requestAnimationFrame(animate), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <div ref={ref} className='stat-item scale-in-scroll'>
      <div className='stat-number-wrapper'>
        <span className='stat-number'>{count}</span>
        {suffix}
      </div>
      <p className='stat-label'>{label}</p>
    </div>
  );
};

// ============================================
// SIMPLE PARALLAX (replaces framer-motion useScroll)
// ============================================
const useHeroParallax = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          if (scrollY < window.innerHeight) {
            const opacity = Math.max(
              0,
              1 - scrollY / (window.innerHeight * 0.5),
            );
            const scale = Math.max(0.9, 1 - scrollY / (window.innerHeight * 2));
            const yOffset = scrollY * 0.3;

            element.style.opacity = opacity;
            element.style.transform = `translateY(${-yOffset}px) scale(${scale})`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return ref;
};

// ============================================
// MAIN HOMEPAGE COMPONENT
// ============================================
function HomePage({ isLoggedIn }) {
  const {
    isTermsAccepted,
    setIsTermsAccepted,
    isCheckoutLoading,
    handleCheckout,
    handleFreeButtonClick,
  } = useCheckout();

  const heroRef = useHeroParallax();
  const [activePhase, setActivePhase] = useState(1);

  // Initialize scroll animations
  useScrollAnimations();

  const phases = [
    {
      number: "01",
      title: "React Theory & Guides",
      duration: "2-4 weeks",
      description:
        "Master React fundamentals through 17 comprehensive guides with 400+ hands-on tasks.",
      features: [
        "useState, useEffect, useContext, useReducer",
        "React Router & Navigation",
        "Data Fetching & API Integration",
        "State Management Patterns",
      ],
      color: "#61dafb",
      link: "/guides",
    },
    {
      number: "02",
      title: "Build 60+ Projects",
      duration: "6-8 weeks",
      description:
        "Apply your knowledge building real-world projects from beginner to advanced.",
      features: [
        "20 Beginner Projects",
        "20 Intermediate Projects",
        "20 Advanced Projects",
        "Portfolio-Ready Applications",
      ],
      color: "#fb61d4",
      link: "/exercises",
    },
    {
      number: "03",
      title: "Real-World & MERN",
      duration: "8-10 weeks",
      description:
        "Work on actual freelancer projects and build a complete full-stack application.",
      features: [
        "21 Freelancer Projects",
        "Firebase & Stripe Integration",
        "Full MERN Stack Workshop",
        "Production Deployment",
      ],
      color: "#d800a2",
      link: "/exercises/livelessons",
    },
    {
      number: "04",
      title: "Interview Preparation",
      duration: "2-4 weeks",
      description:
        "Get job-ready with 265+ questions and coding challenges from top companies.",
      features: [
        "265+ Interview Questions",
        "Coding Challenges",
        "Interactive Quizzes",
        "Real Company Problems",
      ],
      color: "#ffd700",
      link: "/interview",
    },
  ];

  const stats = [
    { number: 60, suffix: "+", label: "Projects" },
    { number: 400, suffix: "+", label: "Exercises" },
    { number: 265, suffix: "+", label: "Interview Questions" },
    { number: 21, suffix: "", label: "Freelancer Projects" },
  ];

  return (
    <div className='homepage'>
      <Helmet>
        <title>Learn React by Building Projects | Project School</title>
        <meta
          name='description'
          content='Learn React by building 60+ real projects. Master hooks, routing, APIs, and full-stack development through hands-on practice, not passive videos.'
        />
        <meta
          name='keywords'
          content='learn react, react tutorial, react projects, react course, react hooks, learn react online'
        />
        <link rel='canonical' href='https://www.projectschool.dev/' />
        <meta
          property='og:title'
          content='Learn React by Building Projects | Project School'
        />
        <meta
          property='og:description'
          content='Learn React by building 60+ real projects. Master hooks, routing, APIs, and full-stack development through hands-on practice.'
        />
        <meta property='og:url' content='https://www.projectschool.dev/' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Learn React by Building Projects | Project School'
        />
        <meta
          name='twitter:description'
          content='Learn React by building 60+ real projects. Hands-on practice, not passive videos.'
        />
      </Helmet>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className='hero' ref={heroRef}>
        {/* Background Image */}
        <div
          className='hero-background-image'
          style={{ backgroundImage: `url(${longBackground})` }}
        />

        {/* Gradient Overlay */}
        <div className='hero-gradient-overlay' />

        {/* Animated Orbs */}
        <div className='hero-orb hero-orb-1' />
        <div className='hero-orb hero-orb-2' />
        <div className='hero-orb hero-orb-3' />

        {/* Grid Pattern */}
        <div className='hero-grid' />

        <div className='hero-content'>
          <div
            className='hero-logo fade-in-up'
            style={{ animationDelay: "0s" }}
          >
            <img
              src={pslogo}
              alt='Project School'
              className='logo-image'
              width={200}
              height={200}
              fetchPriority='high'
            />
          </div>

          <div
            className='hero-badge fade-in-up'
            style={{ animationDelay: "0.1s" }}
          >
            <span className='hero-badge-dot' />
            <span>From beginner to job-ready in 4-6 months</span>
          </div>

          <h1
            className='hero-title fade-in-up'
            style={{ animationDelay: "0.2s" }}
          >
            <span className='hero-title-line'>
              Learn <span className='highlight-react'>React</span>
            </span>
            <span className='hero-title-line'>
              by <span className='highlight-pink'>Building</span>
            </span>
          </h1>

          <p
            className='hero-subtitle fade-in-up'
            style={{ animationDelay: "0.3s" }}
          >
            {isLoggedIn
              ? "Welcome back! Pick up where you left off and keep building your React skills."
              : "Master React through 60+ hands-on projects, real freelancer briefs, and full-stack apps. Go from tutorial hell to job-ready in 5 months."}
          </p>

          <div
            className='hero-cta-group fade-in-up'
            style={{ animationDelay: "0.4s" }}
          >
            {isLoggedIn ? (
              <>
                <Link to='/exercises' className='btn-primary'>
                  Continue Learning
                  <span>→</span>
                </Link>
                <Link to='/guides' className='btn-secondary'>
                  View Guides
                </Link>
              </>
            ) : (
              <>
                <Link to='/signup' className='btn-primary'>
                  Start Learning Free
                  <span>→</span>
                </Link>
                <Link to='/projects' className='btn-secondary'>
                  Browse Projects
                </Link>
              </>
            )}
          </div>
        </div>

        <div
          className='hero-scroll-indicator fade-in-up'
          style={{ animationDelay: "0.5s" }}
        >
          <span>Scroll</span>
          <div className='scroll-line' />
        </div>
      </section>

      {/* ============================================
          PROBLEM/SOLUTION SECTION
          ============================================ */}
      <section className='problem-section'>
        <div className='section1-container'>
          <div className='problem-grid'>
            <div className='problem-card fade-in-up-scroll'>
              <p className='card-label'>Sound familiar?</p>
              <h2 className='card-title'>Stuck in tutorial hell?</h2>
              <p className='card-text'>
                You've watched hours of videos. You've followed along, copying
                code line by line. But when you open a blank file to build
                something yourself — <em>nothing</em>. You can't remember what
                to write. You don't know where to start.
                <br />
                <br />
                That's because watching someone else code doesn't teach you to
                code. It teaches you to <em>recognise</em> code.
              </p>
            </div>

            <div className='solution-card fade-in-up-scroll'>
              <p className='card-label'>Imagine this instead</p>
              <h2 className='card-title'>Build real apps confidently</h2>
              <p className='card-text'>
                You open your laptop and{" "}
                <em>build a full app in one weekend</em>. You understand every
                line of code. You get a message: "We'd love to interview you."
                <br />
                <br />
                You walk in calm, prepared, confident. You get the offer.
                <em> You're a Web Developer.</em>
                <br />
                <br />
                That's what Project School gives you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section className='stats-section'>
        <div className='stats-grid'>
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              target={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </section>
      <section className='social-proof-section'>
        <div className='section1-container'>
          <p className='social-proof-text fade-in-up-scroll'>
            Join <span className='highlight-number'>1,000+</span> developers
            already learning React the right way
          </p>
        </div>
      </section>

      {/* ============================================
          JOURNEY SECTION
          ============================================ */}
      <section className='journey-section'>
        <div className='section1-container'>
          <div className='section1-header fade-in-up-scroll'>
            <p className='section1-eyebrow'>Your Learning Path</p>
            <h2 className='section1-title'>4 Phases to React Mastery</h2>
            <p className='section1-subtitle'>
              A structured journey from complete beginner to job-ready developer
              in 17-24 weeks.
            </p>
          </div>

          <div className='phases-container'>
            <div className='phase-tabs'>
              {phases.map((phase, index) => (
                <button
                  key={index}
                  className={`phase-tab ${
                    activePhase === index + 1 ? "active" : ""
                  }`}
                  onClick={() => setActivePhase(index + 1)}
                >
                  Phase {phase.number}
                </button>
              ))}
            </div>

            <div className='phase-content'>
              <div className='phase-visual'>
                <div
                  className='phase-number'
                  style={{ color: phases[activePhase - 1].color }}
                >
                  {phases[activePhase - 1].number}
                </div>
                <div
                  className='phase-circle'
                  style={{ borderColor: phases[activePhase - 1].color }}
                />
                <div
                  className='phase-circle-inner'
                  style={{ background: phases[activePhase - 1].color }}
                />
              </div>

              <div className='phase-info'>
                <h3>{phases[activePhase - 1].title}</h3>
                <p className='phase-duration'>
                  Duration: {phases[activePhase - 1].duration}
                </p>
                <p className='phase-description'>
                  {phases[activePhase - 1].description}
                </p>
                <ul className='phase-features'>
                  {phases[activePhase - 1].features.map((feature, idx) => (
                    <li key={idx}>
                      <span
                        className='feature-icon'
                        style={{
                          background: `${phases[activePhase - 1].color}20`,
                          color: phases[activePhase - 1].color,
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={phases[activePhase - 1].link}
                  className='btn-primary phase-link'
                  style={{
                    marginTop: "1.5rem",
                    display: "inline-flex",
                    background: phases[activePhase - 1].color,
                    color: activePhase === 1 ? "#0a0a0a" : "#ffffff", // dark text on light blue phase 1
                  }}
                >
                  Start Phase {phases[activePhase - 1].number}
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING SECTION
          ============================================ */}
      <section className='pricing-section'>
        <div className='section1-container'>
          <div className='section1-header fade-in-up-scroll'>
            <p className='section1-eyebrow'>Pricing</p>
            <h2 className='section1-title'>Choose Your Learning Path</h2>
            <p className='section1-subtitle'>
              Master React through 60+ hands-on projects, real freelancer
              briefs, and full-stack apps. Start free, upgrade to unlock
              everything.
            </p>
          </div>

          <div className='pricing-cards three-cards'>
            {/* FREE TIER */}
            <div className='pricing-card scale-in-scroll'>
              <p className='pricing-tier'>Free</p>
              <p className='pricing-price'>£0</p>
              <p className='pricing-period'>Forever free</p>
              <ul className='pricing-features'>
                <li>15 React practice projects with full access</li>
                <li>9 theory guides with intro content & 2 examples each</li>
                <li>3 freelancer project briefs (no walkthroughs)</li>
                <li>Music Academy — first 6 lessons (frontend only)</li>
                <li>E-Commerce — first 3 lessons (setup only)</li>
                <li>30 interview questions + 10 quiz questions</li>
                <li>24/7 community support</li>
              </ul>
              <button
                className='btn-secondary'
                style={{ width: "100%" }}
                onClick={handleFreeButtonClick}
              >
                Get Started Free
              </button>
            </div>

            {/* MONTHLY TIER */}
            <div className='pricing-card featured scale-in-scroll'>
              <div className='pricing-badge'>Most Popular</div>
              <p className='pricing-tier'>Monthly</p>
              <p className='pricing-price'>£14.99</p>
              <p className='pricing-period'>per month</p>
              <ul className='pricing-features'>
                <li>All 60+ React projects with full source code</li>
                <li>9 complete guides with all exercises & solutions</li>
                <li>21 freelancer projects with step-by-step walkthroughs</li>
                <li>
                  Music Academy — all 52 lessons with full-stack walkthroughs
                </li>
                <li>
                  E-Commerce — all 34 lessons with full-stack walkthroughs
                </li>
                <li>265+ interview questions, tasks & coding challenges</li>
                <li>New projects & content added monthly</li>
                <li>Cancel anytime</li>
              </ul>
              <button
                className='btn-primary'
                style={{ width: "100%" }}
                onClick={() => handleCheckout("price_1Pwqdd2NvwaBESkuxTiU3ozx")}
                disabled={isCheckoutLoading}
              >
                {isCheckoutLoading ? "Processing..." : "Get Started"}
              </button>
            </div>

            {/* ANNUAL TIER */}
            <div className='pricing-card annual scale-in-scroll'>
              <div className='pricing-badge save'>Save 44%</div>
              <p className='pricing-tier'>Annual</p>
              <p className='pricing-price'>£100</p>
              <p className='pricing-period'>per year (£8.33/mo)</p>
              <ul className='pricing-features'>
                <li>Everything in Monthly, plus:</li>
                <li>Request custom projects & content</li>
                <li>Personalized learning paths</li>
                <li>1-on-1 support sessions</li>
                <li>Early access to new features</li>
                <li className='highlight-feature'>Lifetime access guarantee</li>
              </ul>
              <button
                className='btn-primary'
                style={{ width: "100%" }}
                onClick={() => handleCheckout("price_1PwqmY2NvwaBESkuFDHCkFbd")}
                disabled={isCheckoutLoading}
              >
                {isCheckoutLoading ? "Processing..." : "Get Started"}
              </button>
            </div>
          </div>
          <div
            className='terms-links'
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <label>
              <input
                className='terms-input'
                type='checkbox'
                checked={isTermsAccepted}
                onChange={() => setIsTermsAccepted(!isTermsAccepted)}
              />{" "}
              I agree to the{" "}
              <a
                className='touch-target'
                href='https://www.projectschool.dev/terms'
                target='_blank'
                rel='noopener noreferrer'
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                className='touch-target'
                href='https://www.projectschool.dev/privacy'
                target='_blank'
                rel='noopener noreferrer'
              >
                Privacy Policy
              </a>
            </label>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className='cta-section'>
        <div className='cta-background' />
        <div className='cta-content fade-in-up-scroll'>
          <h2 className='cta-title'>Ready to Learn React the Right Way?</h2>
          <p className='cta-text'>
            {isLoggedIn
              ? "You're all set! Dive into your next project and keep building."
              : "Stop watching. Start building. Join thousands of developers who transformed their careers with Project School."}
          </p>
          {isLoggedIn ? (
            <Link to='/exercises' className='btn-primary'>
              Continue Learning
              <span>→</span>
            </Link>
          ) : (
            <Link to='/signup' className='btn-primary'>
              Start Your First Project — Free
              <span>→</span>
            </Link>
          )}
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className='footer'>
        <p className='footer-quote'>
          "Code is like humor. When you have to explain it, it's bad." – Cory
          House
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
