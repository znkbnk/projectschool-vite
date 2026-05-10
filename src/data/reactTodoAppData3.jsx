/* eslint-disable no-template-curly-in-string */
const reactTodoAppData3 = [
  {
    id: "react-todo-app-guide-part3",
    title: "Build Your First React App: Todo List — Part 3",
    image: "/images/reactTodoApp3.webp",
    paragraphs: [
      {
        type: "text",
        content:
          "Welcome to Part 3! In Part 1 you built the core app — adding todos with state. In Part 2 you added delete, toggle complete, CSS styling, localStorage, and component splitting. Now we make this a genuinely useful application. By the end of this guide you'll have a live count, filter buttons, a clear completed action, and inline editing. These are the features that separate a tutorial exercise from a real product.",
      },
      {
        type: "boldText",
        content: "Where Part 2 left off",
      },
      {
        type: "code",
        content: `// App.js
import { useState, useEffect } from "react";
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
}`,
      },
      {
        type: "code",
        content: `// TodoItem.jsx
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
}`,
      },
      {
        type: "boldText",
        content: "What you'll add in Part 3",
      },
      {
        type: "list",
        items: [
          "A live todo count using derived state — no new useState needed",
          "Filter buttons: All, Active, Completed",
          "A filtered list that changes based on the selected filter",
          "A Clear Completed button that removes finished todos in one click",
          "Inline editing — double-click a todo to rename it",
          "The concept of state inside child components",
        ],
      },

      // ─────────────────────────────────────────────────────────────────────
      // PHASE 12: DERIVED STATE — TODO COUNT
      // ─────────────────────────────────────────────────────────────────────
      {
        type: "title",
        content: "PHASE 12: Derived State — The Todo Count",
      },
      {
        type: "text",
        content:
          "Your app already knows things. You just haven't asked yet. The todos array holds all the data — how many todos exist, how many are completed. You don't need new state for that. You calculate it from what you already have.",
      },

      {
        type: "title",
        content: "Lesson 108: What is Derived State?",
      },
      {
        type: "text",
        content:
          "Derived state is a value you calculate from existing state instead of storing it separately. Think of it this way: you have a shopping cart with items. Do you store the total price in its own useState? No. You calculate it from the items every time they change. The total is derived from the cart.",
      },
      {
        type: "code",
        content: `// We already have this:
const [todos, setTodos] = useState([...]);

// We can calculate these — no new useState needed:
const total = todos.length;
const completed = todos.filter(t => t.completed).length;

// total and completed automatically update whenever todos changes.
// Zero extra work. Always correct.`,
      },

      {
        type: "title",
        content: "Lesson 109: Why Not Just Use Another useState?",
      },
      {
        type: "text",
        content:
          "You might think: why not create useState for the count? Because that creates two sources of truth. The todos array says one thing. The count state says another. When you add a todo, you'd have to remember to update both. Forget once, and they're out of sync. Bugs everywhere.",
      },
      {
        type: "code",
        content: `// BAD — two sources of truth:
const [todos, setTodos] = useState([]);
const [count, setCount] = useState(0);  // separate state

function addTodo() {
  setTodos([...todos, { text: todo, completed: false }]);
  setCount(count + 1);  // have to remember this every time!
}

function deleteTodo(index) {
  setTodos(todos.filter((_, i) => i !== index));
  setCount(count - 1);  // forget this once = bug
}

// GOOD — one source of truth:
const total = todos.length;  // always correct, automatically`,
      },
      {
        type: "boldText",
        content:
          "The Rule: If you can calculate it from existing state, don't store it in new state. Derive it.",
      },

      {
        type: "title",
        content: "Lesson 110: Calculating the Count",
      },
      {
        type: "text",
        content:
          "In App.js, above the return statement, add two lines. Total is simply the length of the array. Completed uses filter to count only the items where completed is true:",
      },
      {
        type: "code",
        content: `// Add these above the return in App.js:
const total = todos.length;
const completed = todos.filter(t => t.completed).length;`,
      },
      {
        type: "text",
        content:
          "todos.length gives you the total number of items. todos.filter(t => t.completed) creates a new array containing only the completed todos, then .length counts them. Two calculations. No new state. Always in sync.",
      },

      {
        type: "title",
        content: "Lesson 111: Displaying the Count in JSX",
      },
      {
        type: "text",
        content:
          "Now show it to the user. In the return, above the input row, add a paragraph that displays the count:",
      },
      {
        type: "code",
        content: `return (
  <div className="app">
    <h2 className="title">todo app</h2>
    <p className="count">{completed}/{total} completed</p>
    <div className="input-row">
      ...`,
      },
      {
        type: "text",
        content:
          "Save. Add some todos in the browser. Mark some complete. Watch the numbers update automatically. You never called any update function for the count — React recalculates it on every render because it's just a variable, not state.",
      },

      {
        type: "title",
        content: "Lesson 112: Adding CSS for the Count",
      },
      {
        type: "text",
        content: "Add this to your App.css:",
      },
      {
        type: "code",
        content: `.count {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 16px 0;
}`,
      },
      {
        type: "list",
        items: [
          "Derived state = calculated from existing state",
          "No new useState needed — just variables above the return",
          "Always correct, always in sync, zero maintenance",
          "If you can calculate it, don't store it",
        ],
      },

      // ─────────────────────────────────────────────────────────────────────
      // PHASE 13: FILTER STATE + FILTERING THE LIST
      // ─────────────────────────────────────────────────────────────────────
      {
        type: "title",
        content: "PHASE 13: Filtering the Todo List",
      },
      {
        type: "text",
        content:
          "50 todos with no way to filter. Good luck finding anything. We want three views: All (everything), Active (not done yet), and Completed (finished). A user clicks a button, the list changes. This takes three steps: add filter state, build the buttons, then filter the list.",
      },

      {
        type: "title",
        content: "Lesson 113: Adding Filter State",
      },
      {
        type: "text",
        content:
          "We need state to remember which filter is currently active. Unlike the count — which is derived — the filter is chosen by the user. User choices need useState.",
      },
      {
        type: "code",
        content: `const [filter, setFilter] = useState("all");`,
      },
      {
        type: "text",
        content:
          "One string. Three possible values: 'all', 'active', 'completed'. Starting value is 'all' because we show everything by default.",
      },

      {
        type: "title",
        content: "Lesson 114: Building the Filter Buttons",
      },
      {
        type: "text",
        content:
          "In the return, below the count, add three buttons. Each one calls setFilter with its value:",
      },
      {
        type: "code",
        content: `<div className="filters">
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("active")}>Active</button>
  <button onClick={() => setFilter("completed")}>Completed</button>
</div>`,
      },
      {
        type: "text",
        content:
          "User clicks All — filter becomes 'all'. Clicks Active — filter becomes 'active'. Clicks Completed — filter becomes 'completed'. One piece of state. Three buttons. Simple.",
      },

      {
        type: "title",
        content: "Lesson 115: Highlighting the Active Filter",
      },
      {
        type: "text",
        content:
          "How does the user know which filter is active? Highlight it. Add a className conditionally — if filter matches this button's value, add the 'active-filter' class. Otherwise nothing:",
      },
      {
        type: "code",
        content: `<div className="filters">
  <button
    className={filter === "all" ? "active-filter" : ""}
    onClick={() => setFilter("all")}
  >
    All
  </button>
  <button
    className={filter === "active" ? "active-filter" : ""}
    onClick={() => setFilter("active")}
  >
    Active
  </button>
  <button
    className={filter === "completed" ? "active-filter" : ""}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>
</div>`,
      },
      {
        type: "text",
        content:
          "This is conditional className — a pattern you'll use constantly in React. The ternary checks the condition and returns either the class name or an empty string.",
      },

      {
        type: "title",
        content: "Lesson 116: Creating the Filtered List",
      },
      {
        type: "text",
        content:
          "The buttons update filter state. Now we need to actually filter the todos. Above the return, create a filteredTodos variable:",
      },
      {
        type: "code",
        content: `const filteredTodos =
  filter === "all" ? todos :
  filter === "active" ? todos.filter(t => !t.completed) :
  todos.filter(t => t.completed);`,
      },
      {
        type: "text",
        content:
          "This is a chained ternary. If filter is 'all', show everything. If filter is 'active', keep only items where completed is false. If filter is 'completed', keep only items where completed is true. Three cases. One variable. No new state — this is derived from todos and filter combined.",
      },

      {
        type: "title",
        content: "Lesson 117: Using filteredTodos in the Map",
      },
      {
        type: "text",
        content:
          "In the JSX, replace todos.map with filteredTodos.map. One word change. The rest stays exactly the same:",
      },
      {
        type: "code",
        content: `<ul className="list">
  {filteredTodos.map((t, i) => (
    <TodoItem
      key={i}
      todo={t}
      index={i}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
    />
  ))}
</ul>`,
      },
      {
        type: "boldText",
        content: "Important: There's a bug hiding here.",
      },
      {
        type: "text",
        content:
          "When we filter, the index i no longer matches the position in the original todos array. If you have 5 todos and filter to show 2 active ones, index 0 and 1 in filteredTodos don't match the original positions. Toggling or deleting would affect the wrong item. We'll fix this properly with unique IDs soon, but for now be aware of it.",
      },

      {
        type: "title",
        content: "Lesson 118: Fixing the Index Bug with IDs",
      },
      {
        type: "text",
        content:
          "The real fix: give every todo a unique ID when it's created. Then use the ID — not the index — to find, toggle, and delete todos. Update addTodo first:",
      },
      {
        type: "code",
        content: `function addTodo() {
  if (!todo) return;
  setTodos([...todos, {
    id: Date.now(),
    text: todo,
    completed: false
  }]);
  setTodo("");
}`,
      },
      {
        type: "text",
        content:
          "Date.now() returns the current timestamp in milliseconds. It's unique enough for our purposes — unless someone adds two todos in the exact same millisecond. For a production app you'd use a library like uuid, but Date.now() is perfect for learning.",
      },

      {
        type: "title",
        content: "Lesson 119: Updating Toggle and Delete to Use IDs",
      },
      {
        type: "text",
        content:
          "Now update the functions to find todos by id instead of index:",
      },
      {
        type: "code",
        content: `function deleteTodo(id) {
  setTodos(todos.filter(t => t.id !== id));
}

function toggleTodo(id) {
  setTodos(todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  ));
}`,
      },
      {
        type: "text",
        content:
          "Filter keeps every todo whose id doesn't match. Map finds the exact todo by id and flips its completed value. No index needed. No bug.",
      },

      {
        type: "title",
        content: "Lesson 120: Updating TodoItem and the Map",
      },
      {
        type: "text",
        content:
          "Pass the todo's id instead of index. Update TodoItem to use it:",
      },
      {
        type: "code",
        content: `// In App.js — the map:
{filteredTodos.map(t => (
  <TodoItem
    key={t.id}
    todo={t}
    onToggle={toggleTodo}
    onDelete={deleteTodo}
  />
))}

// In TodoItem.jsx — updated:
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className="list-item"
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span>{todo.text}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      >
        ×
      </button>
    </li>
  );
}`,
      },
      {
        type: "text",
        content:
          "Notice we no longer pass index at all. TodoItem receives the todo object and calls onToggle(todo.id) and onDelete(todo.id). The key prop is now t.id instead of i — this is the correct way to key a list. Every item has a stable, unique identity.",
      },

      {
        type: "title",
        content: "Lesson 121: Testing Filters",
      },
      {
        type: "text",
        content:
          "Save both files. Add four todos. Mark two complete. Now click Active — only the incomplete ones show. Click Completed — only the done ones show. Click All — everything. Toggle a todo while filtered. Delete one. Everything works correctly because we're using IDs, not indexes.",
      },

      {
        type: "title",
        content: "Lesson 122: CSS for the Filters",
      },
      {
        type: "text",
        content: "Add these styles to App.css:",
      },
      {
        type: "code",
        content: `.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.filters button {
  padding: 6px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #f9fafb;
  color: #6b7280;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.filters button:hover {
  background: #f0f2f5;
}

.active-filter {
  background: #4f46e5 !important;
  color: white !important;
  border-color: #4f46e5 !important;
}`,
      },
      {
        type: "list",
        items: [
          "Filter state (useState) tracks the user's choice",
          "filteredTodos is derived from todos + filter",
          "Unique IDs fix the index bug when filtering",
          "key={t.id} gives each item a stable identity",
          "Conditional className highlights the active filter",
        ],
      },
      // ─────────────────────────────────────────────────────────────────────
      // PHASE 14: CLEAR COMPLETED
      // ─────────────────────────────────────────────────────────────────────
      {
        type: "title",
        content: "PHASE 14: Clear Completed",
      },
      {
        type: "text",
        content:
          "Finished 10 tasks. Now you have to delete them one by one. Painful. One button should clear all completed todos in a single click. Active ones stay.",
      },

      {
        type: "title",
        content: "Lesson 123: The clearCompleted Function",
      },
      {
        type: "text",
        content:
          "One line. Filter the array and keep only the todos where completed is false. Everything else is gone:",
      },
      {
        type: "code",
        content: `function clearCompleted() {
  setTodos(todos.filter(t => !t.completed));
}`,
      },
      {
        type: "text",
        content:
          "!t.completed means 'not completed'. The filter keeps every item where this is true — in other words, every item that hasn't been completed. All the completed ones get left out of the new array.",
      },

      {
        type: "title",
        content: "Lesson 124: Conditional Rendering with &&",
      },
      {
        type: "text",
        content:
          "We only want to show the button when there ARE completed todos. If nothing is completed, the button should be invisible. This is where the && operator comes in:",
      },
      {
        type: "code",
        content: `{completed > 0 && (
  <button className="clear-btn" onClick={clearCompleted}>
    Clear completed
  </button>
)}`,
      },
      {
        type: "text",
        content:
          "The double ampersand is short-circuit evaluation. If completed is greater than 0 (true), React renders what's after &&. If it's 0 (falsy), React renders nothing. It's React's simplest way to conditionally show or hide an element.",
      },
      {
        type: "code",
        content: `// How && works:
true  && <button>Show</button>   // → renders the button
false && <button>Show</button>   // → renders nothing

// Our usage:
// 3 completed todos:  3 > 0 = true  → button shows
// 0 completed todos:  0 > 0 = false → button hidden`,
      },

      {
        type: "title",
        content: "Lesson 125: Ternary vs && — When to Use Which",
      },
      {
        type: "text",
        content:
          "You now know two ways to conditionally render in React. Here's when to use each:",
      },
      {
        type: "code",
        content: `// USE TERNARY when you have TWO outcomes:
{isEditing ? <input /> : <span>{text}</span>}
// "Show this OR that"

// USE && when you have ONE outcome:
{completed > 0 && <button>Clear</button>}
// "Show this OR nothing"`,
      },
      {
        type: "text",
        content:
          "Ternary: show A or B. Double ampersand: show A or nothing. Pick the one that matches your situation.",
      },

      {
        type: "title",
        content: "Lesson 126: Testing Clear Completed",
      },
      {
        type: "text",
        content:
          "Save. Add three todos. Mark two complete. The Clear Completed button appears. Click it. Both completed todos vanish. The active one stays. The button disappears too — because completed is now 0, so the && condition is false.",
      },
      {
        type: "list",
        items: [
          "clearCompleted uses filter to keep only incomplete todos",
          "&& renders the button only when completed > 0",
          "Ternary = show A or B. && = show A or nothing",
          "The button hides itself when there's nothing to clear",
        ],
      },

      // ─────────────────────────────────────────────────────────────────────
      // PHASE 15: EDIT MODE
      // ─────────────────────────────────────────────────────────────────────
      {
        type: "title",
        content: "PHASE 15: Inline Editing",
      },
      {
        type: "text",
        content:
          "Typo in your todo. Delete it and retype the whole thing? No. Double-click it, fix the text, press Enter. That's inline editing — and it teaches you one of React's most important concepts: state inside child components.",
      },

      {
        type: "title",
        content: "Lesson 127: The Plan — View Mode vs Edit Mode",
      },
      {
        type: "text",
        content:
          "Each todo will have two modes. View mode shows the text and buttons. Edit mode shows an input field. Double-click switches from view to edit. Press Enter or click away saves the change and switches back.",
      },
      {
        type: "code",
        content: `// VIEW MODE: <span>buy milk</span>   + buttons
// EDIT MODE: <input value="buy milk" />

// Double click → switches to edit mode
// Enter or blur → saves and switches back`,
      },

      {
        type: "title",
        content: "Lesson 128: State Inside TodoItem",
      },
      {
        type: "text",
        content:
          "Here's the key insight: this state lives in TodoItem, not in App. Why? Because only the individual todo item needs to know if it's being edited. App doesn't care. Other todos don't care. State lives where it's needed.",
      },
      {
        type: "code",
        content: `// In TodoItem.jsx — add at the top of the function:
import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);`,
      },
      {
        type: "text",
        content:
          "Two pieces of state. isEditing tracks whether this specific item is in edit mode. editText holds what the user is typing in the input. Both are local to this single TodoItem — they don't affect anything else in the app.",
      },

      {
        type: "title",
        content: "Lesson 129: State in Parent vs State in Child",
      },
      {
        type: "text",
        content:
          "This is worth pausing on. In Part 2, ALL state lived in App.js. Now we're adding state to TodoItem. When should state live in the parent vs the child?",
      },
      {
        type: "code",
        content: `// STATE IN APP (parent):
// → todos array (shared by many components)
// → todo input text (used by the add form)
// → filter (affects which todos are shown)

// STATE IN TodoItem (child):
// → isEditing (only this item cares)
// → editText (only this item uses it)

// RULE: State lives in the lowest component that needs it.
// If only one component uses it → put it there.
// If multiple components need it → lift it to the parent.`,
      },

      {
        type: "title",
        content: "Lesson 130: Conditional Rendering — Ternary in JSX",
      },
      {
        type: "text",
        content:
          "In the return, use a ternary to switch between the two modes. If isEditing is true, show the input. If false, show the text:",
      },
      {
        type: "code",
        content: `return (
  <li className="list-item">
    {isEditing ? (
      <input
        className="edit-input"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        autoFocus
      />
    ) : (
      <span
        onDoubleClick={() => setIsEditing(true)}
        style={{ textDecoration: todo.completed ? "line-through" : "none", flex: 1 }}
      >
        {todo.text}
      </span>
    )}`,
      },
      {
        type: "text",
        content:
          "autoFocus puts the cursor in the input immediately when it appears. onDoubleClick on the span triggers edit mode. The ternary gives us two completely different UIs from the same component depending on one boolean.",
      },

      {
        type: "title",
        content: "Lesson 131: The editTodo Function in App.js",
      },
      {
        type: "text",
        content:
          "TodoItem has the local edit state. But the real todos array lives in App. To save the edit we need to tell App: this todo changed. That means a new function in App, passed down as a prop — the same pattern we used for toggle and delete:",
      },
      {
        type: "code",
        content: `// In App.js — add this function:
function editTodo(id, newText) {
  setTodos(todos.map(t =>
    t.id === id ? { ...t, text: newText } : t
  ));
}`,
      },
      {
        type: "text",
        content:
          "Map through all todos. Find the one with the matching id. Return a new object with the updated text. Everything else stays the same. This is the exact same pattern as toggleTodo — map, find, update, return new.",
      },

      {
        type: "title",
        content: "Lesson 132: Passing onEdit as a Prop",
      },
      {
        type: "text",
        content:
          "Pass editTodo down to TodoItem just like onToggle and onDelete:",
      },
      {
        type: "code",
        content: `{filteredTodos.map(t => (
  <TodoItem
    key={t.id}
    todo={t}
    onToggle={toggleTodo}
    onDelete={deleteTodo}
    onEdit={editTodo}
  />
))}`,
      },

      {
        type: "title",
        content: "Lesson 133: The saveEdit Function in TodoItem",
      },
      {
        type: "text",
        content:
          "In TodoItem, create a function that validates the edit, calls onEdit with the id and new text, and exits edit mode:",
      },
      {
        type: "code",
        content: `function saveEdit() {
  if (!editText.trim()) return;  // don't save empty text
  onEdit(todo.id, editText);     // tell App to update
  setIsEditing(false);           // back to view mode
}`,
      },
      {
        type: "text",
        content:
          "Three steps: validate (don't save empty), update (call the parent's function), and exit (switch back to view mode). Simple and predictable.",
      },

      {
        type: "title",
        content: "Lesson 134: Saving on Enter and Blur",
      },
      {
        type: "text",
        content:
          "Two ways to confirm the edit. Press Enter or click away (blur). Both call saveEdit:",
      },
      {
        type: "code",
        content: `<input
  className="edit-input"
  value={editText}
  onChange={(e) => setEditText(e.target.value)}
  onBlur={saveEdit}
  onKeyDown={(e) => e.key === "Enter" && saveEdit()}
  autoFocus
/>`,
      },
      {
        type: "text",
        content:
          "onBlur fires when the input loses focus — the user clicked somewhere else. onKeyDown checks if the key pressed is Enter. Both trigger saveEdit. Two ways to confirm, zero ambiguity.",
      },

      {
        type: "title",
        content: "Lesson 135: The Complete Updated TodoItem.jsx",
      },
      {
        type: "code",
        content: `import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function saveEdit() {
    if (!editText.trim()) return;
    onEdit(todo.id, editText);
    setIsEditing(false);
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          autoFocus
        />
      ) : (
        <>
          <span
            onDoubleClick={() => setIsEditing(true)}
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              flex: 1,
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo.id);
            }}
          >
            ×
          </button>
        </>
      )}
    </li>
  );
}`,
      },
      {
        type: "text",
        content:
          "In edit mode: just the input. In view mode: the text span and the delete button wrapped in a fragment (<>). The fragment groups them without adding an extra DOM element.",
      },

      {
        type: "title",
        content: "Lesson 136: CSS for Edit Mode",
      },
      {
        type: "text",
        content: "Add to App.css:",
      },
      {
        type: "code",
        content: `.edit-input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #4f46e5;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
}`,
      },

      {
        type: "title",
        content: "Lesson 137: Testing Inline Editing",
      },
      {
        type: "text",
        content:
          "Save both files. Add a todo with a typo. Double-click it — it becomes an input with the cursor ready. Fix the text. Press Enter. Saved. Or click somewhere else. Also saved. The todo updates everywhere — the list, localStorage, everything.",
      },
      {
        type: "list",
        items: [
          "isEditing and editText live in TodoItem — only it needs them",
          "Ternary in JSX switches between view and edit mode",
          "onEdit is passed from App → TodoItem as a prop bridge",
          "saveEdit validates, updates the parent, and exits edit mode",
          "Enter and blur both trigger save — two ways to confirm",
          "State lives in the lowest component that needs it",
        ],
      },

      // ─────────────────────────────────────────────────────────────────────
      // FINAL CODE + RECAP
      // ─────────────────────────────────────────────────────────────────────
      {
        type: "title",
        content: "The Complete Final App.js",
      },
      {
        type: "text",
        content: "Every feature from Parts 1, 2, and 3, all together:",
      },
      {
        type: "code",
        content: `import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;

  const filteredTodos =
    filter === "all" ? todos :
    filter === "active" ? todos.filter(t => !t.completed) :
    todos.filter(t => t.completed);

  function addTodo() {
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
    setTodo("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  function toggleTodo(id) {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  }

  function editTodo(id, newText) {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, text: newText } : t
    ));
  }

  function clearCompleted() {
    setTodos(todos.filter(t => !t.completed));
  }

  return (
    <div className="app">
      <h2 className="title">todo app</h2>
      <p className="count">{completed}/{total} completed</p>
      <div className="input-row">
        <input
          className="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add todo"
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button className="button" onClick={addTodo}>add</button>
      </div>
      <div className="filters">
        <button className={filter === "all" ? "active-filter" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "active" ? "active-filter" : ""} onClick={() => setFilter("active")}>Active</button>
        <button className={filter === "completed" ? "active-filter" : ""} onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul className="list">
        {filteredTodos.map(t => (
          <TodoItem key={t.id} todo={t} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
        ))}
      </ul>
      {completed > 0 && (
        <button className="clear-btn" onClick={clearCompleted}>Clear completed</button>
      )}
    </div>
  );
}`,
      },

      {
        type: "title",
        content: "The Complete Final TodoItem.jsx",
      },
      {
        type: "code",
        content: `import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function saveEdit() {
    if (!editText.trim()) return;
    onEdit(todo.id, editText);
    setIsEditing(false);
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          autoFocus
        />
      ) : (
        <>
          <span
            onDoubleClick={() => setIsEditing(true)}
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              flex: 1,
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo.id);
            }}
          >
            ×
          </button>
        </>
      )}
    </li>
  );
}`,
      },

      {
        type: "title",
        content: "The Complete Updated App.css",
      },
      {
        type: "text",
        content:
          "All the new styles added in Part 3. Add these to your existing App.css from Part 2:",
      },
      {
        type: "code",
        content: `.count {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 16px 0;
}

.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.filters button {
  padding: 6px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #f9fafb;
  color: #6b7280;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.filters button:hover {
  background: #f0f2f5;
}

.active-filter {
  background: #4f46e5 !important;
  color: white !important;
  border-color: #4f46e5 !important;
}

.clear-btn {
  display: block;
  margin: 16px auto 0;
  padding: 8px 18px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  color: #6b7280;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.clear-btn:hover {
  background: #fee2e2;
  color: #dc2626;
  border-color: #fecaca;
}

.edit-input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #4f46e5;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
}`,
      },

      // ─────────────────────────────────────────────────────────────────────
      // COMPLETE DATA FLOW
      // ─────────────────────────────────────────────────────────────────────
      {
        type: "title",
        content: "Lesson 138: The Complete Data Flow",
      },
      {
        type: "text",
        content:
          "Here's how every feature flows from user action to UI update:",
      },
      {
        type: "list",
        items: [
          "Count: todos changes → total and completed recalculate → JSX updates automatically",
          "Filtering: click button → setFilter updates → filteredTodos recalculates → list re-renders with new items",
          "Clear completed: click button → filter keeps only incomplete → setTodos updates → count updates → button hides itself",
          "Edit: double-click → setIsEditing(true) → input appears → type → press Enter → saveEdit() → onEdit(id, text) → App updates todos → TodoItem exits edit mode",
        ],
      },

      {
        type: "title",
        content: "Lesson 139: Recap — What You Learned in Part 3",
      },
      {
        type: "list",
        items: [
          "Derived state — calculate from existing state instead of storing separately",
          "Filter state — useState for user choices, derived variables for the filtered result",
          "Unique IDs — Date.now() replaces array indexes for stable identity",
          "Conditional rendering with && — show something or nothing",
          "Conditional rendering with ternary — show A or B",
          "State in child components — isEditing and editText live in TodoItem",
          "Props as bridges — onEdit passes the edit function from App to TodoItem",
          "onBlur and onKeyDown — two ways to confirm an action",
          "Fragments (<>) — group elements without adding extra DOM nodes",
          "The pattern: parent owns data, child owns UI state",
        ],
      },

      {
        type: "title",
        content: "Quick Reference Card — Part 3",
      },
      {
        type: "boldText",
        content: "Derived State",
      },
      {
        type: "code",
        content: `// Don't do this:
const [count, setCount] = useState(0);

// Do this:
const count = items.length;
const completed = items.filter(i => i.done).length;`,
      },
      {
        type: "boldText",
        content: "Filtering an Array by State",
      },
      {
        type: "code",
        content: `const filtered =
  filter === "all" ? items :
  filter === "active" ? items.filter(i => !i.done) :
  items.filter(i => i.done);`,
      },
      {
        type: "boldText",
        content: "Conditional Rendering with &&",
      },
      {
        type: "code",
        content: `{hasItems && <p>You have items!</p>}
// true  → shows the paragraph
// false → shows nothing`,
      },
      {
        type: "boldText",
        content: "Conditional Rendering with Ternary",
      },
      {
        type: "code",
        content: `{isEditing ? <input /> : <span>{text}</span>}
// true  → shows input
// false → shows span`,
      },
      {
        type: "boldText",
        content: "Unique IDs Instead of Indexes",
      },
      {
        type: "code",
        content: `// Creating:
{ id: Date.now(), text: "todo", done: false }

// Finding:
items.filter(i => i.id !== id)     // delete
items.map(i => i.id === id ? {...i, done: !i.done} : i)  // update`,
      },
      {
        type: "boldText",
        content: "State in a Child Component",
      },
      {
        type: "code",
        content: `// Parent owns DATA state (shared):
const [items, setItems] = useState([]);

// Child owns UI state (local only):
const [isEditing, setIsEditing] = useState(false);
const [editText, setEditText] = useState(item.text);`,
      },

      {
        type: "title",
        content: "Congratulations!",
      },
      {
        type: "text",
        content:
          "You've completed Part 3! Your todo app now has a live count, three filter views, a clear completed button, and inline editing. That's not a tutorial exercise — that's a real product. You understand derived state, conditional rendering, state in child components, and how data flows between parent and child through props. These are daily React skills used in every professional codebase.",
      },

      {
        type: "practiceTask",
        content:
          "Task: Add a 'remaining' count that shows how many active (not completed) todos are left. Display it as '3 items left' next to the filter buttons. When all todos are completed, show 'All done!' instead.",
        hint: "Hint: remaining is derived state: todos.filter(t => !t.completed).length. Use a ternary in JSX: remaining === 0 ? 'All done!' : `${remaining} items left`.",
        solution: `// Above the return (derived state):
const remaining = todos.filter(t => !t.completed).length;

// In the JSX, below the filters div:
<p className="remaining">
  {remaining === 0 ? "All done! 🎉" : \`\${remaining} item\${remaining !== 1 ? "s" : ""} left\`}
</p>`,
      },
    ],
  },
];

export { reactTodoAppData3 };
