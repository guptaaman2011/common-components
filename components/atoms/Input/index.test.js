import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from '.';

describe('atoms/Input', () => {
  it('should render', () => {
    render(<Input />);
  });
});
