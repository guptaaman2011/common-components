import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import FlexBlock from "../../atoms/FlexBlock";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import CompareCard from ".";
import { Row } from 'antd';
import { Block, Image, IconButton } from '../../atoms';
import ExpandSvg from '../../../assets/images/expand-blue.svg'

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Compare / CompareCard", module).add("Default", () => {
  return (
    <FlexBlock>
        <CompareCard 
            propertiesUISchema={{
              "ian": {
                "type": "string",
                "uiWidget": "textWidget"
              },
              "product name": {
                "type": "string",
                "uiWidget": "textWidget"
              },
              "product thumbnail": {
                "type": "string",
                "uiWidget": "imageWidget"
              }
            }}
            itemCardProps={["ian", "product name", "product thumbnail"]}
            itemData={{ "ian": "IAN_1", "product name": "Sample product name", "product thumbnail": "" }}
            extras={null}
            removeCompareItem={() => console.log('removeCompareItem called')}
            showRemoveIcon={false}
        />
    </FlexBlock>
  );
}).add("With remove icon ", () => {
  return (
    <FlexBlock>
        <CompareCard 
            propertiesUISchema={{
              "ian": {
                "type": "string",
                "uiWidget": "textWidget"
              },
              "product name": {
                "type": "string",
                "uiWidget": "textWidget"
              },
              "product thumbnail": {
                "type": "string",
                "uiWidget": "imageWidget"
              }
            }}
            itemCardProps={["ian", "product name", "product thumbnail"]}
            itemData={{ "ian": "IAN_1", "product name": "Sample product name", "product thumbnail": "" }}
            extras={null}
            removeCompareItem={() => console.log('removeCompareItem called')}
            showRemoveIcon={true}
        />
    </FlexBlock>
  );
});

