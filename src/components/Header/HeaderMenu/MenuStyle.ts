import styled from "styled-components";


export const MenuStyle = styled.div`

  .menu {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    background-color: white;
  }

  .menu a {
    position: relative;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 55px;
    margin-right: 5px;
    white-space: nowrap;
  }

  .menu a:hover {
    transition: 300ms;
    color: rgba(69, 171, 245, 1);
    cursor: pointer;
  }

  .menu > li > a:after,
  .cubMenu > li > a:after {
    position: absolute;
    margin-bottom: 45px;
    content: "";
    height: 1px;
    width: 100%;
    background: rgba(69, 171, 245, 1);
    left: 0;
    bottom: 0;
    transform: scale(0);
    transition: 500ms ease-in-out;
    transform-origin: left;
    z-index: 101;
  }

  .menu a:hover:after {
    transform: scale(1);
  }

  .cubMenu {
    margin-top: 10px;
    display: flex;
    position: absolute;
    justify-content: space-around;
    left: 0;
    right: 0;
    background-color: white;
    width: 100%;
    transform: scale(0);
    transition: 500ms ease-in-out;
    transform-origin: bottom;
  }

  .menu > li:hover .cubMenu {
    transition: 500ms;
    transform: scale(1);
    z-index: 5;
  }

  .cubMenu {
    top: 65px;
    height: max-content;
  }

  .cubMenu > li > a {
    display: block;
    margin-bottom: -35px;
    width: max-content;
  }

  .cubMenu > li > a:after {
    transform: scale(0.6);
  }

  .cubMenu > li > a:hover:after {
    transform: scale(0.8);
  }

  .secondMenu a {
    text-decoration: none;
    font-family: MyFont10;
    font-size: 1em;
    color: #7d7b7b;
    font-weight: 500;
    line-height: 28px;
    text-transform: unset;
    letter-spacing: unset;
  }

  .menuBlureOpen,
  .menuMobClose,
  .menuCabinet,
  .menuClose {
    display: none;
  }


  @media (max-width: 768px) {

    .menu {
      position: absolute;
      flex-direction: column;
      overflow: auto;
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin-top: -26px;
      margin-left: -4px;
      width: 280px;
      height: 100vh;
      justify-content: flex-start;
      z-index: 2;
    }

    .menu > li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 50px;
    }

    .menu > li > a {
      display: block;
      position: absolute;
      width: 200px;
      height: 5px;
      margin: 0 0 0 10px;
      padding-top: 20px;
    }

    .menu > li > a:after,
    .cubMenu > li > a:after {
      display: none;
    }

    .cubMenu {
      display: none;
    }

    .menuMobOpen {
      display: block;
      position: absolute;
      left: 0;
      top: 15px;
    }

    .menuMobOpen span:first-child {
      content: "";
      display: block;
      width: 25px;
      height: 2px;
      background-color: black;
      margin-left: 25px;
      margin-top: 14px;
    }

    .menuMobOpen span:nth-child(2) {
      content: "";
      display: block;
      width: 15px;
      margin-left: 25px;
      margin-top: 6px;
      height: 2px;
      background-color: black;
    }

    .menuMobOpen span:nth-child(3) {
      content: "";
      display: block;
      width: 20px;
      margin-left: 25px;
      margin-top: 6px;
      height: 2px;
      background-color: black;
    }

    .menuMobClose {
      display: block;
      border: 1px solid black;
      width: 140px;
      height: 58px;
      background-color: black;
      color: white;
      margin-top: -10px;
    }

    .menuMobClose span:first-child {
      content: "";
      display: block;
      width: 25px;
      margin-left: 25px;
      margin-top: 23px;
      height: 2px;
      background-color: white;
    }

    .menuMobClose span:nth-child(2) {
      content: "";
      display: block;
      width: 15px;
      margin-left: 25px;
      margin-top: 6px;
      height: 2px;
      background-color: white;
    }

    .menuMobClose span:nth-child(3) {
      content: "";
      display: block;
      width: 20px;
      margin-left: 25px;
      margin-top: 6px;
      height: 2px;
      background-color: white;
    }

    .menuMobClose div:nth-child(4) {
      padding-left: 45%;
      margin-top: -13px;
      text-transform: uppercase;
    }

    .menuCabinet {
      display: block;
      position: absolute;
      top: 0;
      left: 135px;
      z-index: 10;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      width: 140px;
      height: 48px;
    }

    .menuCabinet div {
      top: 0;
      margin: -19px 0 0 60px;
    }

    .menuCabinet img {
      width: 25px;
      height: 25px;
      margin-top: 10px;
      margin-left: 15px;
    }

    .animateMenuOpen {
      transform: rotateY(1deg);
      transition: 500ms;
    }

    .animatemenuClose {
      transform: translate(-300px);
      transition: 500ms ease-in-out;
    }

    .menuBlureOpen {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }

    .menuBlureClose {
      display: none;
    }
  }

`