import styled from "styled-components";

export const SizeGuideMoadalProductPageStyle = styled.div`

  margin-right: 20px;

  .titelModal:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.backgroundButton};
    transition: 500ms;
  }

  .titleContainerSizeGuideMoadalProductPage {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  .inactiveSizeModalProduct,
  .activeSizeModalProduct {
    font-family: MyFont6;
    margin: 0 10px 0px 10px;
    padding: 10px;
    margin-bottom: -1px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }

  .activeSizeModalProduct {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 2px solid rgba(255, 255, 255, 1);
  }

  .inactiveSizeModalProduct:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;
  }


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



  .titleTablet > div {
    font-family: MyFont6;
    text-align: center;
  }

  table {
    border-spacing: 0px;
    border-collapse: collapse;
  }

  th {
    background-color: rgba(0, 0, 0, 0.1);
  }

  td, th {
    font-family: MyFont4;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px 20px 10px 20px;
  }

`
