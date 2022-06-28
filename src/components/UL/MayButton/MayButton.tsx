import {MayButtonType} from "./MayButtonType";
import {MayButtonStyle} from "./MayButtonStyle";
import {Link} from "react-router-dom";
import {memo} from "react";


const MayButton: React.FC<MayButtonType> = ({children, onClick, backgroundColor, colorText, linkTo}) => {
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
export default memo(MayButton);