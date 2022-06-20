import styled from "styled-components";


export const DeliveryReturnProductPageStyle = styled.div`
  margin-right: 1rem;

  .titelModal:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.backgroundButton};
    transition: 500ms;
  }

  h3 {
    font-family: MyFont8;
    font-size: 1.4rem;
    color: #222;
    margin: 0 0 10px 0;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 1.4;
  }

  p {
    font-family: MyFont14;
    color: #878787;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  a {
    color: black;
  }
`