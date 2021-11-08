import styled from "styled-components";
import { Button } from '../../atoms';
import { 
WHITE, 
LUP_SPACING_11, 
LUP_SPACING_4,
LUP_SPACING_30,
LUP_SPACING_3, 
LUP_SPACING_5,
LUP_SPACING_24,
LUP_SPACING_9,
LUP_BASE_GREY_LIGHTEST
} from "../../../theme";


const StyledSecondCol = styled.td`
  height: 30px;
  display: flex;
  flex-grow: 1;
  vertical-align: middle;
  align-items: center;
  border-radius: 0px;
  background:${WHITE};
  box-shadow: 0px 1px 8px rgba(136, 136, 136, 0.35);
  justify-content: space-between;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-top: ${LUP_SPACING_9} !important;
`;

const StyledDiv = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right:  ${LUP_SPACING_24};
  text-align: left;
  padding: ${LUP_SPACING_5} 0px ${LUP_SPACING_5} ${LUP_SPACING_11};
`;

const StyledFirstDiv = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.marginLeft};
`;

const StyledButton = styled(Button)`
  border-radius: 0 ${LUP_SPACING_4} ${LUP_SPACING_4} 0;
  min-width: ${LUP_SPACING_30};
  width: ${LUP_SPACING_30};
  height: ${LUP_SPACING_30};
  margin-left: ${LUP_SPACING_3};
`;

const StyledRow = styled.tr`
  vertical-align: middle;
`;

const StyledSecondRow = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCol = styled.td`
  border: none !important;
  text-align: right;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-top: ${LUP_SPACING_9} !important;
  background: ${LUP_BASE_GREY_LIGHTEST};
`;

const SelectAllWrapper = styled.div`
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-top: ${LUP_SPACING_9} !important;
`;

export {StyledSecondRow,  StyledSecondCol, StyledDiv, StyledFirstDiv, 
  StyledButton, StyledRow, StyledCol, SelectAllWrapper};