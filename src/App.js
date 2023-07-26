import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ExportButton from "./components/ExportButton";
import TaskFilter from "./components/TaskFilter";
import "./components/Task.css";
import "./components/Tasks.css";
import "./components/TaskForm.css";
import "./components/TaskFilter.css";
import "./UI/Card.css";
import Card from "./UI/Card";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("unfinished");

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const completeTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "unfinished") {
      return !task.completed;
    }
    if (filter === "finished") {
      return task.completed;
    }
    return true;
  });

  return (
    <div className="app">
      <h1 className="heading">Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <Card className="tasks">
        <TaskFilter onChange={handleFilterChange} />
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onEdit={editTask}
          onComplete={completeTask}
        />
        <ExportButton tasks={filteredTasks} />
      </Card>
    </div>
  );
};

export default App;
