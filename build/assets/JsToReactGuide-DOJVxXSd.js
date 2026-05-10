import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`js-to-react-guide`,title:`From JavaScript to React — Your First Steps`,image:`/images/jsToReact.webp`,paragraphs:[{type:`text`,content:`You know JavaScript — variables, functions, arrays, objects. Now you want to learn React, the library that powers Facebook, Netflix, Airbnb, and millions of web apps. This guide is the bridge. It starts with a focused refresher on the specific JavaScript features React uses constantly, then shows you why React exists by building the same thing in vanilla JS and React side by side. By the end, you'll have written your first React components and be fully ready for the React Intro guide.`},{type:`title`,content:`JavaScript Refresher: What React Uses Every Day`},{type:`text`,content:`React is just JavaScript. There's no separate 'React language' — it's built on standard JS features. But React leans heavily on specific modern JavaScript patterns that you'll use in every single component. If any of these feel unfamiliar, spend a few minutes on each before moving forward. If they're all familiar, this is your quick refresher before diving in.`},{type:`boldText`,content:`1. Arrow Functions`},{type:`text`,content:`React components, event handlers, and callbacks are almost always written as arrow functions. They're shorter than traditional functions and don't rebind 'this' — which avoids a whole category of bugs in React.`},{type:`code`,content:`// Traditional function
function greet(name) {
  return 'Hello, ' + name;
}

// Arrow function — same thing, shorter
const greet = (name) => {
  return 'Hello, ' + name;
};

// Even shorter — implicit return (no curly braces)
const greet = (name) => 'Hello, ' + name;

// In React, you'll write arrow functions constantly:
const handleClick = () => alert('Clicked!');
const double = (n) => n * 2;
const UserCard = ({ name }) => <h1>{name}</h1>;`},{type:`boldText`,content:`2. Destructuring`},{type:`text`,content:`Every React component receives its data through props — and you'll destructure them in the function signature. Destructuring lets you pull specific values out of objects and arrays in one line.`},{type:`code`,content:`// Object destructuring — pull values out of an object
const user = { name: 'Alice', age: 28, role: 'Developer' };

// Without destructuring
const name = user.name;
const age = user.age;

// With destructuring — one line
const { name, age, role } = user;

// In React, you destructure props:
function UserCard({ name, age, role }) {
  // Instead of: function UserCard(props) { props.name, props.age... }
}

// Array destructuring — used with useState
const [count, setCount] = useState(0);
// count = the value, setCount = the function to update it

// Default values
const { name = 'Guest', role = 'User' } = user;`},{type:`boldText`,content:`3. Template Literals`},{type:`text`,content:`Backtick strings let you embed JavaScript expressions directly inside text. You'll use these for dynamic class names, API URLs, and any string that includes variables.`},{type:`code`,content:"// Old way — string concatenation\nconst message = 'Hello, ' + name + '! You are ' + age + ' years old.';\n\n// Template literal — cleaner, readable\nconst message = `Hello, ${name}! You are ${age} years old.`;\n\n// In React, you'll use these for:\nconst apiUrl = `https://api.example.com/users/${userId}`;\nconst className = `btn ${isActive ? 'btn-active' : 'btn-inactive'}`;\nconst title = `Cart (${itemCount} items)`;"},{type:`boldText`,content:`4. Spread & Rest Operators (...)`},{type:`text`,content:`The three dots (...) are everywhere in React. Spread creates copies of objects and arrays (essential for immutable state updates). Rest collects remaining items into a new variable.`},{type:`code`,content:`// SPREAD: Copy + add/override properties
const user = { name: 'Alice', age: 28 };
const updated = { ...user, age: 29 };
// { name: 'Alice', age: 29 } — original unchanged

// SPREAD: Copy array + add items
const items = ['apple', 'banana'];
const more = [...items, 'cherry'];
// ['apple', 'banana', 'cherry'] — original unchanged

// In React, you use spread for immutable state updates:
setUser({ ...user, name: 'Bob' });         // Update one field
setItems([...items, newItem]);              // Add to array
setItems(items.filter(i => i.id !== id));   // Remove from array

// REST: Collect remaining props
function Button({ label, ...rest }) {
  // label = 'Click me'
  // rest = { onClick: fn, disabled: true, className: 'btn' }
  return <button {...rest}>{label}</button>;
}`},{type:`boldText`,content:`5. Array Methods: map, filter, find`},{type:`text`,content:`React renders lists by transforming arrays of data into arrays of JSX elements. The .map() method is the single most-used array method in React. filter() and find() are close behind.`},{type:`code`,content:`const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true },
];

// .map() — transform each item (used to render lists in React)
const names = users.map(user => user.name);
// ['Alice', 'Bob', 'Charlie']

// In React:
{users.map(user => <li key={user.id}>{user.name}</li>)}

// .filter() — keep items that match a condition
const activeUsers = users.filter(user => user.active);
// [{ id: 1, name: 'Alice'... }, { id: 3, name: 'Charlie'... }]

// .find() — get the first item that matches
const bob = users.find(user => user.name === 'Bob');
// { id: 2, name: 'Bob', active: false }

// Chaining — filter then map
const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);
// ['Alice', 'Charlie']`},{type:`boldText`,content:`6. Ternary Operator & Short-Circuit Evaluation`},{type:`text`,content:`React doesn't have if-statements inside JSX. Instead, you use ternary operators (show A or B) and logical AND (show A or nothing). These are the core patterns for conditional rendering.`},{type:`code`,content:`// Ternary: condition ? valueIfTrue : valueIfFalse
const label = isLoggedIn ? 'Logout' : 'Login';
const color = status === 'error' ? 'red' : 'green';

// In React JSX:
{isLoggedIn ? <Dashboard /> : <LoginPage />}
{error ? <p className="error">{error}</p> : <p>All good!</p>}

// Short-circuit (&&): condition && value — show or nothing
{isAdmin && <AdminPanel />}
{notifications.length > 0 && <Badge count={notifications.length} />}

// Watch out: {count && <p>Items</p>} renders "0" when count is 0
// Fix: {count > 0 && <p>Items</p>}`},{type:`boldText`,content:`7. Optional Chaining & Nullish Coalescing`},{type:`text`,content:`When data comes from an API, it might be null or undefined at first. Optional chaining (?.) safely accesses nested properties without crashing. Nullish coalescing (??) provides defaults.`},{type:`code`,content:`// WITHOUT optional chaining — crashes if user is null
const city = user.address.city; // TypeError!

// WITH optional chaining — returns undefined instead of crashing
const city = user?.address?.city; // undefined (safe)

// Nullish coalescing — default value if null/undefined
const name = user?.name ?? 'Guest';     // 'Guest' if name is null/undefined
const count = data?.items?.length ?? 0;  // 0 if any part is null

// In React, very common with API data:
<p>{user?.name ?? 'Loading...'}</p>
<p>{product?.reviews?.length ?? 0} reviews</p>`},{type:`boldText`,content:`8. Async/Await & Fetch`},{type:`text`,content:`React apps fetch data from APIs constantly. async/await makes asynchronous code read like synchronous code. You'll use this pattern inside useEffect for every API call.`},{type:`code`,content:`// The fetch + async/await pattern you'll use in React:
const fetchUsers = async () => {
  try {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    const data = await response.json();
    console.log(data); // The actual user data
  } catch (error) {
    console.error('Fetch failed:', error);
  }
};

// In React (inside useEffect):
useEffect(() => {
  const loadData = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);  // Update state with the fetched data
  };
  loadData();
}, []);`},{type:`practiceTask`,content:`Task: Refresh exercise — without running the code, predict the output of each line. Then verify in your browser console.

const user = { name: 'Alice', age: 28, skills: ['React', 'Node'] };
const { name, skills } = user;
const updated = { ...user, age: 29 };
const moreSkills = [...skills, 'MongoDB'];
const greeting = \`Hello, \${name}! You know \${skills.length} skills.\`;
const isAdult = user.age >= 18 ? 'Yes' : 'No';
const city = user?.address?.city ?? 'Unknown';`,hint:`Hint: name='Alice', skills=['React','Node'], updated={name:'Alice',age:29,skills:['React','Node']}, moreSkills=['React','Node','MongoDB'], greeting='Hello, Alice! You know 2 skills.', isAdult='Yes', city='Unknown'`,solution:`// Answers:
// name → 'Alice'
// skills → ['React', 'Node']
// updated → { name: 'Alice', age: 29, skills: ['React', 'Node'] }
// moreSkills → ['React', 'Node', 'MongoDB']
// greeting → 'Hello, Alice! You know 2 skills.'
// isAdult → 'Yes'
// city → 'Unknown' (user.address is undefined, ?. returns undefined, ?? gives 'Unknown')`},{type:`title`,content:`Why React Exists: Vanilla JS vs React`},{type:`text`,content:`Before learning how React works, you need to understand why it exists. Let's build the same thing — a simple counter with a name display — in both vanilla JavaScript and React. The contrast reveals the fundamental problem React solves.`},{type:`boldText`,content:`The Vanilla JavaScript Way`},{type:`code`,content:`<!-- HTML -->
<div id="app">
  <h1 id="name-display">Hello, Guest!</h1>
  <input id="name-input" placeholder="Enter your name" />
  <p id="count-display">Count: 0</p>
  <button id="increment-btn">+1</button>
  <button id="decrement-btn">-1</button>
</div>

<script>
  // Step 1: Find each element manually
  const nameDisplay = document.getElementById('name-display');
  const nameInput = document.getElementById('name-input');
  const countDisplay = document.getElementById('count-display');
  const incrementBtn = document.getElementById('increment-btn');
  const decrementBtn = document.getElementById('decrement-btn');

  // Step 2: Track state in variables
  let count = 0;

  // Step 3: Wire up events and manually update the DOM
  nameInput.addEventListener('input', (e) => {
    nameDisplay.textContent = 'Hello, ' + (e.target.value || 'Guest') + '!';
  });

  incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = 'Count: ' + count;
  });

  decrementBtn.addEventListener('click', () => {
    count--;
    countDisplay.textContent = 'Count: ' + count;
  });
<\/script>`},{type:`text`,content:`Notice the pattern: find element → attach event → manually update the DOM. For two features, that's already 6 getElementById calls, 3 event listeners, and 3 manual DOM updates. Now imagine a page with 50 interactive elements — the code becomes a tangled mess of selectors and manual updates, and it's incredibly easy to forget to update one element when something changes.`},{type:`boldText`,content:`The React Way`},{type:`code`,content:`import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, {name || 'Guest'}!</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}`},{type:`text`,content:`Same result, completely different approach. No getElementById, no manual DOM updates, no keeping track of which elements need to change. You just describe what the UI should look like for any given state, and React figures out what to change in the actual DOM. When name changes, the h1 updates automatically. When count changes, the paragraph updates automatically.`},{type:`boldText`,content:`The Core Difference`},{type:`list`,items:[`Vanilla JS is imperative: You tell the browser exactly how to update — 'find this element, change its text to this.' You manage every DOM change yourself.`,`React is declarative: You describe what the UI should look like — 'when count is 5, show Count: 5.' React handles the how — figuring out which DOM elements to update.`,`In vanilla JS, your data and your DOM can get out of sync. You increment count but forget to update the display. In React, this is impossible — the UI is always a direct reflection of the state.`,`As your app grows, vanilla JS becomes exponentially harder to manage. React scales because each component is self-contained — it manages its own state and UI in one place.`]},{type:`practiceTask`,content:`Task: Think about a feature you've built (or tried to build) in vanilla JavaScript — a to-do list, a form, a dynamic table. Write down the pain points: How many getElementById / querySelector calls did you need? How many manual DOM updates? Where could things get out of sync? This is exactly the problem React solves.`,hint:`Hint: Common pain points include: tracking which elements to update, keeping the DOM in sync with data, adding/removing list items, managing event listeners, and handling dynamic content insertion.`,solution:`// There's no code solution here — this is a thinking exercise.
// The key insight is: vanilla JS requires you to manage TWO things:
// 1. Your data (variables)
// 2. Your DOM (elements on screen)
//
// React lets you manage ONE thing:
// 1. Your data (state)
// ...and the DOM updates automatically.
//
// This is why React exists.`},{type:`title`,content:`Setting Up a React Project`},{type:`text`,content:`To run React on your machine, you need Node.js installed (download from nodejs.org). React projects use a build tool that converts your JSX into regular JavaScript the browser can understand. The two most popular tools are Vite (fast, modern, recommended) and Create React App (older, still works).`},{type:`boldText`,content:`Creating a Project with Vite (Recommended)`},{type:`code`,content:`# Open your terminal and run:
npm create vite@latest my-first-react-app -- --template react

# Move into the project folder:
cd my-first-react-app

# Install dependencies:
npm install

# Start the development server:
npm run dev

# Open http://localhost:5173 in your browser — you'll see your React app!`},{type:`boldText`,content:`What's Inside the Project`},{type:`code`,content:`my-first-react-app/
├── node_modules/       # Installed packages (don't touch)
├── public/             # Static files (images, favicon)
├── src/                # YOUR CODE GOES HERE
│   ├── App.jsx         # Your main component
│   ├── App.css         # Styles for App
│   ├── main.jsx        # Entry point (renders App into the page)
│   └── index.css       # Global styles
├── index.html          # The single HTML page
├── package.json        # Project config and dependencies
└── vite.config.js      # Vite configuration`},{type:`text`,content:`The key file is src/App.jsx — that's your main component. Everything you build starts here. The .jsx extension tells the build tool this file contains JSX (HTML-like syntax inside JavaScript). Open App.jsx, delete the default content, and you're ready to write your first component.`},{type:`boldText`,content:`The Entry Point: main.jsx`},{type:`code`,content:`// src/main.jsx — you rarely need to edit this
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This says: "Find the HTML element with id='root' and render
// the App component inside it." That's it — React takes over
// from here and manages everything inside that root element.`},{type:`title`,content:`Your First Component`},{type:`text`,content:`A React component is a JavaScript function that returns JSX — a description of what should appear on screen. That's it. If you can write a function, you can write a component.`},{type:`code`,content:`// The simplest possible React component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// A component with a variable
function Welcome() {
  const name = 'Alice';
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>The time is {currentTime}</p>
    </div>
  );
}`},{type:`text`,content:`Notice the curly braces {name} — that's how you embed JavaScript inside JSX. Anything inside {} is evaluated as JavaScript: variables, expressions, function calls, math. Everything outside {} is rendered as-is (like HTML).`},{type:`boldText`,content:`Component Rules`},{type:`list`,items:[`Name starts with a capital letter: Welcome, not welcome. React treats lowercase names as HTML elements.`,`Returns one root element: Wrap multiple elements in a <div> or a Fragment (<>...</>).`,`It's just a function: It receives data, returns JSX. No magic.`]},{type:`boldText`,content:`Using Your Component`},{type:`code`,content:`// Components are used like HTML tags
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}

// Each <Welcome /> is a separate instance of the component
// You can reuse it as many times as you want`},{type:`practiceTask`,content:`Task: Create a Greeting component that displays your name, your favourite programming language, and how many years you've been coding. Use variables (not hard-coded in the JSX). Render it in App.`,hint:`Hint: Define const name = '...', const language = '...', const years = ... inside the function body, then use {name}, {language}, {years} in the JSX return.`,solution:`function Greeting() {
  const name = 'Jevin';
  const language = 'JavaScript';
  const years = 4;

  return (
    <div>
      <h1>Hi, I'm {name}!</h1>
      <p>My favourite language is {language}</p>
      <p>I've been coding for {years} years</p>
    </div>
  );
}

function App() {
  return <Greeting />;
}`},{type:`title`,content:`JSX: HTML Inside JavaScript`},{type:`text`,content:`JSX looks like HTML but it's actually JavaScript. When your project builds, each JSX element is converted into a React.createElement() call. You never see this — the build tool handles it. But understanding that JSX = JavaScript explains why it follows JavaScript rules, not HTML rules.`},{type:`boldText`,content:`JSX Rules (Where It Differs from HTML)`},{type:`code`,content:`// 1. Use className instead of class (class is a reserved word in JS)
<div className="container">

// 2. Use camelCase for attributes
<button onClick={handleClick}>        // not onclick
<label htmlFor="email">               // not for
<input tabIndex={1} autoFocus />      // not tabindex, autofocus

// 3. Close every tag — even self-closing ones
<img src="photo.jpg" alt="Photo" />   // not <img src="photo.jpg">
<input type="text" />                 // not <input type="text">
<br />                                // not <br>

// 4. Use curly braces for JavaScript expressions
<h1>{user.name}</h1>                  // Variable
<p>{2 + 2}</p>                        // Expression (renders "4")
<p>{isActive ? 'Yes' : 'No'}</p>     // Ternary
<p>{items.length} items</p>           // Property access

// 5. Style is an object, not a string
<div style={{ color: 'red', fontSize: '20px', marginTop: '10px' }}>
// Double braces: outer {} = "this is JavaScript", inner {} = "this is an object"
// CSS properties use camelCase: font-size → fontSize, margin-top → marginTop`},{type:`boldText`,content:`Fragments — Returning Multiple Elements`},{type:`code`,content:`// PROBLEM: Components must return one root element
// This breaks:
function UserInfo() {
  return (
    <h1>Alice</h1>
    <p>Developer</p>
  ); // Error: Adjacent JSX elements must be wrapped
}

// SOLUTION 1: Wrap in a <div>
function UserInfo() {
  return (
    <div>
      <h1>Alice</h1>
      <p>Developer</p>
    </div>
  ); // Works, but adds an extra <div> to the DOM
}

// SOLUTION 2: Fragment — wraps without adding DOM elements
function UserInfo() {
  return (
    <>
      <h1>Alice</h1>
      <p>Developer</p>
    </>
  ); // Works, no extra element in the DOM
}`},{type:`practiceTask`,content:`Task: Create a ProfileCard component. Include an image (use any URL), a name in an h2, a role in a paragraph, and a styled div with a border and padding. Use className for a class, style={{}} for inline styles, and a Fragment for the outer wrapper.`,hint:`Hint: Use <> and </> for the Fragment. Remember: style={{ borderRadius: '10px' }} not style='border-radius: 10px'.`,solution:`function ProfileCard() {
  const name = 'Alice';
  const role = 'Frontend Developer';

  return (
    <>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '300px',
        textAlign: 'center',
      }}>
        <img
          src="https://i.pravatar.cc/100"
          alt={name}
          style={{ borderRadius: '50%' }}
        />
        <h2>{name}</h2>
        <p className="role">{role}</p>
      </div>
    </>
  );
}`},{type:`title`,content:`How React Thinks: The Mental Shift`},{type:`text`,content:`The biggest shift from vanilla JS to React isn't syntax — it's mindset. In vanilla JS, you think in steps: 'when the user clicks, find the element, change its text.' In React, you think in states: 'when count is 5, the UI looks like this.' You stop telling the browser what to do and start describing what you want.`},{type:`boldText`,content:`The Three Core Concepts`},{type:`text`,content:`Every React app is built on just three ideas. Once you understand these, everything else — hooks, routing, state management — is built on top of them.`},{type:`boldText`,content:`1. Components = Building Blocks`},{type:`text`,content:`Break your UI into small, independent pieces. A page is a component. A header is a component. A button is a component. Each one manages its own section of the UI.`},{type:`code`,content:`// A page is made of components, like LEGO blocks
function App() {
  return (
    <div>
      <Header />           {/* Navigation, logo */}
      <SearchBar />        {/* Input + button */}
      <ProductList />      {/* Grid of product cards */}
      <Footer />           {/* Links, copyright */}
    </div>
  );
}

// Each component is its own file, its own logic, its own tests
// Header doesn't know about ProductList. They're independent.`},{type:`boldText`,content:`2. Props = Data Flows Down`},{type:`text`,content:`Parents pass data to children through props. It's a one-way street: parent → child. A child never reaches up and modifies its parent's data. This makes your app predictable — you always know where data comes from.`},{type:`code`,content:`// Parent passes data down via props
function App() {
  return <UserCard name="Alice" role="Developer" isOnline={true} />;
}

// Child receives and uses the data — read only
function UserCard({ name, role, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <span>{isOnline ? '🟢 Online' : '⚫ Offline'}</span>
    </div>
  );
}`},{type:`boldText`,content:`3. State = Data That Changes`},{type:`text`,content:`State is data that changes over time — what the user typed, how many items are in the cart, whether a menu is open. When state changes, React automatically re-renders the component with the new data. You never manually update the DOM.`},{type:`code`,content:`import { useState } from 'react';

function Counter() {
  // Declare state: [currentValue, functionToUpdateIt]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

// Click the button → setCount(1) → React re-renders → UI shows "Count: 1"
// Click again → setCount(2) → React re-renders → UI shows "Count: 2"
// You NEVER write: document.getElementById('count').textContent = count
// React handles all DOM updates for you`},{type:`text`,content:`That's the entire mental model: Components hold the structure. Props pass data down. State holds data that changes. When state changes, React re-renders. The UI is always a reflection of the current state.`},{type:`title`,content:`Mini Build: Putting It All Together`},{type:`text`,content:`Let's combine everything you've learned — components, props, state, JSX, events, array methods — into a small working app: a favourites list where you can add items, mark them as favourites, and filter the list. This is the minimum viable React app.`},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

// Child component: displays one item
function ListItem({ item, onToggle, onDelete }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      padding: '10px', borderBottom: '1px solid #eee',
    }}>
      <button onClick={() => onToggle(item.id)}
        style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>
        {item.favourite ? '⭐' : '☆'}
      </button>
      <span style={{ flex: 1 }}>{item.text}</span>
      <button onClick={() => onDelete(item.id)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}>
        ✕
      </button>
    </div>
  );
}

