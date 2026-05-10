const solutionCode1 = `
<input
  className='input'
  placeholder='Add todo'
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && addTodo()}
/>
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
 
];


