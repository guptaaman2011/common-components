import React from "react";
import PropTypes from "prop-types";
import { IconButton, FlexBlock } from "../../atoms";
import {
  StyledFlexBlock,
  StyledBlockWrapper,
  StyledWrapper,
} from "./styles";
import CrossIcon from "../../../assets/images/icons/chatbox/cross.svg";
import {
  LUP_SPACING_12
} from "../../../theme";

const ChatHeader = ({
  headerText,
  suffix,
  showCloseIcon,
  onClose,
  showVersions,
}) => {
  return (
    <StyledWrapper>
      <StyledBlockWrapper>
        <StyledFlexBlock>{headerText}</StyledFlexBlock>
        {showVersions && (
          <FlexBlock
            style={{
              flexGrow: "1",
              borderBottom: "none",
              justifyContent: "flex-start",
              padding: "0px",
              margin: "0px",
            }}
          >
            {suffix}
          </FlexBlock>
        )}
      </StyledBlockWrapper>
      <StyledBlockWrapper>
        <FlexBlock
          style={{ borderBottom: "none", padding: "0px", margin: "0px" }}
        >
          {showCloseIcon ? (
            <IconButton src={CrossIcon} onClick={onClose} size={LUP_SPACING_12}></IconButton>
          ) : null}
        </FlexBlock>
      </StyledBlockWrapper>
    </StyledWrapper>
  );
};

ChatHeader.propTypes = {
  onClose: PropTypes.func,
  headerText: PropTypes.string,
  showCloseIcon: PropTypes.bool,
  suffix: PropTypes.node,
  showVersions: PropTypes.bool,
};

ChatHeader.defaultProps = {
  headerText: "Comments",
  onClose: () => {},
  suffix: "",
  showCloseIcon: false,
  showVersions: false,
};

export default ChatHeader;
