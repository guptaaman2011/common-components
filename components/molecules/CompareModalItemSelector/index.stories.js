import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import FlexBlock from "../../atoms/FlexBlock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import CompareModalItemSelector from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Compare / CompareModalItemSelector", module).add("Default", () => {
  return (
    <FlexBlock>
        <CompareModalItemSelector 
          type={text("type", "String")}
          placeholder={text("placeholder", "Type IAN or Product No")}
          title={text("title", "Add Another Product")}
          onSubmit={(value) => { console.log('submit clicked::',value) }}
          currentItemKey="IAN1"
          compareKey="IAN1"
          width="377px"
        />
    </FlexBlock>
  );
}).add("Diasbled", () => {
  return (
    <FlexBlock>
        <CompareModalItemSelector 
          type={text("type", "String")}
          placeholder={text("placeholder", "Type IAN or Product No")}
          title={text("title", "Add Another Product")}
          onSubmit={(value) => { console.log('submit clicked::',value) }}
          currentItemKey="IAN2"
          compareKey="IAN1"
          width="377px"
        />
    </FlexBlock>
  );
}).add("Error", () => {
  return (
    <FlexBlock>
        <CompareModalItemSelector 
          type={text("type", "String")}
          placeholder={text("placeholder", "Type IAN or Product No")}
          title={text("title", "Add Another Product")}
          onSubmit={(value) => { console.log('submit clicked::',value) }}
          error="Product not found. Please try again."
          currentItemKey="IAN1"
          compareKey="IAN1"
          width="377px"
        />
    </FlexBlock>
  );
});


