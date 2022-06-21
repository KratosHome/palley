import styled from "styled-components";

export const BuyBarProductPageStyle = styled.div`

  margin-top: 15px;

  .SoldInTwelveHours {
    padding-top: 10px;
    font-size: 1rem;
    color: #f55;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding-left: 35px;
    background: url(../../../img/icons/fire.svg) top left no-repeat;
    background-size: 25px;
    height: 30px;
    margin-bottom: 15px;
  }

  span {
    color: #f82f2f;
    font-size: 1.2rem;
  }

  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .barContainer {
    flex: 1;
    height: 12px;
    background: #dfdfe7;
    position: relative;
  }

  .fillerBackground {
    height: inherit;
    transition: "width 2s ease-i-out";
    background-color: #de3618;
    animation: background 50s infinite alternate;
  }

  .filler {
    transition: "width 2s ease-i-out";
    height: inherit;
    border-radius: inherit;
  }

  @keyframes background {
    0% {
      background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
      background-size: 1rem 1rem;
      background-position: 100% 100%;
    }
    100% {
      background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
      background-size: 1rem 1rem;
    }
  }


`