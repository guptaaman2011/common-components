import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Checkbox from '.';

describe('atoms/Checkbox', () => {
  it('should render', () => {
    render(<Checkbox label="Checkbox" />);
  });

  it("should render the label", () => {
    const { getByText } = render(<Checkbox label="Checkbox" subLabel="subLabel" />);
    expect(getByText("Checkbox")).toBeInTheDocument();
  });
});
