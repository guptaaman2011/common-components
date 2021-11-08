import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CompareCard from "./index";

describe("Molecules: CompareCard", () => {

  it("should render CompareCard", () => {
    render(
      <CompareCard
      propertiesUISchema={{
        "ian": {
          "type": "string",
          "uiWidget": "textWidget"
        },
        "product name": {
          "type": "string",
          "uiWidget": "textWidget"
        },
        "product thumbnail": {
          "type": "string",
          "uiWidget": "imageWidget"
        }
      }}
      itemCardProps={["ian", "product name", "product thumbnail"]}
      itemData={{ "ian": "IAN_1", "product name": "Sample product name", "product thumbnail": "" }}
      extras={null}
      />
    );
  });
});
