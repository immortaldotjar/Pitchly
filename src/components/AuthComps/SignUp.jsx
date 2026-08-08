import signUpBg from "../../assets/bg-signup.svg"
import Button from '../Button'
import Input from '../Input'
import AuthFooterNote from './AuthFooterNote'
import RoleSelect from './RoleSelect'
import StartupDetailsForm from './StartupDetailsForm'
import InvestorDetailsForm from './InvestorDetailsForm'
import { useNavigate } from 'react-router'
import { motion, AnimatePresence } from "motion/react"
import { SignupProvider, useSignup } from '../../context/SignupContext'

const CredentialsForm = () => {

    const navigate = useNavigate()
    const { credentials, updateCredentials, nextStep } = useSignup()

    return (
        <motion.div
            key="credentials"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className='space-y-3'
        >
            <h1 className='font-headline-lg font-bold text-3xl'>Join the network</h1>
            <p className='font-body-md'>Connect with world-class founders and investors.</p>
            <div className=''>
                <Input
                    label={"Username"}
                    id={"Username"}
                    placeholder={"Victor Doom"}
                    value={credentials.username}
                    onChange={(e) => updateCredentials({ username: e.target.value })}
                />
                <Input
                    label={"Work Email"}
                    type='email'
                    id={"email"}
                    placeholder={"your@email.com"}
                    value={credentials.email}
                    onChange={(e) => updateCredentials({ email: e.target.value })}
                />
                <div className='flex gap-4'>

                    <Input
                        label={"Password"}
                        type='password'
                        id={"password"}
                        placeholder={"Enter Password"}
                        value={credentials.password}
                        onChange={(e) => updateCredentials({ password: e.target.value })}
                    />
                    <Input
                        label={"Confirm Password"}
                        type='password'
                        id={"confirm-password"}
                        placeholder={"Re-Type Password"}
                        value={credentials.confirmPassword}
                        onChange={(e) => updateCredentials({ confirmPassword: e.target.value })}
                    />
                </div>

                <div className='space-x-3 center w-fit py-1'>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"

                        />
                        <span>Remember Me</span>
                    </label>

                </div>
            </div>
            <div className='flex gap-4'>
                <Button variant='primary' children={"Continue"} className='w-full' onClick={nextStep} />
                <Button variant='secondary' children={"Cancel"} className='w-full' onClick={() => { navigate("/") }} />
            </div>
            <p className='center font-body-sm gap-2'>Already have an Account ?<span className='text-primary-container cursor-pointer underline' onClick={() => navigate('/auth/signin')}>Login</span> </p>
            <AuthFooterNote />
        </motion.div>
    )
}

const SignUpSteps = () => {

    const { step, role } = useSignup()

    return (
        <AnimatePresence mode="wait">
            {step === "credentials" && <CredentialsForm key="credentials-step" />}
            {step === "role" && <RoleSelect key="role-select" />}
            {step === "details" && role === "startup" && <StartupDetailsForm key="startup-details" />}
            {step === "details" && role === "investor" && <InvestorDetailsForm key="investor-details" />}
        </AnimatePresence>
    )
}

const SignUp = () => {
    return (
        <SignupProvider>
            <div className='grid grid-cols-1 md:grid-cols-2 h-screen md:p-0 p-margin_mobile overflow-hidden'>
                <div className={`hidden md:flex md:flex-col bg-cover bg-no-repeat bg-center p-margin_desktop text-white`} style={{ backgroundImage: `url(${signUpBg})` }}>
                    <h3 className='center w-fit text-xl font-bold gap-2 text-primary-container'> <img src="/favicon.svg" alt="pitchly_logo" width={20} /> Pitchly</h3>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}

                        className='text-headline-lg text-5xl pt-4 tracking-wide p-6 w-full '>Your network is your net worth.</motion.p>

                </div>
                <div className='md:px-25 md:p-margin_desktop flex flex-col justify-center space-y-3 overflow-y-auto'>
                    <SignUpSteps />
                </div>
            </div>
        </SignupProvider>
    )
}

export default SignUp