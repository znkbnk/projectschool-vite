var e=[`
// Add dueDate state:
const [dueDate, setDueDate] = useState("");

// Update addTodo:
function addTodo() {
  if (!todo.trim()) return;
  setTodos([...todos, { text: todo, completed: false, dueDate }]);
  setTodo("");
  setDueDate("");
}

// Add date input in JSX:
<input
  className='input'
  placeholder='Add todo'
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
/>
<input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>
<button className='button' onClick={addTodo}>Add</button>
`,`
export default function TodoItem({ todo, index, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const isOverdue =
    todo.dueDate &&
    new Date(todo.dueDate) < new Date() &&
    !todo.completed;

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
        borderLeft: isOverdue ? "3px solid red" : "none",
        paddingLeft: isOverdue ? "8px" : "0",
      }}
    >
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
      )}
      {todo.dueDate && (
        <span style={{ fontSize: "0.75rem", marginLeft: "8px", color: isOverdue ? "red" : "gray" }}>
          {isOverdue ? "⚠️ " : ""}{todo.dueDate}
        </span>
      )}
      <button onClick={(e) => { e.stopPropagation(); onDelete(index); }}>X</button>
    </li>
  );
}
`];export{e as default};
//# sourceMappingURL=add-due-date-klQxRiY_.js.map