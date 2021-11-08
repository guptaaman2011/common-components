import styled from 'styled-components';
import { Comment as AntComment } from 'antd';
import { LUP_BASE_GREY_DARKEST, LUP_MAIN_FONT_SIZE14, LUP_SPACING_12, LUP_SPACING_14, LUP_SPACING_22, LUP_SPACING_6, LUP_SPACING_7, LUP_SPACING_8, LUP_SPACING_13 } from '../../../theme';

const StyledComment = styled(AntComment)`
    &.ant-comment {
        width: 100%;
        background: ${({ background }) => background};
        white-space: break-spaces;
    }

    &.ant-comment
    > .ant-comment-inner
    > .ant-comment-content
    > .ant-comment-content-author
    > .ant-comment-content-author-name
    > *:hover {
        color: ${LUP_BASE_GREY_DARKEST};
    }

    &.ant-comment > .ant-comment-inner {
        padding: 0px;
    }
    
    &.ant-comment > .ant-comment-nested {
        margin-left: 0px;
    }

    &.ant-comment > .ant-comment-inner
    > .ant-comment-avatar {
        margin-right: ${LUP_SPACING_8}
    }

    &.ant-comment
    > .ant-comment-inner
    > .ant-comment-content
    > .ant-comment-content-author
    > .ant-comment-content-author-name {
        width: 100%;
        padding-right: 0px;
    }

    &.ant-comment
    > .ant-comment-inner
    > .ant-comment-content
    > .ant-comment-content-author
    > .ant-comment-content-author-time {
        right: 0;
        position: absolute;
    }

    &.ant-comment 
    > .ant-comment-inner 
    > .ant-comment-content 
    > .ant-comment-actions {
        margin: 0px;
    }

    &.ant-comment 
    > .ant-comment-inner 
    > .ant-comment-content 
    > .ant-comment-actions > li > span {
        padding-right: ${LUP_SPACING_7};
        color: #0076BF;
        font-size: ${LUP_MAIN_FONT_SIZE14};
        padding-top: ${LUP_SPACING_6};
    }
`
const StyledChatAction = styled.span`
    padding-right: ${LUP_SPACING_12};
`

const StyledChatPinAction = styled.span`
    padding-left: ${LUP_SPACING_8};
`

const StyledChatReplyAction = styled.span`
    color: ${props => props.color} !important;
    padding-right: ${LUP_SPACING_13};
    line-height: ${LUP_SPACING_22};
`
const StyledChatReplyCountAction = styled.span`
`

const StyleChatItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0px ${LUP_SPACING_14};
`;


export { 
    StyledComment,
    StyledChatAction, 
    StyledChatPinAction,
    StyledChatReplyAction,
    StyledChatReplyCountAction, 
    StyleChatItemBlock,
};