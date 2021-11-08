import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { 
  StyledLabel, 
  StyledTable, 
  StyledCheckbox, 
  CheckboxWrapper, 
  StyledBlock, 
  StyledText, 
  StyledComparisonName, 
  GridWrapper, 
  TitleWrapper, 
  TableWrapper,
  StyledBlockBottomPadding,
  StyledtrTopBottomPadding,
  StyledDiv,
  StyledRow
} from "./styles";
import GridHeaderCell from "./GridHeaderCell";
import ComparisonViewSelector from "../ComparisonViewSelector";
import CompareCard from "../CompareCard";
import CompareItemSelector from "../CompareItemSelector";
import { highlightCheckboxLabel } from '../../../utils/constants';
import { LUP_BASE_GREY_DARK, LUP_SPACING_2 } from '../../../theme';
import { Text, Block } from '../../atoms';
import { ClearAll, MainProduct } from '../../../utils/constants';

const ComparisonGrid = ({ 
  sections, 
  data, 
  primary, 
  properties, 
  compareKey, 
  onSubmit,
  onClickSubmit,
  propertiesUISchema,
  itemCardProps, 
  itemSelectorProp,
  itemsToCompareCount,
  removeCompareItem,
  selectedProducts, 
  updateSelectedProducts,
  onHighlightChange,
  highlightSelected,
  comparisonDataError, 
  currentItemKey,
  handleClearAllData,
  clearAllDisabled,
  comparisonName,
  label,
  loading,
  renderLoader,
  inputValueForError,
}) => {
  const [highlightedRows, setHighlightedRows] = useState([]);

  useEffect(() => {
    findRowsToHighlight(highlightSelected);
  },[highlightSelected]);

  const _generateColumns = itemsToCompare => {
    const propertyColumn = {
      dataIndex: "property",
      key: "property",
      className: "property",
      onHeaderCell: column => {
        return {
          colType: "gridPropertyHeaderCol"
        };
      }
    };

    const _generateItemSelector = (type, placeholder, title, compareKey) => {
      const itemSelector = {
        dataIndex: "gridItemSelector",
        key: compareKey,
        onHeaderCell: () => {
          return {
            colType: "gridItemSelectorHeaderCol",            
            render: () => {
              return <StyledBlockBottomPadding size={LUP_SPACING_2}><CompareItemSelector 
              type={type}
              placeholder={placeholder}
              title={title}
              compareKey={compareKey}
              onSubmit={onSubmit}
              error={compareKey === currentItemKey && comparisonDataError}
              currentItemKey={currentItemKey}
              parent="comparisonGrid"
              inputValueForError={inputValueForError}
              /></StyledBlockBottomPadding>;
            }
          };
        }
      }
      return itemSelector;
    }

    const columns = [propertyColumn];

    itemsToCompare.forEach((item,index) => {
      const column = {
        title: item,
        dataIndex: item,
        key: item,
        onHeaderCell: column => {
          return {
            colType: "gridHeaderCol",            
            render: () => {
              return (<StyledBlock>
                <CompareCard 
                  propertiesUISchema={propertiesUISchema}
                  itemCardProps={itemCardProps}
                  itemData={data[item]}
                  extras={<></>}
                  itemKey={`${compareKey}_${index+1}`}
                  showRemoveIcon={(itemsToCompare.length > 1 && index !== 0) || (itemsToCompare.length === 1)}
                  removeCompareItem={() => removeCompareItem(item)}
                />
              </StyledBlock>);
            }
          };
        }
      };

      column.className = item === primary ? "primary" : "secondary";
      columns.push(column);

      // add a divider
      if(index !== itemsToCompareCount.length-1) {
        columns.push({
          title: item,
          dataIndex: `divider_${item.toLowerCase()}`,
          key: `divider_item_${item}`,
          className: index == 0 ? "first_divider" : "divider",
          onHeaderCell: column => {
            return {
              colType: "gridDividerHeaderCol"
            };
          }
        });
      }
    });

    for(let i=0;i < itemsToCompareCount; i++) {
      let title = i === 0 ? MainProduct : `${itemSelectorProp.title} ${i} to Compare`;
      columns.push(_generateItemSelector("String", `${itemSelectorProp.placeholder}` , title, `${compareKey}_${i + 1}`));

      if(i!==0 && i!==itemsToCompareCount.length-1) {
        columns.push({
          title: i,
          dataIndex: `divider_${i}`,
          key: `divider_item_${i}`,
          className: "divider",
          onHeaderCell: column => {
            return {
              colType: "gridDividerHeaderCol"
            };
          }
        });
      }
    }

    if(!itemsToCompare.length) {
      // add first divider for item selectors
      columns.splice(2,0,{
        title: 'first_divider',
        dataIndex: `first_divider`,
        key: `divider_item_1`,
        className: "first_divider",
        onHeaderCell: _ => {
          return {
            colType: "gridDividerHeaderCol"
          };
        }
      });
    }

    for(let index = 1; index <= itemsToCompare.length; index++ ) {
      if(data.hasOwnProperty(`${compareKey}_${index}`)) {
        columns.splice(columns.findIndex(column => column.key === `${compareKey}_${index}` && column.dataIndex === "gridItemSelector"), 1);
        if(index!==1 && index!==itemsToCompareCount.length-1) {
          columns.splice(columns.findIndex(column => column.key === `divider_item_${index-1}` && column.dataIndex === `divider_${index-1}`), 1);
        }
      }
    }

    return columns;
  };

  const findRowsToHighlight = (value) => {
    if(!value) {
      setHighlightedRows([]);
      return;
    }

    const itemKeys = Object.keys(data);
    const propertiesList = Object.keys(properties);
    let rowsToHighlight = [];

    if(itemKeys.length) {
      propertiesList.forEach(property => {
        let itemKey = itemKeys[0];
        let primaryValue = data[itemKey][property] && data[itemKey][property].toLowerCase();

        for( let index = 1; index < itemKeys.length; index++ ) {
          itemKey = itemKeys[index];
          if( data[itemKey][property] && primaryValue !== data[itemKey][property].toLowerCase()) {
            rowsToHighlight.push(`field_${property}`);
            break;
          }
        }
      });

      setHighlightedRows(rowsToHighlight);
    }
  }

  const _generateRows = itemsToCompare => {
    const dataSource = [];

    if(!Object.keys(data).length) {
      return;
    }

    dataSource.push({
      rowType: "gridSectionCompareViewRow",
    });
    sections.forEach((section,index) => {
      if(index === 0) {
        dataSource.push({
          rowType: "gridSectionFirstTitleRow",
          title: section.title
        });
      } else {
        dataSource.push({
          rowType: "gridSectionTitleRow",
          title: section.title
        });
      }

      section.fields.forEach(field => {
        const dataItem = {
          key: `field_${field}`,
          property: properties[field] && properties[field].title,
          rowType: "gridSectionDataRow"
        };

        itemsToCompare.forEach(item => {
          const dataIndex = item;
          const dataField = field;
          dataItem[dataIndex] = (data[item] && data[item][dataField]) || "-";
        });

        dataSource.push(dataItem);
      });
    });

    return dataSource;
  };

  const itemsToCompare = Object.keys(data);
  const columns = _generateColumns(itemsToCompare);
  const dataSource = Object.keys(data).length > 0 ? _generateRows(itemsToCompare) : [];

  return (
    <GridWrapper>
      <TitleWrapper>
        <StyledRow>
          <StyledComparisonName>
            {comparisonName ? `Comparison ${comparisonName}` : label}
          </StyledComparisonName>  
          <StyledText onClick={handleClearAllData} disabled={clearAllDisabled}>
            {ClearAll}
          </StyledText>     
        </StyledRow>
      </TitleWrapper>
      {loading ? renderLoader(loading) :
      <TableWrapper>
        <StyledTable
          onRow={record => {
            return {
              rowType: record.rowType,
              title: record.title
            };
          }}
          components={{
            header: {
              cell: props => {
                return <GridHeaderCell {...props} />;
              },
            },
              body: {
                row: props => {
                  let dataRowKey = props['data-row-key'];
                  switch(props.rowType) {
                    case "gridSectionFirstTitleRow":
                      return (
                        <StyledtrTopBottomPadding>
                          <td
                            colSpan={Object.keys(data).length*2 - 1}
                            style={{ paddingLeft: 0, borderBottom: 0 }}
                            className="sectionTitle"
                          >
                            <StyledDiv>
                              <StyledLabel>{props.title}</StyledLabel>
                            </StyledDiv>
                          </td>
                          {Object.keys(data).length > 1 &&
                          <td className="highlightCheckbox">
                            <CheckboxWrapper>
                              <StyledCheckbox 
                                onChange={(event) => onHighlightChange(event.target.checked)} 
                                checked={highlightSelected} 
                                subLabel={<Text color={LUP_BASE_GREY_DARK}>{highlightCheckboxLabel}</Text>}
                              >
                                
                              </StyledCheckbox>
                            </CheckboxWrapper>
                          </td>}
                        </StyledtrTopBottomPadding>
                      )
                    case "gridSectionCompareViewRow":
                      return <ComparisonViewSelector 
                        itemsToCompare={itemsToCompare} 
                        selectedProducts={selectedProducts} 
                        updateSelectedProducts={updateSelectedProducts} 
                        onClickSubmit={onClickSubmit}/>
                      
                    case "gridSectionTitleRow":
                      return (
                        <StyledtrTopBottomPadding>
                          <td
                            colSpan={columns.length}
                            style={{ paddingLeft: 0, borderBottom: 0 }}
                            className="sectionTitle"
                          >
                            <StyledDiv>
                              <StyledLabel>{props.title}</StyledLabel>
                            </StyledDiv>
                          </td>
                        </StyledtrTopBottomPadding>
                      )

                    default:
                      return (
                        <tr>
                          {props.children.map(({ props }) => {
                            const { column, record } = props;
                            if (column.dataIndex === "gridItemSelector") {
                              return null;
                            }

                            let highlight = ( 
                              highlightedRows.includes(dataRowKey) && 
                              column.dataIndex !== 'property' && 
                              !column.dataIndex.includes('divider')) ? 'highlight': '';

                            return (
                              <td className={`${column.className} ${highlight}`}>
                                {record[column.dataIndex]}
                              </td>
                            );
                          })}
                        </tr>
                      )
                    }
                }
              }
            }}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            size="small"
        />
      </TableWrapper>}
    </GridWrapper>
  );
};

ComparisonGrid.propTypes = {
  label: PropTypes.string.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
  primary: PropTypes.string.isRequired,
  itemsToCompareCount: PropTypes.number,
  comparisonName: PropTypes.string,
  inputValueForError: PropTypes.string
};

ComparisonGrid.defaultProps = {
  itemsToCompareCount: 4,
  comparisonName: "",
  inputValueForError: "",
};

export default ComparisonGrid;
