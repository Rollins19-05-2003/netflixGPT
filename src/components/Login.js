import React, { useRef, useState } from 'react'
import Header from "./Header"
import { isValidCredentials } from '../utils/validate';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }
  
  const handleSignIn = () =>{
    const message = isValidCredentials(email.current.value, password.current.value);
    setErrorMessage(message);
  }

  return (
    <div>
        <div className='bg-black'>
          <Header/>
          <div className='bg-gradient-to-b from-black absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg' alt='bg' 
            ></img>
          </div>
          <form className='absolute w-4/12 top-28 left-1/3  bg-black p-5 bg-opacity-85' onSubmit={(e)=> e.preventDefault()}  >
          <div className='p-10 opacity-100'>
            <h1 className='text-white font-extrabold text-3xl'>{isSignIn? "Sign In" : "Sign Up"}</h1>
            { !isSignIn && (
              <input type='text' placeholder='Full name' className='p-3 my-4 bg-transparent border border-gray-500 rounded-lg w-full text-white'></input>
            )}
            <input type='text' ref={email} placeholder='Email or mobile number' className='p-3 my-4 bg-transparent border border-gray-500 rounded-lg w-full text-white'></input> <br/>
            <input type='password' ref={password} placeholder='Password' className='p-3 my-4 bg-transparent border border-gray-500 rounded-lg w-full text-white'></input>  <br/>

            <p className=' text-red-800'>{errorMessage}</p>

            <button className='p-2 my-4 text-white bg-red-700 w-full rounded-lg font-semibold' onClick={handleSignIn}>{isSignIn? "Sign In" : "Sign Up"}</button>
            <p className='text-white mt-2'>
              {!isSignIn ? "Already an user ?" : "New to NetflixGPT?"} <span className= ' text-blue-500 cursor-pointer' onClick={toggleSignIn}>{isSignIn? "Sign Up" : "Sign In"}</span> Now
            </p>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Login
