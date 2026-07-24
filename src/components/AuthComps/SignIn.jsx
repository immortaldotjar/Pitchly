import React from 'react'
import signInBg from "../../assets/bg-signin.svg"
import Input from '../Input'
import Button from '../Button'
const SignIn = () => {
    return (
        <div className='grid grid-cols-2 h-screen'>
            <div className={`hidden md:flex md:flex-col bg-cover bg-no-repeat bg-center p-margin_desktop text-white`} style={{ backgroundImage: `url(${signInBg})` }}>
                <h3 className='center w-fit text-xl font-bold gap-2 text-primary-container'> <img src="/favicon.svg" alt="pitchly_logo" width={20} /> Pitchly</h3>

                <p className='text-headline-lg text-5xl pt-4 tracking-wide p-6 w-full'>"The best way to predict the future is to create it."</p>

            </div>
            <div className='md:px-25 md:p-margin_desktop flex flex-col justify-center space-y-4'>
                <h1 className='font-headline-lg font-bold text-3xl'>Welcome Back!</h1>
                <p className='font-body-md'>Access your premium network and insights.</p>
                <div className='space-y-6'>
                    <Input label={"Work Email"} id={"email"} placeholder={"your@email.com"} />
                    <Input label={"Password"} rightSlot={"Forgot Password?"} id={"password"} placeholder={"Enter Password"} />
                </div>
                <div>
                    <input type="checkbox" /><span>Remeber Me</span>
                </div>
                <div>
                    <Button children={"Sign In"} />
                    <Button children={"Cancel"} />

                </div>
            </div>
        </div>
    )
}

export default SignIn