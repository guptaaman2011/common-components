import React from 'react';
import PropTypes from 'prop-types';
import { CommentItems, ReplyItems } from '../index';
import { ChatTypes } from '../../../utils/constants';

const ChatItems = ({
    chatItems,
    replyItems,
    chatType,
    onTapReply,
    userId,
    onTapEditMessage,
    onTapDeleteMessage,
    onCancelEditMessage,
    onSaveEditMessage,
    isEditLoading,
    isDeleteLoading,
    users,
    selectedChatRoomIndex,
    searchText,
    focusedCommentId,
    onTapPin,
    pinItems,
    checkEditPermission,
    checkDeletePermission,
    canAddAttachments,
    appCode,
    highLightedCommentId,
    highLightedReplyId,
    configs
}) => {
    return (
        <>
            {chatType === ChatTypes.COMMENT ?
                (<CommentItems
                    commentItems={chatItems}
                    onTapReply={onTapReply}
                    userId={userId}
                    users={users}
                    onTapEditMessage={onTapEditMessage}
                    onTapDeleteMessage={onTapDeleteMessage}
                    onCancelEditMessage={onCancelEditMessage}
                    onSaveEditMessage={onSaveEditMessage}
                    isEditLoading={isEditLoading}
                    isDeleteLoading={isDeleteLoading}
                    selectedChatRoomIndex={selectedChatRoomIndex}
                    checkDeletePermission={checkDeletePermission}
                    checkEditPermission={checkEditPermission}
                    canAddAttachments={canAddAttachments}
                    onTapPin={onTapPin}
                    pinItems={pinItems}
                    searchText={searchText}
                    focusedCommentId={focusedCommentId}
                    appCode={appCode}
                    highLightedCommentId={highLightedCommentId}
                    highLightedReplyId={highLightedReplyId}
                    configs={configs}
                />) :
                (<ReplyItems
                    replyItems={replyItems}
                    userId={userId}
                    checkDeletePermission={checkDeletePermission}
                    checkEditPermission={checkEditPermission}
                    canAddAttachments={canAddAttachments}
                    onTapPin={onTapPin}
                    selectedChatRoomIndex={selectedChatRoomIndex}
                    onTapDeleteMessage={onTapDeleteMessage}
                    isDeleteLoading={isDeleteLoading}
                    onTapEditMessage={onTapEditMessage}
                    onCancelEditMessage={onCancelEditMessage}
                    onSaveEditMessage={onSaveEditMessage}
                    isEditLoading={isEditLoading}
                    appCode={appCode}
                    highLightedCommentId={highLightedCommentId}
                    highLightedReplyId={highLightedReplyId}
                    focusedCommentId={focusedCommentId}
                    searchText={searchText}
                    configs={configs}
                // commentItems={chatItems}
                />)
            }
        </>
    )
}

ChatItems.propTypes = {
    chatItems: PropTypes.arrayOf({
        avatar: PropTypes.string,
        author: PropTypes.author,
        userType: PropTypes.oneOf(['internal', 'external']),
        text: PropTypes.string,
        timestamp: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        messageId: PropTypes.string,
        reference: PropTypes.objectOf({
            pin_id: PropTypes.string
        }),
        taggedUsers: PropTypes.arrayOf({
            id: PropTypes.string,
            name: PropTypes.string,
        }),
        // flags
        isNew: PropTypes.bool,
        isEditing: PropTypes.bool,
        attachments: PropTypes.arrayOf({})
    }),
    replyItems: PropTypes.arrayOf({
        avatar: PropTypes.string,
        author: PropTypes.author,
        userType: PropTypes.oneOf(['internal', 'external']),
        text: PropTypes.string,
        timestamp: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        // flags
        isNew: PropTypes.bool,
        isEditing: PropTypes.bool,
        attachments: PropTypes.arrayOf({})
    }),
    chatType: PropTypes.string,
    users: PropTypes.arrayOf({
        id: PropTypes.string,
        name: PropTypes.string,
    }),
    onTapReply: PropTypes.func,
    userId: PropTypes.string,
    onTapEditMessage: PropTypes.func,
    onTapDeleteMessage: PropTypes.func,
    onCancelEditMessage: PropTypes.func,
    onSaveEditMessage: PropTypes.func,
    isEditLoading: PropTypes.bool,
    isDeleteLoading: PropTypes.bool,
    selectedChatRoomIndex: PropTypes.number.isRequired,
    searchText: PropTypes.string,
    focusedCommentId: PropTypes.string,
    onTapPin: PropTypes.func,
    pinItems: PropTypes.array,
    checkDeletePermission: PropTypes.func,
    checkEditPermission: PropTypes.func,
    canAddAttachments: PropTypes.bool,
    appCode: PropTypes.string,
    highLightedCommentId: PropTypes.string,
    highLightedReplyId: PropTypes.string,
    configs: PropTypes.arrayOf(PropTypes.shape({
        app_code: PropTypes.string.isRequired,
        config_key: PropTypes.string.isRequired,
        config_value: PropTypes.string.isRequired
    })),
}

ChatItems.defaultProps = {
    chatItems: PropTypes.arrayOf(PropTypes.shape({})),
    replyItems: PropTypes.arrayOf(PropTypes.shape({})),
    chatType: 'comment',
    onTapReply: () => { },
    userId: '',
    onTapEditMessage: () => { },
    onTapDeleteMessage: () => { },
    onCancelEditMessage: () => { },
    onSaveEditMessage: () => { },
    isEditLoading: false,
    isDeleteLoading: false,
    onTapPin: () => { },
    pinItems: [],
    users: [],
    configs: [],
    checkDeletePermission: () => { },
    checkEditPermission: () => { },
    canAddAttachments: false,
    searchText: "",
    focusedCommentId: "",
    appCode: "",
    highLightedCommentId: null,
    highLightedReplyId: null
}

export default ChatItems;