import styled from "styled-components";

export const ProductPageItemStyle = styled.div`

  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  

  .addToWidhList {
    position: absolute;
    font-size: 18px;
    top: 30%;
    right: 25%;
  }
  
  .descriptionProductPageItem{
    font-family: MyFont6;
    font-size: 1rem;
    color: #969696;
    line-height: 1.6;
    font-weight: 400;
    padding: 20px 0 0 0;
  }

  .soldLastProductPageItem {
    font-family: MyFont8;
    margin-top: 20px;
    font-size: 1.1rem;
    color: #111;
    font-weight: 600;
  }

  .soldLastProductPageItem span {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.theme.colors.backgroundButton};
  }
  .modalContainerProductPage {
    margin-top: 2rem;
    font-family: MyFont1;
    display: flex;
    margin-right: 20px;
    font-weight: bold;
    color: black;
  }
  
    
  @media ${props => props.theme.media.phone} {
    .modalContainerProductPage{
      justify-content: space-around;
    }
    grid-template-columns: 1fr
  }
`