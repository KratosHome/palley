import styled from "styled-components";

export const MayButtonStyle = styled.button`

  background-color: white;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  color: #111111;
  border: 1px solid #111111;
  padding: 15px 40px;
  font-size: 1em;
  line-height: 1;
  letter-spacing: 1px;
  transition: all .3s ease 0s;
  text-transform: uppercase;
  transition: 500ms;

  :hover {
    cursor: pointer;
    border: 1px solid white;
    color: ${props => props.theme.colors.colorTextButtonHover};
    background-color: ${props => props.theme.colors.backgroundButton}
  }
`