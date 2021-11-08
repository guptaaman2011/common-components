import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Spinner from '.';

describe('atoms/Spinner', () => {
  it('should render', () => {
    render(<Spinner />);
  });


});
