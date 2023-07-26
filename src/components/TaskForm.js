import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a title for the task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
    };

    onSubmit(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="new-task">
      <form onSubmit={handleSubmit}>
        <div className="new-task__controls">
          <div className="new-task__control">
            <label>Task Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="new-task__control">
            <label htmlFor="description">Task Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="new-task__actions">
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
