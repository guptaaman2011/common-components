import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox, StyledSubLabel, StyledLabel } from './styles';

const Checkbox = ({ label, subLabel, onChange, ...props }) => (
  <StyledCheckbox {...props} onChange={onChange}>
    {label && <StyledLabel>{label}</StyledLabel>}
    {subLabel && <StyledSubLabel>{subLabel}</StyledSubLabel>}
  </StyledCheckbox>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  subLabel: PropTypes.string,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  subLabel: '',
  onChange: () => {},
};

export default Checkbox;
