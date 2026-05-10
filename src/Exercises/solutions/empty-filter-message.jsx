const solutionCode1 = `
const emptyMessages = {
  all: "No todos yet. Add one above!",
  active: "Nothing left to do. Nice work!",
  completed: "No completed todos yet.",
};

// In the JSX:
<ul className='list'>
  {filteredToos.length === 0 ? (
    <p>{emptyMessages[filter]}</p>
  ) : (
    filteredToos.map((t, i) => (
      <TodoItem
        key={i}
        todo={t}
        index={i}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    ))
  )}
</ul>
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
 
];


