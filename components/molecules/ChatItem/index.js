import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlexBlock, Text, IconButton, Spinner, StyledMessage, Badge } from "../../atoms"
import { ChatAvatar } from ".."
import Utils from '../../../utils/utility';
import EditIconInternal from "../../../assets/images/icons/chatbox/edit_internal.svg";
import DeleteIconInternal from "../../../assets/images/icons/chatbox/delete_internal.svg";
import EditIconExternal from "../../../assets/images/icons/chatbox/edit_external.svg";
import DeleteIconExternal from "../../../assets/images/icons/chatbox/delete_external.svg";
import ReplyIconInternal from "../../../assets/images/icons/chatbox/reply.svg";
import ReplyIconExternal from "../../../assets/images/icons/chatbox/ReplyExternal.svg";
import PinInternalIcon from "../../../assets/images/icons/chatbox/pin_internal.svg";
import { getTimeLeftInWindow,  checkUpdationTimePassed} from '../../../utils/commentTool';

import { LUP_BASE_GREY_DARK, LUP_BASE_BLUE_LIGHTEST, LUP_SECONDARY_DEEP_YELLOW, LUP_BASE_BLUE_DARK,
    LUP_SPACING_22, LUP_MAIN_FONT_SIZE14, LUP_SPACING_19, LUP_MAIN_FONT_SIZE12, LUP_FORM_ENABLED_BACKGROUND } from "../../../theme";

import {
    StyledComment,
    StyledChatAction,
    StyledChatReplyAction,
    StyledChatReplyCountAction,
    StyledChatPinAction
} from "./styles";

import { ChatTypes, FlexBlockChatBorderColor, FlexBlockChatPadding, FlexBlockChatMargin, FlexBlockChatBackground, CONFIGURATION_KEY, DEFAULT_UPDATION_TIME } from '../../../utils/constants';

