import {HeaderCardStyle} from "./HeaderCardStyle";
import React, {useState} from "react";
import cart from "../../../img/icons/cart.png";
import {CSSTransition} from 'react-transition-group';
import "./HeaderCard.css"
import {MayButton} from "../../UL/MayButton/MayButton";
import {useSelector} from "react-redux";
import {rootState} from "../../../store/rootReducer";
import {useAppSelector} from "../../../hooks/useRedux";
import {useRemoveduplicates} from "../../../hooks/useRemoveduplicates";

export const getProductsObject = (array: any) =>
    array.reduce(
        (objekt: any, product: any) => ({
            ...objekt,
            [product.id]: product,
        }),
        {}
    );

export const HeaderCard = () => {

    const [cardActive, setCardActive] = useState(false)

    const state = useSelector((state: rootState) => {
        return state.getProductReducer
    })
//
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
                            <div>
                                {productAdd.map((item: any) =>
                                    <div key={item.id}>{item.id}</div>
                                )}
                            </div>
                    }
                </div>
            </CSSTransition>
            <div className={cardActive ? "menuBlureOpen" : ""}
                 onClick={() => setCardActive(!cardActive)}></div>
        </HeaderCardStyle>
    )
};