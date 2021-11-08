import React from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import PropTypes from 'prop-types';
import './mention-style.css';
import { Text } from '..';
import ChatAvatar from '../ChatAvatar';
import { StyledMentionBottomArrow } from './styles';

const ChatReactMentions = ({value, onChange, placeholder, users}) => {
    return (
    <MentionsInput
        value={value}
        onChange={onChange}
        markup="@{{__type__||__id__||__display__}}"
        placeholder={placeholder}
        className="mentions"
        allowSuggestionsAboveCursor
    >
        <Mention
            type="user"
            trigger="@"
            data={users.map(user => ({
                id: user.id,
                display: user.name
            }))}
            className="mentions__mention"
            renderSuggestion={(entry, search, highlightedDisplay, index, focused) => {
                return <>
                {index === users.length - 1 ?
                <StyledMentionBottomArrow/>:
                 <></>}
                    <ChatAvatar>
                        {entry.display.split(' ').map(i => i.charAt(0))}
                    </ChatAvatar> 
                    <Text style={{paddingLeft: '8px'}}>{entry.display}</Text>
                </>
            }}
        />
    
    </MentionsInput>
    );
}
ChatReactMentions.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    users: PropTypes.arrayOf({
        id: PropTypes.string,
        name: PropTypes.string,
    }),
}

ChatReactMentions.defaultProps = {
    value: "",
    onChange: () => {},
    placeholder: "Add Comment...",
    users: [{
        id: '1',
        name: 'Abcd',
    }],
}

export default ChatReactMentions;