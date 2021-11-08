import React from "react";
import PropTypes from "prop-types";
import { StyledImage } from "./styles";

const IconButton = ({
  size,
  src,
  onClick,
  dataTestid,
  style,
  isLoading,
  disabled,
}) => (
  <div style={{ width: size, display: "inline-block", ...style }}>
    <StyledImage
      onClick={onClick}
      src={src}
      data-testid={dataTestid}
      disabled={isLoading || disabled}
    />
  </div>
);

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
  dataTestid: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  style: PropTypes.object,
};

IconButton.defaultProps = {
  size: "16px",
  onClick: () => {},
  dataTestid: "testId",
  disabled: false,
  isLoading: false,
  style: {},
};

export default IconButton;
