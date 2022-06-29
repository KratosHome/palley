import {HeaderCardStyle} from "./HeaderCardStyle";
import React, {useState} from "react";
import cart from "../../../img/icons/cart.png";
import {CSSTransition} from 'react-transition-group';
import "./HeaderCard.css"
import MayButton from "../../UL/MayButton/MayButton";
import {useAppSelector} from "../../../hooks/useRedux";
import HeaderCartAdd from "../HeaderCartAdd/HeaderCartAdd";


export const HeaderCard = () => {
    const [cardActive, setCardActive] = useState(false)

    const {productAdd} = useAppSelector(state => state.getProductInCard)


    return (
        <HeaderCardStyle>
            <img className="imgHeaderCard" src={cart} alt="cart" onClick={() => setCardActive(!cardActive)}/>
            {
                productAdd.length === 0
                    ?
                    null
                    :
                    <div className="addProdcitImgHeaderCard"></div>
            }
            <div
                onClick={() => setCardActive(!cardActive)}
                className={cardActive ? "containerHeaderCard" : ""}
            >
                <CSSTransition
                    in={cardActive}
                    timeout={200}
                    classNames="alert"
                    unmountOnExit
                    mountOnEnter
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={cardActive ? "openMenuHeaderCard" : ""}
                    >
                        <div className="titleHeaderCard">
                            <div
                                className="closeHeaderCard"
                                onClick={() => setCardActive(!cardActive)}
                            >
                                x
                            </div>
                            <h1>Shopping Cart</h1>
                        </div>
                        {
                            productAdd.length === 0
                                ?
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
                                :
                                <HeaderCartAdd productAdd={productAdd} setCardActive/>
                        }

                    </div>
                </CSSTransition>
            </div>
        </HeaderCardStyle>
    )
};

/*





 */