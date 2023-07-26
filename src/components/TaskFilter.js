import React from "react";

const TaskFilter = ({ onChange }) => {
  const handleFilterChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="task-filter">
      <div className="task-filter__control">
        <label htmlFor="filter">Filter Tasks:</label>
        <select id="filter" onChange={handleFilterChange}>
          <option value="unfinished">Unfinished Tasks</option>
          <option value="finished">Finished Tasks</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
