import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { LUP_MAIN_FONT_SIZE14, LUP_SPACING_22, theme } from "../../../theme";
import { IconButton, Text } from "../../atoms";
import dropDownCheck from "../../../assets/images/dropDownCheck.svg";
import { StyledDropDropArrow, StyledMenu, IconButtonWrapper } from './styles';
const { Item } = StyledMenu;
import CompareToolBar from ".";

const ThemeProviderDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

const selectedComparision = "HGEE1917233";
const savedComparisonList = ["HGEE1917232", "HGEE1917233", "HGEE1917234 (1)"];
const savedComparisonMenu = () => {
  return (
    <StyledMenu>
      <StyledDropDropArrow/>
      {savedComparisonList.length > 0
        ? savedComparisonList.map((savedComparison) => (
            <Item key={savedComparison}>
              <div style={{ display: "flex" }} key={savedComparison}>
                {savedComparison === selectedComparision ? (
                  <IconButtonWrapper>
                    <IconButton src={dropDownCheck} size='8px'/>
                  </IconButtonWrapper>
                ) : (
                  <span style={{ marginLeft: "16px" }} />
                )}
                <Text fontSize={LUP_MAIN_FONT_SIZE14} lineHeight={LUP_SPACING_22}>
                  {savedComparison}
                </Text>
              </div>
            </Item>
          ))
        : "No Data Found"}
    </StyledMenu>
  );
};

addDecorator(ThemeProviderDecorator);
addDecorator(withKnobs);

storiesOf("molecules / Compare / CompareToolBar", module).add("Default", () => {
  return (
    <CompareToolBar
      isDropDownVisible
      dropDownMenu={savedComparisonMenu}
      handleSaveComparison={() => {}}
      handleDeleteComparison={() => {}}
      handleExportComparison={() => {}}
      handleDropDown={() => { console.log('handleDropdown clicked') }}
    />
  );
});
