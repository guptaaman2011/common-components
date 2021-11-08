import React from "react";
import PropTypes from "prop-types";
import { StyledCard, StyledText, TitleText, ExpandButtonWrapper, RemoveButtonWrapper } from "./styles";
import { 
  LUP_SECONDARY_DEEP_CYAN, 
  LUP_BASE_BLUE, 
  LUP_MAIN_FONT_BOLD600, 
  LUP_SPACING_14,
  LUP_SPACING_10,
  LUP_SPACING_16
} from '../../../theme';
import { IconButton, Block, Cross1 } from '../../atoms';
import CompareCardImage from '../CompareCardImage';
import { Row, Tooltip, Col } from 'antd';
import ExpandSvg from '../../../assets/images/expand-blue.svg'

const CompareCard = ({ 
  propertiesUISchema,
  itemCardProps,
  itemData,
  extras,
  removeCompareItem,
  showRemoveIcon,
  itemKey,
}) => {

  const onExpand = () => {
    console.log('expand called')
  }

  const getExpandButton = (
    <ExpandButtonWrapper>
      <IconButton src={ExpandSvg} onClick={onExpand} dataTestid="expandTestId" size={LUP_SPACING_14}  style={{ float: 'right', display: 'inline-flex' }} />
    </ExpandButtonWrapper>
  );

  const getRemoveButton = (
    <RemoveButtonWrapper>
      <Cross1 size={LUP_SPACING_10} onClick={removeCompareItem} />
    </RemoveButtonWrapper>
  );

  return (
    <StyledCard itemKey={itemKey}
    color={itemKey === "IAN_1" && LUP_BASE_BLUE }
    borderWidth={itemKey === "IAN_1" ? '2px': '1px'}
    >
      {showRemoveIcon && getRemoveButton}
      {itemCardProps.map(
        (itemCardProp,i) => {

          let isImageNext = false;
          if(i < itemCardProps.length - 1 &&  
            itemCardProps[i+1] &&
            propertiesUISchema[itemCardProps[i+1]] && 
            propertiesUISchema[itemCardProps[i+1]].uiWidget === "imageWidget" 
          ) {
            isImageNext = itemData[itemCardProps[i+1]] ? true : false;
          }

          let uiSchema = propertiesUISchema[itemCardProp];
          if(uiSchema.uiWidget === "imageWidget") {
            return (<Row key={`cardItem${i}`} style={{ height: '20vh', minHeight: '144px' }}><CompareCardImage  source={itemData[itemCardProp]} onExpand={onExpand} height="auto" width="auto" /></Row>);
          } 

          return (
            <Row key={`cardItem${i}`}>
              {i === 0 ?
              <>
                <Col span={showRemoveIcon ? 22 : 24}>
                  <TitleText color={LUP_SECONDARY_DEEP_CYAN} fontWeight={LUP_MAIN_FONT_BOLD600} lineHeight={LUP_SPACING_16}>{itemData[itemCardProp]}</TitleText> 
                </Col>
              </>
              : <>
                  <Col span={isImageNext ? 21 : 24}>
                    <Tooltip title={itemData[itemCardProp]}>
                      {i !== 0 && <StyledText fontWeight={LUP_MAIN_FONT_BOLD600} lineHeight={LUP_SPACING_16}>{itemData[itemCardProp]}</StyledText>}
                    </Tooltip>
                  </Col>
                  {isImageNext && <Col span={3}>{getExpandButton}</Col>}
                </>}
            </Row>
          );
        }
      )}
      {extras}
    </StyledCard>
  );
};

CompareCard.propTypes = {
  propertiesUISchema: PropTypes.object,
  itemCardProps: PropTypes.array,
  itemData: PropTypes.object,  
  extras: PropTypes.node,
  removeCompareItem: PropTypes.func,
  onExpand: PropTypes.func,
  showRemoveIcon: PropTypes.bool,
  itemKey: PropTypes.string,
};

CompareCard.defaultProps = { 
  extras: [],
  propertiesUISchema: {},
  itemCardProp: [],
  itemData: {},
  removeCompareItem: () => {},
  onExpand: () => {},
  showRemoveIcon: false,
  itemKey: '',
};

export default CompareCard;
