import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-usestate-guide`,title:`The Definitive Guide to Mastering the React useState Hook`,image:`/images/usestateLogo.webp`,paragraphs:[{type:`text`,content:`Welcome to the Definitive Guide to the React useState Hook. Whether you're a beginner who just finished a React course or a developer building real applications, this guide will take you from 'I kind of get it' to 'I can build anything with useState' through seven real-world projects, detailed breakdowns, and hands-on practice tasks. No filler — just the knowledge you need to write better React code.`},{type:`title`,content:`Understanding useState Hook`},{type:`text`,content:`Every interactive React app needs to remember things: how many items are in a cart, what a user typed into a search bar, whether a menu is open or closed. useState is how React remembers. It gives your component a piece of state — a value that persists between renders and, when updated, causes React to re-draw the screen with the new data.`},{type:`text`,content:`Here is the simplest mental model: imagine a whiteboard next to your component. When the component first renders, you write a value on the whiteboard (the initial state). Every time the user does something that should change the display — clicking a button, typing in a field — you erase the old value and write the new one. React sees the whiteboard changed and re-renders the component to match. That's useState. The whiteboard is the state, the eraser is the setter function, and React is the person redrawing the UI.`},{type:`boldText`,content:`Under the Hood`},{type:`text`,content:`When a functional component renders, React maintains an internal list of hooks for that component. Each useState call reserves a slot in this list. On the first render, the slot is initialised with your value. On subsequent renders, React reads the existing value from that slot instead of re-initialising. This is why hooks must always be called in the same order — React matches each useState call to its slot by position, not by name. If you call useState inside an if-block, the position shifts and React assigns the wrong value to the wrong variable.`},{type:`title`,content:`Syntax and Rules`},{type:`code`,content:`import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState(initialValue);
  // value:       the current state
  // setValue:     function to update state and trigger a re-render
  // initialValue: starting value (number, string, boolean, object, array, or function)
}`},{type:`text`,content:`useState returns an array with exactly two elements. We use array destructuring to name them — the first is the current value, the second is the setter. You can name them anything, but the convention is [thing, setThing].`},{type:`boldText`,content:`The Five Rules of useState`},{type:`list`,items:[`Call hooks at the top level only: Never inside if-statements, loops, or nested functions. React tracks hooks by their call order — changing the order between renders breaks the mapping between hook calls and their stored values.`,`Call hooks only in React functions: useState only works inside functional components or custom hooks. It cannot be used in regular JavaScript functions, class components, or event handlers defined outside the component.`,`State updates are asynchronous: Calling setState doesn't change the value instantly. React schedules the update and applies it on the next render. If you log the state right after calling setState, you'll see the old value.`,`Use the functional form for sequential updates: When computing new state from old state, always use setState(prev => prev + 1) instead of setState(state + 1). This guarantees you're working with the latest value, even when React batches multiple updates together.`,`Never mutate state directly: For objects and arrays, always create a new reference ({...obj, key: newValue} or [...arr, newItem]). React compares references with Object.is — if the reference hasn't changed, React skips the re-render entirely.`]},{type:`boldText`,content:`Lazy Initialisation`},{type:`text`,content:`If your initial state requires an expensive computation (like parsing JSON from localStorage), pass a function instead of a value. React will only call this function once, on the first render:`},{type:`code`,content:`// Bad: runs on EVERY render
const [data, setData] = useState(expensiveComputation());

// Good: runs ONLY on the first render
const [data, setData] = useState(() => expensiveComputation());`},{type:`boldText`,content:`Automatic Batching (React 18+)`},{type:`text`,content:`In React 18+, multiple setState calls within the same event handler are automatically batched into a single re-render. Calling setName('Alice') and setAge(30) in the same click handler triggers only one re-render, not two.`},{type:`boldText`,content:`Re-render Bailout`},{type:`text`,content:`React uses Object.is to compare previous and new state values. For primitives, if you call setState with the same value (e.g., setCount(5) when count is already 5), React skips the re-render entirely. For objects and arrays, React compares by reference — you must create a new object or array for React to detect the change.`},{type:`title`,content:`Common Pitfalls`},{type:`text`,content:`These mistakes trip up most developers. Understanding them now saves hours of debugging later.`},{type:`boldText`,content:`1. Mutating State Directly`},{type:`code`,content:`// WRONG: Same reference — React won't re-render
const [user, setUser] = useState({ name: 'Alice', age: 25 });
user.age = 26;
setUser(user);

// CORRECT: New reference — React detects the change
setUser({ ...user, age: 26 });`},{type:`boldText`,content:`2. Stale Closures in Rapid Updates`},{type:`code`,content:`// WRONG: All three read the same stale 'count' value
const handleTripleIncrement = () => {
  setCount(count + 1);  // 0 → 1
  setCount(count + 1);  // still reads 0 → 1
  setCount(count + 1);  // still reads 0 → 1
};

// CORRECT: Functional updates always read the latest value
const handleTripleIncrement = () => {
  setCount(prev => prev + 1);  // 0 → 1
  setCount(prev => prev + 1);  // 1 → 2
  setCount(prev => prev + 1);  // 2 → 3
};`},{type:`boldText`,content:`3. Overusing useState`},{type:`text`,content:`Not every value needs its own useState. If you can compute a value from existing state, just calculate it during render. For example, if you have items in state, the count is just items.length — you don't need a separate const [itemCount, setItemCount] = useState(0).`},{type:`boldText`,content:`4. Object State vs Multiple States`},{type:`code`,content:`// Option A: Related fields in one object
const [form, setForm] = useState({ name: '', email: '' });
// Update: setForm({ ...form, name: 'Alice' })

// Option B: Separate states
const [name, setName] = useState('');
const [email, setEmail] = useState('');

