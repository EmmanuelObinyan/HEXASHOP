import React from 'react'
import AdressComp from '../components/AdressComp'
import { useState } from 'react'
import {Toaster} from 'react-hot-toast'
import bankimg from '../assets/bankimage.png'
const FlutterWave = () => {
    const[user,setUser]=useState({
        fullname:"",
        email:"",
        number:"",
    })
    const handleChange=(e)=>{
         setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <Toaster/>
      <div>
         <AdressComp
         info={user}
         image={true}
         style={false}
         payment={true}
         show={false}
         flutter={true}
         handleChange={handleChange}
        />
          <img src={bankimg} 
                       className='flex -mt-2 justify-self-end'
                      alt="" />
        </div>
    </div>
  )
}

export default FlutterWave