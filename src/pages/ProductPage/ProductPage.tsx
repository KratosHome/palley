import {useParams} from "react-router-dom";
import {ProductServer} from "../../API/TestServer/ProductServer";
import {ProductPageItem} from "../../components/ProdcutPageComponent/ProductPageItem/ProductPageItem";

export const ProductPage = () => {

    const pageId = useParams();
    const getProductInProduct = ProductServer.filter(
        (item: any) => item.link === pageId.id
    );

    return (
        <>
            {getProductInProduct.map((item: any) =>
                <ProductPageItem key={item.id} item={item}/>
            )}
        </>
    )
};