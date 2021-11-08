import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import {
  LUP_MAIN_FONT,
  LUP_MAIN_FONT_NORMAL,
  LUP_FUNCTIONAL_ERROR_RED_LIGHTEST,
  LUP_BASE_GREY_DARKEST, 
  LUP_BASE_GREY_DARK, 
  LUP_FORM_ENABLED_BACKGROUND, 
  LUP_FORM_DISABLED_BACKGROUND, 
} from '../../../theme';

const { TextArea: AntTextArea } = AntInput;

const StyledTextArea = styled(AntTextArea)`
&.ant-input-affix-wrapper .ant-input {
  width: 100%;
  color: ${LUP_BASE_GREY_DARKEST};
  font-family: ${LUP_MAIN_FONT};
  line-height: 24px;
  font-size: 14px;
  text-align: left;
  padding: 4px auto 4px 8px;
  box-shadow: none;    
  font-weight: ${LUP_MAIN_FONT_NORMAL};
  outline: none;
  border: none;
  height: 35px;
  border-radius: 2px;
  resize: none;
  background-color: ${LUP_FORM_ENABLED_BACKGROUND} !important;

  &:placeholder {
    color: ${LUP_BASE_GREY_DARK};
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }

  &[type='password'] {
    letter-spacing: 2px;

    &::placeholder {
      letter-spacing: 0;
    }
  }

  &[type='text'] {      
    background-color: ${LUP_FORM_ENABLED_BACKGROUND};

    &.on-focus {
      border: none;
    }

    &.on-error {
      border: none;
      background-color: ${LUP_FUNCTIONAL_ERROR_RED_LIGHTEST};
    }

    &:disabled {
      background-color: ${LUP_FORM_DISABLED_BACKGROUND};
      color: ${LUP_BASE_GREY_DARK};        
    }
  }
}

&.ant-input {
  width: 100%;
  color: ${LUP_BASE_GREY_DARKEST};
  font-family: ${LUP_MAIN_FONT};
  line-height: 24px;
  font-size: 14px;
  text-align: left;
  padding: 4px auto 4px 8px;
  box-shadow: none;    
  font-weight: ${LUP_MAIN_FONT_NORMAL};
  outline: none;
  border: none;
  height: 35px;
  border-radius: 2px;
  resize: none;
  &:placeholder {
    color: ${LUP_BASE_GREY_DARK};
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }

  &[type='password'] {
    letter-spacing: 2px;

    &::placeholder {
      letter-spacing: 0;
    }
  }

  &[type='text'] {      
    background-color: ${LUP_FORM_ENABLED_BACKGROUND};

    &.on-focus {
      border: none;
    }

    &.on-error {
      border: none;
      background-color: ${LUP_FUNCTIONAL_ERROR_RED_LIGHTEST};
    }

    &:disabled {
      background-color: ${LUP_FORM_DISABLED_BACKGROUND};
      color: ${LUP_BASE_GREY_DARK};        
    }
  }
  background-color: ${LUP_FORM_ENABLED_BACKGROUND} !important;
  overflow: hidden;
}
`;

export { StyledTextArea };
