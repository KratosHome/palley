import {Dispatch} from 'redux';
import {productTypes} from "../../types/productTypes";
import {productServerMew} from "../../API/productServerMew";
import { GetProductTypes } from '../typeStore/getProductType';


export const setProductAction = (product: productTypes) => {
    return {
        type: GetProductTypes.SET_PRODUCT_ENUM,
        product: product
    }
}

export const setLoading = (loading: boolean) => {
    return {
        type: GetProductTypes.IS_LOADING,
        loading: loading
    }
}

export const getProductAction = () => async (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    let response = await productServerMew.getProducts()
    dispatch(setProductAction(response.data));
    dispatch(setLoading(false))
}


