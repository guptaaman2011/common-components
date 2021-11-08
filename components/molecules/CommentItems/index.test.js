import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CommentItems from "./index";
import { getDay, getDate } from "../../../utils/timestamp";

describe("molecules: CommentItems", () => {
  it("should render dateLabel for today", () => {
    const today = new Date();
    const onTapPin = jest.fn();
    const { getByText } = render(
    <CommentItems
        commentItems={[
            {
                attachments: [],
                author: "Puneet",
                avatar: ["P"],
                createdAt: today,
                messageId: "d1f09b37-c622-4085-9df1-1c4ad5c97a43",
                reference: {},
                replyItems: [],
                taggedUsers: [],
                text: "test",
                userId: "puneet@dummy",
                userType: "internal"
            }
        ]} 
        onTapPin={onTapPin}
        selectedChatRoomIndex={0}
    />);
    expect(getByText("Today")).toBeInTheDocument();
  });

  it("should render dateLabel for more than seven days old messages", () => {
    const today = new Date();
    const moreThanSeven = today.setDate(today.getDate()-10);
    const date = getDate(moreThanSeven);
    const onTapPin = jest.fn();
    const { getByText } = render(
    <CommentItems
        commentItems={[
            {
                attachments: [],
                author: "Puneet",
                avatar: ["P"],
                createdAt: moreThanSeven,
                messageId: "d1f09b37-c622-4085-9df1-1c4ad5c97a43",
                reference: {},
                replyItems: [],
                taggedUsers: [],
                text: "test",
                userId: "puneet@dummy",
                userType: "internal"
            }
        ]} 
        onTapPin={onTapPin}
        selectedChatRoomIndex={0}
    />);
    expect(getByText(date)).toBeInTheDocument();
  });

  it("should render dateLabel for yesterday", () => {
    const today = new Date();
    const yesterday = today.setDate(today.getDate()-1);
    const onTapPin = jest.fn();
    const { getByText } = render(
    <CommentItems
        commentItems={[
            {
                attachments: [],
                author: "Puneet",
                avatar: ["P"],
                createdAt: yesterday,
                messageId: "d1f09b37-c622-4085-9df1-1c4ad5c97a43",
                reference: {},
                replyItems: [],
                taggedUsers: [],
                text: "test",
                userId: "puneet@dummy",
                userType: "internal"
            }
        ]} 
        onTapPin={onTapPin}
        selectedChatRoomIndex={0}
    />);
    expect(getByText("Yesterday")).toBeInTheDocument();
  });

  it("should render dateLabel for less than week old messages datelabel", () => {
    const today = new Date();
    const lessThanSeven = today.setDate(today.getDate()-4);
    const day = getDay(lessThanSeven);
    const onTapPin = jest.fn();
    const { getByText } = render(
    <CommentItems
        commentItems={[
            {
                attachments: [],
                author: "Puneet",
                avatar: ["P"],
                createdAt: lessThanSeven,
                messageId: "d1f09b37-c622-4085-9df1-1c4ad5c97a43",
                reference: {},
                replyItems: [],
                taggedUsers: [],
                text: "test",
                userId: "puneet@dummy",
                userType: "internal"
            }
        ]} 
        onTapPin={onTapPin}
        selectedChatRoomIndex={0}
    />);
    expect(getByText(day)).toBeInTheDocument();
  });
});
