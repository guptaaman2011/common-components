import React from 'react';
import PropTypes from 'prop-types';
import { Text } from "../../atoms"
import { WHITE, LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_SIZE10, LUP_SPACING_1 } from '../../../theme';
import {
    StyledChatListDivider,
    StyledTextDiv,
    StyledWrapper
} from "./styles";

const ChatListDateLabel = ({ children, ...props }) => {
    const marginTop = !props.marginTop ? '5px' : props.marginTop;
    return (
        <StyledWrapper className='date-timeline-label'>
            <StyledChatListDivider marginTop={marginTop}>
                <StyledTextDiv>
                    <Text marginTop={LUP_SPACING_1} marginBottom={LUP_SPACING_1} color={WHITE} fontSize={LUP_MAIN_FONT_SIZE10} fontWeight={LUP_MAIN_FONT_BOLD600}>
                        {children}
                    </Text>
                </StyledTextDiv>
            </StyledChatListDivider>
        </StyledWrapper>
    )
}

ChatListDateLabel.propTypes = {
    children: PropTypes.string,
};

ChatListDateLabel.defaultProps = {
    children: '',
};

export default ChatListDateLabel;