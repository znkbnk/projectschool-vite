const solutionCode1 = `
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
      className="list-item"
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
        <span style={{ fontSize: "0.7rem", color: "gray", marginLeft: "8px" }}>
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
      {/* 🐛 TASK 13: delete fires instantly with no confirmation — add a check before calling onDelete */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm("Delete this todo?")) {
            onDelete(index);
          }
        }}
      >
        X{" "}
      </button>
    </li>
  );
}

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,

];


