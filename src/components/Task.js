import React from "react";
import Card from "../UI/Card";
import "./Task.css";

const Task = ({ task, onDelete, onEdit }) => {
  const { title, description } = task;

  const handleDelete = () => {
    onDelete(task);
  };

  const handleEdit = () => {
    onEdit(task);
  };

  return (
    <Card className="task-item">
      <div className="task-item__title">
        <h3>{title}</h3>
      </div>
      <div className="task-item-description">
        <p>{description}</p>
      </div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </Card>
  );
};

export default Task;
