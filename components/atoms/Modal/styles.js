import styled from 'styled-components';
import { Modal } from 'antd';
import { LUP_BOX_SHADOW_1, LUP_MAIN_BORDER_RADIUS4, WHITE } from '../../../theme';

const StyledModal = styled(Modal)`
    .ant-modal-content {
        box-shadow: ${LUP_BOX_SHADOW_1};
        border-radius: ${LUP_MAIN_BORDER_RADIUS4};
    }

    .ant-modal-body {
        background: ${WHITE};
    }
`;

export { StyledModal };
