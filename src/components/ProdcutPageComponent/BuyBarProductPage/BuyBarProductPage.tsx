import {BuyBarProductPageType} from "./BuyBarProductPageType";
import {BuyBarProductPageStyle} from "./BuyBarProductPageStyle";
import {memo} from "react";


const BuyBarProductPage: React.FC<BuyBarProductPageType> = ({remainder}) => {
    const fillerRelativePercentage = remainder / 100 * 200
    return (
        <BuyBarProductPageStyle>
            <div className="SoldInTwelveHours">
                {fillerRelativePercentage > 100 ? "" : "HURRY! ONLY"} <span>{remainder}</span>LEFT IN STOCK
            </div>
            <div className="wrapper">
                <div className="barContainer">
                    <div className="filler"
                         style={{width: `${fillerRelativePercentage > 100 ? 100 : fillerRelativePercentage}%`}}>
                        <div
                            className="fillerBackground"
                            style={{width: `${fillerRelativePercentage > 100 ? 100 : fillerRelativePercentage}%`}}
                        />
                    </div>
                </div>
            </div>
        </BuyBarProductPageStyle>
    )
};
export default memo(BuyBarProductPage);