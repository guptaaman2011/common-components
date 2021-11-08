import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IconButton from '.';

describe('atoms/IconButton', () => {
  it('should render', () => {
    render(<IconButton 
        size="12px" 
        src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" 
        dataTestid="iconBtn" 
        style={{padding: "10px 10px"}} 
        isLoading={false} 
        disabled={true}/>);
  });

  it('should render the icon button', () => {
    const {getByTestId} = render(<IconButton 
        size="12px" 
        src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" 
        dataTestid="iconBtn" 
        style={{padding: "10px 10px"}} 
        isLoading={false} 
        disabled={true}/>);
    expect(getByTestId('iconBtn')).toBeInTheDocument;
  })

  it('should render the icon button with event handler', () => {
    const mockClickHandler = jest.fn();
    const {getByTestId} = render(<IconButton 
        size="12px" 
        src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" 
        dataTestid="iconBtn" 
        style={{padding: "10px 10px"}} 
        isLoading={false}
        onClick={mockClickHandler}
        disabled={true}/>);
    fireEvent.click(getByTestId('iconBtn'));
    expect(mockClickHandler.mock.calls.length).toBe(1)
  });
});
