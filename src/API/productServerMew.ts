import axios from "axios";

const instance = axios.create({
    baseURL: "https://run.mocky.io/v3/05d73c68-2e1e-4f10-bc84-3424932d4737"
})

export const productServerMew = {
    getProducts() {
        return instance.get("")
    }
}