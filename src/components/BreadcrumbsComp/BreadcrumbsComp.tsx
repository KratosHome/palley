import {Link} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {BreadcrumbsCompStyle} from "./BreadcrumbsCompStyle";

export const BreadcrumbsComp: React.FC<{}> = () => {

    const breadcrumbs = useBreadcrumbs();

    return (
        <BreadcrumbsCompStyle>
            {breadcrumbs.map(({match, breadcrumb}) =>
                    <Link to={match.pathname} key={match.pathname} >
                        {breadcrumb}
                    </Link>
            )}
        </BreadcrumbsCompStyle>
    );
};
