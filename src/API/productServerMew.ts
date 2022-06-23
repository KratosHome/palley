import axios from "axios";

const instance = axios.create({
    baseURL: "https://run.mocky.io/v3/64305e16-5b16-46b1-936d-d9717df06d32"
})

export const productServerMew = {
    getProducts() {
        return instance.get("")
    }
}