import React from 'react';
import PropTypes from 'prop-types';
import SpinnerIcon from "../../../assets/images/icons/chatbox/spinner.svg"

const Spinner = ({ size, style, src }) => <img style={style} height={size} src={src} alt="" />;

Spinner.propTypes = {
  size: PropTypes.string,
  style: PropTypes.shape({}),
  src: PropTypes.string,
};

Spinner.defaultProps = {
  size: '32px',
  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    maxWidth: '100%',
    maxHeight: '100%',
    zIndex: 999,
  },
  src: SpinnerIcon,
};

export default Spinner;