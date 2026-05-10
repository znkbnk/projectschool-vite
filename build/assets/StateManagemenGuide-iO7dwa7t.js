import{o as e,t}from"./react-DC5jstkq.js";import{t as n}from"./jsx-runtime-ByUrNkr2.js";import{a as r,t as i}from"./index-CL3F-5Sc.js";import{t as a}from"./default-highlight-D1dy6jKZ.js";import{t as o}from"./atom-one-dark-CPKGBXHV.js";import{t as s}from"./usestateGuide-x6u9WfT9.js";import{t as c}from"./prop-types-B7hXcC43.js";var l=e(t(),1),u=[{id:`react-state-management-guide`,title:`The Definitive Guide to React State Management`,image:`/images/stateManagement.webp`,paragraphs:[{type:`text`,content:`Welcome to the Definitive Guide to React State Management. You've learned useState, useReducer, useContext, and custom hooks — but when you sit down to build an app, the question is: which one do I use? This guide answers that question. You'll build the same task board app using five different state management approaches, comparing how each one feels as the app grows. By the end, you'll have a clear decision framework for choosing the right tool for any project.`},{type:`title`,content:`Types of State in React`},{type:`text`,content:`Not all state is the same. Understanding what kind of state you're dealing with is the first step to choosing how to manage it. React apps typically have four types of state, and each one has a natural home.`},{type:`boldText`,content:`1. Local UI State`},{type:`text`,content:`State that belongs to a single component: whether a modal is open, the current value of a text input, which tab is selected, whether a dropdown is expanded. This state doesn't need to be shared. It lives in useState, right where it's used.`},{type:`boldText`,content:`2. Shared/Lifted State`},{type:`text`,content:`State that two or more sibling components need access to: a search input that filters a list, a selected item that highlights in a list and shows detail in a panel. This state lives in the closest common parent, passed down via props. This is called 'lifting state up'.`},{type:`boldText`,content:`3. Global App State`},{type:`text`,content:`State that many components across the app need: the logged-in user, theme preference, shopping cart, notifications. This state belongs in Context (for simple cases) or an external library (for complex cases). Prop drilling it through 5+ levels is a code smell.`},{type:`boldText`,content:`4. Server/Remote State`},{type:`text`,content:`Data that comes from an API and needs caching, refetching, and synchronisation: product listings, user profiles, search results. This is best handled by data-fetching libraries like React Query or SWR, which manage loading, error, cache, and stale data automatically. Your useFetch hook from the Custom Hooks guide is a simplified version.`},{type:`title`,content:`The Decision Framework`},{type:`text`,content:`When you need to add state to your app, run through these questions in order. Stop at the first 'yes'.`},{type:`code`,content:`// THE STATE MANAGEMENT DECISION TREE

// 1. Does only ONE component need this state?
//    → useState (or useReducer if the state logic is complex)

// 2. Do 2-3 NEARBY components need this state?
//    → Lift state up to the nearest common parent, pass down via props

// 3. Do MANY components across the app need this state?
//    → Is the state simple (theme, auth, locale)?
//      → useContext + useState
//    → Is the state complex (many actions, frequent updates)?
//      → useContext + useReducer (split state/dispatch contexts)
//      → OR an external library: Zustand (simple), Redux Toolkit (enterprise)

// 4. Is this data from an API?
//    → React Query or SWR for caching, refetching, syncing
//    → useFetch custom hook for simple cases

// 5. Does the state change very frequently (animations, mouse position)?
//    → useRef (no re-renders) or external store (Zustand with selectors)`},{type:`boldText`,content:`The Most Common Mistake`},{type:`text`,content:`Reaching for global state too early. New React developers often put everything in Context or Redux from day one. Most state is local — a form input, a toggle, an expanded section. Start with useState. Lift when siblings need it. Go global only when prop drilling becomes genuinely painful (5+ levels, or 10+ components need the same data).`},{type:`title`,content:`Quick Comparison`},{type:`code`,content:`// TOOL              | SCOPE     | COMPLEXITY | RE-RENDERS        | BEST FOR
// ──────────────────|───────────|────────────|───────────────────|─────────────────
// useState          | Local     | Low        | Only the owner    | Form inputs, toggles, UI state
// useReducer        | Local     | Medium     | Only the owner    | Complex state with many actions
// Lift state up     | Siblings  | Low        | Parent + children | Search + list, selection + detail
// useContext        | Global    | Medium     | All consumers     | Theme, auth, locale
// useReducer + Ctx  | Global    | Higher     | Controllable      | App-wide state with many actions
// Zustand           | Global    | Low        | Only selectors    | Any global state, simple API
// Redux Toolkit     | Global    | Higher     | Only selectors    | Large teams, complex middleware
// React Query       | Server    | Medium     | Smart caching     | API data, caching, sync`},{type:`title`,content:`Common Pitfalls`},{type:`boldText`,content:`1. Putting Everything in Global State`},{type:`text`,content:`A form's input value doesn't belong in Context. A modal's open/close state doesn't belong in Redux. Keep state as local as possible. If only one component cares about it, it's local state. Global state is for data that genuinely crosses component boundaries.`},{type:`boldText`,content:`2. One Giant Context for Everything`},{type:`code`,content:`// BAD: One context with everything → every consumer re-renders on ANY change
<AppContext.Provider value={{ user, theme, cart, notifications, setTheme, addToCart, ... }}>

// GOOD: Split by domain and update frequency
<AuthContext.Provider value={authValue}>
  <ThemeContext.Provider value={themeValue}>
    <CartContext.Provider value={cartValue}>`},{type:`boldText`,content:`3. Duplicating Server State in Client State`},{type:`text`,content:`Fetching a list of products and storing them in useState or Redux creates a copy that can get stale. Libraries like React Query keep the server as the source of truth, automatically refetching and caching. Don't manually manage what should be server state.`},{type:`boldText`,content:`4. Premature Optimisation with External Libraries`},{type:`text`,content:`Don't install Zustand or Redux on day one 'just in case'. Start with React's built-in tools. When you feel the pain (prop drilling 5+ levels, coordinating 10+ state updates, performance issues from Context re-renders), then reach for an external library. You'll know when you need it.`},{type:`title`,content:`Example 1: useState Only — Local State`},{type:`text`,content:`The simplest approach: all state lives in one component with useState. This works perfectly when the entire app is small enough to fit in one place. You'll build a task board with columns (Todo, In Progress, Done) and drag-like functionality. Watch how it starts simple but gets crowded as features grow.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`When useState is the right choice`,`How state naturally accumulates in a parent component`,`The pain point: when does local state stop being enough?`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState } from 'react';

function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Design homepage', status: 'todo' },
    { id: 2, text: 'Build API', status: 'inprogress' },
    { id: 3, text: 'Write tests', status: 'todo' },
    { id: 4, text: 'Deploy v1', status: 'done' },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: input, status: 'todo' }]);
    setInput('');
  };

  const moveTask = (id, newStatus) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);
  const stats = { total: tasks.length, todo: tasks.filter(t => t.status === 'todo').length,
    inprogress: tasks.filter(t => t.status === 'inprogress').length, done: tasks.filter(t => t.status === 'done').length };

  return (
    <div style={{ maxWidth: '700px', margin: '20px auto' }}>
      <h1>Task Board <span style={{ fontSize: '14px', color: '#999' }}>(useState only)</span></h1>
      <form onSubmit={addTask} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..."
          style={{ flex: 1, padding: '8px' }} />
        <button type="submit">Add</button>
      </form>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {['all', ...columns.map(c => c.key)].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '13px',
              background: filter === f ? '#1976d2' : '#fff', color: filter === f ? '#fff' : '#333', cursor: 'pointer' }}>
            {f === 'all' ? \`All (\${stats.total})\` : \`\${f} (\${stats[f]})\`}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {columns.map(col => (
          <div key={col.key} style={{ background: col.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{col.label}</h3>
            {filteredTasks.filter(t => t.status === col.key).map(task => (
              <div key={task.id} style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
                <p style={{ margin: '0 0 6px' }}>{task.text}</p>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {columns.filter(c => c.key !== col.key).map(c => (
                    <button key={c.key} onClick={() => moveTask(task.id, c.key)}
                      style={{ fontSize: '11px', padding: '2px 6px', cursor: 'pointer' }}>→ {c.key}</button>
                  ))}
                  <button onClick={() => deleteTask(task.id)}
                    style={{ fontSize: '11px', padding: '2px 6px', cursor: 'pointer', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Everything lives in one component: tasks, input, filter, and all the handler functions (addTask, moveTask, deleteTask). For a small app like this, it works. The code is easy to follow because all state and logic is in one place.`},{type:`text`,content:`The pain point: imagine adding user assignment, due dates, priority levels, drag-and-drop, notifications, and undo. This component would balloon to 300+ lines. The handler functions would multiply. You'd start extracting child components, but they'd all need callbacks passed down as props. That's when you graduate to the next approach.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Extract TaskCard as a separate component → It needs moveTask, deleteTask, and the columns array as props. Three callbacks for one child.`,`Add a Header that shows task counts → It needs the tasks array. Now two components need the same data, and you're lifting state up to App.`,`Add a sidebar with project navigation → The sidebar, board, and header all need shared state. useState in one component can't serve them all.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a priority field (low, medium, high) to each task. Add a dropdown to change priority. Add a 'sort by priority' button. Notice how much the component grows — count the total lines and number of state variables.`,hint:`Hint: Add priority: 'medium' to new tasks. Add a changePriority(id, priority) handler. Add sortBy state. The component is now managing 4 state variables and 5 handler functions in one place.`,solution:`// New state:
const [sortBy, setSortBy] = useState('none');

// New handler:
const changePriority = (id, priority) => {
  setTasks(prev => prev.map(t => t.id === id ? { ...t, priority } : t));
};

// Sort before render:
const sorted = sortBy === 'priority'
  ? [...filteredTasks].sort((a, b) => ({ high: 3, medium: 2, low: 1 }[b.priority] - { high: 3, medium: 2, low: 1 }[a.priority]))
  : filteredTasks;

// In each task card, add a priority dropdown:
<select value={task.priority} onChange={e => changePriority(task.id, e.target.value)} style={{ fontSize: '11px' }}>
  <option value="low">Low</option><option value="medium">Med</option><option value="high">High</option>
</select>
// Component is now ~100 lines with 4 state vars and 5 handlers. Getting crowded.`},{type:`title`,content:`Example 2: useReducer — Structured Local State`},{type:`text`,content:`Same task board, but state logic is centralised in a reducer. Instead of 5 handler functions (addTask, moveTask, deleteTask, changePriority, setFilter), you have one dispatch function and a switch statement. The component is cleaner. The logic is testable. Adding new features means adding a case, not a new function.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`When useReducer improves over useState`,`Centralised state logic in one reducer`,`How the component simplifies when handlers become dispatches`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useReducer, useState } from 'react';

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, status: 'todo', priority: 'medium' }] };
    case 'MOVE':
      return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, status: action.status } : t) };
    case 'DELETE':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };
    case 'SET_PRIORITY':
      return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, priority: action.priority } : t) };
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

const initialState = {
  tasks: [
    { id: 1, text: 'Design homepage', status: 'todo', priority: 'high' },
    { id: 2, text: 'Build API', status: 'inprogress', priority: 'high' },
    { id: 3, text: 'Write tests', status: 'todo', priority: 'medium' },
    { id: 4, text: 'Deploy v1', status: 'done', priority: 'low' },
  ],
  filter: 'all',
};

function TaskBoard() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [input, setInput] = useState(''); // Input stays local — it's UI state

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({ type: 'ADD', text: input });
    setInput('');
  };

  const { tasks, filter } = state;
  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];

  return (
    <div style={{ maxWidth: '700px', margin: '20px auto' }}>
      <h1>Task Board <span style={{ fontSize: '14px', color: '#999' }}>(useReducer)</span></h1>
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..." style={{ flex: 1, padding: '8px' }} />
        <button type="submit">Add</button>
      </form>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {['all', 'todo', 'inprogress', 'done'].map(f => (
          <button key={f} onClick={() => dispatch({ type: 'SET_FILTER', filter: f })}
            style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '13px',
              background: filter === f ? '#1976d2' : '#fff', color: filter === f ? '#fff' : '#333', cursor: 'pointer' }}>
            {f} ({f === 'all' ? tasks.length : tasks.filter(t => t.status === f).length})
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {columns.map(col => (
          <div key={col.key} style={{ background: col.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{col.label}</h3>
            {filtered.filter(t => t.status === col.key).map(task => (
              <div key={task.id} style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span>{task.text}</span>
                  <select value={task.priority} onChange={e => dispatch({ type: 'SET_PRIORITY', id: task.id, priority: e.target.value })}
                    style={{ fontSize: '11px', padding: '1px 4px' }}>
                    <option value="low">Low</option><option value="medium">Med</option><option value="high">High</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {columns.filter(c => c.key !== col.key).map(c => (
                    <button key={c.key} onClick={() => dispatch({ type: 'MOVE', id: task.id, status: c.key })}
                      style={{ fontSize: '11px', padding: '2px 6px', cursor: 'pointer' }}>→ {c.key}</button>
                  ))}
                  <button onClick={() => dispatch({ type: 'DELETE', id: task.id })}
                    style={{ fontSize: '11px', padding: '2px 6px', cursor: 'pointer', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Five handler functions (addTask, moveTask, deleteTask, changePriority, setFilter) are now five dispatch calls. The reducer centralises all state logic in one pure function. The component only knows dispatch({ type, ...data }) — it doesn't contain any state transformation logic.`},{type:`text`,content:`Notice that input stays in useState. It's ephemeral UI state — it resets on submit, only one component uses it, and it has no actions or complex logic. Putting it in the reducer would add unnecessary complexity. Mix useState and useReducer freely based on what fits.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Put input in the reducer → Every keystroke dispatches an action, goes through the switch, and returns new state. Overkill for a text input.`,`Forget throw in default case → Misspelling an action type (dispatch({ type: 'DELET' })) silently does nothing.`,`This is still local state — if you extract TaskColumn as a child component, you need to pass dispatch down as a prop. One level is fine. Five levels is not.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add UNDO functionality. Save the previous state before each action. Add an UNDO action that restores it. Add an Undo button. Compare how easy this is with a reducer (save state on each action) vs how it would be with useState (save 5 separate variables).`,hint:`Hint: Add history: [] to the state. In each case, push the current state to history before returning new state. UNDO pops the last entry.`,solution:`// Wrap the reducer:
function undoableReducer(state, action) {
  if (action.type === 'UNDO') {
    if (state.history.length === 0) return state;
    const prev = state.history[state.history.length - 1];
    return { ...prev, history: state.history.slice(0, -1) };
  }
  const newState = taskReducer(state, action);
  return { ...newState, history: [...(state.history || []).slice(-10), { tasks: state.tasks, filter: state.filter }] };
}
// Add: <button onClick={() => dispatch({ type: 'UNDO' })} disabled={!state.history?.length}>Undo</button>`},{type:`title`,content:`Example 3: Lifting State Up — Sharing Between Siblings`},{type:`text`,content:`When you extract child components, they often need access to the same state. A Header needs task counts. A Column needs tasks and move/delete functions. A FilterBar needs the current filter and a way to change it. The solution: keep state in the parent, pass data and callbacks down as props.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`The 'lifting state up' pattern`,`Passing data down and callbacks up via props`,`When prop drilling becomes painful`,`The natural transition point to Context`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useReducer, useState } from 'react';

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD': return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, status: 'todo' }] };
    case 'MOVE': return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, status: action.status } : t) };
    case 'DELETE': return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };
    case 'SET_FILTER': return { ...state, filter: action.filter };
    default: throw new Error(\`Unknown: \${action.type}\`);
  }
}

const initialState = {
  tasks: [
    { id: 1, text: 'Design homepage', status: 'todo' },
    { id: 2, text: 'Build API', status: 'inprogress' },
    { id: 3, text: 'Write tests', status: 'todo' },
    { id: 4, text: 'Deploy v1', status: 'done' },
  ],
  filter: 'all',
};

// ─── Child Components (receive everything via props) ───

function Header({ stats }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <h1>Task Board <span style={{ fontSize: '14px', color: '#999' }}>(lifted state)</span></h1>
      <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#666' }}>
        <span>📋 {stats.todo}</span><span>🔨 {stats.inprogress}</span><span>✅ {stats.done}</span>
      </div>
    </header>
  );
}

function AddTask({ onAdd }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if (input.trim()) { onAdd(input); setInput(''); } };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..." style={{ flex: 1, padding: '8px' }} />
      <button type="submit">Add</button>
    </form>
  );
}

function FilterBar({ filter, onFilter, stats }) {
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
      {['all', 'todo', 'inprogress', 'done'].map(f => (
        <button key={f} onClick={() => onFilter(f)}
          style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '13px',
            background: filter === f ? '#1976d2' : '#fff', color: filter === f ? '#fff' : '#333', cursor: 'pointer' }}>
          {f} ({f === 'all' ? stats.total : stats[f]})
        </button>
      ))}
    </div>
  );
}

function TaskCard({ task, columns, onMove, onDelete }) {
  return (
    <div style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
      <p style={{ margin: '0 0 6px' }}>{task.text}</p>
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {columns.filter(c => c.key !== task.status).map(c => (
          <button key={c.key} onClick={() => onMove(task.id, c.key)} style={{ fontSize: '11px', padding: '2px 6px' }}>→ {c.key}</button>
        ))}
        <button onClick={() => onDelete(task.id)} style={{ fontSize: '11px', padding: '2px 6px', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
      </div>
    </div>
  );
}

function Column({ column, tasks, columns, onMove, onDelete }) {
  return (
    <div style={{ background: column.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
      <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{column.label}</h3>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} columns={columns} onMove={onMove} onDelete={onDelete} />
      ))}
    </div>
  );
}

// ─── Parent: owns state, passes everything down ───

function TaskBoard() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { tasks, filter } = state;

  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];

  const stats = { total: tasks.length, todo: tasks.filter(t => t.status === 'todo').length,
    inprogress: tasks.filter(t => t.status === 'inprogress').length, done: tasks.filter(t => t.status === 'done').length };

  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  return (
    <div style={{ maxWidth: '700px', margin: '20px auto' }}>
      {/* Every child receives what it needs via props */}
      <Header stats={stats} />
      <AddTask onAdd={(text) => dispatch({ type: 'ADD', text })} />
      <FilterBar filter={filter} onFilter={(f) => dispatch({ type: 'SET_FILTER', filter: f })} stats={stats} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {columns.map(col => (
          <Column key={col.key} column={col} columns={columns}
            tasks={filtered.filter(t => t.status === col.key)}
            onMove={(id, status) => dispatch({ type: 'MOVE', id, status })}
            onDelete={(id) => dispatch({ type: 'DELETE', id })} />
        ))}
      </div>
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`State lives in TaskBoard. It passes data (tasks, filter, stats) and callbacks (onAdd, onMove, onDelete, onFilter) to each child. Each child is focused: AddTask only knows about adding, FilterBar only knows about filtering, Column only knows about displaying and moving tasks.`},{type:`text`,content:`The prop drilling is manageable at 2 levels (TaskBoard → Column → TaskCard). But imagine adding: a Sidebar with project switching, a user avatar in Header that needs auth state, notifications that fire when tasks move, and a settings panel that changes the board layout. Suddenly every new feature requires threading more props through more levels. That's when you reach for Context.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Add a deeply nested component that needs dispatch → Prop drilling through 4-5 levels. Every intermediate component receives and forwards props it doesn't use.`,`Add a Header → FilterBar → Column shared animation state → All three need it. Lifting to TaskBoard works, but TaskBoard accumulates unrelated state.`,`The pattern works for 2-3 levels. Beyond that, it's a signal to use Context.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add an EditTaskModal. When the user clicks a task, a modal opens with the task details for editing (text, priority, assignee). The modal needs the selected task, an onSave callback, and an onClose callback. Count how many components the selectedTask state passes through.`,hint:`Hint: Add selectedTask to parent state. TaskBoard → Column → TaskCard (click opens modal) → EditTaskModal (receives task + onSave). That's 3 levels of prop passing for the selected task, and the modal needs callbacks threading back up.`,solution:`// In TaskBoard:
const [selectedTask, setSelectedTask] = useState(null);

// Column receives onSelect, passes to TaskCard:
<Column onSelect={(task) => setSelectedTask(task)} />

// TaskCard receives onSelect:
<div onClick={() => onSelect(task)}>...</div>

// Modal at the top level:
{selectedTask && (
  <EditTaskModal task={selectedTask}
    onSave={(updated) => { dispatch({ type: 'UPDATE', ...updated }); setSelectedTask(null); }}
    onClose={() => setSelectedTask(null)} />
)}
// Props thread: TaskBoard → Column → TaskCard → click → setSelectedTask → Modal. Getting crowded.`},{type:`title`,content:`Example 4: useContext — Global State`},{type:`text`,content:`Same task board, but now state is accessible anywhere in the tree without prop drilling. Wrap the app in a TaskProvider, and any component — no matter how deeply nested — can call useTaskBoard() to get tasks and dispatch. No props needed.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Moving from prop drilling to Context`,`Provider + custom hook pattern`,`How Context eliminates intermediate prop forwarding`,`The tradeoff: convenience vs re-render cost`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useReducer, useState, createContext, useContext, useMemo } from 'react';

// ─── Context + Provider ───

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD': return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, status: 'todo' }] };
    case 'MOVE': return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, status: action.status } : t) };
    case 'DELETE': return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };
    case 'SET_FILTER': return { ...state, filter: action.filter };
    default: throw new Error(\`Unknown: \${action.type}\`);
  }
}

const TaskContext = createContext(null);

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [
      { id: 1, text: 'Design homepage', status: 'todo' },
      { id: 2, text: 'Build API', status: 'inprogress' },
      { id: 3, text: 'Write tests', status: 'todo' },
      { id: 4, text: 'Deploy v1', status: 'done' },
    ],
    filter: 'all',
  });

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

function useTaskBoard() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTaskBoard must be used within TaskProvider');
  return ctx;
}

// ─── Components (no props needed!) ───

function Header() {
  const { state: { tasks } } = useTaskBoard();
  const stats = { todo: tasks.filter(t => t.status === 'todo').length,
    inprogress: tasks.filter(t => t.status === 'inprogress').length,
    done: tasks.filter(t => t.status === 'done').length };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <h1>Task Board <span style={{ fontSize: '14px', color: '#999' }}>(useContext)</span></h1>
      <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#666' }}>
        <span>📋 {stats.todo}</span><span>🔨 {stats.inprogress}</span><span>✅ {stats.done}</span>
      </div>
    </header>
  );
}

function AddTask() {
  const { dispatch } = useTaskBoard();
  const [input, setInput] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if (input.trim()) { dispatch({ type: 'ADD', text: input }); setInput(''); } };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..." style={{ flex: 1, padding: '8px' }} />
      <button type="submit">Add</button>
    </form>
  );
}

function FilterBar() {
  const { state: { filter, tasks }, dispatch } = useTaskBoard();
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
      {['all', 'todo', 'inprogress', 'done'].map(f => (
        <button key={f} onClick={() => dispatch({ type: 'SET_FILTER', filter: f })}
          style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '13px',
            background: filter === f ? '#1976d2' : '#fff', color: filter === f ? '#fff' : '#333', cursor: 'pointer' }}>
          {f} ({f === 'all' ? tasks.length : tasks.filter(t => t.status === f).length})
        </button>
      ))}
    </div>
  );
}

function TaskCard({ task, columns }) {
  const { dispatch } = useTaskBoard();
  return (
    <div style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
      <p style={{ margin: '0 0 6px' }}>{task.text}</p>
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {columns.filter(c => c.key !== task.status).map(c => (
          <button key={c.key} onClick={() => dispatch({ type: 'MOVE', id: task.id, status: c.key })}
            style={{ fontSize: '11px', padding: '2px 6px' }}>→ {c.key}</button>
        ))}
        <button onClick={() => dispatch({ type: 'DELETE', id: task.id })}
          style={{ fontSize: '11px', padding: '2px 6px', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
      </div>
    </div>
  );
}

function Board() {
  const { state: { tasks, filter } } = useTaskBoard();
  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];
  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
      {columns.map(col => (
        <div key={col.key} style={{ background: col.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
          <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{col.label}</h3>
          {filtered.filter(t => t.status === col.key).map(task => (
            <TaskCard key={task.id} task={task} columns={columns} />
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: '700px', margin: '20px auto' }}>
        <Header />
        <AddTask />
        <FilterBar />
        <Board />
      </div>
    </TaskProvider>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Compare App in Example 3 (passing stats, filter, dispatch, tasks as props) vs Example 4 (clean JSX with no props). Header, AddTask, FilterBar, and Board all call useTaskBoard() directly to get what they need. TaskCard gets dispatch from context instead of receiving it through Column.`},{type:`text`,content:`The tradeoff: every context consumer re-renders when state changes. Moving a task re-renders Header (for stats), FilterBar (for counts), Board, and every TaskCard. For a small app this is fine. For a large app with many consumers, you'd split into separate contexts (see Example 5) or use an external library.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Forget useMemo on the Provider value → Parent re-renders create a new { state, dispatch } object. Every consumer re-renders even if state didn't change.`,`Put TaskProvider inside a frequently-updating parent → Provider re-renders on parent state changes, creating new values. Keep providers high and stable.`,`All consumers re-render on any state change — AddTask re-renders when a task moves, even though it only needs dispatch. This is the motivation for Example 5.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a ThemeContext alongside TaskContext. Build a theme toggle in the Header. Verify that toggling the theme doesn't re-render task components and vice versa (because they're separate contexts).`,hint:`Hint: Create ThemeContext with its own Provider. Wrap App in both providers. Only components consuming ThemeContext re-render on theme toggle.`,solution:`const ThemeContext = createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
function useTheme() { return useContext(ThemeContext); }

// In Header, add: const { theme, setTheme } = useTheme();
// <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>{theme === 'dark' ? '☀️' : '🌙'}</button>

// Wrap: <ThemeProvider><TaskProvider>...</TaskProvider></ThemeProvider>`},{type:`title`,content:`Example 5: useReducer + useContext — The Production Pattern`},{type:`text`,content:`The performance-optimised version: separate contexts for state and dispatch. Components that only dispatch actions (AddTask) never re-render when state changes. Components that only read state re-render only when the data they consume changes. This is the pattern used in production React apps before reaching for external libraries.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Splitting state and dispatch into separate contexts`,`Why dispatch is a stable reference (it never changes)`,`memo + split contexts = surgical re-renders`,`The standard production pattern for app-wide state`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useReducer, useState, createContext, useContext, memo, useRef, useEffect } from 'react';

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD': return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, status: 'todo' }] };
    case 'MOVE': return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, status: action.status } : t) };
    case 'DELETE': return { ...state, tasks: state.tasks.filter(t => t.id !== action.id) };
    case 'SET_FILTER': return { ...state, filter: action.filter };
    default: throw new Error(\`Unknown: \${action.type}\`);
  }
}

// TWO separate contexts
const TaskStateContext = createContext(null);
const TaskDispatchContext = createContext(null);

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [
      { id: 1, text: 'Design homepage', status: 'todo' },
      { id: 2, text: 'Build API', status: 'inprogress' },
      { id: 3, text: 'Write tests', status: 'todo' },
      { id: 4, text: 'Deploy v1', status: 'done' },
    ],
    filter: 'all',
  });

  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
}

function useTaskState() {
  const ctx = useContext(TaskStateContext);
  if (!ctx) throw new Error('useTaskState requires TaskProvider');
  return ctx;
}
function useTaskDispatch() {
  const ctx = useContext(TaskDispatchContext);
  if (!ctx) throw new Error('useTaskDispatch requires TaskProvider');
  return ctx;
}

// ─── Render tracker for demo ───

function RenderFlash({ name, children }) {
  const count = useRef(0);
  const ref = useRef(null);
  count.current += 1;
  useEffect(() => {
    if (ref.current) { ref.current.style.background = '#fff3cd';
      const t = setTimeout(() => { ref.current.style.background = 'transparent'; }, 300);
      return () => clearTimeout(t); }
  });
  return (
    <div ref={ref} style={{ transition: 'background 0.3s' }}>
      <span style={{ fontSize: '11px', color: '#bbb' }}>{name} [{count.current}]</span>
      {children}
    </div>
  );
}

// ─── Components: choose state OR dispatch ───

// ONLY dispatch — never re-renders on state change
const AddTask = memo(function AddTask() {
  const dispatch = useTaskDispatch();
  const [input, setInput] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if (input.trim()) { dispatch({ type: 'ADD', text: input }); setInput(''); } };
  return (
    <RenderFlash name="AddTask (dispatch only)">
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..." style={{ flex: 1, padding: '8px' }} />
        <button type="submit">Add</button>
      </form>
    </RenderFlash>
  );
});

// Reads state — re-renders when tasks change
function Header() {
  const { tasks } = useTaskState();
  return (
    <RenderFlash name="Header (reads state)">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h1>Task Board <span style={{ fontSize: '14px', color: '#999' }}>(split contexts)</span></h1>
        <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#666' }}>
          <span>📋 {tasks.filter(t => t.status === 'todo').length}</span>
          <span>🔨 {tasks.filter(t => t.status === 'inprogress').length}</span>
          <span>✅ {tasks.filter(t => t.status === 'done').length}</span>
        </div>
      </header>
    </RenderFlash>
  );
}

function FilterBar() {
  const { filter, tasks } = useTaskState();
  const dispatch = useTaskDispatch();
  return (
    <RenderFlash name="FilterBar (reads state + dispatch)">
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {['all', 'todo', 'inprogress', 'done'].map(f => (
          <button key={f} onClick={() => dispatch({ type: 'SET_FILTER', filter: f })}
            style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '13px',
              background: filter === f ? '#1976d2' : '#fff', color: filter === f ? '#fff' : '#333', cursor: 'pointer' }}>
            {f} ({f === 'all' ? tasks.length : tasks.filter(t => t.status === f).length})
          </button>
        ))}
      </div>
    </RenderFlash>
  );
}

function Board() {
  const { tasks, filter } = useTaskState();
  const dispatch = useTaskDispatch();
  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];
  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
      {columns.map(col => (
        <div key={col.key} style={{ background: col.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
          <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{col.label}</h3>
          {filtered.filter(t => t.status === col.key).map(task => (
            <div key={task.id} style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
              <p style={{ margin: '0 0 6px' }}>{task.text}</p>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {columns.filter(c => c.key !== col.key).map(c => (
                  <button key={c.key} onClick={() => dispatch({ type: 'MOVE', id: task.id, status: c.key })}
                    style={{ fontSize: '11px', padding: '2px 6px' }}>→ {c.key}</button>
                ))}
                <button onClick={() => dispatch({ type: 'DELETE', id: task.id })}
                  style={{ fontSize: '11px', padding: '2px 6px', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: '700px', margin: '20px auto' }}>
        <Header />
        <AddTask />
        <FilterBar />
        <Board />
      </div>
    </TaskProvider>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`Two contexts: TaskStateContext (changes on every dispatch) and TaskDispatchContext (never changes — dispatch is stable). AddTask uses only useTaskDispatch(), so it never re-renders when tasks change. Header uses useTaskState(), so it re-renders when tasks change but not when unrelated state changes.`},{type:`text`,content:`Watch the render counters: add a task and AddTask stays at [1]. Move a task and AddTask still stays at [1]. Only components that read state re-render. This is the production pattern used in real apps — it's what you should reach for when prop drilling gets painful but you don't want an external library.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Put state and dispatch in one context → AddTask re-renders on every state change because the combined value changes.`,`Forget memo on AddTask → Even with split contexts, React re-renders children of updated parents. memo + dispatch-only context = zero wasted renders.`,`Use state inside useCallback deps → The callback recreates when state changes, breaking the dispatch-only benefit.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a DragDropZone component that only dispatches MOVE. Verify it never re-renders when tasks change. Then add a TaskCounter component that only reads state.tasks.length. Verify it only re-renders when the count actually changes (not when tasks move between columns).`,hint:`Hint: DragDropZone calls only useTaskDispatch(). TaskCounter calls useTaskState() but uses memo with a custom comparison: prevTasks.length === nextTasks.length.`,solution:`const DragDropZone = memo(function DragDropZone() {
  const dispatch = useTaskDispatch();
  // Only dispatches — never re-renders on state change
  return <p>Drop target (renders: stays at 1)</p>;
});

// TaskCounter: only re-renders when count changes
const TaskCounter = memo(function TaskCounter() {
  const { tasks } = useTaskState();
  return <p>Total: {tasks.length}</p>;
});
// tasks.length only changes on ADD/DELETE, not on MOVE.
// But useContext re-renders on any state change.
// To truly optimise, you'd need a selector pattern (→ Zustand).`},{type:`title`,content:`Example 6: Zustand — Lightweight External Library`},{type:`text`,content:`Zustand is a minimal state management library that solves Context's biggest problem: re-renders. With Context, every consumer re-renders when any part of state changes. With Zustand, components subscribe to specific slices of state — a component reading only the task count won't re-render when a task moves. Same task board, dramatically simpler code.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Creating a Zustand store`,`Selectors: subscribing to only what you need`,`No Provider, no Context, no boilerplate`,`Why Zustand is the most popular lightweight alternative to Context`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`// npm install zustand
import { create } from 'zustand';
import { useState, useRef, useEffect, memo } from 'react';

// ─── Store: one function, all state + actions ───

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, text: 'Design homepage', status: 'todo' },
    { id: 2, text: 'Build API', status: 'inprogress' },
    { id: 3, text: 'Write tests', status: 'todo' },
    { id: 4, text: 'Deploy v1', status: 'done' },
  ],
  filter: 'all',

  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text, status: 'todo' }],
  })),
  moveTask: (id, status) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, status } : t),
  })),
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id),
  })),
  setFilter: (filter) => set({ filter }),
}));

