import styled from 'styled-components';
import { Input as AntInput } from 'antd';

import {
  LUP_MAIN_FONT,
  LUP_MAIN_FONT_NORMAL,
  LUP_FUNCTIONAL_ERROR_RED,
  LUP_FUNCTIONAL_ERROR_RED_LIGHTEST,
  LUP_BASE_BLUE, 
  LUP_BASE_GREY_DARKEST,
  LUP_BASE_GREY_DARKER, 
  LUP_BASE_GREY_DARK, 
  LUP_BASE_GREY, 
  LUP_FORM_ENABLED_BACKGROUND, 
  LUP_FORM_DISABLED_BACKGROUND, 
  LUP_MAIN_BORDER_WIDTH2,
  LUP_MAIN_BORDER_WIDTH1,
  LUP_SPACING_22,
  LUP_SPACING_6,
  LUP_SPACING_7,
  LUP_SPACING_10
} from '../../../theme';

const StyledInput = styled(AntInput)`
  &.ant-input-affix-wrapper .ant-input {
    width: 100%;
    color: ${LUP_BASE_GREY_DARKER};
    font-family: ${LUP_MAIN_FONT};
    line-height: ${LUP_SPACING_22};
    font-size: 14px;
    text-align: left;
    padding: ${LUP_SPACING_6} ${LUP_SPACING_10} ${LUP_SPACING_7};
    box-shadow: none;    
    font-weight: ${LUP_MAIN_FONT_NORMAL};
    outline: none;
    border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY};
    height: 35px;
    border-radius: 2px;

    &:placeholder {
      color: ${LUP_BASE_GREY_DARK};
    }

    &:hover {
      outline: none;
      border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_BLUE};
    }

    
    &:focus, &:active {
      outline: none;
      border: ${LUP_MAIN_BORDER_WIDTH2} solid ${LUP_BASE_BLUE};
    }

    &[type='password'] {
      letter-spacing: 2px;

      &::placeholder {
        letter-spacing: 0;
      }
    }

    &[type='text'] {      
      background-color: ${LUP_FORM_ENABLED_BACKGROUND};

      &:active, &.on-focus, &:focus {
        border: ${LUP_MAIN_BORDER_WIDTH2} solid ${LUP_BASE_BLUE};
      }

      &.on-error {
        border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_FUNCTIONAL_ERROR_RED};
        background-color: ${LUP_FUNCTIONAL_ERROR_RED_LIGHTEST};
        color: ${LUP_BASE_GREY_DARKEST};
      }

      &:disabled {
        background-color: ${LUP_FORM_DISABLED_BACKGROUND};
        color: ${LUP_BASE_GREY_DARK};   
        border: none;     
      }

      &::placeholder {
        color: ${LUP_BASE_GREY_DARK};
      }
    }
  }

  &.ant-input {
    width: 100%;
    color: ${LUP_BASE_GREY_DARKER};
    font-family: ${LUP_MAIN_FONT};
    line-height: ${LUP_SPACING_22};
    font-size: 14px;
    text-align: left;
    padding: ${LUP_SPACING_6} ${LUP_SPACING_10} ${LUP_SPACING_7};
    box-shadow: none;    
    font-weight: ${LUP_MAIN_FONT_NORMAL};
    outline: none;
    border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY};
    height: 35px;
    border-radius: 2px;

    &::placeholder {
      color: ${LUP_BASE_GREY_DARK};
    }

    &:hover {
      outline: none;
      border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_BLUE};
    }

    &:active, &:focus {
      outline: none;
      border: ${LUP_MAIN_BORDER_WIDTH2} solid ${LUP_BASE_BLUE};
    }

    &[type='password'] {
      letter-spacing: 2px;

      &::placeholder {
        letter-spacing: 0;
      }
    }

    &[type='text'] {      
      background-color: ${LUP_FORM_ENABLED_BACKGROUND};

      &:active, &.on-focus, &:focus {
        border: ${LUP_MAIN_BORDER_WIDTH2} solid ${LUP_BASE_BLUE} !important;
      }

      &.on-error {
        border: 1px solid ${LUP_FUNCTIONAL_ERROR_RED};
        background-color: ${LUP_FUNCTIONAL_ERROR_RED_LIGHTEST};
        color: ${LUP_BASE_GREY_DARKEST};
      }

      &:disabled {
        background-color: ${LUP_FORM_DISABLED_BACKGROUND};
        color: ${LUP_BASE_GREY_DARK};      
        border: none;  
      }

      &::placeholder {
        color: ${LUP_BASE_GREY_DARK};
      }

      &:disabled::-webkit-input-placeholder { 
        color:${LUP_BASE_GREY};
      }
      &:disabled:-moz-placeholder { 
      }
      &:disabled::-moz-placeholder {
        color:${LUP_BASE_GREY};
      }
      &:disabled:-ms-input-placeholder { 
        color:${LUP_BASE_GREY};
      }
    }
  }
`;

export { StyledInput };
