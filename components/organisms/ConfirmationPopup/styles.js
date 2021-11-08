import styled from 'styled-components';
import { color } from 'styled-system';
import { Button } from '../../atoms';
import { Modal } from 'antd';
import { LUP_SPACING_300, HEX, LUP_SPACING_500, LUP_SPACING_32, LUP_SPACING_25, LUP_SPACING_16, LUP_SPACING_8,
  LUP_MAIN_FONT_BOLD600, LUP_BASE_GREY_DARK, LUP_SPACING_18, LUP_SPACING_160} from '../../../theme';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: ${LUP_SPACING_32};
    width: ${LUP_SPACING_500};
    height: ${LUP_SPACING_300};
  }

  .ant-modal-footer {
    padding-top: ${LUP_SPACING_16};
    text-align: center;
    border-top: 0;
  }

  .ant-modal-body {
    padding: 0;
  }
`;
const StyledIcon = styled.p`
  font-size: ${LUP_SPACING_25};
  text-align: center;
  margin-bottom: ${LUP_SPACING_8};
`;

const Title = styled.p`
  font-style: normal;
  font-weight: ${LUP_MAIN_FONT_BOLD600};
  font-size: ${LUP_SPACING_18};
  text-align: center;
  color: ${HEX};
  margin-bottom: ${LUP_SPACING_8};
`;

const Description = styled.p`
  font-size: ${LUP_SPACING_16};
  text-align: center;
  font-weight: 500;
  color: ${LUP_BASE_GREY_DARK};
`;

const StyledButton = styled(Button)`
  margin: 0px 8px;
  font-family: Titillium Web;
  font-size: ${LUP_SPACING_18};
  width: ${LUP_SPACING_160};
  ${color};
`;

export { StyledIcon, StyledModal, Title, Description, StyledButton };
