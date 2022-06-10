import {NotFoundStyle} from "./NotFoundStyle"
import {Link} from "react-router-dom";

export const NotFound: React.FC<{}> = () => {
    return (
        <NotFoundStyle>
            <h1>404</h1>
            <h2>Oops! That Page Can’t Be Found.</h2>
            <p>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</p>
            <p>Please return to <Link to="/">Home page</Link></p>
        </NotFoundStyle>
    )
};