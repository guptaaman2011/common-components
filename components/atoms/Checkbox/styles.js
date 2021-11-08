import { Checkbox } from 'antd';
import styled, { css } from 'styled-components';
import Text from '../Text';
import { LUP_BASE_GREY_LIGHTER, LUP_BASE_BLUE, LUP_BASE_GREY, LUP_BASE_GREY_DARKEST, 
  LUP_BASE_GREY_MEDIUM, WHITE, LUP_MAIN_FONT_BOLD600, LUP_BASE_GREY_DARK, LUP_BASE_BLUE_DARK, 
  LUP_SPACING_12, LUP_MAIN_FONT_SIZE14, LUP_SPACING_16, LUP_SPACING_22, LUP_SPACING_6,
  LUP_SPACING_2, LUP_SPACING_4, LUP_SPACING_5, LUP_SPACING_7,LUP_SPACING_10, LUP_SPACING_21, LUP_MAIN_BORDER_WIDTH1
} from '../../../theme';

const StyledLabel = styled(Text)`
  display: block;
  font-size: ${LUP_MAIN_FONT_SIZE14};
  font-weight: ${LUP_MAIN_FONT_BOLD600};
  line-height: ${LUP_SPACING_16};
`;

const StyledSubLabel = styled(Text)`
  display: block;
  font-size: ${LUP_MAIN_FONT_SIZE14};
  font-weight: normal;
  line-height: ${LUP_SPACING_22};
`;

const checkboxStyles = css`
  &.ant-checkbox-wrapper {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    font-size: ${LUP_MAIN_FONT_SIZE14};
    color: ${LUP_BASE_GREY_DARKEST};
    line-height: ${LUP_SPACING_22};
  }

  .ant-checkbox {
    top: 0;
    margin: auto 0;
    border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY_MEDIUM};
    border-radius: ${LUP_MAIN_BORDER_WIDTH1};
    height: ${LUP_SPACING_12};
    width: ${LUP_SPACING_12};

    & + span {
      padding: 0;
    }

    & + span > span {
      transition: 0.4s;
      padding-left: ${LUP_SPACING_6};
      padding-right: ${LUP_SPACING_6};
      color: ${LUP_BASE_GREY_DARK};
    }

    &:hover {
      border-color: ${LUP_BASE_BLUE};
    }

    &.ant-checkbox-checked {
      border-color: ${LUP_BASE_BLUE_DARK} !important;
      background-color: ${LUP_BASE_BLUE_DARK} !important;
    }

    &.ant-checkbox-checked > span.ant-checkbox-inner {
      background-color: ${LUP_BASE_BLUE_DARK} !important;
    }

    &.ant-checkbox-indeterminate + span > span {
      color: ${LUP_BASE_GREY_DARKEST} !important;
    }

    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: transparent;
      border-color: ${LUP_BASE_GREY} !important;

      &:after {
        content: ' ';
        transform: scale(1);
        position: absolute;
        left: ${LUP_SPACING_2};
        top: ${LUP_SPACING_4};
        width: ${LUP_SPACING_6};
        height: ${LUP_SPACING_2};
      }
    }

    &.ant-checkbox-checked .ant-checkbox-inner:after,
    & .ant-checkbox-inner:after {
      left: ${LUP_SPACING_2};
      top: ${LUP_SPACING_5};
      width: ${LUP_SPACING_4};
      height: ${LUP_SPACING_7};
      border-color: ${WHITE};
    }

    &.ant-checkbox-disabled .ant-checkbox-inner:after {
      border-color: ${WHITE};
    }
  }

  .ant-checkbox-inner {
    width: ${LUP_SPACING_10};
    height: ${LUP_SPACING_10};
    border: none;
    border-color: ${WHITE};

    &:hover {
      border: none;
    }
  }
  .ant-checkbox-checked {
    border-color: ${LUP_BASE_BLUE} !important;

    & .ant-checkbox-inner {
      background-color: ${LUP_BASE_BLUE};
      border-color: ${WHITE} !important;
      border-radius: 0;
    }

    & + span > span  {
      color: ${LUP_BASE_GREY_DARKEST};
    }

    &:after {
      border-color: transparent;
      border: none;
    }
  }

  .ant-checkbox-disabled {
    border-color: ${LUP_BASE_GREY} !important;
    background: ${LUP_BASE_GREY_LIGHTER};
    & .ant-checkbox-inner {
      border-color: ${LUP_BASE_GREY} !important;
      background-color: ${LUP_BASE_GREY_LIGHTER};
    }

    & + span > span  {
      color: ${LUP_BASE_GREY};
    }

    &.ant-checkbox-checked + span > span  {
      color: ${LUP_BASE_GREY_MEDIUM} !important;
    }

    &.ant-checkbox-checked {
      border-color: ${LUP_BASE_GREY_MEDIUM} !important;
      background-color: ${LUP_BASE_GREY_MEDIUM} !important;
    }

    &.ant-checkbox-checked > span.ant-checkbox-inner {
      border-radius: 0;
      border-color: ${LUP_BASE_GREY_MEDIUM} !important;
      background-color: ${LUP_BASE_GREY_MEDIUM} !important;    }
  }

  &.ant-checkbox-wrapper:hover .ant-checkbox-inner,
  & .ant-checkbox:hover .ant-checkbox-inner {
    border-color: transparent;
  }

  & .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${LUP_BASE_BLUE};
  }
`;

const StyledCheckbox = styled(Checkbox)`
height: ${LUP_SPACING_21};
display: flex;
justify-content: center;
align-items: center;
  ${checkboxStyles};
width: fit-content;
`;

export { StyledCheckbox, StyledLabel, checkboxStyles, StyledSubLabel };
