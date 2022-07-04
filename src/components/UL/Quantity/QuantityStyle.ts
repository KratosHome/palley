import styled from "styled-components";

export const QuantityStyle = styled.div`
  margin-top: 25px;
  margin-left: -40px;

  .countInputVersionProduct {
    margin-right: 15px;
    width: 40px;
    height: 40px;
    padding: 5px 0;
    text-align: center;
    font-size: 18px;
    color: #111;
    font-weight: 500;
    border: 2px solid #ddd;
    border-radius: 0;
  }


  .decrementVersionProduct,
  .incrementVersionProduct {
    width: 25px;
    height: 20px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background-color: white;
  }

  .decrementVersionProduct:hover,
  .incrementVersionProduct:hover {
    color: ${props => props.theme.colors.backgroundButton};
    cursor: pointer;
    transition: 500ms;
  }

  .incrementVersionProduct {
    position: absolute;
    margin-left: 39px;
    margin-top: 0;
  }

  .incrementVersionProduct:before {
    content: "\\f106";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }

  .decrementVersionProduct {
    position: absolute;
    margin-left: -16px;
    margin-top: 20px;
  }


  .decrementVersionProduct:before {
    content: "\\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }

`
