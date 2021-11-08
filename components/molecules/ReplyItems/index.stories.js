import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ReplyItems from ".";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("molecules / Chat / ReplyItems", module).add("Default", () => {

  const replyItem1 = {
    avatar: 'BB',
    author: 'Brahim Boumrar',
    userType: 'internal',
    isNew: false,
    text: 'Please help to Enlarge the collar and change the color to Red.',
    createdAt: "October 13, 2020 14:15:00",
  }

  const replyItem3 = {
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

  const replyItem4 = {
    avatar: 'FM',
    author: 'From Myself',
    userType: 'internal',
    isNew: false,
    text: 'All the changes are done on the Product. I have also added one more color as Style.',
    createdAt: "October 14, 2020 12:15:00",
  };

  const replyItem5 = {
    avatar: 'BB',
    author: 'Brahim Boumrar',
    userType: 'external',
    isNew: false,
    text: 'Please help to Enlarge the collar and change the color to Red.',
    createdAt: "October 16, 2020 09:15:00",
  };

  const replyItems = [replyItem1, replyItem3, replyItem4, replyItem5];

  return <ReplyItems replyItems={replyItems}/>;
});

