/* eslint-disable no-template-curly-in-string */
const componentsPropsData = [
  {
    id: "react-components-props-guide",
    title: "The Definitive Guide to React Components & Props",
    image: "/images/componentsProps.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the Definitive Guide to React Components and Props. Components are the building blocks of every React application — every button, form, sidebar, and page you've ever seen in a React app is a component. Props are how those components talk to each other. This guide takes you from writing your first component to building production-ready, reusable component libraries through seven progressive examples, detailed breakdowns, and hands-on practice tasks.",
      },

      // ═══════════════════════════════════════════
      // SECTION 1: UNDERSTANDING COMPONENTS & PROPS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Understanding Components & Props",
      },
      {
        type: "text",
        content:
          "A React component is a JavaScript function that returns JSX — a description of what should appear on screen. Think of components as custom HTML elements that you define yourself. Just as HTML has <button>, <input>, and <div>, React lets you create <UserCard>, <PricingTable>, and <ShoppingCart>. Each component encapsulates its own structure, style, and behaviour in one place.",
      },
      {
        type: "text",
        content:
          "Props (short for properties) are the inputs to your components. They work exactly like function arguments — the parent component passes data in, and the child component uses it to decide what to render. Props flow one direction: parent → child. A child component never modifies the props it receives, just like a function doesn't modify its arguments.",
      },
      {
        type: "text",
        content:
          "Here's the mental model: imagine a factory that builds greeting cards. The factory (component) always follows the same process, but each card looks different because of the inputs (props) — the recipient's name, the message, the colour scheme. The factory doesn't decide what name to print; it just uses whatever it's given. That's exactly how components and props work together.",
      },
      {
        type: "boldText",
        content: "Why Components Matter",
      },
      {
        type: "list",
        items: [
          "Reusability: Write a Button component once, use it 50 times across your app with different labels and colours.",
          "Separation of concerns: Each component handles one piece of the UI. A Header component doesn't care about footer logic.",
          "Composition: Small components combine to build complex UIs. A ProductPage is made of ProductImage, ProductDetails, ReviewList, and AddToCartButton components.",
          "Maintainability: When a bug appears in the search bar, you know exactly which file to open — SearchBar.jsx.",
          "Testability: Components are just functions. You can test them by passing props in and checking what comes out.",
        ],
      },

      // ═══════════════════════════════════════════
      // SECTION 2: SYNTAX AND RULES
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Syntax and Rules",
      },
      {
        type: "code",
        content: `// Defining a component — it's just a function that returns JSX
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Using a component — pass props like HTML attributes
function App() {
  return (
    <div>
      <Greeting name="Alice" age={28} />
      <Greeting name="Bob" age={35} />
    </div>
  );
}

// Arrow function syntax — equally valid
const Greeting = ({ name, age }) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old.</p>
  </div>
);`,
      },
      {
        type: "boldText",
        content: "Component Rules",
      },
      {
        type: "list",
        items: [
          "Name must start with a capital letter: React treats <greeting> as an HTML element and <Greeting> as a component. Lowercase = HTML, uppercase = component.",
          "Must return JSX (or null): Every component returns a single root element. Use a Fragment (<>...</>) to group multiple elements without adding an extra DOM node.",
          "Must be pure during rendering: Given the same props, a component must always return the same JSX. No random numbers, no mutating external variables, no side effects during render.",
          "One component per file is the convention: Export the component as default. Name the file after the component: Button.jsx, UserCard.jsx.",
        ],
      },
      {
        type: "boldText",
        content: "Props Rules",
      },
      {
        type: "list",
        items: [
          "Props are read-only: Never modify props inside a component. Treat them as a snapshot from the parent.",
          "Any JavaScript value can be a prop: Strings, numbers, booleans, objects, arrays, functions, even other components.",
          "Strings can be passed without curly braces: name=\"Alice\". Everything else needs braces: age={28}, isActive={true}, data={[1,2,3]}.",
          "Destructure props in the function signature: function Card({ title, description }) is cleaner than function Card(props) and then props.title everywhere.",
          "Use default values for optional props: function Button({ size = 'medium' }) prevents undefined errors.",
        ],
      },
      {
        type: "boldText",
        content: "Passing Different Types of Props",
      },
      {
        type: "code",
        content: `<UserCard
  name="Alice"                    // String
  age={28}                        // Number
  isPremium={true}                // Boolean (or just: isPremium)
  hobbies={['reading', 'coding']} // Array
  address={{ city: 'London' }}    // Object (double braces: outer = JSX, inner = object)
  onClick={() => alert('Hi!')}    // Function
  icon={<StarIcon />}             // JSX element
/>

// Boolean shorthand: these are equivalent
<Button disabled={true} />
<Button disabled />`,
      },
      {
        type: "boldText",
        content: "The children Prop",
      },
      {
        type: "text",
        content:
          "Anything placed between a component's opening and closing tags is automatically passed as a special prop called children. This is how you create wrapper components like cards, modals, and layouts.",
      },
      {
        type: "code",
        content: `function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage — the <p> is passed as children
<Card title="Welcome">
  <p>This paragraph is the children prop.</p>
  <button>Click me</button>
</Card>`,
      },

      // ═══════════════════════════════════════════
      // SECTION 3: COMMON PITFALLS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Common Pitfalls",
      },
      {
        type: "boldText",
        content: "1. Mutating Props",
      },
      {
        type: "code",
        content: `// WRONG: Mutating props breaks React's data flow
function UserCard({ user }) {
  user.name = 'Modified';  // NEVER do this
  return <h1>{user.name}</h1>;
}

// CORRECT: If you need to transform data, create a new variable
function UserCard({ user }) {
  const displayName = user.name.toUpperCase();
  return <h1>{displayName}</h1>;
}`,
      },
      {
        type: "boldText",
        content: "2. Forgetting the Key Prop in Lists",
      },
      {
        type: "code",
        content: `// WRONG: No key — React can't track which item changed
{users.map(user => <UserCard name={user.name} />)}

// WRONG: Index as key — breaks when list is reordered/filtered
{users.map((user, index) => <UserCard key={index} name={user.name} />)}

// CORRECT: Stable, unique ID from your data
{users.map(user => <UserCard key={user.id} name={user.name} />)}`,
      },
      {
        type: "boldText",
        content: "3. Passing Unstable Props",
      },
      {
        type: "code",
        content: `// PROBLEM: New object/function created every render → child re-renders every time
function Parent() {
  return (
    <Child
      style={{ color: 'red' }}             // New object every render
      onClick={() => console.log('click')}  // New function every render
    />
  );
}

// SOLUTION: Define outside the render or use useMemo/useCallback
const style = { color: 'red' };
const handleClick = () => console.log('click');

function Parent() {
  return <Child style={style} onClick={handleClick} />;
}`,
      },
      {
        type: "boldText",
        content: "4. Prop Drilling",
      },
      {
        type: "text",
        content:
          "Passing props through multiple layers of components that don't use them — just to get data to a deeply nested child. If you find yourself passing a prop through 3+ levels, consider useContext or a state management solution instead.",
      },
      {
        type: "code",
        content: `// PROP DRILLING: App → Layout → Sidebar → UserMenu → Avatar
// App passes 'user' through 4 components that don't use it

// SOLUTION: useContext
const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={user}>
      <Layout />  {/* No need to pass user as a prop */}
    </UserContext.Provider>
  );
}

// Avatar reads directly from context — no drilling
function Avatar() {
  const user = useContext(UserContext);
  return <img src={user.avatar} alt={user.name} />;
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 1: BASIC COMPONENT — UserCard
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 1: User Card — Your First Component",
      },
      {
        type: "text",
        content:
          "The simplest real-world component: a card that displays user information. This teaches the fundamentals — receiving props, destructuring, conditional rendering, and composing JSX.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Defining a functional component",
          "Receiving and destructuring props",
          "Conditional rendering based on props",
          "Inline styles driven by prop values",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `function UserCard({ name, role, isOnline, avatar }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      maxWidth: '350px',
    }}>
      <img
        src={avatar}
        alt={name}
        style={{ width: 60, height: 60, borderRadius: '50%' }}
      />
      <div>
        <h2 style={{ margin: 0 }}>{name}</h2>
        <p style={{ margin: '4px 0', color: '#666' }}>{role}</p>
        <span style={{
          color: isOnline ? '#4CAF50' : '#999',
          fontSize: '14px',
        }}>
          {isOnline ? '🟢 Online' : '⚫ Offline'}
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <UserCard
        name="Alice Johnson"
        role="Frontend Developer"
        isOnline={true}
        avatar="https://i.pravatar.cc/60?img=1"
      />
      <UserCard
        name="Bob Smith"
        role="Designer"
        isOnline={false}
        avatar="https://i.pravatar.cc/60?img=2"
      />
      <UserCard
        name="Charlie Brown"
        role="Project Manager"
        isOnline={true}
        avatar="https://i.pravatar.cc/60?img=3"
      />
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "{ name, role, isOnline, avatar } — Destructuring props directly in the function signature. This is cleaner than receiving props as a single object and writing props.name, props.role everywhere. Each prop maps to one piece of data the card needs to display.",
      },
      {
        type: "text",
        content:
          "isOnline ? '🟢 Online' : '⚫ Offline' — The ternary operator is the standard way to render different content based on a boolean prop. The same pattern drives the colour: isOnline ? '#4CAF50' : '#999'. One prop controls multiple visual elements.",
      },
      {
        type: "text",
        content:
          "Each <UserCard /> in App receives different props, producing three visually distinct cards from the same component definition. This is the power of reusability — one component, infinite variations through props.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Name the component userCard (lowercase) → React treats it as an HTML element, not a component. It renders an empty unknown element instead of your card.",
          "Forget to pass avatar → The <img> renders with src={undefined}, showing a broken image icon. Always provide defaults for optional props or handle the missing case.",
          "Modify the props object: name = name.toUpperCase() → This mutates the prop. While it might 'work' visually, it violates React's rules and can cause bugs in parent components that reference the same data.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Create a ProductCard component that accepts name, price (number), rating (1-5), and imageUrl. Display the price formatted as £X.XX, and render the rating as stars (⭐ repeated rating times). Add a subtle border and hover-style shadow.",
        hint: "Hint: Use price.toFixed(2) for formatting. Use '⭐'.repeat(rating) for stars. For hover, consider a simple border change or use CSS classes.",
        solution: `function ProductCard({ name, price, rating, imageUrl }) {
  return (
    <div style={{
      border: '1px solid #eee', borderRadius: '10px', padding: '15px',
      width: '220px', transition: 'box-shadow 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <img src={imageUrl} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3 style={{ margin: '10px 0 5px' }}>{name}</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '5px 0' }}>£{price.toFixed(2)}</p>
      <p>{'⭐'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ProductCard name="Headphones" price={49.99} rating={4} imageUrl="https://via.placeholder.com/200" />
      <ProductCard name="Keyboard" price={89.5} rating={5} imageUrl="https://via.placeholder.com/200" />
      <ProductCard name="Mouse" price={29.99} rating={3} imageUrl="https://via.placeholder.com/200" />
    </div>
  );
}

export default ProductCard;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Build a Badge component that accepts label (string) and variant ('success', 'warning', 'error', 'info'). Each variant should have a different background colour. Use it to display four badges in a row.",
        hint: "Hint: Create a colours object { success: '#4CAF50', warning: '#FF9800', error: '#f44336', info: '#2196F3' }. Look up the colour by variant.",
        solution: `function Badge({ label, variant = 'info' }) {
  const colors = {
    success: { bg: '#e8f5e9', text: '#2e7d32' },
    warning: { bg: '#fff3e0', text: '#e65100' },
    error: { bg: '#ffebee', text: '#c62828' },
    info: { bg: '#e3f2fd', text: '#1565c0' },
  };
  const { bg, text } = colors[variant] || colors.info;

  return (
    <span style={{
      backgroundColor: bg, color: text, padding: '4px 12px',
      borderRadius: '12px', fontSize: '13px', fontWeight: 600,
    }}>
      {label}
    </span>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge label="Active" variant="success" />
      <Badge label="Pending" variant="warning" />
      <Badge label="Failed" variant="error" />
      <Badge label="New" variant="info" />
    </div>
  );
}

export default Badge;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 2: DEFAULT PROPS & CHILDREN
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 2: Alert Component — Defaults & Children",
      },
      {
        type: "text",
        content:
          "Real components need sensible defaults and flexible content. The children prop is how React components accept arbitrary nested content — just like HTML's <div> can contain anything. This example builds a reusable alert/notification component.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Default prop values for optional configurations",
          "The children prop for flexible content",
          "Computed styles from prop values",
          "Boolean props for toggling features",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState } from 'react';

