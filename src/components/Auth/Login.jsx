import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  

    const[email , setEmail]=useState('')
    const[password , setPassword]=useState('')


    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
          <div className='border-2 rounded-xl  border-emerald-600 p-20'>
          <form
          onSubmit={(e)=>{
            submitHandler(e)
           }} 
          className='flex flex-col items-center justify-center'
          >
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required 
            className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 placeholder:text-gray-400 rounded-full' type='email' placeholder='Enter your email' 
            />
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
             className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 placeholder:text-gray-400 rounded-full' type='password' placeholder='Enter your password' />
            <button className='mt-7 text-white border-none outline-none  border-2 hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full  placeholder:text-white rounded-full' type='Log in'>Login</button>
          </form>
          </div>
        </div>
    );
};

export default Login;