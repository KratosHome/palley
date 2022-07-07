import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {FormValues} from "../../FooterComponent/FooterBlock1/FooterBlock1Type";
import personal_area from "../../../img/icons/personal_area.png";
import MayModal from '../../UL/MayModal/MayModal';
import MayButtonForm from "../../UL/MayButtonForm/MayButtonForm";
import MayInput from "../../UL/MayInput/MayInput";
import {
    emailRegularExpressions,
    nameRegularExpressions,
} from "../../regularExpression/regularExpression";
import {Link} from "react-router-dom";
import logo from "../../../img/icons/logo.png";
import {InputCabinetStyle} from "./InputCabinetStyle";

const InputCabinet = () => {

    const [visible, setVisible] = useState(false)
    const [visibleForgtePass, setVisibleForgtePass] = useState(false)
    const [visibleRegisterNow, setVisibleRegisterNow] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormValues>({mode: "onBlur"});

    const onSubmit = handleSubmit((data) => {
        setGetInput(data);
        reset();
        setVisible(false)
    });


    const [show, setShow] = useState(true);
    const [getInput, setGetInput] = useState({})
    useEffect(() => {
        if (Object.keys(getInput).length) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1000);
        }
    }, [getInput, show])


    return (
        <InputCabinetStyle>
            <img
                onClick={() => setVisible(true)}
                className="headerCabinet"
                src={personal_area} alt="headerCabinet"
            />
            <MayModal visible={visible} setVisible={setVisible}>
                <>
                    <form
                        onSubmit={onSubmit}
                        className={visibleForgtePass || visibleRegisterNow ? "nonvisibleForgtePass" : ""}

                    >
                        <Link to="/" className="containerlogoInputCabinet">
                            <img src={logo} alt="Palley"/>
                        </Link>
                        <h1>Great to have you back!</h1>
                        <MayInput
                            label={"email"}
                            labelText={""}
                            placeholder={"email"}
                            mustBeCompleted={false}
                            type={"email"}
                            register={register}
                            required={"Enter your Email"}
                            patternValue={emailRegularExpressions}
                            patternMessage={"Enter your Email correctly"}
                            errors={errors}
                            borderRadius={"0"}
                            border={"1px solid #bebebe"}
                            backgroundColor={"#ffffff;"}
                        />
                        <MayInput
                            label={"password"}
                            labelText={""}
                            placeholder={"password"}
                            mustBeCompleted={false}
                            type={"password"}
                            register={register}
                            required={"Phone password"}
                            patternValue={nameRegularExpressions}
                            patternMessage={"Phone password correctly"}
                            errors={errors}
                            borderRadius={"0"}
                            border={"1px solid #bebebe"}
                            backgroundColor={"#ffffff;"}
                        />
                        <div
                            className="forgetPasswordInputCabinet"
                            onClick={() => setVisibleForgtePass(!visibleForgtePass)}
                        >Forgot your password?
                        </div>
                        <MayButtonForm
                            backgroundColor={"black"}
                            colorText={"white"}
                        >
                            LOG IN
                        </MayButtonForm>
                        <div className="donHaveAccountInputCabinet">
                            <span>Don’t have an account?</span>
                            <span
                                onClick={() => setVisibleRegisterNow(!visibleRegisterNow)}
                            >Register now</span>
                        </div>
                    </form>
                    <div
                        className={visibleForgtePass ? "visibleForgtePass" : "nonvisibleForgtePass"}
                    >
                        <h1>RESET YOUR PASSWORD</h1>
                        <form onSubmit={onSubmit}>
                            <MayInput
                                label={"email"}
                                labelText={""}
                                placeholder={"email"}
                                mustBeCompleted={false}
                                type={"email"}
                                register={register}
                                required={"Enter your Email"}
                                patternValue={emailRegularExpressions}
                                patternMessage={"Enter your Email correctly"}
                                errors={errors}
                                borderRadius={"0"}
                                border={"1px solid #bebebe"}
                                backgroundColor={"#ffffff;"}
                            />
                            <MayButtonForm
                                backgroundColor={"black"}
                                colorText={"white"}
                            >
                                LOG IN
                            </MayButtonForm>
                            <div
                                className="donHaveAccountInputCabinet"
                                onClick={() => setVisibleForgtePass(!visibleForgtePass)}
                            >
                                <span>Cansel</span>
                            </div>
                        </form>
                    </div>
                    <div
                        className={visibleRegisterNow ? "visibleRegisterNow" : "nonvisibleForgtePass"}
                    >
                        <form onSubmit={onSubmit}>
                            <h1>REGISTER</h1>
                            <MayInput
                                label={"email"}
                                labelText={""}
                                placeholder={"email"}
                                mustBeCompleted={false}
                                type={"email"}
                                register={register}
                                required={"Enter your Email"}
                                patternValue={emailRegularExpressions}
                                patternMessage={"Enter your Email correctly"}
                                errors={errors}
                                borderRadius={"0"}
                                border={"1px solid #bebebe"}
                                backgroundColor={"#ffffff;"}
                            />
                            <MayInput
                                label={"password"}
                                labelText={""}
                                placeholder={"password"}
                                mustBeCompleted={false}
                                type={"password"}
                                register={register}
                                required={"Phone password"}
                                patternValue={nameRegularExpressions}
                                patternMessage={"Phone password correctly"}
                                errors={errors}
                                borderRadius={"0"}
                                border={"1px solid #bebebe"}
                                backgroundColor={"#ffffff;"}
                            />
                            <MayButtonForm
                                backgroundColor={"black"}
                                colorText={"white"}
                            >
                                LOG IN
                            </MayButtonForm>
                            <div
                                className="donHaveAccountInputCabinet"
                                onClick={() => setVisibleRegisterNow(!visibleRegisterNow)}
                            >

                                <span>Cansel</span>
                            </div>
                        </form>
                    </div>
                </>
            </MayModal>
        </InputCabinetStyle>
    );
};

export default InputCabinet;