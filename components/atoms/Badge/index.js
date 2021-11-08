import React from 'react';
import PropTypes from 'prop-types';
import { LUP_BASE_BLUE_DARK } from '../../../theme';
import { StyledBadge, CountWrapper } from './styles';

const Badge = ({ children, ...props }) => {
  return (
    <StyledBadge
      {...props}
    >
      <CountWrapper>
        {children}
      </CountWrapper>
    </StyledBadge>
  );
};

Badge.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};

Badge.defaultProps = {
  bg: LUP_BASE_BLUE_DARK,
};

export default Badge;