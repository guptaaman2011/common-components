import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatSubmitBox from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("molecules / Chat / ChatSubmitBox", module).add("Default", () => {
  return <ChatSubmitBox canAddAttachments={select("canAddAttachments",[true, false], true)}
  selectedChatRoomIndex={select("selectedChatRoomIndex",[0,1],0)} />
});

