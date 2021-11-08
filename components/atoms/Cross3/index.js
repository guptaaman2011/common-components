import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cross from "../../../assets/images/Close3.svg";
import { StyledImage } from './styles';
import { LUP_SPACING_12 } from '../../../theme';

const Cross3 = ({ size, onClick }) => {
  return <StyledImage src={Cross} size={size} onClick={onClick} />;
}

Cross3.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Cross3.defaultProps = {
  size: LUP_SPACING_12,
  onClick: () => {}
};

export default Cross3;
