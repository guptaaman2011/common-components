import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Button } from "antd";
import { StyledSearchPanel } from "./styles";
import SearchBox from "../SearchBox";

class SearchPanel extends Component {
  constructor() {
    super();
  }

  renderExtra() {
    return this.props.actionButtons.map(actionButton => {
      return (
        <Button
          onClick={() => {
            this.props.onActionButtonClick(actionButton);
          }}
        >
          <Icon type={actionButton.icon}></Icon>
        </Button>
      );
    });
  }

  render() {
    return (
      <StyledSearchPanel
        title={<SearchBox />}
        extra={this.renderExtra()}
      />
    );
  }
}

SearchPanel.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.node),
  onActionButtonClick: PropTypes.func
};

SearchPanel.defaultProps = {
  actionButtons: [],
  onActionButtonClick: () => {}
};

export default SearchPanel;
