import {AddToCardActionsTypes, carActionType} from "../typeStore/cardTypes";

const initialState: any = [

]

export const cardReduser = (state = initialState, action: carActionType) => {
        switch (action.type) {
            case AddToCardActionsTypes.PRODUCT_IN_CART_VARIANT:
                        return [...state, action.product]
            case AddToCardActionsTypes.PRODUCT_IN_CART_VARIANT:

            default:
                return state;
        }
    }
;