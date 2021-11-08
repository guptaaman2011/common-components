import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cross2 from '.';

describe('atoms/Cross2', () => {
  it('should render', () => {
    render(<Cross2  size="12px"/>);
  });

  it("should render the styled image with click function", () => {
    const mockClickHandler = jest.fn();
    const {container} = render(<Cross2 size="12px" onClick={mockClickHandler} />);
    fireEvent.click(container.firstChild);
    expect(mockClickHandler.mock.calls.length).toBe(1)
  });
});
