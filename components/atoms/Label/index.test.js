import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label from '.';

describe('atoms/Label', () => {
  it('should render', () => {
    render(<Label />);
  });
});
