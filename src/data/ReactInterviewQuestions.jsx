// InterviewQuestionsCardsData.js

const ReactInterviewQuestions = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components.",
    meta: {
      seoTitle: "What is React? | Learn React Fundamentals",
      seoDescription:
        "Understand what React is and how it is used to build user interfaces in modern web development. React allows for reusable components and efficient rendering.",
      seoKeywords: [
        "React",
        "JavaScript",
        "UI components",
        "single-page applications",
      ],
    },
  },
  {
    question: "What are the main features of React?",
    answer:
      "Key features include a virtual DOM for efficient rendering, unidirectional data flow, component-based architecture, and support for declarative UI creation.",
    meta: {
      seoTitle: "Main Features of React | React Features Explained",
      seoDescription:
        "Explore the main features of React, including virtual DOM, unidirectional data flow, and component-based architecture.",
      seoKeywords: [
        "React features",
        "virtual DOM",
        "data flow",
        "component-based architecture",
      ],
    },
  },
  {
    question: "What are functional components?",
    answer:
      "Functional components are simple JavaScript functions that return React elements. They can use hooks to manage state and lifecycle methods.",
    meta: {
      seoTitle: "What are Functional Components in React? | React Basics",
      seoDescription:
        "Learn about functional components in React, how they simplify component creation, and how hooks allow them to manage state and lifecycle.",
      seoKeywords: [
        "functional components",
        "React hooks",
        "state management",
        "React lifecycle",
      ],
    },
  },
  {
    question: "What are class components?",
    answer:
      "Class components are ES6 classes that extend React's Component class. They include lifecycle methods and manage state using this.state.",
    meta: {
      seoTitle: "What are Class Components in React? | React Components",
      seoDescription:
        "Class components in React are ES6 classes that manage state and lifecycle methods, providing more advanced functionality.",
      seoKeywords: [
        "class components",
        "React",
        "ES6 classes",
        "React lifecycle",
      ],
    },
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML and allows you to write HTML-like syntax within JavaScript. It is then compiled into regular JavaScript.",
    meta: {
      seoTitle: "What is JSX? | JSX in React Explained",
      seoDescription:
        "JSX lets you write HTML-like syntax inside JavaScript, making React code more readable and easier to write. Learn how JSX works.",
      seoKeywords: ["JSX", "JavaScript XML", "React", "HTML-like syntax"],
    },
  },
  {
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the real DOM that React uses to determine which parts of the UI need updating.",
    meta: {
      seoTitle: "What is the Virtual DOM in React? | React Optimization",
      seoDescription:
        "Learn about the virtual DOM in React and how it improves performance by minimizing direct manipulation of the real DOM.",
      seoKeywords: ["virtual DOM", "React", "DOM optimization", "UI updates"],
    },
  },
  {
    question: "What are props in React?",
    answer:
      "Props are short for properties and are used to pass data from a parent component to a child component. They are read-only.",
    meta: {
      seoTitle: "What are Props in React? | Passing Data Between Components",
      seoDescription:
        "In React, props allow you to pass data from parent to child components. Learn how props work and how to use them in your React apps.",
      seoKeywords: [
        "React props",
        "data passing",
        "React components",
        "parent-child communication",
      ],
    },
  },
  {
    question: "What is state in React?",
    answer:
      "State is a built-in object in components that holds data that can change over time, driving re-renders of the UI.",
    meta: {
      seoTitle: "What is State in React? | React State Management",
      seoDescription:
        "State in React manages data that changes over time and triggers re-renders. Understand how state works in React components.",
      seoKeywords: [
        "React state",
        "state management",
        "React components",
        "UI re-renders",
      ],
    },
  },
  {
    question: "What are hooks in React?",
    answer:
      "Hooks are functions introduced in React 16.8 that allow functional components to manage state and lifecycle methods.",
    meta: {
      seoTitle:
        "What are React Hooks? | Managing State and Lifecycle in Functional Components",
      seoDescription:
        "React hooks enable functional components to manage state and lifecycle methods, making them more powerful and reusable.",
      seoKeywords: [
        "React hooks",
        "state management",
        "lifecycle methods",
        "functional components",
      ],
    },
  },
  {
    question: "What is the purpose of useState?",
    answer:
      "The useState hook is used to add state to functional components, allowing them to store and update data dynamically.",
    meta: {
      seoTitle:
        "What is useState in React? | Managing State in Functional Components",
      seoDescription:
        "The useState hook adds state to functional components, enabling dynamic data updates in your React applications.",
      seoKeywords: [
        "useState",
        "React hooks",
        "state management",
        "functional components",
      ],
    },
  },
  {
    question: "What is the useEffect hook in React?",
    answer:
      "The useEffect hook in React is used to handle side effects like data fetching, DOM manipulation, or setting up subscriptions within functional components, making it an essential tool for managing component lifecycle behaviors.",
    seoMeta: {
      seoTitle: "What is the useEffect Hook in React? | Learn React Effects",
      seoDescription:
        "Discover how the useEffect hook in React is used to handle side effects such as data fetching and DOM manipulation within functional components.",
      seoKeywords: [
        "useEffect",
        "React hook",
        "side effects",
        "React data fetching",
        "React DOM manipulation",
        "functional components",
      ],
    },
  },
  {
    question: "What is the difference between state and props in React?",
    answer:
      "In React, state refers to a mutable data structure managed within a component, which can change over time, while props are immutable properties passed down from a parent component to a child, helping facilitate component communication.",
    seoMeta: {
      seoTitle: "State vs Props in React: Key Differences Explained",
      seoDescription:
        "Learn the key differences between state and props in React, and understand how they affect component communication and data flow in React applications.",
        seoKeywords: [
          "state vs props", 
          "React state", 
          "React props", 
          "React component communication", 
          "React data flow"
        ],
        
    },
  },
  {
    question: "What does lifting state up mean in React?",
    answer:
      "Lifting state up in React means moving shared state to the nearest common ancestor of components that need access to it, enabling better state management and data flow between sibling components.",
    seoMeta: {
      seoTitle:
        "What is Lifting State Up in React? | Manage React State Efficiently",
      seoDescription:
        "Learn about lifting state up in React, a technique to improve state management and facilitate data sharing between sibling components.",
        seoKeywords: [
          "lifting state up", 
          "React state management", 
          "React component data sharing", 
          "React state flow"
        ],
        
    },
  },
  {
    question: "What is a controlled component in React?",
    answer:
      "A controlled component in React is a form element whose value is managed by React's state, ensuring the UI is always in sync with the state and offering greater control over form behavior.",
    seoMeta: {
      seoTitle:
        "What is a Controlled Component in React? | React Form Handling",
      seoDescription:
        "Understand what controlled components are in React and how they offer better control over form elements by syncing their value with the component state.",
        seoKeywords: [
          "controlled component", 
          "React form", 
          "React state", 
          "React input handling"
        ],
        
    },
  },
  {
    question: "What is an uncontrolled component in React?",
    answer:
      "An uncontrolled component in React is a form element that manages its own state internally, using refs to directly interact with the DOM without React controlling the value.",
    seoMeta: {
      seoTitle:
        "What is an Uncontrolled Component in React? | React Form Basics",
      seoDescription:
        "Learn about uncontrolled components in React, where form elements manage their own state internally without React's direct control over their values.",
        seoKeywords: [
          "uncontrolled component", 
          "React form", 
          "React refs", 
          "React input behavior"
        ],
        
    },
  },
  {
    question: "What is React Router and how does it work?",
    answer:
      "React Router is a library that enables routing in React applications, allowing developers to create dynamic navigation and switch between different views or pages based on URL changes, improving user experience.",
    seoMeta: {
      seoTitle: "What is React Router? | Dynamic Navigation in React Apps",
      seoDescription:
        "Discover how React Router allows for dynamic navigation and routing in React applications, enhancing the user experience with page transitions.",
        seoKeywords: [
          "React Router", 
          "React navigation", 
          "React routing", 
          "dynamic page transitions", 
          "React SPA"
        ],
        
    },
  },
  {
    question: "What is Redux?",
    answer:
      "Redux is a state management library that centralizes the application's state in a single store and uses actions to modify it, making state predictable and easier to debug in large applications.",
    seoMeta: {
      seoTitle: "What is Redux? | Centralized State Management in React",
      seoDescription:
        "Learn about Redux, a state management library that centralizes application state in a single store, making state predictable and improving debugging in React apps.",
        seoKeywords: [
          "Redux", 
          "state management", 
          "React Redux", 
          "centralized store", 
          "React debugging"
        ],
        
    },
  },
  {
    question: "What is a React lifecycle method?",
    answer:
      "Lifecycle methods are special functions in class components that run during different stages of a component's existence, such as mounting, updating, and unmounting.",
    seoMeta: {
      seoTitle: "What are React Lifecycle Methods? | Class Component Lifecycle",
      seoDescription:
        "Understand React lifecycle methods and how they are used to manage the behavior of class components during different lifecycle stages, including mounting, updating, and unmounting.",
        seoKeywords: [
          "React lifecycle methods", 
          "React class component", 
          "React mounting", 
          "React updating", 
          "React unmounting"
        ],
        
    },
  },
  {
    question: "What are pure components in React?",
    answer:
      "Pure components are components that avoid re-rendering if their props and state have not changed, improving performance by reducing unnecessary renders.",
    seoMeta: {
      seoTitle:
        "What are Pure Components in React? | Optimize React Performance",
      seoDescription:
        "Learn about pure components in React and how they improve performance by preventing unnecessary re-renders when props and state remain unchanged.",
        seoKeywords: [
          "pure components", 
          "React performance", 
          "React optimization", 
          "React re-renders"
        ],
        
    },
  },
  {
    question: "What is memoization in React?",
    answer:
      "Memoization is a technique to optimize performance by caching the results of expensive computations and reusing them if inputs don't change, helping React avoid unnecessary renders.",
    seoMeta: {
      seoTitle:
        "What is Memoization in React? | Performance Optimization in React",
      seoDescription:
        "Explore memoization in React, a technique used to cache the results of computations and avoid redundant renders, improving app performance.",
        seoKeywords: [
          "memoization", 
          "React performance", 
          "React optimization", 
          "React rendering", 
          "React caching"
        ],
        
    },
  },
  {
    question: "What are React portals?",
    answer:
      "React portals allow you to render a component's output into a DOM node outside its parent component hierarchy, enabling more flexible and efficient UI rendering.",
    seoMeta: {
      seoTitle: "What are React Portals? | Advanced React Rendering Techniques",
      seoDescription:
        "Learn about React portals, a feature that allows rendering components outside the parent component hierarchy for more flexible UI design.",
        seoKeywords: [
          "React portals", 
          "React advanced rendering", 
          "React UI design", 
          "React component hierarchy"
        ],
    },
  },
  {
    question: "What are synthetic events in React?",
    answer:
      "Synthetic events are React's cross-browser wrapper around native browser events, ensuring consistent behavior and better event handling across different platforms and browsers.",
    seoMeta: {
      seoTitle:
        "What are Synthetic Events in React? | Cross-Browser Event Handling",
      seoDescription:
        "Discover how synthetic events in React help handle events consistently across browsers, simplifying cross-platform development.",
        seoKeywords: [
          "synthetic events", 
          "React event handling", 
          "React cross-browser", 
          "React platform consistency"
        ],
        
    },
  },
  {
    question: "What is React Context?",
    answer:
      "React Context provides a way to share data globally across the component tree without having to pass props at every level, making it easier to manage state in large applications.",
    seoMeta: {
      seoTitle: "What is React Context? | Simplifying Data Sharing in React",
      seoDescription:
        "Learn about React Context, a feature that allows for easy data sharing across the component tree without prop drilling.",
        seoKeywords: [
          "React Context", 
          "React data sharing", 
          "React state management", 
          "prop drilling"
        ],
        
    },
  },
  {
    question: "What is reconciliation in React?",
    answer:
      "Reconciliation is the process React uses to compare the virtual DOM with the real DOM and update only the changed parts, ensuring efficient rendering and improved performance.",
    seoMeta: {
      seoTitle: "What is Reconciliation in React? | Efficient DOM Updates",
      seoDescription:
        "Understand how React's reconciliation process optimizes DOM updates by comparing the virtual and real DOM, leading to better performance.",
        seoKeywords: [
          "React reconciliation", 
          "React virtual DOM", 
          "efficient DOM updates", 
          "React performance optimization"
        ],
        
    },
  },
  {
    question: "What is the significance of keys in React?",
    answer:
      "In React, keys are unique identifiers for elements in a list, helping React identify which items have changed, are added, or are removed, improving performance during re-renders.",
    seoMeta: {
      seoTitle:
        "What is the Significance of Keys in React? | Improve React Performance",
      seoDescription:
        "Learn why keys are essential in React, helping to efficiently track and update elements in a list to improve re-render performance.",
        seoKeywords: [
          "React keys", 
          "React performance", 
          "list rendering in React", 
          "React element updates"
        ],
        
    },
  },
  {
    question:
      "What is the difference between imperative and declarative programming in React?",
    answer:
      "Imperative programming specifies how to do something step-by-step, while declarative programming in React focuses on describing the desired UI, letting React handle the implementation details.",
    seoMeta: {
      seoTitle:
        "Imperative vs Declarative Programming in React | React Coding Styles",
      seoDescription:
        "Explore the difference between imperative and declarative programming in React, and understand how declarative code simplifies UI development.",
        seoKeywords: [
          "imperative vs declarative", 
          "React programming styles", 
          "React coding practices", 
          "declarative UI"
        ],
        
    },
  },
  {
    question: "What is server-side rendering (SSR)?",
    answer:
      "Server-side rendering (SSR) is the process of rendering React components on the server and sending the fully rendered HTML to the browser, improving performance, SEO, and initial page load times.",
    seoMeta: {
      seoTitle:
        "What is Server-Side Rendering (SSR)? | Enhance React Performance and SEO",
      seoDescription:
        "Learn about server-side rendering (SSR) in React, a technique that improves performance and SEO by rendering HTML on the server before sending it to the browser.",
        seoKeywords: [
          "server-side rendering", 
          "React SSR", 
          "React performance", 
          "React SEO optimization"
        ],
        
    },
  },
  {
    question: "What is static site generation (SSG)?",
    answer:
      "Static site generation (SSG) generates static HTML files during build time, providing faster load times and improved performance compared to server-side rendering by pre-rendering content ahead of time.",
    seoMeta: {
      seoTitle:
        "What is Static Site Generation (SSG)? | Speed Up React Applications",
      seoDescription:
        "Discover static site generation (SSG) and how it improves website performance by generating static HTML files at build time, leading to faster load times.",
        seoKeywords: [
          "static site generation", 
          "React SSG", 
          "React performance", 
          "React build time optimization"
        ],
        
    },
  },
  {
    question: "What is hydration in React?",
    answer:
      "Hydration is the process where React attaches event listeners to pre-rendered HTML generated by SSR or SSG, making it interactive and allowing it to become a fully functional React app.",
    seoMeta: {
      seoTitle: "What is Hydration in React? | React SSR and SSG Integration",
      seoDescription:
        "Learn about hydration in React, where pre-rendered HTML from SSR or SSG becomes interactive, enabling React features like event handling.",
        seoKeywords: [
          "React hydration", 
          "React SSR", 
          "React SSG", 
          "interactive React app", 
          "React rendering process"
        ],
        
    },
  },
  {
    question: "What is lazy loading in React?",
    answer:
      "Lazy loading in React is a performance optimization technique where components or data are loaded only when needed, reducing the initial load time and improving the overall performance of the application.",
    seoMeta: {
      seoTitle:
        "What is Lazy Loading in React? | Optimize React Application Performance",
      seoDescription:
        "Explore lazy loading in React, a technique to load components or data only when necessary, enhancing the performance and user experience of React apps.",
        seoKeywords: [
          "lazy loading", 
          "React performance", 
          "React optimization", 
          "component loading", 
          "React app performance"
        ],
        
    },
  },
  {
    question: "What are error boundaries in React?",
    answer:
      "Error boundaries are components that catch JavaScript errors in their child components and display a fallback UI instead of crashing the entire app.",
    seoMeta: {
      seoTitle:
        "What are Error Boundaries in React? | Handling JavaScript Errors in React",
      seoDescription:
        "Learn how error boundaries in React help catch errors in child components and prevent app crashes by displaying fallback UI.",
        seoKeywords: [
          "error boundaries", 
          "React error handling", 
          "React fallback UI", 
          "JavaScript errors"
        ],
        
    },
  },
  {
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer:
      "The useEffect hook runs after the browser has painted, while useLayoutEffect runs before the paint, useful for DOM measurements or modifications.",
    seoMeta: {
      seoTitle:
        "useEffect vs useLayoutEffect in React | React Hook Differences Explained",
      seoDescription:
        "Discover the key differences between useEffect and useLayoutEffect in React and when to use each for optimal performance.",
        seoKeywords: [
          "useEffect", 
          "useLayoutEffect", 
          "React hooks", 
          "React performance", 
          "React DOM manipulation"
        ],
        
    },
  },
  {
    question: "What is the use of PropTypes in React?",
    answer:
      "PropTypes is a library for runtime type-checking of props in React, ensuring components receive the expected types of data, helping with debugging.",
    seoMeta: {
      seoTitle:
        "What is the Use of PropTypes in React? | Runtime Type Checking",
      seoDescription:
        "Learn about PropTypes in React, a library for runtime type-checking that helps ensure props are passed correctly and aids in debugging.",
        seoKeywords: [
          "PropTypes", 
          "React props", 
          "React type checking", 
          "React debugging"
        ],
        
    },
  },
  {
    question: "What is React Fiber?",
    answer:
      "React Fiber is a reimplementation of React's reconciliation algorithm that improves rendering performance, scheduling, and responsiveness in React apps.",
    seoMeta: {
      seoTitle:
        "What is React Fiber? | Optimizing React Rendering and Performance",
      seoDescription:
        "Understand React Fiber, a new reconciliation algorithm that improves the performance and scheduling of React's rendering process.",
        seoKeywords: [
          "React Fiber", 
          "React rendering", 
          "React performance", 
          "React reconciliation"
        ],
        
    },
  },
  {
    question:
      "What is the difference between a single-page application (SPA) and a multi-page application (MPA)?",
    answer:
      "SPAs dynamically update the content without reloading the page, while MPAs load new pages from the server each time the user navigates to a new page.",
    seoMeta: {
      seoTitle:
        "SPA vs MPA | Differences Between Single-Page and Multi-Page Applications",
      seoDescription:
        "Learn the differences between SPAs and MPAs, including their behavior, navigation, and performance characteristics in modern web development.",
        seoKeywords: [
          "SPA", 
          "MPA", 
          "single-page applications", 
          "multi-page applications", 
          "web development"
        ],
        
    },
  },
  {
    question: "What is the use of React.StrictMode?",
    answer:
      "React.StrictMode is a development tool that highlights potential issues, such as unsafe lifecycles or deprecated APIs, during development without affecting the production build.",
    seoMeta: {
      seoTitle:
        "What is React.StrictMode? | Debugging and Improving React Code",
      seoDescription:
        "Learn about React.StrictMode, a tool that helps developers identify potential issues in their React code during development.",
        seoKeywords: [
          "React.StrictMode", 
          "React debugging", 
          "React development tool", 
          "deprecated APIs"
        ],
        
    },
  },
  {
    question: "What is the purpose of React's Concurrent Mode?",
    answer:
      "Concurrent Mode allows React to render components in the background without blocking the main thread, improving the responsiveness and user experience of the app.",
    seoMeta: {
      seoTitle:
        "What is React Concurrent Mode? | Enhancing React App Performance",
      seoDescription:
        "Explore React's Concurrent Mode, which helps React render components without blocking the main thread for smoother user experiences.",
        seoKeywords: [
          "React Concurrent Mode", 
          "React performance", 
          "React rendering", 
          "React responsiveness"
        ],
        
    },
  },
  {
    question: "What is the difference between React.memo and useMemo?",
    answer:
      "React.memo optimizes re-rendering of entire components, while useMemo optimizes specific values or computations within a component to prevent unnecessary recalculations.",
    seoMeta: {
      seoTitle:
        "React.memo vs useMemo | React Optimization Techniques Explained",
      seoDescription:
        "Learn the difference between React.memo and useMemo and how each can help optimize rendering and performance in your React app.",
        seoKeywords: [
          "React.memo", 
          "useMemo", 
          "React performance", 
          "React optimization", 
          "React re-renders"
        ],
        
    },
  },
  {
    question: "What is suspense in React?",
    answer:
      "Suspense is a feature in React for handling asynchronous operations, such as lazy-loading components, by displaying a fallback UI while waiting for content to load.",
    seoMeta: {
      seoTitle:
        "What is Suspense in React? | Handling Asynchronous Operations in React",
      seoDescription:
        "Learn how Suspense in React allows developers to manage asynchronous operations, like lazy loading, by showing fallback content during loading.",
        seoKeywords: [
          "React Suspense", 
          "React asynchronous", 
          "lazy loading", 
          "React UI fallback"
        ],
        
    },
  },
  {
    question: "What is component composition in React?",
    answer:
      "Component composition is the practice of building complex UIs by combining smaller, reusable components, promoting modular and maintainable code.",
    seoMeta: {
      seoTitle:
        "What is Component Composition in React? | Building Modular UIs",
      seoDescription:
        "Understand component composition in React, where complex UIs are built by combining smaller, reusable components for better modularity and maintainability.",
        seoKeywords: [
          "React component composition", 
          "React UI design", 
          "reusable components", 
          "React modularity"
        ],
        
    },
  },
  {
    question: "What are higher-order components (HOCs) in React?",
    answer:
      "HOCs are functions that take a component as input and return an enhanced component, used for reusing logic across multiple components.",
    seoMeta: {
      seoTitle:
        "What are Higher-Order Components (HOCs) in React? | Reusable Component Logic",
      seoDescription:
        "Learn about higher-order components (HOCs) in React, functions that enhance components by reusing logic across multiple components.",
        seoKeywords: [
          "higher-order components", 
          "React HOC", 
          "reusable logic", 
          "React components"
        ],
        
    },
  },
  {
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components rely on React's state for value management, while uncontrolled components manage their own state internally.",
    seoMeta: {
      seoTitle:
        "Controlled vs Uncontrolled Components in React | Understanding React Forms",
      seoDescription:
        "Explore the difference between controlled and uncontrolled components in React, including how state management differs between the two.",
        seoKeywords: [
          "controlled components", 
          "uncontrolled components", 
          "React forms", 
          "React state management"
        ],
        
    },
  },
  {
    question: "What is React's useRef hook used for?",
    answer:
      "The useRef hook creates a reference to access DOM elements or persist mutable values across renders without causing re-renders.",
    seoMeta: {
      seoTitle:
        "What is React's useRef Hook? | Accessing DOM and Persisting Values",
      seoDescription:
        "Learn about React's useRef hook, which allows you to access DOM elements and persist values across renders without causing re-renders.",
        seoKeywords: [
          "useRef", 
          "React hooks", 
          "DOM access", 
          "mutable values", 
          "React re-renders"
        ],
        
    },
  },
  {
    question: "What is the purpose of React's forwardRef?",
    answer:
      "React's forwardRef allows parent components to pass a ref to child components, enabling direct access to the child's DOM node.",
    seoMeta: {
      seoTitle:
        "What is React's forwardRef? | Passing Refs to Child Components",
      seoDescription:
        "Discover React's forwardRef, a method that allows parent components to pass refs to child components for direct DOM access.",
        seoKeywords: [
          "React forwardRef", 
          "React refs", 
          "passing refs", 
          "React child components"
        ],
        
    },
  },
  {
    question: "What are render props in React?",
    answer:
      "Render props is a pattern where a component receives a function as a prop to determine how it should render its output.",
    seoMeta: {
      seoTitle: "What are Render Props in React? | Dynamic Component Rendering",
      seoDescription:
        "Understand the render props pattern in React, where components receive a function as a prop to dynamically determine how to render content.",
        seoKeywords: [
          "render props", 
          "React patterns", 
          "dynamic rendering", 
          "React components"
        ],
        
    },
  },
  {
    question: "What is the difference between default props and prop types?",
    answer:
      "Default props define fallback values for props, while prop types validate the type and presence of props passed to a component.",
    seoMeta: {
      seoTitle:
        "Default Props vs Prop Types in React | Understanding Prop Handling",
      seoDescription:
        "Learn the difference between default props and prop types in React, including how each serves a unique role in handling component props.",
        seoKeywords: [
          "default props", 
          "prop types", 
          "React props", 
          "React validation"
        ],
        
    },
  },
  {
    question: "What is context API in React?",
    answer:
      "The Context API is a way to manage global data, like theme or authentication, without prop-drilling through every component in the tree.",
    seoMeta: {
      seoTitle:
        "What is the Context API in React? | Managing Global Data Efficiently",
      seoDescription:
        "Learn about React's Context API, a feature that allows you to manage global data like themes and authentication without prop-drilling.",
        seoKeywords: [
          "Context API", 
          "React global data", 
          "prop-drilling", 
          "React state management"
        ],
        
    },
  },
  {
    question: "What is shallow rendering in React testing?",
    answer:
      "Shallow rendering is a testing technique where only a single component is rendered without rendering its child components.",
    seoMeta: {
      seoTitle:
        "What is Shallow Rendering in React Testing? | Unit Testing React Components",
      seoDescription:
        "Explore shallow rendering in React testing, a technique that renders a single component for isolated unit tests without child components.",
        seoKeywords: [
          "shallow rendering", 
          "React testing", 
          "unit tests", 
          "React components"
        ],
        
    },
  },
  {
    question: "What is the difference between functional and class components?",
    answer:
      "Functional components are simpler and use hooks for state and lifecycle methods, while class components use ES6 classes and have a more complex API.",
    seoMeta: {
      seoTitle:
        "Functional vs Class Components in React | Key Differences Explained",
      seoDescription:
        "Understand the differences between functional and class components in React, including their syntax, hooks, and lifecycle methods.",
        seoKeywords: [
          "functional components", 
          "class components", 
          "React hooks", 
          "React lifecycle"
        ],
        
    },
  },
  {
    question: "What is the purpose of a React key?",
    answer:
      "A React key is used to uniquely identify elements in a list, helping React efficiently track changes and re-render only the affected items.",
    seoMeta: {
      seoTitle:
        "What is the Purpose of a React Key? | Efficiently Handling Lists in React",
      seoDescription:
        "Learn about the purpose of React keys, used to uniquely identify elements in lists and optimize re-rendering for efficient updates.",
        seoKeywords: [
          "React key", 
          "React list rendering", 
          "React re-rendering", 
          "efficient updates"
        ],
        
    },
  },
];

export default ReactInterviewQuestions;

// { question: "", answer: "" },
