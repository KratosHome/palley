import Rating from "@mui/material/Rating";
import {ProductTitleType} from "./ProductTitleType";
import {ProductTitleStyle} from "./ProductTitleStyle";
import {memo} from "react";


const ProductTitle: React.FC<ProductTitleType> = ({name, prise, newPrise, grade}) => {
    return (
        <ProductTitleStyle>
            <h1>{name}</h1>
            <div className="addToWishListProductPageItem"/>
            {prise ?
                <div className="priseContainerProductTitle">
                    <span className="priseProductPageItem">${prise} USD </span>
                    <span className="newPriseProductPageItem">${newPrise} USD</span>
                </div> :
                <div className="priseContainerProductTitle">
                    <span className="newPriseProductPageItem">${newPrise} USD</span>
                </div>
            }
            <div className="ratingProductPageItem">
                <Rating name="size-medium" defaultValue={grade} readOnly/>
                {grade === 0 ?
                    <>
                        <p>No Rating</p>
                    </>
                    :
                    <></>
                }
            </div>
        </ProductTitleStyle>
    )
};

export default memo(ProductTitle);