// Parent component: owns the state, passes props to children
function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [showFavourites, setShowFavourites] = useState(false);

  // Add item
  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setItems([...items, { id: Date.now(), text: input, favourite: false }]);
    setInput('');
  };

  // Toggle favourite
  const handleToggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, favourite: !item.favourite } : item
    ));
  };

  // Delete item
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Derived data: filter without extra state
  const displayed = showFavourites
    ? items.filter(item => item.favourite)
    : items;

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>My List</h1>

      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add an item..."
          style={{ flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '6px' }}
        />
        <button type="submit">Add</button>
      </form>

      <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px' }}>
        <input
          type="checkbox"
          checked={showFavourites}
          onChange={() => setShowFavourites(!showFavourites)}
        />{' '}
        Show favourites only ({items.filter(i => i.favourite).length})
      </label>

      {displayed.length === 0 ? (
        <p style={{ color: '#999', textAlign: 'center' }}>
          {showFavourites ? 'No favourites yet' : 'Add your first item!'}
        </p>
      ) : (
        displayed.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))
      )}

      {items.length > 0 && (
        <p style={{ color: '#999', fontSize: '13px', marginTop: '15px' }}>
          {items.length} items · {items.filter(i => i.favourite).length} favourites
        </p>
      )}
    </div>
  );
}

