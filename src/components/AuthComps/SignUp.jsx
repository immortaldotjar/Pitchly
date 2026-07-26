import React from 'react'
import signUpBg from "../../assets/bg-signup.svg"
import Button from '../Button'
import Input from '../Input'
import AuthFooterNote from './AuthFooterNote'
import { useNavigate } from 'react-router'
import {motion} from "motion/react"

const SignUp = () => {

    const navigate = useNavigate()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen md:p-0 p-margin_mobile overflow-hidden'>
            <div className={`hidden md:flex md:flex-col bg-cover bg-no-repeat bg-center p-margin_desktop text-white`} style={{ backgroundImage: `url(${signUpBg})` }}>
                <h3 className='center w-fit text-xl font-bold gap-2 text-primary-container'> <img src="/favicon.svg" alt="pitchly_logo" width={20} /> Pitchly</h3>

                <motion.p 
                initial = {{opacity:0,y:30}}
                animate = {{opacity :1, y:0}}
                transition={{duration : 0.6}}
                
                className='text-headline-lg text-5xl pt-4 tracking-wide p-6 w-full '>Your network is your net worth.</motion.p>

            </div>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='md:px-25 md:p-margin_desktop flex flex-col justify-center space-y-3 '>
                <h1 className='font-headline-lg font-bold text-3xl'>Join the network</h1>
                <p className='font-body-md'>Connect with world-class founders and investors.</p>
                <div className=''>
                    <Input label={"Username"} id={"Username"} placeholder={"Victor Doom"} />
                    <Input label={"Work Email"} type='email' id={"email"} placeholder={"your@email.com"} />
                    <div className='flex gap-4'>

                        <Input label={"Password"} type='password' id={"password"} placeholder={"Enter Password"} />
                        <Input label={"Confirm Password"} type='password' id={"confirm-password"} placeholder={"Re-Type Password"} />
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
                    <Button variant='primary' children={"Create Account"} className='w-full' />
                    <Button variant='secondary' children={"Cancel"} className='w-full' onClick = {() => {navigate("/")}}/>
                </div>
                <p className='center font-body-sm gap-2'>Already have an Account ?<span className='text-primary-container cursor-pointer underline' onClick={() => navigate('/auth/signin')}>Login</span> </p>
                <AuthFooterNote />
            </motion.div>
        </div>
    )
}

export default SignUp