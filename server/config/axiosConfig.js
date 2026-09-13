import axios from "axios"

const axiosConfig = axios.create({
    timeout : 10000,
    headers : { "Content-Type": "application/json" },
})

export default axiosConfig