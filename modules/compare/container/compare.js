import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { CompareContext } from '../context';
import * as types from '../actionTypes';
import Compare from '../../../components/organisms/Compare'
import { Spinner } from '../../../components/atoms';


const CompareContainer = ({ compareKey, authKey, fetchData, transformResponse, templateId, itemsToCompareCount }) => {
    // get the state and compareAction handler from CompareContext
    const [state, dispatch, compareAction] = useContext(CompareContext);

    // update templateId when component mounts
    useEffect(() => {
        dispatch({ type: types.RESET_STATE });
        dispatch({ type: types.SET_AUTHKEY, authKey, initialLoading: true });
        dispatch({ type: types.GET_TEMPLATE_DATA, initialLoading: true });
        if (state.authKey) {
            compareAction.getTemplateData(templateId);
        }
        // component will unmount
        return () => {
            dispatch({ type: types.RESET_STATE });
        }
    }, [templateId, state.authKey]);

    useEffect(() => {
    }, [state.currentComparisonId])

    const onSubmit = (value, key) => {
        dispatch({ type: types.GET_COMPARISON_DATA, loading: true, currentItemKey: key, isComparisonChanged: true });
        if (typeof fetchData === "function") {

            let nextKey = key.split('_');
            nextKey[1] = parseInt(nextKey[1])+1;
            nextKey = nextKey.join('_');
            
            fetchData(value).then(({url, data}) => {
                const newState = {
                    ...state
                }
                newState.values[key] = data;
                newState.apiUrls[data.ian] = url;
                newState.compareModalValues[key] = data;
                dispatch({ type: types.GET_COMPARISON_DATA_SUCCESS, apiUrls: newState.apiUrls, values: newState.values, compareModalValues: newState.compareModalValues, nextItemKey: nextKey });
            }).catch((error) => {
                dispatch({ type: types.GET_COMPARISON_DATA_FAILED, comparisonDataError: error.message, currentItemKey: key, inputValue: value  });
            })
        } else {
            // const url = `${apiUrl}/${value}`;
            const url = `${state.apiUrls[key] || state.apiUrl}`;
            compareAction.getComparisonData(url, key, transformResponse);
        }
        const { selectedItems } = state;
        
        const newSelectedItems = [ ...selectedItems, key ]
        dispatch({ type: types.SET_COMPARISON_DATA, name: state.name, selectedItems: newSelectedItems, selectedProperties: state.selectedProperties, selectedProducts: state.selectedProducts });
    }


    const onSubmitFromModal = (value, key, product) => {
        dispatch({ type: types.GET_COMPARISON_MODAL_DATA, loadingInModal: true, currentItemKey: key });
        if (typeof fetchData === "function") {

            let nextKey = key.split('_');
            nextKey[1] = parseInt(nextKey[1])+1;
            nextKey = nextKey.join('_');
            
            fetchData(value).then(({url, data}) => {
                const newState = {
                    ...state
                }
                newState.apiUrls[data.ian] = url;
                newState.compareModalValues[key] = data;
                newState.selectedProductsFromModal.push(product);
                dispatch({ type: types.GET_COMPARISON_MODAL_DATA_SUCCESS, apiUrls: newState.apiUrls, compareModalValues: newState.compareModalValues, nextItemKey: nextKey, selectedProductsFromModal:  newState.selectedProductsFromModal, inputValue: value  });
            }).catch((error) => {
                dispatch({ type: types.GET_COMPARISON_MODAL_DATA_FAILED, comparisonDataError: error.message, currentItemKey: key, inputValue: value  });
            })
        } else {
            // const url = `${apiUrl}/${value}`;
            const url = `${state.apiUrls[key] || state.apiUrl}`;
            compareAction.getComparisonData(url, key, transformResponse);
        }
        const { selectedItems } = state;

        const newSelectedItems = [ ...selectedItems, key ];
        dispatch({ type: types.SET_COMPARISON_DATA,  name: state.name, selectedItems: newSelectedItems, selectedProperties: state.selectedProperties, selectedProducts: state.selectedProducts });
    }

    const onClickViewComparison = (comparisonId) => {
        dispatch({ type: types.GET_COMPARISON_DATA, loading: true, isComparisonChanged: false });    
        compareAction.getSavedComparisonData(comparisonId, compareKey);
    }

    // render loader
    const renderLoader = (isLoading) => {
        if (isLoading) {
            return <Spinner style={{
                position: 'absolute',
                top: '50%',
                left: '50%'
            }} />
        }
    }

    // render error
    const renderError = (error) => {
        if (error) {
            return <h1>Error...</h1>;
        }
    }

    const saveComparison = (name) => {
        dispatch({ type: types.SAVE_COMPARISON, loading: true });
        compareAction.saveComparison(name, templateId);
    }

    const updateSelectedProperties = (selectedProperties) => {
        dispatch({ type: types.UPDATE_SELECTED_PROPERTIES, selectedProperties, propertiesUpdated: JSON.stringify(selectedProperties) !== JSON.stringify(state.initialSelectedProperties) })        
    }

    const updateSelectedProducts = (selectedProducts) => {
        dispatch({type: types.UPDATE_SELECTED_PRODUCTS, selectedProducts, selectedProductsFromModal: JSON.parse(JSON.stringify(selectedProducts))})
    }

    const updateSelectedProductsFromModal = (selectedProductsFromModal) => {
        dispatch({type: types.UPDATE_SELECTED_PRODUCTS_FROM_MODAL, selectedProductsFromModal})
    }

    const handleCompareViewCancel = () => {
        const  nextKey = `${compareKey}_${Object.keys(state.values).length + 1}`;
        dispatch({type: types.COMPARE_VIEW_CANCEL, compareModalValues: JSON.parse(JSON.stringify(state.values)), currentItemKey: nextKey, selectedProductsFromModal: JSON.parse(JSON.stringify(state.selectedProducts)) });
    }

    const setCompareViewVisible = (compareViewVisible) => {
        dispatch({type: types.SET_COMPARE_VIEW_VISIBLE, compareViewVisible})
    }

    const getDefaultComparisonName = () => {
        const { values, itemSelectorProp } = state;
        const keys = Object.keys(values);
        if (values && keys.length) {
            const firstProduct = values[keys[0]]
            const itemSelector = itemSelectorProp.title && itemSelectorProp.title.toLowerCase();
            return firstProduct[itemSelector];
        }
    }

    const handleClearAllData = () => {
        dispatch({ type: types.CLEAR_COMPARISON_DATA });
    }
    const deleteCurrentComparison = () => {
        const { currentComparisonId } = state;
        dispatch({ type: types.DELETE_COMPARISON, loading: true })
        compareAction.deleteComparison(currentComparisonId);
    }

    const saveCurrentComparisonId = (id) => {
        const currentComparisonName = state.savedComparisonKeys && state.savedComparisonKeys[id].name;
        dispatch({ type: types.SAVE_CURRENT_COMPARISON_ID, currentComparisonId: id, name: currentComparisonName });
    }

    const removeCompareItem = (itemKey) => {
        const { values, selectedProducts, selectedProductsFromModal } = state;
        // delete values[itemKey];
        while(itemKey && values[itemKey]) {
            let nextKey = itemKey.split('_');
            nextKey[1] = parseInt(nextKey[1])+1;
            nextKey = nextKey.join('_');

            if(values[nextKey]) {
                values[itemKey] = values[nextKey];
                itemKey = nextKey;
            } else {
                delete values[itemKey];
            }
        }
        const newSelectedProducts = selectedProducts.filter((product) => product!== itemKey);
        const newSelectedProductsFromModal = selectedProductsFromModal.filter((product) => product!==itemKey);

        dispatch({ type: types.REMOVE_COMPARE_ITEM, values, currentItemKey: itemKey, selectedProductsFromModal: newSelectedProductsFromModal, selectedProducts: newSelectedProducts  })
    }
    
    const onHighlightChange = (value) => {
        dispatch({ type: types.HIGHLIGHT_DIFFERENCES, highlightSelected: value })
    }

    //render compare 
    const renderCompare = (properties) => {
        if (Object.keys(properties).length > 0) {
            return <Compare
                comparisonPanelProps={state.comparisonPanelProps}
                properties={properties}
                primary="IAN_1"
                data={{ ...state.values }}
                dataForCompareModal={{...state.compareModalValues}}
                compareKey={compareKey}
                onSubmit={onSubmit}
                onSubmitFromModal={onSubmitFromModal}
                onClickViewComparison={onClickViewComparison}
                templateName={state.templateName}
                loadingInModal={state.loadingInModal}
                selectedProperties={state.selectedProperties}
                initialSelectedProperties={state.initialSelectedProperties}
                updateSelectedProducts={updateSelectedProducts}
                handleCompareViewCancel={handleCompareViewCancel}
                compareViewVisible={state.compareViewVisible}
                setCompareViewVisible={setCompareViewVisible}
                selectedProducts={state.selectedProducts}
                selectedProductsFromModal={state.selectedProductsFromModal}
                updateSelectedProductsFromModal={updateSelectedProductsFromModal}
                updateSelectedProperties={updateSelectedProperties}
                saveComparison={saveComparison}
                saveComparisonDisabled={!Object.keys(state.values).length || (!state.isComparisonChanged && !state.propertiesUpdated)}
                alertSuccessMsg={state.alertSuccessMsg}
                alertErrorMsg={state.alertErrorMsg}
                closeComparisonNotification={compareAction.closeComparisonNotification}
                defaultComparisonName={getDefaultComparisonName() || ""}
                propertiesUISchema={state.propertiesUISchema}
                itemCardProps={state.itemCardProps}
                currentComparisonId={state.currentComparisonId}
                deleteCurrentComparison={deleteCurrentComparison}
                deleteComparisonDisabled={state.currentComparisonId && state.currentComparisonId.length > 1 ? false : true}
                itemSelectorProp={state.itemSelectorProp}
                comparisonDataError={state.comparisonDataError}
                inputValueForError={state.inputValue}
                currentItemKey={state.currentItemKey}
                handleClearAllData={handleClearAllData}
                savedComparisonKeys={state.savedComparisonKeys}
                savedComparisons={state.savedComparisons}
                saveCurrentComparisonId={saveCurrentComparisonId}
                itemsToCompareCount={itemsToCompareCount}
                removeCompareItem={removeCompareItem}
                highlightSelected={state.highlightSelected}
                onHighlightChange={onHighlightChange}
                loading={state.loading}
                renderLoader={renderLoader}
            />
        }
    }
    return (
        <>
            {state.initialLoading === true
                ? renderLoader(state.initialLoading)
                : renderCompare(state.properties)
            }
            {renderError(state.error)}
        </>
    )
};

CompareContainer.propTypes = {
    compareKey: PropTypes.string.isRequired,
    fetchData: PropTypes.func,
    transformResponse: PropTypes.func,
    templateId: PropTypes.string.isRequired,
    itemsToCompareCount: PropTypes.number,
};

CompareContainer.defaultProps = {
    fetchData: null,
    transformResponse: null,
    itemsToCompareCount: 4,
};

export default CompareContainer; 