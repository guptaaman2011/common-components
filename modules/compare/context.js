import React, {
    createContext,
    useReducer
} from 'react';
import { reducer } from './reducer'
import { initialState } from './selectors';
import {
    fetch,
    getTemplate,
    getSavedComparison,
    createComparison,
    deleteComparisonById,
    fetchAllComparisons
} from './request';
import * as types from './actionTypes';
import Utils from '../../utils/utility';
export const CompareContext = createContext([{}, function(){}]);

export const CompareContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getAuthHeaders = () => {
        return {
          headers: {
            "x-user": state.authKey,
          }
        }
      }

    const getComparisonData = async (url, key, transformResponse) => {
        try {
            const { data } = await fetch(url);
            const newState = {
                ...state
            }
            if (typeof transformResponse === "function") {
                const transformedResponse = await transformResponse(data);
                newState.values[key] = transformedResponse;
            } else {
                newState.values[key] = data;
            }
            newState.apiUrls[data.ian] = url;
            let nextKey = key.split('_');
            nextKey[1] = parseInt(nextKey[1])+1;
            nextKey = nextKey.join('_');
            
            dispatch({ type: types.GET_COMPARISON_DATA_SUCCESS, apiUrls: newState.apiUrls, values: newState.values, nextItemKey: nextKey, compareModalValues: JSON.parse(JSON.stringify(newState.values)) });
        } catch (error) {
            dispatch({ type: types.GET_COMPARISON_DATA_FAILED, comparisonDataError: error.message });
        }
    }

    const getTemplateData = async (templateId, selectedProperties = {}, fetchSavedComparisons = true) => {
        try {
            const { data } = await getTemplate(templateId);
            const { data: savedComparisons } = fetchSavedComparisons && await fetchAllComparisons(getAuthHeaders());
            const newState = {
                ...state
            }
            newState.properties = data.result.properties;
            newState.name = data.result.name;
            newState.comparisonPanelProps = data.result.comparisonPanelProps;
            newState.propertiesUISchema = data.result.propertiesUISchema;
            newState.itemCardProps = data.result.itemCardProps;
            newState.itemSelectorProp = data.result.properties[data.result.itemSelectorProp];
            newState.savedComparisons = fetchSavedComparisons && savedComparisons.result || newState.savedComparisons;
            newState.savedComparisonKeys = Utils.getKeyValuePairFromArray(newState.savedComparisons, 'id');
            const sections = Object.keys(data.result.comparisonPanelProps);
            if(!Object.keys(selectedProperties).length) {
                sections.forEach(
                    section => selectedProperties[section] = [ ...newState.comparisonPanelProps[section].options ]
                )
            }
            newState.selectedProperties = selectedProperties;
            dispatch({ 
                type: types.GET_TEMPLATE_DATA_SUCCESS, 
                properties: newState.properties, 
                comparisonPanelProps: newState.comparisonPanelProps,
                selectedProperties: newState.selectedProperties,
                itemSelectorProp: newState.itemSelectorProp,
                savedComparisons: newState.savedComparisons,
                savedComparisonKeys: newState.savedComparisonKeys,
                itemCardProps: newState.itemCardProps,
                name: newState.name,
                propertiesUISchema: newState.propertiesUISchema,
                initialLoading: false
            });
        } catch (error) {
            dispatch({ type: types.GET_TEMPLATE_DATA_FAILED, error });
        }
    }

    const getSavedComparisonData = async (comparisonId, compareKey) => {
        try {
            const { data } = await getSavedComparison(comparisonId, getAuthHeaders());
            const newState = {
                ...state
            }
            newState.values = {};
            const { result } = data;
            const { templateId, selectedProperties, selectedItems, apiUrls } = result;
            getTemplateData(templateId, selectedProperties, false);
            let nextItemKey;

            const promises = selectedItems.map(async (selectedItem, index) => {
                // const url = `${apiUrl}/${selectedItem}`;
                const { data } = await fetch((apiUrls && apiUrls[selectedItem]) || newState.apiUrl);
                newState.values[`${compareKey}_${index + 1}`] = data;
                nextItemKey = `${compareKey}_${index + 2}`;
                return newState;
            });
            
            await Promise.all(promises);

            newState.selectedItems = selectedItems;
            newState.name = name;
            newState.selectedProperties = selectedProperties;
            newState.apiUrls = apiUrls;
            dispatch({ type: types.GET_COMPARISON_DATA_SUCCESS, apiUrls: newState.apiUrls, values: newState.values, compareModalValues: JSON.parse(JSON.stringify(newState.values)) });           

            dispatch({ type: types.SET_COMPARISON_DATA,  name: newState.name, selectedItems: newState.selectedItems, selectedProperties: newState.selectedProperties, nextItemKey: nextItemKey, selectedProducts: [] });          
        } catch (error) {
            dispatch({ type: types.GET_COMPARISON_DATA_FAILED, error });
        }
    }

    const closeComparisonNotification = () => {
        dispatch({ type: types.CLOSE_NOTIFICATION });
    }

    const saveComparison = async (name, templateId) => {
        try {
            const itemSelectorProp = state.itemSelectorProp && state.itemSelectorProp.title.toLowerCase();
            const selectedItems = Object.keys(state.values).map(
                key => {
                    return state.values[key][itemSelectorProp];
                }
            );

            const payload = { name, templateId, selectedItems, selectedProperties: state.selectedProperties, apiUrls: state.apiUrls };

            const { data } = await createComparison(payload, getAuthHeaders());
            const { result } = data;
            const { savedComparisonKeys, savedComparisons } = state;

            //add comparison to dropdown
            let newsSavedComparisons = [ ...savedComparisons, result ];
            let newSavedComparisonKeys = savedComparisonKeys;
            newSavedComparisonKeys[result.id] = result;

            dispatch({ 
                type: types.SAVE_COMPARISON_SUCCESS, 
                alertSuccessMsg: `${result.name} has been saved`,
                currentComparisonId: result.id,
                savedComparisons: newsSavedComparisons,
                savedComparisonKeys: newSavedComparisonKeys
            });
            setTimeout(() => {
                closeComparisonNotification();
            },5000);

        } catch(error) {
            if(error.response) {
                const { data } = error.response;
                const { errors } = data;
                const [ err ] = errors;
                let errorMesage =  err.message+ "\n";
                err.errors.forEach(
                    errorr => {
                        if(errorr.message) {
                            errorMesage += errorr.dataPath + " " + errorr.message + "\n"
                        }
                    }
                );
                
                dispatch({ type: types.SAVE_COMPARISON_FAILED, alertErrorMsg: errorMesage });
            } else {
                dispatch({ type: types.SAVE_COMPARISON_FAILED, alertErrorMsg: error.message });
            }            
            setTimeout(() => {
                closeComparisonNotification();
            },5000);
        }
    }

    const deleteComparison = async (currentComparisonId) => {
        try{
            const { data } = await deleteComparisonById(currentComparisonId, getAuthHeaders());
            const { result } = data;
            const newState = { ...state };
            newState.savedComparisons = state.savedComparisons.filter(item => item.id !== currentComparisonId);
            delete newState.savedComparisonKeys[currentComparisonId];
            dispatch({ 
                type: types.DELTE_COMPARISON_SUCCESS, 
                alertSuccessMsg: `Comparison ${result.name} has been deleted`,
                currentComparisonId: "",
                savedComparisons: newState.savedComparisons,
                savedComparisonKeys: newState.savedComparisonKeys
            });
            setTimeout(() => {
                closeComparisonNotification();
            },5000);
            clearComparison();
        } catch (error){
            const { data } = error.response;
            if(data) {
                const errMsg = getErrorResponseMessage(data);
                dispatch({ type: types.DELETE_COMPARISON_FAILED, alertErrorMsg: errMsg });
            } else
            dispatch({ type: types.DELETE_COMPARISON_FAILED, alertErrorMsg: error.message });
            setTimeout(() => {
                closeComparisonNotification();
            },5000);
        }
    }

    const clearComparison = () => {
        const { comparisonPanelProps, selectedProperties } = state;
        const newSelectedProperties = selectedProperties;
        let sections = Object.keys(comparisonPanelProps);
        sections.map(
            section => newSelectedProperties[section] = [ ...comparisonPanelProps[section].options ]
        );
        dispatch({ type: types.CLEAR_COMPARISON, selectedProperties: newSelectedProperties, values: {} })
    }

    const getErrorResponseMessage = (data) => {
        const { errors } = data;
        const [ err ] = errors;
        let errorMessage =  err.message+ "\n";
        err.errors.forEach(
            errorr => {
                if(errorr.message) {
                    errorMessage += errorr.dataPath + " " + errorr.message + "\n"
                }
            }
        );
        return errorMessage;
    }

    return (
        <CompareContext.Provider value={[state, dispatch,
            {
                getComparisonData,
                getTemplateData,
                getSavedComparisonData,
                saveComparison,
                closeComparisonNotification,
                deleteComparison
            }
        ]}>
            {props.children}
        </CompareContext.Provider>
    );
};