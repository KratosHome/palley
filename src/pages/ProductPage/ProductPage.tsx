import {useParams} from "react-router-dom";
import {ProductServer} from "../../API/TestServer/ProductServer";
import {ProductPageItem} from "../../components/ProdcutPageComponent/ProductPageItem/ProductPageItem";
import {NotFound} from "../NotFound/NotFound";

export const ProductPage = () => {

    const pageId = useParams();
    const getProductInProduct = ProductServer.filter(
        (item: any) => item.link === pageId.id
    );

    return (
        <>
            {
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