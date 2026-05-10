const solutionCode1 = `
<div>
  <button
    className={filter === "all" ? "active-filter" : ""}
    onClick={() => setFilter("all")}
  >
    All
  </button>
  <button
    className={filter === "active" ? "active-filter" : ""}
    onClick={() => setFilter("active")}
  >
    Active
  </button>
  <button
    className={filter === "completed" ? "active-filter" : ""}
    onClick={() => setFilter("completed")}
  >
    Completed
  </button>
</div>
`;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
 
];


