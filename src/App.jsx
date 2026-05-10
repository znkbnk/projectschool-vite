import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { useAuthContext } from "./Login/useAuthContext";
import ScrollToTopOnNavigation from "./components/ScrollToTopOnNavigation";
import { CookieProvider } from "./context/CookieProvider";
import CookiePopup from "./components/CookiePopup";
import {
  DefaultSkeleton,
  ExercisesSkeleton,
  InterviewSkeleton,
  GuidesSkeleton,
} from "./components/PageSkeletons";

// ============================================
// EAGER LOADS - Critical landing page only
// ============================================
import Welcome from "./components/Welcome";

// ============================================
// LAZY LOADS - Everything else
// ============================================
const Login = lazy(() => import("./Login/Login"));
const Signup = lazy(() => import("./Login/Signup"));
const FinishedTasks = lazy(() => import("./Progress/FinishedTasks"));
const LearningPathSection = lazy(
  () => import("./PathSection/LearningPathSection"),
);
const GuideAccessGate = lazy(() => import("./Exercises/GuideAccessGate"));
const Exercises = lazy(() => import("./Exercises/Exercises"));
const ReactLessons = lazy(() => import("./Exercises/ReactLessons"));
const ReactTasks = lazy(() => import("./Exercises/ReactTasks"));
const LiveChat = lazy(() => import("./Chat/LiveChat"));
const ResetPassword = lazy(() => import("./Login/ResetPassword"));
const ResetPasswordConfirm = lazy(() => import("./Login/ResetPasswordConfirm"));
const AuthActionHandler = lazy(() => import("./Login/AuthActionHandler"));
const VerifyEmail = lazy(() => import("./Login/VerifyEmail"));
const AuthorList = lazy(() => import("./Authors/AuthorList"));
const Faq = lazy(() => import("./components/Faq"));
const Pricing = lazy(() => import("./components/Pricing"));
const SubscriptionConfirmation = lazy(
  () => import("./components/SubscriptionConfirmation"),
);
const Terms = lazy(() => import("./components/Terms"));
const Privacy = lazy(() => import("./components/Privacy"));
const Success = lazy(() => import("./Stripe/Success"));
const Cancel = lazy(() => import("./Stripe/Cancel"));
const Articles = lazy(() => import("./Blog/Articles"));
const MobileMessage = lazy(() => import("./Exercises/MobileMessage"));
const LiveLessons = lazy(() => import("./Exercises/LiveLessons"));
const BlogCardList = lazy(() => import("./Blog/BlogCardList"));
const ReactExplained = lazy(() => import("./Blog/ReactExplained"));
const DevEssentials = lazy(() => import("./Blog/DevEssentials"));
const Interview = lazy(() => import("./Interview/Interview"));
const InterviewQuestions = lazy(() => import("./Interview/InterviewQuestions"));
const InterviewQuestionQuiz = lazy(
  () => import("./Interview/InterviewQuestionQuiz"),
);
const InterviewTasks = lazy(() => import("./Interview/InterviewTasks"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const InterviewCodeQuiz = lazy(() => import("./Interview/InterviewCodeQuiz"));
const InterviewCorrectCode = lazy(
  () => import("./Interview/InterviewCorrectCode"),
);
const RequireSubscription = lazy(
  () => import("./components/RequireSubscription"),
);
const WorkshopList = lazy(() => import("./Exercises/WorkshopList"));
const Guides = lazy(() => import("./Exercises/Guides"));
const MusicAcademy = lazy(() => import("./Exercises/MusicAcademy"));
const LiveEditor = lazy(() => import("./Exercises/LiveEditor"));
const Reference = lazy(() => import("./Reference/Reference"));
const WrongRoute = lazy(() => import("./components/WrongRoute"));
const NotFound = lazy(() => import("./components/NotFound"));
const UsestateGuide = lazy(() => import("./Exercises/UsestateGuide"));
const UseEffectGuide = lazy(() => import("./Exercises/UseEffectGuide"));
const UseContextGuide = lazy(() => import("./Exercises/UseContextGuide"));
const UseReducerGuide = lazy(() => import("./Exercises/UseReducerGuide"));
const CustomHooksGuide = lazy(() => import("./Exercises/CustomHooksGuide"));
const ReactRouterGuide = lazy(() => import("./Exercises/ReactRouterGuide"));
const DataFetchingGuide = lazy(() => import("./Exercises/DataFetchingGuide"));
const ReactPerformanceGuide = lazy(
  () => import("./Exercises/ReactPerformanceGuide"),
);
const StateManagemenGuide = lazy(
  () => import("./Exercises/StateManagemenGuide"),
);
const MernIntegrationGuide = lazy(
  () => import("./Exercises/MernIntegrationGuide"),
);
const ReactIntroGuide = lazy(() => import("./Exercises/ReactIntroGuide"));
const ReactTodoApp = lazy(() => import("./Exercises/ReactTodoApp"));
const ReactTodoApp2 = lazy(() => import("./Exercises/ReactTodoApp2"));
const JsToReactGuide = lazy(() => import("./Exercises/JsToReactGuide"));
const ReactForms = lazy(() => import("./Exercises/ReactForms"));
const StateEffetcGuide = lazy(() => import("./Exercises/StateEffetcGuide"));
const ComponentsPropsGuide = lazy(
  () => import("./Exercises/ComponentsPropsGuide"),
);
const Ecommerce = lazy(() => import("./Exercises/Ecommerce"));

const SmartFallback = () => {
  const location = useLocation();

  // Don't show skeleton for homepage - let the HTML content show through
  if (location.pathname === "/") return null;

  if (location.pathname.startsWith("/exercises")) return <ExercisesSkeleton />;
  if (location.pathname.startsWith("/interview")) return <InterviewSkeleton />;
  if (location.pathname.startsWith("/guides")) return <GuidesSkeleton />;

  return <DefaultSkeleton />;
};

// ============================================
// PREVIEW COMPONENTS (for crawlers)
// ============================================
const ExercisesPreview = () => (
  <div>
    <h1>React Exercises - ProjectSchool</h1>
    <p>
      Practice React with 60+ real-world projects with detailed steps, 500+
      practical tasks and exercises, and live projects built from real client
      requests.
    </p>
  </div>
);

const InterviewPreview = () => (
  <div>
    <h1>React Interview Prep - ProjectSchool</h1>
    <p>
      Prepare for React interviews with 5 unique methods: questions, tasks,
      quizzes, code challenges, and live projects.
    </p>
  </div>
);

const GuidesPreview = () => (
  <div>
    <h1>React Guides - ProjectSchool</h1>
    <p>
      Master React with 8 comprehensive guides on Introduction to React
      Programming, useState, useEffect, useContext, useReducer, React Router,
      Data Fetching, and more.
    </p>
  </div>
);

// ============================================
// HELPER FUNCTIONS
// ============================================
const isCrawler = () => {
  // During react-snap prerendering
  if (typeof window !== "undefined" && window.__PRERENDER__) {
    return true;
  }

  // Check for crawlers and Google's inspection/rendering tools
  if (typeof navigator !== "undefined") {
    const ua = navigator.userAgent.toLowerCase();
    return /googlebot|google-inspectiontool|chrome-lighthouse|apis-google|mediapartners-google|adsbot-google|bingbot|yahoo|duckduckbot|baiduspider|twitterbot|facebookexternalhit|linkedinbot|prerender|headlesschrome/i.test(
      ua,
    );
  }

  return false;
};

const getMetaData = (path) => {
  const baseUrl = "https://www.projectschool.dev";
  const cleanPath = path.split("?")[0];

  // ============================================
  // HANDLE DYNAMIC EXERCISE ROUTES
  // ============================================
  if (path.match(/^\/exercises\/[^/]+\/[^/]+$/)) {
    // Extract lesson type and task name from path
    const parts = path.split("/");
    const lessonType = parts[2]; // e.g., "React", "Live"
    const taskId = parts[3]; // e.g., "FAQ"

    const readableTitle = taskId
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return {
      title: `${readableTitle} | ${lessonType} Exercise | Project School`,
      description: `Build a ${readableTitle} project with React. Step-by-step instructions and solution code included.`,
      keywords: `react ${readableTitle.toLowerCase()}, react project, react exercise`,
      canonical: `${baseUrl}${cleanPath}`,
    };
  }
  // ============================================
  // BLOG POST METADATA (for dynamic routes)
  // ============================================
  const blogMeta = {
    "How-to-create-Authentication-Guard-Component": {
      title: "How to Create an Authentication Guard Component in React",
      description:
        "Learn to build a reusable auth guard component in React to protect routes and manage user access with clean, maintainable code.",
      keywords:
        "react auth guard, protected routes react, react authentication, route protection",
    },
    "InsightTrack-Empowering-Your-Digital-Presence": {
      title: "InsightTrack: Empowering Your Digital Presence",
      description:
        "Discover InsightTrack and learn how to build analytics tools that empower your digital presence with React.",
      keywords:
        "react analytics, digital presence, insighttrack, react dashboard",
    },
    "Mastering-Javascript-Pagination": {
      title: "Mastering JavaScript Pagination | Complete Guide",
      description:
        "Learn to implement efficient pagination in JavaScript and React. Handle large datasets with client-side and server-side pagination techniques.",
      keywords:
        "javascript pagination, react pagination, paginate data, pagination tutorial",
    },
    "Going-Live-with-Stripe-in-Your-React-Project": {
      title: "Going Live with Stripe in Your React Project",
      description:
        "Step-by-step guide to taking your Stripe integration from test to production mode in React. Webhooks, live keys, and deployment checklist.",
      keywords:
        "stripe live mode, react stripe production, stripe deployment, payment processing",
    },
    "Guide-to-Implementing-Git-in-Visual-Studio-Code": {
      title: "Guide to Implementing Git in Visual Studio Code",
      description:
        "Master Git version control directly in VS Code. Learn commits, branches, merges, and GitHub integration with practical examples.",
      keywords:
        "git vscode, version control, git tutorial, github vscode, git for beginners",
    },
    "eaddrinuse-error": {
      title: "How to Fix EADDRINUSE Error in Node.js",
      description:
        "Quick solutions to fix the EADDRINUSE port already in use error in Node.js. Find and kill processes blocking your port.",
      keywords:
        "EADDRINUSE, port in use, node error, kill port, nodejs troubleshooting",
    },
    "How-to-Run-a-React-Frontend-and-NodeJS-Backend-Simultaneously-with-One-Command":
      {
        title: "Run React Frontend & Node.js Backend with One Command",
        description:
          "Set up concurrent development servers for React and Node.js using npm-run-all or concurrently. Streamline your full-stack workflow.",
        keywords:
          "react node concurrent, npm run all, concurrently, full stack development",
      },
    "How-to-Test-Webhooks-Using-Stripe-CLI": {
      title: "How to Test Webhooks Using Stripe CLI",
      description:
        "Learn to test Stripe webhooks locally using the Stripe CLI. Forward events, debug payments, and build reliable webhook handlers.",
      keywords:
        "stripe cli, test webhooks, stripe webhooks local, stripe testing",
    },
    "A-Comprehensive-Guide-to-PropTypes-in-React": {
      title: "A Comprehensive Guide to PropTypes in React",
      description:
        "Master PropTypes for type checking in React components. Learn validation patterns, custom validators, and when to use TypeScript instead.",
      keywords:
        "react proptypes, type checking react, prop validation, react components",
    },
    "The-End-of-Create-React-App-and-What-to-Use-Next": {
      title: "The End of Create React App: What to Use Next",
      description:
        "Create React App is deprecated. Explore modern alternatives like Vite, Next.js, and Rspack for starting new React projects in 2025.",
      keywords:
        "create react app deprecated, vite react, nextjs, rspack, react starter",
    },
    "Building-a-ChatGPT-Powered-React-App-with-Rspack": {
      title: "Building a ChatGPT-Powered React App with Rspack",
      description:
        "Build an AI chatbot in React using the OpenAI API and Rspack. Complete tutorial with streaming responses and modern tooling.",
      keywords:
        "chatgpt react, openai api react, rspack tutorial, ai chatbot react",
    },
    "Setting-Up-Stripe-Payments-in-React-The-Ultimate-Guide": {
      title: "Setting Up Stripe Payments in React: The Ultimate Guide",
      description:
        "Complete guide to integrating Stripe payments in React. Payment intents, checkout sessions, webhooks, and error handling explained.",
      keywords:
        "stripe react, payment integration, stripe checkout, react payments",
    },
    "How-to-Go-Live-with-Your-Chrome-Extension-Using-React-and-Rspack": {
      title: "Go Live with Your Chrome Extension Using React & Rspack",
      description:
        "Publish your React Chrome extension to the Chrome Web Store. Build configuration, manifest setup, and submission process explained.",
      keywords:
        "chrome extension react, publish chrome extension, rspack extension, browser extension",
    },
    "React-Interview-Guide-2025-Part-1": {
      title: "React Interview Guide 2025: Part 1",
      description:
        "Prepare for React interviews in 2025 with essential questions on hooks, state management, performance optimization, and best practices.",
      keywords:
        "react interview 2025, react interview questions, frontend interview, react job prep",
    },
    "file-uploads-in-react-with-nodejs-and-multer": {
      title: "File Uploads in React with Node.js and Multer",
      description:
        "Learn how to implement file uploads in React with a Node.js backend using Multer. Handle single and multiple files, validation, and progress tracking.",
      keywords:
        "react file upload, multer nodejs, file upload tutorial, react nodejs upload, multipart form data",
    },
    "react-context-api-vs-zustand-when-to-use-what": {
      title: "React Context API vs Zustand: When to Use What",
      description:
        "Compare React Context API and Zustand for state management. Learn when to use each, their pros and cons, and best practices for scalable React apps.",
      keywords:
        "react context vs zustand, zustand tutorial, react state management, context api, zustand react",
    },
    "react-error-boundaries-graceful-failure-handling": {
      title: "React Error Boundaries: Graceful Failure Handling",
      description:
        "Master React Error Boundaries to catch JavaScript errors in components. Build resilient UIs with fallback components and error logging.",
      keywords:
        "react error boundaries, error handling react, componentDidCatch, fallback ui, react error logging",
    },
    "deploying-a-mern-stack-app-netlify-render-mongodb-atlas": {
      title: "Deploying a MERN Stack App: Netlify + Render + MongoDB Atlas",
      description:
        "Complete guide to deploying MERN stack apps. Set up MongoDB Atlas, deploy Express to Render, React to Netlify, and fix common issues like CORS and cold starts.",
      keywords:
        "mern stack deployment, deploy react netlify, deploy express render, mongodb atlas setup, mern production, cors errors fix",
    },
    "building-a-chatgpt-powered-support-widget-in-react": {
      title: "Building a ChatGPT-Powered Support Widget in React",
      description:
        "Learn how to embed an AI-powered support assistant into any React app using the OpenAI API. Build inline chat and floating widgets with a secure Node.js backend.",
      keywords:
        "chatgpt react widget, openai support chat, react ai chatbot, chatgpt api react, ai support widget, nodejs openai proxy",
    },
    "generating-images-with-ai-in-react-using-fal-ai": {
      title: "Generating Images with AI in React using the fal.ai API",
      description:
        "Integrate fal.ai image generation into React. Learn async job queuing, secure API key handling with a backend proxy, and build a prompt-to-image generator with gallery.",
      keywords:
        "fal.ai react, ai image generation, react image generator, fal-ai api, text to image react, ai art generator react",
    },
    "react-supabase-build-a-full-stack-app-without-a-custom-backend": {
      title:
        "React + Supabase: Build a Full-Stack App Without a Custom Backend",
      description:
        "Build full-stack React apps with Supabase. Learn authentication, real-time Postgres, Row Level Security, and file storage without writing Express routes.",
      keywords:
        "react supabase, supabase tutorial, supabase vs firebase, react backend alternative, supabase auth, real-time database react",
    },
  };

  // ============================================
  // HANDLE DYNAMIC BLOG ROUTES
  // ============================================
  if (path.startsWith("/blogs/devessentials/")) {
    const slug = path.replace("/blogs/devessentials/", "");

    const matchedKey = Object.keys(blogMeta).find(
      (key) => key === slug || key.toLowerCase() === slug.toLowerCase(),
    );

    if (matchedKey && blogMeta[matchedKey]) {
      return {
        title: `${blogMeta[matchedKey].title} | Project School`,
        description: blogMeta[matchedKey].description,
        keywords: blogMeta[matchedKey].keywords,
        canonical: `${baseUrl}/blogs/devessentials/${matchedKey}`, // Use the exact key casing
      };
    }

    if (blogMeta[slug]) {
      return {
        title: `${blogMeta[slug].title} | Project School`,
        description: blogMeta[slug].description,
        keywords: blogMeta[slug].keywords,
        canonical: `${baseUrl}${path}`,
      };
    }

    // Fallback for new blog posts not yet in blogMeta
    const readableTitle = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return {
      title: `${readableTitle} | Project School`,
      description: `Learn about ${readableTitle.toLowerCase()} with practical examples and step-by-step guidance.`,
      keywords: `${readableTitle.toLowerCase()}, react tutorial, web development`,
      canonical: `${baseUrl}${path}`,
    };
  }

  // ============================================
  // STATIC ROUTE METADATA
  // ============================================
  const meta = {
    // MAIN PAGES

    "/": {
      title: "Learn React by Building Projects | Project School",
      description:
        "Master React by building 60+ real projects. Learn hooks, routing, APIs, and full-stack development through hands-on practice, not passive videos.",
      keywords:
        "learn react, react tutorial, react projects, react course, react hooks, learn react online",
    },
    "/pricing": {
      title: "Pricing | Project School - Learn React Free",
      description:
        "Access all React guides, projects, and exercises free. Pay only for solution code when you need it. £14.99/month or £100/year.",
      keywords:
        "react course pricing, learn react free, project school subscription",
    },
    "/faq": {
      title: "FAQ | Project School",
      description:
        "Frequently asked questions about Project School. Learn about our React courses, subscription, and hands-on learning approach.",
      keywords: "project school faq, react course questions, learning react",
    },
    "/terms": {
      title: "Terms of Service | Project School",
      description:
        "Terms of service for Project School. Read our policies on subscriptions, content usage, and user responsibilities.",
      keywords: "terms of service, project school terms, legal",
    },
    "/privacy": {
      title: "Privacy Policy | Project School",
      description:
        "Privacy policy for Project School. Learn how we handle your data, cookies, and protect your information.",
      keywords: "privacy policy, data protection, project school privacy",
    },
    "/login": {
      title: "Login | Project School",
      description:
        "Log in to Project School to continue learning React with 60+ projects, 8 guides, and 400+ hands-on exercises.",
      keywords: "project school login, learn react, sign in",
      noindex: true,
    },
    "/signup": {
      title: "Sign Up Free | Project School",
      description:
        "Create a free Project School account. Start learning React with 60+ projects, comprehensive guides, and hands-on practice.",
      keywords: "project school signup, learn react free, create account",
    },

    // EXERCISES SECTION
    "/exercises": {
      title: "React Exercises & Projects | Project School",
      description:
        "Choose your React learning path: 60+ practice projects with steps, real freelancer builds, or follow-along workshops.",
      keywords:
        "react exercises, react projects, react practice, learn react coding",
    },
    "/exercises/reactlessons": {
      title: "60+ React Practice Projects | Project School",
      description:
        "Build 60+ React projects from beginner to advanced. Each project includes detailed steps, hints, and solution code.",
      keywords:
        "react projects, react practice, beginner react, advanced react projects",
    },
    "/exercises/livelessons": {
      title: "21 Real Freelancer React Projects | Project School",
      description:
        "Build production-ready React apps from real client requests. Firebase, Stripe, MERN stack, and authentication included.",
      keywords:
        "react freelancer projects, real react projects, firebase react, mern stack",
    },
    "/exercises/workshoplist": {
      title: "React Live Coding Workshops | Project School",
      description:
        "Watch full React projects built from scratch. Follow along as I code, debug, and explain best practices in real-time.",
      keywords:
        "react workshop, react live coding, react tutorial video, build react app",
    },
    "/exercises/musicacademy": {
      title: "Build a Music Academy App | MERN Stack Project",
      description:
        "Build a complete music academy with React and Node.js. Student booking, Stripe payments, Socket.io messaging, and admin dashboard.",
      keywords:
        "mern stack project, react music app, full stack react, stripe integration",
    },
    "/exercises/ecommerce": {
      title: "Build an E-Commerce Store | Full Stack React Project",
      description:
        "Create a complete e-commerce store with React. Shopping cart, checkout, Stripe payments, order management, and admin dashboard.",
      keywords:
        "react ecommerce, react shopping cart, full stack react, stripe checkout",
    },

    // GUIDES SECTION
    "/guides": {
      title: "React Guides | 8 Topics & 400+ Exercises | Project School",
      description:
        "Master React fundamentals with 8 comprehensive guides. Learn useState, useEffect, useContext, routing, and data fetching step-by-step.",
      keywords:
        "react guides, react tutorial, react hooks guide, learn react basics",
    },
    "/guides/reactintro": {
      title: "Introduction to React Programming | Project School",
      description:
        "Start your React journey here. Learn components, JSX, props, and how React works under the hood with practical examples.",
      keywords:
        "react introduction, react basics, learn react, jsx tutorial, react components",
    },
    "/guides/reacttodo": {
      title: "Introduction to React Programming | Project School",
      description:
        "Start your React journey here. Learn components, JSX, props, and how React works under the hood with practical examples.",
      keywords:
        "react introduction, react basics, learn react, jsx tutorial, react components",
    },
    "/guides/jstoreact": {
      title: "From JavaScript to React: Your First Steps | Project School",
      description:
        "Bridge your JavaScript knowledge to React. Refresh key JS concepts used in React, understand the shift from vanilla JS, set up your first project, create components with JSX, and build a mini app — the ideal guide to start your React journey.",
      keywords:
        "javascript to react, react for js developers, learn react from javascript, jsx basics, react components, react setup, vanilla js vs react",
    },
    "/guides/componentsprops": {
      title: "Master React Components & Props | Project School",
      description:
        "Dive deep into React components and props. Learn syntax, rules, common pitfalls, and build progressive examples from simple cards to full form libraries — the comprehensive guide to creating reusable, maintainable React UIs.",
      keywords:
        "react components, react props, react composition, conditional rendering in react, react lists, callback props, reusable react components",
    },
    "/guides/reactforms": {
      title: "Introduction to React Programming | Project School",
      description:
        "Start your React journey here. Learn components, JSX, props, and how React works under the hood with practical examples.",
      keywords:
        "react introduction, react basics, learn react, jsx tutorial, react components",
    },
    "/guides/usestate": {
      title: "React useState Hook | Complete Guide with Exercises",
      description:
        "Master useState for state management in React. Learn primitives, objects, arrays, and common patterns with 50+ exercises.",
      keywords:
        "usestate react, react state, state management, usestate tutorial",
    },
    "/guides/useeffect": {
      title: "React useEffect Hook | Side Effects & Lifecycle Guide",
      description:
        "Learn useEffect for side effects in React. Data fetching, subscriptions, cleanup functions, and dependency arrays explained.",
      keywords:
        "useeffect react, react side effects, useeffect tutorial, react lifecycle",
    },
    "/guides/stateeffect": {
      title: "Combining useState & useEffect | React Patterns Guide",
      description:
        "Master the interplay between useState and useEffect. Build real features that combine state management with side effects.",
      keywords:
        "usestate useeffect, react hooks combined, react patterns, state and effects",
    },
    "/guides/usecontext": {
      title: "React useContext Hook | Global State Management Guide",
      description:
        "Learn useContext for sharing state across components. Avoid prop drilling and build scalable React applications.",
      keywords:
        "usecontext react, react context api, global state react, avoid prop drilling",
    },
    "/guides/usereducer": {
      title: "React useReducer Hook | Complex State Management Guide",
      description:
        "Master useReducer for complex state logic. Learn actions, reducers, and when to choose useReducer over useState.",
      keywords:
        "usereducer react, react reducer, complex state, state management patterns",
    },
    "/guides/customhooks": {
      title: "Master React Custom Hooks | Project School",
      description:
        "Learn to create custom React hooks for reusable stateful logic. From simple wrappers like useToggle to advanced compositions with useFetch, useDebounce, and useForm — the essential guide covering theory, rules, pitfalls, and 7 hands-on examples.",
      keywords:
        "react custom hooks, create custom hook, react hook composition, useToggle, useLocalStorage, useFetch, useDebounce, useMediaQuery, useForm, react hook rules",
    },
    "/guides/reactrouter": {
      title: "React Router Guide | Navigation & Routing Tutorial",
      description:
        "Build single-page app navigation with React Router. Routes, parameters, nested routes, and protected routes explained.",
      keywords:
        "react router, react navigation, spa routing, protected routes react",
    },
    "/guides/datafetching": {
      title: "React Data Fetching | APIs & Async Guide",
      description:
        "Master data fetching in React with fetch, axios, and async/await. Handle loading states, errors, and implement caching.",
      keywords:
        "react data fetching, react api calls, fetch react, axios react tutorial",
    },
    "/guides/reactoptimisation": {
      title: "Master React Re-renders & Optimization | Project School",
      description:
        "Explore React re-renders, optimization rules, and tools like React.memo, useMemo, useCallback. Avoid pitfalls and apply techniques in 7 hands-on examples from render tracking to full app audits — the essential guide for performant React development.",
      keywords:
        "react optimization, react re-renders, react.memo, useMemo, useCallback, react performance, optimize react components, react context optimization",
    },
    "/guides/reactstatemanagement": {
      title: "Master React State Management | Project School",
      description:
        "Comprehensive exploration of React state management. Learn types of state, decision frameworks, pitfalls, and compare approaches like useState, useReducer, lifting state, useContext, and Zustand through hands-on examples — the guide to scalable state handling.",
      keywords:
        "react state management, useState, useReducer, useContext, lifting state, zustand, react global state, react shared state",
    },
    "/guides/mernstack": {
      title: "Master MERN Stack Development | Project School",
      description:
        "Learn MERN stack through architecture, CORS setup, pitfalls, and 7 progressive examples: from Express APIs and React integration to MongoDB, authentication, file uploads, and a full MERN app — the essential guide for full-stack React development.",
      keywords:
        "mern stack, react express, mongodb mongoose, jwt authentication, file uploads multer, full stack react, crud operations react",
    },

    // INTERVIEW SECTION
    "/interview": {
      title: "React Interview Prep | 265+ Questions & Challenges",
      description:
        "Prepare for React interviews with 265+ questions from real companies. Theory, coding challenges, quizzes, and live tasks.",
      keywords:
        "react interview, react interview questions, frontend interview prep, react job",
    },
    "/interview/interview-questions": {
      title: "React Interview Questions | Theory & Concepts",
      description:
        "Study 100+ React interview questions covering hooks, state management, performance, and architecture. Detailed explanations included.",
      keywords:
        "react interview questions, react theory, react concepts, interview prep",
    },
    "/interview/interview-tasks": {
      title: "React Interview Coding Tasks | Practical Challenges",
      description:
        "Practice React interview coding tasks. Build components, implement features, and solve problems asked by real companies.",
      keywords:
        "react coding interview, react tasks, interview coding challenge, react practice",
    },
    "/interview/interview-code-quiz": {
      title: "React Code Quiz | Test Your Knowledge",
      description:
        "Test your React knowledge with interactive code quizzes. Debug code, predict outputs, and identify errors in real scenarios.",
      keywords:
        "react quiz, react code quiz, test react knowledge, react assessment",
    },

    // BLOGS SECTION
    "/blogs": {
      title: "React Articles & Tutorials | Project School Blog",
      description:
        "In-depth React articles on development tools, best practices, and common questions. Guides for developers at all levels.",
      keywords:
        "react blog, react articles, react tutorials, web development blog",
    },
    "/blogs/devessentials": {
      title: "Dev Essentials | React Guides & Tools | Project School",
      description:
        "Essential guides on React development tools and techniques. Stripe, Git, deployment, debugging, and more explained step-by-step.",
      keywords:
        "react dev tools, development guides, react tutorials, dev essentials",
    },
    "/blogs/reactexplained": {
      title: "React Explained | Common Questions Answered",
      description:
        "Clear answers to common React questions. React vs React Native, hooks explained, component patterns, and more.",
      keywords:
        "react explained, react faq, react questions answered, learn react",
    },
    // RESET PASSWORD AND LIVECHAT
    "/resetPassword": {
      title: "Reset Password | Project School",
      description: "Reset your Project School password.",
      keywords: "reset password",
      noindex: true,
    },
    "/livechat": {
      title: "Live Chat | Project School",
      description: "Live chat support.",
      keywords: "live chat",
      noindex: true,
    },
  };

  // Return matching meta or default
  const data = meta[path] || {
    title: "Learn React by Building Projects | Project School",
    description:
      "Master React by building 60+ real projects. Learn hooks, routing, APIs, and full-stack development through hands-on practice.",
    keywords: "learn react, react tutorial, react projects, react course",
  };

  return {
    ...data,
    canonical: `${baseUrl}${cleanPath === "/" ? "" : cleanPath}`,
  };
};

// ============================================
// PROTECTED ROUTE WRAPPER
// ============================================
const ProtectedRouteWrapper = ({ children, isLoggedIn, isAdmin }) => (
  <ProtectedRoute isLoggedIn={isLoggedIn || isAdmin}>{children}</ProtectedRoute>
);

// ============================================
// MAIN APP
// ============================================
const App = () => {
  const { isLoggedIn, isAdmin, isLoading } = useAuthContext();
  const location = useLocation();
  const { title, description, canonical, keywords } = getMetaData(
    location.pathname,
  );

  // Only show loading state for non-homepage routes
  // Homepage renders immediately with its own content
  if (isLoading && location.pathname !== "/") {
    return <SmartFallback />;
  }

  return (
    <div>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar />
      <ScrollToTopOnNavigation />
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='canonical' href={canonical} />
        {(location.pathname.startsWith("/login") ||
          location.pathname.startsWith("/resetPassword") ||
          location.pathname.startsWith("/livechat") ||
          location.pathname.match(/^\/exercises\/[^/]+\/[^/]+$/)) && (
          <meta name='robots' content='noindex, nofollow' />
        )}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={canonical} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Project School' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
      </Helmet>

      <Suspense fallback={<SmartFallback />}>
        <Routes>
          {/* PUBLIC - EAGER LOADED (renders immediately, no suspense) */}
          <Route path='/' element={<Welcome />} />
          <Route
            path='/login'
            element={
              isLoggedIn ? (
                <Navigate
                  to={
                    new URLSearchParams(window.location.search).get(
                      "redirect",
                    ) || "/"
                  }
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path='/signup'
            element={isLoggedIn ? <Navigate to='/' /> : <Signup />}
          />

          {/* PUBLIC - LAZY LOADED */}
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/progress' element={<LearningPathSection />} />
          <Route path='/finished-tasks' element={<FinishedTasks />} />
          <Route path='/confirmation' element={<SubscriptionConfirmation />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route
            path='/reset-password-confirm'
            element={<ResetPasswordConfirm />}
          />
          <Route path='/auth-action-handler' element={<AuthActionHandler />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='/notavailable' element={<NotFound />} />

          {/* BLOGS */}
          <Route path='/blogs' element={<BlogCardList />} />
          <Route path='/blogs/devessentials' element={<DevEssentials />} />
          <Route path='/blogs/devessentials/:id' element={<Articles />} />
          <Route path='/blogs/reactexplained' element={<ReactExplained />} />

          {/* GUIDES */}
          {/* GUIDES */}
          <Route
            path='/guides'
            element={isCrawler() ? <GuidesPreview /> : <Guides />}
          />

          {/* FREE GUIDES — no gate */}
          <Route path='/guides/jstoreact' element={<JsToReactGuide />} />
          <Route path='/guides/reactintro' element={<ReactIntroGuide />} />
          <Route
            path='/guides/componentsprops'
            element={<ComponentsPropsGuide />}
          />
          <Route path='/guides/reacttodo' element={<ReactTodoApp />} />
          <Route path='/guides/usestate' element={<UsestateGuide />} />
          <Route path='/guides/useeffect' element={<UseEffectGuide />} />

          {/* PREMIUM GUIDES — wrapped in GuideAccessGate */}

          <Route
            path='/guides/stateeffect'
            element={
              <GuideAccessGate slug='stateeffect'>
                <StateEffetcGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/reactforms'
            element={
              <GuideAccessGate slug='reactforms'>
                <ReactForms />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/usecontext'
            element={
              <GuideAccessGate slug='usecontext'>
                <UseContextGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/reacttodo2'
            element={
              <GuideAccessGate slug='reacttodo2'>
                <ReactTodoApp2 />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/usereducer'
            element={
              <GuideAccessGate slug='usereducer'>
                <UseReducerGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/customhooks'
            element={
              <GuideAccessGate slug='customhooks'>
                <CustomHooksGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/reactrouter'
            element={
              <GuideAccessGate slug='reactrouter'>
                <ReactRouterGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/datafetching'
            element={
              <GuideAccessGate slug='datafetching'>
                <DataFetchingGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/reactoptimisation'
            element={
              <GuideAccessGate slug='reactoptimisation'>
                <ReactPerformanceGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/reactstatemanagement'
            element={
              <GuideAccessGate slug='reactstatemanagement'>
                <StateManagemenGuide />
              </GuideAccessGate>
            }
          />
          <Route
            path='/guides/mernstack'
            element={
              <GuideAccessGate slug='mernstack'>
                <MernIntegrationGuide />
              </GuideAccessGate>
            }
          />

          {/* EXERCISES */}
          <Route
            path='/exercises'
            element={isCrawler() ? <ExercisesPreview /> : <Exercises />}
          />
          <Route path='/exercises/reactlessons' element={<ReactLessons />} />
          <Route path='/exercises/reacttasks' element={<ReactTasks />} />
          <Route path='/exercises/livelessons' element={<LiveLessons />} />
          <Route path='/exercises/musicacademy' element={<MusicAcademy />} />
          <Route path='/exercises/ecommerce' element={<Ecommerce />} />
          <Route path='/exercises/workshoplist' element={<WorkshopList />} />
          <Route
            path='/exercises/:lessonType/:taskId'
            element={<LiveEditor />}
          />

          {/* INTERVIEW - PROTECTED */}
          <Route
            path='/interview'
            element={
              isCrawler() ? (
                <InterviewPreview />
              ) : (
                <ProtectedRouteWrapper
                  isLoggedIn={isLoggedIn}
                  isAdmin={isAdmin}
                >
                  <Interview />
                </ProtectedRouteWrapper>
              )
            }
          />
          <Route
            path='/interview/interview-questions'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewQuestions />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/interview-tasks'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <RequireSubscription redirectTo='/interview'>
                  <InterviewTasks />
                </RequireSubscription>
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/interview-quiz'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewQuestionQuiz />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/interview-quiz/:slug'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewQuestionQuiz />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/interview-code-quiz'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <RequireSubscription redirectTo='/interview'>
                  <InterviewCodeQuiz />
                </RequireSubscription>
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/interview-correct-code'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <RequireSubscription redirectTo='/interview'>
                  <InterviewCorrectCode />
                </RequireSubscription>
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/interview-correct-code/:slug'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <RequireSubscription redirectTo='/interview'>
                  <InterviewCorrectCode />
                </RequireSubscription>
              </ProtectedRouteWrapper>
            }
          />

          {/* OTHER PROTECTED */}
          <Route
            path='/livechat'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <LiveChat />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/reference'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <Reference />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/authors'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <AuthorList />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/success'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <Success />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/cancel'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <Cancel />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/mobile-message'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <MobileMessage />
              </ProtectedRouteWrapper>
            }
          />

          {/* 404 */}
          <Route path='*' element={<WrongRoute />} />
        </Routes>
      </Suspense>
      <CookiePopup />
    </div>
  );
};

// ============================================
// ERROR BOUNDARY
// ============================================
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}

const AppWithErrorBoundary = () => (
  <ErrorBoundary>
    <CookieProvider>
      <App />
    </CookieProvider>
  </ErrorBoundary>
);

export default AppWithErrorBoundary;
