
import {productTypes} from "../../types/productTypes";
import {GetProductTypes, productType} from "../typeStore/getProductType";

interface intialStateTupe {
    products: productTypes[]
    loading: boolean
}

const initialState: intialStateTupe = {
    products: [],
    loading: true
}

export const getProductReducer = (state = initialState, action: productType) => {
        switch (action.type) {
            case GetProductTypes.SET_PRODUCT_ENUM:
                return {
                    ...state,
                    products: action.product
                }
            case GetProductTypes.IS_LOADING:
                return {
                    ...state,
                    loading: action.loading
                }
            default:
                return state;
        }
    }
;