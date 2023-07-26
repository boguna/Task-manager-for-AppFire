import { render, screen, fireEvent } from "@testing-library/react";
import TaskFilter from "./TaskFilter";

test("renders TaskFilter component with options", () => {
  render(<TaskFilter onChange={() => {}} />);

  const filterSelect = screen.getByLabelText("Filter Tasks:");
  expect(filterSelect).toBeInTheDocument();

  const unfinishedOption = screen.getByText("Unfinished Tasks");
  expect(unfinishedOption).toBeInTheDocument();

  const finishedOption = screen.getByText("Finished Tasks");
  expect(finishedOption).toBeInTheDocument();
});

test("calls onChange callback when filter option is changed", () => {
  const onChange = jest.fn();

  render(<TaskFilter onChange={onChange} />);

  const filterSelect = screen.getByLabelText("Filter Tasks:");

  fireEvent.change(filterSelect, { target: { value: "finished" } });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith("finished");

  fireEvent.change(filterSelect, { target: { value: "unfinished" } });
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenCalledWith("unfinished");
});
