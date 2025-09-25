import React from 'react'
import { useEffect } from 'react'
import Loading from './Loading'
const LoadingComp = () => {
  
  return (
    <div  className="fixed inset-0 z-50 flex flex-col items-center   justify-center bg-black/80">
        <Loading/>
    </div>
  )
}

export default LoadingComp