import axios from "axios";

const instance = axios.create({
    baseURL: "https://run.mocky.io/v3/2ab78caf-3d8d-43f7-b6d3-5054fe48b82a"
})

export const productServerMew = {
    getProducts() {
        return instance.get("")
    }
}