import React from "react";
import {   render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatAvatar from "./index";
import { StyledChatBadge } from "./styles";

describe("Atom: ChatAvatar", () => {
  it("should render", () => {
    render(<ChatAvatar>Dummy User</ChatAvatar>);
  });

  it("should render the text and background color", () => {
    const { getByText } = render(<ChatAvatar type="external">Dummy User</ChatAvatar>);
    expect(getByText("Dummy User")).toBeInTheDocument();
  });

  it("should render the StyledChatBadge component", () => {
    render(
      <ChatAvatar type="internal" showDot={true}>Dummy User</ChatAvatar>
    );
  });
});
