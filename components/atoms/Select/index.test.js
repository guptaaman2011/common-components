import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Select from '.';

describe('atoms/Select', () => {
  it('should render', () => {
    render(<Select options={[{key: "key", value: "value", img: "image" }]}/>);
  });

  it('should render StyledOptionContent', () => {
      const { getByTestId} = render(<Select options={[{key: "key", value: "value", img: "image"}]} 
      optionStyle={{padding: "10px 10px", margin: "10px 10px"}} data-testid="select"/>);

    expect(getByTestId("select")).toBeInTheDocument();
  });

  it('should not render StyledOptionContent', () => {
    const { getByTestId} = render(<Select options={[{key: "key", value: "value", img: undefined}]} 
    optionStyle={{padding: "10px 10px", margin: "10px 10px"}} data-testid="select"/>);

  expect(getByTestId("select")).toBeInTheDocument();
});

});
