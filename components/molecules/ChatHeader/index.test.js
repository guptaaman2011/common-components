import React from "react";
import {   fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatHeader from "./index";

describe("Molecule: ChatHeader", () => {
  it("should render", () => {
    const mockClickHandler = jest.fn();
    const { getByText}  = render(<ChatHeader 
        headerText="chatComments"
        suffix="png"
        showCloseIcon={true}
        onClose={mockClickHandler}
        showVersions={true}
    />);

    expect(getByText("png")).toBeInTheDocument();
  });



});