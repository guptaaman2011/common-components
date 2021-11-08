import styled from 'styled-components';
import { Input } from '..';
import {
  LUP_MAIN_FONT,
  LUP_MAIN_FONT_NORMAL,
  LUP_FUNCTIONAL_ERROR_RED,
  LUP_FUNCTIONAL_ERROR_RED_LIGHTEST,
  LUP_BASE_GREY_DARKEST,
  LUP_BASE_GREY_DARK,
  LUP_BASE_GREY,
  LUP_FORM_DISABLED_BACKGROUND,
  LUP_BASE_BLUE,
  WHITE,
  LUP_BASE_BLUE_DARK,
  LUP_SPACING_24,
  LUP_MAIN_FONT_SIZE14,
  LUP_SPACING_4,
  LUP_SPACING_6,
  LUP_SPACING_10,
  LUP_SPACING_32,
  LUP_SPACING_30,
  LUP_MAIN_BORDER_WIDTH2,
  LUP_MAIN_BORDER_WIDTH1,
} from '../../../theme';
const { Search: AntSearch } = Input;

const StyledSearchInput = styled(AntSearch)`
&.ant-input-affix-wrapper {
  .ant-input:hover + .ant-input-suffix .anticon {
      color: ${LUP_BASE_BLUE_DARK};
  }

  .ant-input:focus + .ant-input-suffix .anticon {
    color: ${LUP_BASE_BLUE_DARK};
  }
  .ant-input-suffix .anticon {
    color: ${LUP_BASE_GREY};
  }
}
&.ant-input-affix-wrapper .ant-input {
    width: 100%;
    color: ${LUP_BASE_GREY_DARKEST};
    font-family: ${LUP_MAIN_FONT};
    line-height: ${LUP_SPACING_24};
    font-size: ${LUP_MAIN_FONT_SIZE14};
    text-align: left;
    padding: ${LUP_SPACING_4} ${LUP_SPACING_30} ${LUP_SPACING_6} ${LUP_SPACING_10};
    box-shadow: none;    
    font-weight: ${LUP_MAIN_FONT_NORMAL};
    outline: none;
    border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY};
    height: ${LUP_SPACING_32};
    border-radius: ${LUP_MAIN_BORDER_WIDTH2};

    &:placeholder {
      color: ${LUP_BASE_GREY_DARK};
    }

    &:hover,
    &:focus,
    &:active {
      outline: none;
      border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_BLUE};
    }

    &[type='password'] {
      letter-spacing: 2px;

      &::placeholder {
        letter-spacing: 0;
      }
    }

    &[type='text'] {      

      background-color: ${props => props.noChatFound ? LUP_FUNCTIONAL_ERROR_RED_LIGHTEST : WHITE};
      border-color: ${props => props.noChatFound && LUP_FUNCTIONAL_ERROR_RED};

      &.on-focus, &:focus {
        border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_BLUE};
      }

      &.on-error {
        border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_FUNCTIONAL_ERROR_RED};
        background-color: ${LUP_FUNCTIONAL_ERROR_RED_LIGHTEST};
      }

      &::placeholder {
        color : ${LUP_BASE_GREY_DARK}; 
      }

      &:disabled {
        background-color: ${LUP_FORM_DISABLED_BACKGROUND};
        color: ${LUP_BASE_GREY_DARK};        
      }
    }
  }

  &.ant-input-affix-wrapper .ant-input-suffix .anticon {
    display: ${props => props.noChatFound ? 'none': 'block'}
  }

  &.ant-input-affix-wrapper .ant-input-suffix :not(.anticon) {
    line-height: 0 !important;
  }
`;

export { StyledSearchInput };
