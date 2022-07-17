import Checkout from "../pages/CheckoutPage/Checkout";
import {Main} from "../pages/Main/Main";
import {NotFound} from "../pages/NotFound/NotFound";
import {ProductPage} from "../pages/ProductPage/ProductPage";
import ProductCatalogPage from "../pages/ProductCatalogPage/ProductCatalogPage";
import ViewCartPage from "../pages/ViewCartPage/ViewCartPage";
import AboutUs from "../pages/AboutUs/AboutUs";

export const ProviderRouter: any[] = [
    {path: "/", component: <Main/>},
    {path: "/*", component: <NotFound/>},
    {path: "/checkout", component: <Checkout/>},
    {path: "/:page/checkout", component: <Checkout/>},
    {path: "/card", component: <ViewCartPage/>},
    {path: "/products", component: <ProductCatalogPage/>},
    {path: "/about_ass", component: <AboutUs/>},
    {path: "/:page/:id", component: <ProductPage/>},
    {path: "/:page/:page/:id", component: <ProductPage/>},
    {path: "/:page/products/", component: <ProductCatalogPage/>},
    {path: "/:id", component: <ProductPage/>}
];
