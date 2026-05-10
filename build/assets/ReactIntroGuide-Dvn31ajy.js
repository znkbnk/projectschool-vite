import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-intro-guide`,title:`React: From Core Concepts to Pro Patterns`,image:`/images/reactIntro.webp`,paragraphs:[{type:`text`,content:`Welcome to the complete guide to React — the JavaScript library that powers Facebook, Netflix, Airbnb, and millions of web applications. This guide covers everything from JSX basics to advanced patterns like authentication, testing, and performance optimisation. Each topic includes a clear explanation, a code example, and a practice task so you can learn by doing. Whether you're writing your first component or architecting a production app, this is your single reference for React development.`},{type:`title`,content:`What is React?`},{type:`text`,content:`React is an open-source JavaScript library for building user interfaces, created by Facebook in 2013. It lets you describe what your UI should look like for any given data, and React efficiently updates the screen when that data changes. The core ideas are simple: break your UI into reusable components, manage data with state, and let React handle the DOM updates.`},{type:`boldText`,content:`Key Concepts at a Glance`},{type:`list`,items:[`Components: Independent, reusable UI building blocks. A button, a header, a whole page — each is a component.`,`JSX: A syntax that lets you write HTML-like code inside JavaScript. It compiles to regular function calls.`,`State: Data that changes over time (user input, API responses, toggles). When state changes, React re-renders.`,`Props: Data passed from a parent component to a child. Read-only — the child cannot modify them.`,`Virtual DOM: React maintains a lightweight copy of the real DOM. When state changes, React compares the old and new virtual DOM, then applies only the minimum necessary changes to the real DOM.`]},{type:`image`,src:`/images/reactIntro/3.webp`,alt:`Virtual DOM Workflow`},{type:`boldText`,content:`Declarative vs Imperative`},{type:`text`,content:`In vanilla JavaScript, you tell the browser exactly how to update the DOM (imperative): 'find this element, change its text, add this class.' In React, you describe what the UI should look like (declarative): 'when count is 5, show this.' React figures out the how. This shift makes code more predictable and easier to debug.`},{type:`image`,src:`/images/reactIntro/5.webp`,alt:`Imperative vs. Declarative`},{type:`title`,content:`Web Foundations`},{type:`text`,content:`Before diving into React, you need to understand the three technologies that every website is built on:`},{type:`list`,items:[`HTML: The structure — headings, paragraphs, buttons, inputs. It defines what elements exist on the page.`,`CSS: The presentation — colours, spacing, layout, animations. It defines how elements look.`,`JS: The behaviour — responding to clicks, fetching data, updating the page. It defines what elements do.`]},{type:`image`,src:`/images/reactIntro/6.webp`,alt:`Website Composition`},{type:`text`,content:`The DOM (Document Object Model) is the browser's representation of your HTML as a tree of objects that JavaScript can manipulate. React sits on top of this — instead of you manually finding and updating DOM elements, React does it for you based on your component's state.`},{type:`image`,src:`/images/reactIntro/7.webp`,alt:`DOM Tree`},{type:`boldText`,content:`JavaScript Essentials for React`},{type:`text`,content:`React is just JavaScript, so you'll use these features constantly:`},{type:`code`,content:`// Arrow functions — used for components and event handlers
const greet = (name) => \`Hello, \${name}!\`;

// Destructuring — used for props and state
const { name, age } = user;
const [first, ...rest] = items;

// Spread operator — used for immutable state updates
const updated = { ...user, age: 26 };
const newList = [...items, newItem];

// Array methods — used constantly in JSX
const names = users.map(u => u.name);
const adults = users.filter(u => u.age >= 18);

// Template literals — string interpolation
const message = \`Welcome, \${user.name}!\`;

// Ternary operator — conditional rendering
const label = isLoggedIn ? 'Logout' : 'Login';

// Optional chaining — safe property access
const city = user?.address?.city;

// Async/await — data fetching
const data = await fetch('/api/users').then(r => r.json());`},{type:`title`,content:`JSX`},{type:`text`,content:`JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. It looks like HTML but it's actually JavaScript — Babel compiles each JSX element into a React.createElement() call. This means you get the full power of JavaScript (variables, loops, conditions) inside your UI definitions.`},{type:`code`,content:`// JSX — what you write
function Welcome() {
  const name = "Alice";
  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
      <p>Today is {new Date().toLocaleDateString()}</p>
    </div>
  );
}

// What Babel compiles it to (you never write this)
React.createElement("div", { className: "greeting" },
  React.createElement("h1", null, "Hello, ", name, "!"),
  React.createElement("p", null, "Today is ", new Date().toLocaleDateString())
);`},{type:`image`,src:`/images/reactIntro/9.webp`,alt:`JSX Compilation`},{type:`boldText`,content:`JSX Rules`},{type:`list`,items:[`Return a single root element — wrap multiple elements in a <div> or a Fragment (<>...</>).`,`Use className instead of class (class is a reserved word in JavaScript).`,`Use camelCase for HTML attributes: onClick, htmlFor, tabIndex.`,`Close all tags — even self-closing ones like <img />, <input />, <br />.`,`Embed JavaScript expressions inside curly braces: {variable}, {2 + 2}, {condition ? 'yes' : 'no'}.`]},{type:`practiceTask`,content:`Task: Create a UserCard component that takes no props. Inside it, create a variable for a user object { name, role, joinYear }. Render a card showing the name in an h2, the role in a paragraph, and 'Member for X years' calculated from the current year minus joinYear.`,hint:`Hint: Use {new Date().getFullYear() - joinYear} to calculate years. Remember to wrap everything in a single root element.`,solution:`function UserCard() {
  const user = { name: "Alice", role: "Developer", joinYear: 2021 };
  const years = new Date().getFullYear() - user.joinYear;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>Member for {years} years</p>
    </div>
  );
}`},{type:`title`,content:`Components`},{type:`text`,content:`Components are the building blocks of every React application. A component is a JavaScript function that returns JSX. You can think of it as a custom HTML element that encapsulates its own structure, style, and behaviour. React has two types — functional components (modern, uses hooks) and class components (legacy). This guide focuses on functional components since they're the standard today.`},{type:`code`,content:`// Functional component — the modern standard
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using your component (just like an HTML tag)
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/10.webp`,alt:`Functional vs. Class Components`},{type:`boldText`,content:`Component Rules`},{type:`list`,items:[`Component names must start with a capital letter — React treats lowercase as HTML elements.`,`Each component should do one thing well. If it's growing too large, split it into smaller components.`,`Components must be pure during rendering — given the same props and state, they should always return the same JSX.`,`Keep component files focused: one exported component per file is the convention.`]},{type:`practiceTask`,content:`Task: Create a Button component that accepts a label prop and a color prop. Render a <button> with the label as text and the color as the background. Then render three different Button components in an App component with different labels and colours.`,hint:`Hint: Use style={{ backgroundColor: color }} on the button. Destructure { label, color } from props.`,solution:`function Button({ label, color }) {
  return (
    <button style={{ backgroundColor: color, color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {label}
    </button>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button label="Save" color="#4CAF50" />
      <Button label="Delete" color="#f44336" />
      <Button label="Edit" color="#2196F3" />
    </div>
  );
}`},{type:`title`,content:`Props`},{type:`text`,content:`Props (short for properties) are how you pass data from a parent component to a child component. They work like function arguments — the parent decides what to pass, and the child receives and uses them. Props are read-only: a child component must never modify the props it receives.`},{type:`code`,content:`// Parent passes props
function App() {
  return <UserProfile name="Alice" age={28} isPremium={true} />;
}

// Child receives props (destructured)
function UserProfile({ name, age, isPremium }) {
  return (
    <div>
      <h2>{name}, {age}</h2>
      {isPremium && <span>⭐ Premium Member</span>}
    </div>
  );
}

// Default props — handle missing values
function Greeting({ name = "Guest" }) {
  return <h1>Welcome, {name}!</h1>;
}

// Children prop — content between tags
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage:
<Card title="Profile">
  <p>This content is passed as children</p>
</Card>`},{type:`image`,src:`/images/reactIntro/11.webp`,alt:`Props Flow`},{type:`boldText`,content:`Key Rules`},{type:`list`,items:[`Props flow one way: parent → child. A child cannot send props back up (use callbacks for that).`,`Never mutate props — treat them as read-only snapshots.`,`Use default values for optional props to prevent undefined errors.`,`When passing many props through multiple layers (prop drilling), consider using Context instead.`]},{type:`practiceTask`,content:`Task: Create a ProductCard component that accepts name, price, and inStock (boolean) as props. Display the name, formatted price (£X.XX), and either 'In Stock' (green) or 'Out of Stock' (red) based on the boolean. Render three ProductCards with different data from a parent component.`,hint:`Hint: Use price.toFixed(2) for formatting. Use inStock ? 'green' : 'red' for the colour.`,solution:`function ProductCard({ name, price, inStock }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <p style={{ color: inStock ? 'green' : 'red' }}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <ProductCard name="Headphones" price={49.99} inStock={true} />
      <ProductCard name="Keyboard" price={89.5} inStock={true} />
      <ProductCard name="Monitor" price={299} inStock={false} />
    </div>
  );
}`},{type:`title`,content:`State vs Props`},{type:`text`,content:`State and props are both data that affect what a component renders, but they serve different purposes. Props are external data passed in by a parent (like function arguments). State is internal data managed by the component itself (like local variables that persist between renders and trigger re-renders when changed).`},{type:`code`,content:`import { useState } from 'react';

// Props = data from parent | State = data owned by component
function Counter({ label }) {           // 'label' is a prop
  const [count, setCount] = useState(0); // 'count' is state

  return (
    <div>
      <h2>{label}: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Parent controls the prop, child controls the state
function App() {
  return (
    <>
      <Counter label="Clicks" />
      <Counter label="Score" />
    </>
  );
}`},{type:`image`,src:`/images/reactIntro/12.webp`,alt:`State vs. Props`},{type:`boldText`,content:`Quick Comparison`},{type:`list`,items:[`Props: Passed by parent, read-only in child, changing them requires the parent to re-render.`,`State: Owned by the component, mutable via setState, changing it triggers a re-render of that component.`,`Rule of thumb: If data comes from outside → prop. If data changes over time inside the component → state.`]},{type:`title`,content:`Event Handling`},{type:`text`,content:`React handles events similarly to HTML, but with a few differences: event names use camelCase (onClick, onChange, onSubmit), you pass a function reference rather than a string, and React wraps native events in a SyntheticEvent for cross-browser consistency.`},{type:`code`,content:`import { useState } from 'react';

function EventDemo() {
  const [text, setText] = useState('');

  // Event handler receives the event object
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Prevent default form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted: \${text}\`);
  };

  // Passing arguments to handlers
  const handleClick = (item) => {
    alert(\`Clicked: \${item}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
      {['Apple', 'Banana'].map(item => (
        <button key={item} onClick={() => handleClick(item)}>{item}</button>
      ))}
    </form>
  );
}`},{type:`image`,src:`/images/reactIntro/14.webp`,alt:`Event Handling Flow`},{type:`boldText`,content:`Common Mistake`},{type:`text`,content:`Writing onClick={handleClick(item)} calls the function immediately during render. Use onClick={() => handleClick(item)} to wrap it in an arrow function that only fires on click.`},{type:`practiceTask`,content:`Task: Build a form with a text input and a submit button. When submitted, add the text to a list displayed below the form. Clear the input after submission. Prevent empty submissions.`,hint:`Hint: Use e.preventDefault() in onSubmit. Store the list in useState([]). Add with [...list, newItem].`,solution:`import { useState } from 'react';

function SimpleForm() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add item" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}`},{type:`title`,content:`Conditional Rendering`},{type:`text`,content:`React lets you render different UI based on conditions, just like JavaScript if-statements. There are several patterns, each suited to different situations:`},{type:`code`,content:`function Dashboard({ user, notifications }) {
  // Pattern 1: Ternary — render one thing OR another
  const greeting = user ? <h1>Welcome, {user.name}</h1> : <h1>Please log in</h1>;

  // Pattern 2: && (logical AND) — render something OR nothing
  const badge = notifications.length > 0 && <span>({notifications.length} new)</span>;

  // Pattern 3: Early return — skip rendering entirely
  if (!user) return <p>Loading...</p>;

  // Pattern 4: Variable assignment for complex conditions
  let statusIcon;
  if (user.role === 'admin') statusIcon = '👑';
  else if (user.role === 'mod') statusIcon = '🛡️';
  else statusIcon = '👤';

  return (
    <div>
      {greeting}
      <p>{statusIcon} {user.role} {badge}</p>
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/15.webp`,alt:`Conditional Rendering`},{type:`boldText`,content:`Watch Out`},{type:`text`,content:`The && pattern has a gotcha: {count && <p>Items</p>} renders '0' on screen when count is 0, because 0 is falsy but also a valid React node. Fix: {count > 0 && <p>Items</p>}.`},{type:`practiceTask`,content:`Task: Create a LoginStatus component. It receives an isLoggedIn boolean and a username string as props. If logged in, show 'Welcome, [username]' with a Logout button. If not, show 'Please sign in' with a Login button. Clicking toggles the state.`,hint:`Hint: Lift the isLoggedIn state to the parent or manage it inside LoginStatus with useState.`,solution:`import { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = 'Alice';

  if (isLoggedIn) {
    return (
      <div>
        <p>Welcome, {username}!</p>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <p>Please sign in</p>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  );
}`},{type:`title`,content:`Lists and Keys`},{type:`text`,content:`Rendering lists is one of the most common tasks in React. You use .map() to transform an array of data into an array of JSX elements. Each item must have a unique key prop so React can efficiently track which items changed, were added, or removed.`},{type:`code`,content:`function UserList() {
  const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'Editor' },
    { id: 3, name: 'Charlie', role: 'Viewer' },
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.role}
        </li>
      ))}
    </ul>
  );
}

// Filtering + mapping — a common pattern
function ActiveUsers({ users }) {
  const active = users.filter(u => u.isActive);

  return (
    <div>
      <h2>Active Users ({active.length})</h2>
      {active.length === 0
        ? <p>No active users</p>
        : active.map(u => <p key={u.id}>{u.name}</p>)
      }
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/16.webp`,alt:`Lists and Keys`},{type:`boldText`,content:`Key Rules`},{type:`list`,items:[`Always use a stable, unique ID as the key (from your data). Never use array index as key if the list can be reordered, filtered, or items can be added/removed.`,`Keys must be unique among siblings, not globally.`,`Don't generate keys during render (e.g., key={Math.random()}) — this destroys and recreates elements every render.`]},{type:`practiceTask`,content:`Task: Create a component that renders a list of 5 countries from an array of objects ({ id, name, population }). Display each country's name and population. Add a search input that filters the list as the user types.`,hint:`Hint: Store the search term in state. Filter the array before mapping: countries.filter(c => c.name.toLowerCase().includes(search)).`,solution:`import { useState } from 'react';

function CountryList() {
  const countries = [
    { id: 1, name: 'Japan', population: 125800000 },
    { id: 2, name: 'Brazil', population: 214300000 },
    { id: 3, name: 'Germany', population: 83200000 },
    { id: 4, name: 'Nigeria', population: 218500000 },
    { id: 5, name: 'Canada', population: 38200000 },
  ];

  const [search, setSearch] = useState('');
  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search countries" />
      <ul>
        {filtered.map(c => (
          <li key={c.id}>
            {c.name} — {(c.population / 1_000_000).toFixed(1)}M people
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p>No matches found</p>}
    </div>
  );
}`},{type:`title`,content:`Hooks Overview`},{type:`text`,content:`Hooks (introduced in React 16.8) are functions that let you use state and other React features in functional components. Before hooks, you needed class components for state and lifecycle methods. Now, functional components with hooks are the standard. The two most important hooks — useState and useEffect — have their own dedicated guides on this platform. Here we'll cover the other essential hooks.`},{type:`image`,src:`/images/reactIntro/17.webp`,alt:`Hook Storage`},{type:`boldText`,content:`Rules of Hooks`},{type:`list`,items:[`Only call hooks at the top level — never inside loops, conditions, or nested functions.`,`Only call hooks from React functions — components or custom hooks, not regular JavaScript functions.`,`Hook names always start with 'use' — this convention lets React enforce the rules automatically.`]},{type:`title`,content:`useRef`},{type:`text`,content:`useRef gives you a mutable container (a .current property) that persists across renders without causing re-renders when changed. It has two main uses: accessing DOM elements directly, and storing values that need to survive re-renders but shouldn't trigger them (like timer IDs or previous values).`},{type:`code`,content:`import { useRef, useState } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [text, setText] = useState('');

  // Use 1: Access DOM elements directly
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Use 2: Track values without triggering re-renders
  renderCount.current += 1;

  return (
    <div>
      <input ref={inputRef} value={text} onChange={e => setText(e.target.value)} />
      <button onClick={focusInput}>Focus Input</button>
      <p>Renders: {renderCount.current}</p>
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/18.webp`,alt:`useRef Usage`},{type:`practiceTask`,content:`Task: Build a stopwatch component. Use useRef to store the interval ID (so you can clear it). Display elapsed seconds. Provide Start, Stop, and Reset buttons.`,hint:`Hint: useRef(null) for the interval ID. useState(0) for seconds. setInterval in start, clearInterval in stop.`,solution:`import { useState, useRef } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds}s</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`},{type:`title`,content:`useMemo & useCallback`},{type:`text`,content:`useMemo caches the result of an expensive calculation so it's only re-computed when its dependencies change. useCallback caches a function definition so it doesn't get recreated on every render. Both are performance optimisations — don't use them by default, only when you've identified a performance problem.`},{type:`code`,content:`import { useState, useMemo, useCallback } from 'react';

function ExpensiveList({ items, onSelect }) {
  // useMemo: Cache expensive computation
  const sorted = useMemo(() => {
    console.log('Sorting...'); // Only runs when items change
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  return (
    <ul>
      {sorted.map(item => (
        <li key={item.id} onClick={() => onSelect(item)}>{item.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const [items] = useState([
    { id: 1, name: 'Banana' }, { id: 2, name: 'Apple' }
  ]);
  const [selected, setSelected] = useState(null);

  // useCallback: Cache function so child doesn't re-render unnecessarily
  const handleSelect = useCallback((item) => {
    setSelected(item);
  }, []);

  return (
    <div>
      <ExpensiveList items={items} onSelect={handleSelect} />
      {selected && <p>Selected: {selected.name}</p>}
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/19.webp`,alt:`useMemo Workflow`},{type:`boldText`,content:`When to Use`},{type:`list`,items:[`useMemo: Expensive calculations (sorting large arrays, complex filtering, math-heavy computations).`,`useCallback: Functions passed as props to memoised child components (React.memo).`,`Don't use them everywhere — they add complexity and memory overhead. Measure first, optimise second.`]},{type:`title`,content:`Custom Hooks`},{type:`text`,content:`Custom hooks let you extract reusable stateful logic into a function. Any function whose name starts with 'use' and calls other hooks is a custom hook. They're the primary way to share logic between components without changing component hierarchy.`},{type:`code`,content:`import { useState, useEffect } from 'react';

// Custom hook: reusable fetch logic
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message); setLoading(false);
        }
      });
    
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Using the custom hook — clean and reusable
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`https://jsonplaceholder.typicode.com/users/\${userId}\`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <h1>{user.name}</h1>;
}`},{type:`image`,src:`/images/reactIntro/23.webp`,alt:`Custom Hook`},{type:`practiceTask`,content:`Task: Create a useLocalStorage custom hook that works like useState but persists the value in localStorage. It should accept a key and initial value, read from localStorage on first render, and update localStorage whenever the value changes.`,hint:`Hint: useState(() => JSON.parse(localStorage.getItem(key)) || initialValue) for lazy init. useEffect to save on value change.`,solution:`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('username', '');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
      <p>Stored: {name}</p>
    </div>
  );
}`},{type:`title`,content:`Routing & Navigation`},{type:`text`,content:`Single-page applications (SPAs) need routing to show different pages without full page reloads. React Router is the standard library — it maps URL paths to components. When the URL changes, React Router renders the matching component while keeping the rest of the app intact.`},{type:`code`,content:`import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// Basic routing setup
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

