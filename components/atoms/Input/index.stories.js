import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import Input from ".";
import FlexBlock from "../../atoms/FlexBlock";
import Label from "../../atoms/Label";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("atoms / Input", module)
.add("States", () => {  
  return (
    <>
      <FlexBlock>
        <Label>Enabled</Label>
        <Input placeholder="Enter Text"/>
      </FlexBlock>
      <FlexBlock>
        <Label>Focused</Label>
        <Input placeholder="Enter Text" className="on-focus"/>
      </FlexBlock>
      <FlexBlock>
        <Label>Disabled</Label>
        <Input placeholder="Enter Text" disabled/>
      </FlexBlock>
      <FlexBlock>
        <Label>Populated</Label>
        <Input value="employee@lidl.com.hk"/>
      </FlexBlock>
      <FlexBlock>
        <Label>Disabled Populated</Label>
        <Input value="employee@lidl.com.hk" disabled/>
      </FlexBlock>
      <FlexBlock>
        <Label>Error</Label>
        <Input value="employee@lidl" className="on-error"/>
      </FlexBlock>      
    </>
  );
});