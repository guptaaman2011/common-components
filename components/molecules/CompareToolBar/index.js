import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import { IconButton, Button } from "../../atoms";
import {
  StyledSaveText,
  StyledText,
  StyledFirstCol,
  StyledSecondCol,
  StyledThirdCol,
  StyledDiv,
  StyledCol,
  StyledCard,
  StyledSaveIconDiv,
  StyledDropDown,
  StyledDivider
} from "./styles";
import {
  DropDownText,
  SaveButtonText,
  DeleteButtonText,
} from "../../../utils/constants";
import SaveSVG from "../../../assets/images/Save.svg";
import CaretDownBlackSVG from "../../../assets/images/caret-down-black.svg";
import DeleteSVG from "../../../assets/images/icons/chatbox/delete_internal.svg";
import { LUP_SPACING_4, LUP_SPACING_6 } from '../../../theme';

const CompareToolBar = ({
  isDropDownVisible,
  dropDownMenu,
  handleDropDown,
  handleSaveComparison,
  handleDeleteComparison,
  handleExportComparison,
  saveComparisonDisabled,
  deleteComparisonDisabled,
  dataLength
}) => (
    <StyledCard>
      <Row type="flex"  style={{ padding: "9px 16px" }}>
        <StyledFirstCol>
          <StyledDropDown
            visible={isDropDownVisible}
            overlay={dropDownMenu}
            trigger={["click"]}
            placement="bottomCenter"
            arrow
          >
            <StyledDiv>
              <StyledSaveIconDiv>
                <IconButton
                  dataTestid="SaveSVGTestId"
                  src={SaveSVG}
                  style={{ display: 'flex' }}
                />
              </StyledSaveIconDiv>
              <StyledSaveText>{DropDownText}</StyledSaveText>
              <IconButton
                dataTestid="CaratDownSVGTestId"
                src={CaretDownBlackSVG}
                height={LUP_SPACING_4}
                width={LUP_SPACING_6}
                style={{ display: 'flex', height: '10px', width: '10px', alignItems: 'center', justifyContent: 'center' }}
              />
            </StyledDiv>
          </StyledDropDown>
        </StyledFirstCol>
        <StyledSecondCol>
          <Button colored="primary" size="small" onClick={handleSaveComparison} disabled={saveComparisonDisabled}>
            {SaveButtonText}
          </Button>
        </StyledSecondCol>
        <StyledCol />
        {dataLength || !deleteComparisonDisabled ?
          <>
            <StyledThirdCol>
              <StyledDivider></StyledDivider>
              <StyledText>{DeleteButtonText}</StyledText>
              <IconButton
                dataTestid="DeleteSVGTestId"
                src={DeleteSVG}
                onClick={handleDeleteComparison}
                disabled={deleteComparisonDisabled}
                style={{ display: 'flex', height: '16px', width: '16px' }}
              />
            </StyledThirdCol>
            {/* <StyledCol span={2} style={{ justifyContent: "flex-end" }}>
          <ExportText>{ExportButtonText}</ExportText>
          <IconButton
            dataTestid="ExportSVGTestId"
            src={ExportSVG}
            onClick={handleExportComparison}
            size={LUP_SPACING_14}
            style={{ display: 'flex', height: '16px', width: '16px' }}
          />
        </StyledCol> */}
          </> : <StyledCol span={6} />}
      </Row>
    </StyledCard>
  );

CompareToolBar.propTypes = {
  dropDownMenu: PropTypes.node.isRequired,
  isDropDownVisible: PropTypes.bool,
  handleDropDown: PropTypes.func,
  handleSaveComparison: PropTypes.func,
  handleDeleteComparison: PropTypes.func,
  handleExportComparison: PropTypes.func,
  saveComparisonDisabled: PropTypes.bool,
};

CompareToolBar.defaultProps = {
  isDropDownVisible: false,
  saveComparisonDisabled: true,
  handleDropDown: () => { },
  handleSaveComparison: () => { },
  handleDeleteComparison: () => { },
  handleExportComparison: () => { },
};

export default CompareToolBar;
