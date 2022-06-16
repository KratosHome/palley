import styled from "styled-components";

export const ProductTitleStyle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  :after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-top: 1em;
  }

  h1 {
    text-align: left;
    font-family: MyFont10;
    font-size: 1.5rem;
    font-weight: 500;
    color: #111111;
    text-transform: capitalize;
    margin-bottom: 1em;
  }

  .priseProductPageItem {
    color: rgba(0, 0, 0, 0.4);
    text-decoration: line-through;
    margin-right: 20px;
  }
  .newPriseProductPageItem {
    color: #2dbbf0;
    font-size: 1.2em;
  }

  .ratingProductPageItem {
    margin-top: 1rem;
    display: flex;
  }

  .ratingProductPageItem p {
    margin: 3px 0 0 14px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
  }
`