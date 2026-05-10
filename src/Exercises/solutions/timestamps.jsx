const solutionCode1 = `
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

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

  return (
    <div className='app'>
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
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />

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
              index={todos.indexOf(t)}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
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

const solutionCode2 = `
import { useState } from "react";

const priorityColors = {
  low: "green",
  medium: "orange",
  high: "red",
};

export default function TodoItem({ todo, index, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const isOverdue =
    todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  function saveEdit() {
    if (!editText.trim()) return;
    onEdit(index, editText);
    setIsEditing(false);
  }

  return (
    <li
      className='list-item'
      onClick={() => onToggle(index)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        borderLeft: isOverdue ? "3px solid #ef4444" : "none",
        paddingLeft: isOverdue ? "13px" : "16px",
      }}
    >
      <span
        style={{
          color: priorityColors[todo.priority],
          marginRight: "8px",
          fontSize: "0.75rem",
          fontWeight: "bold",
        }}
      >
        [{todo.priority}]
      </span>

      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          autoFocus
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
      )}

      {todo.createdAt && (
        <span
          style={{
            fontSize: "0.7rem",
            color: "gray",
            marginLeft: "8px",
          }}
        >
          {todo.createdAt}
        </span>
      )}

      {todo.dueDate && (
        <span
          style={{
            fontSize: "0.72rem",
            marginLeft: "auto",
            paddingLeft: "8px",
            color: isOverdue ? "#ef4444" : "#9ca3af",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {isOverdue ? "⚠️ " : ""}
          {todo.dueDate}
        </span>
      )}

      <button
        className='delete-btn'
        onClick={(e) => {
          e.stopPropagation();
          onDelete(index);
        }}
      >
        ✕
      </button>
    </li>
  );
}

`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  solutionCode2,
  
];


