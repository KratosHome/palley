import {AskQuestionProductPageStyle} from "./AskQuestionProductPageStyle";
import {useEffect, useState} from "react";
import MayModal from "../../UL/MayModal/MayModal";
import MayInput from "../../UL/MayInput/MayInput";
import {useForm} from "react-hook-form";
import {FormValues} from "../../FooterComponent/FooterBlock1/FooterBlock1Type";
import {
    emailRegularExpressions,
    nameRegularExpressions,
    phoneRegularExpressions
} from "../../regularExpression/regularExpression";
import MayButtonForm from "../../UL/MayButtonForm/MayButtonForm";

export const AskQuestionProductPage = () => {

    const [visible, setVisible] = useState(false)


    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormValues>({mode: "onBlur"});

    const onSubmit = handleSubmit((data) => {
        setGetEmail(data);
        reset();
        setVisible(false)
    });


    const [show, setShow] = useState(true);

    const [getEmail, setGetEmail] = useState({})
    useEffect(() => {
        if (Object.keys(getEmail).length) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1000);
        }
    }, [getEmail])

    return (
        <AskQuestionProductPageStyle>
            <div onClick={() => setVisible(true)} className="titelModal">
                Size guide
            </div>
            <MayModal visible={visible} setVisible={setVisible}>
                <form onSubmit={onSubmit}>
                    <h1>Ask A Question</h1>
                    <MayInput
                        label={"Your Name"}
                        labelText={"Your Name"}
                        placeholder={""}
                        mustBeCompleted={true}
                        type={"text"}
                        register={register}
                        required={"Enter your Name"}
                        patternValue={nameRegularExpressions}
                        patternMessage={"Enter your Nam"}
                        errors={errors}
                        borderRadius={"0"}
                        border={"unset"}
                        backgroundColor={"#f4f4f4;"}
                    />
                    <MayInput
                        label={"Your Email"}
                        labelText={"Your Email"}
                        placeholder={""}
                        mustBeCompleted={true}
                        type={"email"}
                        register={register}
                        required={"Enter your Email"}
                        patternValue={emailRegularExpressions}
                        patternMessage={"Enter your Email correctly"}
                        errors={errors}
                        borderRadius={"0"}
                        border={"unset"}
                        backgroundColor={"#f4f4f4;"}
                    />
                    <MayInput
                        label={"Phone Number"}
                        labelText={"Phone Number"}
                        placeholder={""}
                        mustBeCompleted={true}
                        type={"number"}
                        register={register}
                        required={"Phone Number"}
                        patternValue={phoneRegularExpressions}
                        patternMessage={"Phone Number correctly"}
                        errors={errors}
                        borderRadius={"0"}
                        border={"unset"}
                        backgroundColor={"#f4f4f4;"}
                    />
                    <div className="inputAskMessogeInputProduct">
                        <MayInput
                            label={"Message"}
                            labelText={"Message"}
                            placeholder={""}
                            mustBeCompleted={true}
                            type={"text"}
                            register={register}
                            required={"Enter your Message"}
                            patternValue={nameRegularExpressions}
                            patternMessage={"Enter your Message"}
                            errors={errors}
                            borderRadius={"0"}
                            border={"unset"}
                            backgroundColor={"#f4f4f4;"}
                        />
                    </div>
                    <MayButtonForm
                        backgroundColor={"white"}
                        colorText={"black"}
                    >
                        SEND
                    </MayButtonForm>
                </form>
            </MayModal>
        </AskQuestionProductPageStyle>
    )
};