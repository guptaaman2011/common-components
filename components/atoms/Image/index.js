import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imagePlaceholder from '../../../assets/images/icons/spl/ImagePlaceholder.png';

import { StyledImage, MissingImagePlaceholder } from './styles';

const Image = ({ src, height, width }) => {

  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  }

  if (!src || hasError) {
    return <MissingImagePlaceholder size={height} src={imagePlaceholder} />;
  }

  return <StyledImage src={src} height={height} width={width} onError={handleError} />;
}

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Image.defaultProps = {
  src: null,
  height: 'auto',
  width: 'auto',
};

export default Image;
