import React from "react";
import PropTypes from "prop-types";
import { Image, Block } from '../../atoms';
import { LUP_SPACING_144 } from '../../../theme';

const CompareCardImage = ({ 
  source,
  onExpand,
  style,
  height,
  width
}) => {

  return (
    <Block style={{ position: 'relative', padding: '2px 0', height: '100%', display: 'flex', ...style }}>
        <Image src={source} height={height}  width={width} />
    </Block>
  );
};

CompareCardImage.propTypes = {
  source: PropTypes.string,
  onExpand: PropTypes.func,
  style: PropTypes.object,
  ratio: PropTypes.number.isRequired,
};

CompareCardImage.defaultProps = { 
  source: '',
  onExpand: () => {},
  style: {},
};

export default CompareCardImage;