// ─── Render tracker ───

function RenderFlash({ name, children }) {
  const count = useRef(0);
  const ref = useRef(null);
  count.current += 1;
  useEffect(() => {
    if (ref.current) { ref.current.style.background = '#fff3cd';
      const t = setTimeout(() => { ref.current.style.background = 'transparent'; }, 300);
      return () => clearTimeout(t); }
  });
  return (
    <div ref={ref} style={{ transition: 'background 0.3s' }}>
      <span style={{ fontSize: '11px', color: '#bbb' }}>{name} [{count.current}]</span>
      {children}
    </div>
  );
}

// ─── Components: selectors = surgical re-renders ───

function Header() {
  // Selector: only re-renders when task counts change
  const todoCount = useTaskStore(s => s.tasks.filter(t => t.status === 'todo').length);
  const inProgressCount = useTaskStore(s => s.tasks.filter(t => t.status === 'inprogress').length);
  const doneCount = useTaskStore(s => s.tasks.filter(t => t.status === 'done').length);

  return (
    <RenderFlash name="Header">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h1>Task Board <span style={{ fontSize: '14px', color: '#999' }}>(Zustand)</span></h1>
        <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#666' }}>
          <span>📋 {todoCount}</span><span>🔨 {inProgressCount}</span><span>✅ {doneCount}</span>
        </div>
      </header>
    </RenderFlash>
  );
}

