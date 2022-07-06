import React, {memo, useState} from 'react';
import {ReviewProductPageStyle} from "./ReviewProductPageStyle";
import Rating from '@mui/material/Rating';
import {CSSTransition} from "react-transition-group";
import MayInput from "../../UL/MayInput/MayInput";
import {emailRegularExpressions, nameRegularExpressions} from "../../regularExpression/regularExpression";
import {useForm} from "react-hook-form";
import {FormValues} from "../../FooterComponent/FooterBlock1/FooterBlock1Type";
import MayButtonForm from "../../UL/MayButtonForm/MayButtonForm";


type ReviewProductPageType = {
    review: any
}

const ReviewProductPage = memo<ReviewProductPageType>(({review}) => {
    const [inimateRewise, seAnimeatetRewise] = useState(false);
    const [modal] = useState(false);


    const [getReviews, setgetReviews] = useState(review)
    const [getRating, setgetRating] = useState<number | null>(0)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormValues>({mode: "onBlur"});

    const onSubmit = handleSubmit((data) => {
        setgetReviews([...review, {...data, id: Date.now(), grade: getRating}]);
        reset();
    });

    return (
        <ReviewProductPageStyle>
            <div className="containerTitleReviewProductPage">
                <div>CUSTOMER REVIEWS</div>
                <div onClick={() => seAnimeatetRewise(!inimateRewise)}
                >
                    Write a review
                </div>
            </div>

            <CSSTransition in={inimateRewise} classNames="alert" timeout={300} unmountOnExit>
                <form className="WriteReviewContaineer" onSubmit={onSubmit}>
                    <div className="WriteReviewH5">Write A Review</div>
                    <MayInput
                        label={"name"}
                        labelText={"Name"}
                        type={"text"}
                        required={"Enter your Name"}
                        register={register}
                        patternValue={nameRegularExpressions}
                        patternMessage={"Enter the Name correctly"}
                        errors={errors}
                        mustBeCompleted={false}
                        placeholder={""}
                        formSent={getReviews}
                        borderRadius={"5px"}
                        border={"1px solid rgba(0,0,0, 0.3);"}
                        backgroundColor={"white"}
                    />
                    <MayInput
                        label={"email"}
                        labelText={"Email"}
                        type={"email"}
                        required={"Enter your Email"}
                        register={register}
                        patternValue={emailRegularExpressions}
                        patternMessage={"Enter the Email correctly"}
                        errors={errors}
                        mustBeCompleted={false}
                        placeholder={""}
                        formSent={getReviews}
                        borderRadius={"5px"}
                        border={"1px solid rgba(0,0,0, 0.3);"}
                        backgroundColor={"white"}
                    />
                    <div className="ratingReviewProductPage">Rating</div>
                    <Rating name="size-small" defaultValue={0} size="small" onChange={(event, newValue) => {
                        setgetRating(newValue);
                    }}/>
                    <div className="inputReviewProductPage">
                        <MayInput
                            label={"text"}
                            labelText={"Body of Review (1500)"}
                            type={"text"}
                            required={"Enter your Review"}
                            register={register}
                            patternValue={nameRegularExpressions}
                            patternMessage={"Enter the Review correctly"}
                            errors={errors}
                            mustBeCompleted={false}
                            placeholder={""}
                            formSent={getReviews}
                            borderRadius={"5px"}
                            border={"1px solid rgba(0,0,0, 0.3);"}
                            backgroundColor={"white"}
                        />
                    </div>
                    <div className="WriteReviewbutton">
                        <MayButtonForm
                            backgroundColor={"#000000"}
                            colorText={"#ffffff"}
                        >
                            <div>SEND</div>
                        </MayButtonForm>
                    </div>
                </form>
            </CSSTransition>
            <div className="containerTextReviewProductPage">
                {getReviews.map((i: any) =>
                    getReviews.length >= 1 ? (
                        <div key={i.id} className="contReviewsName">
                            <Rating name="size-small" defaultValue={i.grade} size="small" readOnly/>
                            <div className="porductReviewsName">{i.name}</div>
                            <div className="porductReviewsText">{i.text}</div>
                        </div>
                    ) : (
                        <div>No reviews yet</div>
                    )
                )}
            </div>
            {modal ? (
                <div>Sent for verification</div>
            ) : null}
        </ReviewProductPageStyle>
    );
});

export default ReviewProductPage;