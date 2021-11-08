import styled from "styled-components";
import { Menu } from "antd";
import { Checkbox } from "antd";

import {
  LUP_BASE_GREY_LIGHTEST,
  LUP_BASE_BLUE,
  LUP_BASE_BLUE_DARK,
  LUP_BASE_GREY_LIGHTER,
  LUP_MAIN_FONT_BOLD600,
  LUP_SPACING_2,
  LUP_SPACING_18,
  LUP_SPACING_6,
  LUP_BASE_GREY_DARKEST,
  LUP_BASE_GREY_MEDIUM,
  LUP_SPACING_12,
  LUP_BASE_GREY_DARK,
  LUP_BASE_GREY,
  WHITE,
  LUP_MAIN_FONT_SIZE14,
  LUP_SPACING_16,
  LUP_SPACING_22,
  LUP_MAIN_BORDER_WIDTH1,
  LUP_SPACING_4,
  LUP_SPACING_5,
  LUP_SPACING_7,
  LUP_SPACING_10,
  LUP_SPACING_20,
  LUP_SPACING_30,
  LUP_SPACING_24,
  LUP_SPACING_21,
  LUP_SPACING_86,
} from "../../../theme";
import { Text } from '../../atoms';

const CheckboxGroup = Checkbox.Group;

export const VerticalCheckboxGroup = styled(CheckboxGroup)`
margin-top: ${LUP_SPACING_6};
background: transparent;

.ant-checkbox-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  font-size: ${LUP_MAIN_FONT_SIZE14};
  color: ${LUP_BASE_GREY_DARKEST};
  line-height: ${LUP_SPACING_22};
}

.ant-checkbox {
  margin: auto 0;
  border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY_MEDIUM};
  border-radius: ${LUP_MAIN_BORDER_WIDTH1};
  height: ${LUP_SPACING_12};
  width: ${LUP_SPACING_12};

  & + span {
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

  & + span {
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

  & + span  {
    color: ${LUP_BASE_GREY};
  }

  &.ant-checkbox-checked + span > span  {
    color: ${LUP_BASE_GREY_MEDIUM} !important;
  }

  &.ant-checkbox-checked {
    border-color: ${LUP_BASE_GREY_MEDIUM} !important;
    background-color: ${LUP_BASE_GREY_MEDIUM} !important;
  }

  &.ant-checkbox-checked + span.ant-checkbox-inner {
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

  .ant-checkbox-group-item {
    display: block;
    margin-right: 0;
    margin-bottom: ${LUP_SPACING_4};
    text-transform: capitalize;
    padding-left: ${LUP_SPACING_18};
  }
  .ant-checkbox-inner {
    border-radius: 0px;
  }
`;

export const StyledMenu = styled(Menu)`
  .ant-menu-item-selected {
    background-color: transparent !important;
  }  

  .ant-menu-submenu {
    background-color: transparent !important;
  } 
  
  .ant-menu-submenu > .ant-menu {
    background-color: transparent !important;
  }

  .ant-menu-item::after {
    border-right: none;
  }

  .ant-menu-item {
    height: ${LUP_SPACING_30};
    padding: 0 !important;
    margin-top: 0;

    &:active {
      background: transparent;
    }
  }

  .ant-menu-item::after {
    border-right: none;
  }

  .ant-menu-inline {
    border-right: 0;
  }

  .ant-menu-inline .ant-menu-item {
    height: auto;
    background: ${LUP_BASE_GREY_LIGHTEST};
    margin: 0;
  }

  .ant-menu-item-group-title {
    padding: 0;
  }

  .ant-menu-submenu-title {
    padding: 0 !important;
    padding-bottom: ${LUP_SPACING_5} !important;
    height: ${LUP_SPACING_21} !important;
  }

  .ant-menu-submenu-arrow {
    right: 0 !important;
  }

  .ant-menu-submenu-title {
    & {
      .ant-menu-submenu-arrow::before, .ant-menu-submenu-arrow::after {
          background: ${LUP_BASE_BLUE_DARK} !important;
      }
    }
  }

  .ant-menu-submenu {
    margin-bottom: ${LUP_SPACING_20};
  }

  .ant-menu-item-selected {
    border: none;
  }
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexContentCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const StyledFilterPanelHeading = styled(StyledMenu.Item)`
  color: #444444;
  font-weight: ${LUP_MAIN_FONT_BOLD600};
  font-size: ${LUP_SPACING_16};
  line-height: ${LUP_SPACING_24};
  min-width: ${LUP_SPACING_86};
`;

export const StyledLink = styled(Text)`
  color: ${LUP_BASE_BLUE_DARK};
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: normal;
  font-size: ${LUP_MAIN_FONT_SIZE14};
  line-height: ${LUP_SPACING_22};
  padding-top: ${LUP_SPACING_2};
  float: right;
`;

export const StyledSubMenuLabel = styled.span`
  line-height: ${LUP_SPACING_16};
  color: ${LUP_BASE_GREY_DARKEST};
  padding-left: ${LUP_SPACING_6};
`;
