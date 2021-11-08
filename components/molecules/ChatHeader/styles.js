import styled from "styled-components";
import { Select } from "../../atoms";
import { FlexBlock } from "../../atoms";
import {
  LUP_BASE_GREY_DARKEST,
  LUP_MAIN_FONT_BOLD600,
  LUP_MAIN_FONT_SIZE14,
  LUP_SPACING_8,
  LUP_SPACING_4,
  LUP_SPACING_40,
  LUP_SPACING_50,
  LUP_SPACING_2,
  LUP_SPACING_5,
  WHITE,
  LUP_SPACING_34,
  LUP_SPACING_16,
  LUP_SPACING_20,
  LUP_SPACING_15,
  LUP_SPACING_10
} from "../../../theme";

const StyledSelect = styled(Select)`
  &.ant-select {
    border: none;
    width: ${LUP_SPACING_50};
    background: ${WHITE};
  }

  &.ant-select
    > .ant-select-selection--single
    > .ant-select-selection__rendered {
    color: #2d9cdb;
    font-weight: ${LUP_MAIN_FONT_BOLD600};
    width: ${LUP_SPACING_50};
  }

  .ant-select-selection-selected-value {
    padding-top: ${LUP_SPACING_4};
    padding-right: ${LUP_SPACING_5} !important;
  }

  .ant-select-selection {
    width: ${LUP_SPACING_50};
    padding-left: 0;
  }

  .ant-select-selection--single .ant-select-selection__rendered {
    margin-right: ${LUP_SPACING_8};
    margin-left: ${LUP_SPACING_4};
    width: ${LUP_SPACING_40};
  }

  .ant-select-arrow {
    position: absolute;
    right: ${LUP_SPACING_5};
    padding-top: ${LUP_SPACING_2};
  }
`;

const StyledFlexBlock = styled(FlexBlock)`
  color: ${LUP_BASE_GREY_DARKEST};
  font-weight: ${LUP_MAIN_FONT_BOLD600};
  font-size: ${LUP_MAIN_FONT_SIZE14};
  margin: 0px ${LUP_SPACING_20} 0px 0px;
  padding: 0px;
`;

const StyledBlockWrapper = styled.div`
  display: flex;
  border-bottom: none;
  align-items: center;
  justify-content: space-between;
  line-height: ${LUP_SPACING_16};
`;

const StyledWrapper = styled.div`
  display: flex;
  border-bottom: none;
  align-items: center;
  justify-content: space-between;
  height: ${LUP_SPACING_34};
  padding: ${LUP_SPACING_8} ${LUP_SPACING_15} ${LUP_SPACING_10} ${LUP_SPACING_15}
`;

export { StyledSelect, StyledFlexBlock, StyledBlockWrapper, StyledWrapper };
