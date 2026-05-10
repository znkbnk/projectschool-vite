/* eslint-disable no-template-curly-in-string */
const useReducerData = [
  {
    id: "react-usereducer-guide",
    title: "The Definitive Guide to Mastering the React useReducer Hook",
    image: "/images/useReducer.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to the Definitive Guide to the React useReducer Hook. When your component's state gets complex — multiple related values, interdependent updates, actions that need to be predictable and testable — useState starts to feel inadequate. useReducer gives you a structured, action-based approach to state management: dispatch an action that describes what happened, and a reducer function decides how the state should change. This guide teaches useReducer through seven progressive examples, from a basic counter to production-ready patterns with undo/redo and global state management.",
      },

      // ═══════════════════════════════════════════
      // SECTION 1: UNDERSTANDING useReducer
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Understanding useReducer",
      },
      {
        type: "text",
        content:
          "useReducer is an alternative to useState for managing state in React. Instead of calling setState with a new value directly, you dispatch an action — a plain object that describes what happened — and a reducer function uses that action to compute the next state. The pattern comes from Redux and, before that, from the reduce function in JavaScript arrays.",
      },
      {
        type: "text",
        content:
          "Here's the mental model: imagine a bank account. You don't manually set the balance to £500. You perform actions: deposit £200, withdraw £50, transfer £100. Each action goes through the bank's system (the reducer), which calculates the new balance based on the current balance and the action. The UI then reflects the updated balance.",
      },
      {
        type: "code",
        content: `import { useReducer } from 'react';

// The reducer: a pure function that takes current state + action → returns new state
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

function Counter() {
  // useReducer(reducer, initialState) → returns [state, dispatch]
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}`,
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
        content: `// SYNTAX
const [state, dispatch] = useReducer(reducer, initialState, init?);

// reducer: (state, action) => newState — MUST be a pure function
// initialState: the starting value for state
// init: optional lazy initialiser function (init(initialState) runs once)
// state: the current state value
// dispatch: function to send actions to the reducer`,
      },
      {
        type: "boldText",
        content: "The Reducer Function",
      },
      {
        type: "list",
        items: [
          "Must be pure: Given the same state and action, it must always return the same new state. No side effects (no API calls, no random values, no mutations).",
          "Must return a new object: Never mutate the existing state. Always return a new state object, even if only one field changed: { ...state, count: state.count + 1 }.",
          "Must handle every action type: Use a switch statement with a default that throws an error to catch typos immediately.",
          "Lives outside the component: The reducer function should be defined outside the component (at module level) because it doesn't need access to props or hooks.",
        ],
      },
      {
        type: "boldText",
        content: "Actions",
      },
      {
        type: "list",
        items: [
          "An action is a plain object describing what happened: { type: 'ADD_TODO', payload: { text: 'Learn React' } }.",
          "type is the convention for identifying the action. Use SCREAMING_SNAKE_CASE for clarity.",
          "payload carries any data the reducer needs: the item to add, the ID to delete, the field to update.",
          "dispatch(action) is how you send an action to the reducer. React then calls your reducer with the current state and the action, and uses the return value as the new state.",
        ],
      },
      {
        type: "boldText",
        content: "Lazy Initialisation",
      },
      {
        type: "code",
        content: `// Third argument: init function — runs once to compute initial state
function init(initialCount) {
  // Read from localStorage, compute expensive default, etc.
  const saved = localStorage.getItem('count');
  return { count: saved ? Number(saved) : initialCount };
}

// init receives initialState as its argument
const [state, dispatch] = useReducer(counterReducer, 0, init);
// On first render: init(0) runs → returns { count: savedValue || 0 }`,
      },

      // ═══════════════════════════════════════════
      // SECTION 3: useState vs useReducer
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "When to Use useReducer vs useState",
      },
      {
        type: "text",
        content:
          "useState and useReducer can do the same things — every useState can be rewritten as useReducer and vice versa. The choice is about which makes your code clearer:",
      },
      {
        type: "list",
        items: [
          "Use useState when: State is a single value (boolean, string, number), updates are simple (set to new value), or there are 1-2 state variables that change independently.",
          "Use useReducer when: State is an object with multiple related fields, multiple actions can update the state in different ways, the next state depends on the previous state in complex ways, or you want to centralise state logic in one place for testing.",
        ],
      },
      {
        type: "code",
        content: `// useState: Simple, but gets messy with related state
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// Fetching requires coordinating three setters:
setLoading(true);
try {
  const data = await fetchData();
  setItems(data);
  setError(null);
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}

// useReducer: One dispatch replaces coordinated setters
dispatch({ type: 'FETCH_START' });    // sets loading: true
dispatch({ type: 'FETCH_SUCCESS', payload: data }); // sets items + loading
dispatch({ type: 'FETCH_ERROR', payload: err.message }); // sets error + loading`,
      },

      // ═══════════════════════════════════════════
      // SECTION 4: COMMON PITFALLS
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Common Pitfalls",
      },
      {
        type: "boldText",
        content: "1. Mutating State in the Reducer",
      },
      {
        type: "code",
        content: `// BUG: Mutating the existing state — React doesn't detect the change
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      state.items.push(action.payload); // MUTATES existing array
      return state;                      // Same reference — no re-render!
  }
}

// FIX: Return a new object with a new array
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
  }
}`,
      },
      {
        type: "boldText",
        content: "2. Missing the Default Case",
      },
      {
        type: "code",
        content: `// BAD: Silently ignores typos
default: return state;  // dispatch({ type: 'INCRMENT' }) → nothing happens

// GOOD: Throws immediately, catches the typo
default: throw new Error(\`Unknown action type: \${action.type}\`);`,
      },
      {
        type: "boldText",
        content: "3. Putting Side Effects in the Reducer",
      },
      {
        type: "code",
        content: `// BUG: Reducer must be pure — no side effects
function reducer(state, action) {
  switch (action.type) {
    case 'SAVE':
      localStorage.setItem('data', JSON.stringify(state)); // Side effect!
      fetch('/api/save', { body: JSON.stringify(state) }); // Side effect!
      return state;
  }
}

// FIX: Side effects go in useEffect or event handlers
function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state]);  // Sync to localStorage in an effect

  const handleSave = async () => {
    await fetch('/api/save', { body: JSON.stringify(state) });
    dispatch({ type: 'SAVE_SUCCESS' });
  };
}`,
      },
      {
        type: "boldText",
        content: "4. Overly Complex Actions",
      },
      {
        type: "text",
        content:
          "Actions should describe what happened, not how to update the state. Keep them simple: { type: 'ITEM_ADDED', payload: item }. The reducer decides how to handle it. If your action objects contain computed values or transformation logic, that logic belongs in the reducer.",
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 1: COUNTER
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 1: Counter — Your First Reducer",
      },
      {
        type: "text",
        content:
          "The classic introduction to useReducer: a counter with increment, decrement, reset, and a custom step value. This teaches the full pattern — reducer function, action types, payloads, and dispatch.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "The complete useReducer pattern: reducer → initialState → dispatch",
          "Multiple action types in one reducer",
          "Action payloads for dynamic values",
          "Why throw in the default case catches bugs",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useReducer, useState } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0, step: 1 });

  return (
    <div style={{ maxWidth: '300px', margin: '20px auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px' }}>{state.count}</h1>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>−{state.step}</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+{state.step}</button>
      </div>
      <div style={{ marginTop: '15px' }}>
        <label>Step size: </label>
        <select value={state.step}
          onChange={e => dispatch({ type: 'SET_STEP', payload: Number(e.target.value) })}>
          {[1, 5, 10, 25, 100].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
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
          "The state object holds both count and step — two related values managed together. Each action type handles one specific change. INCREMENT and DECREMENT both use state.step, which means changing the step size automatically affects both buttons. The reducer centralises all the logic.",
      },
      {
        type: "text",
        content:
          "SET_STEP uses a payload — the new step value from the dropdown. The action says what happened (step changed), the payload carries the data (to what value), and the reducer decides how to update (replace the step field). This is the standard { type, payload } pattern.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Return state.count + state.step instead of { ...state, count: ... } → Returns a number, not an object. Next render crashes trying to read state.count from a number.",
          "Mutate state: state.count += state.step; return state; → Same object reference, React doesn't re-render.",
          "Typo dispatch({ type: 'INCEMENT' }) with default: return state → Nothing happens, no error. With throw, you catch it immediately.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a history feature. Track the last 5 count values. Add an UNDO action that restores the previous count. Display the history as a list below the counter.",
        hint: "Hint: Add a history array to state. On INCREMENT/DECREMENT, push the current count to history before updating. On UNDO, pop the last history value and set count to it.",
        solution: `function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step, history: [...state.history.slice(-4), state.count] };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step, history: [...state.history.slice(-4), state.count] };
    case 'UNDO':
      if (state.history.length === 0) return state;
      const prev = state.history[state.history.length - 1];
      return { ...state, count: prev, history: state.history.slice(0, -1) };
    case 'RESET':
      return { ...state, count: 0, history: [] };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}
// Initial state: { count: 0, step: 1, history: [] }
// Add: <button onClick={() => dispatch({ type: 'UNDO' })} disabled={state.history.length === 0}>Undo</button>`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 2: TODO LIST
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 2: Todo List — CRUD with useReducer",
      },
      {
        type: "text",
        content:
          "The todo list is the definitive useReducer example: multiple action types (add, toggle, delete, edit, clear), array manipulation in the reducer, and a clean separation between what the UI dispatches and how the state updates.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Full CRUD operations in a reducer",
          "Immutable array updates (map, filter, spread)",
          "Multiple action payloads for different operations",
          "Derived state computed during render",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useReducer, useState } from 'react';

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, done: false }],
      };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(t => t.id === action.id ? { ...t, done: !t.done } : t),
      };
    case 'DELETE':
      return { ...state, todos: state.todos.filter(t => t.id !== action.id) };
    case 'EDIT':
      return {
        ...state,
        todos: state.todos.map(t => t.id === action.id ? { ...t, text: action.text } : t),
      };
    case 'CLEAR_DONE':
      return { ...state, todos: state.todos.filter(t => !t.done) };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

