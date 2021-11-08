import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";
import FlexBlock from "../../atoms/FlexBlock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import SaveComparisonModal from ".";
import { LUP_SPACING_340 } from '../../../theme';

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);
const itemSelectorProp = {
  "type": "string",
  "title": "Product",
  "placeholder": "Type IAN or Product No",
  "description": "This specifies the ian of a product"
}


storiesOf("molecules / Compare / SaveComparisonModal", module).add("Default", () => {
  return (
    <FlexBlock>
        <SaveComparisonModal 
          type={text("type", "string")}
          placeholder={text("placeholder", "Save Comparison as")}
          visible={select("visible",[true,false],true)}
          comparisonName={text("comparisonName", "default first product")}
          itemSelectorProp={object("itemSelectorProp", itemSelectorProp)}
          onSave={(value) => console.log("Save clicked::",value)}
          onCancel={() => console.log("Cancel clicked::")}
          modalWidth="340px"
          itemSelectorProp={{ title: 'IAN/Product Number', type: 'string', placeholder: 'Type IAN/Product Number' }}
        />
    </FlexBlock>
  );
});

