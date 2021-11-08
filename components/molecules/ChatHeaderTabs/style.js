import styled from 'styled-components';
import { Badge as AntBadge } from 'antd'
import { LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_NORMAL, LUP_SPACING_15 } from '../../../theme';

const StyledCommentOptionsBlock = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
  

  .ant-radio-group {
    width: 100%;
  }

  .ant-radio-button-wrapper {
    width: ${props => props.optionsWidth};
    line-height: 40px;
    height: 40px;
    font-size: 14px;
    font-weight: ${LUP_MAIN_FONT_NORMAL};
    text-align: center;
    vertical-align: middle;
    padding: 0px 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;

    color: #888888 !important;
    :active {
      color: #888888 !important;
    }
  }
  
  .ant-radio-button-wrapper:last-child {
    border-radius: 0;
  }

  .ant-radio-button-wrapper:first-child{
    border-radius: 0;
  }

  .ant-radio-button-wrapper-checked {
    font-weight: ${LUP_MAIN_FONT_BOLD600};
    // text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);

    color: #fff !important;
    :active {
      color: #fff !important;
    }
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    box-shadow: none !important;
  }
`;

const StyledBadge = styled(AntBadge)`
  .ant-badge-count {
    background: ${props => props.bgColor };
  }

 &.ant-badge {
    right: ${LUP_SPACING_15};
    position: absolute;
 }
`;

const StyledDiv = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center;
  height: 100%;
`;

export { StyledCommentOptionsBlock, StyledBadge, StyledDiv };
