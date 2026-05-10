import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-todo-app-guide-part2`,title:`Build Your First React App: Todo List — Part 2`,image:`/images/reactTodoApp2.webp`,paragraphs:[{type:`text`,content:`Welcome to Part 2! In Part 1 you built a working React todo app that adds todos dynamically using state. Now we go further. By the end of this guide you'll have delete, mark-complete, real CSS styling, localStorage persistence, and you'll understand how to split your app into multiple components. Every concept builds directly on what you already know.`},{type:`boldText`,content:`Where Part 1 left off`},{type:`code`,content:`import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!todo) return;
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <h2>todo app</h2>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add todo"
      />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}`},{type:`boldText`,content:`What you'll add in Part 2`},{type:`list`,items:[`Delete individual todos`,`Mark todos complete with a strikethrough toggle`,`Style the entire app with a real CSS file`,`Save todos to localStorage so they survive a page refresh`,`Understand export default properly`,`Avoid the 3 most common React mistakes`,`Split the app into multiple components using props`]},{type:`title`,content:`PHASE 5: Deleting Todos`},{type:`text`,content:`You can add todos but you can never remove them. That's not an app—that's a prison. Let's fix it.`},{type:`title`,content:`Lesson 64: The Problem—No Way Out`},{type:`text`,content:`Right now every todo you add stays forever. Made a typo? Stuck. Finished a task? Still there. We need a delete button next to each todo so users can remove individual items.`},{type:`title`,content:`Lesson 65: Adding a Delete Button to Each Todo`},{type:`text`,content:`Inside our map, each li currently shows just the todo text. We add a button right next to it:`},{type:`code`,content:`{todos.map((t, i) => (
  <li key={i}>
    {t}
    <button>x</button>
  </li>
))}`},{type:`text`,content:`Save and check the browser. An 'x' button appears next to every todo. Clicking it does nothing yet—we haven't wired it up. That's next.`},{type:`title`,content:`Lesson 66: The deleteTodo Function`},{type:`text`,content:`We need a function that removes a todo by its position in the array. We use filter:`},{type:`code`,content:`function deleteTodo(index) {
  setTodos(todos.filter((t, i) => i !== index));
}`},{type:`boldText`,content:`Breaking it down:`},{type:`text`,content:`todos.filter loops through every todo and keeps only the ones where i !== index. The todo at the matching index gets left out. The result is a brand new array without the deleted item.`},{type:`title`,content:`Lesson 67: What is .filter()?`},{type:`text`,content:`filter() is an array method. It loops through every item and keeps only the ones that pass your test:`},{type:`code`,content:`[1, 2, 3, 4].filter(x => x !== 3)
// Result: [1, 2, 4]

// Keep everything EXCEPT index 1:
["a", "b", "c"].filter((item, i) => i !== 1)
// Result: ["a", "c"]`},{type:`text`,content:`filter always returns a NEW array—it never modifies the original. This is exactly what React needs to detect the change and re-render.`},{type:`title`,content:`Lesson 68: Connecting deleteTodo to the Button`},{type:`text`,content:`Now we wire the button's onClick to the function:`},{type:`code`,content:`{todos.map((t, i) => (
  <li key={i}>
    {t}
    <button onClick={() => deleteTodo(i)}>x</button>
  </li>
))}`},{type:`boldText`,content:`Why () => deleteTodo(i) and not just deleteTodo?`},{type:`text`,content:`We need to pass the specific index i to the function. Because we're passing an argument, we wrap it in an arrow function. Writing onClick={deleteTodo} would call it with no index. Writing onClick={deleteTodo(i)} would call it immediately during render—not on click. The arrow function wrapper is the correct pattern whenever you need to pass arguments.`},{type:`code`,content:`// WRONG - calls during render, not on click:
onClick={deleteTodo(i)}

// WRONG - no index passed:
onClick={deleteTodo}

