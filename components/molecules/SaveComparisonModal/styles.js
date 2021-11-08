import { Block, Checkbox } from '../../atoms';
import styled from 'styled-components';
import { LUP_SPACING_16, LUP_SPACING_18,
LUP_SPACING_26, LUP_SPACING_13} from '../../../theme';

const StyledBlock = styled(Block)`
    padding-top: ${LUP_SPACING_13};
    display: flex;
    justify-content: space-around;
`;

const StyledCheckbox = styled(Checkbox)`
`;

const BodyWrapper = styled(Block)`
  padding: ${LUP_SPACING_26} ${LUP_SPACING_16} ${LUP_SPACING_18};
`;

export { StyledBlock, StyledCheckbox, BodyWrapper  };
