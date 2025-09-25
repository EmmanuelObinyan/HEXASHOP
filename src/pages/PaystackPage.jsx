import React from 'react'
import { useState} from 'react'
import whitePaystack from '../assets/whitepaystack.png'
import darkPaystack from '../assets/darkpaystack.png'
import AdressComp from '../components/AdressComp'
import { useTheme } from '../config/ThemeContext'
import bankimg from '../assets/bankimage.png'
const PaystackPage = () => {
    const{dark}=useTheme()
    const[paymentInfo,setPaymentInfo]=useState({
        fullname:"",
        email:"",
        number:"",
    })
    const handleChange=(e)=>{
      setPaymentInfo({...paymentInfo,[e.target.name]:e.target.value})
    }
    

  return (
     <>
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        {/* logo image */}
        <figure className={` transition-all ease duration-200 mb-2 h-fit w-fit items-center p-2 `}>
                <img src={whitePaystack} 
             className={`xs:h-10 md:h-11 lg:h-13 xs:w-40 sm:w-40 md:w-45 lg:w-55 ${dark ? "brightness-90 invert":""}`}
            alt="" />
           
        </figure>
       {/* for the imported form */}
              <div >
             <AdressComp
             info={paymentInfo}
             payment={true}
             headText={"pay with paystack"}
             style={false}
             paystack={true}
             handleChange={handleChange}
             show={false}
            />
             <img src={bankimg} 
              className='flex -mt-2 justify-self-end'
             alt="" />
              </div>
              
          
    </div>
    </>
  ) 
}

export default PaystackPage