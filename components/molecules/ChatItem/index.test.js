import React from "react";
import {    render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatItem from "./index";

describe("Molecule: ChatItem", () => {
  it("should render ", () => {
    const mockClickHandler = jest.fn();
    render(<ChatItem
      messageId="1"     
      avatar={["p"]}
      author="Sample User"
      time={new Date().toISOString()}
      text="This is a sample message"
      taggedUsers={[{
        id: "id-1",
        name: "user-1"
      }, {
        id: "id-2",
        name: "user-23",
      }]}
      userType="internal"
      isNew={true}
      isPinned={true}
      canEdit={true}
      canDelete={true}
      isReply={false}
      isFocused={false}
      onTapPin={mockClickHandler}
      onTapEdit={mockClickHandler}
      onTapDelete={mockClickHandler}
      onTapReply={mockClickHandler}
      isDeleteLoading={true}
      selectedChatRoomIndex={1}
      chatType="comments"
      updatedAt={new Date().getTime()}
      highlightedText="sample"
      isHighLighted={false}
      configs={[
          {
              app_code: 'pcp',
              config_key: 'UPDATION_TIME_LIMIT',
              config_value: "5" 
          }
      ]}
    />);
  });
});