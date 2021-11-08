import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import Radio from ".";

const ThemeProviderDecorator = storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);


storiesOf("atoms / Radio", module)
    .add("Normal Radio", () => {
        return (
            <>
                <Radio label="Unclicked" /><br />
                <Radio defaultChecked label="Clicked" /><br />
                <Radio disabled label="Disabled" /><br />
                <Radio defaultChecked disabled label="Disabled checked" /><br />
            </>
        )
    })