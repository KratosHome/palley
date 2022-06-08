import {MayButtonType} from "./MayButtonType";
import {MayButtonStyle} from "./MayButtonStyle";


export const MayButton: React.FC<MayButtonType> = ({children, onClick, ...props}) => {
    return (
        <MayButtonStyle
            {...props}
            onClick={onClick}
            className="MayButton"
        >
            <span>{children}</span>
        </MayButtonStyle>
    )
};