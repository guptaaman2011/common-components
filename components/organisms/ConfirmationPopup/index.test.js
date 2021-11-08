import React from 'react';
import { ReactComponent as AlertSVG } from 'assets/images/icons/comments/alert.svg';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConfirmationPopup from '.';

describe('atoms/ConfirmationPopup', () => {
  it('should correctly render component without icon', () => {
    const okHandler = jest.fn();
    const cancelHandler = jest.fn();

     render (<ConfirmationPopup
        visible
        title="title"
        description="description"
        okText="Ok"
        cancelText="cancel"
        okHandler={okHandler}
        cancelHandler={cancelHandler}
      />
    );
  });

  it('should correctly render component with icon', () => {
    const okHandler = jest.fn();
    const cancelHandler = jest.fn();
      render (<ConfirmationPopup
        visible
        title="title"
        icon={AlertSVG}
        description="description"
        okText="Ok"
        cancelText="cancel"
        okHandler={okHandler}
        cancelHandler={cancelHandler}
      />
    );
  });
});
