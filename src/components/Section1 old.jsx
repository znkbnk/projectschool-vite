import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "../styles/section1.css";
import LearningPathSection from "../PathSection/LearningPathSection";

// Import images
import image1 from "/images/pslogo.webp"; // big logo
import sectionImg3 from "/images/sectionImg3.webp"; // board
import pslogosmall from "/images/pslogosmall.webp"; // small logo
// import image3 from "/images/reactLogo.webp"; // React intro
// import image4 from "/images/live-trans.webp"; // Live projects
// import image6 from "/images/buildWitME.webp"; // Build with Me
// import image7 from "/images/webDevInterview.webp"; // Interview
import image5 from "/images/sectionPicture2.webp"; // Think differently
// import image2 from "/images/devEssFAQ.webp"; // Dev Essentials
// import guidesImage from "/images/guidesLogo.webp"; // Guides image
import CrazyScrollPhrase from "./CrazyScrollPhrase";

function Section1({ isLoggedIn }) {
  const logo = useRef(null);
  const pslogosmallRef = useRef(null);
  const sectionImg3Ref = useRef(null);

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const animation = () => {
      if (sectionImg3Ref.current) {
        gsap.set(sectionImg3Ref.current, { opacity: 0 });
        const tl = gsap.timeline();
        if (window.innerWidth > 640) {
          tl.to(sectionImg3Ref.current, {
            opacity: 0.4,
            top: "50%",
            duration: 1,
            ease: "linear",
          });
        }
      }
    };
    animation();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const parallaxEffect = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 30 },
    },
  };

  // const cardData = [
  //   {
  //     id: "guides",
  //     title: "Comprehensive React Guides",
  //     description:
  //       "Master React with our in-depth theory guides featuring 8 comprehensive courses, each packed with detailed examples and practical tasks.",
  //     image: guidesImage,
  //     alt: "React Guides",
  //     className: "card-left",
  //     width: 120,
  //     height: 120,
  //     features: [
  //       "8 comprehensive theory guides covering all React fundamentals",
  //       "Over 150 detailed examples with line-by-line code explanations",
  //       "500+ practical tasks to reinforce your learning",
  //       "From basic concepts to advanced patterns and MERN stack mastery",
  //     ],
  //     scrollMultiplier: 0.08,
  //     buttons: [
  //       {
  //         text: "Explore Guides",
  //         type: "primary",
  //         link: "/guides",
  //         icon: "📚",
  //       },
  //     ],
  //   },
  //   {
  //     id: "dynamic-ui",
  //     title: "Building Dynamic User Interfaces",
  //     description:
  //       "Dive deep into React's core architecture and discover how modern web applications come to life with component-based design.",
  //     image: image3,
  //     alt: "Building Dynamic UIs",
  //     className: "card-right",
  //     width: 120,
  //     height: 120,
  //     features: [
  //       "Master React's fundamental concepts: components, state, and hooks",
  //       "Explore advanced patterns and the complete React ecosystem",
  //       "Build engaging, responsive UIs with hands-on practical exercises",
  //       "Learn modern JavaScript ES6+ features essential for React development",
  //     ],
  //     scrollMultiplier: 0.1,
  //     buttons: [
  //       {
  //         text: "Start Learning",
  //         type: "primary",
  //         link: "/exercises",
  //         icon: "🚀",
  //       },
  //     ],
  //   },
  //   {
  //     id: "live-projects",
  //     title: "Live React Projects",
  //     description:
  //       "Work on real-world React projects sourced directly from freelancer platforms like Fiverr, Upwork, and Freelancer to gain industry-relevant experience.",
  //     image: image4,
  //     alt: "Live React Projects",
  //     className: "card-left",
  //     width: 120,
  //     height: 120,
  //     features: [
  //       "Build projects based on actual freelancer job requirements and briefs",
  //       "Practice with real-world scenarios sourced from Freelancer, Fiverr, and Upwork",
  //       "Develop skills that match current market demands and client expectations",
  //       "Learn to translate client requirements into functional React applications",
  //     ],
  //     scrollMultiplier: 0.15,
  //     buttons: [
  //       {
  //         text: "Start Projects",
  //         type: "primary",
  //         link: "/exercises/livelessons",
  //         icon: "💼",
  //       },
  //     ],
  //   },
  //   {
  //     id: "build-with-me",
  //     title: "Build with Me",
  //     description:
  //       "Experience the complete development workflow as we tackle complex projects together, sharing insights and best practices along the way.",
  //     image: image6,
  //     alt: "Build with Me",
  //     className: "card-right",
  //     width: 160,
  //     height: 90,
  //     features: [
  //       "Dive into comprehensive project builds with expert guidance",
  //       "Observe the thought process and decision-making in real-time",
  //       "Gain insights from real-world troubleshooting and debugging",
  //       "Learn project architecture and scalable code organization",
  //     ],
  //     scrollMultiplier: 0.05,
  //     buttons: [
  //       {
  //         text: "Start Building",
  //         type: "primary",
  //         link: "/exercises/workshoplist",
  //         icon: "🔨",
  //       },
  //     ],
  //   },
  //   {
  //     id: "interview-prep",
  //     title: "Ace Your React Interview",
  //     description:
  //       "Master the art of React interviews with our comprehensive preparation system designed by industry experts.",
  //     image: image7,
  //     alt: "React Interview Prep",
  //     className: "card-left",
  //     width: 120,
  //     height: 120,
  //     features: [
  //       "Practice with curated React interview questions from top companies",
  //       "Tackle hands-on JavaScript and React coding challenges",
  //       "Test your knowledge with interactive quizzes and assessments",
  //       "Learn interview strategies and how to explain your solutions clearly",
  //     ],
  //     scrollMultiplier: 0.12,
  //     buttons: [
  //       { text: "Start Prep", type: "primary", link: "/interview", icon: "💼" },
  //     ],
  //   },
  //   {
  //     id: "dev-essentials",
  //     title: "Dev Essentials & FAQs",
  //     description:
  //       "Your comprehensive resource for development tools, best practices, and answers to the most common React questions.",
  //     image: image2,
  //     alt: "Dev Essentials",
  //     className: "card-right",
  //     width: 120,
  //     height: 120,
  //     features: [
  //       "In-depth guides on essential development tools and workflows",
  //       "Clear answers to React questions for developers at all levels",
  //       "Best practices for code organization and project structure",
  //       "Practical insights to elevate your development skills and project quality",
  //     ],
  //     scrollMultiplier: 0.06,
  //     buttons: [
  //       { text: "Browse FAQs", type: "primary", link: "/blogs", icon: "❓" },
  //     ],
  //   },
  // ];

  return (
    <div className='container'>
      {" "}
      <header>
        {" "}
        <div className='word-container'>
          {" "}
          <link
            rel='preload'
            href={pslogosmall}
            as='image'
            media='(max-width: 640px)'
          />{" "}
          <h1 className='main-header'>
            {" "}
            <div className='decorator'></div> <div className='decorator'></div>{" "}
            <div className='content'>
              Master <span className='react'>React</span> <br />{" "}
              <span className='highlight'>Through Hands-On Building</span>{" "}
            </div>{" "}
          </h1>{" "}
          <div className='sectionImages-container'>
            {" "}
            <img
              src={sectionImg3}
              alt='Decorative board'
              className='sectionImg3'
              ref={sectionImg3Ref}
              width='687'
              height='400'
              fetchpriority='high'
              decoding='async'
              loading='eager'
            />{" "}
            <img
              className='projectschoolImg'
              src={image1}
              alt='Project School logo'
              ref={logo}
              loading='lazy'
              width='300'
              height='150'
            />{" "}
          </div>{" "}
          <img
            src={pslogosmall}
            alt='Project School small logo'
            className='pslogosmall'
            ref={pslogosmallRef}
            width='120'
            height='120'
            loading='lazy'
          />{" "}
          <div className='crazy-scroll-wrapper'>
            {" "}
            <CrazyScrollPhrase />{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      <main>
        <motion.section
          className='content-section'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          variants={staggerContainer}
        >
          {" "}
          <div className='feature ipsGrid ipsGrid_collapsePhone'>
            <motion.div
              className='ipsGrid_span7 ipsType_right'
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {" "}
              <p>
                {" "}
                <span>
                  Welcome to Project School, your premier destination for
                  mastering React development. We're a comprehensive learning
                  platform designed to take you from{" "}
                  <strong>beginner to expert</strong> through structured,
                  engaging, and practical React education.{" "}
                </span>{" "}
              </p>{" "}
              <p>
                {" "}
                <span>
                  Whether you're just starting your React journey, looking to
                  deepen your skills, or preparing for technical interviews,
                  Project School provides the resources, guidance, and community
                  you need to succeed in modern web development.{" "}
                </span>{" "}
              </p>{" "}
              <p>
                {" "}
                <span>
                  Join thousands of developers who've transformed their careers
                  with Project School—where React mastery becomes achievable for
                  everyone!{" "}
                </span>{" "}
              </p>
            </motion.div>
            <motion.div className='ipsGrid_span5' variants={parallaxEffect}>
              {" "}
              <img
                src={image5}
                alt='React mastery at Project School'
                className='section2-image neon-flash short-circuit'
                width='400'
                height='230'
                loading='lazy'
              />
            </motion.div>{" "}
          </div>
        </motion.section>

        {/* <div className='parallax-cards-container'>
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className={`parallax-card ${card.className}`}
              initial={{
                opacity: 0,
                scale: 0.9,
                rotateY:
                  card.className === "card-left"
                    ? -10
                    : card.className === "card-right"
                    ? 10
                    : 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1],
                  delay: index * 0.05,
                },
              }}
              viewport={{ once: false, amount: 0.2, margin: "-100px" }}
              style={{
                transform: `translateY(${scrollY * card.scrollMultiplier}px)`,
              }}
            >
              <div className='card-content'>
                <div className='card-image'>
                  <img
                    className='section1-image'
                    src={card.image}
                    alt={card.alt}
                    loading='lazy'
                    width={card.width}
                    height={card.height}
                  />
                </div>
                <div className='card-text'>
                  <h2 className='card-title'>{card.title}</h2>
                  <p className='card-description'>{card.description}</p>
                  <ul className='card-list'>
                    {card.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className='card-buttons'>
                    {card.buttons.map((button, i) => (
                      <Link
                        key={i}
                        to={button.link}
                        className={`card-btn card-btn-${button.type}`}
                      >
                        <span className='card-btn-icon'>{button.icon}</span>
                        {button.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        <LearningPathSection isLoggedIn={isLoggedIn} />
        <div className='button-container'>
          <>
            <Link to='/guides' className='btn-16'>
              <span className='card-btn-icon'>📒</span>
              Learn React
            </Link>
            <Link to='/exercises' className='btn-16'>
              <span className='card-btn-icon'>🚀</span>
              Start Building
            </Link>
            <Link to='/interview' className='btn-16'>
              <span className='card-btn-icon'>💼</span>
              Prep for Interviews
            </Link>
          </>
        </div>
        <motion.div className='citate' variants={fadeInUp}>
          <h1 className='header-section ipsType_center'>
            💡 "Code is like humor. When you have to explain it, it's bad." –
            Cory House
          </h1>
        </motion.div>
        <motion.div className='citate' variants={fadeInUp}>
          <h1 className='header-section ipsType_center'>
            🤝 Need help?{" "}
            <Link
              to='/livechat'
              className='section1-chat'
              style={{
                background: "linear-gradient(135deg, #61dafb, #fb61d4)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                fontWeight: "bold",
                padding: "0.2rem 0.5rem",
                borderRadius: "5px",
                border: "1px solid rgba(97, 218, 251, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Chat with us live! 💬
            </Link>
          </h1>
        </motion.div>
      </main>
    </div>
  );
}

export default Section1;
