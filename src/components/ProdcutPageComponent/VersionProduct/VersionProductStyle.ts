import styled from "styled-components";

export const VersionProductStyle = styled.div`
  margin-top: 25px;
  display: flex;

  .variantContainerVersionProduct {
    display: flex;
  }

  .textVersionProduct {
    margin-top: 15px;
    font-family: MyFont10;
    font-size: 0.9rem;
  }

  .textVersionProduct:after {
    content: "";
    display: block;
    height: 1px;
    width: 40px;
    background-color: black;
    margin-top: 3px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .selectedVersionProduct,
  .versionProduct {
    padding-top: 2px;
    font-family: MyFont10;
    text-transform: uppercase;
    margin-left: 10px;
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
  }


  .versionProduct {
    border: 1px solid rgba(0, 0, 0, 1);
    opacity: 0.5;
  }

  .versionProduct:hover {
    border: 1px solid black;
    cursor: pointer;
    opacity: 1;
    transition: 500ms;
  }

  .selectedVersionProduct {
    border: 1px solid black;
  }


  .containerButtonVersionProduct {
    margin-left: 30px;
    margin-top: -45px;
    width: 200px;

    button {
      width: 200px;
    }
  }

  @media (max-width: 3500px) {
    .containerButtonVersionProduct {
      button {
        width: 30vw;
      }
    }

    @media (max-width: 1800px) {
      .containerButtonVersionProduct {
        button {
          width: 35vw;
        }
      }

      @media (max-width: 760px) {
        .containerButtonVersionProduct {
          button {
            width: 85vw;
          }
        }

        @media (max-width: 625px) {
          .containerButtonVersionProduct {
            button {
              width: 80vw;
            }
          }

`