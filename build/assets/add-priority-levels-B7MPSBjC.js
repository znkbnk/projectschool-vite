var e=[`
// Add priority state:
const [priority, setPriority] = useState("medium");

// Update addTodo:
function addTodo() {
  if (!todo.trim()) return;
  setTodos([...todos, { text: todo, completed: false, priority }]);
  setTodo("");
  setPriority("medium");
}

// Add dropdown in JSX:
<input
  className='input'
  placeholder='Add todo'
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
/>
<select value={priority} onChange={(e) => setPriority(e.target.value)}>
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
</select>
<button className='button' onClick={addTodo}>Add</button>
`,`
const priorityColors = {
  low: "green",
  medium: "orange",
  high: "red",
};

export default function TodoItem({ todo, index, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function saveEdit() {
    if (!editText.trim()) return;
    onEdit(index, editText);
    setIsEditing(false);
  }

  return (
    <li
      className='list-item'
      onClick={() => onToggle(index)}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
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
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
      )}
      <button onClick={(e) => { e.stopPropagation(); onDelete(index); }}>X</button>
    </li>
  );
}
`];export{e as default};
//# sourceMappingURL=add-priority-levels-B7MPSBjC.js.map