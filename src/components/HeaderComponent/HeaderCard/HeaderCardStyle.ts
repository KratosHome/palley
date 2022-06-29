import styled from "styled-components";


export const HeaderCardStyle = styled.div`

  .imgHeaderCard {
    cursor: pointer;
  }

  .addProdcitImgHeaderCard {
    margin-top: -10px;
    margin-left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(134, 182, 234);
  }

  .containerHeaderCard {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .openMenuHeaderCard {
    background: #f8f5f5;
    border-radius: 5px;
    width: 350px;
    height: 100%;
    overflow: auto;
    position: absolute;
    right: 0;
  }

  .titleHeaderCard {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    text-align: center;
    align-items: center;
    height: 50px;
  }

  h1 {
    font-weight: 500;
    line-height: 43px;
    color: #111111;
    text-align: center;
    font-size: 1.5em;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    text-transform: capitalize;
  }

  .closeHeaderCard {
    cursor: pointer;
    height: 100%;
    width: 50px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    padding-top: 15px;
    font-size: 1.5em;
  }

  .emptyHeaderCard {
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .emptyHeaderCard p {
    font-size: 1.5em;
    line-height: 1.2;
    color: #111111;
    margin-bottom: 60px;
  }


`
