import {ProductListIteStyle} from "./ProductListIteStyle";
import {Link} from "react-router-dom";
import like from "./../../img/icons/like.png";
import search from "./../../img/icons/search.png";
import {ProductListIteType} from "./productListItemType";
import {memo, useEffect, useState} from "react";


const ProductListIte: React.FC<ProductListIteType> = ({id, name, prise, newPrise, img, page, link}) => {

    const [sale, setSale] = useState(1)

    useEffect(() => {
        if (prise && newPrise != null) {
            let calculate = ((prise - newPrise) / prise * 100)
            setSale(Math.floor((calculate)))
        }
    }, [prise, newPrise])


    return (
        <ProductListIteStyle>
            <Link to={`${page}${link}`}>
                <img src={img} alt={name}/>
                {prise && newPrise != null ?
                    <figure>
                        <figcaption>-{sale}%</figcaption>
                    </figure>
                    : null}
                <div className="ProductListIte">{name}</div>
                <div className="ProductListItePrise">
                    {prise ? <div className="ProductListItePriseOldPrise">${prise}</div> : null}
                    <div>${newPrise}</div>
                </div>
                <div className="ProductListIteHover">
                    <div className="ProductListIteHoverSelectOprions">•••</div>
                    <div className="ProductListIteHoverSelectQuickview">
                        {" "}
                        <img alt="search" src={search}/>
                    </div>
                    <div className="ProductListIteHoverSelectAddLikes">
                        {" "}
                        <img alt="like" src={like}/>
                    </div>
                </div>
            </Link>
        </ProductListIteStyle>
    )
};

export default memo(ProductListIte);