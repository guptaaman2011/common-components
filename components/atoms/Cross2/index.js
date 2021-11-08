import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cross from "../../../assets/images/Close.svg";
import { StyledImage } from './styles';
import { LUP_SPACING_12 } from '../../../theme';

const Cross2 = ({ size, onClick }) => {
  return <StyledImage src={Cross} size={size} onClick={onClick} />;
}

Cross2.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Cross2.defaultProps = {
  size: LUP_SPACING_12,
  onClick: () => {}
};

export default Cross2;
