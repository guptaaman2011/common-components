import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ComparisonGrid from './index';


describe('molecule: ComparisonGrid', () => {
  const properties = {
    theme: { title: "Theme", type: "string" },
    description: { title: "Description", type: "string" },
    specification: { title: "Specification", type: "string" },
    color: { title: "Color", type: "string" },
    material: { title: "Material", type: "string" },
    "unit weight": { title: "Unit Weight", type: "string" },
    dimension: { title: "Dimension", type: "string" },
    "primary buyer": { title: "Primary Buyer", type: "string" },
    "product creator": { title: "Product Creator", type: "string" }
  };
  
  const productDetailsData = {
    IAN_1: {
      "primary buyer": "Joe Johnston",
      "product creator": "Jan Schulmann",
      material: "ABS, Mild Steel, Glass",
      "unit weight": "640.00 g",
      dimension: "145 x 145 x 350 mm",
      theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
      description: "Colourful Table Lamp for Kids",
      specification:
        "- 15 × LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base"
    },
    IAN_2: {
      "product name": "Colourful Table Lamp for Kids",
      "product identifier": "HGXX567890",
      "ian": "IAN_2",
      "primary buyer": "Joe Johnston",
      "product creator": "Jan schulmann",
      material: "ABS, Mild Steel, Glass",
      "unit weight": "640.00 g",
      dimension: "145 x 145 x 350 mm",
      theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
      theme: "29.1 - Living (Good)",
      description: "Entry level table lamp with integrated LED module",
      specification:
        "- 24 × LEDs, approx.4.5W - Lumen : 250 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base"
    },
    IAN_3: {
      "product name": "Colourful Table Lamp for Kids",
      "product identifier": "HGXX567890",
      "ian": "IAN_3",
      "primary buyer": "Joe Johnston",
      "product creator": "Jan Schulmann",
      material: "ABS, Mild Steel, Glass",
      "unit weight": "640.00 g",
      dimension: "145 x 145 x 350 mm",
      theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
      theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
      description: "Colourful Table Lamp for Kids",
      specification:
        "- 15 × LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base"
    },
    IAN_4: {
      "product name": "Colourful Table Lamp for Kids",
      "product identifier": "HGXX567890",
      "ian": "IAN_4",
      "primary buyer": "Joe Johnston",
      "product creator": "Jan Schulmann",
      material: "ABS, Mild Steel, Glass",
      "unit weight": "640.00 g",
      dimension: "145 x 145 x 350 mm",
      theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
      theme: "29.1 - Living (Good)",
      description: "Entry level table lamp with integrated LED module",
      specification:
        "- 24 × LEDs, approx.4.5W - Lumen : 250 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base"
    }
  };



  const sections = [
    {
      title: "Product Details",
      fields: ["theme", "description", "specification"]
    },
    {
      title: "Style Details",
      fields: [
        "description",
        "color",
        "material",
        "unit weight",
        "dimension"
      ]
    },
    {
      title: "Product Info",
      fields: ["primary buyer", "product creator"]
    }
  ];

  const selectedProperties = {};

  const handleClearAllData = jest.fn();
  
  const comparisonPanelProps = {
    productDetails: {
      title: "Product Details",
      options: [
        "theme",
        "description",
        "specification"
      ]
    },
    styleDetails: {
      title: "Style Details",
      options: [
        "color",
        "material",
        "unit weight",
        "dimension"
      ]
    },
    productInfo: {
      title: "Product Info",
      options: [
        "primary buyer",
        "product creator"
      ]
    }
  };
  
  const propertiesUISchema = {
    "ian": {
      "type": "string",
      "uiWidget": "textWidget"
    },
    "product name": {
      "type": "string",
      "uiWidget": "textWidget"
    },
    "product thumbnail": {
      "type": "string",
      "uiWidget": "imageWidget"
    }
  };

  const itemCardProps = ["ian", "product name", "product thumbnail"];
  const onHighlightChange = jest.fn();
  let highlightSelected = false;
  const itemSelectorProp = "ian";

  it('should correctly render component', () => {
    render(<ComparisonGrid 
      sections={sections}
      properties={properties}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp={itemSelectorProp}
      itemCardProps={itemCardProps}
      propertiesUISchema={propertiesUISchema}
      highlightSelected={highlightSelected}
      onHighlightChange={onHighlightChange}
    />);
  });

  it('should correctly render component on highlight differences click', () => {
    const { getByLabelText } = render(<ComparisonGrid 
      sections={sections}
      properties={properties}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp={itemSelectorProp}
      itemCardProps={itemCardProps}
      propertiesUISchema={propertiesUISchema}
      onHighlightChange={onHighlightChange}
      highlightSelected={highlightSelected}
    />);

    fireEvent.click(getByLabelText("Highlight Differences"));
    expect(onHighlightChange).toBeCalled();
  });

  it('should call findRowsToHighlight with highlightSelected true', () => {
    const { getByLabelText } = render(<ComparisonGrid 
      sections={sections}
      properties={properties}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp={itemSelectorProp}
      itemCardProps={itemCardProps}
      propertiesUISchema={propertiesUISchema}
      onHighlightChange={onHighlightChange}
      highlightSelected={true}
    />);
  });

  it('should correctly render component', () => {
    render(<ComparisonGrid 
      comparisonPanelProps={comparisonPanelProps}
      properties={properties}
      selectedProperties={selectedProperties}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp={{ title: 'IAN', type: 'string', placeholder: 'Type IAN/Product Number' }}
      propertiesUISchema={propertiesUISchema}
      itemCardProps={["ian", "product name", "product thumbnail"]}    
      clearAllDisabled={false}
      sections={sections}
      handleClearAllData={handleClearAllData}
    />);
  });

  it('should call handleClearAllData on Clear All click', () => {
    const { getByText } = render(<ComparisonGrid 
      comparisonPanelProps={comparisonPanelProps}
      properties={properties}
      selectedProperties={selectedProperties}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp={{ title: 'IAN', type: 'string', placeholder: 'Type IAN/Product Number' }}
      propertiesUISchema={propertiesUISchema}
      itemCardProps={["ian", "product name", "product thumbnail"]}    
      clearAllDisabled={false}
      sections={sections}
      handleClearAllData={handleClearAllData}
    />);

    fireEvent.click(getByText('Clear All'));
    expect(handleClearAllData.mock.calls.length).toBe(1);
  });
    
});


