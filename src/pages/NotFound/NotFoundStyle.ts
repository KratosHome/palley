import styled from "styled-components";


export const NotFoundStyle = styled.div`
  max-width: ${props => props.theme.media.desktop};
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("../../img/icons/page404.jpg");
  background-size: 2000px;
  background-position: 35% 15%;;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 140px;

  h1 {
    font-size: 5em;
  }

  h2 {
    font-size: 2em;
    font-weight: 600;
    font-family: MyFont2;
    font-weight: 500;
    line-height: 1.2;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    opacity: 0.5;
    color: rgba(114, 101, 101,)
  }

  a {
    color: ${props => props.theme.colors.backgroundButton};
  }
`
