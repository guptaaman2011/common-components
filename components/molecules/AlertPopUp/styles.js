import { Modal, Block } from '../../atoms';
import styled from 'styled-components';
import { 
    LUP_SPACING_60,
    LUP_SPACING_340,
    LUP_SPACING_15,
    LUP_SPACING_32,
    LUP_SPACING_66,
    LUP_SPACING_30,
    LUP_SPACING_8,
    LUP_SPACING_12,
    LUP_MAIN_BORDER_RADIUS2,
    LUP_MAIN_BORDER_WIDTH2,
  } from '../../../theme';
const StyledModal = styled(Modal)`
    max-width: ${LUP_SPACING_340};
    
    .ant-modal {
        min-height: ${LUP_SPACING_60};
        border-radius: ${LUP_MAIN_BORDER_RADIUS2};
    }
    .ant-modal-footer {
        border-top: 0;
    }

    .ant-modal-header {
        display: none;
    }

    .ant-modal-content {
        border-width: ${LUP_MAIN_BORDER_WIDTH2};
        border-style: solid;
        border-color: ${props => props.color};
        width: fit-content;
        margin: auto;
        border-radius: ${LUP_MAIN_BORDER_RADIUS2};
    }

    .ant-modal-close-x {
        height: ${LUP_SPACING_30};
        width:  ${LUP_SPACING_30};
        display: contents;
    }

    .ant-modal-close-icon {
        padding: ${LUP_SPACING_8};
    }

    .ant-modal-body {
        padding: ${LUP_SPACING_15};
        padding-right: ${LUP_SPACING_32};
        height: fit-content;
        width: fit-content;
        min-height: ${LUP_SPACING_66};
        display: flex;
    }
`;

const CloseWrapper = styled(Block)`
    padding: ${LUP_SPACING_8};
`;

const MessageWrapper = styled(Block)`
    padding-left: ${LUP_SPACING_12};
`;

const IconBlock = styled(Block)`
    display: contents;
`;

export { StyledModal, CloseWrapper, MessageWrapper, IconBlock };
