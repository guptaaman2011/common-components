import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./index";

describe("Atom: Button", () => {
  it("should render", () => {
    render(<Button>Click me</Button>);
  });

  it("should render the text", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("should call click handler on click", () => {
    const mockClickHandler = jest.fn();
    const { getByText } = render(
      <Button onClick={mockClickHandler}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(mockClickHandler.mock.calls.length).toBe(1)
  });
});
