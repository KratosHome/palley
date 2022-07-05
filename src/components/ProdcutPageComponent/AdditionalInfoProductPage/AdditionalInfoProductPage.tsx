import React, {memo} from 'react';
import {AdditionalInfoProductPageStyle} from "./AdditionalInfoProductPageStyle";


type AdditionalInfoProductPageType = {
    img: any
}

const AdditionalInfoProductPage = memo<AdditionalInfoProductPageType>(({img}) => {
    return (
        <AdditionalInfoProductPageStyle>
            <div className="container poductInfoContainer">
                <div className="col-sx-4 col-sm-4 col-md-4 col-ld-4">
                    <div>MORE INFOMATION TO YOU</div>
                    <h5>Things You Need To Know</h5>
                    <div>
                        We use industry standard SSL encryption to protect your
                        details. Potentially sensitive information such as your name,
                        address and card details are encoded so they can only be read
                        on the secure server.
                    </div>
                    <ul>
                        <li>Safe Payments</li>
                        <li>Accept Credit Cart</li>
                        <li>Different Payment Method</li>
                        <li>Price Include VAT</li>
                        <li>Easy To Order</li>
                    </ul>
                </div>
                <div className="col-sx-4 col-sm-4 col-md-4 col-ld-4">
                    <ul>
                        <h5>Express Delivery</h5>
                        <li>Europe & USA within 2-4 days</li>
                        <li>Rest of the world within 3-7 days</li>
                        <li>Selected locations</li>
                    </ul>
                    <ul>
                        <h5>Need More Information</h5>
                        <li>Orders & Shipping</li>
                        <li>Returns & Refunds</li>
                        <li>Payments</li>
                        <li>Your Orders</li>
                    </ul>
                </div>
                <div className="col-sx-4 col-sm-4 col-md-4 col-ld-4">
                    <img src={img} alt={img} className="poductInfoImg"/>
                </div>
            </div>
        </AdditionalInfoProductPageStyle>
    );
});

export default AdditionalInfoProductPage;