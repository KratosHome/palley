import styled from "styled-components";

export const TestimonialsHomeStyle = styled.div`

  width: 100%;
  text-align: center;
  background-image: url(../../../img/baner/slide-3.jpg);

  max-height: 650px;
  background-size: 150em;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  h3 {
    font-family: MyFont8;
    font-size: 2.5em;
    font-weight: 500;
    line-height: 1.2;
    color: #111;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-top: 1em;
  }

  .testimonialsItemContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .testimonialsItemText {
    font-family: MyFont8;
    font-weight: 500;
    font-size: 1em;
    letter-spacing: 1px;
    line-height: 1.5em;
    width: 75%;
    margin-top: 1em;
    color: #666666;
    margin-bottom: 25px;
  }

  .MuiRating-root {
    color: #ead148;
  }

  .testimonialsItemContainerItemImg {
    max-width: 70px;
    max-height: 70px;
    margin-bottom: 25px;
    margin-top: 25px;
  }

  .testimonialsItemName {
    margin-bottom: 25px;
    font-family: MyFont8;
    letter-spacing: 1px;
    font-size: 1em;
    font-weight: 500;
    color: #18b0ea;
  }

  .testimonialsItemPosition {
    font-family: MyFont8;
    font-size: 1em;
    font-weight: 400;
    color: #768ca1;
  }

  .swiper-pagination {
    position: relative;
    display: block;
    margin-top: 70px;
  }

  @media ${props => props.theme.media.phone} {
    background-size: 500%;

    h3 {
      padding-top: 1em;
    }
`