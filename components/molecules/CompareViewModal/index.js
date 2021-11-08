import React from "react";
import PropTypes from "prop-types";
import {Row} from 'antd';
import { Text, Spinner, Cross3 } from "../../atoms";
import {LUP_SECONDARY_DEEP_CYAN, LUP_MAIN_FONT_BOLD600, LUP_BASE_BLUE_DARK, LUP_MAIN_FONT_SIZE14, 
    LUP_SPACING_24, LUP_SPACING_443} from '../../../theme';
import CompareCardImage from "../CompareCardImage";
import CompareModalItemSelector from "../CompareModalItemSelector";
import { 
    StyledText, StyledCol, StyledSecondRow, StyledSecondText, 
    StyledContainer, StyledModal, StyledCard, StyledRow
 } from "./styles";

const CompareViewModal = ({ products, visible, handleRemove, selectedProducts, handleCancel, 
    compareKey, onSubmitAndUpdate, loadingInModal, inputValueForError, comparisonDataError }) => 
    <StyledModal 
      visible={visible}
      title="Product Viewer"
      onCancel={handleCancel}
      footer={<></>}
      width="88%"
      centered
      closeIcon={<Cross3 size={LUP_SPACING_24} 
      onClick={handleCancel} />}
      maskStyle={{
        opacity: '50%', background: '#444444'
      }} 
    >
        <StyledRow>
        {selectedProducts.map(product =>  ( products[product] &&
        <StyledCol id={product} span={8} >
            <StyledCard>
                <Row style={{ height: '76vh', maxHeight: '454px' }}>
                    <CompareCardImage source={products[product]['product thumbnail']} style={{ padding: '9px 4px 7px' }} height="auto" width="auto" />
                </Row>  
                <StyledContainer>     
                <StyledSecondRow>
                    <StyledText fontWeight={LUP_MAIN_FONT_BOLD600} fontSize={LUP_MAIN_FONT_SIZE14} lineHeight="16px" color={LUP_SECONDARY_DEEP_CYAN}>
                        {products[product]['product identifier']}
                    </StyledText>
                    <StyledSecondText fontSize={LUP_MAIN_FONT_SIZE14} lineHeight="22px" color={LUP_BASE_BLUE_DARK} onClick={(e) => handleRemove(product)}>
                        Remove
                    </StyledSecondText>
                </StyledSecondRow>
                <Row>
                    <Text fontWeight={LUP_MAIN_FONT_BOLD600} fontSize={LUP_MAIN_FONT_SIZE14} lineHeight="16px">
                        {products[product]['product name']}
                    </Text>
                </Row>
                </StyledContainer>
            </StyledCard>
        </StyledCol>))}
        <StyledCol id="itemSelector" span={8} style={{ minHeight: '100px' }}>
            {loadingInModal ? <Spinner  style={{ position: 'absolute', marginTop: '25%', left: '50%'}}/> : 
            <CompareModalItemSelector 
            title="Add Another Product" 
            placeholder="Type IAN or Product No" 
            onSubmit={(value, key) => onSubmitAndUpdate(value, key, `${compareKey}_${Object.keys(products).length + 1}`)} 
            compareKey={`${compareKey}_${Object.keys(products).length + 1}`} 
            currentItemKey={`${compareKey}_${Object.keys(products).length + 1}`} 
            inputValueForError={inputValueForError}
            error={comparisonDataError}
            />}
        </StyledCol>
        </StyledRow>
    </StyledModal>

CompareViewModal.propTypes = {
    visible: PropTypes.bool,
    products: PropTypes.shape({}),
    selectedProducts: PropTypes.arrayOf(PropTypes.string),
    handleCancel: PropTypes.func,
    handleRemove: PropTypes.func,
    onSubmitAndUpdate: PropTypes.func,
    loadingInModal: PropTypes.bool,
}

CompareViewModal.defaultProps = {
    visible: false,
    products: {},
    handleCancel: () => {},
    handleRemove: () => {},
    selectedProducts: [],
    onSubmitAndUpdate: () => {},
    loadingInModal: false,
}

export default CompareViewModal;