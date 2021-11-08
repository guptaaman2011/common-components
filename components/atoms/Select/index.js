import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect, StyledOptionContent, AntOption, StyledDropDropArrow, SelectWrapper } from './styles';
import CaredDownBlack from "../../../assets/images/caret-down-black.svg";
import IconButton from '../IconButton';

const renderOptionList = (options, optionStyle) =>
    options.map(({ key, value, img }) => (
        <AntOption key={key || value} value={key !== undefined ? key : value} style={optionStyle}>
            {img ? (
                <StyledOptionContent>
                    {img}
                    <span>{value}</span>
                </StyledOptionContent>
            ) : (
                    value
                )}
        </AntOption>
    ));

const Select = ({
    options,
    optionStyle,
    ...props
}) => (
        <SelectWrapper>
            <StyledSelect
                {...props}
                getPopupContainer={({ parentNode }) => parentNode}
                dropdownClassName="dropdown-content-wrapper"
                labelInValue
                suffixIcon={<IconButton size="10px" style={{ height: '10px' }} src={CaredDownBlack} />}
                dropdownRender={menu => (
                    <>
                    <StyledDropDropArrow />
                      {menu}
                    </>
                )}
            >
                {renderOptionList(options, optionStyle)}
            </StyledSelect>
        </SelectWrapper>
    );

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    optionStyle: PropTypes.objectOf(PropTypes.any),
};

Select.defaultProps = {
    options: [],
    optionStyle: {},
};

export default Select;