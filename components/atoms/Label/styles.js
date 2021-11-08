import styled from 'styled-components';
import {
  LUP_MAIN_FONT_BOLD600,
  LUP_MAIN_FONT_SIZE12,
  LUP_SPACING_14,
  LUP_SPACING_2,
  LUP_BASE_GREY_DARKEST,
  LUP_BASE_GREY,
  LUP_FUNCTIONAL_ERROR_RED,
} from '../../../theme';

const StyledLabel = styled.label`
  min-width: 160px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;

  font-weight: ${LUP_MAIN_FONT_BOLD600};
  font-size: ${LUP_MAIN_FONT_SIZE12};
  line-height: ${LUP_SPACING_14};
  color: ${props => props.disabled ? LUP_BASE_GREY : LUP_BASE_GREY_DARKEST};        
  color: ${props => props.error && LUP_FUNCTIONAL_ERROR_RED}; 
`;

export { StyledLabel };