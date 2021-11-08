import styled from 'styled-components';

const StyledImage = styled.img`
  width: ${props => props.width};
  height:  ${props => props.height};
  position: relative;
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const MissingImagePlaceholder = styled.img`
  margin: auto;
  position: relative;
  height: ${props => props.size};
  width: auto;
  max-width: 100%;
  display: block;
  max-height: 100%;
`;

export { StyledImage, MissingImagePlaceholder };
