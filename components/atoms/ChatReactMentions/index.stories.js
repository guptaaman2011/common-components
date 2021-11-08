import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatReactMentions from ".";
import FlexBlock from '../FlexBlock';
import Label from '../Label';

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);


addDecorator(ThemeProviderDecorator);

storiesOf("atoms / ChatReactMentions", module)
  .add("States", () => {  
    return (
        <>
        <FlexBlock>
          <Label>Not Editable</Label>
          <ChatReactMentions placeholder="Enter Text" users={[{
              id: '1',
              name: 'Aman Gupta',
          }, {
              id: '2',
              name: 'Parag Goyal',
          }]}  value={"Hello @"} />
          <br/>
          <br/>
          
        </FlexBlock>
        <FlexBlock>
            <Label>Editable</Label>
            <ChatReactMentions placeholder="Enter Text" users={[{
              id: '1',
              name: 'Aman Gupta',
          }, {
              id: '2',
              name: 'Parag Goyal',
          }]}  value={"Long text\n\rThree\n\rLiner\n\r@"} />
        </FlexBlock>
        
    </>
   );
});