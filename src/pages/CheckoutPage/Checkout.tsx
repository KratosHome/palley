import React, {useState} from 'react';
import BreadcrumbsComp from "../../components/BreadcrumbsComp/BreadcrumbsComp";
import MayInputSecond from "../../components/UL/MayInoutSecond/MayInoutSecond";
import {useForm} from "react-hook-form";
import {FormValues} from "../../components/FooterComponent/FooterBlock1/FooterBlock1Type";
import {CheckoutPageStyle} from "./CheckoutPageStyle";
import {useAppSelector} from "../../hooks/useRedux";
import {Link} from "react-router-dom";
import MayButtonForm from "../../components/UL/MayButtonForm/MayButtonForm";

const CheckoutPage = () => {
    const {productAdd} = useAppSelector(state => state.getProductInCard)

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
    return (
        <CheckoutPageStyle>
            <div className="containerChekCheckoutPage">
                <h1>checkout</h1>
                <BreadcrumbsComp/>
                <form onSubmit={onSubmit}>
                    <h2>Contact information</h2>
                    <div>Already have an account? <Link to={"/login"}> </Link> Log in</div>
                    <MayInputSecond
                        label={"Email or Phone adress"}
                        labelText={""}
                        type={"email"}
                        required={"Enter your email"}
                        register={register}
                        patternValue={emailRegularExpressions}
                        patternMessage={"Enter the email correctly"}
                        errors={errors}
                        placeholder={"Email or Phone adress"}
                        formSent={getEmail}
                    />
                    <h2>Shipping address</h2>
                    <MayInputSecond
                        label={"Email or Phone adress"}
                        labelText={""}
                        type={"email"}
                        required={"Enter your email"}
                        register={register}
                        patternValue={emailRegularExpressions}
                        patternMessage={"Enter the email correctly"}
                        errors={errors}
                        placeholder={"country"}
                        formSent={getEmail}
                    />
                    <div>
                        <Link to={"/cart"}>
                            Return to cart
                        </Link>
                        <MayButtonForm
                            backgroundColor={"blue"}
                            colorText={"red"}
                        >

                                Continue to shipping
                        </MayButtonForm>
                    </div>
                </form>
            </div>
            <div>
                {productAdd.map((item: any) =>
                    <div className="containerImgHeaderCartAdd">
                        <img
                            className="prductImgHeaderCartAdd"
                            src={item.cart_img[0]}
                            alt={item.name}
                        />
                        {item.name}
                        <div className="prodVariantImgHeaderCartAdd">
                            <div>size: {item.size}</div>
                            <div>QTY: {item.count}</div>
                            {item.prise !== null ?
                                <span className="oldPriseHeaderCartAdd">${item.prise}</span> : null}
                            <span>${item.newPrise}</span>
                        </div>
                    </div>
                )}
                <div>
                    <div>Subtotal</div>
                    <div>Shipping</div>
                </div>
                <div>Total</div>
            </div>


        </CheckoutPageStyle>
    )
        ;
};

export default CheckoutPage;