import {MayButtonType} from "./MayButtonType";
import {MayButtonStyle} from "./MayButtonStyle";
import {Link} from "react-router-dom";


export const MayButton: React.FC<MayButtonType> = ({children, onClick, backgroundColor, colorText, linkTo}) => {
    return (
        <MayButtonStyle
            onClick={onClick}
            backgroundColor={backgroundColor}
            colorText={colorText}
        >
            <Link to={linkTo}>{children}</Link>
        </MayButtonStyle>
    )
};