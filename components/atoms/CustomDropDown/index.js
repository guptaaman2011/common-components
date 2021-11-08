import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';

const CustomDropDown = ({ children, visible, ...props }) =>
  visible ? (
    <Dropdown {...props}>{children}</Dropdown>
  ) : (
    <Dropdown visible={false} {...props}>
      {children}
    </Dropdown>
  );

CustomDropDown.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CustomDropDown;
