import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AttachmentCard from '.';


describe('molecules: AttachmentCard', () => {

  it('should render with props', () => {
    const attachment = {
        name: 'file1.png',
        progress: 80,
    };
    const parent = "chatItems";
    const searchText = "file";
    const isFocused = true;
    const appCode = "pcp";
    render(<AttachmentCard appCode={appCode} parent={parent} searchText={searchText} isFocused={isFocused} attachment={attachment} />)
  });

  it('rendering the component with parent not equal to chatItems', () => {
    const attachment = {
        name: 'file1.png',
        progress: 80,
    };

    const mockClickHandler = jest.fn();    
    const parent = "chatAttach";
    const searchText = "file";
    const isFocused = true;
    const appCode = "pcp";
     render(<AttachmentCard appCode={appCode} parent={parent} searchText={searchText} isFocused={isFocused} attachment={attachment} cancelAttachmentUpload={mockClickHandler} deleteAttachment={mockClickHandler}/>)
  });

  it('rendering the component with error', () => {
    const attachment = {
        name: 'file1.png',
        progress: 80,
        error: "Error in uploading the attachment"
    };

    const mockClickHandler = jest.fn();    
    const parent = "chatAttach";
    const searchText = "file";
    const isFocused = true;
    const appCode = "pcp";
     render(<AttachmentCard appCode={appCode} parent={parent} searchText={searchText} isFocused={isFocused} attachment={attachment} cancelAttachmentUpload={mockClickHandler} deleteAttachment={mockClickHandler}/>)
  });
});

