import React from 'react'
import {Toaster,toast} from 'react-hot-toast'
import Button from './Button'
import {useState} from 'react'
const SubForm = () => {
    const[email, setEmail]=useState("")
    const [error,setError]=useState("")   
    //  submit function
    const handleSubmit=(e)=>{
      let isValid=true;
        e.preventDefault();
        const email_regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
         
        if(email.trim() === ""){
                isValid=false
               setError("email is required")
              
        }
        else if(!email_regex.test(email.trim())){
              isValid=false
            setError("enter valid email")
        }
         setTimeout(()=>{
             setError("")
             setEmail("")
         },2000)
       if( isValid){
             toast.success("subscribed successfully")
             
            //  use firebase to store user email
            
        }
    }
  return (
    <div 
    className='w-fit flex 
     p-3
     rounded-xl
     mb-2
     h-fit 
     xs:justify-self-center
     md:justify-self-end
     xs:flex-col
     md:flex-row 
     text-white
     bg-gray-800
     md:mr-1
     lg:mr-10 items-center'>

         <h2 
         className=" 
         font-semibold
         leading-15
         capitalize
         sm:text-lg
         md:text-md
         lg:text-3xl
         xs:w-80
         sm:w-95
         lg:w-120
         text-center">stay up to date about lastest offers </h2>
        <form action="" 
         className='
         xs:w-79
         sm:w-90
         sm:ml-4
          lg:w-120'>
            {/* for the message */}
           
             {/* for the email label */}
              <label htmlFor=""
               className='block 
               pb-2
               mt-3
               ml-2
               xs:text-xs
               sm:text-sm
              md:text-md
               w-fit
               capitalize
                font-semibold'>email</label>

                 {/* for the email input */}
               <input type="text" 
                placeholder='enter email here'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className='
                 rounded-xl
                 border-1
                 mt-2
                 border-gray-400
                 block 
                 xs:p-1
                 xs:placeholder:text-xs
                 sm:placeholder:text-sm
                 md:placeholder:text-md
                 xs:w-70
                 sm:ml-2
                 md:ml-3
                 sm:w-80
                 sm:p-2
                 md:w-88
                 lg:w-110
                 focus:text-gray-300
                 placeholder:capitalize'
               />
                <p 
               className='
                text-red-500
                capitalize
                my-2
                font-semibold
                xs:text-xs
                sm:text-sm
                md:text-md
               '>{error}</p>
               <Button
                btnText={"subscribe"}
                btnFunction={handleSubmit}
                btnClassname={"btn-color"}
               />
              
        </form>
        
    </div>
  )
}

export default SubForm