// CORRECT - arrow function, passes i when clicked:
onClick={() => deleteTodo(i)}`},{type:`title`,content:`Lesson 69: Testing Delete`},{type:`text`,content:`Save the file. Add three todos. Click the x button on the middle one. It disappears instantly. The other two remain. React re-renders the list every time todos state changes.`},{type:`list`,items:[`filter creates a new array without the removed item`,`setTodos with the new array triggers a re-render`,`The UI updates automatically—you didn't touch the DOM directly`]},{type:`title`,content:`PHASE 6: Marking Todos Complete`},{type:`text`,content:`Deleting is for things you no longer need. But sometimes you finish a task and want to keep it visible—just crossed off. That's the toggle-complete feature.`},{type:`title`,content:`Lesson 70: The Plan`},{type:`text`,content:`When a user clicks a todo, it gets a strikethrough line. Click it again—the strikethrough disappears. Toggle on, toggle off. To track whether each todo is complete we need to store that information. Right now each todo is just a string. A string can only hold text. We need to upgrade our data structure.`},{type:`title`,content:`Lesson 71: Upgrading Todos from Strings to Objects`},{type:`text`,content:`In addTodo, instead of pushing the plain string we push an object:`},{type:`code`,content:`function addTodo() {
  if (!todo) return;
  setTodos([...todos, { text: todo, completed: false }]);
  setTodo("");
}`},{type:`text`,content:`Now every todo in the array looks like this:`},{type:`code`,content:`{ text: "buy milk", completed: false }`},{type:`title`,content:`Lesson 72: What is a JavaScript Object?`},{type:`text`,content:`An object holds multiple related values. Each value has a name (key) and a value. Think of it like a form with labeled fields:`},{type:`code`,content:`{
  text: "buy milk",   // the todo text
  completed: false    // is it done yet?
}

// Access values with dot notation:
todo.text       // "buy milk"
todo.completed  // false`},{type:`title`,content:`Lesson 73: Fixing the Map After the Change`},{type:`text`,content:`Because t is now an object, we can't use {t} directly—we need {t.text}. If you forget this, you'll see [object Object] in the browser instead of your todo text:`},{type:`code`,content:`{todos.map((t, i) => (
  <li key={i}>
    {t.text}
    <button onClick={() => deleteTodo(i)}>x</button>
  </li>
))}`},{type:`title`,content:`Lesson 74: The toggleTodo Function`},{type:`text`,content:`We need a function that finds the right todo by index and flips its completed value:`},{type:`code`,content:`function toggleTodo(index) {
  setTodos(todos.map((t, i) =>
    i === index ? { ...t, completed: !t.completed } : t
  ));
}`},{type:`text`,content:`todos.map goes through every todo. For the one matching index it returns a new object with completed flipped. For every other todo it returns t unchanged.`},{type:`title`,content:`Lesson 75: The Spread Operator on Objects {...t}`},{type:`text`,content:`We already know ... for arrays. It works on objects too:`},{type:`code`,content:`const t = { text: "buy milk", completed: false };

// Copy everything, then override one property:
{ ...t, completed: true }
// Result: { text: "buy milk", completed: true }

// The original t is completely untouched`},{type:`text`,content:`...t copies all properties from the original object. completed: true then overwrites just that one property. This is the correct immutable update pattern for objects in React.`},{type:`title`,content:`Lesson 76: The ! Operator on Booleans`},{type:`text`,content:`!t.completed flips a boolean—true becomes false, false becomes true:`},{type:`code`,content:`!false  // → true
!true   // → false

// So every time you click a todo:
// completed: false → !false → true  (marked done)
// completed: true  → !true  → false (unmarked)`},{type:`title`,content:`Lesson 77: The Ternary Operator ?`},{type:`text`,content:`The ternary is a compact if/else written on one line:`},{type:`code`,content:`condition ? valueIfTrue : valueIfFalse

