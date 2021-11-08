import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatCreateBox from './ChatCreateBox';
import ChatContainer from './chat';
import { MessageContextProvider } from "../context";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

const users = ['jane_doe@dummy', 'john@dummy', 'john_doe@dummy', 'jane@dummy'];

storiesOf("containers / ChatCreateBox", module)
  .add("Consuming Application Pin Story", () => {

    return (
      <div style={{ display: 'flex' }}>
        <MessageContextProvider>
          <div style={{ width: '50%' }}>
            <ChatContainer
              onMessagePinClickRef={action("pin-clicked")}
              onDeleteMessageRef={action("message-deleted")}
              appId={text("appId", "4243")}
              refId={text("refId", "TXDEMO123")}
              token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
              userId={select("user", users, users[0])}
              authKey={select("user", users, users[0])}
              token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
            />
          </div>
          <div style={{ width: '50%' }}>
            <ChatCreateBox
              appId={text("appId", "4243")}
              refId={text("refId", "TXDEMO123")}
              onCreateMessageRef={action("message-created")}
              reference={object("reference", {
                pin: { pin_id: '1' }
              })}
              userId={select("user", users, users[0])}
              authKey={select("user", users, users[0])}
            />
          </div>
        </MessageContextProvider>
      </div>
    );
  })