const initialState = {
  todos: [
    { id: 1, text: 'Learn useReducer', done: false },
    { id: 2, text: 'Build a project', done: false },
  ],
  filter: 'all', // all | active | done
};

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({ type: 'ADD', payload: input });
    setInput('');
  };

  // Derived: filtered todos
  const filtered = state.todos.filter(t => {
    if (state.filter === 'active') return !t.done;
    if (state.filter === 'done') return t.done;
    return true;
  });

  const doneCount = state.todos.filter(t => t.done).length;

  return (
    <div style={{ maxWidth: '450px', margin: '20px auto' }}>
      <h1>Todo List</h1>
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="What needs doing?" style={{ flex: 1, padding: '8px' }} />
        <button type="submit">Add</button>
      </form>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
        {['all', 'active', 'done'].map(f => (
          <button key={f} onClick={() => dispatch({ type: 'SET_FILTER', payload: f })}
            style={{
              padding: '6px 12px', borderRadius: '15px', border: '1px solid #ddd',
              background: state.filter === f ? '#1976d2' : '#fff',
              color: state.filter === f ? '#fff' : '#333', cursor: 'pointer',
            }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filtered.map(todo => (
        <div key={todo.id} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '8px', borderBottom: '1px solid #eee',
        }}>
          <input type="checkbox" checked={todo.done}
            onChange={() => dispatch({ type: 'TOGGLE', id: todo.id })} />
          {editingId === todo.id ? (
            <input value={editText} onChange={e => setEditText(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') { dispatch({ type: 'EDIT', id: todo.id, text: editText }); setEditingId(null); }
                if (e.key === 'Escape') setEditingId(null);
              }}
              onBlur={() => setEditingId(null)} autoFocus style={{ flex: 1 }} />
          ) : (
            <span onDoubleClick={() => { setEditingId(todo.id); setEditText(todo.text); }}
              style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#999' : '#333', cursor: 'pointer' }}>
              {todo.text}
            </span>
          )}
          <button onClick={() => dispatch({ type: 'DELETE', id: todo.id })}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '14px', color: '#666' }}>
        <span>{doneCount}/{state.todos.length} done</span>
        {doneCount > 0 && (
          <button onClick={() => dispatch({ type: 'CLEAR_DONE' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d32f2f' }}>
            Clear completed
          </button>
        )}
      </div>
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
          "Six action types handle all operations: ADD (append new todo), TOGGLE (flip done), DELETE (filter out), EDIT (update text), CLEAR_DONE (remove completed), SET_FILTER (change active filter). Each is a simple, predictable state transformation. Adding a new feature (like SORT or PRIORITY) means adding one case to the switch.",
      },
      {
        type: "text",
        content:
          "The filter lives in the reducer state alongside todos. This means the entire app state is in one place — easy to debug, easy to test. The filtered list is derived during render, not stored separately. Local UI state (input text, editing mode) stays in useState — it doesn't belong in the reducer because it's ephemeral and component-specific.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use state.todos.push(newTodo) → Mutates the array. Same reference, no re-render. Always spread: [...state.todos, newTodo].",
          "Put input/editingId in the reducer → Adds unnecessary complexity. The reducer is for app state. Temporary UI state belongs in useState.",
          "Return just the todos array instead of { ...state, todos: [...] } → Loses the filter field. Always spread the full state and override only the changed fields.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add priority levels to the todos. Each todo has a priority (low, medium, high). Add a SET_PRIORITY action. Add a 'Sort by priority' button that dispatches SORT_BY_PRIORITY. Display priority with a colour-coded badge.",
        hint: "Hint: Add priority: 'medium' to the initial todo structure. SORT_BY_PRIORITY returns { ...state, todos: [...state.todos].sort(...) } using a priority weight map { high: 3, medium: 2, low: 1 }.",
        solution: `// Add to reducer:
case 'SET_PRIORITY':
  return { ...state, todos: state.todos.map(t =>
    t.id === action.id ? { ...t, priority: action.priority } : t) };
case 'SORT_BY_PRIORITY':
  const weight = { high: 3, medium: 2, low: 1 };
  return { ...state, todos: [...state.todos].sort((a, b) =>
    (weight[b.priority] || 0) - (weight[a.priority] || 0)) };

// Badge in the todo item:
const priorityColors = { high: '#f44336', medium: '#FF9800', low: '#4CAF50' };
<span style={{ background: priorityColors[todo.priority], color: '#fff',
  padding: '2px 8px', borderRadius: '10px', fontSize: '11px' }}>
  {todo.priority}
</span>`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 3: FORM WITH VALIDATION
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 3: Form with Validation",
      },
      {
        type: "text",
        content:
          "Forms are one of the best use cases for useReducer: multiple fields, validation rules, step tracking, submission state — all interdependent. One dispatch handles both the field update AND the validation, keeping everything in sync. With useState, you'd need separate setters for values, errors, touched fields, and submission state.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Complex state object with nested values (formData, errors, touched)",
          "UPDATE_FIELD action that updates value AND validates simultaneously",
          "SUBMIT and RESET actions for form lifecycle",
          "Validation logic inside the reducer for testability",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useReducer } from 'react';

function validate(field, value) {
  switch (field) {
    case 'name': return value.trim().length < 2 ? 'Name must be 2+ characters' : '';
    case 'email': return !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) ? 'Invalid email' : '';
    case 'password':
      if (value.length < 8) return '8+ characters required';
      if (!/\\d/.test(value)) return 'Must include a number';
      if (!/[A-Z]/.test(value)) return 'Must include uppercase';
      return '';
    default: return '';
  }
}

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD': {
      const { field, value } = action;
      return {
        ...state,
        values: { ...state.values, [field]: value },
        errors: { ...state.errors, [field]: validate(field, value) },
        touched: { ...state.touched, [field]: true },
      };
    }
    case 'SUBMIT':
      // Validate all fields on submit
      const errors = {};
      Object.entries(state.values).forEach(([field, value]) => {
        errors[field] = validate(field, value);
      });
      const hasErrors = Object.values(errors).some(e => e);
      return {
        ...state,
        errors,
        touched: { name: true, email: true, password: true },
        submitted: !hasErrors,
      };
    case 'RESET':
      return initialState;
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

const initialState = {
  values: { name: '', email: '', password: '' },
  errors: { name: '', email: '', password: '' },
  touched: { name: false, email: false, password: false },
  submitted: false,
};

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { values, errors, touched, submitted } = state;

  const isValid = Object.values(errors).every(e => !e) &&
    Object.values(values).every(v => v.length > 0);

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>✅ Welcome, {values.name}!</h2>
        <button onClick={() => dispatch({ type: 'RESET' })}>Register another</button>
      </div>
    );
  }

  const fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
  ];

  return (
    <form onSubmit={e => { e.preventDefault(); dispatch({ type: 'SUBMIT' }); }}
      style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h1>Register</h1>
      {fields.map(f => (
        <div key={f.name} style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>{f.label}</label>
          <input type={f.type} value={values[f.name]}
            onChange={e => dispatch({ type: 'UPDATE_FIELD', field: f.name, value: e.target.value })}
            style={{
              width: '100%', padding: '10px', boxSizing: 'border-box',
              border: \`1px solid \${touched[f.name] && errors[f.name] ? '#d32f2f' : '#ddd'}\`,
              borderRadius: '6px',
            }} />
          {touched[f.name] && errors[f.name] && (
            <p style={{ color: '#d32f2f', fontSize: '12px', margin: '4px 0 0' }}>{errors[f.name]}</p>
          )}
        </div>
      ))}
      <button type="submit" disabled={!isValid} style={{
        width: '100%', padding: '12px', background: isValid ? '#1976d2' : '#ccc',
        color: '#fff', border: 'none', borderRadius: '6px', cursor: isValid ? 'pointer' : 'default',
      }}>
        Create Account
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
          "One dispatch updates three things atomically: the field value, the validation error, and the touched flag. With useState, you'd need three separate setters (setValues, setErrors, setTouched) that could get out of sync. The reducer guarantees they update together in one state transition.",
      },
      {
        type: "text",
        content:
          "SUBMIT validates all fields at once — even ones the user hasn't touched — and sets all fields as touched so errors display. This handles the case where a user clicks Submit without filling in a field. RESET returns the exact initial state, which is trivially simple with a reducer.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Validate in the component instead of the reducer → Validation and state can get out of sync. Keeping validation in the reducer means it's always consistent and testable.",
          "Forget { ...state.values, [field]: value } and just return { [field]: value } → Overwrites all other fields. Only the last-typed field survives.",
          "Skip the touched tracking → Errors appear for every field immediately on mount, before the user has typed anything.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a password strength indicator. In the reducer, compute a strength field ('weak', 'medium', 'strong') based on the password value. Display a colour-coded bar below the password field.",
        hint: "Hint: Add strength to the state. In the UPDATE_FIELD case, when field === 'password', compute strength based on length + has number + has uppercase + has special char. Return it alongside the error.",
        solution: `// In UPDATE_FIELD, after computing the error:
const strength = field === 'password'
  ? (value.length >= 12 && /\\d/.test(value) && /[A-Z]/.test(value) && /[!@#$%]/.test(value))
    ? 'strong' : (value.length >= 8 && /\\d/.test(value)) ? 'medium' : 'weak'
  : state.strength;

return { ...state, values: { ...state.values, [field]: value },
  errors: { ...state.errors, [field]: validate(field, value) },
  touched: { ...state.touched, [field]: true }, strength };

// Display:
const strengthColors = { weak: '#f44336', medium: '#FF9800', strong: '#4CAF50' };
{touched.password && values.password && (
  <div style={{ height: 4, background: '#eee', borderRadius: 2, marginTop: 4 }}>
    <div style={{ height: '100%', borderRadius: 2, transition: 'width 0.3s',
      width: state.strength === 'strong' ? '100%' : state.strength === 'medium' ? '60%' : '30%',
      background: strengthColors[state.strength] }} />
  </div>
)}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 4: SHOPPING CART
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 4: Shopping Cart",
      },
      {
        type: "text",
        content:
          "The shopping cart is useReducer's killer use case in production. Multiple interdependent actions (add, remove, update quantity, apply discount, clear), stock validation, computed totals — all cleanly organised in one reducer. This is the pattern you'd use in a real e-commerce app.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Complex reducer with 6+ action types",
          "Business logic in the reducer (stock limits, discounts)",
          "Error handling within actions",
          "Derived totals computed from state",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useReducer } from 'react';

const PRODUCTS = [
  { id: 1, name: 'React Stickers', price: 4.99, stock: 20, emoji: '⚛️' },
  { id: 2, name: 'JS Mug', price: 12.99, stock: 10, emoji: '☕' },
  { id: 3, name: 'Code Hoodie', price: 39.99, stock: 5, emoji: '👕' },
  { id: 4, name: 'Debug Duck', price: 8.99, stock: 15, emoji: '🦆' },
];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const product = PRODUCTS.find(p => p.id === action.id);
      if (!product) return state;
      const existing = state.items.find(i => i.id === action.id);
      if (existing) {
        if (existing.quantity >= product.stock) return { ...state, error: \`\${product.name} is out of stock\` };
        return {
          ...state, error: null,
          items: state.items.map(i => i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i),
        };
      }
      return {
        ...state, error: null,
        items: [...state.items, { id: product.id, name: product.name, price: product.price, emoji: product.emoji, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return { ...state, error: null, items: state.items.filter(i => i.id !== action.id) };
    case 'UPDATE_QUANTITY': {
      if (action.quantity < 1) return { ...state, items: state.items.filter(i => i.id !== action.id) };
      const product = PRODUCTS.find(p => p.id === action.id);
      if (action.quantity > product.stock) return { ...state, error: \`Only \${product.stock} in stock\` };
      return {
        ...state, error: null,
        items: state.items.map(i => i.id === action.id ? { ...i, quantity: action.quantity } : i),
      };
    }
    case 'APPLY_DISCOUNT':
      const codes = { SAVE10: 0.1, SAVE20: 0.2 };
      const discount = codes[action.code?.toUpperCase()] || 0;
      return {
        ...state,
        discountCode: action.code,
        discount,
        error: discount ? null : 'Invalid discount code',
      };
    case 'CLEAR':
      return { ...initialState };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

const initialState = { items: [], discountCode: '', discount: 0, error: null };

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discountAmount = subtotal * state.discount;
  const total = subtotal - discountAmount;
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div style={{ maxWidth: '550px', margin: '20px auto' }}>
      <h1>Shop 🛒 {itemCount > 0 && <span>({itemCount})</span>}</h1>
      {state.error && <p style={{ color: '#d32f2f', background: '#ffebee', padding: '8px 12px', borderRadius: '6px' }}>{state.error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        {PRODUCTS.map(p => (
          <div key={p.id} style={{ border: '1px solid #eee', borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
            <span style={{ fontSize: '36px' }}>{p.emoji}</span>
            <h3>{p.name}</h3>
            <p>£{p.price.toFixed(2)} · {p.stock} in stock</p>
            <button onClick={() => dispatch({ type: 'ADD_ITEM', id: p.id })}>Add to Cart</button>
          </div>
        ))}
      </div>

      {state.items.length > 0 && (
        <>
          <h2>Cart</h2>
          {state.items.map(item => (
            <div key={item.id} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 0', borderBottom: '1px solid #eee',
            }}>
              <div>
                <strong>{item.emoji} {item.name}</strong>
                <p style={{ margin: '2px 0', color: '#666' }}>£{item.price.toFixed(2)} each</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', id: item.id, quantity: item.quantity - 1 })}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', id: item.id, quantity: item.quantity + 1 })}>+</button>
                <button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>🗑️</button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '15px' }}>
            <input placeholder="Discount code" value={state.discountCode}
              onChange={e => dispatch({ type: 'APPLY_DISCOUNT', code: e.target.value })}
              style={{ padding: '8px', marginRight: '8px' }} />
            {state.discount > 0 && <span style={{ color: '#4CAF50' }}>✅ {state.discount * 100}% off!</span>}
          </div>

          <div style={{ marginTop: '15px', lineHeight: 1.8 }}>
            <p>Subtotal: £{subtotal.toFixed(2)}</p>
            {state.discount > 0 && <p style={{ color: '#4CAF50' }}>Discount: −£{discountAmount.toFixed(2)}</p>}
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Total: £{total.toFixed(2)}</p>
          </div>
          <button onClick={() => dispatch({ type: 'CLEAR' })}
            style={{ color: '#d32f2f', background: 'none', border: 'none', cursor: 'pointer', marginTop: '10px' }}>Clear cart</button>
        </>
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
          "The reducer contains business logic: stock validation (can't add more than available), discount code validation, auto-removal when quantity drops below 1. This logic is in one place, testable without rendering components. You could unit-test cartReducer with plain objects.",
      },
      {
        type: "text",
        content:
          "Derived values (subtotal, discountAmount, total, itemCount) are computed during render from state.items and state.discount. No extra state, no effects. When items change, the totals update automatically on the next render.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget to spread state: return { items: [...] } → Loses discount and error fields. Always { ...state, items: [...] }.",
          "Return the error without clearing it on success → Error message stays on screen after a successful action. Each success case should include error: null.",
          "Put stock validation in the component → Duplicated across every add/update button. The reducer centralises it.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a wishlist feature. New actions: ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, MOVE_TO_CART (removes from wishlist + adds to cart). Display the wishlist below the cart.",
        hint: "Hint: Add wishlist: [] to state. MOVE_TO_CART should dispatch logic that removes from wishlist and adds to items — but since reducers are pure, do both operations in the same case.",
        solution: `case 'ADD_TO_WISHLIST': {
  const product = PRODUCTS.find(p => p.id === action.id);
  if (state.wishlist.some(w => w.id === action.id)) return state;
  return { ...state, wishlist: [...state.wishlist, { id: product.id, name: product.name, price: product.price, emoji: product.emoji }] };
}
case 'REMOVE_FROM_WISHLIST':
  return { ...state, wishlist: state.wishlist.filter(w => w.id !== action.id) };
case 'MOVE_TO_CART': {
  const product = PRODUCTS.find(p => p.id === action.id);
  const existing = state.items.find(i => i.id === action.id);
  const newItems = existing
    ? state.items.map(i => i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i)
    : [...state.items, { ...state.wishlist.find(w => w.id === action.id), quantity: 1 }];
  return { ...state, items: newItems, wishlist: state.wishlist.filter(w => w.id !== action.id) };
}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 5: ASYNC DATA FETCHING
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 5: Async Data Fetching — State Machine",
      },
      {
        type: "text",
        content:
          "Fetching data involves three states: loading, success, error. Managing these with useState means coordinating three setters. useReducer models this as a state machine — each action transitions from one state to another, and impossible states (loading AND error) can't happen.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "The state machine pattern (idle → loading → success/error)",
          "useReducer + useEffect for async operations",
          "Preventing impossible states",
          "Reusable fetch reducer for any API call",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useReducer, useEffect } from 'react';

// Generic fetch reducer — reusable for any API call
function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS':
      return { status: 'success', data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { status: 'error', data: null, error: action.payload };
    case 'RESET':
      return initialFetchState;
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

const initialFetchState = { status: 'idle', data: null, error: null };

// Custom hook wrapping the pattern
function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, initialFetchState);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    dispatch({ type: 'FETCH_START' });

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch(err => {
        if (err.name !== 'AbortError') {
          dispatch({ type: 'FETCH_ERROR', payload: err.message });
        }
      });

    return () => controller.abort();
  }, [url]);

  return state;
}

// Usage: Product browser
function ProductBrowser() {
  const [category, setCategory] = useState('');
  const categoriesState = useFetch('https://dummyjson.com/products/categories');
  const productsState = useFetch(
    category ? \`https://dummyjson.com/products/category/\${category}\` : null
  );

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Product Browser</h1>

      {categoriesState.status === 'loading' && <p>Loading categories...</p>}
      {categoriesState.status === 'error' && <p style={{ color: 'red' }}>Error: {categoriesState.error}</p>}
      {categoriesState.status === 'success' && (
        <select value={category} onChange={e => setCategory(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '15px' }}>
          <option value="">Select a category</option>
          {categoriesState.data.map(cat => (
            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
          ))}
        </select>
      )}

      {productsState.status === 'loading' && <p>Loading products...</p>}
      {productsState.status === 'error' && <p style={{ color: 'red' }}>Error: {productsState.error}</p>}
      {productsState.status === 'success' && productsState.data.products.map(p => (
        <div key={p.id} style={{
          display: 'flex', gap: '12px', padding: '10px', borderBottom: '1px solid #eee',
        }}>
          <img src={p.thumbnail} alt={p.title} width={50} height={50}
            style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <div>
            <strong>{p.title}</strong>
            <p style={{ margin: '2px 0', color: '#666' }}>£{p.price}</p>
          </div>
        </div>
      ))}
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
          "The status field is a state machine: 'idle' → 'loading' → 'success' or 'error'. This prevents impossible states. With useState, you could accidentally have loading: true AND error: 'something' at the same time. The reducer makes each transition explicit and complete.",
      },
      {
        type: "text",
        content:
          "The useFetch custom hook encapsulates the entire pattern: reducer + effect + cleanup. Any component can call useFetch(url) and get { status, data, error } back. ProductBrowser uses it twice — once for categories and once for products — without duplicating any fetch logic.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Set loading separately from clearing error → Possible state: { loading: true, error: 'old error' }. The reducer handles both in FETCH_START.",
          "Call dispatch inside the reducer → Side effects (like fetch) belong in useEffect, not the reducer. The reducer only computes new state.",
          "Forget the AbortController → Changing categories rapidly causes race conditions and stale data display.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Extend useFetch with a refetch function. The hook should return { status, data, error, refetch }. Calling refetch() re-triggers the fetch without changing the URL. Use it to add a 'Retry' button on error and a 'Refresh' button on success.",
        hint: "Hint: Add a refreshCount to the reducer state. The REFRESH action increments it. Add refreshCount to the useEffect dependency array. Return a refetch function that dispatches REFRESH.",
        solution: `function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START': return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS': return { status: 'success', data: action.payload, error: null, refreshCount: state.refreshCount };
    case 'FETCH_ERROR': return { status: 'error', data: null, error: action.payload, refreshCount: state.refreshCount };
    case 'REFRESH': return { ...state, refreshCount: state.refreshCount + 1 };
    default: throw new Error(\`Unknown: \${action.type}\`);
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, { status: 'idle', data: null, error: null, refreshCount: 0 });

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    dispatch({ type: 'FETCH_START' });
    fetch(url, { signal: controller.signal })
      .then(r => r.json())
      .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch(err => { if (err.name !== 'AbortError') dispatch({ type: 'FETCH_ERROR', payload: err.message }); });
    return () => controller.abort();
  }, [url, state.refreshCount]); // refreshCount triggers refetch

  return { ...state, refetch: () => dispatch({ type: 'REFRESH' }) };
}`,
      },
      // ═══════════════════════════════════════════
      // EXAMPLE 6: UNDO/REDO
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 6: Undo/Redo — History Pattern",
      },
      {
        type: "text",
        content:
          "Undo/redo is a pattern that showcases useReducer's power: the reducer stores not just the current state, but also past and future states. Each action saves the current state to history before making changes. UNDO restores the last saved state. REDO moves forward. This is impossible to implement cleanly with useState alone.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "Past/present/future state structure",
          "Wrapping any reducer with undo/redo capability",
          "History management within a pure reducer",
          "Keyboard shortcuts (Ctrl+Z, Ctrl+Y) triggering dispatch",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { useReducer, useEffect, useCallback } from 'react';

// The actual state reducer — just a drawing canvas
function canvasReducer(state, action) {
  switch (action.type) {
    case 'ADD_SHAPE':
      return { ...state, shapes: [...state.shapes, action.shape] };
    case 'REMOVE_LAST':
      return { ...state, shapes: state.shapes.slice(0, -1) };
    case 'CHANGE_BG':
      return { ...state, background: action.color };
    case 'CLEAR':
      return { shapes: [], background: '#ffffff' };
    default:
      throw new Error(\`Unknown: \${action.type}\`);
  }
}

// Undo wrapper: wraps ANY reducer with undo/redo
function undoableReducer(reducer) {
  return function (state, action) {
    switch (action.type) {
      case 'UNDO': {
        if (state.past.length === 0) return state;
        const prev = state.past[state.past.length - 1];
        return {
          past: state.past.slice(0, -1),
          present: prev,
          future: [state.present, ...state.future],
        };
      }
      case 'REDO': {
        if (state.future.length === 0) return state;
        const next = state.future[0];
        return {
          past: [...state.past, state.present],
          present: next,
          future: state.future.slice(1),
        };
      }
      default: {
        const newPresent = reducer(state.present, action);
        if (newPresent === state.present) return state; // No change
        return {
          past: [...state.past, state.present],
          present: newPresent,
          future: [], // Clear redo history on new action
        };
      }
    }
  };
}

const initialCanvas = { shapes: [], background: '#ffffff' };

function DrawingCanvas() {
  const [state, dispatch] = useReducer(
    undoableReducer(canvasReducer),
    { past: [], present: initialCanvas, future: [] }
  );

  const { past, present, future } = state;
  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  // Keyboard shortcuts
  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'z') { e.preventDefault(); dispatch({ type: 'UNDO' }); }
      if (e.key === 'y') { e.preventDefault(); dispatch({ type: 'REDO' }); }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const addShape = () => {
    const shapes = ['🔴', '🔵', '🟡', '🟢', '🟣', '🟠', '⬛'];
    dispatch({
      type: 'ADD_SHAPE',
      shape: {
        id: Date.now(),
        emoji: shapes[Math.floor(Math.random() * shapes.length)],
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      },
    });
  };

  const backgrounds = ['#ffffff', '#f0f0f0', '#e3f2fd', '#e8f5e9', '#fff3e0', '#fce4ec'];

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Drawing Canvas</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => dispatch({ type: 'UNDO' })} disabled={!canUndo}>↩ Undo</button>
        <button onClick={() => dispatch({ type: 'REDO' })} disabled={!canRedo}>↪ Redo</button>
        <button onClick={addShape}>Add Shape</button>
        <button onClick={() => dispatch({ type: 'REMOVE_LAST' })} disabled={present.shapes.length === 0}>Remove Last</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
        {backgrounds.map(c => (
          <button key={c} onClick={() => dispatch({ type: 'CHANGE_BG', color: c })}
            style={{ width: 28, height: 28, background: c, border: present.background === c ? '3px solid #333' : '1px solid #ddd',
              borderRadius: '50%', cursor: 'pointer' }} />
        ))}
      </div>

      <div style={{
        position: 'relative', width: '100%', height: '300px',
        background: present.background, border: '1px solid #ddd',
        borderRadius: '10px', overflow: 'hidden',
      }}>
        {present.shapes.map(shape => (
          <span key={shape.id} style={{
            position: 'absolute', left: \`\${shape.x}%\`, top: \`\${shape.y}%\`,
            fontSize: '30px', transform: 'translate(-50%, -50%)',
          }}>
            {shape.emoji}
          </span>
        ))}
      </div>

      <p style={{ color: '#999', fontSize: '13px', marginTop: '8px' }}>
        {present.shapes.length} shapes · {past.length} undo{past.length !== 1 && 's'} · {future.length} redo{future.length !== 1 && 's'}
        · Ctrl+Z / Ctrl+Y
      </p>
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
          "undoableReducer is a higher-order function — it takes any reducer and adds undo/redo capability. The state structure becomes { past: [...], present: currentState, future: [...] }. Any normal action saves the current present to past and clears future. UNDO moves present to future and pops past. REDO does the reverse.",
      },
      {
        type: "text",
        content:
          "The canvasReducer itself is completely unaware of undo/redo — it just handles shapes and backgrounds. undoableReducer wraps it, intercepting UNDO/REDO and delegating everything else. This separation means you can add undo/redo to any reducer without modifying it.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Forget to clear future on new actions → User undoes 3 times, then adds a shape. Now redo would restore states that conflict with the new shape. Clearing future prevents this.",
          "Skip the newPresent === state.present check → Actions that don't change state (like removing from an empty canvas) still create undo history, letting users 'undo' nothing.",
          "Store the entire shapes array as references → Since we always spread (...state.shapes), each past entry is a genuine snapshot. Mutations in present won't affect past entries.",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add a 'time travel' slider that lets users scrub through their entire history visually. Display a range input from 0 to past.length. Moving the slider shows the canvas at that point in history without committing (like a preview). Clicking 'Go to this point' truncates history.",
        hint: "Hint: Add a previewIndex state with useState. When the slider moves, show past[previewIndex] instead of present. The 'Go to' button dispatches a TIME_TRAVEL action that sets present to past[previewIndex] and adjusts past/future.",
        solution: `// Add TIME_TRAVEL to undoableReducer:
case 'TIME_TRAVEL': {
  const targetIndex = action.index;
  return {
    past: state.past.slice(0, targetIndex),
    present: state.past[targetIndex],
    future: [],
  };
}

// In DrawingCanvas:
const [previewIdx, setPreviewIdx] = useState(null);
const displayed = previewIdx !== null && past[previewIdx] ? past[previewIdx] : present;

// Slider UI:
{past.length > 0 && (
  <div>
    <input type="range" min={0} max={past.length - 1}
      value={previewIdx ?? past.length - 1}
      onChange={e => setPreviewIdx(Number(e.target.value))} />
    {previewIdx !== null && (
      <button onClick={() => { dispatch({ type: 'TIME_TRAVEL', index: previewIdx }); setPreviewIdx(null); }}>
        Go to this point
      </button>
    )}
  </div>
)}`,
      },

      // ═══════════════════════════════════════════
      // EXAMPLE 7: useReducer + useContext
      // ═══════════════════════════════════════════
      {
        type: "title",
        content: "Example 7: useReducer + useContext — Global State",
      },
      {
        type: "text",
        content:
          "This is the production pattern: useReducer manages complex state logic, useContext distributes it globally. Separate contexts for state and dispatch (dispatch is a stable reference, so dispatch-only consumers never re-render on state changes). This is what teams use before reaching for Redux or Zustand.",
      },
      {
        type: "boldText",
        content: "What You'll Learn",
      },
      {
        type: "list",
        items: [
          "The useReducer + useContext production pattern",
          "Separate state and dispatch contexts for performance",
          "Custom hooks for consuming each context",
          "Multiple components sharing global reducer state",
        ],
      },
      {
        type: "boldText",
        content: "Full Code",
      },
      {
        type: "code",
        content: `import { createContext, useContext, useReducer, useState } from 'react';

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, done: false, assignee: action.assignee }] };
    case 'TOGGLE_TASK':
      return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, done: !t.done } : t) };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      throw new Error(\`Unknown: \${action.type}\`);
  }
}

const initialState = {
  user: null,
  tasks: [
    { id: 1, text: 'Set up project', done: true, assignee: 'Alice' },
    { id: 2, text: 'Design components', done: false, assignee: 'Bob' },
    { id: 3, text: 'Write tests', done: false, assignee: 'Alice' },
  ],
};

// Two separate contexts
const StateContext = createContext(null);
const DispatchContext = createContext(null);

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function useAppState() {
  const ctx = useContext(StateContext);
  if (!ctx) throw new Error('useAppState requires AppProvider');
  return ctx;
}
function useAppDispatch() {
  const ctx = useContext(DispatchContext);
  if (!ctx) throw new Error('useAppDispatch requires AppProvider');
  return ctx;
}

// Header — reads state, dispatches logout
function Header() {
  const { user, tasks } = useAppState();
  const dispatch = useAppDispatch();
  const pending = tasks.filter(t => !t.done).length;

  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', padding: '12px 20px',
      borderBottom: '1px solid #eee', alignItems: 'center',
    }}>
      <h2>TaskBoard ({pending} pending)</h2>
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>👤 {user}</span>
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
        </div>
      ) : (
        <button onClick={() => dispatch({ type: 'SET_USER', user: 'Alice' })}>Login as Alice</button>
      )}
    </header>
  );
}

// AddTask — only uses dispatch (never re-renders on state change)
function AddTask() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD_TASK', text, assignee: 'Me' });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
      <input value={text} onChange={e => setText(e.target.value)}
        placeholder="New task..." style={{ flex: 1, padding: '8px' }} />
      <button type="submit">Add</button>
    </form>
  );
}

// TaskList — reads state and dispatches
function TaskList() {
  const { tasks } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '8px', borderBottom: '1px solid #eee', opacity: task.done ? 0.5 : 1,
        }}>
          <input type="checkbox" checked={task.done}
            onChange={() => dispatch({ type: 'TOGGLE_TASK', id: task.id })} />
          <div style={{ flex: 1 }}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</span>
            <span style={{ color: '#999', fontSize: '12px', marginLeft: '8px' }}>({task.assignee})</span>
          </div>
          <button onClick={() => dispatch({ type: 'DELETE_TASK', id: task.id })}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

// Stats — reads state only
function Stats() {
  const { tasks } = useAppState();
  const done = tasks.filter(t => t.done).length;
  return (
    <p style={{ color: '#666', fontSize: '14px', marginTop: '12px' }}>
      {done}/{tasks.length} tasks completed
      {done === tasks.length && tasks.length > 0 && ' 🎉'}
    </p>
  );
}

function App() {
  return (
    <AppProvider>
      <Header />
      <main style={{ maxWidth: '450px', margin: '20px auto', padding: '0 20px' }}>
        <AddTask />
        <TaskList />
        <Stats />
      </main>
    </AppProvider>
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
          "Two separate contexts: StateContext provides the current state (changes on every dispatch), DispatchContext provides the dispatch function (stable reference, never changes). AddTask only calls useAppDispatch(), so it never re-renders when tasks change — it only needs to send actions, not read state.",
      },
      {
        type: "text",
        content:
          "The reducer handles both user auth and task management in one place. All state transitions are explicit, predictable, and testable. You could write unit tests for appReducer without rendering any React components — just pass state and actions and assert the output.",
      },
      {
        type: "text",
        content:
          "This pattern scales. As the app grows, you add action types to the reducer and custom hooks to the context. Components never know how state is managed — they just call useAppState() for data and useAppDispatch() for actions. Migrating to Redux, Zustand, or any other library later requires changing the provider, not every component.",
      },
      {
        type: "boldText",
        content: "What Would Break",
      },
      {
        type: "list",
        items: [
          "Use one context for { state, dispatch } → Every component that dispatches also re-renders on every state change. The split prevents this performance issue.",
          "Define the reducer inside the component → A new function reference every render. useReducer works fine, but it's bad practice and hurts readability. Reducers should be module-level.",
          "Forget AppProvider in the tree → Custom hooks throw helpful errors. Without the error check, you'd get cryptic 'Cannot destructure property tasks of null.'",
        ],
      },
      {
        type: "boldText",
        content: "Practice Tasks",
      },
      {
        type: "practiceTask",
        content:
          "Task 1: Add task filtering by assignee. Add a FilterBar component that reads the list of unique assignees from state and dispatches a SET_FILTER action. The TaskList should filter tasks based on the selected assignee. Add filter: 'all' to the state.",
        hint: "Hint: Extract unique assignees: [...new Set(tasks.map(t => t.assignee))]. Add SET_FILTER to the reducer. Filter tasks during render. FilterBar only needs dispatch + the filter value.",
        solution: `// Add to reducer:
case 'SET_FILTER':
  return { ...state, filter: action.assignee };

// FilterBar component:
function FilterBar() {
  const { tasks, filter } = useAppState();
  const dispatch = useAppDispatch();
  const assignees = ['all', ...new Set(tasks.map(t => t.assignee))];

  return (
    <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
      {assignees.map(a => (
        <button key={a} onClick={() => dispatch({ type: 'SET_FILTER', assignee: a })}
          style={{ padding: '4px 10px', borderRadius: '12px',
            background: filter === a ? '#1976d2' : '#f5f5f5',
            color: filter === a ? '#fff' : '#333', border: 'none', cursor: 'pointer' }}>
          {a}
        </button>
      ))}
    </div>
  );
}

// In TaskList, filter:
const displayed = state.filter === 'all' ? tasks : tasks.filter(t => t.assignee === state.filter);`,
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
          "You've mastered useReducer from basic counters to production-ready global state management. Every pattern you've learned — action-based updates, state machines, undo/redo, Context integration — is used in real-world React codebases. Here's your path forward:",
      },
      {
        type: "list",
        items: [
          "useContext — Deep dive into Context patterns. Combined with useReducer, it's the standard solution for shared state before reaching for external libraries.",
          "State Management Libraries — When useReducer + Context isn't enough: Zustand (minimal), Redux Toolkit (enterprise), or Jotai (atomic). They all build on the same action/reducer mental model.",
          "Immer — A library that lets you write mutative code in reducers (state.items.push(item)) while keeping immutability under the hood. Eliminates the spread-heavy syntax.",
          "Testing — Reducers are pure functions: input → output. Write unit tests for every action type. This is one of useReducer's biggest advantages over useState.",
        ],
      },
      {
        type: "text",
        content: "",
      },
    ],
  },
];

export {useReducerData};