import React from "react";
import {    render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatListDateLabel from "./index";

describe("Molecule: ChatListDateLabel", () => {
  it("should render ", () => {
    const {getByText} = render(<ChatListDateLabel>
        This is a date label in chat message

    </ChatListDateLabel>);
    expect(getByText("This is a date label in chat message")).toBeInTheDocument();
  });
});