import React from 'react';
import PropTypes from 'prop-types';
import { getDayIfSevenDaysOld, getTime } from "../../../utils/timestamp";
import { ChatItem, ChatEditBox, ChatAttachments, ChatListDateLabel } from "..";
import { ChatTypes } from '../../../utils/constants';
import { LUP_SPACING_15 } from '../../../theme';

const ReplyItems = ({
    commentItem,
    replyItems,
    selectedChatRoomIndex,
    onTapPin,
    onTapReply,
    onTapDeleteMessage,
    isDeleteLoading,
    userId,
    onTapEditMessage,
    onCancelEditMessage,
    onSaveEditMessage,
    isEditLoading,
    checkDeletePermission,
    checkEditPermission,
    canAddAttachments,
    appCode,
    highLightedReplyId,
    highLightedCommentId,
    searchText,
    focusedCommentId,
    users,
    configs
}) => {
    const dateLabels = [];
    return replyItems.map(replyItem => {
        let date = getDayIfSevenDaysOld(replyItem.createdAt);
        const time = getTime(replyItem.createdAt);

        const isDateLabelAlreadyAdded = dateLabels.includes(date);
        dateLabels.push(date);

        const commentIsEditing = replyItem.isEditing;

        return (
            <>
                {!isDateLabelAlreadyAdded &&
                    <ChatListDateLabel marginTop={LUP_SPACING_15}>{date}</ChatListDateLabel>
                }
                {commentIsEditing && (
                    <ChatEditBox
                        {...replyItem}
                        chatType='comment'
                        users={users}
                        onCancel={onCancelEditMessage}
                        onSave={onSaveEditMessage}
                        isEditLoading={isEditLoading}
                        selectedChatRoomIndex={selectedChatRoomIndex}>
                        {replyItem.text}
                    </ChatEditBox>
                )}
                {!commentIsEditing && (
                    <ChatItem
                        id={`chatItem_${replyItem.messageId}`}
                        key={replyItem.messageId}
                        {...replyItem}
                        time={time}
                        chatType={replyItem.replyItems && replyItem.replyItems.length ? ChatTypes.COMMENTWITHREPLIES : ChatTypes.REPLY}
                        canEdit={checkEditPermission(replyItem.userId) && (!replyItem.replyItems || !replyItem.replyItems.length)}
                        canDelete={checkDeletePermission(replyItem.userId) && (!replyItem.replyItems || !replyItem.replyItems.length)}
                        onTapReply={onTapReply}
                        onTapEdit={onTapEditMessage}
                        onTapDelete={onTapDeleteMessage}
                        isDeleteLoading={isDeleteLoading}
                        selectedChatRoomIndex={selectedChatRoomIndex}
                        highlightedText={searchText}
                        isFocused={focusedCommentId === replyItem.messageId}
                        isPinned={replyItem.reference && replyItem.reference.pin}
                        messageId={replyItem.messageId}
                        onTapPin={onTapPin}
                        isHighLighted={highLightedReplyId === replyItem.messageId || highLightedCommentId === replyItem.messageId}
                        canAddAttachments={canAddAttachments}
                        configs={configs}
                    >
                        <ChatAttachments
                            attachments={replyItem.attachments}
                            parent="chatItems"
                            appCode={appCode}
                        />
                    </ChatItem>
                )}
            </>
        )
    })
}

ReplyItems.propTypes = {
    commentItem: PropTypes.shape({
        avatar: PropTypes.string,
        author: PropTypes.author,
        userType: PropTypes.oneOf(['internal', 'external']),
        text: PropTypes.string,
        timestamp: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        // flags
        isNew: PropTypes.bool,
        isEditing: PropTypes.bool,
        messageId: PropTypes.string,
        reference: PropTypes.objectOf({
            pin_id: PropTypes.string
        }),
    }),
    replyItems: PropTypes.arrayOf({
        avatar: PropTypes.string,
        author: PropTypes.author,
        userType: PropTypes.oneOf(['internal', 'external']),
        text: PropTypes.string,
        timestamp: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        messageId: PropTypes.string,
        reference: PropTypes.objectOf({
            pin_id: PropTypes.string
        }),
        // flags
        isNew: PropTypes.bool,
        isEditing: PropTypes.bool,
    }).isRequired,
    // actions
    onTapEdit: PropTypes.func,
    onTapDelete: PropTypes.func,
    onTapReply: PropTypes.func,
    onTapPin: PropTypes.func,
    //
    selectedChatRoomIndex: PropTypes.number.isRequired,
    checkDeletePermission: PropTypes.func,
    checkEditPermission: PropTypes.func,
    canAddAttachments: PropTypes.bool,
    appCode: PropTypes.string,
    highLightedReplyId: PropTypes.string,
    highLightedCommentId: PropTypes.string,
    configs: PropTypes.arrayOf(PropTypes.shape({
        app_code: PropTypes.string.isRequired,
        config_key: PropTypes.string.isRequired,
        config_value: PropTypes.string.isRequired
    })),
}

ReplyItems.defaultProps = {
    commentItem: null,
    configs: [],
    onTapEdit: () => { },
    onTapDelete: () => { },
    onTapReply: () => { },
    onTapPin: () => { },
    checkDeletePermission: () => { },
    checkEditPermission: () => { },
    canAddAttachments: false,
    appCode: "",
    highLightedCommentId: null,
    highLightedReplyId: null
}
export default ReplyItems;