import styled from "styled-components";
import { Card, Row, Col } from "antd";
import { Text, Modal } from '../../atoms';
import { LUP_BASE_GREY_LIGHTEST, LUP_BASE_GREY_DARKEST, WHITE, LUP_SPACING_20, LUP_SPACING_22, LUP_MAIN_FONT_BOLD600, LUP_SPACING_5, LUP_SPACING_10,
  LUP_BOX_SHADOW_3, LUP_SPACING_24, LUP_SPACING_40, LUP_SPACING_100, LUP_SPACING_30, LUP_SPACING_7, LUP_SPACING_32, LUP_SPACING_12 } from "../../../theme";

const StyledCol = styled(Col)`
  padding: 0 ${LUP_SPACING_10} ${LUP_SPACING_10} 0;
`;

const StyledContainer = styled.div`
  background: ${LUP_BASE_GREY_LIGHTEST};
  padding: ${LUP_SPACING_5} ${LUP_SPACING_10};
`;

const StyledRow = styled(Row)`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledSecondRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledText = styled(Text)`
  flex-grow: 1;
`;

const StyledSecondText = styled(Text)`
  cursor: pointer;
`;

const StyledModal = styled(Modal)`

  padding-top: ${LUP_SPACING_100};
  padding-bottom: ${LUP_SPACING_100} !important;
  background: transparent !important;

  .ant-modal-centered .ant-modal {
    background: transparent;
  }

  background: ${LUP_BASE_GREY_LIGHTEST};
  padding-bottom: 0px;

  .ant-modal-content {
    box-shadow: ${LUP_BOX_SHADOW_3};
  }

  .ant-modal-title {
    line-height: ${LUP_SPACING_20};
    font-weight: ${LUP_MAIN_FONT_BOLD600};
    color: ${LUP_BASE_GREY_DARKEST};
  }

  .ant-modal-header {
    padding: ${LUP_SPACING_20};
    padding-top: ${LUP_SPACING_7};
    background: ${LUP_BASE_GREY_LIGHTEST};
    border-radius: 0;
    border: none;
  }
  .ant-modal-footer {
    background: ${LUP_BASE_GREY_LIGHTEST};
    text-align: center;
    border-top: 0px;
    padding: 0;
  }
  .ant-modal-body {
    padding: ${LUP_SPACING_30} ${LUP_SPACING_10} ${LUP_SPACING_22} ${LUP_SPACING_20};
    padding-top: 0;
    background: ${LUP_BASE_GREY_LIGHTEST};
  }
  .ant-btn {
    padding: 0px;
    width: ${LUP_SPACING_100};
    height: ${LUP_SPACING_32};
    font-size: ${LUP_SPACING_12};
  }
  .ant-modal-footer button + button {
    margin-left: ${LUP_SPACING_30};
  }

  .ant-modal-close-x {
    position: absolute;
    right: 0px;
    bottom: 0px;
    color: ${WHITE};
    width: ${LUP_SPACING_24};
    height: ${LUP_SPACING_40};
  }
`;

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0px;
  }
`;

export { StyledCol, StyledSecondRow, StyledText, StyledSecondText, StyledContainer, StyledModal, StyledCard, StyledRow };