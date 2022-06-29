import styled from "styled-components";


export const HeaderAddStyle = styled.div`

  .containerHeaderCartAdd {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding-bottom: 10px;
    margin: 10px 20px 10px 10px;
  }

  .nameHeaderCartAdd {
    font-family: MyFont10;
    margin-top: 10px;
    font-size: 1rem;
  }

  .prductImgHeaderCartAdd {
    min-width: 75px;
    min-height: 75px;
    border-radius: 5px;
  }

  .deleteImgHeaderCartAdd {

    cursor: pointer;
    margin: 10px;

    img {

      max-width: 15px;
      max-height: 15px;
    }
  }

  .containerImgHeaderCartAdd {
    display: flex;
  }

  .prodVariantImgHeaderCartAdd {
    margin-top: 5px;

    .oldPriseHeaderCartAdd {
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.4);
    }

    div {
      margin-bottom: 5px;
    }

    div, span {
      font-family: MyFont10;
      text-transform: uppercase;
    }

    span {
      margin-right: 5px;
    }
  }

  .cntainetFooterHeaderCartAdd {
    position: fixed;
    bottom: 0;
  }

  .totalHeaderCartAdd {
    height: 59px;
    line-height: 59px;
    background-color: #fff;
    color: #111111;
    padding: 0 15px;
    overflow: hidden;
    bottom: 59px;
    width: 400px;
    max-width: 100%;

    .totalOldHeaderCartAdd {
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.3);
    }

    .totaPriseHeaderCartAdd {
      color: ${props => props.theme.colors.backgroundButton};
    }

    span:first-child {
      margin-left: 200px;
    }

    span {
      margin-left: 10px;
    }
  }

  .buttonContainerHeaderCartAdd {
    display: flex;
  }
  .viewHeaderCartAdd,
  .checkoutHeaderCartAdd{
    width: 175px;
    text-align: center;
    color: white;
    height: 55px;
    padding-top: 20px;
    text-transform: uppercase;
  }
  .viewHeaderCartAdd {
    background-color: rgba(0,0,0,0.8);
  }

  .checkoutHeaderCartAdd {
    background-color: black;
  }


`