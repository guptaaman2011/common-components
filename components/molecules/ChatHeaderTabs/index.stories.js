import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatHeaderTabs from ".";

const ThemeProviderDecorator = storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

const rooms = [{
    label: 'INTERNAL',
    value: '1234',
    count: 25,
    index: 0,
    id: '1234'
}, {
    label: 'TALK TO BUYER',
    value: '1235',
    count: 30,
    index: 1,
    id: '1235'
}]

addDecorator(ThemeProviderDecorator);


storiesOf("molecules / Chat / ChatHeaderTabs", module)
    .add("Default", () => {
        return (
            <ChatHeaderTabs
                tabs={rooms}
                selectedChatRoom={{
                    label: 'INTERNAL',
                    value: '1234',
                    count: 25,
                    index: 0,
                    id: '1234'
                }}
            />
        )
    })
    .add("ChatHeaderTabs External", () => {
        return (
            <ChatHeaderTabs
                tabs={rooms}
                selectedChatRoom={{
                    label: 'TALK TO BUYER',
                    value: '1235',
                    count: 30,
                    index: 1,
                    id: '1235'
                }}
            />
        )
    })

