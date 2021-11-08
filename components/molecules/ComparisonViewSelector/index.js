import React from "react";
import PropTypes from "prop-types";
import { Text, Checkbox }  from '../../atoms';
import {LUP_BASE_GREY_LIGHTEST, WHITE, LUP_BASE_GREY_DARKER, LUP_MAIN_FONT_SIZE12, 
    LUP_MAIN_FONT_BOLD600, LUP_SPACING_14, LUP_SPACING_12} from '../../../theme';
import { StyledSecondRow, StyledSecondCol, StyledFirstDiv, 
    StyledButton, StyledDiv, StyledRow, StyledCol, SelectAllWrapper } from "./styles";
import { selectAll, compareInViewer } from '../../../utils/constants';

const ComparisonViewSelector = ({itemsToCompare, selectedProducts, updateSelectedProducts, onClickSubmit}) => {
    const handleSelectedProducts = (products, include = true) => {
        if(!include){
            selectedProducts = selectedProducts.filter(selectedProduct => !products.includes(selectedProduct))
        }else {
            selectedProducts = products.length === 1 ? selectedProducts.concat(products) : products;
        }
        updateSelectedProducts(selectedProducts);
    }
    const size = itemsToCompare.length;
    return (
    <StyledRow className="viewerSelector">
        <StyledCol className="viewerSelectorFirstCol">
            <SelectAllWrapper>
                <StyledDiv>           
                    <Checkbox 
                    indeterminate={selectedProducts && selectedProducts.length && selectedProducts.length < itemsToCompare.length}
                    checked={selectedProducts  && selectedProducts.length && selectedProducts.length === itemsToCompare.length}   
                    onChange={(e) => e.target.checked ? handleSelectedProducts(itemsToCompare) : handleSelectedProducts(itemsToCompare, false)}
                    label={selectAll} />
                </StyledDiv>
            </SelectAllWrapper>
        </StyledCol>
    <StyledCol colSpan={2 * itemsToCompare.length - 1}>
        <StyledSecondRow>
        <StyledSecondCol>
            {itemsToCompare.map((product) => 
            <StyledFirstDiv id={product}  marginLeft={size >1 ? '20px' : '18px'}>
            <Checkbox 
            checked= {selectedProducts.includes(product)}
            onChange={(e) => e.target.checked ? handleSelectedProducts([product]) : handleSelectedProducts([product], false)}
            label={compareInViewer}
            />&nbsp;
            </StyledFirstDiv> 
        )}
        </StyledSecondCol>
        <StyledCol>
            <StyledButton disabled={selectedProducts.length < 2} onClick={onClickSubmit} size="smaller" colored="primary">
                <Text fontSize={LUP_MAIN_FONT_SIZE12} lineHeight={LUP_SPACING_12}  fontWeight={selectedProducts.length < 2 ? "normal" : "bold"} color={selectedProducts.length < 2 ? LUP_BASE_GREY_LIGHTEST : WHITE}>Go</Text>
            </StyledButton>
        </StyledCol>
        </StyledSecondRow>
        </StyledCol>
    </StyledRow>
)}

ComparisonViewSelector.propTypes = {
    itemsToCompare: PropTypes.arrayOf(PropTypes.string),
    selectedProducts: PropTypes.arrayOf(PropTypes.string),
    updateSelectedProducts: PropTypes.func,
    onClickSubmit: PropTypes.func,
}

ComparisonViewSelector.defaultProps = {
    itemsToCompare: [],
    selectedProducts: [],
    updateSelectedProducts: () => {},
    onClickSubmit: () => {},
}

export default ComparisonViewSelector;