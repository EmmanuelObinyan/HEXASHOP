import React from 'react'
import { useState } from 'react'
import firstpart from '../assets/firstlogoimage.png'
import secondpart from '../assets/imagelogo.png'
import Form from '../components/Form'
import { FaShoppingBag } from 'react-icons/fa';
import { PiShoppingCartThin } from 'react-icons/pi';
import {useNavigate} from 'react-router-dom'
import {Auth,Googleprovider} from '../config/Firebase'
import {createUserWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
const Signup = () => {
  // for the navigation
  const navigate=useNavigate();
  // for the user details
   const[user,setUser]=useState({
    email:"",
    password:""
   })
//    for loading
const[loading,setLoading]=useState(false)
// boolean value
const[value,setValue]=useState(false)
//    for the errors
const[error,setError]=useState({
    email:"",
    password:""
})
// for the message
const[message,setMessage]=useState("")

//  reading the user details
const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
}
// for the google sign in
const signIn=async()=>{
   setLoading(true)
   try{
  await signInWithPopup(Auth,Googleprovider)
     setValue(true)
     setMessage("account created successfully")
     setLoading(false)
     navigate("/")
   }
    catch(error){
      console.log(error)
    }
    finally{
      setTimeout(()=>{
        setLoading(false)
        setMessage("")
    },2000)
    }
}
// for user reading details
const handleSubmit=async(e)=>{
   e.preventDefault();
  let newerror={...error}
  const email_regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 if(user.email.trim() === ""){
    newerror.email="email is required"
 } 
else if(!email_regex.test(user.email)){
   newerror.email="invalid email,try again"
}
 if(user.password.trim() === ""){
   newerror.password="password is required"
 }
 else if(user.password.length < 8){
  newerror.password="password needs to be 8 or more character"
 }
 setTimeout(()=>{
    setError({
      email:"",
      password:""
    })
    setUser({
      email:"",
      password:""
    })
    setMessage("")
 },3000)
  setError(newerror)
 if(Object.values(newerror).every((val)=> val === "")) {
    setLoading(true)
   try{
      await createUserWithEmailAndPassword(Auth, user.email,user.password)
       setValue(true)
       setMessage("account created successfully")
       navigate('/login')
   } 
    catch(error){
       if(error.code === "auth/email-already-in-use"){
            newerror.email="Email is already in use"
           }
           else if(error.code === "auth/network-request-failed"){
             setValue(false)
            setMessage("connection error,try again later")
           }
         else{
          console.log(error.code)
         }  
    }
    finally{
      setLoading(false)
    }
 }
}
  return (
 <div className="flex h-screen xs:flex-col sm:flex-col md:flex-row">
        {/* first container */}
     <div className='flex-1 flex flex-col !bg-cover justify-center xs:pb-2 sm:pb-3
      text-white bg-center bg-no-repeat bg-[linear-gradient(to_left,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url("/womanlogin.png")]'>
      {/* first coloumn */}
         <h2 className=' ml-4 capitalize w-fit p-3  font-medium xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-45'>welcome to hexashop</h2>
         <p className=' ml-4 pt-2 xs:text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]  lg:text-[1.2rem] w-[90%]'>we have different quality clothes
           ,and assesories.patronize us and get the best 
          of our products and see for your self,
          lorem ipsum and aother things can be 
          gotten from here 
          too</p>
          {/* for the animating container */}
        <span className='flex h-fit
           items-center border-3 border-white ml-4
          animate-bounce duration-2000 ease-in-out
         capitalize font-semibold mt-[5rem] xs:w-[75%] text-[0.7rem]  md:text-[0.9rem] lg:text-[1.3rem] w-[50%] p-6'>
          <FaShoppingBag className='text-[3.3rem] w-[25%] mr-2 text-yellow-400 '/>
          sign in to get quality materials here,
          discover a whole lot here
          <PiShoppingCartThin className=' text-yellow-400 md:!text-[3.3rem] w-[30%] lg:w-[25%] text-[3rem]' />
       </span>  
     </div >
     {/* second column */}
     <div className='flex-1 '>
      {/* for the logo image */}
        <figure className='w-fit flex items-center  gap-1 justify-self-center xs:mt-8 sm:mt-10  md:mt-15 lg:mt-25 p-2'>
            <img src={firstpart} alt="" className='sx:h-10 sm:h-12 w-[2.8rem] md:w-[3rem]  lg:w-[4rem] h-20' />
            <img src={secondpart}alt=""  className='sm:h-9  md:h-10 w-[7rem] lg:w-[9rem] h-13'/>
          </figure>
         <Form
          data={user}
          value={value}
          handleSignin={signIn}
          message={message}
          loading={loading}
          btntext={loading ? "signing in":"sign up"}
          error={error}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
         />
     </div>
</div>
  )
}

export default Signup