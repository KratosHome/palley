import {VersionProductStyle} from "./VersionProductStyle";
import {memo, useState} from "react";
import MayButtonForm from "../../UL/MayButtonForm/MayButtonForm";
import {useAppDispatch, useAppSelector} from "../../../hooks/useRedux";
import {getProductInCard} from "../../../store/reducer/getProductInCard";
import MayButton from "../../UL/MayButton/MayButton";
import Quantity from "../../UL/Quantity/Quantity";


type versionProductType = {
    productProd: any
    product: any

}
const VersionProduct = memo<versionProductType>(({productProd, product}) => {

    const [size, setSize] = useState(productProd[0].size)
    const [id, setId] = useState(productProd[0].id)

    let maxCount = productProd[0].count
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
                <Quantity
                    ProductIncriment={ProductIncriment}
                    ProducttDecrement={ProducttDecrement}
                    count={count}
                    maxCount={maxCount}
                    minCount={minCount}
                />
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
            </form>
        </VersionProductStyle>
    )
});
export {VersionProduct}