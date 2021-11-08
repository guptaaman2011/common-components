import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatInputArea from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);


storiesOf("molecules / Chat / ChatInputArea", module)
  .add("Default", () => {
    return (
        <ChatInputArea 
          canAddAttachments={select("canAddAttachments",[true, false], true)}
          selectedChatRoomIndex={0}
        />
    )
  })

