import styled from "styled-components";


export const InputCabinetStyle = styled.div`
  form {
    margin-right: 50px;
    margin-left: 50px;
  }


  .containerlogoInputCabinet {
    width: 100%;

    img {
      min-height: 40px;
      min-width: 120px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .containerlogoInputCabinet:after {
    margin-top: 15px;
    margin-bottom: 15px;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #bebebe;
  }


  h1 {
    font-family: MyFont10;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 400;
    color: #111111;
    text-transform: unset;
    margin-bottom: 1rem;
  }

  input {
    width: 350px;
    height: 50px;
  }

  .forgetPasswordInputCabinet {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #c5c4c4;
    transition: 300ms;
    font-family: MyFont4;
  }

  .forgetPasswordInputCabinet:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.backgroundButton}
  }

  .nonvisibleForgtePass {
    display: none;
  }


  .donHaveAccountInputCabinet {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    border: 1px solid #e8eced;
    background: #f2f2f2;
    padding: 10px;

    span {
      font-family: MyFont6;
      margin-right: 10px;
    }

    span:last-child {
      color: #a4a4a4;
    }

    span:last-child:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.backgroundButton}
    }
  }

  .visibleForgtePass {
    width: 450px;
    height: 550px;
  }

  .visibleRegisterNow {
    width: 450px;
    height: 550px;
  }

  @media ${props => props.theme.media.phone} {


    .headerCabinet {
      display: none;
    }
  }
`