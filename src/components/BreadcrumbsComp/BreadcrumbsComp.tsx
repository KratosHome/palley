import {Link, useNavigate} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';

export const BreadcrumbsComp: React.FC<{}> = () => {

    const breadcrumbs = useBreadcrumbs();

    return (
        <div>
            {breadcrumbs.map(({match, breadcrumb}) =>
                <div key={match.pathname}>
                    <Link to={match.pathname}>
                        {breadcrumb}
                    </Link>
                </div>
            )}
        </div>
    );
};
