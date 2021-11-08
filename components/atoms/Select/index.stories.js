import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import Select from ".";
import FlexBlock from "../../atoms/FlexBlock";
import Label from "../../atoms/Label";
import { LabelWrapper } from './styles';

const options = [{
  key: 1,
  value: 'Don Bosco'
}, {
  key: 2,
  value: 'Miami'
}, {
  key: 3,
  value: 'New York'
}];

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);


storiesOf("atoms / Select", module)
  .add("Normal Dropdown", () => {
    return (
      <>
        <Select
          options={options}
          onChange={e => console.log('Value --> ', e.value)}
          placeholder="Select"
        />
      </>
    )
  })