import {useParams} from "react-router-dom";
import {Loader} from "../../components/Loader/Loader";
import {ProductPageItem} from "../../components/ProdcutPageComponent/ProductPageItem/ProductPageItem";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {NotFound} from "../NotFound/NotFound";

export const ProductPage = () => {

    const {loading, products} = useTypeSelector(
        (state) => state.getProduct);


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