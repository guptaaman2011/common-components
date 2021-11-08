import {reducer} from './reducer';
import { initialState } from './selectors';
import * as types from './actionTypes';

describe('module/chatModule reducers', () => {
  it('should return initial state data', () => {
    expect(reducer({...initialState}, {})).toEqual({ ...initialState });
  });

  it('test get message reducer', () => {
    const payload = { type: types.GET_MESSAGES, loading: true, pageNum: 1, searchText: 'This is a search text', chatItems: [], highlightMessage: {}, fetchedPages: {}, replyItems: []};
    expect(reducer({ ...initialState }, payload)).toEqual({
      ...initialState,
        loading: true,
        pageNum: 1,
        searchText: "This is a search text",
        chatItems: [],
        highlightMessage: {},
        fetchedPages: {},
        replyItems: [],
    });
  });

  it('test get prev messages reducer', () => {
    const payload = { type: types.GET_PREV_MESSAGES, prevLoading: true, pageNum: 1, searchText: 'This is a search text', chatItems: [], highlightMessage: {}};
    expect(reducer({ ...initialState }, payload)).toEqual({
      ...initialState,
        prevLoading: true,
        pageNum: 1,
        searchText: "This is a search text",
        chatItems: [],
        highlightMessage: {}
    });
  });

  it('test get next messages reducer', () => {
    const payload = { type: types.GET_NEXT_MESSAGES, nextLoading: true, pageNum: 1, searchText: 'This is a search text', chatItems: [], highlightMessage: {}};
    expect(reducer({ ...initialState }, payload)).toEqual({
      ...initialState,
        nextLoading: true,
        pageNum: 1,
        searchText: "This is a search text",
        chatItems: [],
        highlightMessage: {}
    });
  });

  it('test get messages success', () => {
    const payload = { type: types.GET_MESSAGES_SUCCESS, chatItems: [], hasNext: false, hasPrev: false, pageNum: 1, fetchedPages: {}, replyItems: []};
    expect(reducer({ ...initialState }, payload)).toEqual({
      ...initialState,
     chatItems: [],
     hasNext: false,
     hasPrev: false, 
     pageNum: 1,
     loading: false, 
     prevLoading: false,
     nextLoading: false,
     fetchedPages: {},
     replyItems: []
    });
  });

  it('test post message', () => {
    const payload = { type: types.POST_MESSAGE, isCreating: true};
    expect(reducer({ ...initialState }, payload)).toEqual({
      ...initialState,
     isCreating: true
    });
  });

  it('test post message success ', () => {
    const payload = { type: types.POST_MESSAGE_SUCCESS, chatItems: [], replyItems: []};
    expect(reducer({ ...initialState }, payload)).toEqual({
      ...initialState,
     isCreating: false,
     chatItems: [],
     replyItems: []
    });
  });

  it('test failed', () => {
    const payload = { type: types.POST_MESSAGE_FAILED, error: new Error("dao failed"), errorMessage: "Dao Failed"};
    expect(reducer({ ...initialState }, payload)).toEqual({
      ...initialState,
     error: new Error("dao failed"),
     errorMessage: "Dao Failed",
     loading: false,
    });
  });

  it('add attachment reducer test', () => {
      const payload = {type: types.ADD_ATTACHMENT_SUCCESS, chatInput: { message: 'this is a sample message',
      attachments: []}}
      expect(reducer({ ...initialState }, payload)).toEqual({
        ...initialState,
       chatInput: {
        message: 'this is a sample message',
        attachments: []
       }
      });
  })

  it('update chat items', () => {
      const payload = { type: types.UPDATE_CHAT_ITEMS, chatItems: [], replyItems: [], repliesTo: "user-1", highlightMessage: {}, searchText: "This is a search text"};
      expect(reducer({...initialState}, payload)).toEqual({
          ...initialState,
          chatItems: [],
          replyItems: [],
          repliesTo: "user-1",
          highlightMessage: {},
          searchText: "This is a search text"
      });
  });

  it('update edit loading', () => {
      const payload = {type: types.UPDATE_EDIT_LOADING, isEditLoading: false};
      expect(reducer({...initialState}, payload)).toEqual({
          ...initialState,
          isEditLoading: false
      });
  });

  it('update delete loading', () => {
    const payload = {type: types.UPDATE_DELETE_LOADING, isDeleteLoading: false};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
        isDeleteLoading: false
    });
  });

  it('reset state', () => {
    const payload = { type: types.RESET_STATE};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
    });
  });

  it('get rooms reducer', () => {
    const payload = { type: types.GET_ROOMS, refId: 1, appId: 1};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
        refId: 1,
        appId: 1,
        loading: true,
    });
  });

  it('get rooms success', () => {
      const payload = { type: types.GET_ROOMS_SUCCESS, rooms: [], room: {}, roomId: 1, pins: []};
      expect(reducer({...initialState}, payload)).toEqual({
          ...initialState,
            rooms: [],
            room: {},
            roomId: 1,
            pins: []          
      });
  });

  it('change room reducer', () => {
    const payload = { type: types.CHANGE_ROOM, loading: false,  room: {}, roomId: 1};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
        loading: false,
        room: {},
        roomId: 1,
        chatItems: [],
        replyItems: [],
        pins: [],
        pageNum: 0,
        repliesTo: '',
        fetchedPages: {}, 
        highlightMessage: {}, 
        prevLoading: false, 
        nextLoading: false, 
        hasNext: false, 
        hasPrev: false
    });
  });

  it('update current room', () => {
      const payload = { type: types.UPDATE_CURRENT_ROOM, room: {}};
      expect(reducer({...initialState}, payload)).toEqual({
          ...initialState,
          room: {},
      });
  });

  it('set auth key', () => {
    const payload = {type: types.SET_AUTHKEY, authKey: 'UPDATION_TIME_LIMIT'};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
        authKey: 'UPDATION_TIME_LIMIT'
    });
  });

  it('get current user success', () => {
    const payload = {type: types.GET_CURRENT_USER_SUCCESS, currentUser: {}};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
        currentUser: {}
    });
  });

  it('set current user permissions', () => {
    const payload = { type: types.SET_CURRENT_USER_PERMISSIONS, userPermissions: []};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
        userPermissions: [],        
    });
  });

  it('set highlighted message', () => {
      const payload = { type: types.SET_HIGHLIGHT_MESSAGE, highlightMessage: 'This is a highlighted message'};
      expect(reducer({...initialState}, payload)).toEqual({
          ...initialState,
          highlightMessage: 'This is a highlighted message'
      });
  });

  it('close pop up', () => {
    const payload = { type: types.CLOSE_POPUP};
    expect(reducer({...initialState}, payload)).toEqual({
        ...initialState,
        errorMessage: '',
    });
  });

  it('get app configurations', () => {
      const payload = { type:  types.GET_APP_CONFIGURATION, config: {app_code: 'pcp', config_key: "UPDATION_TIME_LIMIT", config_value: "5"}};
      expect(reducer({...initialState}, payload)).toEqual({
          ...initialState,
          configs: [{
              app_code: "pcp",
              config_key: "UPDATION_TIME_LIMIT",
              config_value: "5"
          }]
      });
  });
});

