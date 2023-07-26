// import React from "react";
// import Card from "../UI/Card";

// const TaskList = ({ tasks, onDelete, onEdit, onComplete }) => {
//   const handleDelete = (task) => {
//     onDelete(task);
//   };

//   const handleEdit = (task) => {
//     onEdit(task);
//   };

//   const handleComplete = (task) => {
//     onComplete(task);
//   };

//   return (
//     <div className="task-list">
//       {tasks.map((task) => (
//         <Card key={task.id} className="task-item">
//           <div className="task-item__information">
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//           </div>

//           <div className="task-item__actions">
//             {!task.completed && (
//               <button onClick={() => handleComplete(task)}>Complete</button>
//             )}
//             <button onClick={() => handleDelete(task)}>Delete</button>
//             <button onClick={() => handleEdit(task)}>Edit</button>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default TaskList;

import React from "react";

const TaskList = ({ tasks, onDelete, onEdit, onComplete }) => {
  const handleEdit = (task, updatedTitle, updatedDescription) => {
    const updatedTask = {
      ...task,
      title: updatedTitle,
      description: updatedDescription,
    };
    onEdit(updatedTask);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <li className="task-item" key={task.id}>
          <div className="task-item-info">
            <h3>{task.title}</h3>
            <div className="task-description-container">
              <p className="task-description-paragraph">{task.description}</p>
            </div>
          </div>
          <div>
            {!task.completed && (
              <button
                className="btn btn-success"
                onClick={() => onComplete(task)}
              >
                Complete
              </button>
            )}
            {!task.completed && (
              <button
                className="btn btn-edit"
                onClick={() => {
                  const updatedTitle = prompt("Enter new title:", task.title);
                  const updatedDescription = prompt(
                    "Enter new description:",
                    task.description
                  );
                  if (updatedTitle !== null && updatedDescription !== null) {
                    handleEdit(task, updatedTitle, updatedDescription);
                  }
                }}
              >
                Edit
              </button>
            )}
            <button className="btn btn-delete" onClick={() => onDelete(task)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
