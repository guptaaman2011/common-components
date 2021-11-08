import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatEditBox from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Chat / ChatEditBox", module).add("Default", () => {
  return <ChatEditBox
    // actions
    onCancel={action("cancel-clicked")}
    onSave={action("save-clicked")}
    // flags
    isNew={boolean("isNew", false)}
    // info
    avatar={text("avatar", "HF")}
    userType={select("userType", ["internal", "external"], "internal")}
    selectedChatRoomIndex={select("selectedChatRoomIndex", [0, 1], 0)}
    chatType={select("chatType", ["comment", "reply"], "comment")}
    canAddAttachments={select("canAddAttachments",[true, false], true)}
  >
    {text("text", "All the changes are done on the Product. I have also added one more color as Style.")}
  </ChatEditBox>;
});

