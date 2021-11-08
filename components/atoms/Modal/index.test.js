import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from '.';


describe('atoms/Modal', () => {
  it('should correctly render component', () => {
    render(<Modal />);
  });
});


