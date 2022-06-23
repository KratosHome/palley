import {productServerMew} from "../../API/productServerMew";
import { AppDispatch } from "../rootReducer"
import {getProductReducer} from "../reducer/getProductReducer";


export const fetshExchangeRateAction = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(getProductReducer.actions.getProductReduceFetching())
        let response = await productServerMew.getProducts()
        dispatch(getProductReducer.actions.getProductReduceSucces(response.data))
    } catch (e: any) {
        dispatch(getProductReducer.actions.getProductReduceError(e.message))
    }
}



