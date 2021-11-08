import React from "react";
import {    render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatHeaderTabs from "./index";
import { LUP_MAIN_FONT_BOLD700, LUP_MAIN_FONT_NORMAL} from '../../../theme';

describe("Molecule: ChatHeaderTabs", () => {
  it("should render Internal as selected header tab", () => {
    const mockClickHandler = jest.fn();
    const { getByText}  = render(<ChatHeaderTabs
      selectedChatRoom={{
       id: '1'
      }}
      tabs={[{
        value: '1',
        count: 2,
        label: 'Internal'
      }, {
        value: '2',
        count: 3,
        label: 'Talk To Buyer'
      }
      ]}
      onChange={mockClickHandler}
    />);

    expect(getByText("Internal")).toBeInTheDocument();
    expect(getByText('Talk To Buyer')).toBeInTheDocument();
  });

  it('should render the Talk to Buyer as selected header tab', () => {
    const mockClickHandler = jest.fn();
    const { getByText}  = render(<ChatHeaderTabs
      selectedChatRoom={{
       id: '1'
      }}
      tabs={[{
        value: '1',
        count: 2,
        label: 'Internal'
      }, {
        value: '2',
        count: 3,
        label: 'Talk To Buyer'
      }
      ]}
      onChange={mockClickHandler}
    />);

    expect(getByText("Internal")).toBeInTheDocument();
    expect(getByText("Talk To Buyer")).toBeInTheDocument();
    });
});