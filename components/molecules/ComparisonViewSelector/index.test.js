import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ComparisonViewSelector from "./index";

describe("Molecules: ComparisonViewSelector", () => {

  it("should render ComparisonViewSelector", () => {
    render(
      <ComparisonViewSelector
      itemsToCompare={['IAN1', 'IAN2', 'IAN3']}
      selectedProducts={['IAN1', 'IAN2']}
      updateSelectedProducts={() => {}}
      />
    );
  });
});
