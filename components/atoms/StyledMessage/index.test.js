import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StyledMessage from '.';

describe('atoms/StyledMessage', () => {
  it('should render', () => {
    const {getByText} = render(<StyledMessage text="Hello @[user-12](1)" config={{"USER": ["user-12"]}} />);
    expect(getByText("user-12")).toBeInTheDocument();
  });


});
