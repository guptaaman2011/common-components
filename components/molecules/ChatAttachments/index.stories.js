import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import ChatAttachments from ".";
import FlexBlock from "../../atoms/FlexBlock";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Chat / ChatAttachments", module).add("Default", () => {
  return (
      <FlexBlock>
        <ChatAttachments
          attachments={[
            { name: 'sample.pdf', progress: 70 }, 
            { name: 'sample.jpg', progress: 30 },
            { name: 'sample-large-filename.ppt', progress: 60 },
            { name: 'sample.pdf', progress: 100 },
            { name: 'sample.doc', progress: 70 },
            { name: 'sample.docx', progress: 0, error: true },
            { name: 'sample.xls', progress: 100 },
            { name: 'sample.xlsx', progress: 70 },
            { name: 'sample.pptx', progress: 70 },
            { name: 'sample.png', progress: 70 },
            { name: 'sample.html', progress: 70 },
            { name: 'sample.htm', progress: 70 },
            { name: 'sample.ai', progress: 70 },
            { name: 'sample.mp4', progress: 70 },
            { name: 'sample.ods', progress: 70 },
            { name: 'sample.odt', progress: 70 }
          ]}
        />
      </FlexBlock>
  )
});