// Dynamic route — :id becomes a parameter
function UserProfile() {
  const { id } = useParams();
  return <h1>User #{id}</h1>;
}

// Programmatic navigation
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // ... login logic
    navigate('/dashboard');
  };
  return <button onClick={handleLogin}>Log In</button>;
}`},{type:`image`,src:`/images/reactIntro/24.webp`,alt:`Dynamic Routes`},{type:`boldText`,content:`Key Concepts`},{type:`list`,items:[`Link replaces <a> tags — it navigates without a full page reload.`,`useParams() extracts dynamic segments from the URL (e.g., /users/:id).`,`useNavigate() lets you navigate programmatically from event handlers.`,`Nested Routes let you render child routes inside parent layouts.`,`The * path acts as a catch-all for 404 pages.`]},{type:`practiceTask`,content:`Task: Create a simple 3-page app with Home, About, and Contact pages. Add a navigation bar with Links. The Home page should display a welcome message, About should show some text, and Contact should have a placeholder form.`,hint:`Hint: Wrap everything in BrowserRouter. Use Routes with three Route elements. Create a Nav component with Link elements.`,solution:`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function Home() { return <h1>Welcome Home!</h1>; }
function About() { return <div><h1>About Us</h1><p>We build cool React apps.</p></div>; }
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <input placeholder="Your email" />
      <textarea placeholder="Message" />
      <button>Send</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`},{type:`title`,content:`Styling in React`},{type:`text`,content:`React doesn't dictate how you style components — there are several approaches, each with trade-offs. Here are the most common ones, from simplest to most powerful:`},{type:`boldText`,content:`1. CSS Modules`},{type:`text`,content:`CSS Modules scope styles to a single component by generating unique class names at build time. You write regular CSS but import it as an object. This prevents class name collisions across your app.`},{type:`code`,content:`/* Button.module.css */