// Our usage:
i === index ? { ...t, completed: !t.completed } : t
// If this is the clicked index → return updated object
// Otherwise → return todo unchanged`},{type:`title`,content:`Lesson 78: Connecting Toggle to the UI`},{type:`text`,content:`Add onClick to the li so clicking the text toggles it. Add a dynamic style for the strikethrough:`},{type:`code`,content:`{todos.map((t, i) => (
  <li
    key={i}
    onClick={() => toggleTodo(i)}
    style={{ textDecoration: t.completed ? "line-through" : "none" }}
  >
    {t.text}
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(i);
      }}
    >
      x
    </button>
  </li>
))}`},{type:`title`,content:`Lesson 79: Why Double Curly Braces {{ }}?`},{type:`text`,content:`The outer curly braces are JSX—they switch into JavaScript. The inner curly braces are the JavaScript object that holds the CSS properties:`},{type:`code`,content:`style={{ textDecoration: "line-through" }}
//    ^                                   ^
// JSX braces              object braces`},{type:`text`,content:`In JSX, style always takes an object—not a string. CSS property names use camelCase: text-decoration becomes textDecoration.`},{type:`title`,content:`Lesson 80: What is e.stopPropagation()?`},{type:`text`,content:`The x button is inside the li. Clicking x triggers the button's onClick—but clicks also travel upward to parent elements. So the li's onClick (toggleTodo) would fire too. We'd delete AND toggle at the same time.`},{type:`boldText`,content:`The Analogy: Shouting in a Room`},{type:`text`,content:`Imagine you whisper to someone. Everyone nearby hears too. That's event bubbling—clicks travel upward through parent elements. stopPropagation closes the door. Only the button hears it.`},{type:`code`,content:`// Without stopPropagation:
// click x → deleteTodo fires AND toggleTodo fires

