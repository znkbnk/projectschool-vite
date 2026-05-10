import React, { memo, useCallback } from "react";

const FilterSortButtons = memo(({ filters, handleFilterClick }) => {
  const onChange = useCallback(
    (e) => handleFilterClick(e.target.value),
    [handleFilterClick]
  );

  return (
    <div className="sort">
      <h4>Filter:</h4>
      <select className="filter-dropdown" onChange={onChange}>
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
});

FilterSortButtons.displayName = "FilterSortButtons";

export default FilterSortButtons;