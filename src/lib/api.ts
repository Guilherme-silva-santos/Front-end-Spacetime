import axios from "axios";

export const api = axios.create({
    // url do back
    baseURL: 'http://localhost:3333'
})