import {HeaderCardStyle} from "./HeaderCardStyle";
import React, {useState} from "react";
import cart from "../../../img/icons/cart.png";
import {Link} from "react-router-dom";


export const HeaderCard: React.FC<{}> = () => {

    const [cardActive, setCardActive] = useState(false)


    return (
        <HeaderCardStyle>
            <img className="imgHeaderCard" src={cart} alt="cart" onClick={() => setCardActive(!cardActive)}/>
            {cardActive ?

                    <div className="HeaderCardOpen">
                        <div>
                            <div>x</div>
                            <h1>Shopping Cart</h1>
                        </div>
                        <p>Your shopping bag is empty</p>
                        <Link to="/">go to the shop</Link>
                    </div>

                :
                null
            }
            <div className={cardActive ? "menuBlureOpen" : ""}
                 onClick={() => setCardActive(!cardActive)}></div>
        </HeaderCardStyle>
    )
};