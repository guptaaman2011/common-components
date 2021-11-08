import PropTypes from 'prop-types';
import { StyledFlexBlock as FlexBlock } from './styles';
import { LUP_BASE_GREY_LIGHT } from "../../../theme";

FlexBlock.propTypes = {
    borderColor: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
};

FlexBlock.defaultProps = {
    borderColor: `${LUP_BASE_GREY_LIGHT}`,
    padding: '15px 0px',
    margin: '0px 15px'
};

export default FlexBlock;