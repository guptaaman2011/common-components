import styled from 'styled-components';
import { display, space, textAlign } from 'styled-system';
import { LUP_MAIN_FONT, LUP_MAIN_FONT_NORMAL, LUP_BASE_GREY_DARKEST, LUP_BASE_GREY, LUP_MAIN_FONT_SIZE14 } from '../../../theme';

const StyledText = styled.span`
  font-family: ${LUP_MAIN_FONT};
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
  color: ${({ color }) => (color || LUP_BASE_GREY_DARKEST)};
  font-size: ${({ fontSize }) => (fontSize || LUP_MAIN_FONT_SIZE14)};
  font-weight: ${({ fontWeight }) => (fontWeight ||  LUP_MAIN_FONT_NORMAL)};
  line-height: ${({ lineHeight }) => (lineHeight)};
  ${display};
  ${textAlign};
  ${space};

  color: ${props => props.disabled && LUP_BASE_GREY};        

`;

export { StyledText };
