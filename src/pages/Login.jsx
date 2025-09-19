import React from 'react'
import { useState } from 'react';
import firstpart from '../assets/firstlogoimage.png'
import secondpart from '../assets/imagelogo.png'
import {Auth,Googleprovider} from "../config/Firebase"
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
import Form from '../components/Form'
import { FaShoppingBag } from 'react-icons/fa';
const Login = () => {
  const navigate=useNavigate()
    // for the users
    const[user,setUser]=useState({
      email:"",
      password:""
    })
    // for the attempt
    const[attempts,setAttempts]=useState(1)
    // boolean value
    const[value,setValue]=useState(false)
    // for the errors
    const [error,setError]=useState({
      email:"",
      password:""
    })
    // for disabling the button
    const[disable,setDisable]=useState(false)
    // for the loading
    const[loading,setLoading]=useState(false)
    // for the message
    const[message,setMessage]=useState("")
    // for reading the input data
    const handleChange=(e)=>{
       const{name,value}=e.target;
       setUser({...user,[name]:value})
    }
    // for the login function
     const handleSubmit=async(e)=>{
        e.preventDefault();
      // for tracking the validation
      let isValid=true;
      // for the second tracking validation
       let isDone=true
      let maxAttempts=3;
      let newerror={...error}
    
      if(user.password.trim() === ""){
         isValid=false;
         newerror.password="password is required"
      }
       
       try{
        await signInWithEmailAndPassword(Auth,user.email,user.password)
          setValue(true)
          setMessage("login successful")
          navigate("/")
       }
       catch(error){
        if(error.code === "auth/user-not-found")
   {
     isValid=false;
    newerror.email="account doesnt exist"
   }
   else if(user.email.trim() === ""){
      newerror.email="email is required"
      }
   else if(error.code === "auth/invalid-email"){
     isValid=false
     newerror.email="*Invalid email,try again"
   }
   else if(error.code === "auth/wrong-password"){
     isValid=false
     isDone=false
     newerror.email="*Wrong password,try again"
   }
   else if(error.code === "auth/invalid-credential"){
     isValid=false
     isDone=false
     newerror.email="*Invalid credentials"
   }
  else if(error.code === "auth/network-request-failed") {
     setValue(false)
    setMessage(" * Connection error,try again later")
  }
    else{
      console.log(error.code)
    }   
       }
     //for resetting it
     setTimeout(()=>{
         setError({
          email:"",
          password:""
         })
         setMessage("")
         setUser({
          email:"",
          password:""
         })
       },3000)  
       setError(newerror)
        // for the disable of the button
        if(!isValid && !isDone){
          const attempt= attempts + 1;
          setAttempts(attempt)
            setValue(false)
        setMessage(`you have ${attempts} out of ${maxAttempts} attempts`)    
        }
      if(attempts >= maxAttempts){
        setValue(false)
      setMessage("maximum limit reached.please try again later")
        setDisable(true)
        setTimeout(()=>{
           setAttempts(1)
          setDisable(false)
        },10000)
      }

     }
    //  for the google sign in
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
           setLoading(false)
          setTimeout(()=>{
            setMessage("")
        },2000)
        }
    }
  return (
     <div className="flex h-screen xs:flex-col sm:flex-col md:flex-row">
            {/* first container */}
         <div className='flex-1 flex flex-col !bg-cover justify-center xs:pb-2 sm:pb-3
      text-white bg-center bg-no-repeat bg-[linear-gradient(to_left,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url("/womanlogin.png")]'>
          {/* first coloumn */}
             <h2 className=' ml-4 capitalize w-fit p-3 font-medium xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-45'>welcome to hexashop</h2>
             <p className='ml-4 pt-2 xs:text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]  lg:text-[1.2rem] w-[90%]'>we have different quality clothes
               ,and assesories.patronize us and get the best 
              of our products and see for your self,
              lorem ipsum and aother things can be 
              gotten from here 
              too</p>
              {/* for the animating container */}
            <span className='flex h-fit
           items-center border-3 border-white ml-4
          animate-bounce duration-2000 ease-in-out
         capitalize font-semibold mt-[5rem] xs:w-[75%] text-[1rem]  md:text-[1.3rem] lg:text-[2rem] w-[50%] p-6'>
              <FaShoppingBag className='text-[3.3rem] w-[25%] mr-2 text-yellow-400  '/>
              get your order now
           </span>  
         </div >
         {/* second column */}
         <div className='flex-1 '>
          {/* for the logo image */}
            <figure className='w-fit flex items-center  gap-1 justify-self-center xs:mt-8 sm:mt-10  md:mt-15 lg:mt-18 p-2'>
                <img src={firstpart} alt="" className='sx:h-10 sm:h-12 w-[2.8rem] md:w-[3rem]  lg:w-[4rem] h-20' />
                <img src={secondpart}alt=""  className='sm:h-9  md:h-10 w-[7rem] lg:w-[9rem] h-13'/>
              </figure>
             <Form
              data={user}
              value={value}
              handleSignin={signIn}
              message={message}
              textvalue={false}
              // handlePassword={handlePasswordChange}
              btnable={disable}
              loading={loading}
              btntext={loading ? "loading":"login"}
              error={error}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
             />
         </div>
      </div>       
  )
}

export default Login;