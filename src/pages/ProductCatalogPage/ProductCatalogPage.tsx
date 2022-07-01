import React from 'react';
import {useAppSelector} from "../../hooks/useRedux";
import {Loader} from "../../components/Loader/Loader";
import {NotFound} from "../NotFound/NotFound";
import ProductListIte from "../../components/ProductListIte/ProductListIte";
import {ProductCatalogPageStyle} from "./ProductCatalogPageStyle";

const ProductCatalogPage = () => {
    const {loading, products} = useAppSelector(state => state.getProductReducer)


    return (
        <ProductCatalogPageStyle>
            {
                loading
                    ?
                    <Loader/>
                    :
                    products.length === 0
                        ?
                        <NotFound/>
                        :
                        <>
                            <h1 className="BestSelerH3">Products</h1>

                            <div className="containerProductCatalogPage">
                                {products.map((item: any) =>
                                    <ProductListIte
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        prise={item.prise}
                                        newPrise={item.newPrise}
                                        img={item.cart_img[0]}
                                        link={item.link}
                                        page={""}
                                    />
                                )}
                            </div>
                        </>
            }
        </ProductCatalogPageStyle>
    );
};

export default ProductCatalogPage;