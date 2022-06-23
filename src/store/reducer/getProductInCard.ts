import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productTypes} from "../../types/productTypes";


interface IAppState {
    product: productTypes[] | null | undefined | any | any[]
    productVariant: any
}

const initialState: IAppState = {
    product: [],
    productVariant:[]
}


export const getProductInCard = createSlice({
    name: "getExchangeRate",
    initialState,
    reducers: {
        getProdcut(state: any, action: PayloadAction<any>) {
            state.product.push(action.payload)
        },
        getVariant(state: any, action: PayloadAction<any>) {
            state.productVariant.push(action.payload)
        },
    },
})

export default getProductInCard.reducer
export const {getProdcut, getVariant} = getProductInCard.actions