import styled from "styled-components";
import { Table as AntdTable, Row } from "antd";
import {
  LUP_BASE_BLUE_DARKER,
  LUP_BASE_GREY_LIGHTEST,
  LUP_BASE_GREY_DARKER,
  LUP_BASE_GREY,
  LUP_BASE_BLUE,
  LUP_BASE_GREY_LIGHT,
  LUP_SPACING_150,
  LUP_BASE_GREY_DARK,
  LUP_FUNCTIONAL_ALERT_YELLOW_LIGHTER,
  WHITE,
  LUP_MAIN_FONT_BOLD600,
  LUP_MAIN_FONT_NORMAL,
  LUP_MAIN_FONT_SIZE16,
  LUP_SPACING_11,
  LUP_BASE_BLUE_DARK,
  LUP_SPACING_2,
  LUP_SPACING_22,
  LUP_SPACING_20,
  LUP_MAIN_FONT_SIZE12,
  LUP_MAIN_FONT_SIZE14,
  LUP_SPACING_24,
  LUP_SPACING_14,
  LUP_SPACING_8,
  LUP_SPACING_18,
  LUP_SPACING_5,
  LUP_SPACING_134,
  LUP_SPACING_200,
  LUP_MAIN_BORDER_WIDTH2,
  LUP_MAIN_BORDER_WIDTH1,
  LUP_SPACING_4,
  LUP_SPACING_44,
  LUP_SPACING_16,
  LUP_SPACING_10,
  LUP_BASE_GREY_DARKEST,
  LUP_SPACING_187,
  LUP_SPACING_7,
  LUP_SPACING_28,
  LUP_SPACING_15
} from "../../../theme";
import { Block, Checkbox, Text } from '../../atoms';

const StyledLabel = styled.span`
  font-weight: ${LUP_MAIN_FONT_BOLD600};
  font-size: ${LUP_MAIN_FONT_SIZE16};
  line-height: ${LUP_SPACING_20};
  color: ${LUP_BASE_BLUE_DARKER};
`;

const StyledComparisonName = styled(Text)`
  font-weight: ${LUP_MAIN_FONT_BOLD600};
  font-size: ${LUP_MAIN_FONT_SIZE16};
  line-height: ${LUP_SPACING_24};
  padding-left: ${LUP_SPACING_20};
`;

