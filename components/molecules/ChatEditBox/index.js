import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from "../../atoms"

import {  ChatAvatar, ChatInputArea } from "..";
import { StyledFlexBlock, StyledEditComment } from './styles';
import { 
    ChatTypes, 
    FlexBlockChatBorderColor, 
    FlexBlockChatBackground, 
    FlexBlockChatPadding
} from '../../../utils/constants';

const ChatEditBox = ({
    messageId,
    avatar,
    userType,
    isNew,
    children,
    onCancel,
    onSave,
    users,
    isEditLoading,
    selectedChatRoomIndex,
    chatType,
    canAddAttachments
}) => {
    const [key,setKey] = React.useState('');

    const [message, setMessage] = React.useState(children);

    const handleChange  = (event, newValue, newPlainTextValue, mentions) => {
        setMessage(newValue);
    }
    const renderLoader = (loading) => {
        if (loading  && key === messageId) {
            return <label><Spinner style={{}} size="16px" /></label>
        } else {
            return <label>Save</label>
        }
    }

    return (
        <StyledFlexBlock 
            borderColor={FlexBlockChatBorderColor[chatType]}
            background={FlexBlockChatBackground[chatType]}
            padding={FlexBlockChatPadding[chatType]}
            >
            <StyledEditComment
                key={messageId}
                author={<ChatInputArea
                    value={message}
                    onChange={handleChange}
                    users={users}
                    selectedChatRoomIndex={selectedChatRoomIndex}
                    canAddAttachments={canAddAttachments}
                />}
                avatar={chatType === ChatTypes.COMMENT ? (
                    <ChatAvatar
                        type={userType} // internal/external
                        showDot={isNew} // showDot if newNotification
                    >
                        {avatar} {/* Avatar Initials */}
                    </ChatAvatar>
                ) : null}
                actions={[
                    <Button size='small' colored='secondary' onClick={() => onCancel(messageId)}>Cancel</Button>,                    
                    <Button colored='primary' size='small' onClick={() => {
                        onSave(messageId, message);
                        setKey(messageId)
                    }}>{renderLoader(isEditLoading)}</Button>                  
                ]}
            />
        </StyledFlexBlock>
    )
}

ChatEditBox.propTypes = {
    avatar: PropTypes.string.isRequired,
    userType: PropTypes.oneOf(['internal', 'external']),
    children: PropTypes.string.isRequired,
    // flags
    isNew: PropTypes.bool, // shows dot on avatar
    // actions
    onCancel: PropTypes.func,
    onSave: PropTypes.func,
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
    })),
    isEditLoading: PropTypes.bool,
    selectedChatRoomIndex: PropTypes.number.isRequired,
    chatType: PropTypes.string,
    canAddAttachments: PropTypes.bool,
};

ChatEditBox.defaultProps = {
    userType: 'internal',
    // flags
    isNew: false,
    // actions
    onCancel: () => { },
    users: [],
    onSave: () => { },
    isEditLoading: false,
    chatType: 'comment',
    canAddAttachments: false,
};

export default ChatEditBox;