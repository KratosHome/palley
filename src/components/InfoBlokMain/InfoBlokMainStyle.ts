import styled from "styled-components";

export const InfoBlokMainStyle = styled.div`

  display: flex;
  justify-content: center;

  .InfoBlokMainImg {
    max-height: 600px;
    min-height: 300px;
    width: 100%;
  }

  .InfoBlokMainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 12%;
    padding-top: 30px;
    background-color: white;
    width: 40%;
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

  @media (max-width: 1491px) {
    .InfoBlokMainContainer {
      width: 50%;
    }

    @media (max-width: 908px) {
      .InfoBlokMainContainer {
        width: 60%;
      }

      @media (max-width: 768px) {

        .InfoBlokMainContainer {
          margin-top: 7%;
        }

        .InfoBlokMain_h3 {
          font-size: 1.9em;
        }
      }

      @media (max-width: 768px) {
        .InfoBlokMainContainer {
          width: 80%;
        }
      }
    }
  }
`