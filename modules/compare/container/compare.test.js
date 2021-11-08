import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CompareContext } from "../context";
import CompareContainer from './compare';

const getComparisonData = jest.fn();
const getTemplateData = jest.fn();
const getSavedComparisonData = jest.fn();
const actions = {
    getComparisonData,
    getTemplateData,
    getSavedComparisonData
}
const dispatch = jest.fn();

const state = {
    values: [],
    loading: false,
    error: null,
    properties: {},
    comparisonPanelProps: {},
    name: "Products to compare",
    selectedItems: [],
    selectedProperties: {},
    itemCardProps: [],
    currentComparisonId: ""
}

describe("Container: Compare", () => {
    it("should render", () => {

        render(<CompareContext.Provider value={[state, dispatch, actions
        ]}>
            <CompareContainer
                compareKey='ian'
                templateId='5fd4f966-1ca8-4ac7-b3d3-b60c123e4922'
            />
        </CompareContext.Provider>);
    });

    it("should render show loading message when state is in loading state", () => {
        const newState = {
            ...state
        }        
        newState.loading = true;
        render(<CompareContext.Provider value={[newState, dispatch, actions
        ]}>
            <CompareContainer
                compareKey='ian'
                templateId='5fd4f966-1ca8-4ac7-b3d3-b60c123e4922'
            />
        </CompareContext.Provider>);
    });

    it("should render show error message when state is in error state", () => {
        const newState = {
            ...state
        }        
        newState.error = true;
        const { getByText } = render(<CompareContext.Provider value={[newState, dispatch, actions
        ]}>
            <CompareContainer
                compareKey='ian'
                templateId='5fd4f966-1ca8-4ac7-b3d3-b60c123e4922'
            />
        </CompareContext.Provider>);
        expect(getByText("Error...")).toBeInTheDocument();
    });

    it("should render compare with side panel properties and item selectors", () => {
        const newState = {
            ...state
        }
        newState.currentComparisonId = '1';
        newState.savedComparisonKeys = {
            '1': {
                name: 'new Comparison'
            }
        };
        newState.properties = {
            "ian": {
                "type": "string",
                "title": "Product",
                "placeholder": "Type IAN or Product No",
                "description": "This specifies the ian of a product"
            },
            "theme": {
                "type": "string",
                "title": "Theme",
                "description": "This specifies the theme of a product"
            },
            "description": {
                "type": "string",
                "title": "Description",
                "description": "This specifies the description of a product"
            },
            "specification": {
                "type": "string",
                "title": "Specification",
                "description": "This specifies the specification of a product"
            },
            "material": {
                "type": "string",
                "title": "Material",
                "description": "This specifies the material of a product"
            },
            "dimension": {
                "type": "string",
                "title": "Dimension",
                "description": "This specifies the dimension of a product"
            },
            "primary buyer": {
                "type": "string",
                "title": "Primary Buyer",
                "description": "This specifies the primary buyer of a product"
            },
            "product creator": {
                "type": "string",
                "title": "Product Creator",
                "description": "This specifies the product creator of a product"
            }
        };

        newState.comparisonPanelProps = {
            "productDetails": {
                "title": "Product Details",
                "options": ["theme","description","specification"]
            },
            "styleDetails": {
                "title": "Style Details",
                "options": ["material","dimension"]
            },
            "productInfo": {
                "title": "Product Info",
                "options": ["primary buyer","product creator"]
            }
        };

        newState.itemSelectorProp = {
            "type": "string",
            "title": "Product",
            "placeholder": "Type IAN or Product No",
            "description": "This specifies the ian of a product"
        }

        const { getByText } = render(<CompareContext.Provider value={[newState, dispatch, actions
        ]}>
            <CompareContainer
                compareKey='ian'
                templateId='5fd4f966-1ca8-4ac7-b3d3-b60c123e4922'
            />
        </CompareContext.Provider>);

        expect(getByText("Product Details")).toBeInTheDocument();
        expect(getByText("Style Details")).toBeInTheDocument();
        expect(getByText("Product Info")).toBeInTheDocument();
        expect(getByText("Product 1 to Compare")).toBeInTheDocument();
        expect(getByText("Product 2 to Compare")).toBeInTheDocument();
        expect(getByText("Product 3 to Compare")).toBeInTheDocument();
    });

    it("should render compare with side panel properties and comparison grid values", () => {
        const newState = {
            ...state
        }
        newState.currentComparisonId = '1';
        newState.savedComparisonKeys = {
            '1': {
                name: 'new Comparison'
            }
        };
        newState.properties = {
            "ian": {
                "type": "string",
                "title": "Product",
                "placeholder": "Type IAN or Product No",
                "description": "This specifies the ian of a product"
            },
            "theme": {
                "type": "string",
                "title": "Theme",
                "description": "This specifies the theme of a product"
            },
            "description": {
                "type": "string",
                "title": "Description",
                "description": "This specifies the description of a product"
            },
            "specification": {
                "type": "string",
                "title": "Specification",
                "description": "This specifies the specification of a product"
            },
            "material": {
                "type": "string",
                "title": "Material",
                "description": "This specifies the material of a product"
            },
            "dimension": {
                "type": "string",
                "title": "Dimension",
                "description": "This specifies the dimension of a product"
            },
            "primary buyer": {
                "type": "string",
                "title": "Primary Buyer",
                "description": "This specifies the primary buyer of a product"
            },
            "product creator": {
                "type": "string",
                "title": "Product Creator",
                "description": "This specifies the product creator of a product"
            }
        };

        newState.comparisonPanelProps = {
            "productDetails": {
                "title": "Product Details",
                "options": ["ian","theme","description","specification"]
            },
            "styleDetails": {
                "title": "Style Details",
                "options": ["material","dimension"]
            },
            "productInfo": {
                "title": "Product Info",
                "options": ["primary buyer","product creator"]
            }
        };

        newState.itemSelectorProp = {
            "type": "string",
            "title": "Product",
            "placeholder": "Type IAN or Product No",
            "description": "This specifies the ian of a product"
        }

        newState.selectedItems = ["IAN_1", "IAN_2", "IAN_3"];

        newState.selectedProperties = {
            productDetails: ["ian", "theme"],
            productInfo: ["primary buyer"],
            styleDetails: ["material"]
        };

        newState.values = {
            IAN_1: {
                description: "Colourful Table Lamp for Kids",
                dimension: "145 x 145 x 350 mm",
                ian: "IAN1",
                material: "ABS, Mild Steel, Glass",
                "primary buyer": "Joe Johnston",
                "product creator": "Jan Schulmann",
                specification: "- 15 × LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base",
                theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
                "unit weight": "640.00 g",
            },
            IAN_2: {
                description: "Colourful Table Lamp for Kids",
                dimension: "145 x 145 x 350 mm",
                ian: "IAN2",
                material: "ABS, Mild Steel, Glass",
                "primary buyer": "Joe Johnston",
                "product creator": "Jan Schulmann",
                specification: "- 15 × LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base",
                theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
                "unit weight": "640.00 g",
            },
            IAN_3: {
                description: "Colourful Table Lamp for Kids",
                dimension: "145 x 145 x 350 mm",
                ian: "IAN3",
                material: "ABS, Mild Steel, Glass",
                "primary buyer": "Joe Johnston",
                "product creator": "Jan Schulmann",
                specification: "- 15 × LEDs, approx.4.5W - Lumen : 350 lm - Color Temp : 3000K - Input : 230V ~ 50/60Hz, - Switch Type : ON/OFF Switch on the base",
                theme: "27.1 - Back to School (School beginners) (DDP 24/28)",
                "unit weight": "640.00 g",
            }
        };

        const { getByText } = render(<CompareContext.Provider value={[newState, dispatch, actions
        ]}>
            <CompareContainer
                compareKey='ian'
                templateId='5fd4f966-1ca8-4ac7-b3d3-b60c123e4922'
            />
        </CompareContext.Provider>);

        expect(getByText("IAN1")).toBeInTheDocument();
        expect(getByText("IAN2")).toBeInTheDocument();
        expect(getByText("IAN3")).toBeInTheDocument();

    });
});