export default App;`},{type:`boldText`,content:`What This Demonstrates`},{type:`list`,items:[`Components: App (parent) and ListItem (child) — separation of concerns.`,`Props: App passes item, onToggle, onDelete to each ListItem.`,`State: items (the list), input (form field), showFavourites (filter toggle).`,`Events: onSubmit for the form, onClick for toggle/delete, onChange for input/checkbox.`,`Array methods: .map() to render the list, .filter() for favourites, spread (...) for immutable updates.`,`Conditional rendering: ternary for empty state, && for the item count.`,`Derived data: displayed is computed from state during render — no extra useEffect.`,`Keys: key={item.id} on each ListItem so React can track them.`]},{type:`practiceTask`,content:`Task: Extend the app with one of these features (pick one):

1. Edit mode: Double-click an item to edit its text inline.
2. Sort: Add a button that sorts items alphabetically.
3. Categories: Add a category dropdown when creating items, and a filter by category.`,hint:`Hint for edit: Add an 'editing' state (the id of the item being edited). Render an input instead of a span when editing. Save on Enter/blur. Hint for sort: [...items].sort((a,b) => a.text.localeCompare(b.text)). Hint for categories: Add a category field to each item and a filter dropdown.`,solution:`// OPTION 2: Sort button (simplest extension)
// Add this state:
const [sortAlpha, setSortAlpha] = useState(false);

