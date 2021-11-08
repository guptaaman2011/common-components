import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import FlexBlock from "../../atoms/FlexBlock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import AlertPopUp from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / AlertPopUp", module).add("Default", () => {
  return (
    <FlexBlock>
        <AlertPopUp 
          type={text("type", "success")}
          message={text("message", "You have successfully changed your password.")}
        />
    </FlexBlock>
  );
}).add("Error", () => {
  return (
    <FlexBlock>
        <AlertPopUp 
          type={text("type", "error")}
          message={text("message", "Were Sorry. This is to inform you that something bad happened.")}
        />
    </FlexBlock>
  );
})
