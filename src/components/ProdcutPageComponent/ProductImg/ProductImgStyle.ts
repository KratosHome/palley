import styled from "styled-components";

export const ProductImgStyle = styled.div`
  min-width: 30vw;
  max-width: 50vw;
  padding-right: 1em;

  img {
    height: 100%;
  }


  @media ${props => props.theme.media.phone} {
    min-width: 100%;
    img {
      height: 100%;
    }
  }
`