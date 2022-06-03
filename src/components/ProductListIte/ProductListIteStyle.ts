import styled from "styled-components";

export const ProductListIteStyle = styled.div`

  text-align: center;
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
    margin-top: -150px;
    display: flex;
    align-items: center;
  }
  .ProductListIteHover {
    opacity: 0;
    transform: rotateX(150deg);
    transform-origin: bottom;
    transition: 500ms;
  }
  
    :hover .ProductListIteHover {
    opacity: 1;
    transform: rotateY(0deg);
  }

  .ProductListIteHoverSelectOprions {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-left: 50px;
    margin-right: 30px;
    width: 40px;
    height: 40px;
    clip-path: circle(50% at center center);
    letter-spacing: 2px;
    transition: 500ms;
    font-size: 16px;
  }
  .ProductListIteHoverSelectOprions:hover {
    background-color: rgb(111, 177, 221);
    color: white;
    cursor: pointer;
    transition: 500ms;
  }
  .ProductListIteHoverSelectAddLikes,
  .ProductListIteHoverSelectQuickview {
    margin-right: 35px;
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
    .ProductListIteHover{
      display: none;
    }
    img{
      height: 12em;
    }
  }
`