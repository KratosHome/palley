import {MayButtonType} from "./MayButtonType";
import {MayButtonStyle} from "./MayButtonStyle";
import {Link} from "react-router-dom";
import {FC, memo} from "react";


export const MayButton: FC<MayButtonType> = memo(({children, onClick, backgroundColor, colorText, linkTo}) => {
    return (
        <MayButtonStyle
            onClick={onClick}
            backgroundColor={backgroundColor}
            colorText={colorText}
        >
            <Link to={linkTo}>{children}</Link>
        </MayButtonStyle>
    )
});