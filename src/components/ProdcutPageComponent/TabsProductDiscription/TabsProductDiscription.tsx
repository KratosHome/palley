import React, {memo} from 'react';
import {TabsProductDiscriptionStyle} from "./TabsProductDiscriptionStyle";

type TabsProductDiscriptionType = {
    discription: any
    brand: any
    productDiteils: any
    sizeFit: any
    aboutMe: any
}

const TabsProductDiscription = memo<TabsProductDiscriptionType>(({
                                                                     discription,
                                                                     brand,
                                                                     productDiteils,
                                                                     sizeFit,
                                                                     aboutMe,
                                                                 }) => {
    return (
        <TabsProductDiscriptionStyle>
            <p>{discription}</p>
            <div className="brendTabsProductDiscription">
                <img src="./../img/product/brend_img.jpg" alt="brend"/>
                <div>
                    <h5>BRAND</h5>
                    <p>{brand}</p>
                </div>
            </div>
            <div className="liTabsProductDiscription">
                <div>
                    <h5>PRODUCT DETAILS</h5>
                    <ul>
                        {productDiteils.map((i: any) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>SIZE & FIT</h5>
                    <ul>
                        {sizeFit.map((i: any) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>ABOUT ME</h5>
                    <ul>
                        {aboutMe.map((i: any) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </TabsProductDiscriptionStyle>
    );
});

export default TabsProductDiscription;