import React from 'react';
import {ViewCartPageStyle} from "./ViewCartPageStyle";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {deleteProduct} from "../../store/reducer/getProductInCard";
import QuantityTest from '../../components/UL/QuantityTest/QuantityTest';
import imgDel from "../../img/icons/delete.png";
import { BreadcrumbsComp, MayButton } from '../../components';

const ViewCartPage = () => {

    const dispatch = useAppDispatch()
    const deltaClick = (e: React.MouseEvent<HTMLDivElement>, item: any) => {
        e.preventDefault();
        dispatch(deleteProduct(item))
    }
    const {productAdd} = useAppSelector(state => state.getProductInCard)


    const minCount = 1;
    const maxCount = 30;

    let total = productAdd.reduce((accumulator: any, friend: any) => accumulator + friend.newPrise * friend.count, 0)


    return (
        <ViewCartPageStyle>
            <div className="breadCrumbsViewCartPage">
                <BreadcrumbsComp/>
            </div>
            <div className="productTabletViewCartPage">
                <div>
                    PRODUCT NAME
                </div>
                <div>
                    PRICE
                </div>
                <div>
                    QUANTITY
                </div>
                <div>
                    TOTAL
                </div>
                <div>

                </div>
            </div>
            {productAdd.map((item: any) =>
                <div
                    className="productViewCartPage"
                    key={item.idVariant}>
                    <div className="imgNameViewCartPage">
                        <div>
                            <img
                                src={item.cart_img[0]}
                                alt={item.name}/>
                        </div>
                        <div className="nameProductViewCartPage">
                            <div>{item.name}</div>
                            <div>{item.size}</div>
                        </div>
                    </div>

                    <div className="priseProductViewCartPage">
                        <div className="mobViewCartPage">Prise:</div>
                        <div> ${item.newPrise}</div>
                    </div>
                    <div>
                        <QuantityTest
                            maxCount={maxCount}
                            minCount={minCount}
                            id={item.idVariant}
                            countVarirant={item.count}
                        />
                    </div>
                    <div className="totalViewCartPage">
                        <div className="mobViewCartPage">Total:</div>
                        <div>${item.newPrise * item.count}</div>
                    </div>
                    <div
                        className="deleteImgHeaderCartAdd"
                        onClick={(e) => deltaClick(e, item.idVariant)}
                    >
                        <img
                            src={imgDel}
                            alt={item.name}
                        />
                    </div>

                </div>
            )}
            <div className="totalFooterViewCartPage">
                <div className="buttonTotalFooterViewCartPage">
                    <MayButton
                        backgroundColor={"#000000"}
                        colorText={"white"}
                        linkTo={"products"}
                    >
                        continue shopping
                    </MayButton>
                </div>
                <div className="totalContainerFooterViewCartPage">
                    <div className="afterFooterViewCartPage">card totals</div>
                    <div className="totalTotalFooterViewCartPage">
                        <div>Total:</div>
                        <div>${total}</div>
                    </div>
                    <div className="buttonChekTotalFooterViewCartPage">
                        <MayButton
                            backgroundColor={"#2dbbf0"}
                            colorText={"white"}
                            linkTo={"checkout"}
                        >
                            proceed to checkout
                        </MayButton>
                    </div>
                </div>
            </div>

        </ViewCartPageStyle>
    );
};

export default ViewCartPage;