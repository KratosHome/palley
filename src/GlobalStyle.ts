import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *,
  a,
  ul,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: MyFont8;
    font-size: calc((90vw - 470px) / (1980 - 470) * (16 - 10) + 14px);
    text-decoration: none;
    list-style: none;
  }

  h1 {
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
  }
`