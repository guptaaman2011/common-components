import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import {
  LUP_BASE_GREY_DARKEST,
  LUP_BASE_BLUE,
  LUP_MAIN_FONT,
  LUP_MAIN_FONT_NORMAL,
  LUP_BASE_GREY,
  LUP_BASE_GREY_DARK,
  LUP_MAIN_BORDER_WIDTH2,
  LUP_FORM_ENABLED_BACKGROUND,
  LUP_MAIN_FONT_SIZE14,
  LUP_SPACING_10,
  LUP_SPACING_12,
  LUP_SPACING_22,
  LUP_MAIN_BORDER_WIDTH1,
  LUP_MAIN_BORDER_RADIUS2,
  LUP_SPACING_35,
  LUP_SPACING_4,
  LUP_SPACING_1,
  LUP_SPACING_33,
  LUP_SPACING_20,
  LUP_MAIN_BORDER_WIDTH6,
  LUP_SPACING_42,
  LUP_BOX_SHADOW_4,
  LUP_BASE_BLUE_LIGHTEST,
  LUP_SPACING_5
} from '../../../theme';

const StyledSelect = styled(AntSelect)`
&.ant-select {
    width: 100%;
    color: ${LUP_BASE_GREY_DARKEST};
    font-family: ${LUP_MAIN_FONT};
    line-height: ${LUP_SPACING_22};
    font-size: ${LUP_MAIN_FONT_SIZE14};
    text-align: left;
    padding: 0 ${LUP_SPACING_10};
    box-shadow: none;    
    font-weight: ${LUP_MAIN_FONT_NORMAL};
    outline: none;
    border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY};
    height: ${LUP_SPACING_35};
    border-radius: ${LUP_MAIN_BORDER_RADIUS2};
    box-sizing: border-box;
    position: relative;
    background: ${LUP_FORM_ENABLED_BACKGROUND};

    .ant-select-selection--single .ant-select-selection__rendered {
      margin: 0;
      padding: 0;
    }

    .ant-select-selection__placeholder {
      line-height: ${LUP_SPACING_22};
      color: ${LUP_BASE_GREY_DARK};
    }

    .ant-select-arrow {
      position: absolute;
      right: ${LUP_SPACING_4};
    }

    &:hover {
      outline: none;
      border: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_BLUE};
    }

    &:focus,
    &:active,
    &.on-focus {
      border: ${LUP_MAIN_BORDER_WIDTH2} solid ${LUP_BASE_BLUE};
    }
}
& .ant-select-focused .ant-select-selection,
//  & .ant-select-selection:hover,
  & .ant-select-selection:active,
  & .ant-select-selection:focus {
      border: none;
      box-shadow: none;
  }
  & .ant-select-selection-selected-value {
    line-height: ${LUP_SPACING_22};
    padding: ${LUP_SPACING_4} 0;
    color: ${LUP_BASE_GREY_DARKEST};
  }
& .ant-select-selection {
    border: none;
    border-radius: 0;
    height: ${LUP_SPACING_33};
    padding: ${LUP_SPACING_1} 0;
    top: 0px;
    background-color: transparent;
    user-select: text;
    color: #333333;
    box-shadow: none;
  }
  .ant-select-selection__clear {
    right: ${LUP_SPACING_20};
  }
`;

const StyledOptionContent = styled.div`
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

const SelectWrapper = styled.div`
  div + div {
    .ant-select-dropdown {
      padding: 0 ${LUP_SPACING_4};
      width: 90% !important;
      left: 5% !important;
      top: ${LUP_SPACING_42} !important;

      & > div > ul > li {
        padding: ${LUP_SPACING_5} ${LUP_SPACING_20};
        color: ${LUP_BASE_GREY_DARKEST};
      }

      & > div > ul > li.ant-select-dropdown-menu-item-active {
        background: ${LUP_BASE_BLUE_LIGHTEST};
      }
    }

    
  }
`;

const { Option: AntOption } = AntSelect;

export { StyledSelect, StyledOptionContent, AntOption, StyledDropDropArrow, SelectWrapper };
