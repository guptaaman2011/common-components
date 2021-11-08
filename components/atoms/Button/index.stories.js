import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import Button from ".";
import FlexBlock from "../../atoms/FlexBlock";
import Block from "../../atoms/Block";
import Label from "../../atoms/Label";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("atoms / Button", module)
  .add("Default Blue Button", () => {
    return (
      <>
      <Block>
        <Label>Primary</Label>
        <FlexBlock>
          <Label>Primary size</Label>
          <Button size="default" colored="primary">Primary</Button> 
        </FlexBlock>
        <FlexBlock>
          <Label>Small size</Label>
          <Button size="small" colored="primary">Primary</Button> 
        </FlexBlock>
        <FlexBlock>
          <Label>Smaller size</Label>
          <Button size="smaller" colored="primary">Primary</Button> 
        </FlexBlock>
        <FlexBlock>
          <Label>Disabled Primary size</Label>
          <Button size="default" colored="primary" disabled={true}>Primary</Button> 
        </FlexBlock>
      </Block>
      <Block>
        <Label>Secondary</Label>
        <FlexBlock>
          <Label>Default size</Label>
          <Button size="default" colored="secondary">Secondary</Button> 
        </FlexBlock>
        <FlexBlock>
          <Label>Small size</Label>
          <Button size="small" colored="secondary">Secondary</Button> 
        </FlexBlock>
        <FlexBlock>
          <Label>Smaller size</Label>
          <Button size="smaller" colored="secondary">Secondary</Button> 
        </FlexBlock>
        <FlexBlock>
          <Label>Disabled Secondary size</Label>
          <Button size="default" colored="secondary" disabled={true}>Secondary</Button> 
        </FlexBlock>
      </Block>
    </>
    )
  })
