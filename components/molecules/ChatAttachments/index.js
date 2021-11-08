import React from 'react';
import PropTypes from 'prop-types';
import { AttachmentCard } from '..';
import {StyledBlock } from './styles';

const ChatAttachments = ({ 
    attachments,
    searchText,
    deleteAttachment, 
    setFileCountError, 
    cancelAttachmentUpload, 
    parent,
    appCode,
    isFocused
}) => {  
    return (
        <StyledBlock>
            {attachments && 
            attachments.map(attachment =>  
                <AttachmentCard
                    isFocused={isFocused}
                    searchText={searchText}
                    attachment={attachment}
                    deleteAttachment={(file) => {
                        if(attachments.length < 10) {
                            setFileCountError("")
                        }
                        deleteAttachment(file);
                    }}
                    cancelAttachmentUpload={cancelAttachmentUpload}
                    parent={parent}
                    appCode={appCode}
                /> 
            )}
        </StyledBlock>
    )
}

ChatAttachments.propTypes = {
    attachments: PropTypes.arrayOf(PropTypes.shape({})),
    deleteAttachment: PropTypes.func,
    cancelAttachmentUpload: PropTypes.func,
    setFileCountError: PropTypes.func,
    parent: PropTypes.string,
    appCode: PropTypes.string,
    searchText: PropTypes.string,
    isFocused: PropTypes.bool,
}

ChatAttachments.defaultProps = {
    attachments: [],
    deleteAttachment: () => {},
    cancelAttachmentUpload: () => {},
    setFileCountError: () => {},
    parent: "",
    searchText: "",
    appCode: "",
    isFocused: false,
}

export default ChatAttachments;