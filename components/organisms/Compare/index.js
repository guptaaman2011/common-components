import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ComparisonGrid,
  CompareToolBar,
  SaveComparisonModal,
  AlertPopUp,
  ConfirmModal,
  CompareViewModal,
} from "../../molecules";
import FilterPanel from "../FilterPanel";
import { StyledBlock, StyledWrapper, StyledDiv, FilterBlock, StyledDropDropArrow, ToolbarWrapper, StyledMenu, IconButtonWrapper } from "./styles";
import { IconButton, Text } from "../../atoms";
import dropDownCheck from "../../../assets/images/dropDownCheck.svg";
const { Item } = StyledMenu;

const Compare = ({
  comparisonPanelProps,
  properties,
  data,
  dataForCompareModal,
  primary,
  compareKey,
  onSubmit,
  onSubmitFromModal,
  onClickViewComparison,
  templateName,
  selectedProducts,
  updateSelectedProducts,
  selectedProductsFromModal,
  updateSelectedProductsFromModal,
  selectedProperties,
  updateSelectedProperties,
  saveComparison,
  saveComparisonDisabled,
  alertSuccessMsg,
  alertErrorMsg,
  closeComparisonNotification,
  defaultComparisonName,
  propertiesUISchema,
  itemCardProps,
  currentComparisonId,
  comparisonDataError,
  currentItemKey,
  deleteCurrentComparison,
  deleteComparisonDisabled,
  savedComparisons,
  savedComparisonKeys,
  saveCurrentComparisonId,
  itemSelectorProp,
  itemsToCompareCount,
  removeCompareItem,
  onHighlightChange,
  highlightSelected,
  handleClearAllData,
  loadingInModal,
  compareViewVisible,
  setCompareViewVisible,
  handleCompareViewCancel,
  initialSelectedProperties,
  loading,
  renderLoader,
  inputValueForError,
}) => {
  const keys = Object.keys(comparisonPanelProps);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [deleteConfirmModalVisible, setDeleteConfirmModalVisible] = useState(
    false
  );
  const filters = keys.map((filterKey) => {
    return {
      'key': filterKey,
      'title': comparisonPanelProps[filterKey].title,
      'options': comparisonPanelProps[filterKey].options,
      'value': selectedProperties[filterKey]
    };
  });
  let sections = [];

  keys.forEach(sectionKey => {
    if(selectedProperties[sectionKey] && selectedProperties[sectionKey].length) {
      sections.push({
        key: sectionKey,
        title: comparisonPanelProps[sectionKey].title,
        fields: selectedProperties[sectionKey]
      });
    }
  });

  const handleDropdownClick = (item) => {
    saveCurrentComparisonId(item.key);
  };

  const onSubmitAndUpdate = (value, key, product) => {
    onSubmitFromModal(value, key, product);    
  };

  const getComparisonsDropdown = () => {
    return (
      <StyledMenu onClick={handleDropdownClick}>
        <StyledDropDropArrow/>
        {savedComparisons.length > 0
          ? savedComparisons.map((savedComparison) => (
              <Item key={savedComparison.id} onClick={() => onClickViewComparison(savedComparison.id)}>
                <div style={{ display: "flex" }} key={savedComparison.id}>
                  {savedComparison.id === currentComparisonId ? (
                    <IconButtonWrapper>
                      <IconButton src={dropDownCheck} size='8px' />
                    </IconButtonWrapper>
                  ) : (
                    <span style={{ marginLeft: "16px" }} />
                  )}
                  <Text fontSize={"14px"}>{savedComparison.name}</Text>
                </div>
              </Item>
            ))
          : "No Data Found"}
      </StyledMenu>
    );
  };
  
  return (
    <StyledWrapper>
      <ToolbarWrapper>
        <CompareToolBar
          saveComparisonDisabled={saveComparisonDisabled}
          handleSaveComparison={() => setSaveModalVisible(true)}
          currentComparisonId={currentComparisonId}
          dropDownMenu={() => getComparisonsDropdown()}
          isDropDownVisible={savedComparisons.length}
          deleteComparisonDisabled={deleteComparisonDisabled}
          handleDeleteComparison={() => setDeleteConfirmModalVisible(true)}
          handleDropDown={onClickViewComparison}
          dataLength={Object.keys(data).length}
        />
      </ToolbarWrapper>
      <StyledDiv>
        <FilterBlock>
          <FilterPanel
            filters={filters}
            updateSelectedProperties={updateSelectedProperties}
            selectedProperties={selectedProperties}
            initialSelectedProperties={initialSelectedProperties}
          />
        </FilterBlock>
        <StyledBlock>
          <ComparisonGrid
            sections={sections}
            primary={primary}
            properties={properties}
            data={data}
            compareKey={compareKey}
            onSubmit={onSubmit}
            label={templateName}
            onClickSubmit={() => setCompareViewVisible(true)}
            selectedProducts={selectedProducts}
            updateSelectedProducts={updateSelectedProducts}
            propertiesUISchema={propertiesUISchema}
            itemCardProps={itemCardProps}
            itemSelectorProp={itemSelectorProp}
            itemsToCompareCount={itemsToCompareCount}
            removeCompareItem={removeCompareItem}
            onHighlightChange={onHighlightChange}
            highlightSelected={highlightSelected}
            comparisonDataError={!compareViewVisible && comparisonDataError}
            inputValueForError={inputValueForError}
            currentItemKey={currentItemKey}
            handleClearAllData={handleClearAllData}
            clearAllDisabled={!Object.keys(data).length}
            loading={loading}
            renderLoader={renderLoader}
            comparisonName={savedComparisonKeys[currentComparisonId] && savedComparisonKeys[currentComparisonId].name}
          />
        </StyledBlock>
      </StyledDiv>
      <CompareViewModal
          products={dataForCompareModal}
          selectedProducts={selectedProductsFromModal}
          loadingInModal={loadingInModal}
          visible={compareViewVisible}
          onSubmitAndUpdate={onSubmitAndUpdate}
          compareKey={compareKey}
          handleRemove={(productToRemove) => updateSelectedProductsFromModal(selectedProductsFromModal.filter(sProduct => sProduct !== productToRemove))}
          handleCancel={handleCompareViewCancel}
          inputValueForError={inputValueForError}
          comparisonDataError={comparisonDataError}
      />
      <SaveComparisonModal
        type="string"
        placeholder="Save Comparison as"
        visible={saveModalVisible}
        comparisonName={defaultComparisonName}
        onSave={saveComparison}
        onCancel={() => setSaveModalVisible(false)}
        itemSelectorProp={itemSelectorProp}
      />
      {alertSuccessMsg && (
        <AlertPopUp
          type="success"
          message={alertSuccessMsg}
          onCancelPopUp={closeComparisonNotification}
        />
      )}
      {alertErrorMsg && (
        <AlertPopUp
          type="error"
          message={alertErrorMsg}
          onCancelPopUp={closeComparisonNotification}
        />
      )}
      {!deleteComparisonDisabled && (
        <ConfirmModal
          modalTitle={templateName}
          confirmMessageContent="Are you sure you want to delete this comparison?"
          isModalVisible={deleteConfirmModalVisible}
          handleOk={() => {
            deleteCurrentComparison();
            setDeleteConfirmModalVisible(false);
          }}
          handleCancel={() => setDeleteConfirmModalVisible(false)}
          okText="DELETE"
          cancelText="DON'T DELETE"
          centered
          modalWidth="340px"
        />
      )}
    </StyledWrapper>
  );
};

Compare.propTypes = {
  savedComparisons: PropTypes.arrayOf(PropTypes.shape({})),
  saveCurrentComparisonId: PropTypes.func,
  itemsToCompareCount: PropTypes.number,
  removeCompareItem: PropTypes.func,
  inputValueForError: PropTypes.string,
};

Compare.defaultProps = {
  savedComparisons: [],
  saveCurrentComparisonId: () => {},
  itemsToCompareCount: 4,
  removeCompareItem: () => {},
  inputValueForError: '',
};

export default Compare;
