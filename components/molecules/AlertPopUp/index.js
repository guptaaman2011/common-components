import React from "react";
import PropTypes from "prop-types";
import { StyledModal, CloseWrapper, MessageWrapper, IconBlock } from "./styles";
import { Text, Block, Image, Cross2 } from "../../atoms";
import Confirm from "../../../assets/images/confirm.svg";
import Error from "../../../assets/images/Error.svg";
import { 
  LUP_FUNCTIONAL_SUCCESS_GREEN,
  LUP_FUNCTIONAL_ERROR_RED,
  LUP_BASE_GREY_DARKER, 
  LUP_MAIN_FONT_SIZE12,
  LUP_SPACING_10,
  LUP_SPACING_22,
  LUP_SPACING_18,
} from '../../../theme';
const AlertPopUp = ({ message, type, onCancelPopUp }) => {
  return (
    <StyledModal
      visible={message}
      footer={null}
      onCancel={onCancelPopUp}
      type={type}
      centered
      closeIcon={<CloseWrapper><Cross2 size={LUP_SPACING_10}/></CloseWrapper>}
      color={type === "success" ? LUP_FUNCTIONAL_SUCCESS_GREEN: LUP_FUNCTIONAL_ERROR_RED}
      maskStyle={{
        opacity: '50%', backgroundColor: '#444444'
      }}
    >
      <Block justify="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconBlock>
          {type === "success" && <Image src={Confirm} height={LUP_SPACING_22} width={LUP_SPACING_22} />}
          {type === "error" && <Image src={Error} height={LUP_SPACING_22} width={LUP_SPACING_22} />}
        </IconBlock>
        <MessageWrapper>
          <Text fontSize={LUP_MAIN_FONT_SIZE12} color={LUP_BASE_GREY_DARKER} lineHeight={LUP_SPACING_18}>
            {message}
          </Text>
        </MessageWrapper>
      </Block>
    </StyledModal>
  );
};

AlertPopUp.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
};

AlertPopUp.defaultProps = {
  message: "",
  type: "string",
  onClose: () => {},
};

export default AlertPopUp;
