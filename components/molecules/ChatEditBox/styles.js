import styled from 'styled-components';
import { FlexBlock } from "../../atoms";
import { StyledComment } from '../ChatItem/styles'
import {
    LUP_SPACING_17,
    LUP_SPACING_15,
    LUP_SPACING_10,
    LUP_SPACING_20
  } from "../../../theme";

const StyledFlexBlock = styled(FlexBlock)`
    margin: 0px ${LUP_SPACING_17} 0px ${LUP_SPACING_15};
`;

const StyledEditComment = styled(StyledComment)`
    &.ant-comment 
    > .ant-comment-inner 
    > .ant-comment-content 
    > .ant-comment-actions {
        padding-top: ${LUP_SPACING_10}
    }
    &.ant-comment 
    > .ant-comment-inner 
    > .ant-comment-content 
    > .ant-comment-actions
    > li {
        padding-right: ${LUP_SPACING_20}
    }

    &.ant-comment 
    > .ant-comment-inner 
    > .ant-comment-content {
        margin-right: ${LUP_SPACING_17}
    }

    &.ant-comment > .ant-comment-inner
    > .ant-comment-avatar {
        margin-right: ${LUP_SPACING_15};
    }
`;

export { StyledFlexBlock, StyledEditComment };
