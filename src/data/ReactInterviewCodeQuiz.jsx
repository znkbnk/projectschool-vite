const ReactInterviewQuestionQuiz = [
  {
    question: "What does the following React code do?",
    codeSnippet: `
        const [isOpen, setIsOpen] = useState(false);
        const toggleModal = () => setIsOpen(!isOpen);
      `,
    options: [
      "Toggles the visibility of a modal",
      "Changes the value of 'isOpen' to true",
      "Sets 'isOpen' to false",
      "None of the above",
    ],
    correctAnswer: "Toggles the visibility of a modal",
    explanation:
      "The function 'toggleModal' changes the value of 'isOpen' to its opposite (true/false), which could be used to control the visibility of a modal.",
    seoMeta: {
      seoTitle: "React Interview Question: useState and Toggling State",
      seoDescription:
        "Learn about useState and toggling boolean values in React with this interview question quiz.",
      seoKeywords: [
        "React.js",
        "useState",
        "React hooks",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
          const [user, setUser] = useState({ name: '', age: 0 });
          const handleChange = (event) => {
            const { name, value } = event.target;
            setUser((prevState) => ({ ...prevState, [name]: value }));
          };
          return <input name="name" value={user.name} onChange={handleChange} />;
        `,
    options: [
      "None of the above",
      "Resets the 'user' state object",
      "Updates the name in the 'user' state object",
      "Only changes the 'name' field in the state object",
    ],
    correctAnswer: "Updates the name in the 'user' state object",
    explanation:
      "This code handles input changes and updates the 'name' property in the 'user' state object using the spread operator to maintain the other properties.",
    seoMeta: {
      seoTitle: "React Interview Question: Updating Object State",
      seoDescription:
        "Test your knowledge on updating object state in React using functional state updates.",
      seoKeywords: [
        "React.js",
        "useState",
        "React object state",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
          const MyComponent = ({ children }) => <div>{children}</div>;
          return <MyComponent>Hello World</MyComponent>;
        `,
    options: [
      "Displays 'Hello World' as a prop",
      "None of the above",
      "Throws an error because children is undefined",
      "Renders 'Hello World' inside a div",
    ],
    correctAnswer: "Renders 'Hello World' inside a div",
    explanation:
      "The component accepts 'children' as a prop and renders it inside a div. The string 'Hello World' is passed as children to MyComponent.",
    seoMeta: {
      seoTitle: "React Interview Question: Understanding Children Prop",
      seoDescription:
        "Learn about the children prop in React and how to pass dynamic content into components.",
      seoKeywords: [
        "React.js",
        "children prop",
        "React functional components",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
          const MyComponent = () => {
            const [count, setCount] = useState(0);
            return (
              <div>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
                <p>{count}</p>
              </div>
            );
          };
        `,
    options: [
      "Increments the count by 1 when the button is clicked",
      "Sets the count to 1 on every render",
      "Increments count by 2 when clicked",
      "None of the above",
    ],
    correctAnswer: "Increments the count by 1 when the button is clicked",
    explanation:
      "The code increments the count by 1 using the updater function of the setCount state setter, which ensures the update is based on the most recent state.",
    seoMeta: {
      seoTitle: "React Interview Question: Functional Updates with useState",
      seoDescription:
        "Learn how functional updates work with useState in React to correctly manage state updates.",
      seoKeywords: [
        "React.js",
        "useState",
        "State Updates",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
          const MyComponent = () => {
            const [text, setText] = useState('');
            const handleChange = (e) => setText(e.target.value);
            return <input value={text} onChange={handleChange} />;
          };
        `,
    options: [
      "Renders an uncontrolled input field",
      "None of the above",
      "Automatically resets the text value to empty",
      "Creates a controlled input that updates state",
    ],
    correctAnswer: "Creates a controlled input that updates state",
    explanation:
      "The input's value is controlled by the 'text' state. The handleChange function updates the state as the user types.",
    seoMeta: {
      seoTitle: "React Interview Question: Controlled Components",
      seoDescription:
        "Test your knowledge of controlled components in React with this question on input handling.",
      seoKeywords: [
        "React.js",
        "Controlled Components",
        "useState",
        "React input field",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
          const [counter, setCounter] = useState(0);
          useEffect(() => {
            document.title = \`Counter: \${counter}\`;
          }, [counter]);
        `,
    options: [
      "Sets the counter to 0 when the component mounts",
      "Updates the document title to display the counter value",
      "Tracks counter changes but doesn't update the document title",
      "None of the above",
    ],
    correctAnswer: "Updates the document title to display the counter value",
    explanation:
      "The useEffect hook runs every time the 'counter' value changes, updating the document title with the current counter value.",
    seoMeta: {
      seoTitle:
        "React Interview Question: Updating Document Title with useEffect",
      seoDescription:
        "Learn how to update the document title dynamically in React using the useEffect hook.",
      seoKeywords: [
        "React.js",
        "useEffect",
        "Document Title",
        "React hooks",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
          const MyComponent = () => {
            const [data, setData] = useState([]);
            useEffect(() => {
              fetch('/api/data')
                .then(response => response.json())
                .then(result => setData(result));
            }, []);
            return <div>{data.length > 0 ? <p>{data[0].name}</p> : <p>Loading...</p>}</div>;
          };
        `,
    options: [
      "Always shows 'Loading...' because the state is never updated",
      "None of the above",
      "Fetches data from an API and renders the first item's name",
      "Fetches and displays the data, but only shows 'Loading...' when there is an error",
    ],
    correctAnswer: "Fetches data from an API and renders the first item's name",
    explanation:
      "This code uses the useEffect hook to fetch data when the component mounts. It conditionally renders either the first item's name or 'Loading...' until the data is fetched.",
    seoMeta: {
      seoTitle:
        "React Interview Question: Fetching Data and Conditional Rendering",
      seoDescription:
        "Learn how to fetch data and handle loading states in React with this interview question quiz.",
      seoKeywords: [
        "React.js",
        "useEffect",
        "API calls",
        "React conditional rendering",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },

  {
    question: "What does the following React code do?",
    codeSnippet: `
          const [isVisible, setIsVisible] = useState(true);
          const toggleVisibility = () => setIsVisible((prev) => !prev);
          return <button onClick={toggleVisibility}>Toggle</button>;
        `,
    options: [
      "Toggles the visibility of an element",
      "None of the above",
      "Sets 'isVisible' to true when clicked",
      "Only toggles the visibility once",
    ],
    correctAnswer: "Toggles the visibility of an element",
    explanation:
      "This code uses a button to toggle the 'isVisible' state between true and false each time it is clicked.",
    seoMeta: {
      seoTitle: "React Interview Question: Toggling Visibility with useState",
      seoDescription:
        "Learn how to toggle visibility in React using the useState hook with this interview question quiz.",
      seoKeywords: [
        "React.js",
        "useState",
        "Toggle Visibility",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },

  {
    question: "What does the following React code do?",
    codeSnippet: `
        const [userData, setUserData] = useState(null);
        useEffect(() => {
          fetch('/api/user')
            .then(response => response.json())
            .then(data => setUserData(data));
        }, []);
      `,
    options: [
      "Fetches data from an API and stores it in state",
      "Displays an error if the API call fails",
      "Sets the user data when the component mounts",
      "Both a and c",
    ],
    correctAnswer: "Both a and c",
    explanation:
      "The useEffect hook fetches data from an API when the component mounts and updates the 'userData' state with the fetched data.",
    seoMeta: {
      seoTitle: "React Interview Question: useEffect and API Calls",
      seoDescription:
        "Learn how to fetch data from an API using useEffect in React with this interview question quiz.",
      seoKeywords: [
        "React.js",
        "useEffect",
        "API calls",
        "React hooks",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
        const handleClick = () => {
          alert('Button clicked!');
        };
        return <button onClick={handleClick}>Click Me</button>;
      `,
    options: [
      "Displays a button that shows an alert on click",
      "Changes the button text to 'Clicked'",
      "Logs a message to the console on click",
      "None of the above",
    ],
    correctAnswer: "Displays a button that shows an alert on click",
    explanation:
      "The code defines a function 'handleClick' that triggers an alert when the button is clicked.",
    seoMeta: {
      seoTitle: "React Interview Question: Handling Events in React",
      seoDescription:
        "Test your React event handling skills with this question on button click events.",
      seoKeywords: [
        "React.js",
        "Event Handling",
        "React button click",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
        const MyComponent = ({ title }) => <h1>{title}</h1>;
        MyComponent.defaultProps = { title: 'Default Title' };
      `,
    options: [
      "Overrides the title prop with 'Default Title'",
      "Sets the default title if no prop is passed",
      "Renders a static title",
      "None of the above",
    ],
    correctAnswer: "Sets the default title if no prop is passed",
    explanation:
      "The defaultProps feature is used to specify default values for props in case they are not passed.",
    seoMeta: {
      seoTitle: "React Interview Question: Default Props",
      seoDescription:
        "Learn how to use defaultProps in React to set default values for props.",
      seoKeywords: [
        "React.js",
        "defaultProps",
        "React props",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
        const [name, setName] = useState('');
        const handleChange = (event) => setName(event.target.value);
        return <input value={name} onChange={handleChange} />;
      `,
    options: [
      "Creates an input field that updates state on change",
      "Displays a static value in the input field",
      "Sets the value of the input to the 'name' state",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "The code binds the input field's value to the 'name' state and updates it whenever the user types in the input.",
    seoMeta: {
      seoTitle: "React Interview Question: Controlled Components in React",
      seoDescription:
        "Test your knowledge of controlled components in React with this question on handling input values.",
      seoKeywords: [
        "React.js",
        "Controlled Components",
        "useState",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },

  {
    question: "What does the following React code do?",
    codeSnippet: `
        const MyComponent = () => {
          const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
          return <div>{memoizedValue}</div>;
        };
      `,
    options: [
      "Updates the component on each render",
      "Caches the value of 'a' and 'b'",
      "Memoizes the result of computeExpensiveValue for performance optimization",
      "None of the above",
    ],
    correctAnswer:
      "Memoizes the result of computeExpensiveValue for performance optimization",
    explanation:
      "The useMemo hook is used to memoize expensive calculations, re-calculating the value only when 'a' or 'b' change, improving performance.",
    seoMeta: {
      seoTitle:
        "React Interview Question: useMemo and Performance Optimization",
      seoDescription:
        "Learn about the useMemo hook and how it can optimize performance in React components.",
      seoKeywords: [
        "React.js",
        "useMemo",
        "Performance Optimization",
        "React hooks",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [isToggled, setIsToggled] = useState(false);
        const handleClick = () => setIsToggled((prev) => !prev);
        return <div>{isToggled ? "Toggled!" : "Not Toggled"}</div>;
      };
    `,
    options: [
      "Always displays 'Toggled!'",
      "Sets the state to true only once",
      "Displays 'Toggled!' when the state is true and 'Not Toggled' when false",
      "None of the above",
    ],
    correctAnswer:
      "Displays 'Toggled!' when the state is true and 'Not Toggled' when false",
    explanation:
      "This component toggles between 'Toggled!' and 'Not Toggled' based on the value of 'isToggled' state.",
    seoMeta: {
      seoTitle: "React Interview Question: Toggling State with useState",
      seoDescription:
        "Test your understanding of conditional rendering and state toggling with this React interview question.",
      seoKeywords: [
        "React.js",
        "useState",
        "Conditional Rendering",
        "State Toggling",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [counter, setCounter] = useState(0);
        useEffect(() => {
          console.log(counter);
        }, []);
        return <button onClick={() => setCounter(counter + 1)}>Increment</button>;
      };
    `,
    options: [
      "Logs the counter value every time it changes",
      "Logs the counter value only once, when the component mounts",
      "Logs 'undefined' because the state is never updated",
      "None of the above",
    ],
    correctAnswer:
      "Logs the counter value only once, when the component mounts",
    explanation:
      "The empty dependency array in useEffect ensures that the log is only executed once when the component mounts, regardless of state changes.",
    seoMeta: {
      seoTitle:
        "React Interview Question: useEffect with Empty Dependency Array",
      seoDescription:
        "Understand how useEffect works with an empty dependency array, and when it runs in React.",
      seoKeywords: [
        "React.js",
        "useEffect",
        "useState",
        "React Hooks",
        "React interview questions",
      ],
    },
  },

  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [count, setCount] = useState(0);
        const increment = () => setCount(count + 1);
        return <button onClick={increment}>Increment</button>;
      };
    `,
    options: [
      "Sets the count value to 1 on every click",
      "Prevents the button from being clicked",
      "Increments the count value by 1 each time the button is clicked",
      "None of the above",
    ],
    correctAnswer:
      "Increments the count value by 1 each time the button is clicked",
    explanation:
      "The increment function increases the 'count' state by 1 every time the button is clicked.",
    seoMeta: {
      seoTitle: "React Interview Question: Handling Button Clicks",
      seoDescription:
        "Test your knowledge on handling button click events and state updates in React.",
      seoKeywords: [
        "React.js",
        "useState",
        "Button Click",
        "React events",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [show, setShow] = useState(false);
        return (
          <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <p>Visible content</p>}
          </div>
        );
      };
    `,
    options: [
      "Only shows the <p> element on the initial render",
      "Toggles the visibility of the <p> element when the button is clicked",
      "Always displays the <p> element",
      "None of the above",
    ],
    correctAnswer:
      "Toggles the visibility of the <p> element when the button is clicked",
    explanation:
      "The button toggles the 'show' state, which conditionally renders the <p> element when 'show' is true.",
    seoMeta: {
      seoTitle: "React Interview Question: Conditional Rendering",
      seoDescription:
        "Test your knowledge on conditional rendering in React using state and conditional logic.",
      seoKeywords: [
        "React.js",
        "useState",
        "Conditional Rendering",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [count, setCount] = useState(0);
        useEffect(() => {
          document.title = \`Count: \${count}\`;
        });
        return <div>{count}</div>;
      };
    `,
    options: [
      "Sets the document title only on the initial render",
      "Updates the document title to 'Count: 0' after each click",
      "Sets the document title to 'Count: X' on every render",
      "None of the above",
    ],
    correctAnswer: "Sets the document title to 'Count: X' on every render",
    explanation:
      "Since the useEffect hook doesn't have a dependency array, it runs after every render, updating the document title to the current count value.",
    seoMeta: {
      seoTitle: "React Interview Question: useEffect with No Dependency Array",
      seoDescription:
        "Learn about how useEffect behaves without a dependency array, and how it affects state and side effects.",
      seoKeywords: [
        "React.js",
        "useEffect",
        "useState",
        "React Hooks",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [name, setName] = useState('');
        const handleChange = (e) => setName(e.target.value);
        return <input type="text" value={name} onChange={handleChange} />;
      };
    `,
    options: [
      "Sets the input value to an empty string",
      "Updates the input field value with the 'name' state on each change",
      "Prevents any changes to the input field",
      "None of the above",
    ],
    correctAnswer:
      "Updates the input field value with the 'name' state on each change",
    explanation:
      "The input's value is controlled by the 'name' state, and the handleChange function updates it as the user types.",
    seoMeta: {
      seoTitle: "React Interview Question: Handling Text Inputs",
      seoDescription:
        "Understand how to handle controlled text inputs in React using useState.",
      seoKeywords: [
        "React.js",
        "useState",
        "Input Handling",
        "React forms",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [isActive, setIsActive] = useState(false);
        return (
          <div onClick={() => setIsActive(!isActive)}>
            {isActive ? 'Active' : 'Inactive'}
          </div>
        );
      };
    `,
    options: [
      "Always displays 'Inactive' text",
      "Only toggles 'Inactive' on click",
      "Toggles between 'Active' and 'Inactive' when clicked",
      "None of the above",
    ],
    correctAnswer: "Toggles between 'Active' and 'Inactive' when clicked",
    explanation:
      "The onClick event toggles the 'isActive' state, which determines whether the displayed text is 'Active' or 'Inactive'.",
    seoMeta: {
      seoTitle: "React Interview Question: Toggling Text on Click",
      seoDescription:
        "Test your knowledge on handling state toggling and click events in React.",
      seoKeywords: [
        "React.js",
        "useState",
        "Click Events",
        "React Text Toggling",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [inputValue, setInputValue] = useState('');
        const handleSubmit = (event) => {
          event.preventDefault();
          alert(inputValue);
        };
        return (
          <form onSubmit={handleSubmit}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        );
      };
    `,
    options: [
      "Prevents the form submission but doesn't handle the input value",
      "Resets the input value every time it is submitted",
      "None of the above",
      "Displays an alert with the input value when the form is submitted",
    ],
    correctAnswer:
      "Displays an alert with the input value when the form is submitted",
    explanation:
      "The handleSubmit function prevents the default form submission behavior and shows an alert with the input value.",
    seoMeta: {
      seoTitle: "React Interview Question: Handling Form Submission",
      seoDescription:
        "Learn how to handle form submissions in React with controlled inputs and event prevention.",
      seoKeywords: [
        "React.js",
        "useState",
        "Form Handling",
        "React Forms",
        "Frontend Developer Interview",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = React.memo(({ count, increment }) => {
        console.log('Rendering MyComponent');
        return (
          <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
          </div>
        );
      });
    `,
    options: [
      "None of the above",
      "The component will re-render on every state update",
      "The component will only re-render when props 'count' or 'increment' change",
      "The component never re-renders",
    ],
    correctAnswer:
      "The component will only re-render when props 'count' or 'increment' change",
    explanation:
      "React.memo is a higher-order component that memoizes the component to prevent unnecessary re-renders when the props do not change.",
    seoMeta: {
      seoTitle: "React Interview Question: Understanding React.memo",
      seoDescription:
        "Learn how React.memo optimizes performance by preventing unnecessary re-renders in functional components.",
      seoKeywords: [
        "React.js",
        "React.memo",
        "Performance Optimization",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const Counter = () => {
        const [count, setCount] = useState(0);
        const increment = useCallback(() => setCount(c => c + 1), []);
        return <button onClick={increment}>{count}</button>;
      };
    `,
    options: [
      "None of the above",
      "The increment function is re-created every time the component renders",
      "The increment function is memoized, preventing re-creation on every render",
      "The counter doesn't increment due to an error",
    ],
    correctAnswer:
      "The increment function is memoized, preventing re-creation on every render",
    explanation:
      "The useCallback hook memoizes the increment function, ensuring it is not re-created on every render, improving performance when passed to child components.",
    seoMeta: {
      seoTitle: "React Interview Question: useCallback Hook",
      seoDescription:
        "Understand how useCallback can optimize performance in React by memoizing functions.",
      seoKeywords: [
        "React.js",
        "useCallback",
        "Memoization",
        "React Hooks",
        "React interview questions",
      ],
    },
  },
  {
    question: "What will be the result of the following code?",
    codeSnippet: `
      const Counter = () => {
        const [count, setCount] = useState(0);
        useEffect(() => {
          console.log(count);
        }, [count]);
        return <button onClick={() => setCount(count + 1)}>Increment</button>;
      };
    `,
    options: [
      "Logs 'undefined' because count is not set initially",
      "Logs the count value every time it changes",
      "None of the above",
      "Logs '0' only once when the component mounts",
    ],
    correctAnswer: "Logs the count value every time it changes",
    explanation:
      "The useEffect hook listens for changes to the 'count' state and logs it whenever the state updates, thanks to the dependency array [count].",
    seoMeta: {
      seoTitle: "React Interview Question: useEffect with State Dependency",
      seoDescription:
        "Learn how useEffect tracks state dependencies and performs actions like logging.",
      seoKeywords: [
        "React.js",
        "useEffect",
        "useState",
        "React Hooks",
        "State Changes",
        "React interview questions",
      ],
    },
  },
  {
    question: "What will be the result of the following code?",
    codeSnippet: `
      const Counter = () => {
        const [count, setCount] = useState(0);
        const increment = () => setCount(count + 1);
        const memoizedIncrement = useMemo(() => increment, []);
        return <button onClick={memoizedIncrement}>{count}</button>;
      };
    `,
    options: [
      "None of the above",
      "The button's click handler is memoized, improving performance",
      "The button's click handler is re-created on every render",
      "The counter doesn't increment due to an error in memoization",
    ],
    correctAnswer:
      "The button's click handler is memoized, improving performance",
    explanation:
      "The useMemo hook memoizes the increment function, ensuring it is not re-created on every render, which can improve performance in certain scenarios.",
    seoMeta: {
      seoTitle: "React Interview Question: useMemo Hook",
      seoDescription:
        "Learn how the useMemo hook can optimize performance by memoizing values and functions.",
      seoKeywords: [
        "React.js",
        "useMemo",
        "Memoization",
        "Performance Optimization",
        "React Hooks",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        }, [value]);
        return ref.current;
      };
    `,
    options: [
      "None of the above",
      "Returns the previous value of the passed state or prop",
      "Stores the current value of the state or prop",
      "Always returns 'undefined'",
    ],
    correctAnswer: "Returns the previous value of the passed state or prop",
    explanation:
      "The custom hook usePrevious stores the previous value of the state or prop by updating a ref inside useEffect, and returning the ref's current value.",
    seoMeta: {
      seoTitle: "React Interview Question: Creating Custom Hooks",
      seoDescription:
        "Learn how to create a custom hook like usePrevious that stores and returns the previous value of a prop or state.",
      seoKeywords: [
        "React.js",
        "useRef",
        "useEffect",
        "Custom Hooks",
        "React interview questions",
      ],
    },
  },
  {
    question: "What will happen if the following code is executed?",
    codeSnippet: `
      const MyComponent = () => {
        const [isVisible, setIsVisible] = useState(true);
        return (
          <div>
            {isVisible && <p>Visible</p>}
            <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
          </div>
        );
      };
    `,
    options: [
      "The <p> element will be removed from the DOM instead of hidden",
      "None of the above",
      "The component re-renders every time the button is clicked",
      "The <p> element will be hidden, but still present in the DOM",
    ],
    correctAnswer: "The component re-renders every time the button is clicked",
    explanation:
      "When the button is clicked, it toggles the state and triggers a re-render. The <p> element is conditionally rendered based on the 'isVisible' state.",
    seoMeta: {
      seoTitle:
        "React Interview Question: Conditional Rendering and Re-renders",
      seoDescription:
        "Understand how conditional rendering works in React and how re-renders happen.",
      seoKeywords: [
        "React.js",
        "useState",
        "Conditional Rendering",
        "Re-renders",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const ParentComponent = () => {
        const [count, setCount] = useState(0);
        const memoizedValue = useMemo(() => count * 2, [count]);
        return <ChildComponent value={memoizedValue} />;
      };
    `,
    options: [
      "None of the above",
      "The memoized value is recalculated on every render of the ParentComponent",
      "The memoized value is calculated once and never updated",
      "The memoized value (count * 2) is recalculated only when 'count' changes",
    ],
    correctAnswer:
      "The memoized value (count * 2) is recalculated only when 'count' changes",
    explanation:
      "useMemo ensures that the calculation of 'count * 2' is only re-executed when 'count' changes, optimizing performance.",
    seoMeta: {
      seoTitle: "React Interview Question: useMemo Hook for Optimization",
      seoDescription:
        "Learn how to use the useMemo hook to optimize performance by memoizing calculations and values in React.",
      seoKeywords: [
        "React.js",
        "useMemo",
        "Performance Optimization",
        "React interview questions",
        "React Hooks",
      ],
    },
  },
  {
    question: "What will be the result of the following code?",
    codeSnippet: `
      const MyComponent = () => {
        const [value, setValue] = useState('');
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(value);
        };
        return (
          <form onSubmit={handleSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        );
      };
    `,
    options: [
      "Resets the input value when the form is submitted",
      "Logs the input value to the console when the form is submitted",
      "None of the above",
      "Prevents the form from submitting and logs 'undefined'",
    ],
    correctAnswer:
      "Logs the input value to the console when the form is submitted",
    explanation:
      "The handleSubmit function prevents the form from refreshing the page and logs the value from the input field to the console.",
    seoMeta: {
      seoTitle: "React Interview Question: Handling Form Submit",
      seoDescription:
        "Learn how to handle form submission and prevent default behavior in React.",
      seoKeywords: [
        "React.js",
        "useState",
        "Form Handling",
        "React Forms",
        "React interview questions",
      ],
    },
  },
  {
    question: "What does the following React code do?",
    codeSnippet: `
      const MyComponent = () => {
        const [count, setCount] = useState(0);
        useEffect(() => {
          const interval = setInterval(() => setCount(c => c + 1), 1000);
          return () => clearInterval(interval);
        }, []);
        return <div>{count}</div>;
      };
    `,
    options: [
      "None of the above",
      "Increments the count every second indefinitely",
      "Starts an interval to increment the count every second and cleans up on unmount",
      "Logs the count to the console every second",
    ],
    correctAnswer:
      "Starts an interval to increment the count every second and cleans up on unmount",
    explanation:
      "The useEffect hook sets up an interval to increment the count every second, and cleans up the interval when the component unmounts.",
    seoMeta: {
      seoTitle: "React Interview Question: useEffect with Cleanup",
      seoDescription:
        "Learn how to use useEffect for side effects like intervals and clean up to prevent memory leaks.",
      seoKeywords: [
        "React.js",
        "useEffect",
        "useState",
        "Interval",
        "React interview questions",
      ],
    },
  },
];

export default ReactInterviewQuestionQuiz;
