import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs, boolean, text, select, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";
import AttachmentCard from ".";
import FlexBlock from "../../atoms/FlexBlock";
import Label from "../../atoms/Label";

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / AttachmentCard", module).add("Default", () => {
  return (
    <>
      <FlexBlock>
        <Label>In ChatBox</Label>
        <AttachmentCard
          parent="chatItems"
          attachment={{ name: 'sample.pdf', progress: 100 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploading PDF</Label>
        <AttachmentCard
          attachment={{ name: 'sample.pdf', progress: 70 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploading JPEG</Label>
        <AttachmentCard          
          attachment={{ name: 'large-filename-sample.jpeg', progress: 70 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploaded PDF</Label>
        <AttachmentCard          
          attachment={{ name: 'large-filename-sample.pdf', progress: 100 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Failed JPG</Label>
        <AttachmentCard          
          attachment={{ name: 'sample.jpg', progress: 50, error: true }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploaded PPT</Label>
        <AttachmentCard          
          attachment={{ name: 'sample.ppt', progress: 100 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploaded DOC</Label>
        <AttachmentCard          
          attachment={{ name: 'sample.doc', progress: 100 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploaded XLS</Label>
        <AttachmentCard          
          attachment={{ name: 'sample.xls', progress: 100 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploaded DOCX</Label>
        <AttachmentCard          
          attachment={{ name: 'sample.docs', progress: 100 }}
        />
      </FlexBlock>

      <FlexBlock>
        <Label>Uploaded JPG</Label>
        <AttachmentCard          
          attachment={{ name: 'sample.jpg', progress: 100 }}
        />
      </FlexBlock>
    </>
  )
});