.button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.primary { background: #2196F3; color: white; }
.danger { background: #f44336; color: white; }

// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  );
}`},{type:`image`,src:`/images/reactIntro/28.webp`,alt:`CSS Modules`},{type:`boldText`,content:`2. Tailwind CSS`},{type:`text`,content:`Tailwind is a utility-first CSS framework — you apply small, single-purpose classes directly in your JSX instead of writing custom CSS. It's extremely popular in the React ecosystem for its speed and consistency.`},{type:`code`,content:`// Tailwind classes directly in JSX
function Card({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/30.webp`,alt:`Tailwind CSS`},{type:`boldText`,content:`3. Styled-Components`},{type:`text`,content:`Styled-components let you write actual CSS inside your JavaScript using tagged template literals. Each styled component generates a unique class name, giving you full CSS power with automatic scoping.`},{type:`code`,content:`import styled from 'styled-components';

const Button = styled.button\`
  padding: 10px 20px;
  background: \${props => props.primary ? '#2196F3' : '#eee'};
  color: \${props => props.primary ? '#fff' : '#333'};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
\`;

// Usage
function App() {
  return (
    <div>
      <Button primary>Save</Button>
      <Button>Cancel</Button>
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/29.webp`,alt:`Styled-Components`},{type:`boldText`,content:`4. Inline Styles`},{type:`text`,content:`Inline styles use a JavaScript object with camelCase properties. Good for dynamic styles but limited — no pseudo-classes (:hover), no media queries, no keyframe animations.`},{type:`code`,content:`function Alert({ type, message }) {
  const styles = {
    padding: '12px 20px',
    borderRadius: '5px',
    backgroundColor: type === 'error' ? '#fee' : type === 'success' ? '#efe' : '#eef',
    color: type === 'error' ? '#c00' : type === 'success' ? '#0a0' : '#00c',
    border: \`1px solid \${type === 'error' ? '#fcc' : type === 'success' ? '#cfc' : '#ccf'}\`,
  };

  return <div style={styles}>{message}</div>;
}`},{type:`boldText`,content:`Which to Choose?`},{type:`list`,items:[`CSS Modules: Best default choice. Familiar CSS syntax, automatic scoping, zero runtime cost.`,`Tailwind: Great for rapid prototyping and consistent design systems. Requires learning utility classes.`,`Styled-Components: Best when styles heavily depend on props or when you want co-located CSS-in-JS.`,`Inline styles: Only for truly dynamic values (e.g., width: percentage from state). Avoid for general styling.`]},{type:`practiceTask`,content:`Task: Create a StatusBadge component that accepts a status prop ('online', 'away', 'offline'). Style it with a coloured dot and label using any method. Green for online, yellow for away, grey for offline.`,hint:`Hint: Use a style object with conditional colours based on the status prop. A small div for the dot with borderRadius: '50%'.`,solution:`function StatusBadge({ status }) {
  const colors = { online: '#4CAF50', away: '#FF9800', offline: '#9E9E9E' };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{
        width: '10px', height: '10px', borderRadius: '50%',
        backgroundColor: colors[status] || '#9E9E9E'
      }} />
      <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
  );
}

// Usage: <StatusBadge status="online" />`},{type:`title`,content:`State Management`},{type:`text`,content:`As your app grows, you'll need to share state between components that aren't directly parent-child. React provides built-in solutions (Context, useReducer), and the ecosystem offers external libraries (Redux, Zustand) for more complex scenarios.`},{type:`boldText`,content:`useContext — Built-in Global State`},{type:`text`,content:`Context lets you pass data through the component tree without manually passing props at every level (prop drilling). Create a context, wrap your tree with a Provider, and consume the value with useContext.`},{type:`code`,content:`import { createContext, useContext, useState } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Provider wraps the tree
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Any child can consume — no prop drilling
function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <header style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
      <h1>My App</h1>
      <button onClick={toggle}>Toggle Theme</button>
    </header>
  );
}

// 4. Wrap in App
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}`},{type:`image`,src:`/images/reactIntro/33.webp`,alt:`Prop Drilling vs. useContext`},{type:`boldText`,content:`useReducer — Complex Local State`},{type:`text`,content:`useReducer is like useState for complex state logic. Instead of calling setState directly, you dispatch actions that a reducer function processes. It's ideal when state updates involve multiple sub-values or when the next state depends on the previous one in complex ways.`},{type:`code`,content:`import { useReducer } from 'react';

// Reducer: (currentState, action) => newState
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    case 'decrement': return { ...state, count: state.count - 1 };
    case 'reset':     return { count: 0 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`},{type:`boldText`,content:`When to Use What`},{type:`list`,items:[`useState: Simple, independent state values (toggles, form inputs, counters).`,`useReducer: Complex state with multiple related values or actions (forms with validation, multi-step wizards).`,`useContext: Sharing state across many components (theme, auth, language).`,`Redux / Zustand: Large apps with complex global state, time-travel debugging, middleware needs.`]},{type:`image`,src:`/images/reactIntro/37.webp`,alt:`State Management Comparison`},{type:`practiceTask`,content:`Task: Create a shopping cart using useReducer. Support three actions: 'add' (adds an item), 'remove' (removes by id), and 'clear' (empties the cart). Display the cart items and total count.`,hint:`Hint: The reducer handles each action.type. 'add' spreads state and appends to items. 'remove' filters. 'clear' returns { items: [] }.`,solution:`import { useReducer } from 'react';

function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return { items: [...state.items, action.payload] };
    case 'remove':
      return { items: state.items.filter(item => item.id !== action.payload) };
    case 'clear':
      return { items: [] };
    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const products = [
    { id: 1, name: 'Shirt', price: 25 },
    { id: 2, name: 'Shoes', price: 60 },
    { id: 3, name: 'Hat', price: 15 },
  ];

  return (
    <div>
      <h1>Shop</h1>
      {products.map(p => (
        <button key={p.id} onClick={() => dispatch({ type: 'add', payload: p })}>
          Add {p.name} (£{p.price})
        </button>
      ))}
      <h2>Cart ({state.items.length})</h2>
      <ul>
        {state.items.map((item, i) => (
          <li key={i}>{item.name} — £{item.price}
            <button onClick={() => dispatch({ type: 'remove', payload: item.id })}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'clear' })}>Clear Cart</button>
      <p>Total: £{state.items.reduce((sum, i) => sum + i.price, 0)}</p>
    </div>
  );
}`},{type:`title`,content:`Data Fetching & APIs`},{type:`text`,content:`Most React apps need to fetch data from APIs. The standard pattern uses useEffect to trigger the fetch when the component mounts, useState to store the data, and conditional rendering for loading and error states.`},{type:`code`,content:`import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal
    })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message); setLoading(false);
        }
      });

    // Cleanup: cancel fetch if component unmounts
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name} — {user.email}</li>)}
    </ul>
  );
}`},{type:`image`,src:`/images/reactIntro/40.webp`,alt:`Loading & Error States`},{type:`boldText`,content:`Key Patterns`},{type:`list`,items:[`Always handle three states: loading, error, and success. Users need feedback.`,`Use AbortController to cancel requests when the component unmounts — prevents memory leaks and state updates on unmounted components.`,`Check response.ok — fetch doesn't throw on HTTP errors (404, 500). You must check manually.`,`For complex data fetching (caching, refetching, pagination), consider React Query or SWR instead of manual useEffect.`]},{type:`practiceTask`,content:`Task: Fetch a list of posts from https://jsonplaceholder.typicode.com/posts (limit to first 10). Display each post's title. Add a search input that filters posts by title. Show a loading spinner and error message.`,hint:`Hint: Use .slice(0, 10) after fetching. Filter with posts.filter(p => p.title.includes(search)). Three states: loading, error, data.`,solution:`import { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => { setPosts(data.slice(0, 10)); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts" />
      <ul>
        {filtered.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
      {filtered.length === 0 && <p>No posts match your search</p>}
    </div>
  );
}`},{type:`title`,content:`Performance Optimisation`},{type:`text`,content:`React is fast by default, but as your app grows, unnecessary re-renders can slow things down. Here are the key techniques to keep your app performant:`},{type:`boldText`,content:`React.memo — Skip Unnecessary Re-renders`},{type:`text`,content:`React.memo is a higher-order component that memoises your component. If the props haven't changed, React skips re-rendering it entirely. Useful for expensive child components that receive the same props frequently.`},{type:`code`,content:`import { useState, memo } from 'react';

// This component only re-renders when 'name' or 'count' props change
const ExpensiveChild = memo(function ExpensiveChild({ name, count }) {
  console.log('ExpensiveChild rendered');
  return <p>{name}: {count}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      {/* Only re-renders when count changes, NOT when other changes */}
      <ExpensiveChild name="Counter" count={count} />
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <button onClick={() => setOther(o => o + 1)}>Other: {other}</button>
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/43.webp`,alt:`React.memo Workflow`},{type:`boldText`,content:`Lazy Loading — Load Code on Demand`},{type:`text`,content:`React.lazy and Suspense let you split your app into chunks that load only when needed. This reduces the initial bundle size, making the first page load faster.`},{type:`code`,content:`import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components load only when their route is visited
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`},{type:`image`,src:`/images/reactIntro/44.webp`,alt:`Lazy Loading & Code Splitting`},{type:`boldText`,content:`Performance Checklist`},{type:`list`,items:[`React.memo for components that receive the same props frequently.`,`useMemo for expensive calculations that depend on specific values.`,`useCallback for functions passed as props to memoised children.`,`React.lazy + Suspense for route-level code splitting.`,`Virtualisation (react-window) for long lists (1000+ items) — renders only visible items.`,`Measure first — use React DevTools Profiler before optimising. Premature optimisation adds complexity for no gain.`]},{type:`title`,content:`Reusable Component Patterns`},{type:`text`,content:`As your app scales, you'll need patterns for building flexible, reusable components. Here are the most important ones:`},{type:`boldText`,content:`Compound Components`},{type:`text`,content:`Components that work together, sharing implicit state. The parent manages state and children consume it via Context. Think of HTML's <select> and <option> — they only make sense together.`},{type:`code`,content:`import { createContext, useContext, useState } from 'react';

const TabContext = createContext();

function Tabs({ children, defaultTab }) {
  const [active, setActive] = useState(defaultTab);
  return (
    <TabContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}

function TabList({ children }) {
  return <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #ccc' }}>{children}</div>;
}

function Tab({ value, children }) {
  const { active, setActive } = useContext(TabContext);
  return (
    <button onClick={() => setActive(value)}
      style={{ fontWeight: active === value ? 'bold' : 'normal', borderBottom: active === value ? '2px solid blue' : 'none' }}>
      {children}
    </button>
  );
}

function TabPanel({ value, children }) {
  const { active } = useContext(TabContext);
  return active === value ? <div style={{ padding: '15px' }}>{children}</div> : null;
}

// Usage — clean, declarative API
function App() {
  return (
    <Tabs defaultTab="profile">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="settings">Settings</Tab>
        <Tab value="billing">Billing</Tab>
      </TabList>
      <TabPanel value="profile"><p>Your profile info</p></TabPanel>
      <TabPanel value="settings"><p>App settings</p></TabPanel>
      <TabPanel value="billing"><p>Payment details</p></TabPanel>
    </Tabs>
  );
}`},{type:`image`,src:`/images/reactIntro/48.webp`,alt:`Compound Components`},{type:`boldText`,content:`Portals — Render Outside the Parent DOM`},{type:`text`,content:`Portals let you render a component into a different DOM node, outside the parent component's DOM hierarchy. Essential for modals, tooltips, and dropdowns that need to visually 'break out' of their parent's overflow or z-index.`},{type:`code`,content:`import { createPortal } from 'react-dom';
import { useState } from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', minWidth: '300px' }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Hello from Portal!</h2>
        <p>This renders directly in document.body</p>
      </Modal>
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/51.webp`,alt:`Portals`},{type:`practiceTask`,content:`Task: Create a reusable Modal component using createPortal. It should accept isOpen, onClose, and title props. Clicking the backdrop (dark overlay) should close the modal. Use it in an App component with a button to toggle it.`,hint:`Hint: Render into document.body with createPortal. Add onClick={onClose} to the backdrop div. Stop propagation on the inner content div to prevent clicking inside from closing it.`,solution:`import { createPortal } from 'react-dom';
import { useState } from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', padding: '25px', borderRadius: '10px', minWidth: '300px'
      }}>
        <h2>{title}</h2>
        {children}
        <button onClick={onClose} style={{ marginTop: '15px' }}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirmation">
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </div>
  );
}`},{type:`title`,content:`Authentication & Protected Routes`},{type:`text`,content:`Most apps need authentication — knowing who the user is and restricting access to certain pages. The common React pattern combines Context (to store auth state globally), protected route components (to guard pages), and token storage (to persist login across page refreshes).`},{type:`code`,content:`import { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

// Auth Context — stores user state globally
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // In real apps: call API, get token, store it
    setUser({ name: username, token: 'fake-jwt-token' });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

// Protected Route — redirects to login if not authenticated
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

// Usage in routes
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}`},{type:`image`,src:`/images/reactIntro/53.webp`,alt:`Protected Routes`},{type:`boldText`,content:`Token Storage`},{type:`list`,items:[`localStorage: Persists across tabs and browser restarts. Vulnerable to XSS attacks. Simple to use.`,`sessionStorage: Cleared when the tab closes. Slightly safer but less convenient.`,`HTTP-only cookies: Most secure — not accessible via JavaScript. Requires backend setup. Best practice for production apps.`,`In-memory (state only): Most secure but lost on page refresh. Good for sensitive short-lived sessions.`]},{type:`image`,src:`/images/reactIntro/54.webp`,alt:`Token Storage`},{type:`title`,content:`Testing`},{type:`text`,content:`Testing ensures your components work correctly and don't break when you make changes. React testing typically involves three levels: unit tests (individual functions/components), integration tests (components working together), and end-to-end tests (full user workflows).`},{type:`boldText`,content:`React Testing Library + Jest`},{type:`text`,content:`The most popular testing stack for React. Jest is the test runner, and React Testing Library provides utilities to render components and simulate user interactions. The key philosophy: test what the user sees and does, not implementation details.`},{type:`code`,content:`// Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders initial count of 0', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Add 1'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

test('decrements count on button click', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Subtract 1'));
  expect(screen.getByText('Count: -1')).toBeInTheDocument();
});

// Testing async data fetching with mocked API
test('displays users after loading', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, name: 'Alice' }])
    })
  );

  render(<UserList />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Alice')).toBeInTheDocument();
});`},{type:`image`,src:`/images/reactIntro/56.webp`,alt:`Testing Library`},{type:`boldText`,content:`Testing Principles`},{type:`list`,items:[`Test behaviour, not implementation — query by text content, roles, and labels, not class names or internal state.`,`Use screen.getByText, screen.getByRole, screen.getByPlaceholderText to find elements the way users find them.`,`Use findBy (async) for elements that appear after loading, getBy for elements that exist immediately.`,`Mock API calls with jest.fn() or MSW (Mock Service Worker) for more realistic network mocking.`,`For end-to-end testing, use Cypress or Playwright to simulate real browser interactions.`]},{type:`title`,content:`Advanced Topics`},{type:`boldText`,content:`Server-Side Rendering (Next.js)`},{type:`text`,content:`By default, React apps render entirely in the browser (client-side). Next.js is a React framework that adds server-side rendering (SSR) — the server pre-renders the HTML before sending it to the browser. This improves SEO and initial load time because search engines and users see content immediately rather than waiting for JavaScript to execute.`},{type:`code`,content:`// Next.js page with server-side data fetching
// pages/users.jsx (or app/users/page.jsx in App Router)

// Server Component — runs on the server, fetches data before rendering
export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

// The HTML arrives fully rendered — no loading spinner needed
// Search engines can index the content immediately`},{type:`image`,src:`/images/reactIntro/60.webp`,alt:`SSR with Next.js`},{type:`boldText`,content:`Static Site Generation (SSG)`},{type:`text`,content:`SSG pre-renders pages at build time rather than on each request. The HTML is generated once and served as static files — the fastest possible delivery. Ideal for content that doesn't change often: blog posts, documentation, marketing pages. Next.js supports both SSR and SSG in the same app.`},{type:`image`,src:`/images/reactIntro/61.webp`,alt:`SSG with Next.js`},{type:`boldText`,content:`Progressive Web Apps (PWAs)`},{type:`text`,content:`PWAs add native-app-like features to web apps: offline support, push notifications, and 'install to home screen'. You add a service worker (caches assets for offline use) and a manifest.json (defines the app's name, icon, and splash screen). React apps can become PWAs with minimal configuration using tools like Workbox.`},{type:`image`,src:`/images/reactIntro/62.webp`,alt:`PWA Setup`},{type:`boldText`,content:`Real-Time Data (WebSockets & Firebase)`},{type:`text`,content:`For real-time features (chat, live notifications, collaborative editing), standard HTTP polling is inefficient. WebSockets maintain a persistent connection between client and server, allowing instant data push in both directions. Firebase provides a real-time database with built-in WebSocket support, plus auth and hosting — ideal for rapid prototyping.`},{type:`code`,content:`import { useState, useEffect } from 'react';

// WebSocket example: live chat messages
function ChatRoom({ room }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const ws = new WebSocket(\`wss://your-server.com/chat/\${room}\`);
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    };

    // Cleanup: close connection when component unmounts
    return () => ws.close();
  }, [room]);

  const send = () => {
    const ws = new WebSocket(\`wss://your-server.com/chat/\${room}\`);
    ws.send(JSON.stringify({ text: input, timestamp: Date.now() }));
    setInput('');
  };

  return (
    <div>
      <div>{messages.map((m, i) => <p key={i}>{m.text}</p>)}</div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}`},{type:`image`,src:`/images/reactIntro/63.webp`,alt:`WebSockets/Firebase`},{type:`boldText`,content:`React Native`},{type:`text`,content:`React Native lets you build mobile apps (iOS and Android) using the same React concepts — components, state, props, hooks. Instead of rendering to the DOM, it renders to native mobile UI elements. If you know React, you already know about 80% of React Native. The main differences are styling (uses StyleSheet instead of CSS) and navigation (uses React Navigation instead of React Router).`},{type:`code`,content:`// React Native — same concepts, different primitives
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(c => c + 1)}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  count: { fontSize: 48, fontWeight: 'bold' },
  button: { backgroundColor: '#2196F3', padding: 15, borderRadius: 8, marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 18 },
});`},{type:`image`,src:`/images/reactIntro/64.webp`,alt:`React Native`},{type:`title`,content:`Development Tools`},{type:`text`,content:`The right tools make React development significantly faster and more enjoyable. Here are the essentials:`},{type:`boldText`,content:`React DevTools`},{type:`text`,content:`A browser extension (Chrome/Firefox) that adds React-specific tabs to your developer tools. The Components tab lets you inspect component hierarchy, props, and state in real time. The Profiler tab helps identify performance bottlenecks by recording render timing.`},{type:`image`,src:`/images/reactIntro/68.webp`,alt:`React DevTools`},{type:`boldText`,content:`Essential VS Code Extensions`},{type:`list`,items:[`ES7+ React/Redux/React-Native Snippets: Type 'rafce' to generate a full component with export in seconds.`,`ESLint: Catches code quality issues and enforces consistent style. Use with eslint-plugin-react-hooks to enforce the Rules of Hooks.`,`Prettier: Auto-formats code on save. Eliminates debates about formatting.`,`Auto Rename Tag: Renames the closing tag when you edit the opening tag — saves time in JSX.`,`Thunder Client: API testing directly in VS Code, like a lightweight Postman.`]},{type:`image`,src:`/images/reactIntro/66.webp`,alt:`VS Code Extensions`},{type:`boldText`,content:`Browser DevTools for React`},{type:`list`,items:[`Elements tab: Inspect the rendered DOM to debug layout and styling issues.`,`Console tab: View errors, warnings, and console.log output. React shows helpful error messages here.`,`Network tab: Monitor API requests, check response payloads, and debug loading issues.`,`Application tab: Inspect localStorage, sessionStorage, and cookies — useful for auth debugging.`]},{type:`title`,content:`Roadmap to MERN Mastery`},{type:`text`,content:`Here's a practical learning path from React beginner to full-stack MERN developer:`},{type:`boldText`,content:`Phase 1: JavaScript Fundamentals (2-4 weeks)`},{type:`list`,items:[`Variables, functions, objects, arrays, ES6+ syntax (arrow functions, destructuring, spread).`,`Async programming: Promises, async/await, fetch API.`,`Array methods: map, filter, reduce, find — you'll use these constantly in React.`]},{type:`boldText`,content:`Phase 2: React Core (4-6 weeks)`},{type:`list`,items:[`Components, JSX, props, state (useState), events, conditional rendering, lists.`,`useEffect for side effects and data fetching.`,`React Router for multi-page navigation.`,`Build projects: todo app, weather app, portfolio site.`]},{type:`boldText`,content:`Phase 3: React Advanced (3-4 weeks)`},{type:`list`,items:[`Context API, useReducer for state management.`,`Custom hooks, performance optimisation (memo, useMemo, useCallback).`,`Form handling, validation, error boundaries.`,`Build projects: e-commerce frontend, dashboard with charts.`]},{type:`boldText`,content:`Phase 4: Node.js & Express (4-6 weeks)`},{type:`list`,items:[`Build REST APIs with Express.js (CRUD endpoints, middleware, error handling).`,`Authentication with JWT (JSON Web Tokens).`,`Test APIs with Postman or Thunder Client.`]},{type:`boldText`,content:`Phase 5: MongoDB (3-4 weeks)`},{type:`list`,items:[`NoSQL concepts, schema design with Mongoose.`,`CRUD operations, queries, indexing.`,`Connect MongoDB to Express for a complete backend.`]},{type:`boldText`,content:`Phase 6: Full-Stack Projects (6-8 weeks)`},{type:`list`,items:[`Combine React frontend + Express/Node backend + MongoDB database.`,`Build real projects: social media app, blog platform, e-commerce site with payments.`,`Deploy: Netlify/Vercel for frontend, Render/Railway for backend.`]},{type:`image`,src:`/images/reactIntro/70.webp`,alt:`MERN Roadmap`},{type:`title`,content:`What's Next`},{type:`text`,content:`You've now covered the full landscape of React development — from JSX and components to authentication, testing, and performance. The key to mastery is building projects. Every topic in this guide has a practice task to get you started, but real learning happens when you combine these concepts into full applications. Start with the MERN roadmap above, build something you're excited about, and refer back to this guide whenever you need a refresher on a specific topic.`},{type:`text`,content:`For deeper dives into specific hooks, check out the dedicated useState and useEffect guides on this platform — they include seven real-world project examples each with detailed step-by-step breakdowns.`},{type:`text`,content:``}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),h=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),g=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,_=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||g(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(h,{}):(0,f.jsx)(m,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},v=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let n=(e,t)=>{let n=a[e]||t[0]?.id;return t.find(e=>e.id===n)?.code||t[0]?.code||``},[a,o]=(0,l.useState)(t),[c,d]=(0,l.useState)(null),[p,m]=(0,l.useState)({}),[h,g]=(0,l.useState)(!1),[v,y]=(0,l.useState)(()=>{if(typeof window<`u`){let e=localStorage.getItem(`reactIntroCheckedTitles`);return e?JSON.parse(e):{}}return{}}),b=(0,l.useRef)({}),x=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;g(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let S=()=>{x.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`reactIntroCheckedTitles`,JSON.stringify(v))},[v]);let C=(0,l.useMemo)(()=>{let t=[];return e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),t},[e]),w=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{d(t),setTimeout(()=>d(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),d(t),setTimeout(()=>d(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},T=(e,t,n)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let r=n.findIndex(e=>e.id===a[t]),i;i=e.key===`ArrowLeft`?r>0?r-1:n.length-1:r<n.length-1?r+1:0,o({...a,[t]:n[i].id});let s=b.current[`${t}-${n[i].id}`];s&&s.focus()}},E=e=>{m(t=>({...t,[e]:!t[e]}))},D=e=>{y(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Comprehensive Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),C.length>0&&(0,f.jsxs)(`section`,{ref:x,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:C.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:v[t]||!1,onChange:()=>D(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(_,{code:e.content,index:t,handleCopy:w,copiedIndex:c}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(n=>{let r=`example-${t}`,i=`${r}-${n.id}`,s=`${i}-panel`;return(0,f.jsx)(`button`,{id:i,role:`tab`,"aria-selected":a[r]===n.id,"aria-controls":s,className:a[r]===n.id?`active`:``,onClick:()=>o({...a,[r]:n.id}),onKeyDown:n=>T(n,r,e.tabs,t),tabIndex:a[r]===n.id?0:-1,ref:e=>b.current[i]=e,children:n.label},n.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${a[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${a[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(_,{code:n(`example-${t}`,e.tabs),index:t,handleCopy:w,copiedIndex:c})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>E(t),children:p[t]?`Hide Solution`:`Show Solution`}),p[t]&&(0,f.jsx)(_,{code:e.solution,index:`solution-${t}`,handleCopy:w,copiedIndex:c})]})]},`para-${t}-${e.type}`))}),h&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:S,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};_.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string])};export{v as default};
//# sourceMappingURL=ReactIntroGuide-Dvn31ajy.js.map