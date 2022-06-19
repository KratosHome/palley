import styled from "styled-components";

export const ProductImgStyle = styled.div`
  width: 50vw;
  padding-right: 1em;

  img {
    height: 100%;
  }

  @media(max-width: 3700px) {
    width: 30vw;
  }
  @media(max-width: 1900px) {
    width: 50vw;
  }
  @media ${props => props.theme.media.phone} {
    width: 95vw;
    img {
      height: 100%;
    }
  }
`