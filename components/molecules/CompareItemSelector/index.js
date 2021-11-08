import React from "react";
import PropTypes from "prop-types";
import { StyledButton, InputBlock, StyledCard, ErrorBlock } from "./styles";
import { Text } from "../../atoms";
import InputField from '../InputField';
import { LUP_FUNCTIONAL_ERROR_RED, LUP_BASE_BLUE, LUP_MAIN_FONT_SIZE12, LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_SIZE14, 
  LUP_SPACING_18, LUP_MAIN_BORDER_WIDTH2, LUP_MAIN_BORDER_WIDTH1 } from '../../../theme';

const CompareItemSelector = ({ title, type, placeholder, onSubmit, compareKey, error, currentItemKey, inputValueForError }) => {
  const [value, setValue] = React.useState("");

  if(inputValueForError && error && !value) {
    setValue(inputValueForError);
  }

  return (
    <StyledCard compareKey={compareKey} 
    color={compareKey === "IAN_1" && LUP_BASE_BLUE}
    borderWidth={compareKey === "IAN_1" ? LUP_MAIN_BORDER_WIDTH2: LUP_MAIN_BORDER_WIDTH1}
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
          error={error}
          disabled={currentItemKey !== compareKey}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              onSubmit(value,compareKey)
            } 
          }}
          value={value !== -1 ? value : ''} //to change value after error
        />
        <ErrorBlock>
          <Text fontSize={LUP_MAIN_FONT_SIZE12} color={LUP_FUNCTIONAL_ERROR_RED} lineHeight={LUP_SPACING_18}>
            {error}
          </Text>
        </ErrorBlock>
      </InputBlock>
      <StyledButton
        size="smaller" colored="primary"
        disabled={!value || (currentItemKey !== compareKey)}
        onClick={() => onSubmit(value,compareKey)}
      >
        OK
      </StyledButton>
    </StyledCard>
  );
};

CompareItemSelector.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  currentItemKey: PropTypes.string,
  compareKey: PropTypes.string,
  styleCard: PropTypes.shape({}),
  error: PropTypes.bool,
};

CompareItemSelector.defaultProps = {
  title: "",
  type: "String",
  placeholder: "Add IAN or Product No",
  onSubmit: () => {},
  compareKey: "",
  currentItemKey: "",
  error: false,
};

export default CompareItemSelector;
