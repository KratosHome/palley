import {useParams} from "react-router-dom";
import {Loader} from "../../components/Loader/Loader";
import {ProductPageItem} from "../../components/ProdcutPageComponent/ProductPageItem/ProductPageItem";
import {NotFound} from "../NotFound/NotFound";
import {useAppSelector} from "../../hooks/useRedux";

export const ProductPage = () => {
    const {loading, products} = useAppSelector(state => state.getProductReducer)

    const pageId = useParams();
    const getProductInProduct = products.filter(
        (item: any) => item.link === pageId.id
    );


    return (
        <>
            {
                loading
                    ?
                    <Loader/>
                    :
                    getProductInProduct.length === 0
                        ?
                        <NotFound/>
                        :
                        getProductInProduct.map((item: any) =>
                            <ProductPageItem key={item.id} item={item}/>
                        )
            }
        </>
    )
};