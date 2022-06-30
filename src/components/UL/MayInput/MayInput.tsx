import {MayInputStyle} from "./MayInputStyle";
import {MayInputType} from "./MayInputType";
import {memo} from "react";


const MayInput: React.FC<MayInputType> = ({
                                              label,
                                              labelText,
                                              type,
                                              register,
                                              patternValue,
                                              patternMessage,
                                              errors,
                                              mustBeCompleted,
                                              placeholder,
                                              borderRadius,
                                              border,
                                              backgroundColor
                                          }) => {


    return (
        <MayInputStyle
            borderRadius={borderRadius}
            border={border}
            backgroundColor={backgroundColor}
        >
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

        </MayInputStyle>
    )
};

export default memo(MayInput);