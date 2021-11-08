import React from "react";
import PropTypes from "prop-types";
import { LUP_SPACING_22, LUP_MAIN_FONT_NORMAL, LUP_BASE_GREY_DARKER } from "../../../theme";
import ModalPopup from '../ModalPopup';
import { BodyWrapper } from './styles';
import { Text } from '../../atoms';

const ConfirmModal = ({
  confirmMessageContent,
  modalTitle,
  isModalVisible,
  handleOk,
  handleCancel,
  okText,
  cancelText,
  modalWidth,
}) => {
  return (
    <ModalPopup
    modalTitle = {modalTitle}
    children = {<BodyWrapper>
      <Text fontWeight={LUP_MAIN_FONT_NORMAL} color={LUP_BASE_GREY_DARKER} lineHeight={LUP_SPACING_22}>{confirmMessageContent}</Text>
    </BodyWrapper>}
    isModalVisible={isModalVisible}
    handleOk={handleOk}
    handleCancel={handleCancel}
    okText={okText}
    cancelText={cancelText}
    centered
    modalWidth={modalWidth}
    />
  );
};

ConfirmModal.propTypes = {
  confirmMessageContent: PropTypes.node.isRequired,
  modalTitle: PropTypes.string,
  isModalVisible: PropTypes.bool,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  modalWidth: PropTypes.string,
};

ConfirmModal.defaultProps = {
  modalTitle: "Title",
  isModalVisible: false,
  handleOk: () => {},
  handleCancel: () => {},
  okText: "OK",
  cancelText: "CANCEL",
  modalWidth: "320px",
};

export default ConfirmModal;
