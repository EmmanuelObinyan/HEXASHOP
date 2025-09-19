import React,{useState,useEffect} from 'react'
import { GiCancel } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { MdArrowDropDown } from 'react-icons/md';
import { FcFaq } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { BiSolidContact } from 'react-icons/bi';
import firstpart from '../assets/firstlogoimage.png'
import { useAuth } from '../config/AuthContext'
import secondpart from '../assets/imagelogo.png'
import { MdMenu } from 'react-icons/md';
import { useCart } from '../config/CartProvider';
import {useFave} from '../config/useFave'
import { FaShoppingCart } from 'react-icons/fa';
import {Link,useNavigate} from 'react-router-dom'
const Nav = () => {
  // from the custom hook
  const{user, logOut}=useAuth()
  const navigate=useNavigate()
  const[show,setShow]=useState(false)
  // custom hook for the state
  const{value,setValue}=useFave()
  // for the scrolling reference
  const{handleScrollToTop,cart}=useCart()
  // for the condition
      useEffect(()=>{
        if(value){
            document.body.style.overflow="hidden"
        }
         else{
          document.body.style.overflow="auto"
         }
      },[value])
      // for the quantity
      const quantity=cart.reduce((acc,item)=>acc + item.quantity,0)
  return (
    <div className='flex w-full fixed top-0 items-center justify-between
    p-3 bg-gray-800 z-20 '>

      {/* for the nav brand */}
      <figure className="flex items-center w-fit xs:gap-1 " onClick={handleScrollToTop}> 
          <img src={firstpart} alt="" className="xs:h-10 md:h-11 lg:h-14" />
          <img src={secondpart} alt="" className="xs:w-19 h-9 lg:h-10 w-35"/>
      </figure>
              {/* for the add to favourite */}
        <nav className='flex items-center  capitalize  font-semibold  md:w-[37rem] mr-10 lg:w-[55rem] ml-10'>
          {/* nav list */}
          <ul className='xs:hidden md:flex  justify-around lg:justify-around w-[37rem]'>
             <Link to="/" className="duration-300 transition-all ease hover:text-yellow-500 text-white active:underline md:text-sm  lg:text-lg" ><li><i className="fa-solid fa-house mr-2 lg:text-xl "></i>home</li></Link>
             <Link to="/womenspage" className="duration-300 transition-all ease hover:text-yellow-500 text-white active:underline md:text-sm lg:text-lg" ><li><i className="fa-solid fa-person-dress mr-2 lg:text-xl"></i>women</li></Link>
             <Link to="/menspage" className="duration-300 transition-all ease hover:text-yellow-500 text-white active:underline md:text-sm lg:text-lg" ><li><i className="fa-solid fa-person mr-2 lg:text-xl "></i>mens</li></Link>
             <Link to="/kidspage" className="duration-300 transition-all ease hover:text-yellow-500 text-white active:underline md:text-sm lg:text-lg" ><li><i className="fa-solid fa-child mr-2 lg:text-xl"></i>kids</li></Link>
           
          </ul>

          {/* for the cart image */}
          <button className="xs:hidden md:flex relative md:ml-1 lg:h-10 ml-7 p-1" onClick={()=>navigate('/cartspage')} >
                 <FaShoppingCart className='peer w-fit 
                 duration-300 transition-all ease hover:text-yellow-500 
                 md:text-2xl lg:text-3xl text-white'/>
                 <span className='absolute bg-amber-400 border-0
                 duration-300 transition-all ease peer-hover:bg-white
                 text-gray-900
                  -top-2 md:px-1 h-5 right-0 lg:px-2 rounded-[1rem]'>{quantity}</span>
           </button>

          {/* for the user */}
          { user? ( 
              <div className="xs:hidden md:flex  items-center relative text-white md:w-[14rem] lg:w-[18rem] md:ml-3 lg:ml-6 p-1">
                   <span> 
                        <p className="font-light lowercase italic md:text-xs lg:text-md">
                     {`welcome ${user.displayName || ""}`} </p>
                        <p className="md:text-xs ">{user.email}</p>
                  </span>  
                   <MdArrowDropDown className='md:text-3xl lg:text-2xl' onClick={()=>setShow(!show)} />
                  
                    <div className={`absolute top-8 md:left-24 lg:left-12 rounded-lg bg-gray-800 p-2 transition-all ease duration-200 ${show ? "block":"hidden"}  md:w-30 lg:w-40`}>
                           <Link to={'/aboutpage'} className="duration-300  transition-all ease flex items-center hover:text-yellow-500 text-white active:underline md:text-sm lg:text-md"><FcAbout className='mr-2 lg:text-2xl'/><li className='mb-2'>about us</li></Link>
                           <Link to={'/contactpage'} className=" duration-300 transition-all ease flex items-center hover:text-yellow-500 text-white  md:text-sm lg:text-md"><BiSolidContact className=' mr-2 lg:text-2xl'/><li className='mb-2'> contact us</li></Link>
                          <Link to={'/faqpage'} className="duration-300 transition-all ease  flex items-center hover:text-yellow-500 text-white  md:text-sm lg:text-md"><FcFaq className='mr-3 lg:text-2xl'/><li className='mb-2'>FAQs</li></Link>
                          <Link to={'/settingspage'} className="duration-300 transition-all ease hover:text-yellow-500 text-white  md:text-sm lg:text-md"><li className='mb-2'><i class="fa-solid fa-gear  mr-2 lg:text-xl"></i>settings</li></Link>
                            <button onClick={()=>logOut(navigate('/login'))} className=" text-white border-0
                     transition-all  duration-300
                     hover:opacity-90 active:scale-95 
                      block
                    bg-blue-700 mt-2 rounded-lg mx-auto md:text-sm lg:p-2 h-9 ">log out</button>
                      </div>  
              </div>
          )
          :(
              <div className="xs:hidden md:flex items-center relative text-white capitalize justify-between  h-fit ml-3 md:w-fit  lg:ml-8" >
                 <p className="font-semibold italic md:text-sm lg:text-lg">guest user</p>
                   <MdArrowDropDown className='md:text-3xl lg:text-2xl' onClick={()=>setShow(!show)} />
                     
                      {/* for the dropdown menu */}
                       <div className={`absolute top-7 rounded-lg bg-gray-800 p-2 transition-all ease duration-200 ${ show  ? "block":"hidden"} md:w-30 lg:w-40`}>
                           <Link to={'/aboutpage'} className="duration-300  transition-all ease flex items-center hover:text-yellow-500 text-white active:underline md:text-sm lg:text-lg"><FcAbout className='mr-2 lg:text-2xl'/><li className='mb-1'>about us</li></Link>
                           <Link to={'/contactpage'} className=" duration-300 transition-all ease flex items-center hover:text-yellow-500 text-white  md:text-sm lg:text-lg"><BiSolidContact className=' mr-2 lg:text-2xl'/><li className='mb-1'> contact us</li></Link>
                          <Link to={'/faqpage'} className="duration-300 transition-all ease  flex items-center hover:text-yellow-500 text-white  md:text-sm lg:text-lg"><FcFaq className='mr-3 lg:text-2xl'/><li className='mb-1'>FAQs</li></Link>
                          <Link to={'/settingspage'} className="duration-300 transition-all ease hover:text-yellow-500 text-white  md:text-sm lg:text-lg"><li><i class="fa-solid fa-gear  mr-2 lg:text-xl"></i>settings</li></Link>
                         <button onClick={()=>navigate('/login')} 
                      className='font-semibold mt-3 rounded-lg bg-blue-700
                      text-white border-0 
                      mx-auto
                      block
                      duration-300 transition-all ease
                      hover:opacity-90 
                      active:scale-90 
                      lg:h-10 w-20 ' >sign In</button>
                      </div>  
             </div>
             ) }
          {/* for the mobile responsive view of the web application */}

          {/* for the mobile view harmburger */}
          <button className='xs:ml-20 -mr-6 sm:ml-7 sm:mr-0  md:hidden' onClick={()=>setValue(true)} >
               <MdMenu
              className="text-white xs:text-4xl"
             />
          </button>

          {/* for the mobile navigation container */}
           <ul className={`h-[100vh] overflow-y-scroll bg-gray-900 z-10
              transform transition-transform duration-1000
              ease-in-out
              ${value ? "translate-x-0":"translate-x-full"}
             text-white w-[23rem]
               z-3 p-2 absolute top-0 right-0 pr-2 sm:w-[35rem] md:hidden`}>
              <button className='flex justify-self-end mt-1  w-fit' onClick={()=>setValue(false)}>
                 <GiCancel 
                  className="text-3xl font-light sm:text-4xl"
                />
              </button>
              

              {/* for the user image */}
           {
               user && user.photoURL ?
                (  <img src={user.photoURL} alt="" 
                  className='flex justify-self-end
                  rounded-4xl border-1
                  h-15 w-15 p-1 xs:mr-4 mt-12 mb-3' />  )
                  :(
                <CgProfile
                 className='text-5xl flex justify-self-end 
                 mt-15 mb-4 mr-4 sm:text-6xl'
                />  
                  )  
           }            

                {/* for the user details */}
                 { user && user.displayName?( 
                <span className='text-right'> 
                  <p className={`font-bold text-[0.9rem] p-1 ${user? "uppercase":"lowercasee"} sm:text-[1rem]`}>{user.displayName || ""}</p>
                  <p className={`text-[0.7rem] pb-1 ${user? "font-semibold " : "font-light"} sm:text-[0.8rem]`}>{user.email}</p>
                </span> 
          )
          :(
            <p className="font-semibold text-right h-fit mb-7 pb-2 mr-3 sm:text-[1.2rem]">guest user</p>
          ) 
          }
                {/* for the mobile navigation bar */}

            <Link to="/" className=' text-lg  '>
              <li className='p-3 ml-2 rounded-lg mb-3 duration-300 sm:w-full xs:w-83
              transition-all active:bg-blue-600 sm:text-xl'>
                <i className="fa-solid fa-house mr-2 text-xl sm:text-2xl"></i>home</li>
            </Link>
            <Link to={'/menspage'} className=' text-lg' >
              <li className='p-3 ml-2 rounded-lg mb-3  transition-all duration-300 sm:w-full xs:w-83
               active:bg-blue-600 sm:text-xl' >
                <i className="fa-solid fa-person mr-2 text-xl sm:text-2xl"></i> men</li>
            </Link>
            <Link to={'/womenspage'} className=' text-lg' >
              <li className='p-3 ml-2 rounded-lg mb-3 transition-all sm:w-full xs:w-83
              duration-300 active:bg-blue-600  sm:text-xl' >
                <i className="fa-solid fa-person-dress text-xl mr-2 sm:text-2xl"></i>women</li>
            </Link>
            <Link to={'/kidspage'} className=' text-lg '  >
              <li className='p-3 ml-2 rounded-lg mb-5 transition-all duration-300 sm:w-full xs:w-83
               active:bg-blue-600 sm:text-xl' >
                <i className="fa-solid fa-child text-xl mr-2 sm:text-2xl"></i>kids</li>
            </Link>
            <Link to={'/cartspage'} className='text-lg flex p-3 
                 transition-all duration-300
               active:bg-blue-600 rounded-lg sm:w-full xs:w-83 ml-1' >
                <button className=" relative ml-1 mr-1 ">
            <FaShoppingCart className='w-fit ml-0 xs:text-2xl text-white'/>
            <span className=' absolute bg-amber-400 border-0
             text-gray-800 font-bold -top-2 
               xs:px-1 h-5 text-sm lg:px-2 rounded-[1rem]'>{quantity}</span>
            </button>
                  <li className="ml-2 ">Cart products</li>
            </Link>

          {/* for the settings,user,about,contact,FAQs,page logout */}
              <div className='flex flex-col  h-fit pb-3 border-t-1 border-gray-400 mt-5  mb-1'>
                <Link to={'/aboutpage'} className='text-lg mt-2 flex items-center p-3 
                 transition-all duration-300 mb-2
               active:bg-blue-600 rounded-lg sm:w-full xs:w-83 ml-1' >
                <FcAbout className='text-2xl mr-2 sm:text-3xl'/>
                  <li className="ml-2 ">about us</li>
            </Link>
                <Link to={'/faqpage'} className='text-lg flex items-center p-3 
                 transition-all duration-300 mb-2
               active:bg-blue-600 rounded-lg sm:w-full xs:w-83 ml-1' >
                <FcFaq className='text-2xl mr-2 sm:text-3xl'/>
                  <li className="ml-2 ">frequently asked questions</li>
            </Link>
             <Link to={'/contactpage'} className='text-lg flex items-center p-3 
                 transition-all duration-300 mb-2
               active:bg-blue-600 rounded-lg sm:w-full xs:w-83 ml-1' >
                <BiSolidContact className='text-2xl mr-2 sm:text-3xl'/>
                  <li className="ml-2 ">contact us</li>
            </Link>

                {/* for the settings page */}
                 { <Link  className=' text-lg ' to={'/settingspage'} >
              <li className='p-3 ml-2 rounded-lg mb-6 sm:w-full xs:w-83 mt-1 transition-all
               duration-300 active:bg-blue-700 sm:text-xl' >
                <i class="fa-solid fa-gear text-xl mr-2 sm:text-2xl"></i>settings</li>
            </Link>}

                {/* for the logout button */}
             { 
                user ?(
              <button className="w-[95%]  bg-blue-700 capitalize text-xl
               mx-auto font-semibold
                text-white border-0 transition-all 
                ease duration-300 active:scale-95 block p-3 
                rounded-xl" onClick={()=>logOut(navigate('/login'))} >log out</button>  )
                :(
                  <button className="w-[95%]  bg-blue-700 capitalize text-xl
               mx-auto font-semibold
                text-white border-0 transition-all 
                ease duration-300 active:scale-95
                 block p-3 rounded-xl" onClick={()=>navigate('/login')} >sign in</button>  
                )
                }
                  </div>
           </ul>
        </nav>
    </div>
  )
}

export default Nav