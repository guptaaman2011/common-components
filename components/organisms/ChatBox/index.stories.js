import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatBox from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("organisms / ChatBox", module).add("Default", () => {

  const chatItem1 = {
    id: '1',
    avatar: 'BB',
    author: 'Brahim Boumrar',
    userType: 'internal',
    isNew: false,
    text: 'Please help to Enlarge the collar and change the color to Red.?',
    createdAt: 1595221687000,
    replyItems: [
      {
        avatar: 'HF',
        author: 'Hans Fischer',
        userType: 'external',
        isNew: false,
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
    ],
  }

  const chatItem2 = {
    id: '2',
    avatar: 'FM',
    author: 'From Myself',
    userType: 'internal',
    isNew: false,
    text: 'All the changes are done on the Product. I have also added one more color as Style.',
    createdAt: 1595211687000,
    isEditing: false,
  };

  const chatItem3 = {
    id: '3',
    avatar: 'MJ',
    author: 'Meghan Johannsen',
    userType: 'internal',
    isNew: false,
    text: 'All the changes are done on the Product. I have also added one more color as Style.',
    createdAt: 1595088000000,
  };

  const chatItem4 = {
    id: '4',
    avatar: 'HF',
    author: 'Hans Fischer',
    userType: 'external',
    isNew: false,
    text: 'What is the duty on IAN 567023_2010?',
    createdAt: 1595088000000,
  };

  const onSubmit = (message) => {
    console.log("onSubmit : ", message);
  }

  const onSearch = (searchText) => {
    console.log("onSearch : ", searchText);
  }

  const chatItems = [chatItem4, chatItem3, chatItem2, chatItem1];

  return <ChatBox
    chatItems={chatItems}
    replyItems={chatItems}
    onSubmit={onSubmit}
    onSearch={onSearch}
    chatType={select("chatType", ["comment", "reply"], "comment")}
    rooms={[{ app: { ref: { name: 'internal'}}, id: '1',count: 25}, { app: { ref: { name: 'talk to buyer'}}, id: '2'}]}
    currentRoom={{ app: { ref: { name: 'internal'}}, id: '1',count: 25, index: 0}}
    userPermissions={[
      'VIEW_COMMENTS',
      'ADD_COMMENTS',
      'ADD_ATTACHMENTS',
      'DELETE_ALL_COMMENTS',
      'DELETE_OWN_COMMENTS',
      'EDIT_ALL_COMMENTS',
      'EDIT_OWN_COMMENTS'
    ]}
  />;
});

