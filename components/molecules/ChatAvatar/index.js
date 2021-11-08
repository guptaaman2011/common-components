import React from 'react';
import PropTypes from 'prop-types';
import { LUP_BASE_BLUE, LUP_SECONDARY_DEEP_YELLOW, LUP_FUNCTIONAL_ERROR_RED } from '../../../theme';
import { StyledChatBadge, StyledChatAvatar } from './styles';

const avatarColor = {
    'internal': LUP_BASE_BLUE, 
    'external': LUP_SECONDARY_DEEP_YELLOW,
};

const ChatAvatar = ({ children, type, showDot }) => {
    const avatar = (
        <StyledChatAvatar bg={avatarColor[type]}>
            {children}
        </StyledChatAvatar>
    );

    if (showDot) {
        return (
            <StyledChatBadge
                offset={[-4, 4]}
                dot
            >
                {avatar}
            </StyledChatBadge>
        )
    }

    return avatar;
}

ChatAvatar.propTypes = {
    children: PropTypes.array,
    type: PropTypes.oneOf(['internal', 'external']),
    showDot: PropTypes.bool,
};

ChatAvatar.defaultProps = {
    children: '',
    type: 'internal',
    showDot: false,
};

export default ChatAvatar;
