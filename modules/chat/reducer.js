import * as types from './actionTypes';
import { initialState } from './selectors';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.GET_MESSAGES:
            return { ...state, loading: action.loading, pageNum: action.pageNum, searchText: action.searchText, chatItems: action.chatItems, highlightMessage: action.highlightMessage, fetchedPages: action.fetchedPages, replyItems: action.replyItems || [] };
        case types.GET_PREV_MESSAGES:
            return { ...state, prevLoading: action.prevLoading, pageNum: action.pageNum, searchText: action.searchText, chatItems: action.chatItems, highlightMessage: {} };
        case types.GET_NEXT_MESSAGES:
            return { ...state, nextLoading: action.nextLoading, pageNum: action.pageNum, searchText: action.searchText, chatItems: action.chatItems, highlightMessage: {} };
        case types.GET_MESSAGES_SUCCESS:
            return { ...state, chatItems: action.chatItems, hasNext: action.hasNext, hasPrev: action.hasPrev, loading: false, prevLoading: false, nextLoading: false, pageNum: action.pageNum, fetchedPages: action.fetchedPages, replyItems: action.replyItems || [] };
        case types.POST_MESSAGE:
            return { ...state, isCreating: action.isCreating };
        case types.POST_MESSAGE_SUCCESS:
            return { ...state, chatItems: action.chatItems, replyItems: action.replyItems, isCreating: false };
        case types.GET_ROOMS_FAILED:
        case types.GET_MESSAGES_FAILED:
        case types.POST_MESSAGE_FAILED:
        case types.EDIT_MESSAGE_FAILED:
        case types.REMOVE_MESSAGE_FAILED:
        case types.GET_CURRENT_USER_FAILURE:
        case types.GET_APP_CONFIGURATION_FAILURE: 
            return { ...state, error: action.error, errorMessage: action.errorMessage, loading: false };
        case types.ADD_ATTACHMENT:
        case types.ADD_ATTACHMENT_SUCCESS:
        case types.ADD_ATTACHMENT_FAILED:
        case types.UPDATE_ATTACHMENT:
            return { ...state, chatInput: action.chatInput };
        case types.UPDATE_CHAT_ITEMS:
            return { ...state, chatItems: action.chatItems, replyItems: action.replyItems, repliesTo: action.repliesTo, highlightMessage: action.highlightMessage, searchText: action.searchText };
        case types.UPDATE_EDIT_LOADING:
            return { ...state, isEditLoading: action.isEditLoading };
        case types.UPDATE_DELETE_LOADING:
            return { ...state, isDeleteLoading: action.isDeleteLoading };
        case types.RESET_STATE:
            return { ...initialState };
        case types.GET_ROOMS:
            return { ...state, refId: action.refId, appId: action.appId, loading: true };
        case types.GET_ROOMS_SUCCESS:
            return { ...state, rooms: action.rooms, room: action.room, roomId: action.roomId, pins: action.pins };
        case types.CHANGE_ROOM:
            return { ...state, loading: action.loading, room: action.room, roomId: action.roomId, chatItems: [], replyItems: [], pins: [], pageNum: 0, repliesTo: '', fetchedPages: {}, highlightMessage: {}, prevLoading: false, nextLoading: false, hasNext: false, hasPrev: false }
        case types.UPDATE_CURRENT_ROOM:
            return { ...state, room: action.room }
        case types.SET_AUTHKEY:
            return { ...state, authKey: action.authKey }
        case types.GET_CURRENT_USER_SUCCESS:
            return { ...state, currentUser: action.currentUser }
        case types.SET_CURRENT_USER_PERMISSIONS:
            return { ...state, userPermissions: action.userPermissions }
        case types.SET_HIGHLIGHT_MESSAGE:
            return { ...state, highlightMessage: action.highlightMessage }
        case types.CLOSE_POPUP:
            return { ...state, errorMessage: '' }
        case types.GET_APP_CONFIGURATION: 
            return {...state, configs: [...state.configs, action.config]}
        default:
            return state;
    }
};