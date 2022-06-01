import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  top: 0;
  padding: 25px 0 0 0;
  margin: 0;
  background-color: white;
  width: 100%;
  position: sticky;
  
  .logo {
    height: 40px;
    width: 140px;
    padding-left: 15px;
  }
  
@media(max-width: 768px) {
  .logo {
    grid-row-start: 2;
  }
  .menu{
    grid-row-start: 1;
  }
}
`