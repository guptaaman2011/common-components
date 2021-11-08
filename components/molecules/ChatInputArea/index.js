import React from 'react';
import PropTypes from 'prop-types';
import RichTextIconInternal from '../../../assets/images/icons/chatbox/input_richtext_internal.svg';
import AttachmentIconInternal from '../../../assets/images/icons/chatbox/input_attachment_internal.svg';
import RichTextIconExternal from '../../../assets/images/icons/chatbox/input_richtext_external.svg';
import AttachmentIconExternal from '../../../assets/images/icons/chatbox/input_attachment_external.svg';
import { IconButton,  ChatReactMentions } from '../../atoms';
import {  StyledChatAction, StyledChatInputTextArea, StyledBlock } from './styles'

const ChatInputArea = ({ 
    placeholder, 
    value, 
    users,
    onChange, 
    attachments, 
    addAttachment, 
    setFileCountError, 
    messageLengthError,
    selectedChatRoomIndex,
    canAddAttachments,
}) => {   
    const attachmentUploaderRef = React.createRef();
    return (
        <>
        <StyledChatInputTextArea messageLengthError={messageLengthError} index={selectedChatRoomIndex%2 !== 0}>
                <ChatReactMentions
                    users={users}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />

                <StyledBlock>
                    {canAddAttachments &&
                    <StyledChatAction>
                        <IconButton 
                            src={selectedChatRoomIndex%2 !== 0 ? AttachmentIconExternal : AttachmentIconInternal}
                            onClick={() => {
                                const { current } = attachmentUploaderRef;
                                current.click();
                            }} 
                            style={{ height: '16px', display: 'inline-flex' }}
                        />
                        <input
                            ref={attachmentUploaderRef}
                            id="inputRef"
                            type="file"
                            multiple
                            accept=".doc,.docx,.pdf,.ppt,.jpg,.jpeg,.png,.xls,.xlsx,.htm,.html,.odt,.ods,.pptx,.txt,.ai,.mp4"
                            style={{
                            display: 'none',
                            }}
                            onChange={() => {
                                const { current } = attachmentUploaderRef;
                                const { files } = current;
                                if (attachments.length + files.length <= 10 && files && files.length >= 1) {
                                    setFileCountError('');
                                    files.forEach(file => addAttachment(file));
                                } else if(attachments.length + files.length > 10) {
                                    setFileCountError("Maximum 10 files allowed");
                                } 
                                current.value = '';
                            }}
                        />
                    </StyledChatAction>}
                    <StyledChatAction><IconButton src={selectedChatRoomIndex%2 !== 0 ? RichTextIconExternal : RichTextIconInternal} 
                    style={{ height: '16px', display: 'inline-flex' }}
                    /></StyledChatAction>
                </StyledBlock>

        </StyledChatInputTextArea>
        </>
    )
}

ChatInputArea.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    attachments: PropTypes.arrayOf({}), 
    addAttachment: PropTypes.func, 
    setFileCountError: PropTypes.func, 
    messageLengthError: PropTypes.string,
    users: PropTypes.arrayOf({
        id: PropTypes.string,
        name: PropTypes.string,
    }),
    selectedChatRoomIndex: PropTypes.number.isRequired,
    canAddAttachments: PropTypes.bool,
}

ChatInputArea.defaultProps = {
    value: "",
    onChange: () => {},
    placeholder: "Add Comment...",
    attachments: [], 
    addAttachment: () => {}, 
    setFileCountError: () => {}, 
    messageLengthError: "",
    users: [],
    canAddAttachments: false,
}

export default ChatInputArea;