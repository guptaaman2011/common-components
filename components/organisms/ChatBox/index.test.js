import React from "react";
import {    render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatBox from "./index";

describe("Molecule: ChatBox", () => {
  it("should render with no attachments", () => {
    const mockClickHandler = jest.fn();
    render(<ChatBox
        chatItems={[]}
        replyItems={[]}
        onSubmit={mockClickHandler}
        onSearch={mockClickHandler}
        searchText={"This is a search text"}
        onScrollFrame={mockClickHandler}
        loading={true}
        chatType={"comment"}
        users={[
            {
                id: 'id-1',
                name: 'user-1'
            }
        ]}
        addAttachment={mockClickHandler}
        attachments={[]}
        deleteAttachment={mockClickHandler}
        cancelAttachmentUpload={mockClickHandler}
        userId="id-1"
        onTapEditMessage={mockClickHandler}
        onTapDeleteMessage={mockClickHandler}
        onCancelEditMessage={mockClickHandler}
        onSaveEditMessage={mockClickHandler}
        isCreating={true}
        isEditLoading={true}
        isDeleteLoading={true}
        errorMessage="This is an error message"
        rooms={[
            {
                index: 1,
                id: 1,
                app: {
                    ref: {
                        name: "INTERNAL"
                    }
                }
            }
        ]}
        roomLabelModifier={{'INTERNAL': 'INTERNAL'}}
        currentRoom={{
            index: 1,
            id: 1,
            app: {
                code: 'pcp',
                ref: {
                    name: "INTERNAL"
                }
            }
        }}
        onRoomChange={mockClickHandler}
        onTapReply={mockClickHandler}
        onCancelReply={mockClickHandler}
        userPermissions={['pcp_view_comments', 'pcp_add_comments']}
        onTapPin={mockClickHandler}
        pinItems={[]}
        highLightedMessage="This is the highlighted message"
        prevLoading={false}
        nextLoading={false}
        repliesTo="user-2"
        onCancelPopUp={mockClickHandler}
        updateRefId={mockClickHandler}
        versionOptions={[{key: "1", value: "v1"}]}
        configs={{
            app_code: "pcp",
            config_key: "UPDATION_TIME_LIMIT",
            config_value: "5"
        }}
        headerComponent={<></>}
    />);

  });

});