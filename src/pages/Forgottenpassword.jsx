import { useState } from "react"
import React from 'react'
import {toast,Toaster} from 'react-hot-toast'
import { Auth } from "../config/Firebase"
import { sendPasswordResetEmail } from 'firebase/auth'
import ResetForm from "../components/ResetForm"
const Forgottenpassword = () => {
    // for the resetting the password
    const[email,setEmail]=useState("")
    // for the message
    // for the boolean value
    const handlePasswordChange=async(e)=>{
        e.preventDefault();
         try{
        await sendPasswordResetEmail(Auth,email)
        toast.success("password reset link has been sent successfully",{style:{textTransform:"capitalize",fontWeight:"bold"}})
         }
         catch(error){
           console.log(error)
         }
         finally{
             setTimeout(()=>{
            setEmail("")
             },2000)
         }
    }
  return (
    <div className="">
        {/* for the image logo */}
        <Toaster
          containerClassName="p-3"
        />
         <ResetForm
          email={email}
          handleChange={(e)=>{setEmail(e.target.value)}}
          handlePassword={handlePasswordChange}
         />
    </div>
  )
}

export default Forgottenpassword