import {Main} from "../pages/Main/Main";
import {NotFound} from "../pages/NotFound/NotFound";

export const ProviderRouter: any[] = [
    {path: "/", component: <Main/>},
    {path: "/*", component: <NotFound/>}
];
