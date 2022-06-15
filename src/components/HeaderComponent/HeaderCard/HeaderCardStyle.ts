import styled from "styled-components";


export const HeaderCardStyle = styled.div`
  max-width: ${props => props.theme.media.desktop};

  .imgHeaderCard {
    cursor: pointer;
  }

  .HeaderCardOpen {
    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    width: 30em;
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

  .animateMenuOpen {
    transform: rotateY(1deg);
    transition: 500ms;
  }

  .animatemenuClose {
    transform: translate(-300px);
    transition: 500ms ease-in-out;
  }

`