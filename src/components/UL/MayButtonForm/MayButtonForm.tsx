import {MayButtonFormType} from "./MayButtonFormType";
import {MayButtonFormStyle} from "./MayButtonFormStyle";
import {memo} from "react";

const MayButtonForm: React.FC<MayButtonFormType> = ({children, onClick, backgroundColor, colorText,}) => {
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
export default memo(MayButtonForm);