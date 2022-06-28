import {BestSelerStyles} from "./BestSelerStyles";
import ProductListIte from "../../ProductListIte/ProductListIte";
import {BestSelerType} from "./BestSelerType";
import {memo} from "react";


const BestSeler: React.FC<BestSelerType> = ({h3, text, products}) => {
    return (
        <BestSelerStyles>
            <h3 className="BestSelerH3">{h3}</h3>
            <div className="BestSelerText">{text}</div>
            <div className="BestSelerContainer">
                {products.map((item: any) =>
                    <ProductListIte
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        prise={item.prise}
                        newPrise={item.newPrise}
                        img={item.img}
                        link={item.link}
                        page={""}
                    />
                )}
            </div>
        </BestSelerStyles>
    )
};
export default memo(BestSeler);