// Rule of thumb: Group fields that change together.
// Split fields that change independently.`},{type:`title`,content:`Example 1: The Classic Counter`},{type:`text`,content:`The counter is the 'Hello World' of useState. It teaches the core loop: state changes → UI updates.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Storing a number in state`,`Updating state from button clicks`,`How React re-renders when state changes`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`const [count, setCount] = useState(0) — Creates a state variable called count, starting at 0. React stores this value internally. Every time you call setCount with a new value, React re-runs this function and the JSX reflects the new count.`},{type:`text`,content:`onClick={() => setCount(count + 1)} — When the user clicks 'Add 1', this calls setCount with the current count plus one. React schedules a re-render, re-executes Counter, and useState(0) now returns 1 (React ignores the initial value after the first render). The <h1> displays 'Count: 1'.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Use let count = 0 instead of useState → The variable resets to 0 on every render. State is the only way to persist values between renders.`,`Write count++ instead of setCount(count + 1) → Mutating the variable directly doesn't tell React anything changed. The UI won't update.`,`Call setCount inside the component body (not in an event handler) → Creates an infinite loop: render → setState → re-render → setState → crash.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a counter with a customisable step value. The user picks a step size (1, 5, or 10) using buttons, then uses Add/Subtract buttons to change the count by that step.`,hint:`Hint: You need two states — one for count and one for step. The Add button calls setCount(count + step).`,solution:`import { useState } from 'react';

function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Step: {step}</p>
      <div>
        {[1, 5, 10].map(num => (
          <button key={num} onClick={() => setStep(num)}
            style={{ fontWeight: step === num ? 'bold' : 'normal' }}>
            Step {num}
          </button>
        ))}
      </div>
      <button onClick={() => setCount(count - step)}>Subtract</button>
      <button onClick={() => setCount(count + step)}>Add</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default StepCounter;`},{type:`practiceTask`,content:`Task 2: Create a colour changer. Buttons cycle through colours (red, blue, green, yellow). Display the colour name and apply it as the background of a div.`,hint:`Hint: Store a colour string in state. Each button calls setColor with its colour.`,solution:`import { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('white');
  const colors = ['red', 'blue', 'green', 'yellow'];

  return (
    <div>
      <h1>Color: {color}</h1>
      <div style={{ width: 100, height: 100, background: color, border: '1px solid #ccc' }} />
      {colors.map(c => (
        <button key={c} onClick={() => setColor(c)}>{c}</button>
      ))}
      <button onClick={() => setColor('white')}>Reset</button>
    </div>
  );
}

export default ColorChanger;`},{type:`practiceTask`,content:`Task 3: Build a name greeting component. An input field stores the user's name. Below it, display 'Hello, [name]!' that updates live as they type.`,hint:`Hint: Use useState('') for the name. The input's onChange updates state with e.target.value.`,solution:`import { useState } from 'react';

function NameGreeting() {
  const [name, setName] = useState('');

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}

