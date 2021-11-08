import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ConfirmModal from ".";

const ThemeProviderDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / ConfirmModal", module).add("Default", () => {
  return (
    <ConfirmModal
    modalTitle = 'Title'
    confirmMessageContent = 'Are you sure you want to delete this comparison?'
    isModalVisible
    onOk={()=>{}}
    onCancel={()=>{}}
    okText = 'DELETE'
    cancelText = "DON'T DELETE"
    centered
    modalWidth='340px'
    />
  );
});
