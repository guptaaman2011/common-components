import { LUP_BASE_GREY_LIGHT, WHITE, LUP_FORM_ENABLED_BACKGROUND } from "../theme";

export const ChatTypes = {
    COMMENTWITHREPLIES: 'commentWithReplies',
    REPLY: 'reply',
    COMMENT: 'comment',
}

export const FlexBlockChatBorderColor = {
    'comment': LUP_BASE_GREY_LIGHT,
    'reply': LUP_BASE_GREY_LIGHT,
    'commentWithReplies': LUP_BASE_GREY_LIGHT,
}

export const FlexBlockChatBackground = {
    'comment': WHITE,
    'reply': WHITE,
    'commentWithReplies': LUP_FORM_ENABLED_BACKGROUND
}

export const FlexBlockChatPadding = {
    'comment': '15px 0px 10px 0px',
    'reply': '15px 0px 10px 0px',
    'commentWithReplies': '15px 0px 10px 0px',
}

export const FlexBlockChatMargin = {
    'comment': '0px 15px',
    'reply': '0px 15px',
    'commentWithReplies': '0px 15px',
}

export const ChatHeaderText = {
    COMMENT: 'Comments',
    REPLY: 'Comment Replies'
}

export const ChatSubmitBoxPlaceholderText = {
    COMMENT: 'Add Comment...',
    REPLY: 'Add Reply...'
}

export const ChatSearchBoxPadding = {
    'comment': '15px 15px 10px 15px',
    'reply': '15px 15px 0px 15px'
}

export const ConfirmationPopUpTexts = {
    DESCRIPTION_FIRST_PART: 'Are you sure to switch to ',
    DESCRIPTION_SECOND_PART: ' comment box',
    TITLE: 'Confirmation',
    YES: 'yes',
    NO: 'No'
}

export const ExternalRoomName = 'Talk To Buyer';

// Comparison ToolBar

export const DropDownText = 'Saved Comparisons';
export const SaveButtonText = 'SAVE COMPARISON';
export const DeleteButtonText = 'Delete Comparison';
export const ExportButtonText = 'Export';

export const SaveModalTitle = "Save Comparison";
export const saveAs = "Save as ";

export const save = "Save";
export const cancel = "Cancel";
export const MainProduct = 'Main Product';
export const productNotFoundError = "Product not found. Please try again.";
export const ResetFilter = "Reset Filter";
export const ClearAll = "Clear All";
export const ChatSubmitBoxReplyLabel = 'Reply...'; 
export const ComparisonGridHeader = "Products to Compare";
export const selectAll = "Select All";
export const compareInViewer = "Compare In Viewer";


export const highlightCheckboxLabel = "Highlight Differences";
// Error Messages Types
export const ErrorMessagesTypes = {
    GET_MESSAGES_FAILED: 'Get messages api failed. Please refresh the page or try again later',
    POST_MESSAGE_FAILED: 'Send message api failed. Please refresh the page or try again later',
    EDIT_MESSAGE_FAILED: 'Edit message api failed. Please refresh the page or try again later',
    REMOVE_MESSAGE_FAILED: 'Delete message api failed. Please refresh the page or try again later',
    GET_ROOMS_FAILED: 'Get rooms api failed. Please refresh the page or try again later',
    GET_CURRENT_USER_FAILURE: 'Get user api failed. Please refresh the page or try again later',
    SEARCH_MESSAGES_FAILED: "We're sorry, we could not find your result. Please try again.",
    GET_APP_CONFIGURATION_FAILURE: "Get app configuration api failed. Please refresh the page or try again later"
}
export const CONFIGURATION_KEY = "UPDATION_TIME_LIMIT";
export const DEFAULT_UPDATION_TIME = "1";