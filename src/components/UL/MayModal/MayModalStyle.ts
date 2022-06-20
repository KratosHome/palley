import styled from "styled-components";

export const MayModalStyle = styled.div`
  
  .myModal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
  }

  .myModalContent {
    background: white;
    border-radius: 5px;
    padding: 15px;
    max-width: 90vh;
    max-height: 90vh;
    overflow: auto;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
  }

  .buttomCloseModal {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: 1px solid var(--color-button);
    font-size: 1em;
    width: 20px;
    height: 20px;
    margin-left: 96%;
    top: -15px;
  }

  .buttomCloseModal:hover {
    cursor: pointer;
  }
  
  .my-node-enter {
    opacity: 0;
  }

  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .my-node-exit {
    opacity: 1;
  }

  .my-node-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
  

`