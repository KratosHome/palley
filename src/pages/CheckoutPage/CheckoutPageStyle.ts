import styled from "styled-components";

export const CheckoutPageStyle = styled.div`
  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px 15px 0 15px;


  h1 {
    color: rgb(51, 51, 51);
    display: inline;
    font-family: MyFont10;
    font-size: 2rem;
    height: auto;
    line-height: 36.400001525878906px;
    width: auto;
    word-break: break-word;
    word-wrap: break-word;
  }

  h2 {
    font-family: MyFont6;
    font-size: 1.1rem;
  }

  .containeForm {
    margin-top: 15px;
  }

  .containeH2CheckoutPage {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
      color: rgba(0, 0, 0, 0.5)
    }

    a {
      color: ${props => props.theme.colors.backgroundButton};
    }
  }

  .containerChekCheckoutPage {
    margin-right: 10px;
  }

  .h2opingAdres {
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .containerFirsNameLatnameCheckoutPage {
    display: flex;
    justify-content: space-between;


  }

  .containerBittonFormCheckoutPage {
    display: flex;
    justify-content: space-between;

    a {
      padding-top: 15px;
      color: ${props => props.theme.colors.backgroundButton};
      width: 100%;
    }
  }

  .footerCheckoutPage {
    font-size: 0.8571428571em;
    color: #737373;
    margin-bottom: 30px;
  }

  .footerCheckoutPage:before {
    margin-top: 150px;
    margin-bottom: 15px;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .containerCheckoutPage {
    background-color: rgba(0, 0, 0, 0.05);
    padding-top: 20px;
    padding-left: 30px;

    .containerProductCheckoutPage {
      margin-top: 10px;

      .infoProductCheckoutPage {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        div {
          margin-top: 15px;
          font-size: 1.2rem;
          white-space: nowrap;
          margin-right: 5px;
          margin-left: 5px;
        }

        div:last-child {
          margin-right: 30px;
        }

        .countProductCheckoutPage {
          position: absolute;
          margin-left: 90px;
          margin-top: -8px;
          background-color: rgb(175, 170, 170);
          color: white;
          width: 20px;
          height: 20px;
          text-align: center;
          padding-top: 2.5px;
          border-radius: 50%;
        }

        .sizeProductCheckoutPage {
          position: absolute;
          margin-left: 19%;
          margin-top: 40px;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }

  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
}

.beforTotalCheckoutPage:before,
.containerProductCheckoutPage:after {
  margin-top: 20px;
  content: "";
  display: block;
  width: 95%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
}

.totalCheckoutPage {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  span{
    display: inline-block;
    margin-right: 20px;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.3);
  }
  div{
    margin-right: 30px;
  }
}

@media ${props => props.theme.media.phone} {
  grid-template-columns: 1fr;

  .containerCheckoutPage {


    .containerProductCheckoutPage {


      .infoProductCheckoutPage {
        .sizeProductCheckoutPage {
          margin-left: 35%;
        }
      }
    }

  }
`