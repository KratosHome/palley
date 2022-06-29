import React, {memo} from 'react';
import {HeaderAddType} from "./HeaderCardType";
import {HeaderAddStyle} from "./HeaferCartAddStyle";
import imgDel from "../../../img/icons/delete.png"
import {useAppDispatch} from "../../../hooks/useRedux";
import {deleteProduct} from '../../../store/reducer/getProductInCard';
import {Link} from "react-router-dom";

const HeaderCartAdd: React.FC<HeaderAddType> = ({productAdd, setCardActive}) => {
    const dispatch = useAppDispatch()
    const onClock = (e: React.MouseEvent<HTMLDivElement>, item: any) => {
        e.preventDefault();
        dispatch(deleteProduct(item))
    }

    let totalOld = productAdd.reduce((accumulator: any, friend: any) => accumulator + friend.prise, 0)
    let total = productAdd.reduce((accumulator: any, friend: any) => accumulator + friend.newPrise, 0)

    const onClick = (e:any) => {
        setCardActive(false)
        e.preventDefault()
    }

    return (
        <HeaderAddStyle>
            {productAdd.map((item: any) =>
                <div
                    key={Math.random()}
                    className="containerHeaderCartAdd"
                >
                    <div className="containerImgHeaderCartAdd">
                        <img
                            className="prductImgHeaderCartAdd"
                            src={item.cart_img[0]}
                            alt={item.name}/>
                        <div className="nameHeaderCartAdd">
                            {item.name}
                            <div className="prodVariantImgHeaderCartAdd">
                                <div>size: {item.size}</div>
                                <div>QTY: {item.count}</div>
                                {item.prise !== null ?
                                    <span className="oldPriseHeaderCartAdd">${item.prise}</span> : null}
                                <span>${item.newPrise}</span>
                            </div>
                        </div>
                        <div
                            className="deleteImgHeaderCartAdd"
                            onClick={(e) => onClock(e, item.idVariant)}
                        >
                            <img
                                src={imgDel}
                                alt={item.name}
                            />
                        </div>

                    </div>

                </div>
            )}
            <div className="cntainetFooterHeaderCartAdd">
                <div className="totalHeaderCartAdd">Total:
                    {totalOld > 0 ? <span className="totalOldHeaderCartAdd">${totalOld}</span> : null}
                    <span className="totaPriseHeaderCartAdd">${total}</span>
                </div>
                <div></div>
                <div className="buttonContainerHeaderCartAdd" >
                    <Link to={"/card"} className="viewHeaderCartAdd">view
                        cart</Link>
                    <Link to={"/checkout"} className="checkoutHeaderCartAdd">check
                        out</Link>
                </div>
            </div>
        </HeaderAddStyle>
    );
};

export default memo(HeaderCartAdd);