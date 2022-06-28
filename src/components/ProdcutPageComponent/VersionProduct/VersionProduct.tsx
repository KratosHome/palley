import {VersionProductStyle} from "./VersionProductStyle";
import {memo, useState} from "react";
import MayButtonForm from "../../UL/MayButtonForm/MayButtonForm";
import {useAppDispatch, useAppSelector} from "../../../hooks/useRedux";
import {getProductInCard} from "../../../store/reducer/getProductInCard";
import MayButton from "../../UL/MayButton/MayButton";
import ByuItNowProductPage from "../ByuItNowProductPage/ByuItNowProductPage";


type versionProductType = {
    productProd: any
    product: any
    idVariant: any
}
const VersionProduct = memo<versionProductType>(({productProd, product, idVariant}) => {

    const [size, setSize] = useState(productProd[0].size)
    const [id, setId] = useState(productProd[0].id)
    const [maxCount, setMaxCount] = useState(productProd[0].count)

    const dispatch = useAppDispatch()
    const {getProdcut, getVariant} = getProductInCard.actions


    const handleClick = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => {
        setSize(e.currentTarget.value)
        setId(e.currentTarget.id)
    }


    const [count, setCount] = useState(1);

    const minCount = 1;

    function ProductIncriment(e: any) {
        e.preventDefault();
        setCount(count + 1);
    }

    function ProducttDecrement(e: any) {
        e.preventDefault();
        setCount(count - 1);
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getProdcut(product))
        dispatch(getVariant({id, size, product, count}))
    }


    const {productAdd} = useAppSelector(state => state.getProductInCard)


    return (
        <VersionProductStyle>
            <div className="textVersionProduct">SIZE</div>
            <form onSubmit={handleSubmit}>
                <div className="variantContainerVersionProduct">
                    {productProd.map((it: any) =>
                        <div key={it.id}>
                            <input
                                id={it.id}
                                className={it.size === size ? "selectedVersionProduct" : "versionProduct"}
                                onClick={handleClick}
                                type="button"
                                name={"lable"}
                                key={it.id}
                                value={it.size}
                            />
                        </div>
                    )}
                </div>
                <div className="countContainerVersionProduct">
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
                </div>
                {
                    productAdd.some((item: any) => item.idVariant === id)
                        ?
                        <div className="containerButtonVersionProduct">
                            <MayButton linkTo={"/card"} backgroundColor={"#2dbbf0"} colorText={"white"}>
                                go to cart
                            </MayButton>
                        </div>
                        :
                        <div className="containerButtonVersionProduct">
                            <MayButtonForm backgroundColor={"#2dbbf0"} colorText={"white"}>
                                add to cart
                            </MayButtonForm>
                        </div>
                }
                <ByuItNowProductPage/>
            </form>
        </VersionProductStyle>
    )
});
export {VersionProduct}