// Change the 'displayed' line:
let displayed = showFavourites
  ? items.filter(item => item.favourite)
  : items;
if (sortAlpha) {
  displayed = [...displayed].sort((a, b) => a.text.localeCompare(b.text));
}

// Add this button next to the filter checkbox:
<button onClick={() => setSortAlpha(s => !s)}>
  {sortAlpha ? 'Unsort' : 'Sort A-Z'}
</button>`},{type:`title`,content:`What's Next`},{type:`text`,content:`You've made the journey from JavaScript to React. You now understand why React exists, how it thinks differently from vanilla JS, and you've built a working app using components, props, state, events, and JSX. Here's your learning path forward:`},{type:`list`,items:[`React Intro — The complete overview of the React ecosystem. Covers every major topic (hooks, routing, styling, data fetching, testing, and more) with code examples and practice tasks. This is your next step.`,`Components & Props — Deep dive into building reusable components, composition patterns, callback props, and component libraries.`,`useState — Master state management from simple counters to complex shopping carts through seven progressive examples.`,`useEffect — Learn side effects: data fetching, timers, event listeners, and cleanup through eight real-world patterns.`,`useState + useEffect — The guide most courses skip. Learn how state and effects work together in patterns like debounced search, infinite scroll, and real-time dashboards.`]},{type:`text`,content:`Every guide on this platform follows the same philosophy: learn by building, not by watching. Each topic has code examples you can run, breakdowns that explain why things work (and what would break if you changed them), and practice tasks to test yourself. Welcome to React — you're ready.`},{type:`text`,content:``}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=[],h=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),g=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),_=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,v=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||_(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(g,{}):(0,f.jsx)(h,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},y=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let n=(e,t)=>{let n=a[e]||t[0]?.id;return t.find(e=>e.id===n)?.code||t[0]?.code||``},[a,o]=(0,l.useState)(t),[c,d]=(0,l.useState)(null),[p,h]=(0,l.useState)({}),[g,_]=(0,l.useState)(!1),[y,b]=(0,l.useState)(()=>{if(typeof window>`u`)return{};let e=localStorage.getItem(`JsToReactCheckedTitles`);return e?JSON.parse(e):{}}),x=(0,l.useRef)({}),S=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;_(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let C=()=>{S.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`JsToReactCheckedTitles`,JSON.stringify(y))},[y]);let w=(0,l.useMemo)(()=>{let t=[];return e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),t},[e]),T=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{d(t),setTimeout(()=>d(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),d(t),setTimeout(()=>d(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},E=(e,t,n)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let r=n.findIndex(e=>e.id===a[t]),i;i=e.key===`ArrowLeft`?r>0?r-1:n.length-1:r<n.length-1?r+1:0,o({...a,[t]:n[i].id});let s=x.current[`${t}-${n[i].id}`];s&&s.focus()}},D=e=>{h(t=>({...t,[e]:!t[e]}))},O=e=>{b(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Comprehensive Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),w.length>0&&(0,f.jsxs)(`section`,{ref:S,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:w.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content,m)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:y[t]||!1,onChange:()=>O(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e,m)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(v,{code:e.content,index:t,handleCopy:T,copiedIndex:c}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(n=>{let r=`example-${t}`,i=`${r}-${n.id}`,s=`${i}-panel`;return(0,f.jsx)(`button`,{id:i,role:`tab`,"aria-selected":a[r]===n.id,"aria-controls":s,className:a[r]===n.id?`active`:``,onClick:()=>o({...a,[r]:n.id}),onKeyDown:n=>E(n,r,e.tabs,t),tabIndex:a[r]===n.id?0:-1,ref:e=>x.current[i]=e,children:n.label},n.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${a[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${a[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(v,{code:n(`example-${t}`,e.tabs),index:t,handleCopy:T,copiedIndex:c})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint,m)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>D(t),children:p[t]?`Hide Solution`:`Show Solution`}),p[t]&&(0,f.jsx)(v,{code:e.solution,index:`solution-${t}`,handleCopy:T,copiedIndex:c})]})]},`para-${t}-${e.type}`))}),g&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:C,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};v.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string])};export{y as default};
//# sourceMappingURL=JsToReactGuide-DOJVxXSd.js.map