import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CompareToolBar from "./index";

describe("Molecules: CompareToolBar", () => {

  it("should render CompareToolBar", () => {
    render(
      <CompareToolBar
        isDropDownVisible
        dropDownMenu=''
        handleSaveComparison={() => {}}
        handleDeleteComparison={() => {}}
        handleExportComparison={() => {}}
        handleDropDown={() => {}}
      />
    );
  });

  it("should call handleSaveComparison on click of SAVE COMPARISON button", () => {
    const mockHandleSaveComparison = jest.fn();
    const mockHandleDeleteComparison = jest.fn();
    const { getByText } = render(
      <CompareToolBar
        isDropDownVisible
        dropDownMenu={''}
        handleSaveComparison={mockHandleSaveComparison}
        handleDeleteComparison={mockHandleDeleteComparison}
        handleExportComparison={() => {}}
        handleDropDown={() => {}}
        saveComparisonDisabled={false}
      />
    );
    fireEvent.click(getByText("SAVE COMPARISON"));
    expect(mockHandleSaveComparison.mock.calls.length).toBe(1);
  });

  it("should call handlefunctions on click of icon buttons", () => {
    const mockHandleSaveComparison = jest.fn();
    const mockHandleDeleteComparison = jest.fn();
    const mockHandleExportComparison = jest.fn();
    const mockHandleDropDown = jest.fn();
    const { getByTestId } = render(
      <CompareToolBar
      isDropDownVisible
      dropDownMenu={''}
      handleSaveComparison={mockHandleSaveComparison}
      handleDeleteComparison={mockHandleDeleteComparison}
      handleExportComparison={mockHandleExportComparison}
      handleDropDown={mockHandleDropDown}
    />,
);

   fireEvent.click(getByTestId('DeleteSVGTestId'));
   expect(mockHandleDeleteComparison.mock.calls.length).toBe(1);

  });
});
