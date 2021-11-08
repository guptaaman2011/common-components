import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import Checkbox from ".";
import { Block, Label } from '../../atoms';

const ThemeProviderDecorator = storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);


storiesOf("atoms / Checkbox", module)
    .add("Normal Checkbox", () => {
        return (
            <>
                <Block style={{ padding: '16px' }}>
                    <Label>List Header</Label><br />
                    <Checkbox label="Unclicked" /><br />
                    <Checkbox defaultChecked label="Clicked" /><br />
                    <Checkbox disabled label="Disabled" /><br />
                    <Checkbox defaultChecked disabled label="Disabled checked" /><br />
                    <Checkbox label="Partially clicked" indeterminate /><br />
                </Block>
                <Block style={{ padding: '16px' }}>
                    <Label>List Item</Label><br />
                    <Checkbox subLabel="Unclicked" /><br />
                    <Checkbox defaultChecked subLabel="Clicked" /><br />
                    <Checkbox disabled subLabel="Disabled" /><br />
                    <Checkbox defaultChecked disabled subLabel="Disabled checked" /><br />
                    <Checkbox subLabel="Partially clicked" indeterminate /><br />
                </Block>
                
            </>
        )
    })