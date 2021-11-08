import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ComparisonViewSelector from ".";

const ThemeProviderDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Compare / ComparisonViewSelector", module).add("Default", () => {
  return (
    <ComparisonViewSelector
      itemsToCompare = {['IAN1', 'IAN2', 'IAN3']}
    />
  );
});