function AddTask() {
  // Only accesses the action — never re-renders on state change
  const addTask = useTaskStore(s => s.addTask);
  const [input, setInput] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if (input.trim()) { addTask(input); setInput(''); } };

  return (
    <RenderFlash name="AddTask (action only)">
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..." style={{ flex: 1, padding: '8px' }} />
        <button type="submit">Add</button>
      </form>
    </RenderFlash>
  );
}

function FilterBar() {
  const filter = useTaskStore(s => s.filter);
  const tasks = useTaskStore(s => s.tasks);
  const setFilter = useTaskStore(s => s.setFilter);

  return (
    <RenderFlash name="FilterBar">
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {['all', 'todo', 'inprogress', 'done'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            style={{ padding: '4px 10px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '13px',
              background: filter === f ? '#1976d2' : '#fff', color: filter === f ? '#fff' : '#333', cursor: 'pointer' }}>
            {f} ({f === 'all' ? tasks.length : tasks.filter(t => t.status === f).length})
          </button>
        ))}
      </div>
    </RenderFlash>
  );
}

function Board() {
  const tasks = useTaskStore(s => s.tasks);
  const filter = useTaskStore(s => s.filter);
  const moveTask = useTaskStore(s => s.moveTask);
  const deleteTask = useTaskStore(s => s.deleteTask);

  const columns = [
    { key: 'todo', label: '📋 Todo', color: '#e3f2fd' },
    { key: 'inprogress', label: '🔨 In Progress', color: '#fff3e0' },
    { key: 'done', label: '✅ Done', color: '#e8f5e9' },
  ];
  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  return (
    <RenderFlash name="Board">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {columns.map(col => (
          <div key={col.key} style={{ background: col.color, borderRadius: '10px', padding: '12px', minHeight: '200px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '15px' }}>{col.label}</h3>
            {filtered.filter(t => t.status === col.key).map(task => (
              <div key={task.id} style={{ background: '#fff', padding: '8px', borderRadius: '6px', marginBottom: '6px', fontSize: '14px' }}>
                <p style={{ margin: '0 0 6px' }}>{task.text}</p>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {columns.filter(c => c.key !== col.key).map(c => (
                    <button key={c.key} onClick={() => moveTask(task.id, c.key)}
                      style={{ fontSize: '11px', padding: '2px 6px' }}>→ {c.key}</button>
                  ))}
                  <button onClick={() => deleteTask(task.id)}
                    style={{ fontSize: '11px', padding: '2px 6px', color: '#d32f2f', marginLeft: 'auto' }}>✕</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </RenderFlash>
  );
}

// No Provider needed!
function App() {
  return (
    <div style={{ maxWidth: '700px', margin: '20px auto' }}>
      <Header />
      <AddTask />
      <FilterBar />
      <Board />
    </div>
  );
}`},{type:`boldText`,content:`Step-by-Step Breakdown`},{type:`text`,content:`The store is created with create() — one function that defines state and actions together. No reducer, no switch statement, no action types, no Provider. Components call useTaskStore(selector) to subscribe to exactly what they need.`},{type:`text`,content:`Selectors are the key feature: useTaskStore(s => s.addTask) subscribes only to the addTask function — which never changes. AddTask never re-renders on state changes. Compare this to the Context pattern where you needed split contexts + memo to achieve the same result. Zustand does it with one line.`},{type:`text`,content:`No Provider means no nesting. No Context means no re-render cascades. Actions are defined alongside state so you don't need useCallback or dispatch. It's the simplest way to manage global state in React when the built-in tools start to feel heavy.`},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Select the entire store: useTaskStore() without a selector → Component subscribes to everything and re-renders on any change. Always use selectors.`,`Create a new object in a selector: useTaskStore(s => ({ a: s.a, b: s.b })) → New object every time, breaks shallow comparison. Use separate selectors or Zustand's shallow comparison.`,`Mutate state: set((state) => { state.tasks.push(task); return state; }) → Zustand uses immutable updates like React. Always return new objects.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add persistence to the Zustand store using the persist middleware. Tasks should survive page refresh. Compare how many lines this takes vs implementing localStorage manually with useEffect.`,hint:`Hint: import { persist } from 'zustand/middleware'. Wrap create: create(persist((set) => ({...}), { name: 'task-board' })). That's it — 1 line change.`,solution:`import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [...],
      filter: 'all',
      addTask: (text) => set((s) => ({ tasks: [...s.tasks, { id: Date.now(), text, status: 'todo' }] })),
      moveTask: (id, status) => set((s) => ({ tasks: s.tasks.map(t => t.id === id ? { ...t, status } : t) })),
      deleteTask: (id) => set((s) => ({ tasks: s.tasks.filter(t => t.id !== id) })),
      setFilter: (filter) => set({ filter }),
    }),
    { name: 'task-board' } // localStorage key
  )
);
// That's it. State persists across refreshes. Compare: useLocalStorage + useEffect = 15+ lines.`},{type:`title`,content:`Example 7: When to Use What — A Real Multi-Pattern App`},{type:`text`,content:`Real apps don't use one state management approach — they use several. This final example builds a complete app that intentionally mixes approaches: useState for local UI state, useReducer for complex forms, useContext for auth/theme, and demonstrates where you'd slot in Zustand or React Query. You'll see the decision framework in action.`},{type:`boldText`,content:`What You'll Learn`},{type:`list`,items:[`Mixing state management approaches in one app`,`The decision framework applied to real features`,`Why there's no single 'right' answer — only tradeoffs`,`A mental model for choosing state tools in your own projects`]},{type:`boldText`,content:`Full Code`},{type:`code`,content:`import { useState, useReducer, createContext, useContext, useMemo, useEffect } from 'react';

// ─── GLOBAL: Auth (useContext) — changes rarely, needed everywhere ───

const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (name) => setUser({ name, role: name === 'admin' ? 'admin' : 'user' });
  const logout = () => setUser(null);
  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
function useAuth() { return useContext(AuthContext); }

// ─── GLOBAL: Theme (useContext) — changes occasionally, affects styling ───

const ThemeContext = createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
function useTheme() { return useContext(ThemeContext); }

// ─── LOCAL COMPLEX: Contact Form (useReducer) — many fields, validation ───

function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, values: { ...state.values, [action.field]: action.value },
        touched: { ...state.touched, [action.field]: true } };
    case 'SET_ERRORS': return { ...state, errors: action.errors };
    case 'SUBMIT': return { ...state, submitted: true };
    case 'RESET': return action.initial;
    default: throw new Error(\`Unknown: \${action.type}\`);
  }
}

function ContactForm() {
  const { user } = useAuth();
  const initial = { values: { name: user?.name || '', email: '', message: '' }, errors: {}, touched: {}, submitted: false };
  const [state, dispatch] = useReducer(formReducer, initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!state.values.name.trim()) errors.name = 'Required';
    if (!state.values.email.includes('@')) errors.email = 'Invalid email';
    if (state.values.message.length < 10) errors.message = '10+ characters';
    dispatch({ type: 'SET_ERRORS', errors });
    if (Object.keys(errors).length === 0) dispatch({ type: 'SUBMIT' });
  };

  if (state.submitted) return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>✅ Message Sent!</h2>
      <button onClick={() => dispatch({ type: 'RESET', initial })}>Send Another</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h2>Contact Us</h2>
      {['name', 'email', 'message'].map(field => (
        <div key={field}>
          <input value={state.values[field]} placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={e => dispatch({ type: 'CHANGE', field, value: e.target.value })}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box',
              border: \`1px solid \${state.touched[field] && state.errors[field] ? '#d32f2f' : '#ddd'}\` }} />
          {state.touched[field] && state.errors[field] && (
            <small style={{ color: '#d32f2f' }}>{state.errors[field]}</small>
          )}
        </div>
      ))}
      <button type="submit" style={{ padding: '10px' }}>Send</button>
    </form>
  );
}

// ─── LOCAL SIMPLE: Notifications Panel (useState) — toggle + list ───

function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'Welcome to the app!' },
    { id: 2, text: 'New feature available' },
  ]);

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setIsOpen(o => !o)}>
        🔔 {notifications.length}
      </button>
      {isOpen && (
        <div style={{ position: 'absolute', right: 0, top: '100%', background: '#fff', border: '1px solid #eee',
          borderRadius: '8px', padding: '10px', width: '200px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 10 }}>
          {notifications.map(n => (
            <p key={n.id} style={{ margin: '4px 0', fontSize: '14px' }}>{n.text}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── SERVER STATE: Would use React Query in production ───

function ProductPreview() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=3')
      .then(r => r.json())
      .then(data => { setProducts(data.products); setLoading(false); });
  }, []);

  return (
    <div>
      <h2>Featured Products <span style={{ fontSize: '12px', color: '#999' }}>(server state → React Query in prod)</span></h2>
      {loading ? <p>Loading...</p> : products.map(p => (
        <div key={p.id} style={{ display: 'flex', gap: '8px', padding: '6px 0', borderBottom: '1px solid #eee' }}>
          <img src={p.thumbnail} alt={p.title} width={40} height={40} style={{ borderRadius: '6px', objectFit: 'cover' }} />
          <div><strong style={{ fontSize: '14px' }}>{p.title}</strong><p style={{ margin: 0, color: '#666', fontSize: '13px' }}>£{p.price}</p></div>
        </div>
      ))}
    </div>
  );
}

// ─── App: mixing all approaches ───

function App() {
  const { user, login, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px',
      background: isDark ? '#1e1e1e' : '#fff', color: isDark ? '#eee' : '#333' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '20px' }}>MyApp</h1>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <NotificationPanel />
          <button onClick={toggle}>{isDark ? '☀️' : '🌙'}</button>
          {user ? <span>👤 {user.name} <button onClick={logout}>Logout</button></span>
            : <button onClick={() => login('Alice')}>Login</button>}
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ProductPreview />
        {user && <ContactForm />}
        {!user && <p style={{ color: '#999' }}>Login to access the contact form.</p>}
      </div>
    </div>
  );
}

function Root() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  );
}`},{type:`boldText`,content:`The Decision Breakdown`},{type:`list`,items:[`Auth (useContext): Needed by Header (user name), ContactForm (pre-fill name), conditional rendering. Rarely changes. Simple state (user object). Context is perfect.`,`Theme (useContext): Needed by every component for styling. Changes occasionally. Two values (light/dark). Context is perfect.`,`Contact Form (useReducer): Complex local state — values, errors, touched, submitted. Multiple actions (CHANGE, VALIDATE, SUBMIT, RESET). Only used in one place. useReducer is perfect.`,`Notifications (useState): Simple toggle (open/close) + a list. Only the panel component cares. useState is perfect.`,`Products (server state): Comes from an API. Needs loading/error states. In production, React Query would handle caching and refetching. For now, useEffect + useState works.`]},{type:`boldText`,content:`What Would Break`},{type:`list`,items:[`Put the form state in Context → Global state for a form that exists on one page. Unnecessary complexity. Every form field change re-renders all context consumers.`,`Put the notification toggle in Context → Only the panel needs it. Global state for a local concern. When it's only used in one component, it's local state.`,`Use useState for the contact form → Five separate setters (setName, setEmail, setMessage, setErrors, setTouched). Coordinating them is error-prone. useReducer keeps it atomic.`]},{type:`boldText`,content:`Practice Tasks`},{type:`practiceTask`,content:`Task 1: Add a shopping cart to this app. Decide which state management approach to use. The cart needs to be accessible from ProductPreview (add button), Header (cart count), and a new CartPage (full list). Implement your choice and justify it.`,hint:`Hint: Cart is needed in 3+ components across the app → global state. It has multiple actions (add, remove, update quantity, clear) → useReducer pattern. The best fit is either useContext + useReducer (built-in) or Zustand (simpler).`,solution:`// Option A: useContext + useReducer
const CartContext = createContext(null);
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': return [...state, { ...action.product, qty: 1 }];
    case 'REMOVE': return state.filter(i => i.id !== action.id);
    case 'CLEAR': return [];
    default: throw new Error();
  }
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
}

// Option B: Zustand (simpler)
const useCartStore = create((set) => ({
  items: [],
  addItem: (product) => set(s => ({ items: [...s.items, { ...product, qty: 1 }] })),
  removeItem: (id) => set(s => ({ items: s.items.filter(i => i.id !== id) })),
  clear: () => set({ items: [] }),
}));

// Zustand is simpler here: no Provider, no Context, selectors prevent re-renders.
// useContext + useReducer works fine too — choose based on team preference.`},{type:`title`,content:`What's Next`},{type:`text`,content:`You've seen the same app built with five different state management approaches and learned to mix them based on what each feature actually needs. The most important takeaway: there is no single 'best' approach — only tradeoffs. Start simple (useState), scale up when you feel the pain (useReducer, Context, Zustand), and always keep state as local as possible.`},{type:`list`,items:[`Zustand — Start with the docs at zustand-demo.pmnd.rs. It's the most popular lightweight alternative to Context/Redux and takes 5 minutes to learn.`,`React Query (TanStack Query) — The standard for server state. If your app fetches data from APIs, React Query handles caching, refetching, pagination, and optimistic updates. Don't manage server state manually.`,`Redux Toolkit — For large teams and complex apps that need middleware, time-travel debugging, and a strict architecture. Overkill for most projects, but essential for enterprise apps.`,`Jotai — An atomic state library where each piece of state is an independent 'atom'. Great for apps where many components need fine-grained subscriptions to different pieces of state.`]},{type:`text`,content:``}]}],d=e(c(),1),f=n(),p={...o,hljs:{...o.hljs,background:`transparent`,padding:`0`}},m=[``],h=()=>(0,f.jsxs)(`svg`,{className:`copy-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,f.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,f.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]}),g=()=>(0,f.jsx)(`svg`,{className:`check-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),_=e=>e.includes(`import React`)||e.includes(`useState`)||e.includes(`<`)&&e.includes(`/>`)?`jsx`:e.includes(`const `)||e.includes(`let `)||e.includes(`function`)||e.includes(`=>`)?`javascript`:e.includes(`<html`)||e.includes(`<!DOCTYPE`)||e.includes(`<div`)?`html`:e.includes(`{`)&&e.includes(`}`)&&e.includes(`:`)&&e.includes(`;`)?`css`:e.includes(`npm `)||e.includes(`yarn `)||e.includes(`cd `)?`bash`:`javascript`,v=({code:e,index:t,handleCopy:n,copiedIndex:r,language:i})=>{let o=r===t,s=i||_(e);return(0,f.jsxs)(`div`,{className:`code-container`,children:[(0,f.jsxs)(`div`,{className:`code-header`,children:[(0,f.jsxs)(`div`,{className:`code-header-left`,children:[(0,f.jsxs)(`div`,{className:`code-dots`,children:[(0,f.jsx)(`span`,{className:`code-dot red`}),(0,f.jsx)(`span`,{className:`code-dot yellow`}),(0,f.jsx)(`span`,{className:`code-dot green`})]}),(0,f.jsx)(`span`,{className:`code-language`,children:s})]}),(0,f.jsxs)(`button`,{onClick:()=>n(e,t),className:`copy-button ${o?`copied`:``}`,"aria-label":o?`Copied!`:`Copy code`,children:[o?(0,f.jsx)(g,{}):(0,f.jsx)(h,{}),(0,f.jsx)(`span`,{children:o?`Copied!`:`Copy`})]})]}),(0,f.jsx)(`div`,{className:`code-content`,children:(0,f.jsx)(a,{language:s,style:p,wrapLongLines:!0,showLineNumbers:!1,customStyle:{background:`transparent`,padding:`1.5rem 1.25rem`,margin:0,fontSize:`inherit`},children:e})})]})},y=()=>{let e=u[0],t={};e?.paragraphs?.filter(e=>e.type===`examples`)?.forEach((e,n)=>{e.tabs?.length>0&&(t[`example-${n}`]=e.tabs[0].id)});let[n,a]=(0,l.useState)(t),[o,c]=(0,l.useState)(null),[d,p]=(0,l.useState)({}),[h,g]=(0,l.useState)(!1),[_,y]=(0,l.useState)(()=>{let e=localStorage.getItem(`stateManagemenCheckedTitles`);return e?JSON.parse(e):{}}),b=(e,t)=>{let r=n[e]||t[0]?.id;return t.find(e=>e.id===r)?.code||t[0]?.code||``},x=(0,l.useMemo)(()=>{let t=[];return e?.paragraphs?.forEach((e,n)=>{e.type===`title`&&t.push({id:`section-${n}`,title:e.content})}),t},[e]),S=(0,l.useRef)({}),C=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;g(e>300)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]);let w=()=>{C.current?.scrollIntoView({behavior:`smooth`})};(0,l.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,l.useEffect)(()=>{localStorage.setItem(`stateManagemenCheckedTitles`,JSON.stringify(_))},[_]);let T=(e,t)=>{if(navigator.clipboard)navigator.clipboard.writeText(e).then(()=>{c(t),setTimeout(()=>c(null),2e3)}).catch(e=>{console.error(`Failed to copy:`,e),alert(`Failed to copy code. Please copy it manually.`)});else{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),c(t),setTimeout(()=>c(null),2e3)}catch(e){console.error(`Fallback copy failed:`,e),alert(`Failed to copy code. Please copy it manually.`)}document.body.removeChild(n)}},E=(e,t,r)=>{if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let i=r.findIndex(e=>e.id===n[t]),o;o=e.key===`ArrowLeft`?i>0?i-1:r.length-1:i<r.length-1?i+1:0,a({...n,[t]:r[o].id});let s=S.current[`${t}-${r[o].id}`];s&&s.focus()}},D=e=>{p(t=>({...t,[e]:!t[e]}))},O=e=>{y(t=>({...t,[e]:!t[e]}))};return e?(0,f.jsxs)(`div`,{children:[(0,f.jsx)(r,{}),(0,f.jsx)(`main`,{className:`main`,children:(0,f.jsx)(`div`,{className:`guide`,children:(0,f.jsxs)(`article`,{children:[(0,f.jsxs)(`section`,{className:`hero-section`,children:[(0,f.jsxs)(`h1`,{className:`title`,children:[(0,f.jsx)(`span`,{className:`title-main`,children:e.title}),(0,f.jsx)(`span`,{className:`title-sub`,children:`A Comprehensive Guide`})]}),(0,f.jsx)(`img`,{className:`top-image`,src:e.image,alt:e.title})]}),x.length>0&&(0,f.jsxs)(`section`,{ref:C,className:`section`,children:[(0,f.jsx)(`h2`,{className:`heading green`,children:`Table of Contents`}),(0,f.jsx)(`ul`,{className:`toc-list`,children:x.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`#${e.id}`,children:e.title})},e.id))})]}),(0,f.jsx)(`section`,{className:`section`,children:e.paragraphs.map((e,t)=>(0,f.jsxs)(`div`,{id:e.type===`title`?`section-${t}`:void 0,children:[e.type===`text`&&(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),e.type===`boldText`&&(0,f.jsx)(`span`,{className:`bold-article-paragraph`,children:s(e.content,m)}),e.type===`title`&&(0,f.jsxs)(`div`,{className:`title-container`,children:[(0,f.jsxs)(`div`,{className:`checkbox-container`,children:[(0,f.jsx)(`input`,{type:`checkbox`,id:`title-checkbox-${t}`,checked:_[t]||!1,onChange:()=>O(t)}),(0,f.jsx)(`label`,{htmlFor:`title-checkbox-${t}`})]}),(0,f.jsx)(`h2`,{className:`article-title`,children:e.content})]}),e.type===`list`&&(0,f.jsx)(`ul`,{className:`list`,children:e.items.map((e,n)=>(0,f.jsx)(`li`,{children:s(e,m)},`item-${t}-${n}`))}),e.type===`image`&&(0,f.jsx)(`img`,{className:`image`,src:e.src,alt:e.alt}),e.type===`code`&&(0,f.jsx)(v,{code:e.content,index:t,handleCopy:T,copiedIndex:o}),e.type===`examples`&&(0,f.jsxs)(`div`,{className:`code-tabs`,children:[(0,f.jsx)(`div`,{role:`tablist`,"aria-label":`Code Examples`,className:`tab-buttons`,children:e.tabs.map(r=>{let i=`example-${t}`,o=`${i}-${r.id}`,s=`${o}-panel`;return(0,f.jsx)(`button`,{id:o,role:`tab`,"aria-selected":n[i]===r.id,"aria-controls":s,className:n[i]===r.id?`active`:``,onClick:()=>a({...n,[i]:r.id}),onKeyDown:n=>E(n,i,e.tabs,t),tabIndex:n[i]===r.id?0:-1,ref:e=>S.current[o]=e,children:r.label},r.id)})}),(0,f.jsx)(`div`,{role:`tabpanel`,id:`example-${t}-${n[`example-${t}`]||e.tabs[0].id}-panel`,"aria-labelledby":`example-${t}-${n[`example-${t}`]||e.tabs[0].id}`,className:`tab-content`,children:(0,f.jsx)(v,{code:b(`example-${t}`,e.tabs),index:t,handleCopy:T,copiedIndex:o})})]}),e.type===`practiceTask`&&(0,f.jsxs)(`div`,{className:`practice-task`,children:[(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.content,m)}),(0,f.jsx)(`p`,{className:`article-paragraph`,children:s(e.hint,m)}),(0,f.jsxs)(`div`,{className:`code-editor`,children:[(0,f.jsx)(`h3`,{children:`Try It Yourself`}),(0,f.jsx)(`textarea`,{className:`editor-textarea`,placeholder:`Write your code here...`,rows:10})]}),(0,f.jsx)(`button`,{className:`solution-button`,onClick:()=>D(t),children:d[t]?`Hide Solution`:`Show Solution`}),d[t]&&(0,f.jsx)(v,{code:e.solution,index:`solution-${t}`,handleCopy:T,copiedIndex:o})]})]},`para-${t}-${e.type}`))}),h&&(0,f.jsx)(`button`,{className:`back-to-top`,onClick:w,"aria-label":`Scroll back to Table of Contents`,children:`↑ Back to Contents`})]})})}),(0,f.jsx)(i,{})]}):(0,f.jsx)(`div`,{children:`Guide not found`})};v.propTypes={code:d.default.string.isRequired,index:d.default.oneOfType([d.default.number,d.default.string]).isRequired,handleCopy:d.default.func.isRequired,copiedIndex:d.default.oneOfType([d.default.number,d.default.string])};export{y as default};
//# sourceMappingURL=StateManagemenGuide-iO7dwa7t.js.map