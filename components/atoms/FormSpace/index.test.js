import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormSpace from '.';

describe('atoms/FormSpace', () => {
  it('should render', () => {
    render(<FormSpace />);
  });

});
