import styled from "styled-components";


export const AdditionalInfoProductPageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #979797;
  line-height: 1.5;


  div, li {
    font-family: MyFont6;
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  h5 {
    font-family: MyFont6;
    font-size: 1.7rem;
    color: #111111;
    padding-bottom: 15px;
  }

  h5:after {
    content: "";
    display: block;
    margin-top: 0.8rem;
    height: 2px;
    width: 40px;
    background: #2dbbf0;
  }

  h6 {
    font-size: 1.3rem;
    font-family: SofiaPro;
    font-weight: 600;
    color: #111111;
  }

  ul {
    line-height: 2.3rem;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .ulAdditionalInfoProductPageType {
    margin-top: 5rem;
    margin-left: 2rem;

  }

  @media ${props => props.theme.media.phone} {

    grid-template-columns: 1fr;
    text-align: center;
    h5:after {
      display: none;
    }

    img {
      display: none;
    }
  }
`