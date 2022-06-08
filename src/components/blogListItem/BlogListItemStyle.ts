import styled from "styled-components";
import {themeStyle} from "../../themaStyle";


interface Props {
    revers: boolean
}

export const BloaListItemStyle = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;

  h5 {
    margin-top: 1em;
    font-size: 1.5em;
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }

  img {
    min-height: 280px;
    max-height: 450px;
    width: 100%;
    padding: 0px 30px 30px 30px;
    grid-row-start: ${props => props.revers ? '1' : ''};
  }

  .BlogListItemContent {
    min-height: 100px;
    max-height: 246px;
    line-height: 28px;
    color: #909090;
    font-family: MyFont6;
    padding: 20px;
    grid-row-start: ${props => props.revers ? '2' : ''};
  }

  @media ${props => props.theme.media.phone} {
    grid-template-columns: 1fr;

    img {
      grid-row-start: 2;
    }

    .BlogListItemContent {
      grid-row-start: 1;
    }
  }
`