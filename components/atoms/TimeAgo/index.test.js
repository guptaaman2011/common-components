import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TimeAgo from '.';

describe('atoms/TimeAgo', () => {
  it('should render', () => {
    render(<TimeAgo timestamp={new Date().getTime()} />);
  });


});
