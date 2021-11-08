import React, { Component } from "react";
import { Icon } from "antd";
import { StyledSearchInput } from './styles';

class SearchBox extends Component {
  render() {
    return (
      <StyledSearchInput
        placeholder="Search..."
        prefix={<Icon type="search"/>}
      />
    );
  }
}

export default SearchBox;
