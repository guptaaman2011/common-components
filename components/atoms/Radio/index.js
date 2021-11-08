import React from 'react';
import PropTypes from 'prop-types';
import { StyledRadio } from './styles';

const Radio = ({ label, ...props }) => <StyledRadio {...props}>{label}</StyledRadio>;

Radio.propTypes = {
  type: PropTypes.string,
  label: PropTypes.node,
};

Radio.defaultProps = {
  type: 'radio',
  label: null
};

export default Radio;
