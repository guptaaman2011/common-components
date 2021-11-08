import styled from 'styled-components';
import { 
  LUP_MAIN_FONT_SIZE12, 
  LUP_MAIN_FONT_BOLD600, 
  LUP_FORM_ENABLED_BACKGROUND, 
  LUP_MAIN_BORDER_RADIUS24, 
  LUP_SPACING_20,
  LUP_SPACING_3,
  LUP_SPACING_14,
} from '../../../theme';

const StyledBadge = styled.span`
  padding: 0 ${LUP_SPACING_3};
  background: ${({ bg }) => bg};
  border-radius: ${LUP_MAIN_BORDER_RADIUS24};
  border: none;
  font-size: ${LUP_MAIN_FONT_SIZE12};
  font-weight: ${LUP_MAIN_FONT_BOLD600};
  box-sizing: border-box;
  color: ${LUP_FORM_ENABLED_BACKGROUND};
  min-width: ${LUP_SPACING_20};
  height: ${LUP_SPACING_14};
  display: inline-block;
  text-align: center;
  line-height: ${LUP_SPACING_14};
`;

const CountWrapper = styled.div`
  min-width: ${LUP_SPACING_14};
`;

export { StyledBadge, CountWrapper };
