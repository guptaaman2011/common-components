import React from "react";
import { Row, Col, Checkbox } from "antd";
import { storiesOf, addDecorator } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import FilterPanel from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("organisms / FilterPanel", module)
  .add("FilterPanel with no filters", () => {
    return <FilterPanel filters={[]} />;
  })
  .add("FilterPanel with filters", () => {
    const eventsFromObject = actions({ onClearAll: "clicked" });
    const filters = [
      {
        title: "Product Details",
        key: "Product Details",
        options: [
          "Product Type",
          "Merchandise Team",
          "Theme",
          "Description",
          "Specification",
          "Number of Styles"
        ]
      },
      {
        title: "Style Detail",
        key: "Style Detail",
        options: [
          "Description",
          "Color",
          "Material",
          "Unit Weight",
          "Dimension"
        ]
      },
      {
        title: "Product Info",
        key: "Product Info",
        options: [
          "Status",
          "Primary Buyer",
          "Product Creator",
          "Product Tags"
        ]
      }
    ];
    return <FilterPanel {...eventsFromObject} filters={filters} />;
  });
