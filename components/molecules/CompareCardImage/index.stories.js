import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import FlexBlock from "../../atoms/FlexBlock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import CompareCardImage from ".";
import { Row } from 'antd';
import { Block, Image, IconButton } from '../../atoms';
import ExpandSvg from '../../../assets/images/expand-blue.svg'

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Compare / CompareCardImage", module).add("Default", () => {
  return (
    <FlexBlock>
        <CompareCardImage 
            source={null}
        />
    </FlexBlock>
  );
});

