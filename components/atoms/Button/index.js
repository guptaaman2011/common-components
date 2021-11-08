import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledPlainButton as PlainButton, StyledSpinner } from './styles';

const Button = ({ children, isLoading, disabled, ...props }) => (
  <StyledButton {...props} disabled={isLoading || disabled}>
    {isLoading ? <StyledSpinner /> : children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  colored: PropTypes.oneOf(['default', 'primary', 'secondary', 'card']),
  size: PropTypes.oneOf(['large', 'default', 'small', 'smaller']),
  textTransform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize']),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  colored: 'default',
  size: 'default',
  type: 'button',
  disabled: false,
  isLoading: false,
  textTransform: 'uppercase',
};

export { PlainButton };

export default Button;
