import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AlertPopUp from '.';


describe('molecules: AlertPopUp', () => {
  it('should correctly render component', () => {
    render(<AlertPopUp />);
  });

  it('should render success type', () => {
    const onClose = jest.fn();
    const { getByText } = render(<AlertPopUp
      type="success"
      message="comparison successful"
      onClose={onClose} 
    />);
    const text = getByText("comparison successful")
    expect(text).toBeInTheDocument();   
  });

  it('should render error type', () => {
    const onClose = jest.fn();
    const { getByText } = render(<AlertPopUp
      type="success"
      message="comparison failed"
      onClose={onClose} 
    />);

    const text = getByText("comparison failed")
    expect(text).toBeInTheDocument();     
  });
});


