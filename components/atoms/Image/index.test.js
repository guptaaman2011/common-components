import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Image from '.';
import { MissingImagePlaceholder, StyledImage } from "./styles";

describe('atoms/Image', () => {
  it('should render the handle Error', () => {
    const {container} = render(<Image height="12px" width="14px"  />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render the StyledImage", () => {
    const {container} = render(<Image height="12px" width="14px"  
    src="https://homepages.cae.wisc.edu/~ece533/images/baboon.png" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
