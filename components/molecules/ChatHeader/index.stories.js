import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { LUP_SPACING_4, LUP_SPACING_6, theme } from "../../../theme";
import { StyledSelect } from './styles';
import ChatHeader from ".";
import CaredDownBlack from "../../../assets/images/caret-down-black.svg";
import { IconButton, Select, Label } from '../../atoms';

const ThemeProviderDecorator = storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

storiesOf("molecules / Chat / ChatHeader", module)
    .add("Default", () => {
        return (
            <ChatHeader
                headerText='Comments'
                onClose={() => console.log('Close button clicked')}
            />
        )
    })
    .add("ChatHeader without Close Icon", () => {
        return (
            <ChatHeader
                headerText='Comments'
                showCloseIcon={false}
            />
        )
    })

