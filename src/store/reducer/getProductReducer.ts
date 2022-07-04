import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface intialStateTupe {
    products: any
    loading: boolean
    errors: string
}

const initialState: intialStateTupe = {
    products: [],
    loading: true,
    errors: "",
}

export const getProductReducer = createSlice({
    name: "getExchangeRate",
    initialState,
    reducers: {
        getProductReduceFetching: (state:any) => ({
            ...state,
            loading: true
        }),
        getProductReduceSucces: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            products: action.payload,
            loading: false
        }),
        getProductReduceError: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            errors: action.payload,
            loading: false
        }),
    },
})
export default getProductReducer.reducer