import React from "react";
import PropTypes from "prop-types";
import { InputBlock, StyledDiv, ErrorBlock } from "./styles";
import { Text } from "../../atoms";
import { LUP_FUNCTIONAL_ERROR_RED, LUP_MAIN_FONT_SIZE12, LUP_MAIN_FONT_BOLD600 } from '../../../theme';
import InputField from '../InputField';

const CompareModalItemSelector = ({ title, placeholder, onSubmit, compareKey, error, currentItemKey, width, inputValueForError }) => {
  const [value, setValue] = React.useState("");

  if(inputValueForError && error && !value) {
    setValue(inputValueForError);
  }

  return (
    <StyledDiv compareKey={compareKey} width={width}
    >
      <InputBlock>
        <InputField 
          label={title} 
          placeholder={placeholder}
          onChange={event => {
            if(event.target.value) {
              setValue(event.target.value)
            } else {
              setValue(-1); //to change value after error
            }
          }}
          error={compareKey === currentItemKey && error}
          disabled={currentItemKey !== compareKey}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              onSubmit(value,compareKey)
            }
          }}
          value={value !== -1 ? value : ''} //to change value after error
        />
        <ErrorBlock>
          <Text fontSize={LUP_MAIN_FONT_SIZE12} color={LUP_FUNCTIONAL_ERROR_RED}>
            {error}
          </Text>
        </ErrorBlock>
      </InputBlock>
    </StyledDiv>
  );
};

CompareModalItemSelector.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  currentItemKey: PropTypes.string,
  compareKey: PropTypes.string,
  error: PropTypes.bool,
  width: PropTypes.string,
};

CompareModalItemSelector.defaultProps = {
  title: "",
  placeholder: "Add IAN or Product No",
  onSubmit: () => {},
  compareKey: "",
  currentItemKey: "",
  error: false,
};

export default CompareModalItemSelector;