function Alert({ type = 'info', title, children, dismissible = false }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const styles = {
    info:    { bg: '#e3f2fd', border: '#90caf9', icon: 'ℹ️' },
    success: { bg: '#e8f5e9', border: '#a5d6a7', icon: '✅' },
    warning: { bg: '#fff3e0', border: '#ffcc80', icon: '⚠️' },
    error:   { bg: '#ffebee', border: '#ef9a9a', icon: '❌' },
  };

  const { bg, border, icon } = styles[type] || styles.info;

  return (
    <div style={{
      backgroundColor: bg,
      border: \`1px solid \${border}\`,
      borderRadius: '8px',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      marginBottom: '10px',
    }}>
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <div style={{ flex: 1 }}>
        {title && <strong style={{ display: 'block', marginBottom: '4px' }}>{title}</strong>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '20px' }}>
      <Alert type="success" title="Saved!">
        <p>Your changes have been saved successfully.</p>
      </Alert>

      <Alert type="warning" dismissible>
        <p>Your session expires in 5 minutes.</p>
      </Alert>

      <Alert type="error" title="Upload Failed" dismissible>
        <p>The file exceeds the 10MB limit. Please try a smaller file.</p>
      </Alert>

      <Alert>
        <p>This is a default info alert with no title.</p>
      </Alert>
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "{ type = 'info', title, children, dismissible = false } — Default values in the destructuring. If the parent doesn't pass type, it defaults to 'info'. If dismissible isn't passed, it defaults to false. This means the simplest usage is <Alert>message</Alert> — every prop is optional except children.",
      },
      {
        type: "text",
        content:
          "children — Whatever the parent places between <Alert> and </Alert> becomes the children prop. It can be a paragraph, a list, a form, buttons — anything. This makes the component infinitely flexible while keeping its visual structure consistent.",
      },
      {
        type: "text",
        content:
          "{title && <strong>...</strong>} — Short-circuit rendering. If title is undefined (not passed), the expression evaluates to false and nothing renders. If title has a value, the <strong> element renders. This pattern lets components handle optional features gracefully.",
      },
      {
        type: "text",
        content:
          "The styles lookup object — Instead of a long if/else chain, we map each type to its visual properties in an object. styles[type] gives us the right colours instantly. The fallback || styles.info handles invalid types safely.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget default values: type has no default → styles[undefined] returns undefined, and the destructuring crashes with 'Cannot read property bg of undefined.'",
          "Use {children} outside a <div> wrapper → Multiple children elements would need a parent. Without the wrapper, React throws an error about adjacent JSX elements.",
          "Pass type='critical' (not in the styles object) without the fallback → Same crash as above. The || styles.info fallback is a safety net for unexpected values.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Create a Tooltip component that wraps any element and shows a tooltip message on hover. Accept children (the trigger element), message (string), and position ('top' or 'bottom', default 'top') as props.",
        hint: "Hint: Use useState for visibility. onMouseEnter/onMouseLeave toggle it. Position the tooltip with absolute positioning relative to a relative parent.",
        solution: `import { useState } from 'react';

function Tooltip({ children, message, position = 'top' }) {
  const [show, setShow] = useState(false);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span style={{
          position: 'absolute',
          [position === 'top' ? 'bottom' : 'top']: '120%',
          left: '50%', transform: 'translateX(-50%)',
          backgroundColor: '#333', color: '#fff',
          padding: '6px 12px', borderRadius: '6px',
          fontSize: '13px', whiteSpace: 'nowrap',
          zIndex: 10,
        }}>
          {message}
        </span>
      )}
    </span>
  );
}

function App() {
  return (
    <div style={{ padding: '100px', display: 'flex', gap: '30px' }}>
      <Tooltip message="Edit this item">
        <button>Edit</button>
      </Tooltip>
      <Tooltip message="Remove permanently" position="bottom">
        <button>Delete</button>
      </Tooltip>
    </div>
  );
}

export default Tooltip;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Build an Accordion component that accepts a title and children. Clicking the title toggles the children's visibility. Add an initialOpen boolean prop (default false). Display an arrow indicator (▼/▲).",
        hint: "Hint: useState(initialOpen) for the open state. Render children conditionally with {isOpen && children}.",
        solution: `import { useState } from 'react';

function Accordion({ title, children, initialOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '8px' }}>
      <button onClick={() => setIsOpen(o => !o)} style={{
        width: '100%', padding: '12px 16px', border: 'none', background: '#f5f5f5',
        cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
        fontSize: '16px', fontWeight: 'bold', borderRadius: isOpen ? '8px 8px 0 0' : '8px',
      }}>
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div style={{ padding: '16px' }}>{children}</div>}
    </div>
  );
}

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '20px' }}>
      <Accordion title="What is React?" initialOpen>
        <p>React is a JavaScript library for building user interfaces.</p>
      </Accordion>
      <Accordion title="What are props?">
        <p>Props are inputs passed from parent to child components.</p>
      </Accordion>
      <Accordion title="What is state?">
        <p>State is data that changes over time within a component.</p>
      </Accordion>
    </div>
  );
}

export default Accordion;`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 3: CALLBACK PROPS — Parent-Child Communication
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 3: Callback Props — Parent-Child Communication",
      },
      {
        type: "text",
        content:
          "Props flow down, but what if a child needs to send data back up to its parent? The answer is callback props — the parent passes a function as a prop, and the child calls it with data. This is how React handles the 'lifting state up' pattern: the parent owns the state, the child triggers changes through callbacks.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Passing functions as props",
          "Child-to-parent communication via callbacks",
          "Lifting state up to a shared parent",
          "Coordinating multiple child components through shared state",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState } from 'react';

