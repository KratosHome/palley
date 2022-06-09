import {FootetStyle} from "./MayInputStyle";
import {MayInputType} from "./MayInputType";



export const MayInput: React.FC<MayInputType> = ({
                                                     label,
                                                     labelText,
                                                     type,
                                                     register,
                                                     patternValue,
                                                     patternMessage,
                                                     errors,
                                                     mustBeCompleted,
                                                     placeholder,

                                                 }) => {


    return (
        <FootetStyle>
            <label
                htmlFor={label}
            >
                {labelText}
                {mustBeCompleted ? <span>*</span> : null}
            </label>
            <input
                id={label}
                type={type}
                placeholder={placeholder}
                {...register(label, {
                    required: patternMessage,
                    pattern: {
                        value: patternValue,
                        message: patternMessage,
                    },
                })}
            />
            {errors?.[label]?.message && <div>{errors?.[label]?.message}</div>}

        </FootetStyle>
    )
};