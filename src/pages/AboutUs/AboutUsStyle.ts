import styled from "styled-components";

export const AboutUsStyle = styled.div`
 margin-top: 1.6rem;

  .titelAboutUs {
    height: 400px;
    width: 100%;
    background-size: 100%;
    background-image: url("./img/aboutUs/bg_page.webp");
    background-repeat: no-repeat;
    text-align: center;
    color: white;
    padding-top: 130px;
    a{
      color: white;
    }
    div{
      display: flex;
      justify-content: center;
    }
    h1{
      font-family: MyFont6;
      text-transform: capitalize;
      font-size: 3rem;
    }
   
  }

.containerAboutUs{
  max-width: ${props => props.theme.media.desktop};
  margin-left: auto;
  margin-right: auto;
}

`