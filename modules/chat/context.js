import React, {
  createContext,
  useReducer
} from 'react';
import { reducer } from './reducer'
import { initialState } from './selectors';
import {
  fetch,
  create,
  edit,
  remove,
  postFile,
  getRooms,
  getCurrentUser,
  getAppConfigValue
} from './request';
import {
  getBase64,
  makeMessage,
  makeMessages,
  makeGetMessagesPayload,
  makePostMessagePayload,
  makePostFilePayload
} from './helper';
import * as types from './actionTypes';
import axios from 'axios';
import { ErrorMessagesTypes } from '../../utils/constants';

export const MessageContext = createContext([{}, function () { }]);

export const MessageContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAuthHeaders = () => {
    return {
      headers: {
        "x-user": state.authKey,
        "set-cookie": document.cookie,
      }
    }
  }

  const getMessages = async (body) => {
    const payload = makeGetMessagesPayload(body)
    try {
      const newState = {
        ...state
      }

      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      const { room } = newState;
      room.source = source;
      dispatch({ type: types.UPDATE_CURRENT_ROOM, room })
      const headers = getAuthHeaders();
      const { data } = await fetch(payload, {
        ...headers,
        cancelToken: source.token,
      });
      const chatItems = makeMessages(data.result.messages);

      if (state.repliesTo !== '') {
        newState.replyItems = []
        if (state.searchText !== '') {
          newState.replyItems = [...chatItems];
        } else {
          const commentItem = chatItems[0];
          const replyItems = chatItems[0].replyItems;
          newState.replyItems = [commentItem, ...replyItems]
        }
        newState.replyItems.sort((a, b) => a.createdAt - b.createdAt);
      } else if(state.pageNum === 0) {
        newState.chatItems = chatItems;
        newState.chatItems.sort((a, b) => a.createdAt - b.createdAt);
        newState.replyItems = []
      } else {
        newState.chatItems = [...chatItems, ...state.chatItems];
        newState.chatItems.sort((a, b) => a.createdAt - b.createdAt);
        newState.replyItems = []
      }
      newState.fetchedPages[data.result.pageNum] = true;
      calculateUserPermissions(data.result.userPermissions);
      if (newState.loading) {
        dispatch({ type: types.GET_MESSAGES_SUCCESS, chatItems: newState.chatItems, pageNum: data.result.pageNum, fetchedPages: newState.fetchedPages, hasNext: data.result.hasNext, hasPrev: data.result.hasPrev, prevLoading: false, nextLoading: false, replyItems: newState.replyItems });
      } else if (newState.prevLoading) {
        dispatch({ type: types.GET_MESSAGES_SUCCESS, chatItems: newState.chatItems, pageNum: data.result.pageNum, fetchedPages: newState.fetchedPages, hasNext: data.result.hasNext, hasPrev: data.result.hasPrev, prevLoading: false, nextLoading: false });
      } else if (newState.nextLoading) {
        dispatch({ type: types.GET_MESSAGES_SUCCESS, chatItems: newState.chatItems, pageNum: state.pageNum, fetchedPages: newState.fetchedPages, hasNext: data.result.hasNext, hasPrev: data.result.hasPrev, prevLoading: false, nextLoading: false });
      }
    } catch (error) {
      if (error.message !== 'get messages canceled') {
        dispatch({ type: types.GET_MESSAGES_FAILED, error, errorMessage: ErrorMessagesTypes.GET_MESSAGES_FAILED });
        setTimeout(() => {
          closePopup();
        }, 5000);
      }
    }
  }

  const postMessage = async (messageBody, resolve) => {
    const { message, attachments, reference } = messageBody
    const { appId, roomId, room, repliesTo } = state;
    const { users } = room;
    const payload = makePostMessagePayload({ message, users, attachments, reference, appId, roomId, repliesTo })
    try {
      const newState = {
        ...state,
      }
      newState.chatInput.attachments = [];
      dispatch({ type: types.UPDATE_ATTACHMENT, chatInput: newState.chatInput });

      const { data } = await create(payload, getAuthHeaders());
      const newChatItem = makeMessage(data.result);
      if (newState.repliesTo !== '') {
        newState.replyItems.push(newChatItem);
        newState.chatItems = newState.chatItems.map(chatItem => chatItem.messageId === state.repliesTo ? { ...chatItem, ...chatItem.replyItems.push(newChatItem) } : chatItem)
      } else {
        newState.replyItems = [];
        newState.chatItems.push(newChatItem);
      }
      dispatch({ type: types.POST_MESSAGE_SUCCESS, chatItems: newState.chatItems, replyItems: newState.replyItems, isCreating: false });
      resolve(newChatItem);
    } catch (error) {
      dispatch({ type: types.POST_MESSAGE_FAILED, error, errorMessage: ErrorMessagesTypes.POST_MESSAGE_FAILED });
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
  }

  const editMessage = async (message, attachments, messageId, reference) => {
    const { appId, roomId, room, repliesTo } = state;
    const { users } = room;
    const payload = makePostMessagePayload({ message, users, attachments, reference, appId, roomId, repliesTo });
    payload.id = messageId;
    dispatch({ type: types.UPDATE_EDIT_LOADING, isEditLoading: true });
    try {
      const { data } = await edit(payload, getAuthHeaders());
      const newChatItem = makeMessage(data.result);
      const newState = {
        ...state,
      }
      let updatedChatItems = [];
      let updatedReplyItems = [];
      if (newState.repliesTo !== '') {
        updatedReplyItems = newState.replyItems.map(replyItem => replyItem.messageId === messageId ? { ...newChatItem, isEditing: false } : replyItem)
        updatedChatItems = newState.chatItems.map(chatItem => chatItem.messageId === newState.repliesTo ? { ...chatItem, replyItems: chatItem.replyItems.map(replyItem => replyItem.messageId === messageId ? { ...newChatItem, isEditing: false } : replyItem) } : chatItem)
      } else {
        updatedChatItems = newState.chatItems.map(chatItem => chatItem.messageId === messageId ? { ...newChatItem, isEditing: false } : chatItem)
      }
      dispatch({ type: types.UPDATE_CHAT_ITEMS, chatItems: updatedChatItems, replyItems: updatedReplyItems, repliesTo: newState.repliesTo, highlightMessage: {}, searchText: state.searchText })
    } catch (error) {
      dispatch({ type: types.EDIT_MESSAGE_FAILED, error, errorMessage: ErrorMessagesTypes.EDIT_MESSAGE_FAILED });
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
    dispatch({ type: types.UPDATE_EDIT_LOADING, isEditLoading: false });
  }

  const removeMessage = async (messageId, resolve) => {
    const payload = {
      id: messageId,
      app_id: state.appId,
      room_id: state.roomId
    }
    dispatch({ type: types.UPDATE_DELETE_LOADING, isDeleteLoading: true });
    try {
      await remove(payload, getAuthHeaders());
      const newState = {
        ...state,
      }
      let updatedChatItems = [];
      let updatedReplyItems = [];

      if (newState.repliesTo !== '') {
        updatedReplyItems = newState.replyItems.filter(replyItem => replyItem.messageId !== messageId);
        updatedChatItems = newState.chatItems.map(
          chatItem => chatItem.messageId === newState.repliesTo ?
            {
              ...chatItem,
              replyItems: chatItem.replyItems.filter(replyItem => replyItem.messageId !== messageId)
            } : chatItem);
      } else {
        updatedChatItems = newState.chatItems.filter(chatItem => chatItem.messageId !== messageId);
      }
      dispatch({ type: types.UPDATE_CHAT_ITEMS, chatItems: updatedChatItems, replyItems: updatedReplyItems, repliesTo: state.repliesTo, highlightMessage: {}, searchText: state.searchText })
      resolve();
    } catch (error) {
      dispatch({ type: types.REMOVE_MESSAGE_FAILED, error, errorMessage: ErrorMessagesTypes.REMOVE_MESSAGE_FAILED });
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
    dispatch({ type: types.UPDATE_DELETE_LOADING, isDeleteLoading: false });
  }

  const addAttachment = async (file) => {
    try {
      const CancelToken = axios.CancelToken;
      // create the source
      const source = CancelToken.source();
      const { app } = state.room;
      //add file to state
      const newState = { ...state };
      file.progress = 0;
      file.source = source;
      newState.chatInput.attachments.push(file);
      dispatch({ type: types.ADD_ATTACHMENT, chatInput: newState.chatInput });

      // convert to dataUri
      let dataUri = '';
      getBase64(file, async (result) => {
        dataUri = result;
        // update state with progress after datauri generated
        file.dataUri = dataUri;
        dispatch({ type: types.UPDATE_ATTACHMENT, chatInput: newState.chatInput });

        //api call for file upload
        const payload = makePostFilePayload(file, app);
        const config = {
          cancelToken: source.token,
          onUploadProgress: (progressEvent) => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            if (percentCompleted <= 90) {
              file.progress = percentCompleted;
              dispatch({ type: types.UPDATE_ATTACHMENT, chatInput: newState.chatInput });
            }
          }
        }

        postFile(payload, config)
          .then(
            res => {
              file.progress = 100;
              file.id = res.data.id;
              dispatch({ type: types.ADD_ATTACHMENT_SUCCESS, chatInput: newState.chatInput });
            }
          ).catch(
            error => {
              file.error = true;
              file.progress = 0;
              dispatch({ type: types.ADD_ATTACHMENT_FAILED, chatInput: newState.chatInput });
            }
          );
      }, (error) => {
        const { chatInput } = state;
        const newState = {
          ...state
        };
        const index = chatInput.attachments.indexOf(file);
        if (chatInput.attachments[index]) {
          chatInput.attachments[index].error = error || true;
          dispatch({ type: types.ADD_ATTACHMENT_FAILED, chatInput: newState.chatInput });
        }
      });

    } catch (error) {
      const { chatInput } = state;
      const newState = {
        ...state
      };
      const index = chatInput.attachments.indexOf(file);
      if (chatInput.attachments[index]) {
        chatInput.attachments[index].error = error || true;
        dispatch({ type: types.ADD_ATTACHMENT_FAILED, chatInput: newState.chatInput });
      }
    }
  }

  const deleteAttachment = async (file) => {
    try {
      const { chatInput } = state;
      const newState = {
        ...state
      };
      const index = chatInput.attachments.indexOf(file);
      if (index > -1) {
        chatInput.attachments.splice(index, 1);
        newState.chatInput = chatInput;
        dispatch({ type: types.UPDATE_ATTACHMENT, chatInput: newState.chatInput });
      }
    } catch (error) {

    }
  }

  const cancelAttachmentUpload = async (file) => {
    try {
      const { chatInput } = state;
      const newState = {
        ...state
      };
      const index = chatInput.attachments.indexOf(file);
      if (index > -1) {
        chatInput.attachments.splice(index, 1);
        newState.chatInput = chatInput;
        file.source.cancel('upload canceled')
        dispatch({ type: types.UPDATE_ATTACHMENT, chatInput: newState.chatInput });
      }
    } catch (error) {

    }
  }

  const updateRefId = (updatedRefId) => {
    try {
      const newState = {
        ...state,
      }
      newState.refId = updatedRefId;
      dispatch({ type: types.GET_ROOMS, appId: state.appId, refId: newState.refId });
    } catch (error) {
      dispatch({ type: types.GET_ROOMS_FAILED, error, errorMessage: ErrorMessagesTypes.GET_ROOMS_FAILED })
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
  }

  const fetchRooms = async (appId, refId, userId) => {
    try {
      const payload = { appId, refId, userId };
      const response = await getRooms(payload);
      if (response.data && response.data.result) {
        let rooms = response.data.result;
        if (rooms.length) {
          rooms = rooms.map(room => {
            return { index: rooms.indexOf(room), ...room }
          })
          const room = rooms[0];
          const roomId = room.id;
          const pins = room.pins;
          dispatch({ type: types.GET_ROOMS_SUCCESS, rooms, room, roomId, pins });
        }
      }
    } catch (error) {
      dispatch({ type: types.GET_ROOMS_FAILED, error, errorMessage: ErrorMessagesTypes.GET_ROOMS_FAILED })
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
  }

  const fetchCurrentUser = async (userId) => {
    try {
      const response = await getCurrentUser({ userId });
      if (response.data && response.data.result) {
        const currentUser = response.data.result;
        dispatch({ type: types.GET_CURRENT_USER_SUCCESS, currentUser })
      }
    } catch (error) {
      dispatch({ type: types.GET_CURRENT_USER_FAILURE, error, errorMessage: ErrorMessagesTypes.GET_CURRENT_USER_FAILURE })
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
  }

  const getAppConfig = async (appCode, configKey) => {
    try {
      const response = await getAppConfigValue(appCode, configKey);
      if(response.data && response.data.result) {
        const config = response.data.result;
        dispatch({ type: types.GET_APP_CONFIGURATION, config: config});
      }
    } catch (error) {
      dispatch({ type: types.GET_APP_CONFIGURATION_FAILURE, error, errorMessage: ErrorMessagesTypes.GET_APP_CONFIGURATION_FAILURE})
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
  }

    // get user permissions
    const calculateUserPermissions = (permissions) => {
      const { room } = state;
      const userPermissions = [];
      if (permissions && room && room.permissions) {
          room.permissions.forEach(
              room => {
                  if (permissions.includes(room.value)) {
                      userPermissions.push(room.key)
                  }
              }
          );
          dispatch({ type: types.SET_CURRENT_USER_PERMISSIONS, userPermissions });
      }
    }

  const getPermissions = async (permissionsApi, token) => {
    try {
      const response = await getUserPermissions(permissionsApi, { headers: {  Cookie: token } });
      const { data } = response;
      const { result } = data;
      const { permissions } = result;
      calculateUserPermissions(permissions);
    } catch (error) {
      console.log('Error during getUserPermissions API call');
    }
  }

  const closePopup = () => {
    dispatch({ type: types.CLOSE_POPUP });
  }

  return (
    <MessageContext.Provider value={[state, dispatch,
      {
        getMessages,
        postMessage,
        addAttachment,
        deleteAttachment,
        cancelAttachmentUpload,
        editMessage,
        removeMessage,
        fetchRooms,
        fetchCurrentUser,
        closePopup,
        getPermissions,
        calculateUserPermissions,
        updateRefId,
        getAppConfig,
      }]}>
      {props.children}
    </MessageContext.Provider>
  );
};