// Child 1: Input component — calls onAdd when user submits
function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);       // Call the parent's function with the data
      setText('');        // Reset local input
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        style={{ flex: 1, padding: '8px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

// Child 2: List component — calls onToggle and onDelete
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p>No tasks yet. Add one above!</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <li key={task.id} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '8px', borderBottom: '1px solid #eee',
        }}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
          />
          <span style={{
            flex: 1,
            textDecoration: task.done ? 'line-through' : 'none',
            color: task.done ? '#999' : '#333',
          }}>
            {task.text}
          </span>
          <button onClick={() => onDelete(task.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

// Child 3: Summary component — pure display, no callbacks needed
function TaskSummary({ total, completed }) {
  return (
    <p style={{ color: '#666', fontSize: '14px' }}>
      {completed}/{total} completed
      {total > 0 && completed === total && ' — All done! 🎉'}
    </p>
  );
}

// Parent: Owns the state, passes callbacks to children
function TaskApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.done).length;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Task Manager</h1>
      <TaskInput onAdd={addTask} />
      <TaskSummary total={tasks.length} completed={completedCount} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "The parent (TaskApp) owns all the state and logic: tasks array, addTask, toggleTask, deleteTask. Each child receives only what it needs — TaskInput gets the onAdd callback, TaskList gets the data and two callbacks, TaskSummary gets just the numbers. No child knows about the others.",
      },
      {
        type: "text",
        content:
          "onAdd(text) in TaskInput — The child calls the parent's function with the new task text. The parent's addTask function receives it and updates state. The re-render flows back down: updated tasks reach TaskList and TaskSummary through their props.",
      },
      {
        type: "text",
        content:
          "This is 'lifting state up' in action. The input and the list both need access to the same tasks data. Instead of each managing its own copy (which would go out of sync), the parent owns the single source of truth and distributes it via props.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Have TaskInput own the tasks state → TaskList can't access it. Components can only share state through a common parent.",
          "Call onAdd without checking text.trim() → Empty tasks get added. Validation belongs in the component closest to the user input.",
          "Write onClick={onDelete(task.id)} without the arrow function → Calls onDelete immediately during render for every task, deleting them all. Use onClick={() => onDelete(task.id)}.",
          "Forget to pass onToggle to TaskList → Clicking checkboxes crashes with 'onToggle is not a function'. Always handle missing callback props with defaults or checks.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a rating component. A parent StarRating component owns the selected rating (1-5). It renders 5 Star child components, each receiving isSelected and onClick. Clicking a star calls the parent's callback to update the rating.",
        hint: "Hint: Map over [1,2,3,4,5]. Each Star gets onClick={() => setRating(n)}. Star renders ⭐ if isSelected, ☆ if not.",
        solution: `import { useState } from 'react';

function Star({ filled, onClick }) {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', fontSize: '28px' }}>
      {filled ? '⭐' : '☆'}
    </span>
  );
}

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div style={{ display: 'flex', gap: '4px' }}>
        {[1, 2, 3, 4, 5].map(n => (
          <Star key={n} filled={n <= rating} onClick={() => setRating(n)} />
        ))}
      </div>
      <p>Rating: {rating}/5</p>
    </div>
  );
}

export default StarRating;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Create a colour picker. A parent component owns the selected colour. Render a row of ColourSwatch child components (6 different colours). Clicking a swatch calls the parent's callback. Display the selected colour name and apply it as the background of a preview div.",
        hint: "Hint: Define colours as [{ name: 'Red', hex: '#f44336' }, ...]. Pass onClick={() => setColour(c)} to each swatch.",
        solution: `import { useState } from 'react';

function ColourSwatch({ colour, isSelected, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: 40, height: 40, borderRadius: '50%', border: isSelected ? '3px solid #333' : '2px solid #ddd',
      backgroundColor: colour.hex, cursor: 'pointer', transition: 'transform 0.1s',
      transform: isSelected ? 'scale(1.2)' : 'scale(1)',
    }} />
  );
}

