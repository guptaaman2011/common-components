import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Compare from './index';


describe('organism: Compare', () => {
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
    },
    IAN_3: {
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
    }
  };
  
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

  const selectedProperties = {};

  const itemCardProps = ["ian", "product name", "product thumbnail"];
  
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

  const onHighlightChange = jest.fn();
  const highlightSelected = false;

  it('should correctly render component', () => {
    render(<Compare 
      comparisonPanelProps={comparisonPanelProps}
      properties={properties}
      selectedProperties={selectedProperties}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp='ian'
      savedComparisonKeys={{'1': {name: 'dummy'}}}
      savedComparisons={[{name:'ian',id:'1'}]}
      currentComparisonId={'1'}
      itemCardProps={[]}
      deleteComparisonDisabled
      itemCardProps={itemCardProps}
      onHighlightChange={onHighlightChange}
      highlightSelected={highlightSelected}
      propertiesUISchema={propertiesUISchema}
    />);
  });

  it('should correctly render ConfirmModal', () => {
    render(<Compare 
      comparisonPanelProps={comparisonPanelProps}
      properties={properties}
      selectedProperties={selectedProperties}
      savedComparisonKeys={{'1': {name: 'dummy'}}}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp='ian'
      savedComparisons={[{name:'ian',id:'1'}]}
      currentComparisonId={'1'}
      itemCardProps={[]}
      deleteComparisonDisabled={false}
      itemCardProps={itemCardProps}
      onHighlightChange={onHighlightChange}
      highlightSelected={highlightSelected}
      propertiesUISchema={propertiesUISchema}
    />);
  });
    
  
  it('should correctly render AlertPopUp', () => {
    render(<Compare 
      comparisonPanelProps={comparisonPanelProps}
      properties={properties}
      selectedProperties={selectedProperties}
      primary="IAN_1"
      data={{ ...productDetailsData }}
      compareKey={'IAN'}
      itemSelectorProp='ian'
      savedComparisonKeys={{'1': {name: 'dummy'}}}
      savedComparisons={[{name:'ian',id:'1'}]}
      currentComparisonId={'1'}
      deleteComparisonDisabled
      alertSuccessMsg={'success'}
      alertErrorMsg={'error'}
      itemSelectorProp={{ title: "ian", type: "string" }}
      itemCardProps={[]}
      itemCardProps={itemCardProps}
      onHighlightChange={onHighlightChange}
      highlightSelected={highlightSelected}
      propertiesUISchema={propertiesUISchema}
    />);
  });
    
});


