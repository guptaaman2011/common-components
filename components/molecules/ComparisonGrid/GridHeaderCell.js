import React from "react";
import { Card } from "antd";
import { Block } from "../../atoms";

const GridHeaderCell = props => {
  const propertyHeaderCol = () => (
    <th style={{ borderBottom: 0 }} className="property"></th>
  );
  const dividerHeaderCol = (className) => (    
    <th style={{ borderBottom: 0 }} className={className || "divider"}></th>    
  );
  const itemSelectorHeaderCol = () => (
    <th style={{ verticalAlign: "top", borderBottom: 0 }} className="min-column-width">{props.render()}</th>
  );

  if (props.colType === "gridPropertyHeaderCol") return propertyHeaderCol();
  if (props.colType === "gridDividerHeaderCol") return dividerHeaderCol(props.className);
  if (props.colType === "gridItemSelectorHeaderCol" || props.colType === "gridHeaderCol") {
    return itemSelectorHeaderCol();
  }

  return (
    <th style={{ borderBottom: 0 }}>
      <Block>
        <Card style={{ height: 200 }}>Titles</Card>
      </Block>
    </th>
  );
};

export default GridHeaderCell;
