import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {BreadcrumbsCompStyle} from "./BreadcrumbsCompStyle";
import {memo} from "react";

export const BreadcrumbsComp = memo(() => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <BreadcrumbsCompStyle>
            {breadcrumbs.map(({match, breadcrumb}) =>
                <Link to={match.pathname} key={match.pathname}>
                    {breadcrumb}
                </Link>
            )}
        </BreadcrumbsCompStyle>
    );
});
