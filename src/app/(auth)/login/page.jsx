'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import { authClient } from '@/lib/auth-client';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLogin = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error);
    }

    console.log(errors);

    return (
        <div className='max-w-[1150px] mx-auto px-5 py-10 min-h-[80vh] bg-slate-100 '>
            <div className='flex justify-center items-center'>
                <div className='p-12 rounded-xl bg-white'>
                    <h2 className='font-bold text-3xl text-center'>Login your account</h2>
                    <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
                        <fieldset className='fieldset'>
                            <legend className='fieldset-legend'>What is you name?</legend>
                            <input type='email' className='input' placeholder='Type here email..' {...register("email", { required: "Email field is required" })} />

                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='fieldset-legend'>What is you password?</legend>
                            <input type={isShowPassword ? 'text' : 'password'} className='input' placeholder='Type here password' {...register("password", { required: "Password field is required" })} />
                            <span className='absolute right-2 top-2 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                                {!isShowPassword ?
                                    <FaEye className='text-[20px] w-[20px]' /> :
                                    <FaEyeSlash className='text-[20px] w-[20px]'></FaEyeSlash>
                                }
                            </span>
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </fieldset>

                        <button className='btn bg-slate-800 text-white w-full'>Login</button>
                    </form>
                    <p className='mt-4'>Don't have account? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;