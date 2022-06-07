import styled from "styled-components";

export const InfoBlokMainStyle = styled.div`
  display: flex;
  justify-content: center;

  .InfoBlokMainImg {
    max-height: 600px;
    min-height: 500px;
    width: 100%;
  }

  .InfoBlokMainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 10em;
    padding-top: 30px;
    background-color: white;
    width: 50em;
    height: 230px;
  }

  .InfoBlokMain_h3 {
    font-size: 2.3em;
    text-align: center;
    margin-bottom: 10px;
    padding: 5px;
  }

  .InfoBlokMainText {
    font-family: MyFont6;
    font-size: 1em;
    text-align: center;
    margin-bottom: 20px;
    padding: 5px;
  }

  .InfoBlokMainButton {
    width: 150px;
    height: 50px;
    border: none;
    color: white;
    background-color: black;
    transition: 500ms;
  }

  .InfoBlokMainButton:hover {
    background-color: ${props => props.theme.colors.backgroundButton};
    cursor: pointer;
  }


  @media (max-width: 768px) {
    .InfoBlokMainImg {
      min-height: 350px;
    }

    .InfoBlokMainContainer {
      margin-top: 4em;
      width: 30em;
    }

    .InfoBlokMain_h3 {
      font-size: 1.9em;
    }
  }

  @media (max-width: 468px) {
    .InfoBlokMainContainer {
      width: 20em;
    }
  }


`