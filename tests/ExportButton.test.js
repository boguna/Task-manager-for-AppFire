import { render, screen } from "@testing-library/react";
import ExportButton from "./ExportButton";

test("renders ExportButton component with correct text and attributes", () => {
  const tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ];

  render(<ExportButton tasks={tasks} />);

  const exportButton = screen.getByText("Export Tasks");
  expect(exportButton).toBeInTheDocument();
  expect(exportButton).toHaveAttribute("download", "tasks.csv");
  expect(exportButton).toHaveAttribute("href", "data:text/csv;charset=utf-8,");
});

test("renders ExportButton component with disabled state if no tasks", () => {
  const tasks = [];

  render(<ExportButton tasks={tasks} />);

  const exportButton = screen.getByText("Export Tasks");
  expect(exportButton).toBeInTheDocument();
  expect(exportButton).toBeDisabled();
});
