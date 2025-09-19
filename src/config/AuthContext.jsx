import React, {createContext,useContext, useState,useEffect} from 'react'
import { Auth } from './Firebase'
import {onAuthStateChanged,signOut} from 'firebase/auth'

const AuthContext= createContext()
export const AuthProvider=({children})=>{
    // for the users
   const[user,setuser]=useState(null)
     //for the loading screen
 const[loading,setLoading]=useState(true)
    //   to call the users
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(Auth,(currentuser)=>{
         setuser(currentuser)
          setLoading(false)
      })
    
        // to return the user
         return unsubscribe
    },[Auth])
    // for the log out
    const logOut=(navigate)=>{
        signOut(Auth)
        navigate
    }
    return(
     <AuthContext.Provider value={{user,logOut,loading}}>
         {children}
     </AuthContext.Provider>
    )
}
 export const useAuth=()=>{
  return useContext(AuthContext)
 }
 