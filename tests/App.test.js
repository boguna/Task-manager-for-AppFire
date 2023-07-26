import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const appElement = screen.getByTestId("app");
  expect(appElement).toBeInTheDocument();
});

test("renders the Task Manager heading", () => {
  render(<App />);
  const headingElement = screen.getByText("Task Manager");
  expect(headingElement).toBeInTheDocument();
});

test("renders the Add Task button", () => {
  render(<App />);
  const addButton = screen.getByRole("button", { name: "Add Task" });
  expect(addButton).toBeInTheDocument();
});

test("renders the Task Filter component", () => {
  render(<App />);
  const filterLabel = screen.getByLabelText("Filter Tasks:");
  expect(filterLabel).toBeInTheDocument();
});

test("renders the Task List component", () => {
  render(<App />);
  const taskList = screen.getByRole("list");
  expect(taskList).toBeInTheDocument();
});

test("renders the Export Button component", () => {
  render(<App />);
  const exportButton = screen.getByRole("link", { name: "Export Tasks" });
  expect(exportButton).toBeInTheDocument();
});
