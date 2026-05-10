const solutionCode1 = `
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
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
 
];


