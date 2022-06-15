import styled from "styled-components";


export const HeaderCardStyle = styled.div`
  max-width: ${props => props.theme.media.desktop};

  .imgHeaderCard {
    cursor: pointer;
  }

  .containerHeaderCard {
    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    width: 26em;
    height: 100vh;
    z-index: 2;
  }

  .menuBlureOpen {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
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