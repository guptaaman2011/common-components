import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatAvatar from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("molecules / Chat / ChatAvatar", module)
  .add("Default", () => {
    return <ChatAvatar>FN</ChatAvatar>;
  })
  .add("Internal", () => {
    return <ChatAvatar type="internal">IN</ChatAvatar>;
  })
  .add("External", () => {
    return <ChatAvatar type="external">EX</ChatAvatar>;
  })
  .add("Internal with Badge", () => {
    return (<ChatAvatar type="internal" showDot>IN</ChatAvatar>);
  })
  .add("External with Badge", () => {
    return <ChatAvatar type="external" showDot>EX</ChatAvatar>;
  });

