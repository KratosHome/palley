
import {memo} from "react";
import {MayInputSecondStyle} from "./MayInoutSecondStyle";
import {MayInputSecondType} from "./MayInoutSecondType";


const MayInputSecond: React.FC<MayInputSecondType> = ({
                                              label,
                                              labelText,
                                              type,
                                              register,
                                              patternValue,
                                              patternMessage,
                                              errors,
                                              placeholder,
                                          }) => {


    return (
        <MayInputSecondStyle>
            <label
                htmlFor={label}
            >
                {labelText}
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

        </MayInputSecondStyle>
    )
};

export default memo(MayInputSecond);