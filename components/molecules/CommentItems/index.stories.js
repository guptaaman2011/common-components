import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import CommentItems from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("molecules / Chat / CommentItems", module).add("Default", () => {

  const commentItem1 = {
    avatar: 'BB',
    author: 'Brahim Boumrar',
    userType: 'internal',
    isNew: false,
    text: 'Please help to Enlarge the collar and change the color to Red.',
    createdAt: "October 13, 2020 10:24:00",
    replyItems: [
      {
        avatar: 'HF',
        author: 'Hans Fischer',
        userType: 'external',
        isNew: false,
        text: 'I would prefer double stitching on sleeves?',
        createdAt: "October 13, 2020 10:24:00",
      },
      {
        avatar: 'HF',
        author: 'Meghan Johannsen',
        userType: 'internal',
        isNew: false,
        text: 'Please find attached required files',
        createdAt: "October 13, 2020 10:24:00",
      }
    ]
  }

  const commentItem2 = {
    avatar: 'BB',
    author: 'Brahim Boumrar',
    userType: 'internal',
    isNew: false,
    text: 'Please help to Enlarge the collar and change the color to Red.',
    createdAt: "October 13, 2020 14:12:00",
  };

  const commentItem3 = {
    avatar: 'FM',
    author: 'From Myself',
    userType: 'internal',
    isNew: false,
    text: 'Please find attached required files.',
    createdAt: "October 13, 2020 01:54:00",
    attachments: [
      { name: 'Artwork_V1.0.pdf', progress: 100 }, 
      { name: 'Moodboard_new.png', progress: 100 },
    ],
  };

  const commentItem4 = {
    avatar: 'FM',
    author: 'From Myself',
    userType: 'internal',
    isNew: false,
    text: 'All the changes are done on the Product. I have also added one more color as Style.',
    createdAt: "October 13, 2020 12:15:00",
  };

  const commentItem5 = {
    avatar: 'BB',
    author: 'Brahim Boumrar',
    userType: 'external',
    isNew: false,
    text: 'Please help to Enlarge the collar and change the color to Red.',
    createdAt: "October 13, 2020 09:15:00",
  };

  const commentItems = [commentItem1,commentItem2,commentItem3,commentItem4, commentItem5];

  return <CommentItems commentItems={commentItems} selectedChatRoomIndex={0} />;
});

