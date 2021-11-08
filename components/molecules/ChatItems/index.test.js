import React from "react";
import {    render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatItems from "./index";

describe("Molecule: ChatItems", () => {
  it("should render ", () => {
    const mockClickHandler = jest.fn();
    render(<ChatItems
      chatItems={[
        {
            avatar: "Sample User",
            author:  "Sample User",
            userType: "internal",
            text: "This is  a chat item",
            timestamp: new Date().getTime(),
            createdAt: new Date().getTime(),
            messageId: "1",
            reference: {
                pin_id: "1",
            },
            taggedUsers: [{
                id: "id-1",
                name: "user-12",
            }],
            isNew: true,
            isEditing: false,
            attachments:[],
        }
      ]}
      replyItems={[]}
      chatType="comment"
      users={[{
          id: 'id-1',
          name: 'user-1',
      }, {
          id: 'id-2',
          name: 'user-2'
      }]}
      onTapReply={mockClickHandler}
      userId="id-1"
      onTapEditMessage={mockClickHandler}
      onTapDeleteMessage={mockClickHandler}
      onCancelEditMessage={mockClickHandler}
      onSaveEditMessage={mockClickHandler}
      isEditLoading={true}
      isDeleteLoading={false}
      selectedChatRoomIndex={1}
      searchText="This is comment"
      focusedCommentId="189"
      onTapPin={mockClickHandler}
      pinItems={[]}
      checkDeletePermission={mockClickHandler}
      checkEditPermission={mockClickHandler}
      canAddAttachments={true}
      appCode="pcp"
      highLightedCommentId="189"
      highLightedReplyId="1"
      configs={[{
        app_code: "pcp",
        config_key: "UPDATION_TIME_LIMIT",
        config_value: "5"
      }]}
    />);
    
  });
});