import styled from 'styled-components';
import { Progress } from 'antd';
import { Text, Block } from "../../atoms";
import { LUP_BASE_BLUE_DARK, LUP_SPACING_4, LUP_SPACING_3, LUP_SPACING_32, LUP_SPACING_22, LUP_FUNCTIONAL_ERROR_RED,
    LUP_SPACING_11, LUP_SPACING_5, LUP_SPACING_170, LUP_MAIN_BORDER_RADIUS4, LUP_SPACING_2, LUP_SPACING_130,
    LUP_BASE_GREY_LIGHT, LUP_FUNCTIONAL_ALERT_YELLOW, LUP_FUNCTIONAL_ALERT_YELLOW_LIGHT, LUP_BASE_GREY_DARKER
} from '../../../theme';

const StyledAttachmentCard = styled.div`
    display: inline-block;  
    margin: ${LUP_SPACING_5} ${LUP_SPACING_11} 0 0; 
    width: ${LUP_SPACING_170}; 
    height: ${LUP_SPACING_32}; 
    border: 1px solid;
    border-color: ${props => (props.isUploading ? LUP_BASE_GREY_LIGHT : LUP_BASE_BLUE_DARK )};
    border-color: ${props => (props.isError && LUP_FUNCTIONAL_ERROR_RED)};
    border-color: ${props => (props.isHighlightedAndFocused && LUP_FUNCTIONAL_ALERT_YELLOW)};
    background: ${props => (props.isHighlighted && LUP_FUNCTIONAL_ALERT_YELLOW_LIGHT)};
    border-radius: ${LUP_MAIN_BORDER_RADIUS4} ;
    padding: ${LUP_SPACING_3} ${LUP_SPACING_4};
    margin-top: -${LUP_SPACING_2};
`;

const StyledProgressBar = styled(Progress)`
    .ant-progress-outer {
        margin-top: -${LUP_SPACING_22};
        position: absolute;

        .ant-progress-bg {
            background-image: linear-gradient(to right, ${LUP_BASE_BLUE_DARK}, ${LUP_BASE_BLUE_DARK}) !important;
        }
    }
`;

const StyledText = styled(Text)`
    color: ${props => (props.isError && 'red')};
    color: ${props => (props.isHighlighted && LUP_BASE_GREY_DARKER)};
    color: ${props => (!props.isError && !props.isHighlighted && LUP_BASE_BLUE_DARK)};
    white-space: nowrap;
    text-overflow: ellipsis;
    width: ${props => (props.isUploading ? '80px' : '110px')};
    display: block;
    overflow: hidden;
    line-height: ${LUP_SPACING_22};
`;


const StyledLink = styled.a`
    color: ${props => (props.isHighlighted ? LUP_BASE_GREY_DARKER : LUP_BASE_BLUE_DARK)};
    white-space: nowrap;
    text-overflow: ellipsis;
    width: ${LUP_SPACING_130};
    display: block;
    overflow: hidden;

    &:hover, &:active, &:focus {
        color: ${LUP_BASE_BLUE_DARK};
    }
`;

const IconButtonWrapper = styled(Block)`
    padding-right: ${LUP_SPACING_4};
`;

export { StyledAttachmentCard, StyledProgressBar, StyledText, StyledLink, IconButtonWrapper };
