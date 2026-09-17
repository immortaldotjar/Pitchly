import axios from 'axios'
import axiosInstance from './axiosInstance'

const signUpReq = async (data) => {
    const res = await axiosInstance.post("/auth/signup", data)
    return res.data
}
const signInReq = async (data) => {
    const res = await axiosInstance.post("/auth/signin", data)
    return res.data
}

export { signInReq, signUpReq }