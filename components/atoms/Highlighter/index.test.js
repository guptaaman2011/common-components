import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Highlighter from '.';

describe('atoms/Highlighter', () => {
  it('should render', () => {
    render(<Highlighter />);
  });

});
