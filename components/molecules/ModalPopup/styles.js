import styled from "styled-components";
import { Block, Button, Text } from "../../atoms";
import { Modal } from 'antd';
import { 
  LUP_BASE_GREY_LIGHTER, 
  LUP_SPACING_16,
  LUP_SPACING_15, 
  LUP_BASE_GREY_DARKER, 
  LUP_SPACING_1, 
  LUP_MAIN_BORDER_RADIUS4, 
  LUP_MODAL_BUTTON_WIDTH_100,
  LUP_SPACING_14, 
  LUP_SPACING_4, 
  LUP_SPACING_8,
  LUP_BOX_SHADOW_2,
  LUP_SPACING_20,
  LUP_SPACING_45,
  LUP_SPACING_30,
  LUP_SPACING_40,
  LUP_MAIN_BORDER_WIDTH1,
} from "../../../theme";

const StyledModal = styled(Modal)`
  .ant-modal-title {
    line-height: ${LUP_SPACING_16};
  }

  .ant-modal-content {
    box-shadow: 0 ${LUP_SPACING_1} ${LUP_SPACING_8} ${LUP_BASE_GREY_DARKER};
    border-radius: ${LUP_SPACING_4};
}

  .ant-modal-header {
    padding: ${LUP_SPACING_14} ${LUP_SPACING_20};
    padding-right: ${LUP_SPACING_15};
    background: ${LUP_BASE_GREY_LIGHTER};
    box-shadow: ${LUP_BOX_SHADOW_2};
    border-bottom: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY_LIGHTER};
  }
  .ant-modal-footer {
    padding: 0;
    padding-bottom: ${LUP_SPACING_40};
    text-align: center;
    border-top: 0px;
  }
  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-footer button + button {
    margin-left: 30px;
  }

  .ant-modal-close-x {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${LUP_SPACING_45};
    width: ${LUP_SPACING_45};
  }

  border-radius: ${LUP_MAIN_BORDER_RADIUS4};
`;

const CloseWrapper = styled(Block)`
    padding-left: ${LUP_SPACING_15};
    display: inline-block;
`;

const StyledButton = styled(Button)`
  min-width: ${LUP_MODAL_BUTTON_WIDTH_100};
`;

const BodyWrapper = styled(Block)`
  padding: ${LUP_SPACING_30} ${LUP_SPACING_20};
  padding-bottom: ${LUP_SPACING_40};
`;

export { StyledModal, CloseWrapper, StyledButton, BodyWrapper };