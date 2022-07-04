import styled from "styled-components";

interface Props {
    backgroundColor: string
    colorText: string
}

export const MayButtonStyle = styled.button<Props>`

  background-color: ${props => props.backgroundColor};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  color: #111111;
  border: 1px solid #111111;
  width: 100%;

  font-size: 1em;
  line-height: 1;
  letter-spacing: 1px;
  transition: 500ms all ease;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    border: 1px solid white;
    color: ${props => props.theme.colors.colorTextButtonHover};
    background-color: ${props => props.theme.colors.backgroundButton}
  }

  a {
    position: relative;
    padding: 15px 30px;
    color: ${props => props.colorText};
    display: inline-block;
    width: 100%;
  }
`