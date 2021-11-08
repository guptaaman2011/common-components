import React from 'react';
import PropTypes from 'prop-types';
import { BodyWrapper, StyledBlock, StyledCheckbox } from './styles';
import { Input, Button } from '../../atoms';
import { SaveModalTitle, saveAs, save , cancel } from '../../../utils/constants';
import ModalPopup from '../ModalPopup';

const SaveComparisonModal = ({ comparisonName, onSave, onCancel, placeholder, type, visible, itemSelectorProp, modalWidth }) => {

    const [value, setValue] = React.useState('');
    const [checkboxValue, setCheckboxValue] = React.useState(false);
    const itemSelector = itemSelectorProp.title;

    const saveAsClick = (event) => {
        if(event.target && event.target.checked) {
            setValue(comparisonName)
            setCheckboxValue(true)
        } else {
            setValue('')
            setCheckboxValue(false)
        }
    }

    const closeModal = () => {
      saveAsClick(false);
      onCancel();
    }
    
    return(
        <ModalPopup
          modalTitle = {SaveModalTitle}
          children = {<BodyWrapper>
            <Input placeholder={placeholder} value={value} id="comparisonName" onChange={(event) => setValue(event.target.value)}/>
            <StyledBlock>
              <StyledCheckbox subLabel={`${saveAs} ${itemSelector}`} onChange={(event) => saveAsClick(event)} checked={checkboxValue}/>
            </StyledBlock>
          </BodyWrapper>}
          isModalVisible={visible}
          handleOk={()=>{ onSave(value); closeModal() }}
          handleCancel={closeModal}
          okText = {save}
          cancelText = {cancel}
          centered
          modalWidth={modalWidth}
        />
    )

};

SaveComparisonModal.propTypes = {
    comparisonName: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    visible: PropTypes.bool,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    modalWidth: PropTypes.string,
}

SaveComparisonModal.defaultProps = {
    comparisonName: "",
    type: "string",
    placeholder: "Save Comparison as",
    visible: false,
    onSave: () => {},
    onCancel: () => {},
    modalWidth: '340px'
}

export default SaveComparisonModal;