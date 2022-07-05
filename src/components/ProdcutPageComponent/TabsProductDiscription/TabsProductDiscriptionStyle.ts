import styled from "styled-components";

export const TabsProductDiscriptionStyle = styled.div`

  line-height: 1.9rem;
  color: #a8a8a8;

  p, li {
    font-family: MyFont4;
    font-size: 1rem;
  }

  img {
    width: 100%;
  }

  h5 {
    max-width: max-content;
    color: black;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3.2px;
    position: relative;
    padding-bottom: 10px;
    margin: 10px 0 20px;
  }

  h5::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 80%;
    background: black;
    bottom: 0;
    left: 0;
  }

  .brendTabsProductDiscription {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      margin-left: 1rem;
    }
  }


  .liTabsProductDiscription {
    display: flex;
    justify-content: space-around;

  }

  @media ${props => props.theme.media.phone} {
    .brendTabsProductDiscription {
      grid-template-columns: 1fr;

    }

`