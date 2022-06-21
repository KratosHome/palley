import styled from "styled-components";

export const FootetBlock1Style = styled.div`

  padding: 30px 5px 0 20px;
  border: 1px solid rgb(196, 192, 192, 0.2);
  width: 100%;
  height: 300px;
  
  form input {
    width: 170px;
  }
  img {
    width: 120px;
    height: 40px;
  }

  .footerSubscribe {
    margin-bottom: 20px;
  }

  .FooterBlock1Button {
    border: none;
    width: max-content;
    height: max-content;
    position: absolute;
    margin: -44px 0 0 170px;
  }

  .FooterBlock1Button svg {
    fill: white;
    background-color: black;
  }

  .FooterBlock1Button svg:hover {
    background-color: ${props => props.theme.colors.backgroundButton};
    cursor: pointer;
    transition: 500ms;
  }

  .FooterBlock1SVG {
    background-color: white;
    padding: 3px;
    width: 33px;
    height: 33px;
  }

  @media ${props => props.theme.media.tablet} {
    form{
     display: flex;
      justify-content: center;
    }
    form input {
      width: 220px;
    }
    .FooterBlock1Button {
      width: max-content;
      height: max-content;
      position: absolute;
      margin: 5px 0 0 235px;
    }
  }

`