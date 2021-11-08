import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterPanel from './index';


describe('organism: FilterPanel', () => {
    
  const filters = [
    {
      title: "Project Status",
      key: "Project Status",
      options: [
        "Product status 1",
        "Product status 2",
        "Product status 3",
        "Product status 4"
      ]
    },
    {
      title: "Product Type",
      key: "Product Type",
      options: [
        "Product type 1",
        "Product type 2",
        "Product type 3",
        "Product type 4"
      ]
    },
    {
      title: "Selection",
      key: "Selection",
      options: [
        "Selection 1",
        "Selection 2",
        "Selection 3",
        "Selection 4"
      ]
    }
  ];

  const selectedProperties = {};
  const updateSelectedProperties = jest.fn();


  it('should correctly render component', () => {
    render(<FilterPanel 
      updateSelectedProperties={updateSelectedProperties} 
      selectedProperties={selectedProperties}
      filters={filters}
    />);
  });

  it('should call Reset Filter', () => {
    const { getByText } = render(<FilterPanel 
      updateSelectedProperties={updateSelectedProperties} 
      selectedProperties={selectedProperties}
      initialSelectedProperties={selectedProperties}
      filters={filters}
    />);

    fireEvent.click(getByText('Reset Filter'));
  });
    
});


