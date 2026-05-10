const solutionCode1 = `
import { useState, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";
import "./styles.css";

// 🐛 TASK 17: MAX_CHARS constant is missing — add it here
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
  }

  function deleteTodo(index) {
    setTodos(todos.filter((t, i) => i !== index));
  }

  function toggleTodo(index) {
    setTodos(
      todos.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t,
      ),
    );
  }

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  const filteredToos = (
    filter === "all"
      ? todos
      : filter === "active"
        ? todos.filter((t) => !t.completed)
        : todos.filter((t) => t.completed)
  ).filter((t) => t.text.toLowerCase().includes(search.toLowerCase()));

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
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
    <div className='app'>
      <h2>ToDo App ({total - completed} left)</h2>
      <input
        className='input'
        placeholder='Search todos...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* 🐛 TASK 17: onChange does not enforce the character limit — fix it here */}
      <input
        className='input'
        placeholder='Add todo'
        value={todo}
        onChange={(e) => {
          if (e.target.value.length <= MAX_CHARS) {
            setTodo(e.target.value);
          }
        }}
      />
      {/* 🐛 TASK 17: character counter is missing — add it below this comment */}
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
      {completed > 0 && (
        <button className='clear-btn' onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default App;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,

];
