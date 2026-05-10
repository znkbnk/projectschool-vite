const solutionCode1 = `
// Add this function below toggleTodo:
function toggleAll() {
  const allDone = completed === total && total > 0;
  setTodos(todos.map((t) => ({ ...t, completed: !allDone })));
}

// Add this button in the JSX:
<button onClick={toggleAll}>
  {completed === total && total > 0 ? "Unmark all" : "Mark all complete"}
</button>
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
 
];


