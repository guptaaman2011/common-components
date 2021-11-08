import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessagesTypes } from '../../../utils/constants';
import { Text } from '../../atoms';
import { LUP_FUNCTIONAL_ERROR_RED, LUP_MAIN_FONT_SIZE12 } from '../../../theme';
import { StyledSearchInput } from './styles';


const SearchInput = ({ value, suffix, onSearch, noChatFound, placeholder }) => {
    const [_value, setValue] = useState(value);
    //useEffect : value
    useEffect(() => {
        setValue(value);
    }, [value]);
    return (
        <>
        <StyledSearchInput
            value={_value}
            placeholder={placeholder}
            onSearch={onSearch}
            onChange={(e) => setValue(e.target.value)}
            suffix={suffix}
            noChatFound={noChatFound}
        />
        {noChatFound && <Text color={LUP_FUNCTIONAL_ERROR_RED} fontSize={LUP_MAIN_FONT_SIZE12}>{ErrorMessagesTypes.SEARCH_MESSAGES_FAILED}</Text>}
        </>
    )
}

SearchInput.propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func,
    suffix: PropTypes.node,
    noChatFound: PropTypes.bool,
    placeholder: PropTypes.string
}

SearchInput.defaultProps = {
    value: "",
    onSearch: () => { },
    suffix: <></>,
    noChatFound: false,
    placeholder: "Search Keywords"
}

export default SearchInput;