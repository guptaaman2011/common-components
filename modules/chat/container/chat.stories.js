import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatContainer from './chat';
import { MessageContextProvider } from "../context";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";
import { ChatHeader } from '../../../components/molecules';

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("containers / ChatContainer", module)
  .add("Default", () => {

    const users = ['john_doe@dummy', 'jane_doe@dummy', 'jane@dummy', 'john@dummy'];
    const roomLabelModifier = {
      'EXTERNAL': 'TALK TO BUYER', 
      'INTERNAL': 'INTERNAL',
    };
    return (
      <MessageContextProvider>
        <ChatContainer
          appId={text("appId", "4243")}
          roomLabelModifier={roomLabelModifier}
          refId={text("refId", "TXDEMO123")}
          userId={select("user", users, users[0])}
          authKey={select("user", users, users[0])}
          token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
        />
      </MessageContextProvider>
    );
  })
  .add("With Cookie", () => {

    const users = ['jane_doe@dummy', 'jane@dummy', 'john_doe@dummy', 'john@dummy'];

    return (
      <MessageContextProvider>
        <ChatContainer
          appId={text("appId", "4243")}
          refId={text("refId", "TXDEMO123")}
          userId={select("user", users, users[0])}
          authKey={select("user", users, users[0])}
          token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
        />
      </MessageContextProvider>
    );
  })
  .add("Pass header component", () => {

    const users = ['john_doe@dummy', 'jane_doe@dummy', 'john@dummy', 'jane@dummy'];

    // Version Options are mapped with ProductRefId as key
    const versionOptions = [{
      key: 1,
      value: '1.0'
    }, {
      key: 2,
      value: '2.0'
    }];

    return (
      <MessageContextProvider>
        <ChatContainer
          appId={text("appId", "1")}
          refId={text("refId", versionOptions[0].key)}
          userId={select("user", users, users[0])}
          authKey={select("user", users, users[0])}
          versionOptions={versionOptions}
          headerComponent={<div>Header component</div>}
        />
      </MessageContextProvider>
    );
  })
  .add("Version Change Box", () => {

    const users = ['jane_doe@dummy', 'jane@dummy', 'john_doe@dummy', 'john@dummy'];

    // Version Options are mapped with ProductRefId as key
    const versionOptionsMappedWithRefId = [{
      key: 1,
      value: '1.0'
    }, {
      key: 2,
      value: '2.0'
    }];

    return (
      <MessageContextProvider>
        <ChatContainer
          appId={text("appId", "1")}
          refId={text("refId", versionOptionsMappedWithRefId[0].key)}
          userId={select("user", users, users[0])}
          authKey={select("user", users, users[0])}
          versionOptions={versionOptionsMappedWithRefId}
          token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}         
        />
      </MessageContextProvider>
    );
  })
  .add("Focused Comment Box 1", () => {

    const users = ['john_doe@dummy', 'jane_doe@dummy', 'john@dummy', 'jane@dummy'];
    const roomLabelModifier = {
      'EXTERNAL': 'TALK TO SUPPLIER', 
      'INTERNAL': 'INTERNAL',
    };
    return (
      <MessageContextProvider>
        <ChatContainer
          appId={text("appId", "4243")}
          refId={text("refId", "TXDEMO123")}
          userId={select("user", users, users[0])}
          roomLabelModifier={roomLabelModifier}

          authKey={select("user", users, users[0])}
          focusMessage={object("focusMessage", {
            commentId: "d79f77c7-3ab0-4594-b77b-3281339e9d70"
          })}
          token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
         />
      </MessageContextProvider>
    );
  })
  .add("Focused Reply Box", () => {

    const users = ['jane_doe@dummy', 'jane@dummy', 'john_doe@dummy', 'john@dummy'];

    return (
      <MessageContextProvider>
        <ChatContainer
          appId={text("appId", "4243")}
          refId={text("refId", "TXDEMO123")}
          userId={select("user", users, users[0])}
          authKey={select("user", users, users[0])}
          focusMessage={object("focusMessage", {
            commentId: "d79f77c7-3ab0-4594-b77b-3281339e9d70",
            replyId: "acf4839d-0ff9-4cd4-8e32-773fff71406f"
          })}
          token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
       />
      </MessageContextProvider>
      );
    })

    .add("With Variable Room mapper", () => {

      const users = ['john_doe@dummy', 'jane_doe@dummy', 'john@dummy', 'jane@dummy'];
  
      return (
        <MessageContextProvider>
          <ChatContainer
            appId={text("appId", "4243")}
            refId={text("refId", "TXDEMO123")}
            userId={select("user", users, users[0])}
            authKey={select("user", users, users[0])}
            focusMessage={object("focusMessage", {
              commentId: "d79f77c7-3ab0-4594-b77b-3281339e9d70",
              replyId: "acf4839d-0ff9-4cd4-8e32-773fff71406f"
            })}
            roomLabelModifier={object("roomLabelModifier", {
              'EXTERNAL': 'TALK TO SUPPLIER',
              'INTERNAL': 'INTERNAL',
            })}
            token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
            />
        </MessageContextProvider>
      );
    }).add("Create Message with create-message event", () => {

      const users = ['john_doe@dummy', 'jane_doe@dummy', 'john@dummy', 'jane@dummy'];
  
      return (
        <>
        <MessageContextProvider>
          <ChatContainer
            appId={text("appId", "4243")}
            refId={text("refId", "TXDEMO123")}
            userId={select("user", users, users[0])}
            authKey={select("user", users, users[0])}
            roomLabelModifier={object("roomLabelModifier", {
              'EXTERNAL': 'TALK TO SUPPLIER', 
              'INTERNAL': 'INTERNAL',
            })}
            token={text("token", 'LUP_SESSIONID=2842729d-944f-4456-b445-9fbf0bae9af6;')}      
          />
        </MessageContextProvider>
        <input type="button" onClick={() => {
            const event = new CustomEvent(
                "create-message", 
                {
                detail: {
                    message: 'new message.body', attachments: []
                },
                bubbles: true,
                cancelable: true
                }
            );
            document.dispatchEvent(event);
        }}
        value="Create message with event"
        />
        </>
      );
    });