import {BanerMainContentStyle} from "./BanerMainContentStyle";
import {BanerMainContentType} from "./BanerMainContentType";
import {Link} from "react-router-dom";
import {memo} from "react";


const BanerMainContent: React.FC<BanerMainContentType> = ({name, prise, path}) => {
    return (
        <BanerMainContentStyle>
            <h1 className="BanerMainContentH1">{name}</h1>
            <div className="BanerMainContentFrom">
                <span>from </span>
                <div>${prise}</div>
            </div>
            <Link to={path}>
                shpo now
            </Link>
        </BanerMainContentStyle>
    )
};

export default memo(BanerMainContent);