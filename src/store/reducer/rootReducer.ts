import {combineReducers} from 'redux';
import { cardReduser } from './cardReduser';
import {getProductReducer} from "./getProductReducer";


export const rootReducer = combineReducers({
    getProduct: getProductReducer,
    cardReduser: cardReduser
})

export type rootState = ReturnType<typeof rootReducer>