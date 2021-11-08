import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchInput from '.';


describe('atoms/SearchInput', () => {
  it('should correctly render component', () => {
    render(<SearchInput />);
  });
  it('should render component when error', () => {
      render(<SearchInput noChatFound={true} />);
  })
});


