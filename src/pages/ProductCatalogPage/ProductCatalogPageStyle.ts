import styled from "styled-components";

export const ProductCatalogPageStyle = styled.div`

  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .containerProductCatalogPage {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

`