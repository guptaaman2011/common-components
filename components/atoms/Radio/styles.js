import styled from 'styled-components';
import { Radio as AntRadio } from 'antd';
import { LUP_BASE_GREY_MEDIUM, LUP_BASE_BLUE_DARK, LUP_BASE_GREY_DARKEST, LUP_BASE_GREY_LIGHTER, LUP_BASE_GREY, LUP_BASE_BLUE, ACCENT_DARK,
    LUP_BASE_GREY_DARK, LUP_SPACING_12, LUP_SPACING_4, LUP_SPACING_3, LUP_SPACING_6, LUP_MAIN_BORDER_RADIUS6 } from '../../../theme';

const StyledRadio = styled(AntRadio)`
  &.ant-radio-wrapper {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    border-color: ${LUP_BASE_GREY_MEDIUM};
    border-radius: ${LUP_MAIN_BORDER_RADIUS6};
  }

  &.ant-radio-wrapper-checked {
    border-color: ${LUP_BASE_GREY_MEDIUM};
  }

  .ant-radio-inner {
    width: ${LUP_SPACING_12};
    height: ${LUP_SPACING_12};
    border-color: ${LUP_BASE_GREY_MEDIUM};

    &:after {
      background-color: ${ACCENT_DARK};
      width: ${LUP_SPACING_4};
      height: ${LUP_SPACING_4};
      left: ${LUP_SPACING_3};
      top: ${LUP_SPACING_3};
      border-radius: 50%;
      transform: none !important;
    }
  }

  .ant-radio-checked {
    & .ant-radio-inner {
      border-color: ${LUP_BASE_GREY_MEDIUM};
    }

    &:after {
      border-color: ${LUP_BASE_BLUE};
    }
    
  }

  .ant-radio-inner::after {
      background-color: ${LUP_BASE_BLUE_DARK} !important;
  }

  .ant-radio-disabled {
    & .ant-radio-inner {
      background-color: ${LUP_BASE_GREY_LIGHTER};
      border-color: ${LUP_BASE_GREY} !important;
    }

    & .ant-radio-inner:after {
      border-color: ${LUP_BASE_GREY_MEDIUM};
    }

    & + span {
      color: ${LUP_BASE_GREY};
    }
  }

  .ant-radio-disabled .ant-radio-inner {
    border-color: ${LUP_BASE_GREY} !important;
  }

  .ant-radio-disabled .ant-radio-inner::after {
    background-color: ${LUP_BASE_GREY_MEDIUM} !important;
  }

  &.ant-radio-wrapper:hover .ant-radio .ant-radio-inner,
  & .ant-radio:hover .ant-radio-inner {
    border-color: ${LUP_BASE_BLUE};
  }

  & .ant-radio-focused .ant-radio-inner {
    border-color: ${LUP_BASE_GREY};
  }

  span.ant-radio + span {
    padding-left: ${LUP_SPACING_6};
    padding-right: ${LUP_SPACING_6};
    color: ${LUP_BASE_GREY_DARK};
  }

  span.ant-radio-checked + span {
    color: ${LUP_BASE_GREY_DARKEST};
  }

  span.ant-radio-disabled + span {
    color: ${LUP_BASE_GREY};
  }

  span.ant-radio-disabled.ant-radio-checked > span.ant-radio-inner {
    border-color: ${LUP_BASE_GREY_MEDIUM} !important;
  }

  span.ant-radio-disabled.ant-radio-checked + span {
    color: ${LUP_BASE_GREY_MEDIUM};
  }

`;

export { StyledRadio };
