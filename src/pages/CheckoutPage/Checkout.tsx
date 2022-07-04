import React, {useEffect, useState} from 'react';
import BreadcrumbsComp from "../../components/BreadcrumbsComp/BreadcrumbsComp";
import MayInput from "../../components/UL/MayInput/MayInput";
import {useForm} from "react-hook-form";
import {FormValues} from "../../components/FooterComponent/FooterBlock1/FooterBlock1Type";
import {CheckoutPageStyle} from "./CheckoutPageStyle";
import {useAppSelector} from "../../hooks/useRedux";
import {Link} from "react-router-dom";
import MayButtonForm from "../../components/UL/MayButtonForm/MayButtonForm";
import {emailRegularExpressions, nameRegularExpressions} from "../../components/regularExpression/regularExpression";
import MayModal from "../../components/UL/MayModal/MayModal";
import {useNavigate} from 'react-router-dom';


const CheckoutPage = () => {
    const {productAdd} = useAppSelector(state => state.getProductInCard)
    let total = productAdd.reduce((accumulator: any, friend: any) => accumulator + friend.newPrise * friend.count, 0)

    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormValues>({mode: "onBlur"});

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
                navigate("/")
            }, 1000);
        }
    }, [getEmail, show])
    return (
        <CheckoutPageStyle>
            <div className="containerChekCheckoutPage">
                <h1>checkout</h1>
                <BreadcrumbsComp/>
                <form onSubmit={onSubmit} className="containeForm">
                    <div className="containeH2CheckoutPage">
                        <h2>Contact information</h2>
                        <div><span> Already have an account?</span> <Link to={"/login"}>Log in</Link></div>
                    </div>
                    <MayInput
                        label={"Email or Phone adress"}
                        labelText={""}
                        type={"email"}
                        required={"Enter your email"}
                        register={register}
                        patternValue={emailRegularExpressions}
                        patternMessage={"Enter the email correctly"}
                        errors={errors}
                        mustBeCompleted={false}
                        placeholder={"Email or Phone adress"}
                        formSent={getEmail}
                        borderRadius={"5px"}
                        border={"1px solid rgba(0,0,0, 0.3);"}
                        backgroundColor={"white"}
                    />
                    <h2 className="h2opingAdres">Shipping address</h2>
                    <MayInput
                        label={"Country"}
                        labelText={""}
                        type={"text"}
                        required={"Enter your country"}
                        register={register}
                        patternValue={nameRegularExpressions}
                        patternMessage={"Enter the email correctly"}
                        errors={errors}
                        mustBeCompleted={false}
                        placeholder={"Country"}
                        formSent={getEmail}
                        borderRadius={"5px"}
                        border={"1px solid rgba(0,0,0, 0.3);"}
                        backgroundColor={"white"}
                    />
                    <div className="containerFirsNameLatnameCheckoutPage">
                        <MayInput
                            label={"First name"}
                            labelText={""}
                            type={"text"}
                            required={"Enter your email"}
                            register={register}
                            patternValue={nameRegularExpressions}
                            patternMessage={"Enter first name"}
                            errors={errors}
                            mustBeCompleted={false}
                            placeholder={"First name"}
                            formSent={getEmail}
                            borderRadius={"5px"}
                            border={"1px solid rgba(0,0,0, 0.3);"}
                            backgroundColor={"white"}
                        />
                        <MayInput
                            label={"Last name"}
                            labelText={""}
                            type={"text"}
                            required={"Enter last name"}
                            register={register}
                            patternValue={nameRegularExpressions}
                            patternMessage={"Enter the name correctly"}
                            errors={errors}
                            mustBeCompleted={false}
                            placeholder={"Last name"}
                            formSent={getEmail}
                            borderRadius={"5px"}
                            border={"1px solid rgba(0,0,0, 0.3);"}
                            backgroundColor={"white"}
                        />
                    </div>
                    <MayInput
                        label={"Address"}
                        labelText={""}
                        type={"text"}
                        required={"Enter last address"}
                        register={register}
                        patternValue={nameRegularExpressions}
                        patternMessage={"Enter the address correctly"}
                        errors={errors}
                        mustBeCompleted={false}
                        placeholder={"Address"}
                        formSent={getEmail}
                        borderRadius={"5px"}
                        border={"1px solid rgba(0,0,0, 0.3);"}
                        backgroundColor={"white"}
                    />
                    <MayInput
                        label={"Apartment, suite,etc,(optional)"}
                        labelText={""}
                        type={"text"}
                        required={"Enter last apartment, suite,etc,(optional)"}
                        register={register}
                        patternValue={nameRegularExpressions}
                        patternMessage={"Enter the apartment, suite,etc,(optional) correctly"}
                        errors={errors}
                        mustBeCompleted={false}
                        placeholder={"Apartment, suite,etc,(optional)"}
                        formSent={getEmail}
                        borderRadius={"5px"}
                        border={"1px solid rgba(0,0,0, 0.3);"}
                        backgroundColor={"white"}
                    />
                    <div className="containerFirsNameLatnameCheckoutPage">
                        <MayInput
                            label={"City"}
                            labelText={""}
                            type={"text"}
                            required={"Enter last city"}
                            register={register}
                            patternValue={nameRegularExpressions}
                            patternMessage={"Enter the city correctly"}
                            errors={errors}
                            mustBeCompleted={false}
                            placeholder={"City"}
                            formSent={getEmail}
                            borderRadius={"5px"}
                            border={"1px solid rgba(0,0,0, 0.3);"}
                            backgroundColor={"white"}
                        />
                        <MayInput
                            label={"Postal code"}
                            labelText={""}
                            type={"text"}
                            required={"Enter last postal code"}
                            register={register}
                            patternValue={nameRegularExpressions}
                            patternMessage={"Enter the postal code correctly"}
                            errors={errors}
                            mustBeCompleted={false}
                            placeholder={"Postal code"}
                            formSent={getEmail}
                            borderRadius={"5px"}
                            border={"1px solid rgba(0,0,0, 0.3);"}
                            backgroundColor={"white"}
                        />
                    </div>
                    <div className="containerBittonFormCheckoutPage">
                        <Link to={"/card"}>
                            Return to cart
                        </Link>
                        <MayButtonForm
                            backgroundColor={"#2dbbf0"}
                            colorText={"white"}
                        >
                            Continue to shipping
                        </MayButtonForm>
                    </div>
                    <div className="footerCheckoutPage">All rights reserved Palley - Phone Accessories Responsive
                        Shopify Theme
                    </div>
                </form>
            </div>
            <div className="containerCheckoutPage">
                {productAdd.map((item: any) =>
                    <div className="containerProductCheckoutPage">
                        <div className="infoProductCheckoutPage">
                            <img
                                className="prductImgCheckoutPage"
                                src={item.cart_img[0]}
                                alt={item.name}
                            />
                            <div className="countProductCheckoutPage"> {item.count}</div>
                            <div className="sizeProductCheckoutPage">{item.size}</div>
                            <div>{item.name}</div>
                            <div>${item.newPrise}</div>
                        </div>
                    </div>
                )}
                <div>
                    <div className="totalCheckoutPage">
                        <div> Subtotal</div>
                        <div>${total}</div>
                    </div>
                    <div className="totalCheckoutPage">
                        <div>Shipping</div>
                        <div>Calculated at next step</div>
                    </div>
                </div>
                <div className="beforTotalCheckoutPage">
                    <div className="totalCheckoutPage">
                        <div>Total</div>
                        <div><span>USD</span>${total}</div>
                    </div>
                </div>
            </div>
            {show ? <MayModal visible={show} setVisible={setShow}>
                <>
                    order has been sent...
                </>
            </MayModal> : null}
        </CheckoutPageStyle>
    );
};

export default CheckoutPage;