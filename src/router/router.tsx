import Checkout from "../pages/CheckoutPage/Checkout";
import {Main} from "../pages/Main/Main";
import {NotFound} from "../pages/NotFound/NotFound";
import {ProductPage} from "../pages/ProductPage/ProductPage";
import ProductCatalogPage from "../pages/ProductCatalogPage/ProductCatalogPage";

export const ProviderRouter: any[] = [
    {path: "/", component: <Main/>},
    {path: "/*", component: <NotFound/>},
    {path: "/checkout", component: <Checkout/>},
    {path: "/products", component: <ProductCatalogPage/>},
    {path: "/:page/:id", component: <ProductPage/>},
    {path: "/:id", component: <ProductPage/>}
];
