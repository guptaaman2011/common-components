import styled from 'styled-components';
import {  Block } from '../../atoms';
import {  LUP_BASE_GREY, LUP_BASE_BLUE_DARK, LUP_SPACING_8, 
  LUP_SPACING_70, LUP_SPACING_2, LUP_SPACING_10, LUP_SECONDARY_DEEP_YELLOW,
  LUP_MAIN_BORDER_WIDTH1, LUP_MAIN_BORDER_WIDTH2, LUP_SPACING_33, WHITE
} from '../../../theme';

const StyledChatAction = styled.div`
    padding-left:${LUP_SPACING_8};
    padding-right:${LUP_SPACING_10};
    display: inline-flex;
    float: right;
`;



const StyledChatInputTextArea = styled.div`
    border:  ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY};
    background-color: ${WHITE} !important;
    border-radius: ${LUP_MAIN_BORDER_WIDTH2};
    position: relative;
    display: flex;
    min-height: ${LUP_SPACING_33};
    height: fit-content;
    &:hover,
    &:focus,
    &:active,
    &:focus-within {
      outline: none;
      border-width: ${LUP_MAIN_BORDER_WIDTH2};
      border-style: solid;
      border-color: ${props => props.index ? LUP_SECONDARY_DEEP_YELLOW : LUP_BASE_BLUE_DARK };
    }
  
    &:focus,
    &:active,
    &:focus-within {
      border-width: ${LUP_MAIN_BORDER_WIDTH2};
    }
`;

const StyledBlock = styled(Block)`
  padding: ${LUP_SPACING_8} ${LUP_SPACING_2} ${LUP_SPACING_8} 0;
  min-width: ${LUP_SPACING_70};
  height: ${LUP_SPACING_33};
  float: right;
  background-color: ${WHITE} !important;
`;

export { StyledChatAction, StyledChatInputTextArea, StyledBlock };