// With stopPropagation:
// click x → deleteTodo fires ONLY`},{type:`title`,content:`Lesson 81: Testing Toggle`},{type:`text`,content:`Save and test. Add some todos. Click one—strikethrough appears. Click it again—strikethrough disappears. Click the x—it deletes cleanly without toggling. All three features working together.`},{type:`list`,items:[`Todos upgraded from strings to objects { text, completed }`,`toggleTodo uses map + ternary + object spread`,`textDecoration style changes based on completed value`,`e.stopPropagation() keeps delete and toggle separate`]},{type:`title`,content:`PHASE 7: Styling with CSS`},{type:`text`,content:`The app works. Now let's make it look like something you'd actually want to use. Right now it's plain browser defaults—no style at all.`},{type:`title`,content:`Lesson 82: Creating App.css`},{type:`text`,content:`In your src folder, create a new file called App.css. Then import it at the very top of App.js:`},{type:`code`,content:`import "./App.css";`},{type:`text`,content:`No curly braces—we're importing a file, not a named export. Any CSS class you write in App.css is now available to the component.`},{type:`title`,content:`Lesson 83: className, Not class`},{type:`text`,content:`In JSX we write className instead of class. This is because class is a reserved word in JavaScript—it already means something else:`},{type:`code`,content:`// HTML:  <div class="app">
// JSX:   <div className="app">`},{type:`boldText`,content:`This is one of the most common beginner mistakes. Always use className in JSX.`},{type:`title`,content:`Lesson 84: Adding classNames to the JSX`},{type:`text`,content:`Give each element a className so we can target it in CSS. We also wrap the input and button in a div so we can lay them out side by side:`},{type:`code`,content:`return (
  <div className="app">
    <h2 className="title">todo app</h2>
    <div className="input-row">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add todo"
      />
      <button className="button" onClick={addTodo}>add</button>
    </div>
    <ul className="list">
      {todos.map((t, i) => (
        <li
          key={i}
          className="list-item"
          onClick={() => toggleTodo(i)}
          style={{ textDecoration: t.completed ? "line-through" : "none" }}
        >
          <span>{t.text}</span>
          <button
            className="delete-btn"
            onClick={(e) => { e.stopPropagation(); deleteTodo(i); }}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  </div>
);`},{type:`title`,content:`Lesson 85: Writing the CSS`},{type:`text`,content:`Open App.css and add these styles:`},{type:`code`,content:`body {
  background: #f0f2f5;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0;
}

.app {
  max-width: 480px;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #1e1b4b;
  margin: 0 0 24px 0;
}

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}

.input:focus {
  border-color: #4f46e5;
}

.button {
  padding: 12px 20px;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.button:hover {
  background: #4338ca;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: #f9fafb;
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.list-item:hover {
  background: #f0f2f5;
}

.delete-btn {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
  transition: color 0.15s;
}

.delete-btn:hover {
  color: #ef4444;
}`},{type:`title`,content:`Lesson 86: Key CSS Concepts Used`},{type:`boldText`,content:`display: flex`},{type:`text`,content:`Makes children sit side by side in a row. Used on .input-row so the input and button sit next to each other, and on .list-item so the text and delete button go to opposite sides.`},{type:`boldText`,content:`flex: 1`},{type:`text`,content:`Tells the input to stretch and fill all available space. The button stays its natural size. The input takes everything else.`},{type:`boldText`,content:`gap: 8px`},{type:`text`,content:`Adds space between flex children without needing margins on each individual child.`},{type:`boldText`,content:`transition`},{type:`text`,content:`Smoothly animates property changes. transition: border-color 0.2s means the border colour changes over 0.2 seconds instead of snapping instantly. Makes the app feel polished.`},{type:`boldText`,content:`cursor: pointer`},{type:`text`,content:`Shows the hand cursor on hover. Tells users the element is clickable. Forget this and interactive elements feel broken.`},{type:`title`,content:`Lesson 87: The Result`},{type:`text`,content:`Save both files. A centred white card on a light grey background. The input and button side by side. Todo items are clean rounded cards. Hovering anything gives a visual response. This looks like a real app.`},{type:`list`,items:[`Phase 7 Complete ✓`,`Created App.css and imported it into App.js`,`Used className (not class) throughout the JSX`,`Learned flexbox, transitions, gap, and flex: 1`]},{type:`title`,content:`PHASE 8: Saving Data with localStorage`},{type:`text`,content:`The app looks great and works perfectly. But refresh the page and everything is gone. React state lives in memory—it resets on every refresh. We need permanent storage.`},{type:`title`,content:`Lesson 88: What is localStorage?`},{type:`text`,content:`localStorage is a key-value store built into every browser. Data written to it survives page refreshes, tab closes, and computer restarts:`},{type:`code`,content:`// SAVE a value:
localStorage.setItem("key", "value")

// READ a value back:
localStorage.getItem("key")    // "value"

// DELETE a value:
localStorage.removeItem("key")`},{type:`boldText`,content:`The Analogy: A Notebook vs a Whiteboard`},{type:`text`,content:`React state is a whiteboard—wipe it and it's gone. localStorage is a notebook—you can close it, come back tomorrow, and your notes are still there.`},{type:`title`,content:`Lesson 89: The Catch—Strings Only`},{type:`text`,content:`localStorage only stores strings. Our todos array is not a string—it's an array of objects. We convert before saving and convert back when reading:`},{type:`code`,content:`// Convert array → string to SAVE:
JSON.stringify(todos)
// '[{"text":"buy milk","completed":false}]'

// Convert string → array to READ:
JSON.parse(savedString)
// [{ text: "buy milk", completed: false }]`},{type:`text`,content:`JSON stands for JavaScript Object Notation. It's a standard text format that can represent arrays, objects, strings, and numbers.`},{type:`title`,content:`Lesson 90: Introducing useEffect`},{type:`text`,content:`We want to save to localStorage every time todos changes. useEffect is the hook for running code when things change. First, import it:`},{type:`code`,content:`import { useState, useEffect } from "react";`},{type:`text`,content:`Then use it like this:`},{type:`code`,content:`useEffect(() => {
  // code to run
}, [dependency]);
// Runs whenever dependency changes`},{type:`boldText`,content:`Think of it like a watcher: 'whenever this value changes, do this thing'.`},{type:`title`,content:`Lesson 91: Saving Todos on Every Change`},{type:`text`,content:`Add this useEffect below your two useState lines:`},{type:`code`,content:`useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);`},{type:`text`,content:`The [todos] is the dependency array. It tells React: run this whenever todos changes. Add a todo? Effect runs. Delete one? Effect runs. Toggle one? Effect runs. localStorage is always up to date.`},{type:`title`,content:`Lesson 92: Loading Todos on Start`},{type:`text`,content:`Saving works. But when the page loads we need to read the saved todos back. We do this with a lazy initialiser—a function passed to useState instead of a plain value:`},{type:`code`,content:`const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
});`},{type:`boldText`,content:`Why a function inside useState?`},{type:`text`,content:`When you pass a function, React only calls it once—on the very first render. This is called a lazy initialiser. Without it, localStorage.getItem would run on every single re-render. With it, it runs once at startup and never again. Exactly what we need.`},{type:`title`,content:`Lesson 93: Testing localStorage`},{type:`text`,content:`Save the file. Add some todos. Open DevTools → Application → Local Storage and look at the data stored under 'todos'. Now refresh the page—the todos are still there. Close the tab, reopen it—still there. Real persistence.`},{type:`list`,items:[`Phase 8 Complete ✓`,`useEffect saves to localStorage every time todos changes`,`Lazy initialiser reads from localStorage once on first load`,`JSON.stringify converts array to string for storage`,`JSON.parse converts it back into an array on load`]},{type:`title`,content:`PHASE 9: Understanding export default`},{type:`text`,content:`It's at the bottom of every component file. You've seen it from the start. Let's actually understand what it does.`},{type:`title`,content:`Lesson 94: What is export?`},{type:`text`,content:`JavaScript files are private by default. Nothing inside them is accessible to other files unless you explicitly export it:`},{type:`code`,content:`// Without export — private, no other file can use this:
function App() { ... }

