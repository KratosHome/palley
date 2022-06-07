import styled from "styled-components";

export const BanerMainContentStyle = styled.div`
  position: absolute;
  width: 350px;
  height: 180px;
  background-color: white;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  .BanerMainContentH1:after {
    display: block;
    content: "";
    width: 30%;
    height: 1px;
    margin-left: 35%;
    margin-top: 15px;
    background-color: rgba(44, 106, 229, 0.7);
    bottom: 0;
  }

  .BanerMainContentFrom {
    margin-top: 1em;
  }

  .BanerMainContentFrom span {
    font-family: MyFont4;
    font-size: 1em;
    text-transform: none;
    opacity: 0.5;
    font-weight: 100;
  }

  .BanerMainContentFrom div {
    font-size: 1.2em;
    display: inline-block;
  }

  a {
    position: absolute;
    margin-top: 130px;
    font-family: MuFony1;
    height: 50px;
    width: 100%;
    background-color: black;
    color: white;
    font-size: 0.8em;
    text-transform: uppercase;
    text-align: center;
    padding-top: 15px;
    letter-spacing: 1px;
  }

  a:hover {
    background-color: #6b92de;
    transition: 500ms;
    cursor: pointer;
  }

  a:after {
    content: "\\2192";
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    top: 20%;
    width: 100%;
    left: 0%;
    transform:translate(0%, 0%);
  }
`