function ColourPicker() {
  const colours = [
    { name: 'Red', hex: '#f44336' }, { name: 'Blue', hex: '#2196F3' },
    { name: 'Green', hex: '#4CAF50' }, { name: 'Purple', hex: '#9C27B0' },
    { name: 'Orange', hex: '#FF9800' }, { name: 'Teal', hex: '#009688' },
  ];
  const [selected, setSelected] = useState(colours[0]);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        {colours.map(c => (
          <ColourSwatch key={c.hex} colour={c} isSelected={c.hex === selected.hex}
            onClick={() => setSelected(c)} />
        ))}
      </div>
      <div style={{ width: 100, height: 100, backgroundColor: selected.hex, borderRadius: '10px' }} />
      <p>Selected: {selected.name}</p>
    </div>
  );
}

export default ColourPicker;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 4: COMPOSITION — Layout Builder
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 4: Layout Builder — Component Composition",
      },
      {
        type: "text",
        content:
          "Composition is React's primary pattern for code reuse. Instead of inheritance, you build complex UIs by nesting simple components inside each other. The children prop is the key — it lets you create 'container' components (cards, modals, layouts) that don't need to know what they contain.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Using children for flexible container components",
          "Named slots with multiple props (header, sidebar, content)",
          "Composing small components into full page layouts",
          "Specialisation: creating pre-configured variants from a generic base",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `// Generic container components
function Card({ children, padding = '20px' }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0', borderRadius: '12px',
      padding, backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    }}>
      {children}
    </div>
  );
}

function PageLayout({ header, sidebar, children }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{ padding: '15px 20px', borderBottom: '1px solid #eee', background: '#fafafa' }}>
        {header}
      </header>
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '250px', padding: '20px', borderRight: '1px solid #eee' }}>
          {sidebar}
        </aside>
        <main style={{ flex: 1, padding: '20px' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

// Specialised components — pre-configured Cards
function InfoCard({ title, children }) {
  return (
    <Card>
      <h3 style={{ margin: '0 0 10px', color: '#1976d2' }}>{title}</h3>
      {children}
    </Card>
  );
}

function StatCard({ label, value, trend }) {
  return (
    <Card padding="16px">
      <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{label}</p>
      <p style={{ margin: '5px 0', fontSize: '28px', fontWeight: 'bold' }}>{value}</p>
      {trend && <p style={{ margin: 0, color: trend > 0 ? '#4CAF50' : '#f44336', fontSize: '14px' }}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </p>}
    </Card>
  );
}

// Composing everything into a dashboard
function Dashboard() {
  return (
    <PageLayout
      header={<h1 style={{ margin: 0 }}>Dashboard</h1>}
      sidebar={
        <nav>
          <p><strong>Menu</strong></p>
          <p>Overview</p>
          <p>Analytics</p>
          <p>Settings</p>
        </nav>
      }
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
        <StatCard label="Total Users" value="12,847" trend={12} />
        <StatCard label="Revenue" value="£48,290" trend={-3} />
        <StatCard label="Active Sessions" value="1,423" trend={8} />
      </div>
      <InfoCard title="Recent Activity">
        <p>User Alice uploaded 3 files.</p>
        <p>User Bob completed onboarding.</p>
      </InfoCard>
    </PageLayout>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "Card is a generic container — it adds borders, padding, and shadow but has no idea what's inside it. InfoCard and StatCard are specialisations: they use Card internally but add their own structure (a title, a value, a trend indicator). This is composition over inheritance.",
      },
      {
        type: "text",
        content:
          "PageLayout uses named slots — header, sidebar, and children. Each slot receives JSX from the parent, and PageLayout just decides where to position them. The parent (Dashboard) controls the content; the layout controls the structure. Neither knows about the other's internals.",
      },
      {
        type: "text",
        content:
          "The Dashboard composes everything: PageLayout wraps the page, StatCards sit in a CSS grid, InfoCard holds activity text. Each piece is independent and reusable — StatCard could appear on any page, and PageLayout could wrap any content.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget {children} inside Card → The content passed between <Card> and </Card> silently disappears. The card renders as an empty box.",
          "Pass header as a string instead of JSX → It renders as plain text, losing all styling. Named slot props work best when they accept JSX: header={<h1>Title</h1>}.",
          "Hard-code content inside Card instead of using children → The component becomes a one-off. Every card variation needs a new component instead of reusing the same container.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Create a Modal component that accepts title, children, footer, and onClose props. Display a dark overlay with a centred white box. The title goes at the top, children in the body, and footer at the bottom (for action buttons). Use it with different content.",
        hint: "Hint: Use position: fixed for the overlay. The footer slot can receive <button> elements from the parent.",
        solution: `function Modal({ title, children, footer, onClose }) {
  return (
    <div onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#fff', borderRadius: '12px', padding: '24px',
        minWidth: '350px', maxWidth: '500px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>✕</button>
        </div>
        <div style={{ marginBottom: '20px' }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>{footer}</div>}
      </div>
    </div>
  );
}

// Usage:
// <Modal title="Confirm" onClose={close}
//   footer={<><button onClick={close}>Cancel</button><button onClick={save}>Save</button></>}>
//   <p>Are you sure you want to save?</p>
// </Modal>

export default Modal;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 5: RENDERING LISTS OF COMPONENTS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 5: Contact List — Rendering Lists of Components",
      },
      {
        type: "text",
        content:
          "One of the most common patterns in React: mapping over an array of data to render a list of components. Each item becomes an instance of the same component with different props. This example combines mapping, filtering, sorting, and component extraction into a searchable contact list.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Mapping data arrays to component instances",
          "Proper use of the key prop",
          "Extracting list items into their own component",
          "Filtering and sorting before rendering",
          "Empty state handling",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState } from 'react';

