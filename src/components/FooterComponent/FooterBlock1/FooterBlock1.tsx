import {useForm} from "react-hook-form";
import logo from "../../../img/icons/logo.png";
import {FormValues} from "./FooterBlock1Type";
import {FootetBlock1Style} from "./FooterBlock1Style";
import {MayInput} from "../../UL/MayInput/MayInput";
import {useEffect, useState} from "react";



export const FooterBlock1 = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormValues>({mode: "onBlur"});
    const emailRegularExpressions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [getEmail, setGetEmail] = useState({})

    const onSubmit = handleSubmit((data) => {
        setGetEmail(data);
        reset();
    });

    const [show, setShow] = useState(false);
    useEffect(() => {
        if (Object.keys(getEmail).length) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 1000);
        }
    }, [getEmail])

    return (
        <FootetBlock1Style>
            <img className="logo" src={logo} alt="Palley"/>
            <div className="footerSubscribe">
                Subscribe our newsletter and get discount 30% off
            </div>
            <form onSubmit={onSubmit}>
                <MayInput
                    label={"Tour email address.."}
                    placeholder={"Tour email address.."}
                    type={"email"}
                    register={register}
                    required={"Enter your email"}
                    patternValue={emailRegularExpressions}
                    patternMessage={"Enter the email correctly"}
                    errors={errors}
                    mustBeCompleted={false}
                    formSent={getEmail}
                />
                <button className="FooterBlock1Button">
                    <svg
                        className="FooterBlock1SVG"
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                    >
                        <path
                            d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path>
                        <path
                            d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path>
                    </svg>
                </button>
                {show ? <div className="sent">sent...</div> : null}
            </form>

        </FootetBlock1Style>
    )
};