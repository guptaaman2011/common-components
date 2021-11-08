import React from "react";
import {    render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatSubmitBox from "./index";

describe("Molecule: ChatSubmitBox", () => {
  it("should render with no attachments", () => {
    const mockClickHandler = jest.fn();
    render(<ChatSubmitBox
      isCreating = {true}
      onSubmit={mockClickHandler}
      users={[
          {
              id: 'id-1',
              name: 'user-1'
          },
          {
              id: 'id-2',
              name: 'user-2'
          }
      ]}
      addAttachment={mockClickHandler}
      attachments={[]}
      deleteAttachment={mockClickHandler}
      cancelAttachmentUpload={mockClickHandler}
      selectedChatRoomIndex="2"
      canAddAttachments={true}
      placeholder="This is a  placeholder text"
      boxLabel="This is a box label"
    />);
  });

  it("should render with attachments", () => {
    const mockClickHandler = jest.fn();
    render(<ChatSubmitBox
      isCreating = {true}
      onSubmit={mockClickHandler}
      users={[
          {
              id: 'id-1',
              name: 'user-1'
          },
          {
              id: 'id-2',
              name: 'user-2'
          }
      ]}
      addAttachment={mockClickHandler}
      attachments={[{
          id: 1,
          progress: 80,
          name: 'file1.png',
          error: new Error("Not uploaded")
      }]}
      deleteAttachment={mockClickHandler}
      cancelAttachmentUpload={mockClickHandler}
      selectedChatRoomIndex="2"
      canAddAttachments={true}
      placeholder="This is a  placeholder text"
      boxLabel="This is a box label"
    />);
  });


});