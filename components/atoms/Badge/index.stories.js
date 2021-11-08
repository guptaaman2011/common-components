import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import Badge from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("atoms / Badge", module)
  .add("Default Blue Badge", () => {
    return <Badge>2</Badge>;
  })

  .add("Default Orange Badge", () => {
    return <Badge bg="#F2994A">2</Badge>;
  })