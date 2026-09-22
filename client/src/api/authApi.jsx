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
const getAllUsersReq = async () => {
    const res = await axiosInstance.post("/auth/users", data)
    return res.data
}


const updateUserRoleReq = async (id, role) => {
    const res = await axiosInstance.patch(`/auth/users/${id}/role`, { role })
}

export { signInReq, signUpReq, getAllUsersReq ,updateUserRoleReq} 