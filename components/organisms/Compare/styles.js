import styled from "styled-components";

import {
  LUP_BASE_GREY_LIGHTEST,
  LUP_BASE_GREY_LIGHTER,
  LUP_SPACING_7,
  LUP_SPACING_20,
  LUP_SPACING_10,
  LUP_SPACING_15,
  LUP_BOX_SHADOW_4,
  LUP_BOX_SHADOW_6,
  LUP_BOX_SHADOW_7,
  LUP_SPACING_4,
  LUP_SPACING_12,
  WHITE,
  LUP_SPACING_216,
  LUP_MAIN_BORDER_WIDTH6,
  LUP_BASE_BLUE_LIGHTEST,
  LUP_SPACING_6,
  LUP_SPACING_2
} from "../../../theme";

import { Block } from '../../atoms';

import { Menu } from "antd";

export const StyledWrapper = styled.div`
  background: ${LUP_BASE_GREY_LIGHTER};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: fit-content;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const StyledBlock = styled(Block)`
  background: ${LUP_BASE_GREY_LIGHTEST};
  margin: ${LUP_SPACING_15} ${LUP_SPACING_10};
  padding-right: ${LUP_SPACING_20};
  padding-top: ${LUP_SPACING_7};

  flex-direction: column;
  display: flex;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  box-shadow:${LUP_BOX_SHADOW_7};
`;

export const FilterBlock = styled(Block)`
  background: ${LUP_BASE_GREY_LIGHTEST};
  margin: ${LUP_SPACING_15} ${LUP_SPACING_10};
  padding: ${LUP_SPACING_20};
  width: 20%;
  min-width: ${LUP_SPACING_216};

  flex-direction: column;
  display: flex;
  position: relative;
  box-shadow:${LUP_BOX_SHADOW_7};
`;

export const StyledDropDropArrow = styled.div`
left: 50%;
transform: translateX(-50%) rotate(45deg);
top: -${LUP_SPACING_4};
border-color: ${WHITE} transparent transparent ${WHITE};
box-shadow: ${LUP_BOX_SHADOW_4};
position: absolute;
z-index: 1;
display: block;
width: ${LUP_SPACING_12};
height: ${LUP_SPACING_10};
background: 0 0;
border-style: solid;
border-width: ${LUP_MAIN_BORDER_WIDTH6};
`;

export const ToolbarWrapper = styled.div`
  box-shadow: ${LUP_BOX_SHADOW_6};
`;

export const StyledMenu = styled(Menu)`
top: 6px;
&.ant-dropdown-menu {
  padding: 7px 4px 10px 4px;
}
.ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {
  background-color: ${LUP_BASE_BLUE_LIGHTEST};
}
.ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title { 
  height : 32px;
  padding: 5px 16px 5px 0px;
}
`;

export const IconButtonWrapper = styled(Block)`
padding-right: ${LUP_SPACING_6};
padding-left: ${LUP_SPACING_2};
`;


