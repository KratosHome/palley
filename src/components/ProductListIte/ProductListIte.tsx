import {ProductListIteStyle} from "./ProductListIteStyle";
import {Link} from "react-router-dom";
import like from "./../../img/icons/like.png";
import search from "./../../img/icons/search.png";
import {ProductListIteType} from "./productListItemType";



export const ProductListIte: React.FC<ProductListIteType> = ({id, name, prise, newPrise, img}) => {

    return (
        <ProductListIteStyle>
            <Link to={`/products/${id}`}>
                <img src={img} alt={name}/>
                <div className="ProductListIte">{name}</div>
                <div className="ProductListItePrise">
                    {prise ?  <div className="ProductListItePriseOldPrise">${prise}</div>: null}
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