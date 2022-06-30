import styled from "styled-components";

interface Props {
    backgroundColor: string
    borderRadius: string
    border: string
}


export const MayInputStyle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  
  label{
    font-family: MyFont6;
    color: #878787;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
  span{
    color: red;
    margin-left: 3px;
  }
  input {
    position: relative;
    min-width: 170px;
    max-width: 1000px;
    height: 35px;
    margin-bottom: 10px;
    border-radius: ${props => props.borderRadius};
    border:${props => props.border};
    background: ${props => props.backgroundColor};
    padding: 15px;
    margin-right: 5px;
  }
  

`
