import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Highlighter, SearchInput, Spinner, IconButton, CustomDropDown, Text } from '../../atoms';
import {
    ChatItems,
    ChatSubmitBox,
    ChatHeaderTabs,
    ChatHeader,
    AlertPopUp,
} from '../../molecules';
import {
    StyledSearchNavText,
    StyledSearchNavArrow,
    StyledSearchNavClose,
    StyledChatSearchInputBlock,
    StyledChatbox,
    StyledChatboxContent,
    StyledChatboxHeader,
    StyledChatboxFooter,
    StyledCancelReplyAction,
    StyledMenu,
    StyledDropDropArrow,
    StyledFlexWrapper,
    StyledVerText,
    StyledVerNoText
} from "./styles";
import { Scrollbars } from 'react-custom-scrollbars';
import { ChatTypes, ChatHeaderText, ChatSubmitBoxPlaceholderText, ChatSubmitBoxReplyLabel, ChatSearchBoxPadding } from '../../../utils/constants';

import { HasRequiredPermission } from '../../../utils/HasRequiredPermission';
import {
    VIEW_COMMENTS,
    ADD_COMMENTS,
    ADD_ATTACHMENTS,
    DELETE_ALL_COMMENTS,
    DELETE_OWN_COMMENTS,
    EDIT_ALL_COMMENTS,
    EDIT_OWN_COMMENTS
} from '../../../utils/permissions';

import SearchUpInactive from '../../../assets/images/icons/comments/SearchUpInactive.svg';
import SearchDownInactive from '../../../assets/images/icons/comments/SearchDownInactive.svg';
import SearchCrossIcon from '../../../assets/images/icons/comments/SearchCross.svg';
import CaretDownBlackSVG from "../../../assets/images/caret-down-black.svg";
import Utils from '../../../utils/utility';
import { LUP_SECONDARY_DEEP_YELLOW, LUP_BASE_BLUE_DARK, LUP_SPACING_4, LUP_SPACING_6 } from '../../../theme';

const { Item } = StyledMenu;