export default NameGreeting;`},{type:`title`,content:`Example 2: Toggle Switch — Mastering Booleans`},{type:`text`,content:`Booleans are everywhere: dark/light mode, menu open/closed, checkbox state. This teaches binary state and conditional rendering.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Storing a boolean in state`,`Toggling with the NOT operator (!)`,`Conditional rendering with ternary operators`,`Dynamic styling based on state`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{
      background: isOn ? '#ffd700' : '#333',
      color: isOn ? '#000' : '#fff',
      padding: '20px',
      transition: 'background 0.3s'
    }}>
      <h1>Light is {isOn ? 'ON' : 'OFF'}</h1>
      <p>{isOn ? 'The room is bright!' : 'It\\'s dark in here.'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle Light</button>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useState(false) — The light starts off. A single boolean drives the entire UI: background colour, text colour, heading text, and description text all derive from this one value.`},{type:`text`,content:`setIsOn(!isOn) — The NOT operator flips the boolean. If isOn is true, !isOn is false, and vice versa. For rapid-fire scenarios (double-clicks), prefer setIsOn(prev => !prev) to avoid stale closure issues.`},{type:`text`,content:`isOn ? '#ffd700' : '#333' — The ternary operator is your best friend for boolean-driven UI. It reads as: 'if isOn is true, use gold; otherwise, use dark grey.' This pattern works for text, styles, class names, and conditional rendering.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Write onClick={setIsOn(!isOn)} without the arrow function → This calls setIsOn immediately during render, not on click, causing an infinite loop.`,`Set initial state to null instead of false → null is falsy so the ternary works by accident. But if you later check isOn === false, null !== false breaks your logic.`,`Forget the transition CSS property → The toggle still works but feels jarring. The 0.3s transition makes state changes feel smooth and intentional.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a dark/light theme toggle. Clicking a button switches between dark background + light text and light background + dark text. Display the current theme name.`,hint:`Hint: useState(false) where false = light mode. Apply conditional styles to a wrapper div.`,solution:`import { useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      background: isDark ? '#1a1a2e' : '#f5f5f5',
      color: isDark ? '#e0e0e0' : '#333',
      minHeight: '100vh', padding: '20px', transition: 'all 0.3s'
    }}>
      <h1>{isDark ? 'Dark' : 'Light'} Mode</h1>
      <button onClick={() => setIsDark(prev => !prev)}>
        Switch to {isDark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}

export default ThemeToggle;`},{type:`practiceTask`,content:`Task 2: Create a password visibility toggle. An input field shows a password. A button toggles between type='password' and type='text'.`,hint:`Hint: useState(false) for showPassword. The input's type is showPassword ? 'text' : 'password'.`,solution:`import { useState } from 'react';

function PasswordToggle() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div>
      <input type={show ? 'text' : 'password'} value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default PasswordToggle;`},{type:`practiceTask`,content:`Task 3: Build an accordion FAQ. A question is always visible. Clicking it toggles the answer's visibility.`,hint:`Hint: useState(false) for isOpen. Render the answer only when isOpen is true: {isOpen && <p>Answer</p>}.`,solution:`import { useState } from 'react';

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h3 onClick={() => setIsOpen(prev => !prev)} style={{ cursor: 'pointer' }}>
        What is useState? {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <p>useState is a React Hook that lets you add state to functional components.</p>
      )}
    </div>
  );
}

export default Accordion;`},{type:`title`,content:`Example 3: Signup Form with Validation — Object State`},{type:`text`,content:`Forms are the backbone of web apps. This teaches you to manage multiple related fields in a single state object, validate in real time, and compute derived values like form validity.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Storing an object in state`,`Updating one field without losing others (spread operator)`,`Dynamic property names with computed keys [e.target.name]`,`Real-time validation with error state`,`Derived values (isFormValid) computed during render`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', age: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === 'name') {
        if (value.length < 3) newErrors.name = 'Name must be 3+ characters';
        else delete newErrors.name;
      }
      if (name === 'email') {
        if (!value.includes('@')) newErrors.email = 'Invalid email format';
        else delete newErrors.email;
      }
      if (name === 'age') {
        const ageNum = parseInt(value, 10);
        if (isNaN(ageNum) || ageNum < 18) newErrors.age = 'Must be 18 or older';
        else delete newErrors.age;
      }
      if (name === 'password') {
        if (value.length < 8 || !/\\d/.test(value)) newErrors.password = '8+ chars with a number';
        else delete newErrors.password;
      }
      return newErrors;
    });
  };

  const clearForm = () => {
    setForm({ name: '', email: '', age: '', password: '' });
    setErrors({});
    setSubmitted(false);
  };

  const isFormValid = Object.keys(errors).length === 0 &&
    Object.values(form).every(value => value);

  return (
    <div>
      <h1>Signup Form</h1>
      {['name', 'email', 'age', 'password'].map(field => (
        <div key={field}>
          <input
            type={field === 'password' ? 'password' : field === 'age' ? 'number' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          />
          {errors[field] && <p style={{ color: 'red' }}>{errors[field]}</p>}
        </div>
      ))}
      <button onClick={clearForm}>Clear</button>
      <button onClick={() => setSubmitted(true)} disabled={!isFormValid}>Submit</button>
      {submitted && isFormValid && <p style={{ color: 'green' }}>Submitted!</p>}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`useState({ name: '', email: '', age: '', password: '' }) — A single state object holds all form fields. This is better than four separate useState calls because the fields are related — they represent one form.`},{type:`text`,content:`setForm({ ...form, [name]: value }) — The spread operator copies all existing fields, then [name]: value overwrites just the one that changed. The square brackets are a computed property name — if name is 'email', this becomes { ...form, email: value }. One handler works for all inputs.`},{type:`text`,content:`setErrors((prevErrors) => { ... }) — Validation uses the functional update form. We clone prevErrors with spread, then add or delete error keys. Using delete removes the key entirely, keeping the errors object clean.`},{type:`text`,content:`const isFormValid = ... — A derived value, not state. Computed fresh every render from current errors and form values. No need for a separate useState — that would create a sync problem.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Use setForm({ [name]: value }) without the spread → Every keystroke wipes all other fields. Only the field you just typed in would have a value.`,`Store errors as an array instead of an object → You'd need to search the array to check if a field has an error. An object gives O(1) lookup by field name.`,`Compute isFormValid inside useState → You'd need to call setIsFormValid every time form or errors change. The derived value approach is simpler and always correct.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a contact form with name, email, and message fields. Add validation (name required, email must contain @, message min 10 chars). Show a character counter for the message.`,hint:`Hint: The character counter is message.length — a derived value, not separate state.`,solution:`import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const newErrors = { ...errors };
    if (name === 'name' && !value.trim()) newErrors.name = 'Required';
    else if (name === 'name') delete newErrors.name;
    if (name === 'email' && !value.includes('@')) newErrors.email = 'Invalid email';
    else if (name === 'email') delete newErrors.email;
    if (name === 'message' && value.length < 10) newErrors.message = 'Min 10 chars';
    else if (name === 'message') delete newErrors.message;
    setErrors(newErrors);
  };

  const isValid = Object.keys(errors).length === 0 && Object.values(form).every(v => v);

  return (
    <div>
      <h1>Contact Us</h1>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />
      <p>{form.message.length} characters</p>
      {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      <button onClick={() => setSent(true)} disabled={!isValid}>Send</button>
      {sent && <p style={{ color: 'green' }}>Sent!</p>}
    </div>
  );
}

export default ContactForm;`},{type:`practiceTask`,content:`Task 2: Create a profile editor with first name, last name, and bio. Display a live preview card as the user types. Add a Reset button.`,hint:`Hint: The preview just reads from form state — no separate state needed.`,solution:`import { useState } from 'react';

function ProfileEditor() {
  const [profile, setProfile] = useState({ firstName: '', lastName: '', bio: '' });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <input name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" />
      <input name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" />
      <textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" />
      <button onClick={() => setProfile({ firstName: '', lastName: '', bio: '' })}>Reset</button>
      <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '15px' }}>
        <h2>{profile.firstName || 'First'} {profile.lastName || 'Last'}</h2>
        <p>{profile.bio || 'No bio yet.'}</p>
      </div>
    </div>
  );
}

export default ProfileEditor;`},{type:`title`,content:`Example 4: To-Do List with Filters — Array State`},{type:`text`,content:`Lists are the most common UI pattern. This covers every array operation you'll need — adding, removing, updating, filtering, and sorting — all with immutable updates.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Storing arrays in state`,`Adding: [...tasks, newTask]`,`Removing: tasks.filter(t => t.id !== id)`,`Updating: tasks.map(t => t.id === id ? {...t, done: true} : t)`,`Derived data: filtering and sorting without extra state`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ text: '', priority: 'Medium' });
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('added');

  const addTask = () => {
    if (newTask.text.trim()) {
      setTasks([...tasks, {
        id: Date.now(), text: newTask.text, completed: false,
        priority: newTask.priority, createdAt: new Date()
      }]);
      setNewTask({ text: '', priority: 'Medium' });
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  const clearCompleted = () => setTasks(tasks.filter(task => !task.completed));

  // Derived data — computed from state, not stored in state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    return task.completed;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'added') return b.createdAt - a.createdAt;
    if (sortBy === 'alphabetical') return a.text.localeCompare(b.text);
    if (sortBy === 'priority') {
      const p = { High: 1, Medium: 2, Low: 3 };
      return p[a.priority] - p[b.priority];
    }
    return 0;
  });

  return (
    <div>
      <h1>To-Do List ({filteredTasks.length}/{tasks.length})</h1>
      <input type="text" value={newTask.text}
        onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
        placeholder="Add a task" />
      <select value={newTask.priority}
        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={addTask}>Add</button>
      <div>
        {['all', 'active', 'completed'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            style={{ fontWeight: filter === f ? 'bold' : 'normal' }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="added">Newest First</option>
        <option value="alphabetical">A-Z</option>
        <option value="priority">Priority</option>
      </select>
      <button onClick={clearCompleted}>Clear Completed</button>
      <ul>
        {sortedTasks.map(task => (
          <li key={task.id} style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.priority === 'High' ? 'red' : task.priority === 'Low' ? 'grey' : 'black'
          }}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            {task.text} [{task.priority}]
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`setTasks([...tasks, newItem]) — Adding to an array. Spread copies existing tasks, then the new item is appended. Never use push() — it mutates the existing array and React won't detect the change.`},{type:`text`,content:`tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task) — Updating one item. map() creates a new array. The ternary checks each item's ID: if it matches, return an updated copy; otherwise return the original. This is the standard 'update one item in an array' pattern.`},{type:`text`,content:`tasks.filter(task => task.id !== id) — Removing from an array. filter() creates a new array with only the items that pass the test. The original array is untouched.`},{type:`text`,content:`filteredTasks and sortedTasks — Derived values computed during render, not stored in state. If we stored them separately, we'd need to manually re-compute them every time tasks, filter, or sortBy changed — a recipe for bugs.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Use tasks.push(newItem) instead of [...tasks, newItem] → push() mutates the original array. React sees the same reference and skips the re-render.`,`Sort filteredTasks directly: filteredTasks.sort() → .sort() mutates in place. Use [...filteredTasks].sort() to create a safe copy first.`,`Store filteredTasks in useState → You'd need to call setFilteredTasks every time tasks or filter changes. Forgetting one path means stale data.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a shopping list. Users add items (name + quantity). Show the list with +/- quantity buttons and remove. Display total items.`,hint:`Hint: Each item is { id, name, quantity }. Total is items.reduce((sum, i) => sum + i.quantity, 0).`,solution:`import { useState } from 'react';

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: Date.now(), name: input, quantity: 1 }]);
      setInput('');
    }
  };

  const updateQty = (id, change) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h1>Shopping List ({totalItems} items)</h1>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add item" />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} x{item.quantity}
            <button onClick={() => updateQty(item.id, -1)}>-</button>
            <button onClick={() => updateQty(item.id, 1)}>+</button>
            <button onClick={() => setItems(items.filter(i => i.id !== item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;`},{type:`practiceTask`,content:`Task 2: Create an Emoji Reaction Tracker. Display messages, each with emoji reaction buttons (👍 ❤️ 😂). Clicking an emoji increments its count for that message.`,hint:`Hint: Each message has reactions: { like: 0, love: 0, laugh: 0 }. Update with nested spread: { ...msg, reactions: { ...msg.reactions, [emoji]: count + 1 } }.`,solution:`import { useState } from 'react';

function EmojiTracker() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'React is awesome!', reactions: { like: 0, love: 0, laugh: 0 } },
    { id: 2, text: 'useState is powerful', reactions: { like: 0, love: 0, laugh: 0 } },
  ]);

  const addReaction = (msgId, emoji) => {
    setMessages(messages.map(msg =>
      msg.id === msgId
        ? { ...msg, reactions: { ...msg.reactions, [emoji]: msg.reactions[emoji] + 1 } }
        : msg
    ));
  };

  const emojiMap = { like: '👍', love: '❤️', laugh: '😂' };

  return (
    <div>
      <h1>Emoji Reactions</h1>
      {messages.map(msg => (
        <div key={msg.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <p>{msg.text}</p>
          {Object.entries(msg.reactions).map(([emoji, count]) => (
            <button key={emoji} onClick={() => addReaction(msg.id, emoji)}>
              {emojiMap[emoji]} {count}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default EmojiTracker;`},{type:`practiceTask`,content:`Task 3: Build a Kanban board with three columns: Todo, In Progress, Done. Users add tasks to Todo and move them forward with a button.`,hint:`Hint: All tasks in one array with a status field. Filter by status per column. Move = map to update the status.`,solution:`import { useState } from 'react';

function KanbanBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn useState', status: 'todo' },
    { id: 2, text: 'Build Kanban', status: 'progress' },
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, status: 'todo' }]);
      setInput('');
    }
  };

  const moveForward = (id) => {
    const next = { todo: 'progress', progress: 'done' };
    setTasks(tasks.map(t => t.id === id && next[t.status] ? { ...t, status: next[t.status] } : t));
  };

  return (
    <div>
      <h1>Kanban Board</h1>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task" />
      <button onClick={addTask}>Add</button>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {['todo', 'progress', 'done'].map(col => (
          <div key={col} style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
            <h2>{col === 'todo' ? 'To Do' : col === 'progress' ? 'In Progress' : 'Done'}</h2>
            {tasks.filter(t => t.status === col).map(t => (
              <div key={t.id} style={{ padding: '5px', margin: '5px 0', background: '#f9f9f9' }}>
                {t.text}
                {col !== 'done' && <button onClick={() => moveForward(t.id)}>→</button>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;`},{type:`title`,content:`Example 5: E-Commerce Shopping Cart`},{type:`text`,content:`This is where useState feels like real production code. An e-commerce cart combines objects, arrays, derived values, and validation into a single complex component.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Managing multiple coordinated state variables`,`The find + map pattern (update existing item or add new one)`,`Derived calculations (totals, discounts, category filters)`,`Input validation before state updates`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({ name: '', price: '', category: '', stock: '' });
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addToCart = () => {
    if (product.name.trim() && product.price > 0 && product.stock > 0) {
      const existingItem = cart.find(item => item.name === product.name);

      if (existingItem) {
        if (existingItem.quantity >= parseInt(product.stock)) {
          alert('Out of stock!');
          return;
        }
        setCart(cart.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        setCart([...cart, {
          id: Date.now(),
          name: product.name,
          price: parseFloat(product.price),
          category: product.category || 'General',
          quantity: 1,
          stock: parseInt(product.stock),
        }]);
      }
      setProduct({ name: '', price: '', category: '', stock: '' });
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.min(Math.max(1, item.quantity + change), item.stock) }
        : item
    ));
  };

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

  const applyCoupon = () => {
    if (coupon.toLowerCase() === 'save10') {
      setDiscount(0.1);
      setCoupon('');
    } else {
      alert('Invalid coupon');
      setCoupon('');
    }
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setSelectedCategory('all');
  };

  // Derived values — all computed from state, never stored separately
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * (1 - discount);
  const categories = ['all', ...new Set(cart.map(item => item.category))];
  const filteredCart = cart.filter(item =>
    selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product" />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" />
        <input type="number" name="stock" value={product.stock} onChange={handleChange} placeholder="Stock" />
        <button onClick={addToCart}>Add to Cart</button>
      </div>
      <div>
        <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code" />
        <button onClick={applyCoupon}>Apply</button>
        {discount > 0 && <span> {discount * 100}% off!</span>}
      </div>
      <div>
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}
            style={{ fontWeight: selectedCategory === cat ? 'bold' : 'normal' }}>
            {cat}
          </button>
        ))}
      </div>
      <ul>
        {filteredCart.map(item => (
          <li key={item.id}>
            {item.name} - £{item.price.toFixed(2)} x {item.quantity} = £{(item.price * item.quantity).toFixed(2)}
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: £{totalPrice.toFixed(2)}</h2>
      {discount > 0 && <h2>After Discount: £{discountedPrice.toFixed(2)}</h2>}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`The find + map pattern (addToCart) — First, cart.find() checks if the product already exists. If it does, we use map() to increment only that item's quantity. If not, we spread the cart and append a new item. This avoids duplicates while properly incrementing existing items.`},{type:`text`,content:`Math.min(Math.max(1, item.quantity + change), item.stock) — This clamps the quantity between 1 and the stock limit. Math.max(1, ...) prevents going below 1, and Math.min(..., item.stock) prevents exceeding stock. A common pattern for bounded number inputs.`},{type:`text`,content:`new Set(cart.map(item => item.category)) — Creates a unique list of categories from the cart items. We spread it into an array and prepend 'all' to create dynamic filter buttons. This is derived data — no separate state needed.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Skip the find check and always push a new item → Users would see 'Apple x1' listed three times instead of 'Apple x3'. The find + map pattern is how real carts work.`,`Store totalPrice in useState → Every cart change would need a manual setTotalPrice call. Missing one means the price display is wrong. Derive it instead.`,`Use cart.push() in addToCart → Mutates the array. React sees the same reference and the new item never appears on screen.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a Meal Planner with a calorie budget. Users add meals (name + calories). Display the total calories and remaining budget. Highlight when over budget.`,hint:`Hint: useState(2000) for budget, useState([]) for meals. Remaining = budget - total. Style red when remaining < 0.`,solution:`import { useState } from 'react';

function MealPlanner() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({ name: '', calories: '' });
  const budget = 2000;

  const addMeal = () => {
    if (meal.name.trim() && meal.calories > 0) {
      setMeals([...meals, { id: Date.now(), name: meal.name, calories: parseInt(meal.calories) }]);
      setMeal({ name: '', calories: '' });
    }
  };

  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);
  const remaining = budget - totalCalories;

  return (
    <div>
      <h1>Meal Planner</h1>
      <p>Budget: {budget} cal | Used: {totalCalories} | 
        <span style={{ color: remaining < 0 ? 'red' : 'green' }}> Remaining: {remaining}</span>
      </p>
      <input value={meal.name} onChange={e => setMeal({ ...meal, name: e.target.value })} placeholder="Meal" />
      <input type="number" value={meal.calories} onChange={e => setMeal({ ...meal, calories: e.target.value })} placeholder="Calories" />
      <button onClick={addMeal}>Add</button>
      <ul>
        {meals.map(m => (
          <li key={m.id}>
            {m.name} — {m.calories} cal
            <button onClick={() => setMeals(meals.filter(x => x.id !== m.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealPlanner;`},{type:`practiceTask`,content:`Task 2: Create a Split Bill Calculator. Users add people and items with prices. Each item can be assigned to one or more people. Calculate what each person owes.`,hint:`Hint: Items have an assignedTo array of person names. Each person's total = sum of (item.price / item.assignedTo.length) for items they're assigned to.`,solution:`import { useState } from 'react';

function SplitBill() {
  const [people, setPeople] = useState(['Alice', 'Bob']);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', assignedTo: [] });
  const [newPerson, setNewPerson] = useState('');

  const addPerson = () => {
    if (newPerson.trim() && !people.includes(newPerson)) {
      setPeople([...people, newPerson]);
      setNewPerson('');
    }
  };

  const toggleAssign = (person) => {
    setNewItem(prev => ({
      ...prev,
      assignedTo: prev.assignedTo.includes(person)
        ? prev.assignedTo.filter(p => p !== person)
        : [...prev.assignedTo, person]
    }));
  };

  const addItem = () => {
    if (newItem.name && newItem.price > 0 && newItem.assignedTo.length > 0) {
      setItems([...items, { ...newItem, id: Date.now(), price: parseFloat(newItem.price) }]);
      setNewItem({ name: '', price: '', assignedTo: [] });
    }
  };

  const getPersonTotal = (person) =>
    items.filter(i => i.assignedTo.includes(person))
      .reduce((sum, i) => sum + i.price / i.assignedTo.length, 0);

  return (
    <div>
      <h1>Split Bill Calculator</h1>
      <input value={newPerson} onChange={e => setNewPerson(e.target.value)} placeholder="Add person" />
      <button onClick={addPerson}>Add Person</button>
      <hr />
      <input value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} placeholder="Item" />
      <input type="number" value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} placeholder="Price" />
      <div>{people.map(p => (
        <label key={p}>
          <input type="checkbox" checked={newItem.assignedTo.includes(p)} onChange={() => toggleAssign(p)} />
          {p}
        </label>
      ))}</div>
      <button onClick={addItem}>Add Item</button>
      <h2>Summary</h2>
      {people.map(p => (
        <p key={p}>{p} owes: £{getPersonTotal(p).toFixed(2)}</p>
      ))}
    </div>
  );
}

export default SplitBill;`},{type:`title`,content:`Example 6: Task Management Dashboard — Nested State`},{type:`text`,content:`Real applications often have hierarchical data: projects contain tasks, orders contain items, threads contain messages. This example teaches you to manage nested state immutably — the trickiest useState pattern.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Nested state: arrays of objects containing arrays`,`Deep immutable updates with nested map + spread`,`Multiple form states coordinating with list state`,`When useState starts feeling complex (hint: useReducer exists)`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function TaskDashboard() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [newTask, setNewTask] = useState({
    projectId: null, title: '', status: 'todo', priority: 'Medium', dueDate: ''
  });

  const addProject = () => {
    if (newProject.name.trim()) {
      setProjects([...projects, {
        id: Date.now(), name: newProject.name,
        description: newProject.description, tasks: []
      }]);
      setNewProject({ name: '', description: '' });
    }
  };

  const addTask = () => {
    if (newTask.title.trim() && newTask.projectId) {
      setProjects(projects.map(project =>
        project.id === newTask.projectId
          ? { ...project, tasks: [...project.tasks, {
              id: Date.now(), title: newTask.title, status: newTask.status,
              priority: newTask.priority, dueDate: newTask.dueDate
            }]}
          : project
      ));
      setNewTask({ projectId: null, title: '', status: 'todo', priority: 'Medium', dueDate: '' });
    }
  };

  const updateTaskStatus = (projectId, taskId, newStatus) => {
    setProjects(projects.map(project =>
      project.id === projectId
        ? { ...project, tasks: project.tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
          )}
        : project
    ));
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter(p => p.id !== projectId));
  };

  const deleteTask = (projectId, taskId) => {
    setProjects(projects.map(project =>
      project.id === projectId
        ? { ...project, tasks: project.tasks.filter(task => task.id !== taskId) }
        : project
    ));
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <div>
        <h2>Add Project</h2>
        <input value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          placeholder="Project name" />
        <input value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          placeholder="Description" />
        <button onClick={addProject}>Add Project</button>
      </div>
      <div>
        <h2>Add Task</h2>
        <select value={newTask.projectId || ''}
          onChange={(e) => setNewTask({ ...newTask, projectId: parseInt(e.target.value) || null })}>
          <option value="">Select Project</option>
          {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <input value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="Task title" />
        <select value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <select value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input type="date" value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <h2>Projects ({projects.length})</h2>
      {projects.map(project => (
        <div key={project.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{project.name} — {project.description || 'No description'}</h3>
          <button onClick={() => deleteProject(project.id)}>Delete Project</button>
          <ul>
            {project.tasks.map(task => (
              <li key={task.id} style={{
                color: task.dueDate && new Date(task.dueDate) < new Date() ? 'red' : 'black'
              }}>
                {task.title} | {task.status} | {task.priority} | Due: {task.dueDate || 'None'}
                <select value={task.status}
                  onChange={(e) => updateTaskStatus(project.id, task.id, e.target.value)}>
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
                <button onClick={() => deleteTask(project.id, task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`The nested update pattern (addTask) — To add a task to a specific project, we map over all projects. For the matching project, we spread it and replace its tasks array with [...project.tasks, newTask]. For all other projects, we return them unchanged. This is two levels of immutable updates: outer map for projects, inner spread for the tasks array.`},{type:`text`,content:`updateTaskStatus — Three levels deep: map projects → find matching project → map its tasks → find matching task → update its status. Each level creates a new reference. This pattern works but gets verbose — it's a signal that useReducer might be a better fit for this level of complexity.`},{type:`text`,content:`deleteTask — map projects (to find the right one) → filter its tasks (to remove the target). Notice we use map for the outer level (we're updating one project, not removing it) and filter for the inner level (we're removing a task).`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Directly push into project.tasks → You're mutating the project object inside the projects array. React sees the same projects reference and skips the re-render. The task is added in memory but invisible.`,`Use find instead of map to update a project → find returns a reference to the original object. Modifying it mutates your state. map creates a new array with a new object for the changed project.`,`Forget parseInt on projectId from the select → e.target.value is always a string. Comparing string '123' to number 123 with === fails, so the task never gets added to any project.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a class roster app. Users create classes (name). Each class can have students added to it. Students can be removed individually. Display the student count per class.`,hint:`Hint: Same nested pattern — classes contain students. Map to find the class, spread to add/filter students.`,solution:`import { useState } from 'react';

function ClassRoster() {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);

  const addClass = () => {
    if (className.trim()) {
      setClasses([...classes, { id: Date.now(), name: className, students: [] }]);
      setClassName('');
    }
  };

  const addStudent = () => {
    if (studentName.trim() && selectedClass) {
      setClasses(classes.map(c =>
        c.id === selectedClass
          ? { ...c, students: [...c.students, { id: Date.now(), name: studentName }] }
          : c
      ));
      setStudentName('');
    }
  };

  const removeStudent = (classId, studentId) => {
    setClasses(classes.map(c =>
      c.id === classId
        ? { ...c, students: c.students.filter(s => s.id !== studentId) }
        : c
    ));
  };

  return (
    <div>
      <h1>Class Roster</h1>
      <input value={className} onChange={e => setClassName(e.target.value)} placeholder="Class name" />
      <button onClick={addClass}>Add Class</button>
      <hr />
      <select value={selectedClass || ''} onChange={e => setSelectedClass(parseInt(e.target.value) || null)}>
        <option value="">Select class</option>
        {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <input value={studentName} onChange={e => setStudentName(e.target.value)} placeholder="Student name" />
      <button onClick={addStudent}>Add Student</button>
      {classes.map(c => (
        <div key={c.id} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{c.name} ({c.students.length} students)</h3>
          <ul>
            {c.students.map(s => (
              <li key={s.id}>{s.name} <button onClick={() => removeStudent(c.id, s.id)}>Remove</button></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ClassRoster;`},{type:`title`,content:`Example 7: Quiz App — Multi-Step Coordinated State`},{type:`text`,content:`Interactive UIs like quizzes, wizards, and onboarding flows require multiple state variables working together — tracking the current step, recording answers, computing scores, and handling transitions. This is the capstone example.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Coordinating 5+ state variables that depend on each other`,`Index-based navigation through an array of data`,`Delayed state transitions with setTimeout`,`Resetting all state to initial values`,`Conditional rendering for multi-screen UIs`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function QuizApp() {
  const questions = [
    { id: 1, text: 'What is useState?', options: ['Hook', 'Component', 'Library'],
      answer: 'Hook', explanation: 'useState is a Hook for managing state in functional components.' },
    { id: 2, text: 'What does setState do?', options: ['Updates DOM', 'Updates state', 'Fetches data'],
      answer: 'Updates state', explanation: 'setState updates state and triggers a re-render.' },
    { id: 3, text: "What's the Virtual DOM?", options: ['Real DOM', 'Memory copy', 'Database'],
      answer: 'Memory copy', explanation: 'The Virtual DOM is a lightweight copy for efficient updates.' },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestion].answer;
    setAnswers([...answers, {
      questionId: questions[currentQuestion].id, option, isCorrect
    }]);
    setFeedback(isCorrect
      ? 'Correct! 🎉'
      : \`Wrong! \${questions[currentQuestion].explanation}\`
    );
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      setFeedback('');
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setShowResults(false);
    setFeedback('');
  };

  return (
    <div>
      <h1>React Quiz</h1>
      <p>Progress: {currentQuestion + 1}/{questions.length} | Score: {score}</p>
      {!showResults ? (
        <div>
          <h2>{questions[currentQuestion].text}</h2>
          {questions[currentQuestion].options.map(option => (
            <button key={option} onClick={() => handleAnswer(option)}
              disabled={!!feedback}>
              {option}
            </button>
          ))}
          {feedback && <p style={{
            color: feedback.includes('Correct') ? 'green' : 'red'
          }}>{feedback}</p>}
        </div>
      ) : (
        <div>
          <h2>Quiz Complete! Score: {score}/{questions.length}</h2>
          <ul>
            {answers.map((a, i) => (
              <li key={i} style={{ color: a.isCorrect ? 'green' : 'red' }}>
                Q{a.questionId}: {a.option} ({a.isCorrect ? '✓' : '✗'})
              </li>
            ))}
          </ul>
          <button onClick={resetQuiz}>Restart</button>
        </div>
      )}
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Five coordinated states — currentQuestion (index), answers (array of past responses), score (running total), showResults (boolean to swap screens), and feedback (temporary message). Each serves a distinct purpose, and the handleAnswer function updates four of them in a single user action. React batches all these updates into one re-render.`},{type:`text`,content:`questions[currentQuestion] — Using an index to navigate through an array is a powerful pattern. The questions data is static (defined outside state since it never changes), and currentQuestion acts as a pointer. Incrementing the index advances to the next question; reaching the end triggers the results screen.`},{type:`text`,content:`setTimeout for delayed transitions — After showing feedback for 2 seconds, we advance to the next question. The disabled={!!feedback} on buttons prevents double-clicks during the delay. This pattern of 'show feedback → wait → transition' is common in interactive UIs.`},{type:`text`,content:`resetQuiz — Resets all five states to their initial values. This is where having many useState calls gets tedious — you need to remember to reset each one. For complex multi-state components like this, useReducer with a RESET action might be cleaner.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Store questions in useState → The questions never change, so putting them in state adds unnecessary complexity. Static data should be a regular variable or constant.`,`Use setScore(score + 1) inside setTimeout → By the time setTimeout fires, score might be stale if other updates happened. Use setScore(prev => prev + 1) inside any async or delayed callback.`,`Forget to disable buttons during the feedback delay → Users can click multiple answers for the same question, recording duplicate answers and inflating the score.`,`Skip the resetQuiz function and reload the page instead → This destroys the entire component tree and loses any parent state. Always provide an in-app reset.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Build a timed quiz. Each question has a 10-second countdown. If time runs out, it counts as wrong and auto-advances. Display the timer.`,hint:`Hint: Use useState for timeLeft and setInterval in a useEffect (or setTimeout in a recursive pattern). Clear the timer when the user answers or time hits 0.`,solution:`import { useState } from 'react';

function TimedQuiz() {
  const questions = [
    { q: 'What hook manages state?', options: ['useState', 'useDOM', 'useData'], answer: 'useState' },
    { q: 'JSX stands for?', options: ['JavaScript XML', 'Java Syntax', 'JSON Extra'], answer: 'JavaScript XML' },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const answer = (option) => {
    if (option === questions[index].answer) setScore(prev => prev + 1);
    next();
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex(prev => prev + 1);
      setTimeLeft(10);
    } else {
      setDone(true);
    }
  };

  // Simple timer using setTimeout pattern
  if (!done && timeLeft > 0) {
    setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
  } else if (!done && timeLeft === 0) {
    next();
  }

  if (done) return (
    <div>
      <h1>Score: {score}/{questions.length}</h1>
      <button onClick={() => { setIndex(0); setScore(0); setDone(false); setTimeLeft(10); }}>Restart</button>
    </div>
  );

  return (
    <div>
      <h1>Timed Quiz</h1>
      <p>Time: {timeLeft}s | Question {index + 1}/{questions.length}</p>
      <h2>{questions[index].q}</h2>
      {questions[index].options.map(opt => (
        <button key={opt} onClick={() => answer(opt)}>{opt}</button>
      ))}
    </div>
  );
}

export default TimedQuiz;`,note:`Note: In production, you'd use useEffect for the timer instead of setTimeout in the render body. This simplified version works for understanding state coordination.`},{type:`practiceTask`,content:`Task 2: Create a quiz with a hint system. Each question has a hint that costs 1 point to reveal. Track total hints used. Display hints when requested.`,hint:`Hint: Add a hintsUsed state. Each question's hint is shown via a boolean (showHint). Revealing deducts from score.`,solution:`import { useState } from 'react';

function HintQuiz() {
  const questions = [
    { q: 'React is a ___?', options: ['Library', 'Language', 'Database'], answer: 'Library', hint: 'Think about what you import' },
    { q: 'State triggers a ___?', options: ['Re-render', 'Reload', 'Reset'], answer: 'Re-render', hint: 'React redraws the UI' },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [done, setDone] = useState(false);

  const answer = (opt) => {
    if (opt === questions[index].answer) setScore(prev => prev + 1);
    if (index + 1 < questions.length) {
      setIndex(prev => prev + 1);
      setShowHint(false);
    } else setDone(true);
  };

  const useHint = () => {
    setShowHint(true);
    setHintsUsed(prev => prev + 1);
    setScore(prev => Math.max(0, prev - 1));
  };

  if (done) return (
    <div>
      <h1>Score: {score} | Hints used: {hintsUsed}</h1>
      <button onClick={() => { setIndex(0); setScore(0); setShowHint(false); setHintsUsed(0); setDone(false); }}>Restart</button>
    </div>
  );

  return (
    <div>
      <h1>Quiz with Hints</h1>
      <p>Score: {score} | Hints used: {hintsUsed}</p>
      <h2>{questions[index].q}</h2>
      {questions[index].options.map(opt => (
        <button key={opt} onClick={() => answer(opt)}>{opt}</button>
      ))}
      {!showHint && <button onClick={useHint}>Show Hint (-1 point)</button>}
      {showHint && <p style={{ color: 'blue' }}>Hint: {questions[index].hint}</p>}
    </div>
  );
}

export default HintQuiz;`},{type:`title`,content:`What's Next`},{type:`text`,content:`You've now mastered useState across every common pattern: numbers, booleans, strings, objects, arrays, nested state, and multi-step coordination. Here's where to go next:`},{type:`list`,items:[`useEffect — Synchronise your components with external systems like APIs, timers, and the DOM. This is the natural next step after useState.`,`useState + useEffect combined — Learn how state changes trigger side effects, and how effects can update state back, creating the reactive loop that powers dynamic apps.`,`useReducer — When your component has 5+ state variables that update together (like our Quiz example), useReducer consolidates them into a single dispatch pattern.`]},{type:`text`,content:``}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=[`useState`],h=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),g=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),_=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,v=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||_(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(g,{}):(0,f.jsx)(h,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},y=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let[n,a]=(0,l.useState)(()=>{let t={};return e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)}),t}),[o,c]=(0,l.useState)(null),[d,p]=(0,l.useState)({}),[h,g]=(0,l.useState)(!1),[_,y]=(0,l.useState)(()=>{if(typeof window<`u`){let e=localStorage.getItem(`useStateCheckedTitles`);return e?JSON.parse(e):{}}return{}}),b=(e,t)=>{let r=n[e]||t[0]?.id;return t.find(e=>e.id===r)?.code||t[0]?.code||``},x=(0,l.useMemo)(()=>{let t=[];return e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),t},[e]),S=(0,l.useRef)({}),C=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;g(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let w=()=>{C.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`useStateCheckedTitles`,JSON.stringify(_))},[_]);let T=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{c(t),setTimeout(()=>c(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),c(t),setTimeout(()=>c(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},E=(e,t,r)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let i=r.findIndex(e=>e.id===n[t]),o;o=e.key===`ArrowLeft`?i>0?i-1:r.length-1:i<r.length-1?i+1:0,a({...n,[t]:r[o].id});let s=S.current[`${t}-${r[o].id}`];s&&s.focus()}},D=e=>{p(t=>({...t,[e]:!t[e]}))},O=e=>{y(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Comprehensive Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),x.length>0&&(0,f.jsxs)(`section`,{ref:C,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:x.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content,m)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:_[t]||!1,onChange:()=>O(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e,m)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(v,{code:e.content,index:t,handleCopy:T,copiedIndex:o}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(r=>{let i=`example-${t}`,o=`${i}-${r.id}`,s=`${o}-panel`;return(0,f.jsx)(`button`,{id:o,role:`tab`,"aria-selected":n[i]===r.id,"aria-controls":s,className:n[i]===r.id?`active`:``,onClick:()=>a({...n,[i]:r.id}),onKeyDown:n=>E(n,i,e.tabs,t),tabIndex:n[i]===r.id?0:-1,ref:e=>S.current[o]=e,children:r.label},r.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${n[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${n[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(v,{code:b(`example-${t}`,e.tabs),index:t,handleCopy:T,copiedIndex:o})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint,m)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>D(t),children:d[t]?`Hide Solution`:`Show Solution`}),d[t]&&(0,f.jsx)(v,{code:e.solution,index:`solution-${t}`,handleCopy:T,copiedIndex:o})]})]},`para-${t}-${e.type}`))}),h&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:w,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};v.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string])};export{y as default};
//# sourceMappingURL=UsestateGuide-BreuR1fe.js.map