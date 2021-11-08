import React from "react";
import PropTypes from "prop-types";
import { Label, Input, Block } from '../../atoms';
import { LabelWrapper } from './styles';

const InputField = ({
    label,
    style,
    placeholder,
    onChange,
    disabled,
    error,
    onKeyPress,
    value
}) => (
    <Block style={{ ...style }}>
        <LabelWrapper>
            <Label error={error} disabled={disabled}>{label}</Label>
        </LabelWrapper>
        <Input 
        className={error && "on-error"} 
        disabled={disabled} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange} 
        onKeyPress={onKeyPress} />
    </Block>
);

InputField.PropTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.string,
}

InputField.defaultProps = {
    placeholder: '',
    style: {},
    onChange: () => {},
    disabled: false,
    error: '',
}

export default InputField;