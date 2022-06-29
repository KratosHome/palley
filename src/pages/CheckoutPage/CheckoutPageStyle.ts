import styled from "styled-components";

export const CheckoutPageStyle = styled.div`
  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 25px 0 0 0;

  
  .containerChekCheckoutPage {
    margin-right: 10px;
  }

  @media ${props => props.theme.media.phone} {
    grid-template-columns: 1fr;
  }
`