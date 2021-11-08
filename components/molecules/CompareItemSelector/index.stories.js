import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import FlexBlock from "../../atoms/FlexBlock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import CompareItemSelector from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Compare / CompareItemSelector", module).add("Default", () => {
  return (
    <FlexBlock>
        <CompareItemSelector 
          type={text("type", "String")}
          placeholder={text("placeholder", "Type IAN or Product No")}
          title={text("title", "Product 1 to Compare")}
          onSubmit={(value) => { console.log('submit clicked::',value) }}
          currentItemKey="IAN1"
          compareKey="IAN1"
          parent="comparisonGrid"
        />
    </FlexBlock>
  );
}).add("All fields Diasbled", () => {
  return (
    <FlexBlock>
        <CompareItemSelector 
          type={text("type", "String")}
          placeholder={text("placeholder", "Type IAN or Product No")}
          title={text("title", "Product 1 to Compare")}
          onSubmit={(value) => { console.log('submit clicked::',value) }}
          currentItemKey="IAN2"
          compareKey="IAN1"
          parent="comparisonGrid"
        />
    </FlexBlock>
  );
}).add("Error on fetch product", () => {
  return (
    <FlexBlock>
        <CompareItemSelector 
          type={text("type", "String")}
          placeholder={text("placeholder", "Type IAN or Product No")}
          title={text("title", "Product 1 to Compare")}
          onSubmit={(value) => { console.log('submit clicked::',value) }}
          error="Product not found. Please try again."
          currentItemKey="IAN1"
          compareKey="IAN1"
          parent="comparisonGrid"
        />
    </FlexBlock>
  );
});