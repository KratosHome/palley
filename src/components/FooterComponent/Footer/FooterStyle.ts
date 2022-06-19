import styled from "styled-components";

export const FootetStyle = styled.footer`

  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;

  a, div {
    font-family: MyFont6;
    color: black;
    text-decoration: none;
    font-weight: 400;
    line-height: 32px;
    transition: all 0.25s ease-in-out;
    font-size: 1em;
  }

  .footerBlock5 a:hover,
  a:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.backgroundButton}
  }

  .containerFooter {
    display: flex;
  }

  .footerBlock2,
  .footerBlock3,
  .footerBlock4 {
    padding: 30px 0 0 20px;
    border: 1px solid rgb(196, 192, 192, 0.2);
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .containerFooter h6:after {
    content: "";
    display: block;
    height: 1px;
    width: 30px;
    margin-top: 5px;
    margin-bottom: 15px;
    background-color: #000;
  }

  .footerBlock5 {
    padding: 15px 20px 5px 30px;
    border: 1px solid rgb(196, 192, 192, 0.2);
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: space-between;
    text-align: center;
  }

  .footerBlock5 a {
    font-weight: 400;
    color: rgb(190, 176, 176);
  }

  .footerBlock5 a:after {
    transform: scale(0);
    content: "";
    display: block;
    position: absolute;
    width: 80px;
    height: 1px;
    background-color: ${props => props.theme.colors.backgroundButton};
    margin-left: 227px;
    margin-top: -5px;
    transition: 500ms ease-out;
  }

  .footerBlock5 a:hover:after {
    transform: scale(1);
  }

  @media ${props => props.theme.media.tablet} {
    h6 {
      max-width: max-content;
    }

    .containerFooter {
      flex-direction: column;
      text-align: center;
    }

    .footerBlock2,
    .footerBlock3,
    .footerBlock4 {
      align-items: center;
      height: 250px;
    }

    .footerBlock5 {
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }





`