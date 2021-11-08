import PropTypes from 'prop-types';
import { StyledTextArea as TextArea } from './styles';

TextArea.propTypes = {
  autosize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

TextArea.defaultProps = {
  autosize: { minRow: 1, maxRows: 1 },
};

export default TextArea;
