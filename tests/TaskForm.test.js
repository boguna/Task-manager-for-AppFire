import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";

test("renders TaskForm component", () => {
  render(<TaskForm onSubmit={() => {}} />);
  const taskFormElement = screen.getByTestId("task-form");
  expect(taskFormElement).toBeInTheDocument();
});

test("renders input fields with initial values", () => {
  const initialTitle = "Initial Title";
  const initialDescription = "Initial Description";

  render(
    <TaskForm
      onSubmit={() => {}}
      initialTitle={initialTitle}
      initialDescription={initialDescription}
    />
  );

  const titleInput = screen.getByLabelText("Task Title:");
  const descriptionInput = screen.getByLabelText("Task Description:");

  expect(titleInput).toBeInTheDocument();
  expect(titleInput.value).toBe(initialTitle);

  expect(descriptionInput).toBeInTheDocument();
  expect(descriptionInput.value).toBe(initialDescription);
});

test("submits form with input values", () => {
  const handleSubmit = jest.fn();

  render(<TaskForm onSubmit={handleSubmit} />);

  const titleInput = screen.getByLabelText("Task Title:");
  const descriptionInput = screen.getByLabelText("Task Description:");
  const addButton = screen.getByText("Add Task");

  const titleValue = "New Task Title";
  const descriptionValue = "New Task Description";

  fireEvent.change(titleInput, { target: { value: titleValue } });
  fireEvent.change(descriptionInput, { target: { value: descriptionValue } });
  fireEvent.click(addButton);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    title: titleValue,
    description: descriptionValue,
  });
});

test("displays alert when title is empty", () => {
  render(<TaskForm onSubmit={() => {}} />);

  const alertMock = jest.spyOn(window, "alert");
  const addButton = screen.getByText("Add Task");

  fireEvent.click(addButton);

  expect(alertMock).toHaveBeenCalledTimes(1);
  expect(alertMock).toHaveBeenCalledWith("Please enter a title for the task.");

  alertMock.mockRestore();
});
