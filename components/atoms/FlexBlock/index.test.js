import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FlexBlock from '.';

describe('atoms/FlexBlock', () => {
  it('should render', () => {
    render(<FlexBlock  borderColor="red" padding="10px" margin="10px"/>);
  });

});
