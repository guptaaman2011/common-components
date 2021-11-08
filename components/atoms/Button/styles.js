import styled, { css, keyframes } from 'styled-components';
import { 
  WHITE, 
  LUP_BASE_BLUE, 
  ACCENT_DARK, 
  LUP_BASE_BLUE_DARKER, 
  LUP_BASE_GREY_LIGHTEST, 
  LUP_BASE_GREY_LIGHT, 
  LUP_BASE_GREY, 
  LUP_BASE_GREY_MEDIUM,
  LUP_MAIN_FONT_BOLD700 ,
  LUP_BASE_BLUE_DARK,
  LUP_BASE_GREY_LIGHTER,
  LUP_SPACING_12,
  LUP_MAIN_FONT_NORMAL
} from '../../../theme';

const StyledPlainButton = styled.button`
  appearance: none;
  background-color: transparent;
  font-size: ${LUP_SPACING_12};
  line-height: ${LUP_SPACING_12};
  font-weight: ${LUP_MAIN_FONT_BOLD700};
  box-shadow: none;
  text-decoration: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  cursor: pointer;

  &[disabled] {
    opacity: 1;
    cursor: not-allowed;
    font-weight: ${LUP_MAIN_FONT_NORMAL};
  }
`;

const StylesSecondaryButton = css`
  color: ${LUP_BASE_BLUE};
  border-color: ${LUP_BASE_BLUE};
  background-color: ${WHITE};

  &:hover,
  &:focus {
    color: ${LUP_BASE_BLUE_DARK};
    border-color: ${LUP_BASE_BLUE_DARK};
  }

  &:active {
    color: ${LUP_BASE_BLUE_DARKER};
    border-color: ${LUP_BASE_BLUE_DARKER};
  }

  &[disabled] {
    color: ${LUP_BASE_GREY};
    border-color: ${LUP_BASE_GREY};
    cursor: not-allowed;
    background: ${LUP_BASE_GREY_LIGHTER};
  }
`;

const StylesPrimaryButton = css`
  color: ${WHITE};
  border: none;
  background-color: ${LUP_BASE_BLUE};

  &:hover,
  &:focus {
    background-color: ${LUP_BASE_BLUE_DARK};
    border-color: ${LUP_BASE_BLUE_DARK};
  }

  &:active {
    background-color: ${LUP_BASE_BLUE_DARKER};
    border-color: ${LUP_BASE_BLUE_DARKER};
  }

  &[disabled] {
    color: ${LUP_BASE_GREY_LIGHTEST};
    border-color: ${LUP_BASE_GREY_LIGHTEST};
    background-color: ${LUP_BASE_GREY};
    cursor: not-allowed;
  }
`;

const StylesDefaultButton = css`
  color: ${LUP_BASE_GREY_MEDIUM};
  border-color: ${LUP_BASE_GREY_LIGHT};
  background-color: ${LUP_BASE_GREY_LIGHTEST};

  &:hover,
  &:focus {
    color: ${ACCENT_DARK};
  }

  &:active {
    color: ${LUP_BASE_BLUE_DARKER};
    border-color: ${LUP_BASE_GREY};
  }

  &[disabled] {
    color: ${LUP_BASE_GREY_MEDIUM};
    border-color: ${LUP_BASE_GREY_LIGHT};
    background-color: ${LUP_BASE_GREY_LIGHTEST};
    cursor: not-allowed;
  }
`;

const StylesCardButton = css`
  color: ${LUP_BASE_BLUE};
  background-color: ${WHITE};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border-color: ${LUP_BASE_GREY_LIGHTEST};
`;

const styles = {
  default: StylesDefaultButton,
  primary: StylesPrimaryButton,
  secondary: StylesSecondaryButton,
  card: StylesCardButton,
};

const sizes = {
  large: 48,
  default: 40,
  small: 32,
  smaller: 24,
};

const StyledButton = styled(StyledPlainButton)`
  font-weight: ${LUP_MAIN_FONT_BOLD700};
  text-transform: ${({ textTransform }) => textTransform};
  border: 1px solid;
  padding: 0 10px;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  flex-flow: row nowrap;
  white-space: nowrap;
  align-items: center;
  font-size: ${LUP_SPACING_12};
  height: ${({ size }) => sizes[size]}px;
  min-width: ${({ size }) => sizes[size] * 3}px;
  ${({ colored }) => styles[colored]};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 100%;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  animation: ${rotate360} 1.4s infinite linear;
`;

export { StyledPlainButton, StyledButton, StyledSpinner };
