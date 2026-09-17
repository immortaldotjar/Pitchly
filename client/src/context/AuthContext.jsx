import { createContext, useContext, useState } from "react"
import { signInReq, signUpReq } from "../api/authApi"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")))

    const signup = async (data) => {
        const result = await signUpReq(data)
        localStorage.setItem("token", result.token)
        localStorage.setItem("user", JSON.stringify(result.user))
        setUser(result.user)
        return result.user
    }

    const signin = async (data) => {
        const result = await signInReq(data)
        localStorage.setItem("token", result.token)
        localStorage.setItem("user", JSON.stringify(result.user))
        setUser(result.user)
        return result.user
    }

    const logout = () => {
        localStorage.clear()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, signup, signin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }