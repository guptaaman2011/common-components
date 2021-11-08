import * as types from './actionTypes';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.GET_COMPARISON_DATA:
            return { ...state, loading: action.loading, isComparisonChanged: action.isComparisonChanged, propertiesUpdated: false, currentItemKey: action.currentItemKey };
        case types.GET_COMPARISON_DATA_SUCCESS:
            return { ...state, values: action.values, apiUrls: action.apiUrls || {}, compareModalValues: action.compareModalValues, loading: false, error: false, currentItemKey: action.nextItemKey, comparisonDataError: '' };
        case types.GET_COMPARISON_MODAL_DATA_SUCCESS: 
            return {...state, compareModalValues: action.compareModalValues, apiUrls: action.apiUrls, loadingInModal: false, error: false, currentItemKey: action.nextItemKey, comparisonDataError: '', selectedProductsFromModal: action.selectedProductsFromModal, compareViewVisible: true}
        case types.GET_TEMPLATE_DATA:
            return { ...state, initialLoading: action.initialLoading };
        case types.GET_TEMPLATE_DATA_SUCCESS:
            return { 
                ...state, 
                properties: action.properties, 
                templateName: action.name,
                comparisonPanelProps: action.comparisonPanelProps, 
                selectedProperties: action.selectedProperties,
                initialSelectedProperties: JSON.parse(JSON.stringify(action.selectedProperties)),
                itemSelectorProp: action.itemSelectorProp,
                propertiesUISchema: action.propertiesUISchema,
                itemCardProps: action.itemCardProps,
                initialLoading: false, 
                error: false,
                savedComparisonKeys: action.savedComparisonKeys,
                savedComparisons: action.savedComparisons
            };
        case types.GET_COMPARISON_DATA_FAILED:   
            return { ...state, comparisonDataError: action.comparisonDataError, loading: false, currentItemKey: action.currentItemKey, inputValue: action.inputValue }; 
        case types.GET_COMPARISON_MODAL_DATA:
            return {...state, loadingInModal: action.loadingInModal, currentItemKey: action.currentItemKey };
        case types.GET_COMPARISON_MODAL_DATA_FAILED: 
            return {...state, comparisonDataError: action.comparisonDataError, loadingInModal: false, currentItemKey: action.currentItemKey, inputValue: action.inputValue }

        case types.GET_TEMPLATE_DATA_FAILED:
            return { ...state, error: action.error, initialLoading: false };
        case types.SAVE_COMPARISON:
        case types.DELETE_COMPARISON:
            return { ...state, loading: action.loading }
        case types.SAVE_COMPARISON_SUCCESS:
            return {
                ...state,
                alertSuccessMsg: action.alertSuccessMsg,
                loading: false,
                currentComparisonId: action.currentComparisonId,
                savedComparisons: action.savedComparisons,
                savedComparisonKeys: action.savedComparisonKeys,
            };
        case types.DELETE_COMPARISON_FAILED:
            return { ...state, alertErrorMsg: action.alertErrorMsg, currentComparisonId: action.currentComparisonId, loading: false };
        case types.DELTE_COMPARISON_SUCCESS:
            return {
                ...state,
                alertSuccessMsg: action.alertSuccessMsg,
                loading: false,
                currentComparisonId: action.currentComparisonId,
                savedComparisons: action.savedComparisons,
                savedComparisonKeys: action.savedComparisonKeys,
                currentItemKey: "IAN_1"
            };
        case types.SAVE_COMPARISON_FAILED:
            return { ...state, alertErrorMsg: action.alertErrorMsg, loading: false };
        case types.CLOSE_NOTIFICATION:
            return { ...state, alertErrorMsg: "", alertSuccessMsg: "" }
        case types.UPDATE_SELECTED_PROPERTIES:
            return { ...state, selectedProperties: action.selectedProperties, propertiesUpdated: action.propertiesUpdated }
        case types.SET_COMPARISON_DATA:
            return { ...state, name: action.name, selectedItems: action.selectedItems, selectedProperties: action.selectedProperties, currentItemKey: action.nextItemKey, selectedProducts: action.selectedProducts }
        case types.CLEAR_COMPARISON_DATA: 
            return { ...state, selectedProducts: [], isComparisonChanged: true, selectedItems: [], values: {}, currentItemKey: "IAN_1", highlightSelected: false, comparisonDataError: "" }
        case types.RESET_STATE:
            return { ...state, values: {} };
        case types.SET_AUTHKEY:
            return { ...state, authKey: action.authKey, initialLoading: action.initialLoading }
        case types.UPDATE_SELECTED_PRODUCTS: 
            return {...state, selectedProducts: action.selectedProducts, selectedProductsFromModal: action.selectedProductsFromModal }
        case types.SAVE_CURRENT_COMPARISON_ID:
            return {
                ...state,
                currentComparisonId: action.currentComparisonId,
                name: action.name
            }
        case types.REMOVE_COMPARE_ITEM:
            return { ...state, values: action.values, currentItemKey: action.currentItemKey, isComparisonChanged: true, selectedProductsFromModal: action.selectedProductsFromModal, selectedProducts: action.selectedProducts }
        case types.CLEAR_COMPARISON:
            return { ...state, selectedProperties: action.selectedProperties, values: action.values }
        case types.HIGHLIGHT_DIFFERENCES:
            return { ...state, highlightSelected: action.highlightSelected }
        case types.SET_COMPARE_VIEW_VISIBLE: 
            return {...state, compareViewVisible: action.compareViewVisible, comparisonDataError: '', inputValueForError: ''}
        case types.COMPARE_VIEW_CANCEL: 
            return {...state, compareViewVisible: false, compareModalValues: action.compareModalValues, currentItemKey: action.currentItemKey, selectedProductsFromModal: action.selectedProductsFromModal, comparisonDataError: '', inputValueForError: '' }
        case types.UPDATE_SELECTED_PRODUCTS_FROM_MODAL:
            return {...state, selectedProductsFromModal: action.selectedProductsFromModal }
        default:
            return state;
    }
};