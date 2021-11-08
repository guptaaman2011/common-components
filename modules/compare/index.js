import React from 'react';
import { CompareContextProvider } from './context';
import CompareContainer from './container/compare';
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

const Compare = ({
    compareKey, authKey, apiUrl, fetchData, transformResponse, templateId
}) => (
    <ThemeProvider theme={theme}>
        <CompareContextProvider>
            <CompareContainer
            compareKey={compareKey}
            authKey={authKey}
            apiUrl={apiUrl}
            fetchData={fetchData}
            transformResponse={transformResponse}
            templateId={templateId}
            />
        </CompareContextProvider>
    </ThemeProvider>
);

export default Compare;