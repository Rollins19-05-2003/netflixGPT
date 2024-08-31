import Header from "./Header"
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USERICON } from '../utils/constants';
import React, { useRef, useState } from 'react'
import { isValidCredentials } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }
  
  const handleSignIn = () =>{
    const message = isValidCredentials(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message)return;

    // signin/signup
    if(!isSignIn){
      // signup
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: {USERICON}
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL : photoURL}));
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }else{
      // signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("success");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }

  return (
    <div>
        <div className='bg-black'>
          <Header/>
          <div className='bg-gradient-to-b from-black absolute'>
            <img src={BG_URL} alt='bg' 
            ></img>
          </div>
          <form className='absolute w-4/12 top-28 left-1/3  bg-black p-5 bg-opacity-85' onSubmit={(e)=> e.preventDefault()}  >
          <div className='p-10 opacity-100'>
            <h1 className='text-white font-extrabold text-3xl'>{isSignIn? "Sign In" : "Sign Up"}</h1>
            { !isSignIn && (
              <input type='text' ref={name} placeholder='Full name' className='p-3 my-4 bg-transparent border border-gray-500 rounded-lg w-full text-white'></input>
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
