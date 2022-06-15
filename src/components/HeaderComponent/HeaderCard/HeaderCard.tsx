import {HeaderCardStyle} from "./HeaderCardStyle";
import React, {useState} from "react";
import cart from "../../../img/icons/cart.png";
import {Link} from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import "./HeaderCard.css"
import {MayButton} from "../../UL/MayButton/MayButton";


export const HeaderCard: React.FC<{}> = () => {

    const [cardActive, setCardActive] = useState(false)


    return (
        <HeaderCardStyle>
            <img className="imgHeaderCard" src={cart} alt="cart" onClick={() => setCardActive(!cardActive)}/>
            <CSSTransition
                in={cardActive}
                timeout={200}
                classNames="alert"
                unmountOnExit
            >
                <div className="containerHeaderCard">
                    <div className="titleHeaderCard">
                        <div
                            className="closeHeaderCard"
                            onClick={() => setCardActive(!cardActive)}
                        >
                            x
                        </div>
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="emptyHeaderCard">
                        <p>Your shopping bag is empty</p>
                        <MayButton
                            linkTo={"/"}
                            backgroundColor={"black"}
                            onClick={() => setCardActive(!cardActive)}
                            colorText={"white"}
                        >
                            go to the shop
                        </MayButton>
                    </div>
                </div>
            </CSSTransition>
            <div className={cardActive ? "menuBlureOpen" : ""}
                 onClick={() => setCardActive(!cardActive)}></div>
        </HeaderCardStyle>
    )
};