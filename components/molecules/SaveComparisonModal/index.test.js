import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SaveComparisonModal from '.';


describe('molecules: SaveComparisonModal', () => {
  it('should correctly render component', () => {
    render(<SaveComparisonModal visible={true}  
      itemSelectorProp={{ title: "ian", type: "string" }} />);
  });

  it('should call save and cancel', () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const { getByPlaceholderText, getByLabelText, getByText } = render(<SaveComparisonModal
      comparisonName="first product" 
      onSave={onSave} 
      onCancel={onCancel} 
      placeholder="Save comparison as" 
      type="string" 
      visible={true}  
      itemSelectorProp={{ title: "ian", type: "string" }}
    />);
    const checkbox = getByLabelText("Save as ian");
    fireEvent.change(checkbox, { target: { checked: true } });

    const input = getByPlaceholderText('Save comparison as')
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'name' }});

    const save = getByText('Save')
    const cancel = getByText('Cancel')

    fireEvent.click(save);
    expect(onSave).toBeCalled();

    fireEvent.click(cancel);
    expect(onCancel).toBeCalled();    

  });
});


