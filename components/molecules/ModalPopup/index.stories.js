import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { LUP_MAIN_FONT_SIZE12, theme, LUP_MAIN_FONT_BOLD600, LUP_SPACING_22, LUP_MAIN_FONT_NORMAL, LUP_BASE_GREY_DARKER } from "../../../theme";
import ModalPopup from ".";
import { Text, Block, FormSpace } from '../../atoms';
import InputField from '../InputField';
import { BodyWrapper } from './styles';

const ThemeProviderDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / ModalPopup", module).add("Modal with Text", () => {
  return (
    <ModalPopup
    modalTitle = {text('modalTitle','Title')}
    children = {<BodyWrapper><Text fontWeight={LUP_MAIN_FONT_NORMAL} color={LUP_BASE_GREY_DARKER} lineHeight={LUP_SPACING_22}>Are you sure you want to perform this task? This is what will happen if you do.</Text></BodyWrapper>}
    isModalVisible
    onOk={()=>{}}
    onCancel={()=>{}}
    okText = {text('okText','Text')}
    cancelText = {text('cancelText','Text')}
    centered
    modalWidth='340px'
    />
  );
}).add("Modal with inputs", () => {
  const children = (
    <BodyWrapper>
      <Block style={{ display: 'flex', flexDirection: 'column' }}>
        <InputField  label="Label" placeholder="Enter Text" />
        <FormSpace />
        <InputField label="Label" placeholder="Enter Text" />
      </Block>
    </BodyWrapper>
  )
  return (
    <ModalPopup
    modalTitle = {text('modalTitle','Title')}
    isModalVisible
    onOk={()=>{}}
    onCancel={()=>{}}
    okText = {text('okText','Text')}
    cancelText = {text('cancelText','Text')}
    centered
    modalWidth='340px'
    children={children}
    />
  );
});
