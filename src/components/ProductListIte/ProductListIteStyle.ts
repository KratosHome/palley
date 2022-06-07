import styled from "styled-components";

export const ProductListIteStyle = styled.div`
  overflow: hidden;
  font-size: 0em;
  position: relative;

  figure {
    position: relative;
    background: #e12c43;
    transform: rotate(45deg);
    left: 12.5em;
    top: -16.5em;
    padding: 0.2em 0.5em 0.2em 0.1em;
    width: 7em;
  }

  figcaption {
    color: #fff;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
  }


  img {
    width: 100%;
    max-width: 400px;
    height: 17em;
  }

  .ProductListIte {
    margin-top: 10px;
    color: #111;
  }

  .ProductListItePrise {
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }

  .ProductListItePriseOldPrise {
    margin-right: 5px;
    font-size: 15px;
    font-weight: 700;
    color: #979797;
    text-decoration: line-through;
  }

  .ProductListItePrise :last-child {
    font-size: 15px;
    font-weight: 700;
    color: #2dbbf0;
  }

  .ProductListIteHover {
    position: absolute;
    margin-top: -180px;


    display: flex;
    opacity: 0;
    transform-origin: bottom;
    transition: 500ms;
    left: 50%;
    top: 110%;
    transform: translate(-50%, -50%) rotateX(150deg);
  }

  :hover .ProductListIteHover {
    opacity: 1;
    transform: translate(-50%, -50%) rotateX(0deg);
  }

  .ProductListIteHoverSelectOprions {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    width: 40px;
    height: 40px;
    clip-path: circle(50% at center center);
    letter-spacing: 2px;
    transition: 500ms;
    font-size: 13px;
  }

  .
  ProductListIteHoverSelectOprions:hover {
    background-color: rgb(111, 177, 221);
    color: white;
    cursor: pointer;
    transition: 500ms;
  }

  .ProductListIteHoverSelectQuickview {
    margin-left: 25px;
    margin-right: 25px;
  }

  .ProductListIteHoverSelectAddLikes,
  .ProductListIteHoverSelectQuickview {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 40px;
    height: 40px;
    clip-path: circle(50% at center center);
    letter-spacing: 2px;
    transition: 500ms;
    font-size: 16px;
  }

  .ProductListIteHoverSelectAddLikes:hover,
  .ProductListIteHoverSelectQuickview:hover {
    background-color: rgb(111, 177, 221);
    color: white;
    cursor: pointer;
    transition: 500ms;
  }

  .ProductListIteHoverSelectAddLikes img,
  .ProductListIteHoverSelectQuickview img {
    width: 15px;
    height: 15px;
  }


  @media (max-width: 768px) {
    margin: 5px;

    figure {
      left: 7.5em;
      top: -11.5em;
    }


    .ProductListIteHover {
      display: none;
    }

    img {
      height: 12em;
    }
  }
`