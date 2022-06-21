import {MayButtonFormType} from "./MayButtonFormType";
import {MayButtonFormStyle} from "./MayButtonFormStyle";

export const MayButtonForm: React.FC<MayButtonFormType> = ({children, onClick, backgroundColor, colorText,}) => {
    return (
        <MayButtonFormStyle
            onClick={onClick}
            backgroundColor={backgroundColor}
            colorText={colorText}
        >
            <div> {children}</div>
        </MayButtonFormStyle>
    )
};