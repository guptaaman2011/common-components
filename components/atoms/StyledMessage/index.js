import React from 'react';
import PropTypes from 'prop-types';
import {
    LUP_BASE_GREY_DARK,
    LUP_BASE_BLUE,
    COMMENT_TEXT_HIGHLIGHT_DARK,
    COMMENT_TEXT_HIGHLIGHT_LIGHT,
    LUP_MAIN_FONT_SIZE14,
    LUP_SPACING_22
} from '../../../theme';

import { Text } from '..';
import { StyledHighlighter } from './styles';

// define in constants
const HighlightTypes = {
    SEARCH_TEXT: 'searchText',
    SEARCH_TEXT_FOCUSED: 'focusedSearchText',
    USER: 'user',
}

const specialCharacters = ["^", "$", "*", "+", "(", ")", "[", "{", "?", ".", "|", "\\"];
const StyledMessage = ({ text, config }) => {

    const highlight = () => {
        const keywordsToTypeMap = {};
        const keywords = [];
        const highlightCategories = Object.keys(config);

        highlightCategories.forEach(category => {
            config[category].forEach(_keyword => {
                if (_keyword) {
                    keywords.push(_keyword);
                    keywordsToTypeMap[_keyword] = category;
                }
            })
        })
        const handlePart = (part) => {
            const _partLower = part;
            const partType = keywordsToTypeMap[_partLower.toLowerCase()];
            switch (partType) {
                case HighlightTypes.USER:
                    return <Text color={LUP_BASE_BLUE}>{part}</Text>;
                case HighlightTypes.SEARCH_TEXT:
                    return <StyledHighlighter color={COMMENT_TEXT_HIGHLIGHT_LIGHT}>
                        {part}
                    </StyledHighlighter>
                case HighlightTypes.SEARCH_TEXT_FOCUSED:
                    return <StyledHighlighter color={COMMENT_TEXT_HIGHLIGHT_DARK}>
                        {part}
                    </StyledHighlighter>
                default:
                    return <Text color={LUP_BASE_GREY_DARK}>{part}</Text>;
            }
        }

        const keywordsWithSpecialCharacters = keywords.map(keyword => specialCharacters.includes(keyword)? "\\" + keyword : keyword);
        const parts = text.split(new RegExp(`(${keywordsWithSpecialCharacters.join('|')})`, 'gi'));
        return <>
            {parts.map(handlePart)}
        </>;

    }

    return (
        <Text fontSize={LUP_MAIN_FONT_SIZE14} lineHeight={LUP_SPACING_22}>
            {highlight()}
        </Text>
    )
}

StyledMessage.propTypes = {
    text: PropTypes.string,
    config: PropTypes.shape({}),
}

StyledMessage.defaultProps = {
    text: "",
    config: {},
}

export default StyledMessage;