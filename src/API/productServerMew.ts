import axios from "axios";

const instance = axios.create({
    baseURL: "https://run.mocky.io/v3/6d820471-3de7-4cc8-8867-f9f75cdf0eb7"
})

export const productServerMew = {
    getProducts() {
        return instance.get("")
    }
}