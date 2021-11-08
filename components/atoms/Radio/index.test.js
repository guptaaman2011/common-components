import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Radio from '.';

describe('atoms/Radio', () => {
  it('should render', () => {
    render(<Radio label={"Radio1"}/>);
  });

});
