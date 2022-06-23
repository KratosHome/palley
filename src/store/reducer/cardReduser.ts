import {AddToCardActionsTypes, carActionType} from "../typeStore/cardTypes";

const initialState: any = []

export const cardReduser = (state = initialState, action: carActionType) => {
        switch (action.type) {
            case AddToCardActionsTypes.PRODUCT_IN_CART_VARIANT:

                        return [...state, action.product]

            case AddToCardActionsTypes.PRODUCT_IN_CART_VARIANT:
                return state.map((item: any) => {
                    if (item.id !== action.idVariant) {
                        return [...state, action.product]
                    }
                })

            default:
                return state;
        }
    }
;