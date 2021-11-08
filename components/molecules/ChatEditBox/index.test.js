import React from "react";
import {   fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatEditBox from "./index";

describe("Molecule: ChatEditBox", () => {
  it("should render", () => {
    const mockClickHandler = jest.fn();
    const {container}  = render(<ChatEditBox chatType="comment" 
    userType="internal" 
    isNew={true}  
    avatar="User Abcd" 
    canAddAttachments={true}
    isEditLoading={true}
    onSave={mockClickHandler}
    onCancel={mockClickHandler}
    users={[{
        id: '1',
        name: 'dummyUser1',
    }, {
        id: '2',
        name: 'dummyUser2'
    }]}
    selectedChatRoomIndex={3}
    messageId={2}>This is a comment.</ChatEditBox>);

    expect(container).toBeInTheDocument();
  });


});
