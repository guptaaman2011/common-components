import styled from 'styled-components';
import { LUP_BASE_GREY_LIGHTEST, LUP_SPACING_15, LUP_BOX_SHADOW_5,
 LUP_SPACING_10, LUP_SPACING_65 } from '../../../theme';
import { Block } from "../../atoms"
import { Row } from 'antd';

const StyleChatSubmitBox = styled.div`
  display: flex;
  background: ${LUP_BASE_GREY_LIGHTEST};
  box-shadow: ${LUP_BOX_SHADOW_5};
  min-height: ${LUP_SPACING_65};

  justify-content: center;
  align-items: center;
`;

const StyleChatSubmitIcon = styled.div`
  padding: 0 ${LUP_SPACING_10};
  position: relative;
  float: right;
  display: flex;
`;

const StyledBlock = styled(Block)`
  display: inline-block;
  width: 100%;
  padding: ${LUP_SPACING_15};
  padding-right: 0;
  padding-bottom: ${props => props.attachmentsLength ? 0 : LUP_SPACING_15};
  padding-top: ${props => props.boxLabel ? 0 : LUP_SPACING_15};
`;

const StyledRow = styled(Row)`
  display: inline-block;
  width: 100%;
`;

export { StyleChatSubmitBox, StyleChatSubmitIcon, StyledBlock, StyledRow };