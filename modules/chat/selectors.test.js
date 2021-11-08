import { initialState } from './selectors';

describe('chat module selector', () => {
  it('test initialState in selector', () => {
    expect(initialState).toEqual({
        authKey: "",
        chatItems: [],
        replyItems: [],
        loading: false,
        prevLoading: false,
        nextLoading: false,
        error: null,
        users: [],
        hasNext: false,
        hasPrev: false,
        pageNum: 0,
        searchText: '',
        appId: '',
        configs: [],
        refId: '',
        roomId: '',
        rooms: [],
        room: {
            users: [],
            app: {
                code: ''
            },
            permissions: []
        },
        userPermissions: [],
        chatInput: {
            message: '',
            attachments: []
        },
        pins: [],
        isCreating: false,
        isEditLoading: false,
        isDeleteLoading: false,
        repliesTo: '',
        highlightMessage: {},
        fetchedPages: {},
        errorMessage: ''
    });
  });
});
