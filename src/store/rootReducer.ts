import { combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import getProductReducer from "./reducer/getProductReducer";
import getProductInCard from "./reducer/getProductInCard";


export const rootReducer = combineReducers({
    getProductInCard: getProductInCard,
    getProductReducer: getProductReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]