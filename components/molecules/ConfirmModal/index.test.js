import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConfirmModal from ".";

describe("molecules: ConfirmModal", () => {
  it("should correctly render component", () => {
    render(<ConfirmModal />);
  });

  it("should call ok and cancel", () => {
    const handleOk = jest.fn();
    const handleCancel = jest.fn();
    const { getByText } = render(
      <ConfirmModal
        title="Title"
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={true}
        okText="DELETE"
        cancelText="DONT DELETE"
        isModalVisible
      />
    );

    const ok = getByText("DELETE");
    const cancel = getByText("DONT DELETE");

    fireEvent.click(ok);
    expect(handleOk).toBeCalled();

    fireEvent.click(cancel);
    expect(handleCancel).toBeCalled();
  });
});
