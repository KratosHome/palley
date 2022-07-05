import styled from "styled-components";

export const TabsProductPageStyle = styled.div`

  .containerTabsProductPage {
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 30px;
    border-bottom: 1px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
    margin-bottom: 30px;

    .ProductTabsH1Activ,
    .ProductTabsH1 {
      position: relative;
      margin: 0 10px 30px 10px;
      font-family: MyFont4;
      font-size: 16px;
      font-weight: 500;
      color: #969696;
      letter-spacing: 1.6px;
    }

    .ProductTabsH1Activ {
      position: relative;
      color: black;
    }

    .ProductTabsH1Activ::after {
      position: absolute;
      content: "";
      height: 2px;
      width: 100%;
      background: rgba(69, 171, 245, 1);
      left: 0;
      margin-bottom: -10px;
      bottom: 0;
      transform: scale(1);
      transition: 500ms ease-in-out;
      transform-origin: center;
    }

    .ProductTabsH1:hover {
      cursor: pointer;
    }

    .ProductTabsH1:after {
      position: absolute;
      content: "";
      height: 2px;
      width: 100%;
      background: rgba(69, 171, 245, 1);
      left: 0;
      margin-bottom: -10px;
      bottom: 0;
      transform: scale(0);
      transition: 500ms ease-in-out;
      transform-origin: center;
    }

    .ProductTabsH1:hover:after {
      transform: scale(1);
    }
  }
  

  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  .alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  .alert-exit {
    opacity: 1;
  }

  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

`