// Extracted list item component — keeps the list clean
function ContactCard({ contact, onFavourite }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '12px', borderBottom: '1px solid #f0f0f0',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        backgroundColor: contact.colour, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 'bold',
      }}>
        {contact.name.charAt(0)}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 500 }}>
          {contact.name} {contact.favourite && '⭐'}
        </p>
        <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>{contact.email}</p>
      </div>
      <button
        onClick={() => onFavourite(contact.id)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}
      >
        {contact.favourite ? '💛' : '🤍'}
      </button>
    </div>
  );
}

function ContactList() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', colour: '#e91e63', favourite: true },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', colour: '#2196f3', favourite: false },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', colour: '#4caf50', favourite: false },
    { id: 4, name: 'Diana Lee', email: 'diana@example.com', colour: '#ff9800', favourite: true },
    { id: 5, name: 'Eve Martinez', email: 'eve@example.com', colour: '#9c27b0', favourite: false },
  ]);
  const [search, setSearch] = useState('');
  const [showFavourites, setShowFavourites] = useState(false);

  const toggleFavourite = (id) => {
    setContacts(contacts.map(c =>
      c.id === id ? { ...c, favourite: !c.favourite } : c
    ));
  };

  // Derived data: filter, then sort (favourites first)
  const filtered = contacts
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter(c => !showFavourites || c.favourite)
    .sort((a, b) => (b.favourite ? 1 : 0) - (a.favourite ? 1 : 0));

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Contacts ({filtered.length})</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search contacts..."
        style={{ width: '100%', padding: '10px', marginBottom: '10px', boxSizing: 'border-box' }}
      />
      <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px' }}>
        <input type="checkbox" checked={showFavourites}
          onChange={() => setShowFavourites(f => !f)} />
        {' '}Show favourites only
      </label>

      {filtered.length === 0 ? (
        <p style={{ color: '#999', textAlign: 'center' }}>No contacts found</p>
      ) : (
        filtered.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onFavourite={toggleFavourite}
          />
        ))
      )}
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "ContactCard is extracted as its own component — it receives a single contact object and a callback. This keeps the list code clean: the map just renders <ContactCard key={id} contact={c} onFavourite={fn} /> for each item. The card handles its own layout and display logic.",
      },
      {
        type: "text",
        content:
          "key={contact.id} — The key must be a stable, unique identifier from your data. React uses keys to track which items changed, moved, or were removed. Without keys (or with index keys), React can't optimise the list and may re-render every item instead of just the changed ones.",
      },
      {
        type: "text",
        content:
          "The filter → sort chain is derived data, computed fresh every render. Favourites filter, search filter, and sorting all happen before rendering. No extra state needed — just compute what you need from the existing contacts, search, and showFavourites state.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use index as key and then reorder (sort by favourites) → React associates each key (0, 1, 2...) with the wrong component. Input focus, animations, and internal state get mixed up between contacts.",
          "Pass the entire contacts array to ContactCard → Each card re-renders whenever any contact changes, even if its own data didn't. Passing just the relevant contact object keeps re-renders scoped.",
          "Forget the empty state (filtered.length === 0) → The list renders nothing, but the user has no feedback about whether the search failed or the list is empty. Always tell the user what's happening.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a recipe list. Create a RecipeCard component that accepts title, cookTime, difficulty ('Easy', 'Medium', 'Hard'), and tags (string array). The parent renders a list of 5 recipes. Add a filter dropdown for difficulty.",
        hint: "Hint: Filter the array before mapping. Map tags to <span> badges inside each card. Use a select for the difficulty filter.",
        solution: `import { useState } from 'react';

function RecipeCard({ title, cookTime, difficulty, tags }) {
  const colors = { Easy: '#4CAF50', Medium: '#FF9800', Hard: '#f44336' };
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px', marginBottom: '10px' }}>
      <h3 style={{ margin: '0 0 5px' }}>{title}</h3>
      <p style={{ margin: '4px 0', color: '#666' }}>⏱️ {cookTime} min</p>
      <span style={{ color: colors[difficulty], fontWeight: 'bold', fontSize: '14px' }}>{difficulty}</span>
      <div style={{ display: 'flex', gap: '6px', marginTop: '8px', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span key={tag} style={{ background: '#f0f0f0', padding: '3px 8px', borderRadius: '10px', fontSize: '12px' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function RecipeList() {
  const recipes = [
    { id: 1, title: 'Pasta Carbonara', cookTime: 25, difficulty: 'Easy', tags: ['Italian', 'Pasta'] },
    { id: 2, title: 'Beef Wellington', cookTime: 120, difficulty: 'Hard', tags: ['British', 'Meat'] },
    { id: 3, title: 'Caesar Salad', cookTime: 15, difficulty: 'Easy', tags: ['Salad', 'Quick'] },
    { id: 4, title: 'Pad Thai', cookTime: 35, difficulty: 'Medium', tags: ['Thai', 'Noodles'] },
    { id: 5, title: 'Soufflé', cookTime: 60, difficulty: 'Hard', tags: ['French', 'Dessert'] },
  ];

  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? recipes : recipes.filter(r => r.difficulty === filter);

  return (
    <div style={{ maxWidth: '400px' }}>
      <h1>Recipes ({filtered.length})</h1>
      <select value={filter} onChange={e => setFilter(e.target.value)} style={{ marginBottom: '15px', padding: '8px' }}>
        <option value="all">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      {filtered.map(r => <RecipeCard key={r.id} {...r} />)}
    </div>
  );
}

export default RecipeList;`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 6: CONDITIONAL COMPONENTS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 6: Notification System — Conditional Components",
      },
      {
        type: "text",
        content:
          "Real apps show different components based on conditions — a loading spinner, an error message, a success state, or nothing at all. This example builds a notification system that demonstrates every conditional rendering pattern in React.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "All conditional rendering patterns (ternary, &&, early return, switch)",
          "Rendering different components based on state",
          "Auto-dismissing notifications with timeouts",
          "Managing a list of dynamic, temporary components",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from 'react';

// Notification component — renders based on type prop
function Notification({ notification, onDismiss }) {
  const config = {
    success: { icon: '✅', bg: '#e8f5e9', border: '#a5d6a7' },
    error:   { icon: '❌', bg: '#ffebee', border: '#ef9a9a' },
    warning: { icon: '⚠️', bg: '#fff3e0', border: '#ffcc80' },
    info:    { icon: 'ℹ️', bg: '#e3f2fd', border: '#90caf9' },
  };

  const { icon, bg, border } = config[notification.type] || config.info;

  // Auto-dismiss after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(notification.id), 4000);
    return () => clearTimeout(timer);
  }, [notification.id, onDismiss]);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      padding: '12px 16px', backgroundColor: bg, border: \`1px solid \${border}\`,
      borderRadius: '8px', marginBottom: '8px',
      animation: 'slideIn 0.3s ease-out',
    }}>
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <p style={{ flex: 1, margin: 0 }}>{notification.message}</p>
      <button onClick={() => onDismiss(notification.id)}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
    </div>
  );
}

// Status display — different component per state
function StatusDisplay({ status }) {
  // Early return pattern
  if (status === 'loading') return <p>⏳ Loading data...</p>;
  if (status === 'error') return <p style={{ color: 'red' }}>❌ Something went wrong</p>;
  if (status === 'empty') return <p style={{ color: '#999' }}>📭 No data available</p>;

  // Default: success
  return <p style={{ color: 'green' }}>✅ Data loaded successfully</p>;
}

function NotificationDemo() {
  const [notifications, setNotifications] = useState([]);
  const [status, setStatus] = useState('idle');
  const [nextId, setNextId] = useState(1);

  const addNotification = (type, message) => {
    setNotifications(prev => [...prev, { id: nextId, type, message }]);
    setNextId(n => n + 1);
  };

  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Notification System</h1>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button onClick={() => addNotification('success', 'File saved!')}>Success</button>
        <button onClick={() => addNotification('error', 'Upload failed')}>Error</button>
        <button onClick={() => addNotification('warning', 'Storage almost full')}>Warning</button>
        <button onClick={() => addNotification('info', 'New update available')}>Info</button>
      </div>

      {/* Conditional: Only render container if notifications exist */}
      {notifications.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          {notifications.map(n => (
            <Notification key={n.id} notification={n} onDismiss={dismissNotification} />
          ))}
        </div>
      )}

      <h2>Status Display</h2>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
        {['loading', 'success', 'error', 'empty'].map(s => (
          <button key={s} onClick={() => setStatus(s)}
            style={{ fontWeight: status === s ? 'bold' : 'normal' }}>
            {s}
          </button>
        ))}
      </div>
      <StatusDisplay status={status} />
    </div>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "This example showcases multiple conditional rendering patterns. StatusDisplay uses early returns — each condition checks and returns immediately, making the logic easy to follow. The notification container uses && to only render when there are notifications. The Notification component itself uses a config object lookup (like the Alert example) for type-based rendering.",
      },
      {
        type: "text",
        content:
          "Notifications auto-dismiss using useEffect with a setTimeout. When the timer fires, it calls onDismiss which removes the notification from the parent's array. The cleanup clears the timer if the notification is manually dismissed first, preventing a double-removal attempt.",
      },
      {
        type: "text",
        content:
          "Using an incrementing ID (nextId) instead of Date.now() ensures truly unique keys even if two notifications are added in the same millisecond. Each notification gets a guaranteed unique ID.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use the array index as key for notifications → Dismissing the first notification reassigns keys, and React re-renders all remaining notifications, resetting their auto-dismiss timers.",
          "Forget the useEffect cleanup → Manually dismissing a notification doesn't cancel its auto-dismiss timer. The timer fires and tries to remove an already-removed notification (harmless but wasteful), or worse, removes a different notification that reused the ID.",
          "Write {notifications.length && <div>...</div>} → When length is 0, React renders '0' on screen (because 0 is falsy but renderable). Use {notifications.length > 0 && ...} instead.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Build a multi-step form wizard. Three steps: Personal Info, Address, Confirmation. Show a different form component for each step. Add Previous/Next buttons and a step indicator (Step 1 of 3). The Confirmation step shows a summary of entered data.",
        hint: "Hint: useState(1) for the current step. Render the step component with a switch or if/else. Store form data in the parent. Pass it down to each step as props.",
        solution: `import { useState } from 'react';

