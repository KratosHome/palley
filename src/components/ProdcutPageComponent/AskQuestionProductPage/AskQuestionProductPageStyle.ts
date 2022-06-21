import styled from "styled-components";

export const AskQuestionProductPageStyle = styled.div`

  margin-right: 20px;

  form{
    width: 400px;
  }

  .titelModal:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.backgroundButton};
    transition: 500ms;
  }

  .inputAskMessogeInputProduct input{
    height: 140px;
  }

  @media ${props => props.theme.media.phone} {
    form{
      width: 250px;
    }
  }
  `