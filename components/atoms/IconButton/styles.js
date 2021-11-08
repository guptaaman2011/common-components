import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export { StyledImage };