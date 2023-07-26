import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    completed: true,
  },
];

test("renders TaskList component with tasks", () => {
  render(
    <TaskList
      tasks={tasks}
      onDelete={() => {}}
      onEdit={() => {}}
      onComplete={() => {}}
    />
  );

  const taskItems = screen.getAllByTestId("task-item");
  expect(taskItems.length).toBe(tasks.length);

  // Assert the rendered task titles and descriptions
  for (let i = 0; i < tasks.length; i++) {
    expect(screen.getByText(tasks[i].title)).toBeInTheDocument();
    expect(screen.getByText(tasks[i].description)).toBeInTheDocument();
  }
});

test("calls onDelete callback when delete button is clicked", () => {
  const onDelete = jest.fn();

  render(
    <TaskList
      tasks={tasks}
      onDelete={onDelete}
      onEdit={() => {}}
      onComplete={() => {}}
    />
  );

  const deleteButtons = screen.getAllByText("Delete");

  fireEvent.click(deleteButtons[0]);
  expect(onDelete).toHaveBeenCalledTimes(1);
  expect(onDelete).toHaveBeenCalledWith(tasks[0]);

  fireEvent.click(deleteButtons[1]);
  expect(onDelete).toHaveBeenCalledTimes(2);
  expect(onDelete).toHaveBeenCalledWith(tasks[1]);
});

test("calls onEdit callback when edit button is clicked", () => {
  const onEdit = jest.fn();

  render(
    <TaskList
      tasks={tasks}
      onDelete={() => {}}
      onEdit={onEdit}
      onComplete={() => {}}
    />
  );

  const editButtons = screen.getAllByText("Edit");

  fireEvent.click(editButtons[0]);
  expect(onEdit).toHaveBeenCalledTimes(1);
  expect(onEdit).toHaveBeenCalledWith(tasks[0]);

  fireEvent.click(editButtons[1]);
  expect(onEdit).toHaveBeenCalledTimes(2);
  expect(onEdit).toHaveBeenCalledWith(tasks[1]);
});

test("calls onComplete callback when complete button is clicked", () => {
  const onComplete = jest.fn();

  render(
    <TaskList
      tasks={tasks}
      onDelete={() => {}}
      onEdit={() => {}}
      onComplete={onComplete}
    />
  );

  const completeButtons = screen.getAllByText("Complete");

  fireEvent.click(completeButtons[0]);
  expect(onComplete).toHaveBeenCalledTimes(1);
  expect(onComplete).toHaveBeenCalledWith(tasks[0]);

  fireEvent.click(completeButtons[1]);
  expect(onComplete).toHaveBeenCalledTimes(2);
  expect(onComplete).toHaveBeenCalledWith(tasks[1]);
});
