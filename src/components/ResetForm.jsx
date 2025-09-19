import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';

import {Auth,Googleprovider} from '../config/Firebase'
import {signInWithPopup} from 'firebase/auth'
const ResetForm = ({handlePassword,handleChange,email}) => {
    const navigate=useNavigate()
    // for the google sign in
  const handleSignin=async()=>{
    try{
       await signInWithPopup(Auth,Googleprovider)
         navigate("/")
    }
     catch(error){
        console.log(error)
     }
  }
  return (
<div className=''>
     <form action=""className=' mx-auto mt-35 
      text-gray-800
      shadow-black rounded-md w-[90%]  sm:w-[50%] md:w-[55%]  lg:w-[38%] pt-5 pb-6' >
        {/* for the ,message */}
        
          
          <h2 className='capitalize ml-3 text-[1rem] font-bold pb-2 md:text-[1.3rem] lg:text-[1.7rem]'>password reset</h2>
          <p className='ml-3 text-gray-700  mb-2  md:mb-10  text-[0.8rem]  lg:mb-20   '>provide the email address associated with your account to recover your password</p>
          {/* for the label */}
        <label className='capitalize font-semibold  lg: ml-3 ' >email</label>
          {/* for the input */}
        <input type="text" 
        placeholder='Enter email here'
        value={email}
        onChange={handleChange}
        className='block ml-3  p-2 mt-2 focus:text-gray-700
        rounded-md border-1 border-gray-300 sm:w-[19rem] min-w-[19rem]  md:w-[24rem]   lg:w-[40rem]'/>
        {/* for the button */}
        <button className='text-center  mx-auto block p-3 mt-5 active:scale-95 transition-all duration-300
        capitalize font-medium bg-blue-700  text-white rounded-md md:mb-8  lg:mb-12 w-[70%]' onClick={handlePassword} >reset password</button>
           <hr className='border-gray-300 border-0.5 w-[90%] mx-auto' />
   {/* for the link to login page */}
        <Link to={'/login'}className='flex justify-self-end mt-2 capitalize mr-5 font-md p-2 text-blue-700 active:underline' >back to login</Link>
        {/* for the container google */}
            <p className='font-medium ml-2 w-fit'>or sign in with</p>
          <span className='flex w-26 items-center capitalize p-2 mt-4 justify-between text-blue-600 cursor-pointer active:scale-95 
          transition-all duration-200
          font-semibold ml-3 rounded-md border-1' onClick={handleSignin} ><FaGoogle/>google</span>  
        
   </form>  
</div>
  )
}

export default ResetForm