// With export — available to other files:
export default function App() { ... }`},{type:`boldText`,content:`The Analogy: A Bakery`},{type:`text`,content:`The baker makes the cake in the kitchen (private). Only when they put it in the shop window (export) can customers see and buy it. Without exporting, your component is stuck in the kitchen.`},{type:`title`,content:`Lesson 95: What Does default Mean?`},{type:`text`,content:`'default' means this is the main thing this file offers. Each file can only have one default export. You import it without curly braces and can call it any name you want:`},{type:`code`,content:`// Named export — import with exact name and curly braces:
export function helper() { ... }
import { helper } from "./helpers";

// Default export — import with any name, no curly braces:
export default function App() { ... }
import App from "./App";        // works
import MyApp from "./App";      // also works`},{type:`title`,content:`Lesson 96: Where is App Used?`},{type:`text`,content:`In main.jsx (or index.js)—the entry point of your project—React imports App and renders it into the HTML page:`},{type:`code`,content:`// main.jsx
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);`},{type:`text`,content:`Without export default in App.js this import would fail and you'd see a blank page. That's how important those two words are.`},{type:`list`,items:[`Phase 9 Complete ✓`,`Files are private by default — export makes them available`,`export default marks the main thing a file offers`,`Each file can have only one default export`,`Imported without curly braces, and with any name you choose`]},{type:`title`,content:`PHASE 10: The 3 Most Common React Mistakes`},{type:`text`,content:`These three mistakes trip up almost every beginner. Understanding them now saves you hours of confused debugging later.`},{type:`title`,content:`Lesson 97: Mistake #1 — Mutating State Directly`},{type:`text`,content:`The most common React mistake. It looks like it should work. It doesn't:`},{type:`code`,content:`// WRONG — modifying the existing array directly:
todos.push({ text: todo, completed: false });

// CORRECT — creating a brand new array:
setTodos([...todos, { text: todo, completed: false }]);`},{type:`boldText`,content:`Why does mutating break things?`},{type:`text`,content:`React detects changes by comparing references. When you push to an existing array, the array reference stays the same—it's still the same array in memory. React compares old and new, sees the same reference, and thinks nothing changed. No re-render. The UI stays frozen even though the data changed underneath.`},{type:`text`,content:`Creating a new array with [...todos] gives React a completely different reference. It sees the change and re-renders.`},{type:`code`,content:`// WRONG — modifying existing:
todos.push(item)         // same reference, React is blind to it
obj.name = "new"         // same reference

// CORRECT — creating new:
[...todos, item]         // brand new array
{ ...obj, name: "new" }  // brand new object`},{type:`title`,content:`Lesson 98: Mistake #2 — Calling Functions in onClick`},{type:`text`,content:`There are three ways to write onClick. Two are correct. One causes an infinite loop:`},{type:`code`,content:`// WRONG — calls addTodo immediately during render, not on click:
<button onClick={addTodo()}>add</button>

// CORRECT — passes the function reference, React calls it on click:
<button onClick={addTodo}>add</button>

