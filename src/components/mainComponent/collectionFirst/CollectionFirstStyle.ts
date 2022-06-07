import styled from "styled-components";

export const CollectionFirstStyle = styled.div`
  margin-top: -5px;
  padding-top: 40px;
  background-color: #eaedf1;
  height: 380px;


  .CollectionFirst {
    max-width: 300px;
    max-height: 300px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .CollectionFirst:before {
    content: "";
    display: block;
    position: absolute;
    border: 10px solid white;
    z-index: 1;
    min-width: 310px;
    min-height: 250px;
  }

  .CollectionFirst img {
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 500ms;
  }

  .CollectionFirst:hover.CollectionFirst img {
    transform: scale(1.1);
    transition: all 500ms;
  }
  
  .CollectionFirstName {
    font-family: SofiaPro;
    font-size: 1.5em;
    font-weight: 500;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .CollectionFirstText {
    color: #666666;
    font-family: SofiaPro;
    font-weight: 500;
    text-align: center;
  }


  @media(min-width: 2060px){
    .swiper-pagination {
      margin-top: 0px;
    }
  }
`