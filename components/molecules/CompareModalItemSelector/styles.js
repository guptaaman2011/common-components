import { Block, Input } from '../../atoms';
import styled from 'styled-components';
import { Button } from "antd";
import { 
    WHITE, 
    LUP_BASE_GREY,
    LUP_BASE_GREY_MEDIUM,
    LUP_FORM_DISABLED_BACKGROUND, 
    LUP_MAIN_FONT_SIZE12,
    LUP_SPACING_8,
    LUP_SPACING_12,
    LUP_SPACING_6,
    LUP_BASE_GREY_LIGHTEST,
    LUP_SPACING_130,
    LUP_SPACING_230,
} from '../../../theme';

const StyledBlock = styled(Block)`
    height: 110px;
    background: ${WHITE};
    padding: ${LUP_SPACING_8};
    align-content: center;
`;

const StyledButton = styled(Button)`
    display: block;
    margin: auto;
    height: 24px;

    &[disabled] {
        cursor: not-allowed;
    }

    color: ${WHITE} !important;
    font-size: ${LUP_MAIN_FONT_SIZE12};
    background: ${LUP_BASE_GREY} !important;
    border-color: ${LUP_BASE_GREY} !important;


    &:active, &:hover, &:focus {
        color: ${WHITE} !important;
        background: ${LUP_BASE_GREY_MEDIUM} !important;
        border-color: ${LUP_BASE_GREY_MEDIUM} !important;
    }

`;


const InputBlock = styled(Block)`
    margin: auto;
    min-width: ${LUP_SPACING_230};
    width: 70%;
`;

const ErrorBlock = styled(Block)`
    min-height: 16px;
`;

const StyledDiv = styled.div`
    border: 1px dashed ${LUP_BASE_GREY};
    box-sizing: border-box;
    padding: ${LUP_SPACING_12} ${LUP_SPACING_6};
    background-color: ${LUP_BASE_GREY_LIGHTEST};

    display: flex; 
    justify-content: center;
    align-items: center;
    height: ${LUP_SPACING_130};
    width: ${props => props.width || '100%'};
`;

const StyledInput = styled(Input)`
    &[type='text'] {      
        &:disabled {
            border: 1px solid ${LUP_FORM_DISABLED_BACKGROUND};
        }
    }
`;

export { StyledBlock, StyledButton, InputBlock, StyledDiv, ErrorBlock, StyledInput  };
