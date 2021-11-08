import styled from "styled-components";
import { WHITE } from '../../../theme';

const StyledMentionBottomArrow = styled.div`
left: 50%;
bottom: -4.8px;
transform: translateX(-50%) rotate(45deg);
border-color: ${WHITE} transparent transparent ${WHITE};
box-shadow: 3px 3px 7px rgba(0,0,0,.07);
position: absolute;
z-index: 1;
display: block;
position: absolute;
width: 12px;
height: 10px;
background: ${WHITE};
border-style: solid;
border-width: 4.24264069px;
`;

export {
    StyledMentionBottomArrow
  };
  