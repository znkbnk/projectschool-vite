var e=[`
// App.js 

import { useState, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";
import "./styles.css";

const MAX_CHARS = 100;

const App = () => {
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("personal");
  const [lastDeleted, setLastDeleted] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (!todo.trim()) return;
    setTodos([
      ...todos,
      {
        text: todo,
        completed: false,
        priority,
        category,
        dueDate,
        createdAt: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setTodo("");
    setPriority("medium");
    setCategory("personal");
    setDueDate("");
    setLastDeleted(null);
  }

  function deleteTodo(index) {
    setLastDeleted({ todo: todos[index], index });
    setTodos(todos.filter((t, i) => i !== index));
  }

  function undoDelete() {
    if (!lastDeleted) return;
    const updated = [...todos];
    updated.splice(lastDeleted.index, 0, lastDeleted.todo);
    setTodos(updated);
    setLastDeleted(null);
  }

  function toggleTodo(index) {
    setTodos(
      todos.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t,
      ),
    );
  }

  // 🐛 TASK 20: deleteTodosByCategory — FIXED
  function deleteTodosByCategory(cat) {
    setTodos(todos.filter((t) => t.category !== cat));
  }

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  // 🐛 TASK 20: activeCategories — FIXED
  // Unique list of categories currently in the todos (using Set for uniqueness)
  const activeCategories = [...new Set(todos.map((t) => t.category))];

  const filteredToos = (
    filter === "all"
      ? todos
      : filter === "active"
        ? todos.filter((t) => !t.completed)
        : todos.filter((t) => t.completed)
  ).filter((t) => t.text.toLowerCase().includes(search.toLowerCase()));

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
    setLastDeleted(null);
  };

  const editTodo = (index, newText) => {
    setTodos(todos.map((t, i) => (i === index ? { ...t, text: newText } : t)));
  };

  const emptyMessages = {
    all: "No todos yet. Add one above!",
    active: "Nothing left to do. Nice work!",
    completed: "No completed todos yet.",
  };

  function moveTodoUp(index) {
    if (index === 0) return;
    const updated = [...todos];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setTodos(updated);
  }

  function moveTodoDown(index) {
    if (index === todos.length - 1) return;
    const updated = [...todos];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setTodos(updated);
  }

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  function handleDragStart(index) {
    dragItem.current = index;
  }

  function handleDragEnter(index) {
    dragOverItem.current = index;
  }

  function handleDragEnd() {
    const updated = [...todos];
    const dragged = updated.splice(dragItem.current, 1)[0];
    updated.splice(dragOverItem.current, 0, dragged);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(updated);
  }

  return (
    <div
      className='app'
      style={{
        backgroundColor: darkMode ? "#1a1a2e" : "#ffffff",
        color: darkMode ? "#000000" : "#333333",
        minHeight: "100vh",
        transition: "all 0.3s ease",
        position: "relative",
      }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          padding: "8px 16px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: darkMode ? "#000000" : "#f1f5f9",
          color: darkMode ? "#e2e8f0" : "#0f172a",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          zIndex: 100,
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <h2>ToDo App ({total - completed} left)</h2>

      <input
        className='input'
        placeholder='Search todos...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        className='input'
        placeholder='Add todo'
        value={todo}
        onChange={(e) => {
          if (e.target.value.length <= MAX_CHARS) {
            setTodo(e.target.value);
          }
        }}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />

      <span
        style={{
          fontSize: "0.75rem",
          color: todo.length > MAX_CHARS * 0.9 ? "red" : "gray",
        }}
      >
        {todo.length}/{MAX_CHARS}
      </span>

      <input
        className='date-input'
        type='date'
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <div className='add-row'>
        <select
          className='priority-select'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
        <select
          className='priority-select'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='personal'>Personal</option>
          <option value='work'>Work</option>
          <option value='shopping'>Shopping</option>
        </select>
        <button className='button' onClick={addTodo}>
          Add
        </button>
      </div>

      <div className='filter-bar'>
        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All ({total})
        </button>
        <button
          className={filter === "active" ? "active-filter" : ""}
          onClick={() => setFilter("active")}
        >
          Active ({total - completed})
        </button>
        <button
          className={filter === "completed" ? "active-filter" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed ({completed})
        </button>
      </div>

      {/* 🐛 TASK 20: bulk delete buttons — FIXED */}
      {/* Dynamic buttons (one per active category) that appear automatically based on the current todos */}
      <div style={{ margin: "12px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {activeCategories.map((cat) => (
          <button
            key={cat}
            className="button"
            onClick={() => deleteTodosByCategory(cat)}
            style={{ marginRight: "8px" }}
          >
            Clear {cat}
          </button>
        ))}
      </div>

      <ul className='list'>
        {filteredToos.length === 0 ? (
          <p className='empty-msg'>{emptyMessages[filter]}</p>
        ) : (
          filteredToos.map((t, i) => (
            <TodoItem
              key={i}
              todo={t}
              index={i}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onMoveUp={moveTodoUp}
              onMoveDown={moveTodoDown}
              onEdit={editTodo}
              onDragStart={handleDragStart}
              onDragEnter={handleDragEnter}
              onDragEnd={handleDragEnd}
            />
          ))
        )}
      </ul>

      <p className='counter'>
        {completed} of {total} completed
      </p>

      {lastDeleted && (
        <button
          className='button'
          onClick={undoDelete}
          style={{ backgroundColor: "#4ade80", color: "#111", marginBottom: "12px" }}
        >
          ↩ Undo delete "{lastDeleted.todo.text.slice(0, 20)}..."
        </button>
      )}

      {completed > 0 && (
        <button className='clear-btn' onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default App;
`];export{e as default};
//# sourceMappingURL=bulk-delete-by-category-DLB00Bij.js.map