const ChatBox = ({
    chatItems,
    replyItems,
    onSubmit,
    onSearch,
    searchText,
    onScrollFrame,
    loading,
    chatType,
    users,
    addAttachment,
    attachments,
    deleteAttachment,
    cancelAttachmentUpload,
    userId,
    onTapEditMessage,
    onTapDeleteMessage,
    onCancelEditMessage,
    onSaveEditMessage,
    isCreating,
    isEditLoading,
    isDeleteLoading,
    errorMessage,
    rooms,
    roomLabelModifier,
    currentRoom,
    onRoomChange,
    onTapReply,
    onCancelReply,
    userPermissions,
    onTapPin,
    pinItems,
    highLightedMessage,
    prevLoading,
    nextLoading,
    repliesTo,
    onCancelPopUp,
    updateRefId,
    versionOptions,
    configs,
    headerComponent
}) => {
    const renderLoader = (isLoading) => {
        if (isLoading) {
            // spinnerPosition
            const spinnerPosition = chatItems.length > 0 ? 'relative' : 'absolute';
            return <Spinner style={{
                position: spinnerPosition,
                top: '50%',
                left: '50%'
            }} />
        }
    }

    rooms = rooms.map(
        room => {
            return ({
                index: room.index,
                label: room.app.ref.name.toUpperCase(),
                value: room.id,
            })
        }
    );

    const modifiedRooms = rooms.map((room) => {
        return {
            ...room,
            label: roomLabelModifier[room.label] || room.label  
        }
    });

    const checkEditPermission = (commentUserId) => {
        return ((userId === commentUserId &&
            HasRequiredPermission(userPermissions, [EDIT_OWN_COMMENTS])) ||
            HasRequiredPermission(userPermissions, [EDIT_ALL_COMMENTS]))
    }

    const checkDeletePermission = (commentUserId) => {
        return ((userId === commentUserId &&
            HasRequiredPermission(userPermissions, [DELETE_OWN_COMMENTS])) ||
            HasRequiredPermission(userPermissions, [DELETE_ALL_COMMENTS]))
    }

    /* Search */
    let scrollBar = React.createRef();
    const [commentIDs, setCommentIds] = React.useState([]);
    const [focusedCommentId, setFocusedCommentID] = React.useState("");
    const [commentIdToPosMap, setCommentIdToPosMap] = React.useState({});
    const [scrollToCommentId, setScrollToCommentId] = React.useState(null);
    const [version, setVersion] = React.useState(versionOptions.length && versionOptions[0].value);

    const currentItemPos = commentIdToPosMap[focusedCommentId] || 0;

    const searchInputSuffix = <>
        <StyledSearchNavText>{currentItemPos}/{chatType === ChatTypes.COMMENT ? chatItems.length : replyItems.length}</StyledSearchNavText>
        <StyledSearchNavArrow>
            <IconButton src={SearchUpInactive} onClick={() => navigateSearch("prev")} />
        </StyledSearchNavArrow>
        <StyledSearchNavArrow>
            <IconButton src={SearchDownInactive} onClick={() => navigateSearch("next")} />
        </StyledSearchNavArrow>
        <StyledSearchNavClose>
            <IconButton src={SearchCrossIcon} onClick={() => onSearch("")} />
        </StyledSearchNavClose>
    </>

    const showSearchPrefix = searchText !== "" && !loading && !prevLoading && !nextLoading;

    // methods
    const navigateSearch = (to) => {
        const currentIndex = currentItemPos - 1;

        switch (to) {
            case 'next':
                const nextIndex = currentIndex + 1 > commentIDs.length ? commentIDs.length : currentIndex + 1;
                const nextId = commentIDs[nextIndex];
                if (commentIdToPosMap[nextId]) {
                    setFocusedCommentID(nextId);
                }
                break;
            case 'prev':
                const prevIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
                const prevId = commentIDs[prevIndex];
                if (commentIdToPosMap[prevId]) {
                    setFocusedCommentID(prevId);
                }
                break;
            default:
        }
    }

    const handleVersionClick = (e) => {
        if (e && e.key) {
            const selectedVersion = versionOptions.find(o => o.key == e.key);
            if (selectedVersion) {
                setVersion(selectedVersion.value)
                updateRefId(selectedVersion.key);
            }
        }
    }

    const getVersionDropdown = () => {
        const versionMenu =
            <StyledMenu>
                <StyledDropDropArrow />
                {versionOptions.length && versionOptions.map(version => (
                    <Item key={version.key} onClick={(e) => { handleVersionClick(e) }}>
                        {version.value}
                    </Item>
                ))}
            </StyledMenu>
        return (
            <>
                <CustomDropDown
                    visible={true}
                    overlay={versionMenu}
                    trigger={["click"]}
                    placement="bottomCenter"
                >
                    <StyledFlexWrapper>
                        <StyledVerText>Ver</StyledVerText>
                        <StyledVerNoText>{version}</StyledVerNoText>
                        <IconButton
                            src={CaretDownBlackSVG}
                            style={{ display: 'flex', height: '10px', width: '10px', alignItems: 'center', justifyContent: 'center' }}
                        />
                    </StyledFlexWrapper>
                </CustomDropDown>
            </>
        )
    }

    //useEffect : chatItems
    useEffect(() => {
        const showSearchPrefix = searchText !== "" && !loading && !prevLoading && !nextLoading;
        if (showSearchPrefix) {
            const comments = chatType === ChatTypes.COMMENT ? chatItems : replyItems;
            const _commentIds = comments.map(chatItem => chatItem.messageId);
            const _commentIdToPosMap = {};
            _commentIds.forEach((commentId, index) => _commentIdToPosMap[commentId] = index + 1);
            setCommentIdToPosMap(_commentIdToPosMap)
            if (replyItems.length && searchText === '') {
                setScrollToCommentId(replyItems[replyItems.length - 1].messageId);
            } else if (focusedCommentId !== "" && _commentIds.includes(focusedCommentId)) {
                //
            } else {
                setFocusedCommentID(_commentIds[0]);
            }
            setCommentIds(_commentIds);
        }
    }, [searchText, loading, chatItems, replyItems]);

    const _prevLoading = Utils.usePrevious(prevLoading);
    const _nextLoading = Utils.usePrevious(nextLoading);
    const _loading = Utils.usePrevious(loading);
    const oldRepliesTo = Utils.usePrevious(repliesTo);
    const _isCreating = Utils.usePrevious(isCreating);

    useEffect(() => {

        // while fetching new previous comments, setting id to fix the scroll position
        if (prevLoading && !_prevLoading) {
            setScrollToCommentId(chatItems[0].messageId);
        }

        // while fetching new next comments, setting id to fix the scroll position
        if (nextLoading && !_nextLoading) {
            setScrollToCommentId(chatItems[chatItems.length - 1].messageId);
        }

        // when new previous/next comments are fetched, 
        // fix the scroll position from where new messages are fetched
        if ((!prevLoading && _prevLoading) || (!nextLoading && _nextLoading)) {
            setFocusedCommentID(scrollToCommentId);
            // setScrollToCommentId(null);
        }

        // when messages are fetched for the first time or reply section is opened
        if ((!loading && _loading) || (repliesTo !== '' && !highLightedMessage.commentId) || (!isCreating && _isCreating)) {
            if (scrollBar) {
                scrollBar.scrollToBottom()
            }
        }

        // when reply window is closed, to set the comment position of repliesTo id
        if (oldRepliesTo !== '' && repliesTo === '') {
            setFocusedCommentID(oldRepliesTo);
            // setScrollToCommentId(null);
        }
    }, [prevLoading, nextLoading, loading, repliesTo, isCreating]);
    /* Search */

    return (
        <StyledChatbox >
            <StyledChatboxHeader>
                <Highlighter color={currentRoom.app && currentRoom.index % 2 !== 0 && '#F2994A'} />
                {headerComponent || <ChatHeader
                    headerText={chatType === ChatTypes.COMMENT ? ChatHeaderText.COMMENT : ChatHeaderText.REPLY}
                    showVersions
                    suffix={getVersionDropdown()}
                />}
                <ChatHeaderTabs
                    selectedChatRoom={currentRoom}
                    tabs={modifiedRooms}
                    onChange={(event) => onRoomChange(event)}
                />
                <StyledChatSearchInputBlock padding={ChatSearchBoxPadding[chatType]}>
                    <SearchInput
                        value={searchText}
                        onSearch={onSearch}
                        suffix={showSearchPrefix && searchInputSuffix}
                        allowClear={showSearchPrefix}
                        noChatFound={searchText && !prevLoading && !nextLoading && !loading && !isCreating && !isEditLoading && !isDeleteLoading && (chatType === ChatTypes.COMMENT ? chatItems.length === 0 : replyItems.length === 0)}
                    />
                </StyledChatSearchInputBlock>
                {chatType === ChatTypes.REPLY && <StyledCancelReplyAction
                    onClick={() => onCancelReply()}
                    color={currentRoom.index % 2 !== 0 ? LUP_SECONDARY_DEEP_YELLOW : LUP_BASE_BLUE_DARK}>
                    Cancel Reply
                </StyledCancelReplyAction>}
            </StyledChatboxHeader>
            <StyledChatboxContent>
                <Scrollbars
                    ref={(elm) => {
                        scrollBar = elm;
                    }}
                    onScrollFrame={onScrollFrame}
                    renderTrackHorizontal={props => (
                        <div {...props} className="track-horizontal" style={{ display: 'none' }} />
                    )}>
                    {renderLoader(prevLoading || loading)}
                    <AlertPopUp
                        type="error"
                        message={errorMessage}
                        onCancelPopUp={onCancelPopUp}
                    />
                    {HasRequiredPermission(userPermissions, [VIEW_COMMENTS]) &&
                        <ChatItems
                            chatItems={chatItems}
                            replyItems={replyItems}
                            focusedCommentId={focusedCommentId}
                            chatType={chatType}
                            users={users}
                            userId={userId}
                            onTapReply={onTapReply}
                            appCode={currentRoom.app && currentRoom.app.code}
                            onTapPin={onTapPin}
                            pinItems={pinItems}
                            onTapEditMessage={onTapEditMessage}
                            onTapDeleteMessage={onTapDeleteMessage}
                            onCancelEditMessage={onCancelEditMessage}
                            onSaveEditMessage={onSaveEditMessage}
                            isEditLoading={isEditLoading}
                            isDeleteLoading={isDeleteLoading}
                            selectedChatRoomIndex={currentRoom.index}
                            configs={configs}
                            checkEditPermission={checkEditPermission}
                            checkDeletePermission={checkDeletePermission}
                            canAddAttachments={HasRequiredPermission(userPermissions, [ADD_ATTACHMENTS])}
                            searchText={searchText}
                            highLightedCommentId={highLightedMessage && highLightedMessage.commentId}
                            highLightedReplyId={highLightedMessage && highLightedMessage.replyId}
                            setFocusedCommentID={setFocusedCommentID}
                        />}
                    {renderLoader(nextLoading)}
                </Scrollbars>
            </StyledChatboxContent>
            {HasRequiredPermission(userPermissions, [ADD_COMMENTS]) &&
                <StyledChatboxFooter>
                    <ChatSubmitBox
                        isCreating={isCreating}
                        onScrollFrame={onScrollFrame}
                        onSubmit={onSubmit}
                        users={users}
                        addAttachment={addAttachment}
                        attachments={attachments}
                        deleteAttachment={deleteAttachment}
                        cancelAttachmentUpload={cancelAttachmentUpload}
                        selectedChatRoomIndex={currentRoom.index}
                        canAddAttachments={HasRequiredPermission(userPermissions, [ADD_ATTACHMENTS])}
                        placeholder={chatType === ChatTypes.COMMENT ? ChatSubmitBoxPlaceholderText.COMMENT : ChatSubmitBoxPlaceholderText.REPLY}
                        boxLabel={chatType === ChatTypes.REPLY && ChatSubmitBoxReplyLabel}
                    />
                </StyledChatboxFooter>}
        </StyledChatbox>
    )
}

