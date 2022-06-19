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
  

  .addToWidhList {
    position: absolute;
    font-size: 18px;
    top: 30%;
    right: 25%;
  }


  .ProductPageDiscription {
    position: relative;
    font-family: MyFont3;
    font-size: 15px;
    color: #969696;
    line-height: 1.6;
    font-weight: 400;
    padding: 22px 0 0;
    margin-bottom: 30px;
  }

  .ProductPageDiscription::before {
    position: absolute;
    content: "";
    background-color: #969696;
    width: 100%;
    height: 1px;
    opacity: 0.5;
    margin-top: -30px;
  }

  .ProductPageSoldLast {
    font-family: MyFont6;
    margin-top: 20px;
    font-size: 16px;
    color: #111;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .ProductPageSoldLast span {
    font-size: 18px;
    font-weight: 600;
    color: #2dbbf0;
  }

  .SoldInTwelveHours {
    padding-top: 13px;
    font-size: 15px;
    color: #f55;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding-left: 35px;
    background: url(../../../img/icons/fire.svg) top left no-repeat;
    background-size: 25px;
    height: 30px;
    margin-bottom: 15px;
  }

  .ProductPageContainerModal {
    font-family: MyFont1;
    display: flex;
    margin-right: 20px;
    font-weight: bold;
    color: black;
  }

  .ProductPageContainerModal div {
    margin-right: 20px;
    margin-bottom: 30px;
  }

  .ProductPageContainerModal div:hover {
    margin-right: 20px;
    color: #2dbbf0;
    cursor: pointer;
  }

  .ProductSizeSize {
    font-size: 11px;
    font-weight: 600;
    border-bottom: 1px solid #111111;
    padding-bottom: 4px;
    letter-spacing: 0.1em;
    font-family: MyFont6;
    padding-right: 15px;
  }

  .ProductSize {
    display: flex;
    margin-left: 10%;
    margin-bottom: 30px;
  }

  .NotAvailable {
    color: black;
  }

  .ProdCounBTN {
    display: flex;
  }

  .ProductCategori {
    margin-top: 30px;
    position: relative;
  }

  .ProductCategori::before {
    position: absolute;
    content: "";
    background-color: #969696;
    width: 100%;
    height: 1px;
    opacity: 0.5;
    margin-top: -15px;
  }

  .ProductCategori {
    font-family: MyFont6;
    font-size: 15px;
    font-weight: 400;
    color: #111;
    padding-right: 5px;
  }

  .ProductInfoFlex {
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .ProductInfo {
    width: 23%;
    min-width: 250px;
    height: 130px;
    border: 1px solid #e1e1e1;
    margin: 30px 5px 30px 5px;
  }

  .ProductInfo img {
    max-width: 80px;
    max-height: 80px;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-left: 34%;
  }

  .ProductInfo span {
    display: block;
    text-align: center;
  }



  .ProductPageItemDescription{
    font-family: MyFont6;
    font-size: 1rem;
    color: #969696;
    line-height: 1.6;
    font-weight: 400;
    padding: 20px 0 0 0;
  }
  
  @media ${props => props.theme.media.phone} {
    grid-template-columns: 1fr
  }
`