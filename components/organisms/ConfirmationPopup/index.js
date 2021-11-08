import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import { StyledIcon, Title, Description, StyledModal, StyledButton } from './styles';
import { AlertSVG } from '../../../assets/images/icons/comments/alert.svg';
import { LUP_SECONDARY_CHARCOAL_BLACK, LUP_SPACING_5 } from '../../../theme';

export default class ConfirmationPopup extends React.Component {
  render() {
    const {
      title,
      icon,
      description,
      visible,
      okText,
      cancelText,
      okHandler,
      cancelHandler,
    } = this.props;
    return (
      <div>
        <StyledModal
          visible={visible}
          onCancel={cancelHandler}
          maskClosable={false}
          footer={
            <>
              <StyledButton
                size="large"
                textTransform="capitalize"
                colored="default"
                color={LUP_SECONDARY_CHARCOAL_BLACK}
                onClick={cancelHandler}
              >
                {cancelText}
              </StyledButton>
              <StyledButton
                size="large"
                textTransform="capitalize"
                colored="primary"
                onClick={okHandler}
              >
                {okText}
              </StyledButton>
            </>
          }
        >
          {icon && (
            // <StyledIcon style={LUP_SPACING_5}>
            <StyledIcon>
              <Icon component={icon} />
            </StyledIcon>
           )}
          <Title>{title}</Title>
          <Description>{description}</Description>
        </StyledModal>
      </div>
    );
  }
}

ConfirmationPopup.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  description: PropTypes.string.isRequired,
  okText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  okHandler: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func.isRequired,
};

ConfirmationPopup.defaultProps = {
  icon: null,
};