// CORRECT — arrow function, needed when passing arguments:
<button onClick={() => deleteTodo(i)}>x</button>`},{type:`text`,content:`What happens with addTodo()? React renders → addTodo() runs immediately → setTodos updates state → React re-renders → addTodo() runs again → infinite loop → browser freezes.`},{type:`boldText`,content:`Rule: Never put () after a function name inside an event handler unless it's wrapped in an arrow function.`},{type:`title`,content:`Lesson 99: Mistake #3 — Missing key Prop in Lists`},{type:`text`,content:`Rendering a list without unique keys causes a console warning and can cause subtle, hard-to-debug UI bugs:`},{type:`code`,content:`// WRONG — no key:
{todos.map((t, i) => (
  <li>{t.text}</li>
))}

// CORRECT — unique key on every item:
{todos.map((t, i) => (
  <li key={i}>{t.text}</li>
))}`},{type:`text`,content:`React uses keys to know which item in the list changed. Without them React re-renders the entire list on every change. With keys it updates only what changed—much faster and more reliable.`},{type:`text`,content:`Using the index as key (key={i}) is fine for simple lists. For lists that reorder or filter, use a unique ID instead. Never use Math.random() as a key—it generates a new value on every render which defeats the whole purpose.`},{type:`list`,items:[`Phase 10 Complete ✓`,`Never mutate state directly — always create new arrays and objects`,`Never write onClick={fn()} — use {fn} or {() => fn(arg)}`,`Always add key={} to list items rendered with .map()`]},{type:`title`,content:`PHASE 11: Breaking Into Components`},{type:`text`,content:`Everything lives in App.js right now. That works for a small app. But real projects have many files. Learning to split your code into focused components is one of the most important React skills you can build.`},{type:`title`,content:`Lesson 100: What is a Component?`},{type:`text`,content:`A component is a reusable, self-contained piece of UI. React apps are built by composing many small components—like LEGO bricks. Each brick does one job. You can reuse it anywhere.`},{type:`boldText`,content:`The Analogy: LEGO Bricks`},{type:`text`,content:`A LEGO car is built from individual bricks. Each brick has one shape. You can swap a wheel without touching the door. Components work the same way—change one without breaking the others.`},{type:`code`,content:`// App is made of smaller components:
function App() {
  return (
    <div>
      <Header />
      <InputRow />
      <TodoList />
    </div>
  );
}`},{type:`title`,content:`Lesson 101: What are Props?`},{type:`text`,content:`Props (short for properties) are how a parent component passes data to a child. They work exactly like function arguments:`},{type:`code`,content:`// Parent passes data as attributes:
<TodoItem text="buy milk" completed={false} />

// Child receives them — two ways to write it:

// Option 1 — via the props object:
function TodoItem(props) {
  return <li>{props.text}</li>;
}

// Option 2 — destructured (more common):
function TodoItem({ text, completed }) {
  return <li>{text}</li>;
}`},{type:`boldText`,content:`Data flows DOWN: parent passes props to child. Props are read-only in the child—never modify them.`},{type:`title`,content:`Lesson 102: Creating the TodoItem Component`},{type:`text`,content:`Create a new file in src called TodoItem.jsx. Component file names start with a capital letter by convention:`},{type:`code`,content:`// src/TodoItem.jsx

export default function TodoItem({ todo, index, onToggle, onDelete }) {
  return (
    <li
      className="list-item"
      onClick={() => onToggle(index)}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span>{todo.text}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(index);
        }}
      >
        ×
      </button>
    </li>
  );
}`},{type:`text`,content:`The component receives four props: the todo object, its index, and the two functions from the parent. Functions passed as props are prefixed with 'on' by convention to show they are event handlers.`},{type:`title`,content:`Lesson 103: Updating App.js to Use TodoItem`},{type:`text`,content:`Import the new component at the top of App.js and replace the li block inside the map:`},{type:`code`,content:`// Add at the top of App.js:
import TodoItem from "./TodoItem";

// Replace the li inside the map:
<ul className="list">
  {todos.map((t, i) => (
    <TodoItem
      key={i}
      todo={t}
      index={i}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
    />
  ))}
