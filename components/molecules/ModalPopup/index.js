import React from "react";
import PropTypes from "prop-types";
import { StyledModal, CloseWrapper, StyledButton, BodyWrapper } from "./styles";
import { Text, Cross1, Block } from '../../atoms';
import { LUP_MAIN_FONT_SIZE14, LUP_MAIN_FONT_BOLD600, LUP_SPACING_16 } from '../../../theme';

const ModalPopup = ({
  modalTitle,
  isModalVisible,
  handleOk,
  handleCancel,
  okText,
  cancelText,
  modalWidth,
  children
}) => {
  return (
    <StyledModal
      title={<Block style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
      <Text 
      fontSize={LUP_MAIN_FONT_SIZE14} 
      fontWeight={LUP_MAIN_FONT_BOLD600} 
      lineHeight={LUP_SPACING_16}>{modalTitle}</Text>
      <CloseWrapper><Cross1 onClick={handleCancel} /></CloseWrapper>
      </Block>
      }
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
      centered
      width={modalWidth}
      footer={[
      <StyledButton size="small" colored="secondary" onClick={handleCancel}>{cancelText}</StyledButton>,
      <StyledButton size="small" colored="primary" onClick={handleOk}>{okText}</StyledButton>
      ]}
      maskStyle={{
        opacity: '50%', backgroundColor: '#444444'
      }}
      closable={false}
    >
      {children}
    </StyledModal>
  );
};

ModalPopup.propTypes = {
  children: PropTypes.node.isRequired,
  modalTitle: PropTypes.string,
  isModalVisible: PropTypes.bool,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  modalWidth: PropTypes.string,
};

ModalPopup.defaultProps = {
  modalTitle: "Title",
  isModalVisible: false,
  handleOk: () => {},
  handleCancel: () => {},
  okText: "OK",
  cancelText: "CANCEL",
  modalWidth: "320px",
};

export default ModalPopup;
