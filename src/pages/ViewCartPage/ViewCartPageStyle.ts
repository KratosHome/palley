import styled from "styled-components";

export const ViewCartPageStyle = styled.div`
  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;

  .breadCrumbsViewCartPage {
    margin-top: 2rem;
    background-color: rgba(0, 0, 0, 0.05);
    padding-left: 80px;
    padding-bottom: 8px;
  }

  .productTabletViewCartPage {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-top: 2rem;

    div {
      padding-left: 15px;
      padding-top: 15px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 45px;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: #111111;
      font-family: SofiaPro;
    }

    div:first-child {
      width: 150%;
    }

    div:last-child {
      width: 150px;
    }
  }

  .productViewCartPage {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgb(222, 217, 217);

    div {
      font-family: MyFont10;
    }

    .nameProductViewCartPage {

      div:last-child {
        margin-top: 10px;
        color: #959595;
      }
    }

    .totalViewCartPage,
    .priseProductViewCartPage {
      color: #959595;
    }

    .imgNameViewCartPage {
      display: flex;
      align-items: center;
      margin-left: -90px;
    }

    .totalViewCartPage {
      margin-right: -100px;
    }

    div {
      padding-left: 15px;
    }

    img {
      padding-top: 10px;
      padding-bottom: 10px;
      width: 120px;
    }
  }

  .deleteImgHeaderCartAdd {
    cursor: pointer;

    img {
      max-width: 15px;
      max-height: 45px;
    }
  }

  .mobViewCartPage {
    display: none;
  }

  .totalFooterViewCartPage {
    margin-top: 1rem;
  }

  .buttonTotalFooterViewCartPage {
    width: 350px;
  }


  .totalContainerFooterViewCartPage {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
    margin-top: 30px;
    padding-top: 40px;
    padding-left: 2rem;

    .afterFooterViewCartPage:after {
      content: "";
      display: block;
      border: 1px solid rgba(0, 0, 0, 0.07);
      margin-top: 1rem;
      margin-bottom: 1.2rem;
    }

    div {
      text-transform: uppercase;
      font-family: MyFon11;
    }

    .totalTotalFooterViewCartPage {
      display: flex;

      div:first-child {
        margin-right: 150px;
      }

    }

    .buttonChekTotalFooterViewCartPage {
      width: 450px;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1044px) {
    .mobViewCartPage {
      display: block;
    }

    .breadCrumbsViewCartPage {
      margin-bottom: 30px;
    }

    .productTabletViewCartPage {
      display: none;
    }

    .productViewCartPage {
      flex-wrap: wrap;

      div {
        margin: 10px;
      }

      .imgNameViewCartPage {
        margin-left: 10px;
      }

      .totalViewCartPage {
        margin-right: 0;
      }
    }

    .buttonTotalFooterViewCartPage {
      width: 250px;
    }

    .totalContainerFooterViewCartPage {
  
      .buttonChekTotalFooterViewCartPage {
        width: 90%;
        
      }
    }
  }


`