function StepOne({ data, onChange }) {
  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <input value={data.name || ''} onChange={e => onChange('name', e.target.value)} placeholder="Name" />
      <input value={data.email || ''} onChange={e => onChange('email', e.target.value)} placeholder="Email" />
    </div>
  );
}

function StepTwo({ data, onChange }) {
  return (
    <div>
      <h2>Step 2: Address</h2>
      <input value={data.city || ''} onChange={e => onChange('city', e.target.value)} placeholder="City" />
      <input value={data.postcode || ''} onChange={e => onChange('postcode', e.target.value)} placeholder="Postcode" />
    </div>
  );
}

function StepThree({ data }) {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p><strong>Name:</strong> {data.name || 'Not provided'}</p>
      <p><strong>Email:</strong> {data.email || 'Not provided'}</p>
      <p><strong>City:</strong> {data.city || 'Not provided'}</p>
      <p><strong>Postcode:</strong> {data.postcode || 'Not provided'}</p>
    </div>
  );
}

function FormWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const renderStep = () => {
    if (step === 1) return <StepOne data={data} onChange={handleChange} />;
    if (step === 2) return <StepTwo data={data} onChange={handleChange} />;
    return <StepThree data={data} />;
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <p>Step {step} of 3</p>
      {renderStep()}
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        {step > 1 && <button onClick={() => setStep(s => s - 1)}>Previous</button>}
        {step < 3 && <button onClick={() => setStep(s => s + 1)}>Next</button>}
        {step === 3 && <button onClick={() => alert('Submitted!')}>Submit</button>}
      </div>
    </div>
  );
}

