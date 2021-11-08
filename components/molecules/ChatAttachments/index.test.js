import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatAttachments from '.';


describe('molecules: ChatAttachments', () => {

  it('should render with attachments length less than 10', () => {
    const isFocused = true;
    const appCode = "pcp";
    const parent = "chatItems";
    const mockClickHandler = jest.fn();    
    const searchText = "file";
    const attachments = [{
        name: 'file1.png',
        progress: 80,
    }]
    render(<ChatAttachments 
    appCode={appCode} 
    parent={parent} 
    searchText={searchText} 
    isFocused={isFocused} 
    attachments={attachments} 
    setFileCountError={mockClickHandler}
    deleteAttachment={mockClickHandler}
    cancelAttachmentUpload={mockClickHandler}
    />)
  });

  it('should render with attachments length not less than 10', () => {
    const isFocused = true;
    const appCode = "pcp";
    const parent = "chatItems";
    const mockClickHandler = jest.fn();    
    const searchText = "file";
    const attachments = [{
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, {
        name: 'file1.png',
        progress: 80,
    }, ]
    render(<ChatAttachments 
    appCode={appCode} 
    parent={parent} 
    searchText={searchText} 
    isFocused={isFocused} 
    attachments={attachments} 
    setFileCountError={mockClickHandler}
    deleteAttachment={mockClickHandler}
    cancelAttachmentUpload={mockClickHandler}
    />)

  });
});

