import React from 'react';
import PropTypes from 'prop-types';
import { StyledCommentOptionsBlock, StyledBadge, StyledDiv } from './style';
import { Radio } from 'antd';
import { Text } from '../../atoms';
import { LUP_MAIN_FONT_SIZE12, LUP_FUNCTIONAL_ERROR_RED, LUP_MAIN_FONT_BOLD700, LUP_MAIN_FONT_NORMAL, LUP_FUNCTIONAL_ERROR_RED_LIGHTER } from '../../../theme';

const getRoomBgColor = (i,currentRoom, activeRoom) => {
    if (i%2 === 0 && activeRoom.id === currentRoom.value) {
        return '#0076BF';
    }
    if (i%2 !== 0 && activeRoom.id === currentRoom.value) {
        return '#F2994A';
    }
    return '#EEEEEE';
}

const getRoomBorderColor = (i,currentRoom, activeRoom) => {
    if (i%2 === 0 && activeRoom.id === currentRoom.value) {
        return '#4C9FD2';
    }
    if (i%2 !== 0 && activeRoom.id === currentRoom.value) {
        return '#F2C94C';
    }
    return '#DDDDDD';
}

const getLabelColor = (currentRoom, activeRoom) => {
    if (activeRoom.id === currentRoom) {
        return '#FFFFFF';
    }
    return '#A4A4A4';
}

const getStyle = (i,button, activeButton) => {
    return {
        backgroundColor: getRoomBgColor(i,button, activeButton),
        borderColor: getRoomBorderColor(i,button, activeButton)
    }
}

const renderRadioButtons = (buttons, activeButton) =>
    buttons.map((button,i) => {
        const { value, count, label } = button;
        return (<Radio.Button
            value={value}
            style={getStyle(i,button, activeButton)}
            id={value.id}
        >
            <StyledDiv>
                <Text 
                color={getLabelColor(value, activeButton)} 
                fontSize={LUP_MAIN_FONT_SIZE12} 
                lineHeight={LUP_MAIN_FONT_SIZE12}
                fontWeight={activeButton.id === value ? LUP_MAIN_FONT_BOLD700 : LUP_MAIN_FONT_NORMAL}
                >{label}</Text>
                <StyledBadge count={count} bgColor={activeButton.id === value ? LUP_FUNCTIONAL_ERROR_RED : LUP_FUNCTIONAL_ERROR_RED_LIGHTER}></StyledBadge>
            </StyledDiv>
        </Radio.Button>)
    });

const ChatHeaderTabs = props => {
    const width = 100/props.tabs.length;
    return (
        <StyledCommentOptionsBlock optionsWidth={`${width}%`}>
            <Radio.Group onChange={props.onChange} value={props.selectedChatRoom}>
                {renderRadioButtons(props.tabs, props.selectedChatRoom)}
            </Radio.Group>
        </StyledCommentOptionsBlock>
    )
}

ChatHeaderTabs.propTypes = {
    onChange: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
        count: PropTypes.number,
    })),
    selectedChatRoom: PropTypes.object.isRequired
}

ChatHeaderTabs.defaultProps = {
    tabs: [],
    onChange: () => { },
}

export default ChatHeaderTabs;