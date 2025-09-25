import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {arrivals,Latest,menClothing,womenClothing,kidClothing} from '../Clothes'
import Button from './Button'
import {useTheme} from '../config/ThemeContext'
import ProductCard from './ProductCard'
const Main = () => {
  // for the array
  const[show,setShow]=useState(false)
  // for the navigation
  const navigate=useNavigate()
   const{dark}=useTheme()
  return (
    <div className={`${dark ? "text-white":"text-gray-800"}`}>
           <h2 className='mt-7 
           text-center 
           border-b-1
           border-gray-300
           shadow
           uppercase pb-3 
           font-bold
          xs:text-xl
            sm:text-2xl
            md:text-3xl
          '> new arrivals</h2>

           {/* for the new arrival  */}
                   <ProductCard
                   show={show}
                   data={arrivals}
                />
          
             <Button
              btnText={ show ? 'see less':"see more"}
              btnFunction={()=>setShow(!show)}

             />
              <h2 className='mt-7 
           text-center 
           border-b-1
           border-gray-300
           shadow
           uppercase pb-3 
           font-bold
          xs:text-xl
            sm:text-2xl
            md:text-3xl
          lg:text-3xl'>the latest</h2>

            {/* top sellers */}
                    <ProductCard
                     data={Latest}
                />
                  
              
              {/* for the men clothing */}
               <h2 className='mt-7 
           text-center 
           border-b-1
           border-gray-300
           shadow
           uppercase pb-3 
           font-bold
          xs:text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-3xl'>men clothing</h2>
      
                    <ProductCard
                    data={menClothing} 
                    show={false}
                />
               <Button
                  btnText={"view more"}
                  btnFunction={()=>navigate("/menspage")}
                 />
                 {/* for the women clothing */}
              <h2 className='mt-7 
           text-center 
           border-b-1
           border-gray-300
           shadow
           uppercase pb-3 
           font-bold
          xs:text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-3xl'>women clothing</h2>
                    <ProductCard
                     data={womenClothing}
                     show={false}
                />
                 
               <Button
                  btnText={"view more"}
                  btnFunction={()=>navigate("/womenspage")}
                 />  
                  {/*for the kids clothing  */}
              <h2 className='mt-7 
           text-center 
           border-b-1
           border-gray-3300
           shadow
           uppercase pb-3 
           font-bold
          xs:text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-3xl'>kids clothing</h2>
              
                    
                    <ProductCard
                   data={kidClothing}
                   show={false}
                />
               <Button
                  btnText={"view more"}
                  btnClassname="mgn-bottom"
                  btnFunction={()=>navigate("/kidspage")}
                 />    
    </div>
  )
}

export default Main