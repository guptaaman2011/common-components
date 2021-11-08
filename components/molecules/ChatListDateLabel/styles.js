import styled from 'styled-components';
import { LUP_SECONDARY_DEEP_CYAN, WHITE, LUP_SPACING_100 } from '../../../theme';
const StyledChatListDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${LUP_SECONDARY_DEEP_CYAN};
  border-radius: 3px;

  width: max-content;
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop};
`;

const StyledTextDiv = styled.div`
  justify-content: center;
  height: 16px;
  display: flex;
  padding-right: 6px;
  padding-left: 6px;
`;

const StyledWrapper = styled.div`
  position: sticky; 
  z-index: 1; 
  top: 0;
  margin: auto;
`;

export { StyledChatListDivider, StyledTextDiv, StyledWrapper };