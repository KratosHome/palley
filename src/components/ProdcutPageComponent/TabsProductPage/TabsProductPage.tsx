import React, {memo, useState} from 'react';
import {TabsProductPageStyle} from "./TabsProductPageStyle";
import {CSSTransition} from "react-transition-group";
import TabsProductDiscription from "../TabsProductDiscription/TabsProductDiscription";
import AdditionalInfoProductPage from "../AdditionalInfoProductPage/AdditionalInfoProductPage";
import ReviewProductPage from "../ReviewProductPage/ReviewProductPage";


type tabsProductPageType = {
    discription: any
    brand: any
    productDiteils: any
    sizeFit: any
    aboutMe: any
    img: any
    reviews: any
}

const TabsProductPage = memo<tabsProductPageType>(({
                                                       discription,
                                                       brand,
                                                       productDiteils,
                                                       sizeFit,
                                                       aboutMe,
                                                       img,
                                                       reviews
                                                   }) => {

    const [tab, setTab] = useState(1);

    return (
        <TabsProductPageStyle>
            <div className="containerTabsProductPage">
                <div
                    className={tab === 1 ? "ProductTabsH1Activ" : "ProductTabsH1"}
                    onClick={() => setTab(1)}
                >
                    DESCRIPTION
                </div>
                <div
                    className={tab === 2 ? "ProductTabsH1Activ" : "ProductTabsH1"}
                    onClick={() => setTab(2)}
                >
                    ADDITIONAL INFORMATION
                </div>

                <div
                    className={tab === 3 ? "ProductTabsH1Activ" : "ProductTabsH1"}
                    onClick={() => setTab(3)}
                >
                    REVIEW
                </div>
            </div>
            <CSSTransition in={tab === 1} classNames="alert" timeout={300} unmountOnExit>
                <TabsProductDiscription
                    discription={discription}
                    brand={brand}
                    productDiteils={productDiteils}
                    sizeFit={sizeFit}
                    aboutMe={aboutMe}
                />
            </CSSTransition>
            <CSSTransition in={tab === 2} classNames="alert" timeout={300} unmountOnExit>
                <AdditionalInfoProductPage img={img}/>
            </CSSTransition>
            <CSSTransition in={tab === 3} classNames="alert" timeout={300} unmountOnExit>
                <ReviewProductPage review={reviews}/>
            </CSSTransition>

        </TabsProductPageStyle>
    );
});

export default TabsProductPage;