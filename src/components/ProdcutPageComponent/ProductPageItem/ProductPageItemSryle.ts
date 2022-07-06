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

  .gridBoxProductPageItem {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .addToWidhList {
    position: absolute;
    font-size: 18px;
    top: 30%;
    right: 25%;
  }

  .descriptionProductPageItem {
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

  .socialNetworkProductPageItem {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 2rem;

    a {
      margin-left: 1rem;
      margin-right: 1rem;
      color: black;
      transition: 500ms;
      border: 1px solid rgba(0,0,0,0.3);
      border-radius: 50px;
      width: 30px;
      height: 30px;
      padding-top: 7px;

    }

    a:hover {
      background-color: ${props => props.theme.colors.backgroundButton};
      color: white;
      border: 1px solid ${props => props.theme.colors.backgroundButton};;
    }
  }

  .socialNetworkProductPageItem:after,
  .socialNetworkProductPageItem:before {
    margin-top: -10px;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,0.2);
  }

  .socialNetworkProductPageItem:after {
    margin-top: 40px;
  }

  @media ${props => props.theme.media.phone} {
    grid-template-columns: 1fr;

    .gridBoxProductPageItem {
      grid-column-start: 0;
      grid-column-end: 1;
      grid-row-start: 4;
      grid-row-end: 0;
    }

    .modalContainerProductPage {
      justify-content: space-around;
    }

  }
`