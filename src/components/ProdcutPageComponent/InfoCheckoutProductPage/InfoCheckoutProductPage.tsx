import React from 'react';
import {InfoCheckoutProductPageStyle} from './InfoCheckoutProductPageStyle';
import icon1 from "../../../img/icons/product_icon1.png"
import icon2 from "../../../img/icons/product_icon2.png"
import icon3 from "../../../img/icons/product_icon3.png"
import icon4 from "../../../img/icons/product_icon4.png"

const InfoCheckoutProductPage = () => {
    return (
        <InfoCheckoutProductPageStyle>
            <div className="ProductInfo">
                <img src={icon1} alt="icon1"/>
                <span>WORLDWIDE SHIPPING</span>
            </div>
            <div className="ProductInfo">
                <img src={icon2} alt="icon2"/>
                <span>FREE 60-DAY RETURNS</span>
            </div>
            <div className="ProductInfo">
                <img src={icon3} alt="icon3"/>
                <span>24 MONTH WARRANTY</span>
            </div>
            <div className="ProductInfo">
                <img src={icon4} alt="icon4"/>
                <span>100% SECRUE CHECKOUT</span>
            </div>
        </InfoCheckoutProductPageStyle>
    );
};

export default InfoCheckoutProductPage;