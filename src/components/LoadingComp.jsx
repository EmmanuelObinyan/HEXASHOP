import React from 'react'
import { useEffect } from 'react'
import {useTheme} from '../config/ThemeContext'
import Loading from './Loading'
const LoadingComp = () => {
   const {dark}=useTheme()
  return (
    <div  className={`fixed inset-0 z-50 flex flex-col items-center  transition-all duration-200 ease justify-center ${ dark ? "bg-[#1A1D27]":"bg-[cream]"}` }>
        <Loading/>
    </div>
  )
}

export default LoadingComp