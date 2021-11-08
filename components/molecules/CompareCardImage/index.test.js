import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CompareCardImage from "./index";

describe("Molecules: CompareCardImage", () => {
  const onExpand = jest.fn();
  it("should render CompareCardImage", () => {
    render(
      <CompareCardImage
        source="source"
        onExpand={onExpand}
      />
    );
  });
});
