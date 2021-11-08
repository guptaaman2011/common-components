import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Text from '.';

describe('atoms/Text', () => {
  it('should render', () => {
    render(<Text />);
  });


});
