import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomDropDown from "./index";

describe("Atom: CustomDropDown", () => {
  it("should render component without dropdown ", () => {
    render(<CustomDropDown visible={false}><a>Hover</a></CustomDropDown>);
  });

  it("should render component  dropdown ", () => {
    render(<CustomDropDown visible><a>Hover</a></CustomDropDown>);
  });

  it("should render the text", () => {
    const { getByText } = render(<CustomDropDown visible><a>Hover</a></CustomDropDown>);
    expect(getByText("Hover")).toBeInTheDocument();
  });

});
