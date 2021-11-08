import React from "react";
import {    render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatInputArea from "./index";

describe("Molecule: ChatInputArea", () => {
  it("should render Internal as selected header tab", () => {
    const mockClickHandler = jest.fn();
    const { container}  = render(<ChatInputArea
      placeholder="This is a sample message"
      value="This is an actual message"
      users={[
        {
            id: 'id-1',
            name: 'user-123',
        }, {
            id: 'id-2',
            name: 'user-234'
        }
      ]}
      attachments={[]}
      addAttachment={mockClickHandler}
      setFileCountError={mockClickHandler}
      messageLengthError="Message length exceeded"
      selectedChatRoomIndex={1}
      canAddAttachments={true}
      onChange={mockClickHandler}
    />);
    
  });

  it('should render without addAttachments props', () => {
   const mockClickHandler = jest.fn();
    const { container}  = render(<ChatInputArea
      placeholder="This is a sample message"
      value="This is an actual message"
      users={[
        {
            id: 'id-1',
            name: 'user-123',
        }, {
            id: 'id-2',
            name: 'user-234'
        }
      ]}
      attachments={[]}
      addAttachment={mockClickHandler}
      setFileCountError={mockClickHandler}
      messageLengthError="Message length exceeded"
      selectedChatRoomIndex={1}
      canAddAttachments={false}
      onChange={mockClickHandler}
    />);
    });
});