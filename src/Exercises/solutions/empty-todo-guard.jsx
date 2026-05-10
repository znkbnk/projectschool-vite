const solutionCode1 = `
function addTodo() {
  if (!todo.trim()) return;
  setTodos([...todos, { text: todo, completed: false }]);
  setTodo("");
}
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
 
];


