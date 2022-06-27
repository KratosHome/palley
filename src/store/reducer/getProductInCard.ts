import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productTypes} from "../../types/productTypes";


interface IAppState {
    productAdd: productTypes[] | null | undefined | any | any[]
    productVariant: any
}

const initialState: IAppState = {
    productAdd: [],
    productVariant: []
}


export const getProductInCard = createSlice({
    name: "getExchangeRate",
    initialState,
    reducers: {
        getProdcut(state: any, action: PayloadAction<any>) {
              state.productAdd.push(action.payload);
        },
        getVariant(state: any, action: PayloadAction<any>) {
            state.productAdd.forEach((element: any) => {
                if (!element.idVariant) {
                    element.idVariant = action.payload.id
                    element.size = action.payload.size
                    element.count = action.payload.count
                }
            });
        },
        deleteProduct: (state: any, action: PayloadAction<any>) => {
            return state.product.filter((p: any) => p.id !== action.payload.id)
        },

    },
})

export default getProductInCard.reducer
export const {getProdcut, getVariant, deleteProduct} = getProductInCard.actions