ChatBox.propTypes = {
    versionOptions: PropTypes.array,
    chatItems: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        author: PropTypes.author,
        userType: PropTypes.oneOf(['internal', 'external']),
        isNew: PropTypes.bool,
        taggedUsers: PropTypes.arrayOf({
            id: PropTypes.string,
            name: PropTypes.string,
        }),
        text: PropTypes.string,
        timestamp: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        messageId: PropTypes.string,
        reference: PropTypes.objectOf({
            pin_id: PropTypes.string
        })
    })),
    replyItems: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        author: PropTypes.author,
        userType: PropTypes.oneOf(['internal', 'external']),
        isNew: PropTypes.bool,
        taggedUsers: PropTypes.arrayOf({
            id: PropTypes.string,
            name: PropTypes.string,
        }),
        text: PropTypes.string,
        timestamp: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        messageId: PropTypes.string,
        reference: PropTypes.objectOf({
            pin_id: PropTypes.string
        })
    })),
    users: PropTypes.arrayOf({
        id: PropTypes.string,
        name: PropTypes.string,
    }).isRequired,
    onSubmit: PropTypes.func,
    onSearch: PropTypes.func,
    searchText: PropTypes.string,
    onScrollFrame: PropTypes.func,
    loading: PropTypes.bool,
    errorMessage: PropTypes.string,
    chatType: PropTypes.string.isRequired,
    addAttachment: PropTypes.func,
    attachments: PropTypes.arrayOf(PropTypes.shape({})),
    deleteAttachment: PropTypes.func,
    cancelAttachmentUpload: PropTypes.func,
    userId: PropTypes.string,
    onTapEditMessage: PropTypes.func,
    onCancelEditMessage: PropTypes.func,
    onSaveEditMessage: PropTypes.func,
    onTapDeleteMessage: PropTypes.func,
    isCreating: PropTypes.bool,
    isEditLoading: PropTypes.bool,
    isDeleteLoading: PropTypes.bool,
    currentRoom: PropTypes.object,
    onRoomChange: PropTypes.func,
    rooms: PropTypes.array,
    roomLabelModifier: PropTypes.shape({}),
    onTapReply: PropTypes.func,
    onCancelReply: PropTypes.func,
    userPermissions: PropTypes.array,
    onTapPin: PropTypes.func.isRequired,
    pinItems: PropTypes.array,
    highLightedMessage: PropTypes.shape({
        commentId: PropTypes.string,
        replyId: PropTypes.string
    }),
    onCancelPopUp: PropTypes.func,
    configs: PropTypes.arrayOf(PropTypes.shape({
        app_code: PropTypes.string.isRequired,
        config_key: PropTypes.string.isRequired,
        config_value: PropTypes.string.isRequired
    })),
    headerComponent: PropTypes.node,
};

ChatBox.defaultProps = {
    versionOptions: [],
    chatItems: PropTypes.arrayOf(PropTypes.shape({})),
    replyItems: PropTypes.arrayOf(PropTypes.shape({})),
    onSubmit: () => { },
    onSearch: () => { },
    searchText: "",
    onScrollFrame: () => { },
    loading: false,
    configs: [],
    errorMessage: '',
    addAttachment: () => { },
    attachments: [],
    deleteAttachment: () => { },
    cancelAttachmentUpload: () => { },
    userId: '',
    onTapEditMessage: () => { },
    onCancelEditMessage: () => { },
    onSaveEditMessage: () => { },
    onTapDeleteMessage: () => { },
    isCreating: false,
    isEditLoading: false,
    isDeleteLoading: false,
    currentRoom: {},
    onRoomChange: () => { },
    rooms: [],
    roomLabelModifier: {},
    onTapReply: () => { },
    onCancelReply: () => { },
    userPermissions: [],
    pinItems: [],
    versionOptions: [],
    highLightedMessage: {},
    onCancelPopUp: () => { },
    headerComponent: null,
};

export default ChatBox; 