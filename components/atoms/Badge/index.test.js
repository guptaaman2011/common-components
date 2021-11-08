import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Badge from "./index";

describe("Atom: Badge", () => {
  it("should render", () => {
    render(<Badge>Click Me!</Badge>);
  });

  it("should render the text", () => {
    const { getByText } = render(<Badge>Click me</Badge>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("should render the CountWrapper component", () => {
    const { getByTestId, getByText } = render(
      <Badge data-testid="badge">Click me</Badge>
    );

    expect(getByTestId("badge")).toContainElement(getByText('Click me'));
  });
});
