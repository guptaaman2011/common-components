import styled from 'styled-components';
import {
  Avatar as AntAvatar,
  Badge as AntBadge
} from 'antd';
import { LUP_MAIN_FONT_BOLD600, WHITE, LUP_SPACING_16, LUP_SPACING_28, LUP_FUNCTIONAL_ERROR_RED } from '../../../theme';

const StyledChatAvatar = styled(AntAvatar)`
  &.ant-avatar {
    font-size: 14px;
    background: ${props => props.bg};
    font-weight: ${LUP_MAIN_FONT_BOLD600};
    color: ${WHITE};
    line-height: ${LUP_SPACING_16};
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${LUP_SPACING_28};
    width: ${LUP_SPACING_28};
  }
`;

const StyledChatBadge = styled(AntBadge)`
 &.ant-badge-count, .ant-badge-dot, .ant-badge .ant-scroll-number-custom-component {
   height: 10px;
   width: 10px;
   background:${LUP_FUNCTIONAL_ERROR_RED};

 }
`;

export { StyledChatBadge, StyledChatAvatar };