const ChatItem = ({
    messageId,
    avatar,
    author,
    children,
    time,
    userType,
    isNew,
    isReply,
    isPinned,
    canEdit,
    text,
    canDelete,
    onTapEdit,
    onTapDelete,
    onTapPin,
    taggedUsers,
    onTapReply,
    isDeleteLoading,
    selectedChatRoomIndex,
    chatType,
    replyItems,
    highlightedText,
    isFocused,
    isHighLighted,
    reference,
    updatedAt,
    configs,
}) => {
    const [key, setKey] = React.useState('');
    const _taggedUsers = taggedUsers.map(user => user.name);
   const config = configs.find(config => config.config_key === CONFIGURATION_KEY);
    const message = Utils.removeUserMarkup(text, taggedUsers);

    const [updationTimeWindowPassed, setTimeWindow] = React.useState(
        checkUpdationTimePassed(updatedAt, config ? config.config_value : DEFAULT_UPDATION_TIME),
    );
    const [commentRef, setCommentRef] = React.useState(null);

    useEffect(() => {
        if (isHighLighted || isFocused) {
            if (commentRef) {
                commentRef.scrollIntoView({ block: 'center' });
            }
        }
    }, [commentRef, isFocused, isHighLighted]);

    React.useEffect(() => {
        const timeLeft = getTimeLeftInWindow(updatedAt,  config ? config.config_value : DEFAULT_UPDATION_TIME);
        let timer;
        if (!updationTimeWindowPassed) {
          timer = setTimeout(() => {
            setTimeWindow(true);
          }, timeLeft);
        }
        return () => clearTimeout(timer);
      }, [updatedAt]);
      
    // define in constants
    const HighlightTypes = {
        USER: 'user',
        SEARCH_TEXT: 'searchText',
        SEARCH_TEXT_FOCUSED: 'focusedSearchText',
    }

    const renderLoader = (loading) => {
        if (loading && key === messageId) {
            return <Spinner key={messageId} style={{}} size="16px" />
        } else {
            return <IconButton src={selectedChatRoomIndex % 2 !== 0 ? DeleteIconExternal : DeleteIconInternal}
                onClick={() => {
                    onTapDelete(messageId, reference);
                    setKey(messageId)
                }} />
        }
    };

    let actions = [];

    if (chatType === ChatTypes.COMMENT) {

        actions.push(
            <StyledChatReplyAction>
                <IconButton src={selectedChatRoomIndex % 2 !== 0 ? ReplyIconExternal: ReplyIconInternal} onClick={() => onTapReply(messageId)} />
            </StyledChatReplyAction>, // Replies Icon
            <StyledChatReplyAction onClick={() => onTapReply(messageId)}
            color={selectedChatRoomIndex % 2 !== 0 ? LUP_SECONDARY_DEEP_YELLOW: LUP_BASE_BLUE_DARK}
            >Reply</StyledChatReplyAction> // Reply/Replies text
        )

        if (replyItems && replyItems.length > 0) {
            actions.push(<StyledChatReplyCountAction>
                <Badge onClick={() => onTapReply(messageId)} bg={selectedChatRoomIndex % 2 !== 0 ? LUP_SECONDARY_DEEP_YELLOW: LUP_BASE_BLUE_DARK}>{replyItems.length}</Badge>
            </StyledChatReplyCountAction>
            ); // ReplyCount badge
        }
    }

    const getHighlightData = () => {
        const config = {};
        // if this chatItem is focused, assing highlightText to SEARCH_TEXT_FOCUSED type
        if (isFocused) {
            config[HighlightTypes.SEARCH_TEXT] = [];
            config[HighlightTypes.SEARCH_TEXT_FOCUSED] = [highlightedText];
        } else {
            config[HighlightTypes.SEARCH_TEXT] = [highlightedText];
            config[HighlightTypes.SEARCH_TEXT_FOCUSED] = [];
        }
        // tagged users should be last in the list
        config[HighlightTypes.USER] = _taggedUsers;
        return config;
    }

    const _chatItem = (
        <StyledComment
            actions={!isReply ? actions : null}
            author={
                <>
                    <Text fontSize={LUP_MAIN_FONT_SIZE14} lineHeight={LUP_SPACING_22}>
                        {author}
                    </Text>
                    {isPinned &&
                        <StyledChatPinAction>
                            <IconButton
                                src={PinInternalIcon}
                                onClick={() => onTapPin(messageId)}
                            />
                        </StyledChatPinAction>
                    }
                </>
            }
            avatar={
                <ChatAvatar
                    type={userType} // internal/external
                    showDot={isNew} // showDot if newNotification
                >
                    {avatar} {/* Avatar Initials */}
                </ChatAvatar>
            }
            content={
                <>
                    {/* Highlight Message */}
                    <StyledMessage
                        text={message}
                        // userIndices={userIndices}
                        config={getHighlightData()}
                    >
                    </StyledMessage>
                    {children}
                </>
            }
            datetime={
                <>
                    {canEdit && !updationTimeWindowPassed && 
                        <StyledChatAction>
                            <IconButton src={selectedChatRoomIndex % 2 !== 0 ? EditIconExternal : EditIconInternal} onClick={() => onTapEdit(messageId)} />
                        </StyledChatAction>
                    }
                    {canDelete && !updationTimeWindowPassed &&
                        <StyledChatAction>
                            {renderLoader(isDeleteLoading)}
                        </StyledChatAction>
                    }
                    <Text fontSize={LUP_MAIN_FONT_SIZE12} color={LUP_BASE_GREY_DARK} lineHeight={LUP_SPACING_19} style={{ letterSpacing: '0.2px' }}>
                        {time}
                    </Text>
                </>
            }
        />
    );

    // if (chatType != ChatTypes.COMMENT) {
    //     return (<div ref={(value) => { setCommentRef(value) }}> { _chatItem} </div>);
    // }
    return (
        <FlexBlock
            borderColor={FlexBlockChatBorderColor[chatType]}
            padding={FlexBlockChatPadding[chatType]}
            margin={FlexBlockChatMargin[chatType]}
            background={isHighLighted ? LUP_FORM_ENABLED_BACKGROUND : FlexBlockChatBackground[chatType]}
            key={messageId}
            ref={(value) => { setCommentRef(value) }}
        >
            {_chatItem}
        </FlexBlock>
    )
}

ChatItem.propTypes = {
    children: PropTypes.object.isRequired,
    messageId: PropTypes.string.isRequired,
    avatar: PropTypes.array.isRequired,
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    taggedUsers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
    })),
    userType: PropTypes.oneOf(['internal', 'external']),
    // flags
    isNew: PropTypes.bool, // shows dot on avatar
    isPinned: PropTypes.bool, // show pin icon
    canEdit: PropTypes.bool, // show edit option
    canDelete: PropTypes.bool, // show delete option
    isReply: PropTypes.bool, // hide reply actions
    isFocused: PropTypes.bool,
    // actions
    onTapPin: PropTypes.func,
    onTapEdit: PropTypes.func,
    onTapDelete: PropTypes.func,
    onTapReply: PropTypes.func,
    isDeleteLoading: PropTypes.bool,
    selectedChatRoomIndex: PropTypes.number.isRequired,
    chatType: PropTypes.string,
    updatedAt: PropTypes.number,
    highlightedText: PropTypes.string,
    isHighLighted: PropTypes.bool,
    configs: PropTypes.arrayOf(PropTypes.shape({
        app_code: PropTypes.string.isRequired,
        config_key: PropTypes.string.isRequired,
        config_value: PropTypes.string.isRequired
    })),
};

ChatItem.defaultProps = {
    userType: 'internal',
    // flags
    isNew: false,
    isPinned: false,
    canEdit: false,
    updatedAt: 0,
    canDelete: false,
    isReply: false,
    configs:[],
    isFocused: false,
    // actions
    onTapPin: () => { },
    onTapEdit: () => { },
    onTapDelete: () => { },
    onTapReply: () => { },
    isDeleteLoading: false,
    chatType: 'comment',
    highlightedText: "",
    taggedUsers: [],
    isHighLighted: false
};

export default ChatItem;