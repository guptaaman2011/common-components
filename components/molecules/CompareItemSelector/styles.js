import { Block, Button } from '../../atoms';
import styled from 'styled-components';
import { Card } from "antd";
import { 
    WHITE, 
    LUP_SPACING_8,
    LUP_SPACING_6,
    LUP_SPACING_50,
    LUP_SPACING_10,
    LUP_BOX_SHADOW_3,
    LUP_SPACING_200,
    LUP_SPACING_20,
    LUP_SPACING_110
} from '../../../theme';

const StyledBlock = styled(Block)`
    height: ${LUP_SPACING_110};
    background: ${WHITE};
    padding: ${LUP_SPACING_8};
    align-content: center;
`;

const StyledButton = styled(Button)`
    min-width: ${LUP_SPACING_50};
    display: block;
    margin: auto;
`;


const InputBlock = styled(Block)`
    margin: auto;
`;

const ErrorBlock = styled(Block)`
    height: ${LUP_SPACING_20};
    display: flex;
`;

const StyledCard = styled(Card)`
    border-width: ${props => props.borderWidth};
    padding: ${props => props.borderWidth == '1px' && '1px'};
    border-style: solid;
    border-color: ${props => props.color};
    .ant-card-body {
        padding: ${LUP_SPACING_10};
        width: ${props => props.bodyWidth};
        padding: ${props => props.bodyPadding};
    }
    box-shadow: ${LUP_BOX_SHADOW_3};
    min-width: ${LUP_SPACING_200};

`;

export { StyledBlock, StyledButton, InputBlock, StyledCard, ErrorBlock };
