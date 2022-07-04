import React, {memo, useState} from 'react';
import {QuantityStyle} from "./QuantityStyle";
import {changeCount} from "../../../store/reducer/getProductInCard";
import {useAppDispatch} from "../../../hooks/useRedux";


type QuantityType = {
    maxCount: any
    minCount: any
    id: any
    countVarirant: any
}
const QuantityTest = memo<QuantityType>(({maxCount, minCount, id, countVarirant}) => {

    const [count, setCount] = useState(countVarirant);
    const dispatch = useAppDispatch()

    function ProductIncriment(e: any) {
        e.preventDefault();
        setCount(count + 1);
    }

    function ProducttDecrement(e: any) {
        e.preventDefault();
        setCount(count - 1);
    }


    dispatch(changeCount({id, count}))


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

export default QuantityTest;