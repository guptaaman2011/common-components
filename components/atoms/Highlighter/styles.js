import styled from 'styled-components';
import { LUP_BASE_BLUE_DARK } from '../../../theme';

const StyledHighlighter = styled.div`
    height: 10px;
    background: ${props => (props.color || LUP_BASE_BLUE_DARK)};
    border-radius: 4px 4px 0px 0px;
`;

export { StyledHighlighter };