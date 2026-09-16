import { useState } from 'react'
import signInBg from "../../assets/bg-signin.svg"
import Input from '../Input'
import Button from '../Button'
import AuthFooterNote from './AuthFooterNote'
import { useNavigate } from 'react-router'
import { motion } from "motion/react"
import { useAuth } from '../../context/AuthContext'

const SignIn = () => {
    const navigate = useNavigate()
    const { signin } = useAuth()

    const [form, setForm] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async () => {
        setError("")
        setLoading(true)

        try {
            const user = await signin(form)
            navigate(user.role === "admin" ? "/admin" : "/dashboard")
        } catch (err) {
            console.error("SIGNIN FAILED:", err)
            setError(err.response?.data?.message ?? "Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen md:p-0 p-margin_mobile overflow-hidden'>
            <div className={`hidden md:flex md:flex-col bg-cover bg-no-repeat bg-center p-margin_desktop text-white`} style={{ backgroundImage: `url(${signInBg})` }}>
                <h3 className='center w-fit text-xl font-bold gap-2 text-primary-container'> <img src="/favicon.svg" alt="pitchly_logo" width={20} /> Pitchly</h3>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-headline-lg text-5xl pt-4 tracking-wide p-6 w-full'>"The best way to predict the future is to create it."</motion.p>

            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='md:px-25 md:p-margin_desktop flex flex-col justify-center space-y-4 '>
                <h1 className='font-headline-lg font-bold text-3xl'>Welcome Back!</h1>
                <p className='font-body-md'>Access your premium network and insights.</p>
                <div className=''>
                    <Input
                        label={"Work Email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"your@email.com"}
                        value={form.email}
                        onChange={handleChange}
                    />
                    <Input
                        label={"Password"}
                        type='password'
                        rightSlot={"Forgot Password?"}
                        id={"password"}
                        name={"password"}
                        placeholder={"Enter Password"}
                        value={form.password}
                        onChange={handleChange}
                    />
                    <div className='space-x-3 center w-fit py-1'>
                        <input type="checkbox" /><span>Remeber Me</span>
                    </div>
                </div>

                {error && (
                    <p className="font-body-sm text-body-sm text-error">{error}</p>
                )}

                <div className='flex gap-5'>
                    <Button variant='primary' children={loading ? "Signing In..." : "Sign In"} className='w-full' onClick={handleSubmit} disabled={loading} />
                    <Button variant='secondary' children={"Cancel"} className='w-full' onClick={() => { navigate("/") }} />
                </div>
                <p className='center font-body-sm gap-2'>Don't have an Account ?<span className='text-primary-container cursor-pointer underline' onClick={() => navigate('/auth/signup')}>Create Account</span> </p>
                <AuthFooterNote />
            </motion.div>
        </div>
    )
}

export default SignIn