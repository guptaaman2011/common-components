import styled from 'styled-components';

const StyledFlexBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  margin: ${({ margin }) => margin};
`;

export { StyledFlexBlock };