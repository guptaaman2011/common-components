import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextArea from '.';

describe('atoms/TextArea', () => {
  it('should render', () => {
    render(<TextArea />);
  });


});
