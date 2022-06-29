import React, {memo} from 'react';
import MayButton from '../../UL/MayButton/MayButton';
import {BuyItNowProductPageStyle} from "./BuyItNowProductPageStyle";



const ByuItNowProductPage = () => {

    return (
        <BuyItNowProductPageStyle>
            <div className="containerButtonBuyItNow">
                <MayButton
                    backgroundColor={"#000000"}
                    colorText={"white"}
                    linkTo={"card"}
                >
                        buy it now
                </MayButton>
            </div>
        </BuyItNowProductPageStyle>
    );
};

export default memo(ByuItNowProductPage);