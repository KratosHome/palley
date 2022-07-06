import styled from "styled-components";

export const ReviewProductPageStyle = styled.div`

  .containerTitleReviewProductPage {
    display: flex;
    justify-content: space-between;

    div {
      margin: 10px 0 20px;

    }

    div:first-child {
      font-family: MyFont8;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 3.2px;
    }

    div:last-child {
      color: #7a7a7a;
      margin-right: 1rem;
    }

    div:last-child:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.backgroundButton};

    }
  }

  .ratingReviewProductPage {
    font-family: MyFont6;
    color: #878787;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 5px;
  }


  .clickOnWriteReviews:hover {
    cursor: pointer;
    color: rgba(69, 171, 245, 1);
  }

  .WriteReviewContaineer {
    margin: 0 auto;
    width: 90%;
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 30px;

    input {
      margin-bottom: 20px;
      vertical-align: top;
    }

    div {
      margin-bottom: 10px;
    }

    .WriteReviewH5 {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .inputReviewProductPage {
    input {
      height: 300px;
    }
  }

  .WriteReviewbutton {
    margin-left: 80%;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 600;

    div {
      height: 40px;
      margin-top: -7px;
    }
  }

  .containerTextReviewProductPage {
    .contReviewsName {
      margin-top: 20px;
      margin-bottom: 2rem;
    }

    div {
      color: #979797;
      font-family: MyFont4;
      font-size: 20px;
      font-weight: 500;
      position: relative;
    }

    .porductReviewsName {
      color: black;
      margin-bottom: 10px;
    }
  }
  
`