</ul>`},{type:`text`,content:`App.js manages state and passes it down. TodoItem only handles displaying one item. Each file has one clear job. This is called separation of concerns.`},{type:`title`,content:`Lesson 104: The Complete Final App.js`},{type:`text`,content:`Every feature from Part 1 and Part 2, all together:`},{type:`code`,content:`import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (!todo) return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function toggleTodo(index) {
    setTodos(todos.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    ));
  }

  return (
    <div className="app">
      <h2 className="title">todo app</h2>
      <div className="input-row">
        <input
          className="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add todo"
        />
        <button className="button" onClick={addTodo}>add</button>
      </div>
      <ul className="list">
        {todos.map((t, i) => (
          <TodoItem
            key={i}
            todo={t}
            index={i}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}`},{type:`title`,content:`Lesson 105: The Complete TodoItem.jsx`},{type:`code`,content:`export default function TodoItem({ todo, index, onToggle, onDelete }) {
  return (
    <li
      className="list-item"
      onClick={() => onToggle(index)}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span>{todo.text}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(index);
        }}
      >
        ×
      </button>
    </li>
  );
}`},{type:`list`,items:[`Phase 11 Complete ✓`,`Components are reusable, self-contained pieces of UI`,`Props pass data and functions from parent to child`,`App.js handles state — TodoItem.jsx handles display`,`Functions passed as props are prefixed with 'on' by convention`]},{type:`title`,content:`Lesson 106: The Complete Data Flow`},{type:`text`,content:`Here is how every feature flows from start to finish:`},{type:`list`,items:[`Adding: type → onChange → setTodo → input shows new value`,`Adding: click button → onClick → addTodo → setTodos → list updates`,`Toggling: click li → onClick → toggleTodo → setTodos → strikethrough`,`Deleting: click × → stopPropagation → deleteTodo → setTodos → item removed`,`Saving: todos changes → useEffect → localStorage.setItem → data persisted`,`Loading: app starts → lazy initialiser → localStorage.getItem → todos restored`]},{type:`title`,content:`Lesson 107: Recap — What You Learned in Part 2`},{type:`list`,items:[`Delete with .filter() — keep everything except the item you want gone`,`Toggle complete — upgrade strings to objects, use .map() + ternary + spread`,`e.stopPropagation() — stop events bubbling up to parent elements`,`CSS with className — import a .css file, never use class in JSX`,`localStorage — setItem, getItem, JSON.stringify, JSON.parse`,`useEffect — run code when state changes, dependency array controls when`,`Lazy initialiser — run code once on startup inside useState`,`export default — makes your component available to other files`,`Mutation — always create new arrays and objects, never modify existing`,`onClick — never write {fn()}, use {fn} or {() => fn(arg)}`,`key prop — always add key={} to every item rendered with .map()`,`Components + props — split UI into focused files, pass data downward`]},{type:`title`,content:`Quick Reference Card — Part 2`},{type:`boldText`,content:`Delete from Array`},{type:`code`,content:`setArray(array.filter((_, i) => i !== indexToRemove));`},{type:`boldText`,content:`Toggle a Property in Array`},{type:`code`,content:`setArray(array.map((item, i) =>
  i === index ? { ...item, done: !item.done } : item
));`},{type:`boldText`,content:`Save to localStorage`},{type:`code`,content:`useEffect(() => {
  localStorage.setItem("key", JSON.stringify(state));
}, [state]);`},{type:`boldText`,content:`Load from localStorage (lazy initialiser)`},{type:`code`,content:`const [state, setState] = useState(() => {
  const saved = localStorage.getItem("key");
  return saved ? JSON.parse(saved) : [];
});`},{type:`boldText`,content:`Creating a Component with Props`},{type:`code`,content:`// Child (MyComponent.jsx):
export default function MyComponent({ label, onAction }) {
  return <button onClick={onAction}>{label}</button>;
}

// Parent uses it:
import MyComponent from "./MyComponent";
<MyComponent label="click me" onAction={handleClick} />`},{type:`boldText`,content:`Nested onClick — stopPropagation`},{type:`code`,content:`<li onClick={() => toggle(i)}>
  {t.text}
  <button
    onClick={(e) => {
      e.stopPropagation(); // stops li's onClick from firing
      deleteItem(i);
    }}
  >
    x
  </button>
</li>`},{type:`title`,content:`Congratulations!`},{type:`text`,content:`You've completed Part 2! You now have a fully featured todo app—delete, toggle complete, real CSS styling, localStorage persistence, and a component-based architecture. You understand every single line. That puts you ahead of most people who say they know React. The foundations are rock solid. Everything from here—routing, API calls, authentication—builds directly on what you just learned.`},{type:`practiceTask`,content:`Task: Add a 'Clear completed' button that removes all completed todos in one click. The button should only appear when at least one todo is marked complete.`,hint:`Hint: Use todos.some(t => t.completed) to check if any are complete before showing the button. For the clear function, use setTodos with filter and keep only todos where t.completed === false.`,solution:`import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (!todo) return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function toggleTodo(index) {
    setTodos(todos.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    ));
  }

  function clearCompleted() {
    setTodos(todos.filter((t) => !t.completed));
  }

  return (
    <div className="app">
      <h2 className="title">todo app</h2>
      <div className="input-row">
        <input
          className="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add todo"
        />
        <button className="button" onClick={addTodo}>add</button>
      </div>
      <ul className="list">
        {todos.map((t, i) => (
          <TodoItem
            key={i}
            todo={t}
            index={i}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
      {todos.some((t) => t.completed) && (
        <button className="clear-btn" onClick={clearCompleted}>
          clear completed
        </button>
      )}
    </div>
  );
}`}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),h=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),g=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,_=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||g(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(h,{}):(0,f.jsx)(m,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},v=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let n=(e,t)=>{let n=a[e]||t[0]?.id;return t.find(e=>e.id===n)?.code||t[0]?.code||``},[a,o]=(0,l.useState)(t),[c,d]=(0,l.useState)(null),[p,m]=(0,l.useState)({}),[h,g]=(0,l.useState)(!1),[v,y]=(0,l.useState)(()=>{let e=localStorage.getItem(`reactTodoApp2CheckedTitles`);return e?JSON.parse(e):{}}),b=(0,l.useMemo)(()=>{let t=[];return e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),t},[e]),x=(0,l.useRef)({}),S=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;g(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let C=()=>{S.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`reactTodoApp2CheckedTitles`,JSON.stringify(v))},[v]);let w=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{d(t),setTimeout(()=>d(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),d(t),setTimeout(()=>d(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},T=(e,t,n)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let r=n.findIndex(e=>e.id===a[t]),i;i=e.key===`ArrowLeft`?r>0?r-1:n.length-1:r<n.length-1?r+1:0,o({...a,[t]:n[i].id});let s=x.current[`${t}-${n[i].id}`];s&&s.focus()}},E=e=>{m(t=>({...t,[e]:!t[e]}))},D=e=>{y(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Complete Beginner's Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),b.length>0&&(0,f.jsxs)(`section`,{ref:S,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:b.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:v[t]||!1,onChange:()=>D(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(_,{code:e.content,index:t,handleCopy:w,copiedIndex:c}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(n=>{let r=`example-${t}`,i=`${r}-${n.id}`,s=`${i}-panel`;return(0,f.jsx)(`button`,{id:i,role:`tab`,"aria-selected":a[r]===n.id,"aria-controls":s,className:a[r]===n.id?`active`:``,onClick:()=>o({...a,[r]:n.id}),onKeyDown:n=>T(n,r,e.tabs,t),tabIndex:a[r]===n.id?0:-1,ref:e=>x.current[i]=e,children:n.label},n.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${a[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${a[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(_,{code:n(`example-${t}`,e.tabs),index:t,handleCopy:w,copiedIndex:c})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>E(t),children:p[t]?`Hide Solution`:`Show Solution`}),p[t]&&(0,f.jsx)(_,{code:e.solution,index:`solution-${t}`,handleCopy:w,copiedIndex:c})]})]},`para-${t}-${e.type}`))}),h&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:C,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};_.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string]),language:d.default.string};export{v as default};
//# sourceMappingURL=ReactTodoApp2-C_NFaL_P.js.map