import React from 'react';
import { MessageContextProvider } from './context';
import ChatContainer from './container/chat';
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

const Chat = ({
    appId, 
    refId, 
    userId, 
    authKey, 
    reference, 
    onMessagePinClickRef, 
    onDeleteMessageRef, 
    onCreateMessageRef, 
    focusMessage,
    roomLabelModifier,
    versionOptions,
    headerComponent
}) => (
  <ThemeProvider theme={theme}>
    <MessageContextProvider>
      <ChatContainer
        appId={appId}
        refId={refId}
        userId={userId}
        authKey={authKey}
        reference={reference}
        onMessagePinClickRef={onMessagePinClickRef}
        onDeleteMessageRef={onDeleteMessageRef}
        onCreateMessageRef={onCreateMessageRef}
        focusMessage={focusMessage}
        roomLabelModifier={roomLabelModifier}
        versionOptions={versionOptions}
        headerComponent={headerComponent}
      />
    </MessageContextProvider>
  </ThemeProvider>
);

export default Chat;