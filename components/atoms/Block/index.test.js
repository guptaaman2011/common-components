import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Block from "./index";

describe("Atom: Block", () => {
  it("should render", () => {
    render(<Block>Click Me!</Block>);
  });
});
