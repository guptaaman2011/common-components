import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { MessageContext } from '../context';
import * as types from '../actionTypes';
import { ChatSubmitBox } from '../../../components/molecules';

const ChatCreateBox = ({ appId, refId, onCreateMessageRef, reference, userId, authKey }) => {

    // get the state and messageAction handle from useMessage reducer hook
    const [state, dispatch, messageAction] = useContext(MessageContext);

    // update authKey when component mounts
    useEffect(() => {
        dispatch({ type: types.SET_AUTHKEY, authKey });
        // component will unmount
        return () => {
            dispatch({ type: types.SET_AUTHKEY, authKey: "" });
        }
    }, [authKey])

    //fetch rooms when component mounts
    useEffect(() => {
        dispatch({ type: types.GET_ROOMS, appId, refId });
        messageAction.fetchRooms(appId, refId, userId);

        // component will unmount
        return () => {
            dispatch({ type: types.RESET_STATE });
        }
    }, [appId, refId])

    // submit message handler
    const handleSubmit = (message, attachments) => {
        const messageBody = {
            message,
            attachments,
            reference
        }
        dispatch({ type: types.POST_MESSAGE, loading: true, scrollPosition: 'bottom' });
        messageAction.postMessage(messageBody, (messageObj) => {
            onCreateMessageRef(messageObj);
        });
    }

    const addAttachment = (file) => {
        messageAction.addAttachment(file);
    }

    const deleteAttachment = (file) => {
        messageAction.deleteAttachment(file);
    }

    const cancelAttachmentUpload = (file) => {
        messageAction.cancelAttachmentUpload(file);
    }

    return (
        <ChatSubmitBox
            onSubmit={handleSubmit}
            addAttachment={addAttachment}
            attachments={state.chatInput.attachments}
            deleteAttachment={deleteAttachment}
            cancelAttachmentUpload={cancelAttachmentUpload}
            selectedChatRoomIndex={state.room.index}
        />
    );
};

ChatCreateBox.propTypes = {
    appId: PropTypes.string.isRequired,
    refId: PropTypes.string.isRequired,
    onCreateMessageRef: PropTypes.func,
    reference: PropTypes.shape()
};

ChatCreateBox.defaultProps = {
    onCreateMessageRef: () => { },
    onMessagePinClickRef: () => { },
    reference: {}
};

export default ChatCreateBox; 