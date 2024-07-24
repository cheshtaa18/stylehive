import axios from "axios"
import {REACT_APP_API_TOKEN, REACT_APP_API_URL, REACT_APP_UPLOAD_URL} from "../config.js"

export const makeRequest = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `bearer ${REACT_APP_API_TOKEN}`,
    }, 

})