const StyledTable = styled(AntdTable)`
  display: flex;
  white-space: pre-line;
  margin-bottom: ${LUP_SPACING_28};
  .ant-table {
    border: none;
    height: 100%;

    table {
      table-layout: fixed;
    }
  }

  .ant-table-small > .ant-table-content > .ant-table-body {
    margin: 0;
  }

  .ant-table-placeholder {
    border-top: none;
    background: ${LUP_BASE_GREY_LIGHTEST};
  }

  .ant-empty-normal .ant-empty-image, .ant-empty-description {
    display: none;
  }

  .ant-table-thead {
    & > tr:first-child > th:first-child {
      border-top-left-radius: 0;
    }

    & > tr:first-child > th {
      padding: 0 !important;
    }

    & > tr:first-child > th:last-child {
      border-top-right-radius: 0;
    }

    & > tr > th {
      background: none;
      #color: ${LUP_BASE_BLUE_DARKER};
      font-size: ${LUP_MAIN_FONT_SIZE12};
      font-weight: ${LUP_MAIN_FONT_BOLD600};
      padding: ${LUP_SPACING_14} ${LUP_SPACING_8};
    }
  }

  .ant-table-tbody {
    & tr:nth-child(2n) {
      background-color: ${LUP_BASE_GREY_LIGHTEST};
    }
    & tr:nth-child(2n + 1) {
      background-color: ${WHITE};
    }

    & tr:nth-child(1) > td{
      vertical-align: middle;
      padding-left: 0 !important;
      padding-right: ${LUP_SPACING_2} !important;
    }

    & > tr > td {
      width: ${LUP_SPACING_150} !important;
      //border: none;
      font-size: ${LUP_MAIN_FONT_SIZE12};
      line-height: ${LUP_SPACING_18};
      text-align: center;
      color: ${LUP_BASE_GREY_DARKER};
      // vertical-align: top;
    }
  }

  .ant-table-empty .ant-table-body {
    overflow-x: inherit !important;
    overflow-y: unset !important;
  }

  .ant-table .ant-table-tbody > tr:hover > td {
    background: unset;
  }

  .property {
    width: ${LUP_SPACING_187};
    white-space: pre-line;
    font-weight: ${LUP_MAIN_FONT_BOLD600};
    font-size: ${LUP_MAIN_FONT_SIZE12};
    line-height: ${LUP_SPACING_14};
    color: ${LUP_BASE_GREY_DARKEST} !important;
    text-align: left !important;
    padding: ${LUP_SPACING_5} 0 0 ${LUP_SPACING_16} !important;
  }
  .min-column-width {
    width: ${LUP_SPACING_200};
  }
  .primary {
    border-left: ${LUP_MAIN_BORDER_WIDTH2} solid ${LUP_BASE_BLUE} !important;
    border-right: ${LUP_MAIN_BORDER_WIDTH2} solid ${LUP_BASE_BLUE} !important;
    padding: ${LUP_SPACING_5} ${LUP_SPACING_10} !important;
    vertical-align: middle !important;
  }
  .secondary {
    border-left: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY_LIGHT} !important;
    border-right: ${LUP_MAIN_BORDER_WIDTH1} solid ${LUP_BASE_GREY_LIGHT} !important;
    padding: ${LUP_SPACING_5} ${LUP_SPACING_10} !important;
    vertical-align: middle !important;
  }
  .sectionTitle {
    padding:  ${LUP_SPACING_4} !important;
    padding-left:  ${LUP_SPACING_16} !important;
    height: ${LUP_SPACING_44};
    vertical-align: bottom !important;
  }
  .divider {
    width:  ${LUP_SPACING_16};
    background: ${WHITE};
    border: none;
    background: ${LUP_BASE_GREY_LIGHTEST};
  }
  .first_divider {
    width:  ${LUP_SPACING_16};
    background: ${WHITE};
    border: none;
    background: ${LUP_BASE_GREY_LIGHTEST};
  }
  .highlight {
    background: ${LUP_FUNCTIONAL_ALERT_YELLOW_LIGHTER};
  }
  .highlightCheckbox {
    padding-left: 0 !important; 
    border-bottom: 0;
    padding-top: ${LUP_SPACING_15} !important; 
    position: relative;
    padding-bottom: ${LUP_SPACING_7} !important;
    padding-right: 0px !important;
  }
  .viewerSelector {
    padding: 0 ${LUP_SPACING_8} !important;
  }
  .viewerSelectorFirstCol {
    padding: 0 ${LUP_SPACING_2} !important;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  float: right;
  .ant-checkbox + span + span  {
      color: ${LUP_BASE_GREY_DARK} !important;
      font-size: ${LUP_MAIN_FONT_SIZE14};
      padding-left:  ${LUP_SPACING_4};
      padding-right: 0;
  }

  .ant-checkbox { 
      line-height:  ${LUP_SPACING_22};
  }
  
  .ant-checkbox-wrapper {
    height: ${LUP_SPACING_22};
  }
`;

const CheckboxWrapper = styled.div`
  right: 0;
`;

const StyledBlock = styled(Block)`
  padding: 0;
`;

const StyledText = styled(Text)`
  color: ${LUP_BASE_BLUE_DARK};
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: ${LUP_MAIN_FONT_NORMAL};
  font-size: ${LUP_MAIN_FONT_SIZE14};
  float: right;

  &[disabled] {
    opacity: 1;
    cursor: not-allowed;
    color: ${LUP_BASE_GREY}
  }
`;

const GridWrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TitleWrapper = styled(Block)``;

const TableWrapper = styled(Block)`
  position: relative;
  display: flex;
  flex-grow: 1;
  overflow-x: auto;
`;

const StyledRow = styled(Row)`
  padding-bottom: ${LUP_SPACING_11};
`;

const StyledBlockBottomPadding = styled(Block)`
  padding-bottom: ${props => props.size}
`;

const StyledtrTopBottomPadding = styled.tr`
  padding: ${props => props.size} 0;
`;

const StyledDiv = styled.div`
  text-align: left;
`;

export { 
  StyledLabel, 
  StyledTable, 
  StyledCheckbox, 
  CheckboxWrapper, 
  StyledBlock, 
  StyledText, 
  StyledComparisonName,
  StyledRow,
  GridWrapper, 
  TitleWrapper, 
  TableWrapper,
  StyledBlockBottomPadding,
  StyledtrTopBottomPadding,
  StyledDiv
};
