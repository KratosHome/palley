import styled from "styled-components";

export const CollectionFirstStyle = styled.div`
  margin-top: -5px;
  padding-top: 40px;
  background-color: #eaedf1;
  height: 375px;

  
  .swiper {
    z-index: 1;
  }

  .CollectionFirst {
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
    min-width: 220px;
    max-width: 300px;
    min-height: 220px;
    max-height: 300px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
  }

  .CollectionFirst img {
    min-width: 220px;
    max-width: 280px;
    min-height: 220px;
    max-height: 280px;
  }

  .swiper-pagination {
    position: relative;
    display: block;
    margin-top: 25px;
  }
  .CollectionFirstName{
    font-family: SofiaPro;
    font-size: 1.5em;
    font-weight: 500;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  .CollectionFirstText{
    color: #666666;
    font-family: SofiaPro;
    font-weight: 500;
    text-align: center;
  }
`