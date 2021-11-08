import styled from 'styled-components';
import { Select, Text } from '../../atoms';
import { BLACK, LUP_BASE_GREY, LUP_MAIN_FONT_SIZE14, LUP_MAIN_FONT_BOLD600,LUP_SPACING_4,LUP_BOX_SHADOW_4,LUP_MAIN_BORDER_WIDTH6,LUP_SPACING_12,LUP_SPACING_10,
  LUP_BASE_GREY_DARKEST,
  LUP_BASE_BLUE_DARK,
  LUP_BASE_BLUE_LIGHTEST,
  LUP_MAIN_FONT_NORMAL
} from '../../../theme';
import { Menu } from "antd";

const StyledSearchNavText = styled.div`
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: ${BLACK};
  margin-right: 10px;
`;

const StyledSearchNavArrow = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

const StyledSearchNavClose = styled.div`
  display: inline-block;
  margin-right: 12px;
`;

const StyledChatSearchInputBlock = styled.div`
  padding: ${({ padding }) => padding};
`;

const StyledChatbox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const StyledChatboxContent = styled.div`
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

const StyledChatboxHeader = styled.div`
width: 100%;
`;
const StyledChatboxFooter = styled.div`
  flex-direction: column;
  display: flex;
  bottom: 2px;
  position: relative;
  width: 100%;
  box-shadow: 0px -2px 4px ${LUP_BASE_GREY};
`;

const StyledSelect = styled(Select)`
  &.ant-select {
    border: none;
  }

  &.ant-select > .ant-select-selection--single > .ant-select-selection__rendered {
    color: #2d9cdb;
    font-weight: ${LUP_MAIN_FONT_BOLD600};
  }
`;

const StyledCancelReplyAction = styled.span`
    padding-right: 10px;
    padding-top: 14px;
    padding-bottom: 13px;
    float: right;
    color: ${props => props.color};
    cursor: pointer;
    font-size: ${LUP_MAIN_FONT_SIZE14};
`
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

const StyledMenu = styled(Menu)`
    top: 6px;
    &.ant-dropdown-menu {
      padding: 7px 4px 10px 4px;
    }
    .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {
      background-color: ${LUP_BASE_BLUE_LIGHTEST};
    }
    .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title { 
      height : 28px;
      padding: 2px 5px;
      text-align: center;
    }
`;

const StyledFlexWrapper = styled.div`
    display: inline-flex;
    align-items: center;
`;

const StyledVerText = styled(Text)`
    margin-right: 4px;
    color: ${LUP_BASE_GREY_DARKEST};
    font-weight: normal;
`;

const StyledVerNoText = styled(Text)`
    margin-right: 5px;
    color: ${LUP_BASE_BLUE_DARK};
    cursor: pointer;
    font-weight: ${LUP_MAIN_FONT_BOLD600};
`;

export { 
  StyledSearchNavText,
  StyledSearchNavArrow,
  StyledSearchNavClose,
  StyledChatSearchInputBlock,
  StyledChatbox,
  StyledChatboxContent,
  StyledChatboxHeader,
  StyledChatboxFooter,
  StyledSelect,
  StyledCancelReplyAction,
  StyledDropDropArrow,
  StyledMenu,
  StyledFlexWrapper,
  StyledVerText,
  StyledVerNoText
};