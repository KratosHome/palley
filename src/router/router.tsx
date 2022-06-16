import {Main} from "../pages/Main/Main";
import {NotFound} from "../pages/NotFound/NotFound";
import {ProductPage} from "../pages/ProductPage/ProductPage";

export const ProviderRouter: any[] = [
    {path: "/", component: <Main/>},
    {path: "/*", component: <NotFound/>},
    {path: "/:page/:id", component: <ProductPage/>},
    {path: "/:id", component: <ProductPage/>}
];
