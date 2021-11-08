import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatItems from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Chat / ChatItems", module).add("Default", () => {

  const chatItem1 = {
    avatar: 'BB',
    author: 'Brahim Boumrar',
    userType: 'internal',
    isNew: true,
    text: 'Please help to Enlarge the collar and change the color to Red.?',
    createdAt: 1595221687000,
    replyItems: [
      {
        avatar: 'HF',
        author: 'Hans Fischer',
        userType: 'external',
        isNew: true,
        text: 'I would prefer double stitching on sleeves?',
        createdAt: 1595211687000,
      },
      {
        avatar: 'HF',
        author: 'Meghan Johannsen',
        userType: 'internal',
        isNew: false,
        text: 'Please find attached required files',
        createdAt: 1595088000000,
      }
    ]
  }

  const chatItem2 = {
    avatar: 'HF',
    author: 'Hans Fischer',
    userType: 'external',
    isNew: true,
    text: 'I would prefer double stitching on sleeves?',
    createdAt: 1595211687000,
  };

  const chatItem3 = {
    avatar: 'HF',
    author: 'Meghan Johannsen',
    userType: 'internal',
    isNew: false,
    text: 'Please find attached required files.',
    createdAt: 1595088000000,
  };

  const chatItems = [chatItem3, chatItem3, chatItem1, chatItem2];

  return <ChatItems chatItems={chatItems} replyItems={chatItems} selectedChatRoomIndex={0}
    chatType={select("chatType", ["comment", "reply"], "comment")} />;
});

