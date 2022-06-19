import styled from "styled-components";

export const BreadcrumbsCompStyle = styled.div`
  display: flex;

  
  a:not(:last-child) {
    color: #111111;
    cursor: pointer;
  }
  a:not(:last-child):hover {
    color: #2dbbf0;
    transition: 500ms;
  }
  a {
    color: #2dbbf0;
    cursor: auto;
    font-family: MyFont1;
    font-size: 2.4em;
  }

  a:not(:last-child):after {
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    margin: -5px 0 0 10px;
    padding-right: 10px;
  }
`