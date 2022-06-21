import {combineReducers} from 'redux';
import {getProductReducer} from "./getProductReducer";


export const rootReducer = combineReducers({
    getProduct: getProductReducer,
})

export type rootState = ReturnType<typeof rootReducer>