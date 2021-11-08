import React from "react";
import {   render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatReactMentions from "./index";

describe("Atom: ChatReactMentions", () => {
  it("should render", () => {
    render(<ChatReactMentions value={''} placeholder="Enter your message" users={[
        {
            id: 1,
            name: 'user-123',
        }, 
        {
            id: 2,
            name: 'user-234',
        }
    ]}></ChatReactMentions>);
  });

  it("should render", () => {
    const { getByText } = render(<ChatReactMentions value="My text is @[user-123](1)" placeholder="Enter your message" users={[
        {
            id: 1,
            name: 'user-123',
        }, 
        {
            id: 2,
            name: 'user-234',
        }
    ]}></ChatReactMentions>);
    expect(getByText("user-123")).toBeInTheDocument();
  });

});