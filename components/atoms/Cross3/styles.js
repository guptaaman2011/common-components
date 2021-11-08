import styled from 'styled-components';

const StyledImage = styled.img`
  width: ${props => props.size};
  height:  ${props => props.size};
  position: relative;
  margin: auto;
  display: block;
`;

export { StyledImage };
