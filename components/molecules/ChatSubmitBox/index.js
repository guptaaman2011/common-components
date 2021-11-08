import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Text, Block } from "../../atoms"
import { ChatInputArea, ChatAttachments } from ".."
import ChatSubmitIconInternal from "../../../assets/images/icons/chatbox/send_internal.svg"
import ChatSubmitIconExternal from "../../../assets/images/icons/chatbox/send_external.svg"
import { StyleChatSubmitBox, StyleChatSubmitIcon, StyledBlock, StyledRow } from "./styles";
import { Row } from 'antd';
import {
    LUP_MAIN_FONT_SIZE12, LUP_BASE_GREY_DARKER, LUP_MAIN_FONT_SIZE10, LUP_MAIN_FONT_BOLD600, LUP_SPACING_12,
    LUP_SPACING_15, LUP_SPACING_30
} from "../../../theme";

const ChatSubmitBox = ({
    isCreating,
    onSubmit,
    users,
    addAttachment,
    attachments,
    deleteAttachment,
    cancelAttachmentUpload,
    selectedChatRoomIndex,
    canAddAttachments,
    placeholder,
    boxLabel,
}) => {
    const [message, setMessage] = React.useState("");
    const [fileCountError, setFileCountError] = React.useState("");
    const [messageLengthError, setMessageLengthError] = React.useState("");

    useEffect(() => {
        if (message.length > 500) {
            setMessageLengthError("Maximum 500 characters allowed")
        } else {
            setMessageLengthError('')
        }
    }, [message]);

    useEffect(() => {
        setMessage('');
        setMessageLengthError('')
        attachments.forEach(
            attachment => {
                console.log(attachment)
                if (attachment.progress === 100 || attachment.error) {
                    deleteAttachment(attachment);
                } else {
                    cancelAttachmentUpload(attachment);
                }
            }
        )
    }, [selectedChatRoomIndex]);

    const handleChange = (event, newValue, newPlainTextValue, mentions) => {
        setMessage(newValue);
    }
    const isDisabled = () => {
        let disabled = true;
        if (message.length) {
            disabled = false;
        }
        if (attachments.length > 0) {
            for (let index = 0; index < attachments.length; index++) {
                let attachment = attachments[index];
                if (attachment.progress !== 100 && !attachment.error) {
                    disabled = true;
                    return disabled;
                }
                disabled = false;
            }
        }
        if (message.length > 500) {
            disabled = true;
        }
        return disabled;
    }

    return (
        <StyleChatSubmitBox  >
            <StyledBlock attachmentsLength={attachments.length} boxLabel={boxLabel}>
                {boxLabel && <Block style={{ height: LUP_SPACING_15, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text fontSize={LUP_MAIN_FONT_SIZE10} lineHeight={LUP_SPACING_12} fontWeight={LUP_MAIN_FONT_BOLD600} color={LUP_BASE_GREY_DARKER}>{boxLabel}</Text>
                </Block>}
                <StyledRow>
                    <ChatInputArea
                        value={message}
                        users={users}
                        onChange={handleChange}
                        addAttachment={addAttachment}
                        attachments={attachments}
                        setFileCountError={setFileCountError}
                        messageLengthError={messageLengthError}
                        selectedChatRoomIndex={selectedChatRoomIndex}
                        canAddAttachments={canAddAttachments}
                        placeholder={placeholder}
                    />
                </StyledRow>
                {messageLengthError && <Row>
                    <Text color="#E00000" fontSize={LUP_MAIN_FONT_SIZE12}>{messageLengthError}</Text>
                </Row>}
                {fileCountError && <Row>
                    <Text color="#E00000" fontSize={LUP_MAIN_FONT_SIZE12}>{fileCountError}</Text>
                </Row>}
                {attachments && attachments.length > 0 &&
                    <Row style={{ padding: '2px' }}>
                        <ChatAttachments
                            attachments={attachments}
                            deleteAttachment={deleteAttachment}
                            setFileCountError={setFileCountError}
                            cancelAttachmentUpload={cancelAttachmentUpload}
                        />
                    </Row>}
            </StyledBlock>
            <StyleChatSubmitIcon>
                <IconButton
                    size={LUP_SPACING_30}
                    src={selectedChatRoomIndex % 2 !== 0 ? ChatSubmitIconExternal : ChatSubmitIconInternal}
                    onClick={() => {
                        if (!isDisabled()) {
                            setMessage("")
                            onSubmit(message, attachments)
                        }
                    }}
                />
            </StyleChatSubmitIcon>
        </StyleChatSubmitBox>
    )
}

ChatSubmitBox.propTypes = {
    isCreating: PropTypes.bool,
    onSubmit: PropTypes.func,
    addAttachment: PropTypes.func,
    attachments: PropTypes.arrayOf({}),
    deleteAttachment: PropTypes.func,
    cancelAttachmentUpload: PropTypes.func,
    users: PropTypes.arrayOf({
        id: PropTypes.string,
        name: PropTypes.string,
    }),
    selectedChatRoomIndex: PropTypes.number.isRequired,
    canAddAttachments: PropTypes.bool,
    placeholder: PropTypes.string,
}

ChatSubmitBox.defaultProps = {
    isCreating: false,
    onSubmit: () => { },
    users: [],
    addAttachment: () => { },
    attachments: [],
    deleteAttachment: () => { },
    cancelAttachmentUpload: () => { },
    canAddAttachments: false,
    placeholder: "Add Comment...",
}



export default ChatSubmitBox;