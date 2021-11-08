import React, { useState, useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MessageContext } from '../context';
import ChatBox from '../../../components/organisms/ChatBox'
import * as types from '../actionTypes';
import { ChatTypes, CONFIGURATION_KEY, ConfirmationPopUpTexts, ExternalRoomName } from '../../../utils/constants';
import Utils from '../../../utils/utility';
import { getDate, getTime } from '../../../utils/timestamp';
import ConfirmationPopup from '../../../components/organisms/ConfirmationPopup'

const alertSVG = () => (
    <svg width="52" height="52" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M39.48 28.2C39.48 27.2 39.2 26.2 38.64 25.36L24.48 3.24005C23.48 1.72005 21.84 0.800049 20 0.800049C18.2 0.800049 16.52 1.72005 15.52 3.24005L1.35999 25.32C0.319988 26.96 0.239988 29.04 1.15999 30.72C2.07999 32.44 3.87999 33.48 5.79999 33.48H34.16C36.12 33.48 37.88 32.44 38.8 30.72C39.24 29.96 39.48 29.08 39.48 28.2ZM36.68 29.6C36.16 30.52 35.2 31.08 34.16 31.08H5.83999C4.79999 31.08 3.79999 30.52 3.31999 29.6C2.79999 28.68 2.83999 27.56 3.39999 26.68L17.6 4.56005C18.12 3.72005 19.04 3.24005 20.04 3.24005C21.04 3.24005 21.92 3.72005 22.48 4.56005L36.64 26.68C36.92 27.12 37.08 27.68 37.08 28.24C37.04 28.68 36.92 29.16 36.68 29.6ZM21.44 25.1401C21.44 24.3337 20.7864 23.6801 19.98 23.6801C19.1737 23.6801 18.52 24.3337 18.52 25.1401V25.3001C18.52 26.1064 19.1737 26.7601 19.98 26.7601C20.7864 26.7601 21.44 26.1064 21.44 25.3001V25.1401ZM18.52 12.5801C18.52 11.7737 19.1737 11.1201 19.98 11.1201C20.7864 11.1201 21.44 11.7737 21.44 12.5801V19.6201C21.44 20.4264 20.7864 21.0801 19.98 21.0801C19.1737 21.0801 18.52 20.4264 18.52 19.6201V12.5801Z" fill="#F2994A"/>
   </svg>
    );

