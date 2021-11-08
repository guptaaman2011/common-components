import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatItem from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Chat / ChatItem", module).add("Default", () => {
  return <ChatItem
    // actions
    onTapEdit={action("edit-clicked")}
    onTapDelete={action("delete-clicked")}
    onTapPin={action("pin-clicked")}
    onTapReply={action("reply-clicked")}
    // flags
    isNew={boolean("isNew", false)}
    isPinned={boolean("isPinned", false)}
    canEdit={boolean("canEdit", false)}
    canDelete={boolean("canDelete", false)}
    // info
    avatar={text("avatar", "BB")}
    author={text("author", "Brahim Boumrar")}
    time={text("time", "2:35pm")}
    userType={select("userType", ["internal", "external"], "internal")}
    selectedChatRoomIndex={select("selectedChatRoomIndex", [0, 1], 0)}
    chatType={select("chatType", ["comment", "reply"], "comment")}
    highlightedText={text("highlightedText", "Please")}
    text={text("text", "Please help to Enlarge the collar and change the color to Red.")}
    taggedUsers={[]}
  />;
});

