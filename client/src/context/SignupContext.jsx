import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

const SignupContext = createContext()

const stepOrder = ["credentials", "role", "details"]

const SignupProvider = ({ children }) => {
    const navigate = useNavigate()
    const { signup } = useAuth()

    const [step, setStep] = useState("credentials")
    const [role, setRole] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const [startupData, setStartupData] = useState({
        startupName: "",
        industry: "",
        stage: "",
        teamSize: "",
    })

    const [investorData, setInvestorData] = useState({
        investorName: "",
        industries: [],
        stage: "",
        investmentRange: "",
    })

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const updateStartupData = (partial) => setStartupData((prev) => ({ ...prev, ...partial }))
    const updateInvestorData = (partial) => setInvestorData((prev) => ({ ...prev, ...partial }))
    const updateCredentials = (partial) => setCredentials((prev) => ({ ...prev, ...partial }))

    const toggleIndustry = (industry) => {
        setInvestorData((prev) => ({
            ...prev,
            industries: prev.industries.includes(industry)
                ? prev.industries.filter((item) => item !== industry)
                : [...prev.industries, industry],
        }))
    }

    const goToStep = (target) => setStep(target)

    const nextStep = () => {
        const currentIndex = stepOrder.indexOf(step)
        if (currentIndex < stepOrder.length - 1) setStep(stepOrder[currentIndex + 1])
    }

    const prevStep = () => {
        const currentIndex = stepOrder.indexOf(step)
        if (currentIndex > 0) setStep(stepOrder[currentIndex - 1])
    }

    const selectRole = (selected) => {
        setRole(selected)
        nextStep()
    }

    const submitSignup = async () => {
        setError("")
        setLoading(true)

        try {
            const payload = {
                username: credentials.username,
                email: credentials.email,
                password: credentials.password,
                role,
                ...(role === "startup" ? startupData : investorData),
            }

            const user = await signup(payload)
            navigate(user.role === "admin" ? "/admin" : "/dashboard")
        } catch (err) {
            console.error("SIGNUP FAILED:", err)
            setError(err.response?.data?.message ?? "Something went wrong. Please try again.")

        } finally {
            setLoading(false)
        }
    }

    const resetSignup = () => {
        setStep("credentials")
        setRole(null)
        setError("")
        setStartupData({ startupName: "", industry: "", stage: "", teamSize: "" })
        setInvestorData({ investorName: "", industries: [], stage: "", investmentRange: "" })
        setCredentials({ username: "", email: "", password: "", confirmPassword: "" })
    }

    const value = {
        step,
        role,
        startupData,
        investorData,
        credentials,
        error,
        loading,
        updateStartupData,
        updateInvestorData,
        updateCredentials,
        toggleIndustry,
        goToStep,
        nextStep,
        prevStep,
        selectRole,
        submitSignup,
        resetSignup,
    }

    return <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
}

const useSignup = () => useContext(SignupContext)

export { SignupProvider, useSignup }