const ChatContainer = ({ 
    appId, 
    refId, 
    userId, 
    authKey, 
    reference, 
    onDeleteMessageRef, 
    onCreateMessageRef, 
    focusMessage,
    roomLabelModifier,
    versionOptions,
    token,
    headerComponent,
}) => {
    // add event listeners when component mounts
    const createMessageEventHandler = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        if(state.roomId) {
            const { message, attachments, pinReference } = e.detail;
            handleSubmit(message, attachments, pinReference, () => {
                dispatch({ type: types.GET_MESSAGES, loading: true, pageNum: 0, searchText: '', chatItems: [], highlightMessage: {}, fetchedPages: {} });

                if (state.appId && state.roomId) {
                    messageAction.getMessages(state);
                }
            });
        }
    }

    // get the state and messageAction handle from useMessage reducer hook
    const [state, dispatch, messageAction] = useContext(MessageContext);
    const [commentBoxChangeConfirmationVisible, setCommentBoxChangeConfirmationVisible] = useState(false);
    const [targetRoomId, setTargetRoomId] = useState('');
    const [commentBoxChangeName, setCommentBoxChangeName] = useState(ExternalRoomName);
    // update authKey when component mounts
    useEffect(() => {
        dispatch({ type: types.SET_AUTHKEY, authKey });
        // component will unmount
        return () => {
            dispatch({ type: types.SET_AUTHKEY, authKey: "" });
        }
    }, [authKey]);

    //fetch rooms when component mounts
    useEffect(() => {
        messageAction.fetchCurrentUser(userId);
        dispatch({ type: types.GET_ROOMS, appId, refId: state.refId });
        if (state.refId) messageAction.fetchRooms(appId, state.refId, userId)
        else messageAction.fetchRooms(appId, refId, userId)

        // component will unmount
        return () => {
            dispatch({ type: types.RESET_STATE });
        }
    }, [appId, state.refId, refId, userId])

    //get permssions when user/room changed
    useEffect(() => {
        document.cookie = token;
    }, [token])

    useEffect(() => {
        if(state.room.app && state.room.app.code && state.room.app.code.length) {
            messageAction.getAppConfig(state.room.app.code, CONFIGURATION_KEY);
        }
    }, [state.room.app])

    // load the messages w.hen the container loads - componentDidMount
    useEffect(() => {
        const { commentId } = state.highlightMessage;
        dispatch({ type: types.SET_AUTHKEY, authKey });
        dispatch({ type: types.GET_MESSAGES, loading: true, pageNum: state.pageNum, searchText: state.searchText, chatItems: state.chatItems, highlightMessage: focusMessage, fetchedPages: {} });
        if (state.appId && state.roomId) {
            messageAction.getMessages(state);
        }

    }, [state.appId, state.roomId]); // check for any update - componentDidUpdate

    //useEffect hook to check for pageNum updation(loading older messages)
    useEffect(() => {
        const { commentId } = state.highlightMessage;
        if (state.appId && state.roomId && state.chatItems.length && !commentId) {
            messageAction.getMessages(state)
        }
    }, [state.pageNum]);

    useEffect(() => {
        if (state.highlightMessage.commentId !== focusMessage.commentId || state.highlightMessage.replyId !== focusMessage.replyId) {
            dispatch({ type: types.SET_HIGHLIGHT_MESSAGE, highlightMessage: focusMessage })
        }
    }, [focusMessage])

    //useEffect hook to check for searching text(searching for messages)
    useEffect(() => {
        if (state.searchText) {
            messageAction.getMessages(state)
        }
        if ((state.searchText === '' || state.repliesTo === '') && state.loading === true) {
            messageAction.getMessages(state)
        }
    }, [state.searchText, state.repliesTo]);

    useEffect(() => {
        if (state.chatItems.length && state.highlightMessage.replyId) {
            handleTapReplyMessage(focusMessage.commentId, true);
        }
    }, [state.chatItems])

    // emit event on change of rooms
    useEffect(() => {
        const event = new CustomEvent(
            "rooms-changed", 
            {
              detail: {
                rooms: state.rooms
              },
              bubbles: true,
              cancelable: true
            }
          );
      
          document.dispatchEvent(event);
    }, [state.rooms]);

    // emit event on change of room
    useEffect(() => {
        const event = new CustomEvent(
            "current-room-changed", 
            {
              detail: {
                room: state.room
              },
              bubbles: true,
              cancelable: true
            }
          );
      
          document.dispatchEvent(event);
    }, [state.room]);

    // whenever roomId changes , remove & add create-message event listener
    useEffect(() => {
        document.addEventListener('create-message', createMessageEventHandler, false);

        return () => {
            document.removeEventListener('create-message', createMessageEventHandler);
        }
    }, [state.roomId])

    // submit message handler
    const handleSubmit = (message, attachments, pinReference = null, cb = null) => {
        const messageBody = {
            message,
            attachments,
            reference: pinReference || reference
        }
        // dispatch({ type: types.POST_MESSAGE, loading: true, scrollPosition: 'bottom' });
        dispatch({ type: types.POST_MESSAGE, isCreating: true });
        messageAction.postMessage(messageBody, (messageObj) => {
            onCreateMessageRef(messageObj);
            if(cb) cb();
        });
    }

    // search message handler
    const handleSearch = (searchText) => {
        dispatch({ type: types.GET_MESSAGES, loading: true, pageNum: 0, searchText, chatItems: state.repliesTo !== '' ? state.chatItems : [], highlightMessage: {}, fetchedPages: {} });
    }

    const handleDateLabels = () => {
        const labels = document.getElementsByClassName('date-timeline-label');
        if (labels.length) {
            let previousOffSet = 0;
            const labelsToHide = [];
            labels.forEach((label, index) => {
                const labelTopOffSet = label.getBoundingClientRect().top;
                if (labelTopOffSet) {
                    if (!previousOffSet) {
                        previousOffSet = labelTopOffSet;
                    }
                    if (labelTopOffSet === previousOffSet) {
                        labels[index > 1 ? index - 1 : index].style.opacity = 0;
                        labelsToHide.push(label);
                    } else {
                        previousOffSet = labelTopOffSet;
                        labels[index > 1 ? index - 1 : index].style.opacity = 1;
                    }
                }
            })
            if (labelsToHide.length) {
                labelsToHide[labelsToHide.length - 1].style.opacity = 1;
            }
        }
    }

    // pagination handler
    const handleScrollFrame = (event) => {
        handleDateLabels();
        if (event.top === 0 && state.loading === false && state.hasPrev === true && state.prevLoading === false && state.repliesTo === '') {
            const _pageNum = Utils.getPageNum(state.fetchedPages, state.pageNum, 1, 'increment');
            dispatch({ type: types.GET_PREV_MESSAGES, prevLoading: true, pageNum: _pageNum, searchText: state.searchText, chatItems: state.chatItems });
        }
        if (event.top >= 1 && state.loading === false && state.hasNext === true && state.nextLoading === false && state.repliesTo === '' && state.pageNum > 0) {
            const _pageNum = Utils.getPageNum(state.fetchedPages, state.pageNum, 1, 'decrement');
            if (_pageNum > -1) {
                dispatch({ type: types.GET_NEXT_MESSAGES, nextLoading: true, pageNum: _pageNum, searchText: state.searchText, chatItems: state.chatItems });
            }
        }
    }

    // edit message handler to show edit box in main comment box and reply box section
    const handleTapEditMessage = (messageId) => {
        let updatedReplyItems = [];
        let updatedChatItems = state.chatItems;
        if (state.repliesTo !== '') {
            updatedReplyItems = state.replyItems.map(replyItem => replyItem.messageId === messageId ? { ...replyItem, isEditing: true } : replyItem)
        } else {
            updatedChatItems = state.chatItems.map(chatItem => chatItem.messageId === messageId ? { ...chatItem, isEditing: true } : chatItem)
        }
        dispatch({ type: types.UPDATE_CHAT_ITEMS, chatItems: updatedChatItems, replyItems: updatedReplyItems, repliesTo: state.repliesTo, highlightMessage: {}, searchText: state.searchText })
    }

    // cancel message handler to hide edit box in main comment box and reply box section
    const handleCancelEditMessage = (messageId) => {
        let updatedReplyItems = [];
        let updatedChatItems = state.chatItems;
        if (state.repliesTo !== '') {
            updatedReplyItems = state.replyItems.map(replyItem => replyItem.messageId === messageId ? { ...replyItem, isEditing: false } : replyItem)
        } else {
            updatedChatItems = updatedChatItems.map(chatItem => chatItem.messageId === messageId ? { ...chatItem, isEditing: false } : chatItem)
        }
        dispatch({ type: types.UPDATE_CHAT_ITEMS, chatItems: updatedChatItems, replyItems: updatedReplyItems, repliesTo: state.repliesTo, highlightMessage: {}, searchText: state.searchText })
    }

    // save message handler to save edit messages in main comment box and reply box section
    const handleSaveEditMessage = (messageId, message) => {
        if (state.repliesTo !== '') {
            const updatedReplyItem = state.replyItems.find(replyItem => replyItem.messageId === messageId);
            messageAction.editMessage(message, updatedReplyItem.attachments, messageId, updatedReplyItem.taggedUsers);
        } else {
            const updatedChatItem = state.chatItems.find(chatItem => chatItem.messageId === messageId);
            messageAction.editMessage(message, updatedChatItem.attachments, messageId, updatedChatItem.taggedUsers);
        }
    }

    // delete message handler to delete messages
    const handleTapDeleteMessage = (messageId, reference) => {
        messageAction.removeMessage(messageId, () => {
            onDeleteMessageRef({ messageId, reference });
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

    const okHandler = () => {
        setCommentBoxChangeConfirmationVisible(false);
        const { rooms, room } = state;

        if (targetRoomId !== room.id) {
            room.source.cancel('get messages canceled');
            const targetRoom = rooms.find(room => room.id === targetRoomId);
            dispatch({ type: types.CHANGE_ROOM, loading: true, room: targetRoom, roomId: targetRoomId, pins: targetRoom.pins });
        }
    };

    const cancelHandler = () => {
        setCommentBoxChangeConfirmationVisible(false);
    }

    // change room in state to room with room id in method argument
    const onRoomChange = (event) => {
        const { rooms, room } = state;
        if (room && room.app.ref && room.app.ref.name &&
            room.app.ref.name.toLowerCase().includes('internal')) {                  
            const currentTargetRoomId = event.target.value  
            const targetRoom = rooms.find(room => room.id === currentTargetRoomId);
            const targetRoomName = targetRoom && targetRoom.app.ref && targetRoom.app.ref.name;
            setCommentBoxChangeName(roomLabelModifier[targetRoomName.toUpperCase()] 
             ? Utils.convertToCapitalCase(roomLabelModifier[targetRoomName.toUpperCase()]): ExternalRoomName);
            setCommentBoxChangeConfirmationVisible(true)
            setTargetRoomId(event.target.value)
        } else {
            const currentTargetRoomId = event.target.value
            if (currentTargetRoomId !== room.id) {
                // cancel existing getMessages request
                room.source.cancel('get messages canceled');
                const targetRoom = rooms.find(room => room.id === currentTargetRoomId);
                dispatch({ type: types.CHANGE_ROOM, loading: true, room: targetRoom, roomId: currentTargetRoomId, pins: targetRoom.pins });
            }
        }
    }

    // handle tap replies
    const handleTapReplyMessage = (messageId, highlightReply = false) => {
        const chatItem = state.chatItems.find(chatItem => chatItem.messageId === messageId);
        if (chatItem) {
            const updatedReplyItems = [chatItem, ...chatItem.replyItems.sort((a, b) => a.createdAt - b.createdAt)];
            dispatch({ type: types.UPDATE_CHAT_ITEMS, chatItems: state.chatItems, replyItems: updatedReplyItems, repliesTo: messageId, highlightMessage: highlightReply ? state.highlightMessage : {}, searchText: '' })
            const event = new CustomEvent(
                "open-replies", 
                {
                  detail: {
                    chatHeader: 'Comment Replies'
                  },
                  bubbles: true,
                  cancelable: true
                }
              );
          
              document.dispatchEvent(event);
        }
    }

    // handle cancel replies
    const handleCancelReply = () => {
        dispatch({ type: types.UPDATE_CHAT_ITEMS, chatItems: state.chatItems, replyItems: [], repliesTo: '', highlightMessage: {} })
        dispatch({ type: types.GET_MESSAGES, loading: true, pageNum: 0, searchText: '', chatItems: [], highlightMessage: {}, fetchedPages: {} });
        // dispatch event for replies close 
        const event = new CustomEvent(
            "close-replies", 
            {
              detail: {
                chatHeader: 'Comments'
              },
              bubbles: true,
              cancelable: true
            }
        );
        document.dispatchEvent(event);
        
        if (chatItem) {
            const updatedReplyItems = [chatItem, ...chatItem.replyItems.sort((a, b) => a.createdAt - b.createdAt)];
            dispatch({ type: types.UPDATE_CHAT_ITEMS, chatItems: state.chatItems, replyItems: updatedReplyItems, repliesTo: messageId, highlightMessage: highlightReply ? state.highlightMessage : {}, searchText: '' })
        }
    }

    // handle tap pin
    const onTapPin = (messageId) => {
        const message = state.chatItems.find(item => item.messageId === messageId);
        if (message) {
            message.createdAt = `${getDate(message.createdAt)} ${getTime(message.createdAt)}`;
            const event = new CustomEvent(
                "pin-clicked", 
                {
                  detail: {
                    message
                  },
                  bubbles: true,
                  cancelable: true
                }
              );
          
            document.dispatchEvent(event);
        }
    };


    return (
        <div>
            <ChatBox
                //state
                chatItems={state.chatItems}
                replyItems={state.replyItems}
                loading={state.loading}
                roomLabelModifier={roomLabelModifier}
                attachments={state.chatInput.attachments}
                errorMessage={state.errorMessage}
                rooms={state.rooms}
                users={(state.room && state.room.users) || []}
                currentRoom={state.room}
                chatType={state.repliesTo === '' ? ChatTypes.COMMENT : ChatTypes.REPLY}
                isCreating={state.isCreating}
                isEditLoading={state.isEditLoading}
                isDeleteLoading={state.isDeleteLoading}
                userId={userId} // user who is logged in
                pinItems={state.pins}
                userPermissions={state.userPermissions}
                highLightedMessage={state.highlightMessage}
                prevLoading={state.prevLoading}
                nextLoading={state.nextLoading}
                repliesTo={state.repliesTo}
                searchText={state.searchText}
                updateRefId={messageAction.updateRefId}
                versionOptions={versionOptions}
                //actions
                onSubmit={handleSubmit}
                onSearch={handleSearch}
                onScrollFrame={handleScrollFrame}
                addAttachment={addAttachment}
                deleteAttachment={deleteAttachment}
                cancelAttachmentUpload={cancelAttachmentUpload}
                onRoomChange={onRoomChange}
                onTapPin={onTapPin}
                onTapEditMessage={handleTapEditMessage}
                onCancelEditMessage={handleCancelEditMessage}
                onSaveEditMessage={handleSaveEditMessage}
                onTapDeleteMessage={handleTapDeleteMessage}
                onTapReply={handleTapReplyMessage}
                onCancelReply={handleCancelReply}
                onCancelPopUp={messageAction.closePopup}
                configs={state.configs}
                headerComponent={headerComponent}
            />
        <ConfirmationPopup 
            visible={commentBoxChangeConfirmationVisible}
            title={ConfirmationPopUpTexts.TITLE}
            description={ConfirmationPopUpTexts.DESCRIPTION_FIRST_PART + commentBoxChangeName + ConfirmationPopUpTexts.DESCRIPTION_SECOND_PART}
            okText={ConfirmationPopUpTexts.YES}
            icon={alertSVG}
            cancelText={ConfirmationPopUpTexts.NO}
            okHandler={okHandler} 
            cancelHandler={cancelHandler} /> 
        </div>
    );
};

ChatContainer.propTypes = {
    appId: PropTypes.string.isRequired,
    onCreateMessageRef: PropTypes.func,
    onMessagePinClickRef: PropTypes.func,
    roomLabelModifier: PropTypes.shape({}),
    onDeleteMessageRef: PropTypes.func,
    refId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    reference: PropTypes.shape({}),
    focusMessage: PropTypes.shape({
        commendId: PropTypes.string,
        replyId: PropTypes.string
    })
};

ChatContainer.defaultProps = {
    onCreateMessageRef: () => { },
    onMessagePinClickRef: () => { },
    onDeleteMessageRef: () => { },
    reference: {},
    roomLabelModifier: {},
    focusMessage: {}
};

export default ChatContainer; 