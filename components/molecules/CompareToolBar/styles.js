import styled from "styled-components";
import { LUP_BASE_GREY_DARKEST, LUP_BASE_GREY, LUP_BASE_BLUE_DARK,
  LUP_SPACING_22, LUP_SPACING_20, LUP_SPACING_24, LUP_SPACING_16, LUP_SPACING_30, LUP_SPACING_2, LUP_SPACING_6, LUP_SPACING_4, LUP_MAIN_FONT_SIZE14, LUP_SPACING_10, LUP_SPACING_12, LUP_BOX_SHADOW_4, LUP_MAIN_BORDER_WIDTH6, LUP_BASE_BLUE_LIGHTEST, LUP_SPACING_1 } from "../../../theme";
import { Text, Button, CustomDropDown, Block } from "../../atoms";
import { Col, Card, Menu } from "antd";

const StyledSaveText = styled(Text)`
  font-size: ${LUP_MAIN_FONT_SIZE14};
  padding-right: ${LUP_SPACING_4};
  padding-left: ${LUP_SPACING_6};
  color: ${LUP_BASE_BLUE_DARK};
  line-height: ${LUP_SPACING_22};
`;

const StyledText = styled(Text)`
  font-size: ${LUP_MAIN_FONT_SIZE14};
  padding-right: ${LUP_SPACING_2};
  color: ${LUP_BASE_GREY_DARKEST};
  line-height: ${LUP_SPACING_22};
`;

const ExportText = styled(Text)`
  font-size: ${LUP_MAIN_FONT_SIZE14};
  padding-right: ${LUP_SPACING_6};
  color: ${LUP_BASE_GREY_DARKEST};
  line-height: ${LUP_SPACING_22};
`;

const StyledButton = styled(Button)`
  width: 132px;
  height: 32px;
  align-self: center;

  &[disabled] {
    opacity: 1;
    cursor: not-allowed;
    background: ${LUP_BASE_GREY};
    border-color: ${LUP_BASE_GREY};
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledDropDropArrow = styled.div`
left: 50%;
transform: translateX(-50%) rotate(45deg);
top: -${LUP_SPACING_4};
border-color: #fff transparent transparent #fff;
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

const StyledCol = styled(Col)`
  display: inline-flex;
  align-items: center;
`;

const StyledFirstCol = styled(Col)`
  display: inline-flex;
  align-items: center;
  margin-left: ${LUP_SPACING_16};
  justify-content: center;
`;

const StyledSecondCol = styled(Col)`
  display: inline-flex;
  align-items: center;
  margin-left: ${LUP_SPACING_30};
  justify-content: center;
`;

const StyledThirdCol = styled(Col)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: ${LUP_SPACING_16};
`;

const StyledDivider = styled.div`
  border: ${LUP_SPACING_1} solid #DDDDDD;
  border-right: 0px;
  margin-right: ${LUP_SPACING_20};
  height: ${LUP_SPACING_24};
`

const StyledIconDiv = styled.div`
`;

const StyledDropDown = styled(CustomDropDown)`
`;

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0px;
  }
  padding: 0px;
`;

const StyledSaveIconDiv = styled.div`
  padding-top: 2px;
`;

const StyledMenu = styled(Menu)`
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

const IconButtonWrapper = styled(Block)`
padding-right: ${LUP_SPACING_6};
padding-left: ${LUP_SPACING_2};
`;


export {
  StyledSaveText,
  StyledText,
  StyledButton,
  StyledDiv,
  StyledFirstCol,
  StyledSecondCol,
  StyledThirdCol,
  StyledCol,
  StyledIconDiv,
  StyledDropDown,
  StyledCard,
  StyledSaveIconDiv,
  ExportText,
  StyledDropDropArrow,
  StyledMenu,
  IconButtonWrapper,
  StyledDivider
};
