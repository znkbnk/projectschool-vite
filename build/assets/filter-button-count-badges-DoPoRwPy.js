var e=[`
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
`];export{e as default};
//# sourceMappingURL=filter-button-count-badges-DoPoRwPy.js.map