import React, {memo} from 'react';
import {QuantityStyle} from "./QuantityStyle";


type QuantityType = {
    ProductIncriment: any
    ProducttDecrement: any
    count: any
    maxCount: any
    minCount: any
}
const Quantity = memo<QuantityType>(({ProductIncriment, ProducttDecrement, count, maxCount, minCount}) => {


    return (
        <QuantityStyle>
            <button
                className="incrementVersionProduct"
                onClick={(e) => ProductIncriment(e)}
                disabled={count >= maxCount}
            />
            <input className="countInputVersionProduct" value={count} readOnly/>
            <button
                className="decrementVersionProduct"
                onClick={(e) => ProducttDecrement(e)}
                disabled={count <= minCount}
            />
        </QuantityStyle>
    );
});

export default Quantity;