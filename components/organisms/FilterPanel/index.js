import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  StyledMenu,
  VerticalCheckboxGroup,
  FlexSpaceBetween,
  StyledFilterPanelHeading,
  StyledLink,
  FlexContentCenter
} from "./styles";
import { Checkbox, IconButton } from '../../atoms';
import { ResetFilter } from '../../../utils/constants';

const { SubMenu } = StyledMenu;
class FilterPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClearAll = this.handleClearAll.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
  }

  handleClearAll(ev) {
    const {  updateSelectedProperties, initialSelectedProperties } = this.props;
    updateSelectedProperties(JSON.parse(JSON.stringify(initialSelectedProperties)));
  }

  handleClearFilter() {}

  handleChange(value, key) {
    const {  updateSelectedProperties, selectedProperties } = this.props;
    selectedProperties[key] = value;
    updateSelectedProperties(selectedProperties);
  }

  render() {
    return (
      <StyledMenu
        onClick={this.handleClick}
        style={{ width: '100%', background: "#FAFAFA", borderRight: 0 }}
        mode="inline"
      >
        <StyledMenu.Item>
          <FlexSpaceBetween>
            <StyledFilterPanelHeading>Compare</StyledFilterPanelHeading>
            {this.props.filters.length > 0 && (
              <StyledLink onClick={this.handleClearAll} >
                {ResetFilter}
              </StyledLink>
            )}
          </FlexSpaceBetween>
        </StyledMenu.Item>
        {this.props.filters.length === 0 && (
          <StyledMenu.Item>
            <FlexContentCenter>No filters available</FlexContentCenter>
          </StyledMenu.Item>
        )}
        {this.props.filters.map((filter, i) => {
          return (
            <SubMenu
              key={`sub${i}`}
              title={
                <div>
                  <Checkbox
                    indeterminate={this.props.selectedProperties && this.props.selectedProperties[filter.key] && !!this.props.selectedProperties[filter.key].length && this.props.selectedProperties[filter.key].length < filter.options.length }
                    checked={this.props.selectedProperties && this.props.selectedProperties[filter.key] && this.props.selectedProperties[filter.key].length === filter.options.length}                  
                    onChange={(e) => e.target.checked ? this.handleChange(filter.options, filter.key): this.handleChange([], filter.key)}
                    label={filter.title}
                  /> 
                </div>
              }
            >
              <StyledMenu.ItemGroup key={`g${i}`}>
                <StyledMenu.Item key={`gi${i}`}>
                  <VerticalCheckboxGroup
                    options={filter.options}
                    value={filter.value}
                    onChange={(values) => this.handleChange(values, filter.key)}
                  ></VerticalCheckboxGroup>
                </StyledMenu.Item>
              </StyledMenu.ItemGroup>
            </SubMenu>
          );
        })}
      </StyledMenu>
    );
  }
}

FilterPanel.propTypes = {
  filters: PropTypes.array,
  onClearAll: PropTypes.func
};

FilterPanel.defaultProps = {
  filters: [],
  onClearAll: () => {}
};

export default FilterPanel;