export default FormWizard;`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 7: REUSABLE FORM FIELD LIBRARY
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 7: Form Field Library — Reusable Components in Production",
      },
      {
        type: "text",
        content:
          "This capstone example builds what you'd find in a real codebase: a library of reusable, consistent form components. Each field handles its own layout, validation display, and accessibility while accepting flexible props for customisation. This is how teams build component libraries that scale across an entire application.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Building a consistent component API across related components",
          "Separating display logic from business logic",
          "Forwarding props with the spread operator (...rest)",
          "Accessible components with labels and ARIA attributes",
          "Composing field components into a complete form",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useState } from 'react';

// Shared wrapper for consistent layout
function FieldWrapper({ label, error, required, children }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500, fontSize: '14px' }}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      {children}
      {error && <p style={{ color: '#d32f2f', fontSize: '12px', margin: '4px 0 0' }}>{error}</p>}
    </div>
  );
}

// Text input field
function TextField({ label, error, required, ...rest }) {
  return (
    <FieldWrapper label={label} error={error} required={required}>
      <input
        {...rest}
        style={{
          width: '100%', padding: '10px', border: \`1px solid \${error ? '#d32f2f' : '#ddd'}\`,
          borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box',
          outline: 'none',
        }}
      />
    </FieldWrapper>
  );
}

// Select dropdown field
function SelectField({ label, error, required, options, placeholder, ...rest }) {
  return (
    <FieldWrapper label={label} error={error} required={required}>
      <select {...rest} style={{
        width: '100%', padding: '10px', border: \`1px solid \${error ? '#d32f2f' : '#ddd'}\`,
        borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box',
      }}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </FieldWrapper>
  );
}

// Textarea field
function TextAreaField({ label, error, required, ...rest }) {
  return (
    <FieldWrapper label={label} error={error} required={required}>
      <textarea
        {...rest}
        style={{
          width: '100%', padding: '10px', border: \`1px solid \${error ? '#d32f2f' : '#ddd'}\`,
          borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box',
          minHeight: '100px', resize: 'vertical',
        }}
      />
    </FieldWrapper>
  );
}

// Complete registration form using the field components
function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', role: '', bio: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!form.role) newErrors.role = 'Please select a role';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>✅ Registration Complete</h2>
        <p>Welcome, {form.name}!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Register</h1>
      <TextField
        label="Full Name" name="name" required
        value={form.name} onChange={handleChange}
        error={errors.name} placeholder="Enter your name"
      />
      <TextField
        label="Email" name="email" type="email" required
        value={form.email} onChange={handleChange}
        error={errors.email} placeholder="you@example.com"
      />
      <SelectField
        label="Role" name="role" required
        value={form.role} onChange={handleChange}
        error={errors.role} placeholder="Select a role"
        options={[
          { value: 'developer', label: 'Developer' },
          { value: 'designer', label: 'Designer' },
          { value: 'manager', label: 'Manager' },
        ]}
      />
      <TextAreaField
        label="Bio" name="bio"
        value={form.bio} onChange={handleChange}
        placeholder="Tell us about yourself (optional)"
      />
      <button type="submit" style={{
        width: '100%', padding: '12px', backgroundColor: '#1976d2',
        color: '#fff', border: 'none', borderRadius: '6px',
        fontSize: '16px', cursor: 'pointer',
      }}>
        Register
      </button>
    </form>
  );
}`,
      },
      {
        type: "boldText",
        content: "Step-by-Step Breakdown",
      },
      {
        type: "text",
        content:
          "FieldWrapper is the key to consistency. Every field — text, select, textarea — shares the same label placement, error message display, and required indicator. When you need to change the label style across the entire app, you change it in one place.",
      },
      {
        type: "text",
        content:
          "The ...rest pattern (spread/rest operator) is critical for real-world components. TextField receives label, error, and required for its own use, then passes everything else (...rest) directly to the <input>. This means the parent can pass any standard HTML attribute (type, placeholder, maxLength, disabled, autoComplete) without TextField needing to know about them in advance.",
      },
      {
        type: "text",
        content:
          "The form parent (RegistrationForm) owns all state and validation. Each field component is purely presentational — it displays what it's given and reports changes. This separation means you can swap out the validation logic (or add a library like Formik or React Hook Form) without changing any field components.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget {...rest} on the <input> → The parent passes value, onChange, placeholder, type — none of them reach the actual <input>. The field renders but doesn't respond to typing.",
          "Hard-code the input style without the error conditional → Error fields look the same as valid ones. Users can't tell which field has a problem.",
          "Have each field manage its own state → The parent can't validate on submit because it doesn't know what the fields contain. Field components should always be controlled (value + onChange from parent).",
          "Skip FieldWrapper and duplicate layout in every field → Changing the label style means editing TextField, SelectField, and TextAreaField separately. Any inconsistency becomes a bug.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a CheckboxField component to the form library. It should accept label, checked, onChange, and error props. Use FieldWrapper for consistent layout. Then add a 'terms and conditions' checkbox to the registration form that's required for submission.",
        hint: "Hint: Checkboxes use checked and onChange (not value). The FieldWrapper label should render beside the checkbox, not above it. Validate: if (!form.terms) errors.terms = 'Required'.",
        solution: `function CheckboxField({ label, error, ...rest }) {
  return (
    <FieldWrapper error={error}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
        <input type="checkbox" {...rest} />
        {label}
      </label>
    </FieldWrapper>
  );
}

// In RegistrationForm, add to form state:
// const [form, setForm] = useState({ name: '', email: '', role: '', bio: '', terms: false });

// Add handler:
// const handleCheck = (e) => setForm(prev => ({ ...prev, terms: e.target.checked }));

// Add to validate():
// if (!form.terms) newErrors.terms = 'You must accept the terms';

// Add before the submit button:
// <CheckboxField
//   label="I accept the terms and conditions"
//   checked={form.terms}
//   onChange={handleCheck}
//   error={errors.terms}
// />

export default CheckboxField;`,
      },
      {
        type: "practiceTask",
        content:
          "Task 2: Create a SearchableSelect component. It's a dropdown with a search input that filters options as you type. Accept label, options, value, onChange, and placeholder props. Use it in a form to select a country from a long list.",
        hint: "Hint: useState for the search text and whether the dropdown is open. Filter options by search. Clicking an option calls onChange with the value and closes the dropdown.",
        solution: `import { useState, useRef, useEffect } from 'react';

function SearchableSelect({ label, options, value, onChange, placeholder = 'Select...' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  const filtered = options.filter(o =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    const handleClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: '16px', position: 'relative' }}>
      {label && <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500, fontSize: '14px' }}>{label}</label>}
      <div onClick={() => setIsOpen(!isOpen)} style={{
        padding: '10px', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer',
      }}>
        {selected ? selected.label : placeholder}
      </div>
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, border: '1px solid #ddd', borderRadius: '6px', background: '#fff', zIndex: 10, maxHeight: '200px', overflow: 'auto' }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..."
            style={{ width: '100%', padding: '8px', border: 'none', borderBottom: '1px solid #eee', boxSizing: 'border-box' }} />
          {filtered.map(o => (
            <div key={o.value} onClick={() => { onChange(o.value); setIsOpen(false); setSearch(''); }}
              style={{ padding: '8px 10px', cursor: 'pointer', background: o.value === value ? '#e3f2fd' : '#fff' }}>
              {o.label}
            </div>
          ))}
          {filtered.length === 0 && <div style={{ padding: '8px', color: '#999' }}>No results</div>}
        </div>
      )}
    </div>
  );
}

export default SearchableSelect;`,
      },

      // ═══════════════════════════════════════════
      // CLOSING
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "What's Next",
      },
      {
        type: "text",
        content:
          "You've now mastered the full range of component and props patterns: basic components, defaults and children, callback props for parent-child communication, composition with slots, list rendering, conditional components, and production-ready reusable component libraries. Here's where to go next:",
      },
      {
        type: "list",
        items: [
          "useState — Add interactivity to your components. Learn state management from counters to complex shopping carts through seven progressive examples.",
          "useEffect — Connect your components to the outside world. Fetch data, set up timers, subscribe to events through eight real-world patterns.",
          "useState + useEffect combined — Learn how state changes trigger effects and effects update state, creating the reactive loop that powers dynamic apps.",
          "Component Patterns — Dive deeper into compound components, render props, higher-order components, and portals for advanced UI architecture.",
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

export  {componentsPropsData};