import { Card } from "antd";
import styled from 'styled-components';
import { Text, Block } from '../../atoms';
import { LUP_MAIN_FONT_SIZE4, LUP_MAIN_FONT_SIZE10, LUP_SPACING_6, LUP_SPACING_10, 
  LUP_SPACING_4, LUP_SPACING_5, LUP_SPACING_12, LUP_SPACING_2, LUP_SPACING_37,
  LUP_SPACING_7, LUP_BOX_SHADOW_3, LUP_SPACING_8 } from '../../../theme';

const StyledCard = styled(Card)`
  border-width: ${props => props.borderWidth};
  border-style: solid;
  border-color: ${props => props.color};  

  .ant-card-body {
    padding: ${LUP_SPACING_4} ${LUP_SPACING_2};
    padding-top: ${LUP_SPACING_5};
    padding-bottom: ${LUP_SPACING_7};
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  box-shadow: ${LUP_BOX_SHADOW_3};
`;

const TitleText = styled(Text)`
  padding-left: ${LUP_SPACING_8};
  padding-top: ${LUP_SPACING_2};
  padding-bottom: ${LUP_SPACING_2};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const StyledText = styled(Text)`
  padding-left: ${LUP_SPACING_8};
  padding-top: ${LUP_SPACING_2};
  padding-bottom: ${LUP_SPACING_2};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: ${LUP_SPACING_37};
`;

const StyledBlock = styled(Block)`
  position: absolute;
  padding: ${LUP_MAIN_FONT_SIZE4} ${LUP_MAIN_FONT_SIZE10} 0;
`;

const ExpandButtonWrapper = styled.div`
  padding-right: ${LUP_SPACING_6};
  padding-top: ${LUP_SPACING_7};
`;

const RemoveButtonWrapper = styled.div`
  position: absolute;
  top: ${LUP_SPACING_10}; 
  right: ${LUP_SPACING_10}; 
  height: ${LUP_SPACING_10}; 
  z-index: 1;
  cursor: pointer;
`;

export { StyledCard, StyledText, TitleText, StyledBlock, ExpandButtonWrapper, RemoveButtonWrapper };
