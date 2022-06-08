import styled from "styled-components";

export const BlogMainStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;

  h3 {
    font-family: MyFont8;
    font-size: 3em;
    font-weight: 500;
    line-height: 1.2;
    color: #111111;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
  }

  h3:after,
  h3:before {
    content: "";
    position: absolute;
    top: 50%;
    width: 50px;
    height: 2px;
    transform: translateY(-50%);
    background: #2dbbf0;
  }

  h3:before {
    margin-left: -60px;
  }

  h3:after {
    margin-left: 10px;
  }
`