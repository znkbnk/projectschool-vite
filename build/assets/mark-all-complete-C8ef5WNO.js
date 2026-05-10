var e=[`
// Add this function below toggleTodo:
function toggleAll() {
  const allDone = completed === total && total > 0;
  setTodos(todos.map((t) => ({ ...t, completed: !allDone })));
}

// Add this button in the JSX:
<button onClick={toggleAll}>
  {completed === total && total > 0 ? "Unmark all" : "Mark all complete"}
</button>
`];export{e as default};
//# sourceMappingURL=mark-all-complete-C8ef5WNO.js.map