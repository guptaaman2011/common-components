import React from 'react';
import PropTypes from 'prop-types';
import { getDayIfSevenDaysOld, getTime } from "../../../utils/timestamp";
import { ChatListDateLabel, ChatItem, ChatEditBox, ChatAttachments, ReplyItems } from "..";
import { LUP_SPACING_15 } from '../../../theme';

const CommentItems = ({
    commentItems,
    onTapReply,
    userId,
    onTapEditMessage,
    onTapDeleteMessage,
    onCancelEditMessage,
    onSaveEditMessage,
    isEditLoading,
    isDeleteLoading,
    selectedChatRoomIndex,
    onTapPin,
    users,
    canAddAttachments,
    checkDeletePermission,
    checkEditPermission,
    searchText,
    focusedCommentId,
    appCode,
    highLightedCommentId,
    highLightedReplyId,
    configs,
}) => {
    const [showReplies, setShowReplies] = React.useState({});

    const dateLabels = [];
    return commentItems.map(commentItem => {
        let date = getDayIfSevenDaysOld(commentItem.createdAt);
        const time = getTime(commentItem.createdAt);
        const messageCreatedAt = `${date} ${time}`;
        
        const isDateLabelAlreadyAdded = dateLabels.includes(date);
        dateLabels.push(date);

        const commentIsEditing = commentItem.isEditing;
        let commentShowReplies = showReplies[commentItem.messageId];

        return (
            <>
                {!isDateLabelAlreadyAdded &&
                    <ChatListDateLabel marginTop={LUP_SPACING_15}>{date}</ChatListDateLabel>
                }
                {commentIsEditing && !commentShowReplies && (
                    <ChatEditBox
                        {...commentItem}
                        chatType='comment'
                        users={users}
                        onCancel={onCancelEditMessage}
                        onSave={onSaveEditMessage}
                        isEditLoading={isEditLoading}
                        selectedChatRoomIndex={selectedChatRoomIndex}>
                        {commentItem.text}
                    </ChatEditBox>
                )}
                {commentShowReplies && (
                    <ReplyItems
                        commentItem={commentItem}
                        replyItems={commentItem.replyItems && commentItem.replyItems.sort((a, b) => a.createdAt - b.createdAt)}
                        selectedChatRoomIndex={selectedChatRoomIndex}
                        onTapReply={onTapReply}
                        // onTapEditMessage={onTapEditMessage}
                        onTapDeleteMessage={onTapDeleteMessage}
                        isDeleteLoading={isDeleteLoading}
                        userId={userId}
                        messageId={commentItem.id}
                        onTapPin={onTapPin}
                        isPinned={commentItem.reference && commentItem.reference.pin}
                        messageCreatedAt={messageCreatedAt}
                        reference={commentItem.reference}
                        canAddAttachments={canAddAttachments}
                        appCode={appCode}
                        highLightedReplyId={highLightedReplyId}
                        highLightedCommentId={highLightedCommentId}
                        searchText={searchText}
                        focusedCommentId={focusedCommentId}
                        users={users}
                        configs={configs}
                    />
                )}
                {!commentIsEditing && !commentShowReplies && (
                    <ChatItem
                        id={`chatItem_${commentItem.messageId}`}
                        key={commentItem.messageId}
                        {...commentItem}
                        time={time}
                        chatType='comment'
                        canEdit={checkEditPermission(commentItem.userId)}
                        canDelete={checkDeletePermission(commentItem.userId)}
                        onTapReply={onTapReply}
                        onTapEdit={onTapEditMessage}
                        onTapDelete={onTapDeleteMessage}
                        isDeleteLoading={isDeleteLoading}
                        selectedChatRoomIndex={selectedChatRoomIndex}
                        highlightedText={searchText}
                        isFocused={focusedCommentId === commentItem.messageId}
                        isPinned={commentItem.reference && commentItem.reference.pin}
                        messageId={commentItem.messageId}
                        onTapPin={onTapPin}
                        isHighLighted={highLightedCommentId === commentItem.messageId}
                        configs={configs}
                    >
                        <ChatAttachments
                            isFocused={focusedCommentId === commentItem.messageId}
                            searchText={searchText}
                            attachments={commentItem.attachments}
                            parent="chatItems"
                            appCode={appCode}
                        />
                    </ChatItem>
                )}
            </>
        )
    })
}

CommentItems.propTypes = {
    commentItems: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.array,
        author: PropTypes.author,
        userType: PropTypes.oneOf(['internal', 'external']),
        text: PropTypes.string,
        taggedUsers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
        })),
        timestamp: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        messageId: PropTypes.string,
        reference: PropTypes.shape({
            pin_id: PropTypes.string
        }),
        // flags
        isNew: PropTypes.bool,
        isEditing: PropTypes.bool,
        attachments: PropTypes.arrayOf(PropTypes.shape({}))
    })).isRequired,
    onTapPin: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })),
    onTapReply: PropTypes.func,
    onTapEditMessage: PropTypes.func,
    onTapDeleteMessage: PropTypes.func,
    onCancelEditMessage: PropTypes.func,
    onSaveEditMessage: PropTypes.func,
    isEditLoading: PropTypes.bool,
    isDeleteLoading: PropTypes.bool,
    selectedChatRoomIndex: PropTypes.number.isRequired,
    canAddAttachments: PropTypes.bool,
    checkDeletePermission: PropTypes.func,
    checkEditPermission: PropTypes.func,
    searchText: PropTypes.string,
    focusedCommentId: PropTypes.string,
    appCode: PropTypes.string,
    highLightedCommentId: PropTypes.string,
    highLightedReplyId: PropTypes.string,
    configs: PropTypes.arrayOf(PropTypes.shape({
        app_code: PropTypes.string.isRequired,
        config_key: PropTypes.string.isRequired,
        config_value: PropTypes.string.isRequired
    })),
}

CommentItems.defaultProps = {
    onTapReply: () => { },
    userId: '',
    users: [],
    onTapEditMessage: () => { },
    onTapDeleteMessage: () => { },
    onCancelEditMessage: () => { },
    onSaveEditMessage: () => { },
    isEditLoading: false,
    isDeleteLoading: false,
    canAddAttachments: false,
    checkDeletePermission: () => { },
    checkEditPermission: () => { },
    searchText: "",
    focusedCommentId: "",
    appCode: "",
    highLightedCommentId: null,
    highLightedReplyId: null,
    configs:[],
}

export default CommentItems;