import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatSearchInput from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);


storiesOf("atoms / SearchInput", module)
  .add("Default", () => {
    return (
        <ChatSearchInput />
    )
  })
  .add("Error", () => {
    return (
      <ChatSearchInput noChatFound={true} />
    )
  })

