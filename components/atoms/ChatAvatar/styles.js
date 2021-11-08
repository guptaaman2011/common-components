import styled from 'styled-components';
import {
  Avatar as AntAvatar,
  Badge as AntBadge
} from 'antd';
import { LUP_MAIN_FONT_BOLD600, WHITE } from '../../../theme';

const StyledChatAvatar = styled(AntAvatar)`
  &.ant-avatar {
    font-size: 14px;
    background: ${props => props.bg};
    font-weight: ${LUP_MAIN_FONT_BOLD600};
    color: ${WHITE};
  }
`;

const StyledChatBadge = styled(AntBadge)`
 &.ant-badge-count, .ant-badge-dot, .ant-badge .ant-scroll-number-custom-component {
   height: 10px;
   width: 10px;
 }
`;

export { StyledChatBadge, StyledChatAvatar };
