import React from 'react'
import SubForm from './SubForm'
import { Link} from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import {useTheme} from '../config/ThemeContext'
import firstpart from '../assets/firstlogoimage.png'
import secondpart from '../assets/imagelogo.png'
const Footer = () => {
    const{dark}=useTheme()
  return (
      <div className={`mt-40 bg-gray-900 h-fit mx-auto  px-5`}>
       {/* for the subscribe newsletter */}
          <SubForm/>
    <div className='grid text-white rounded-xl pl-2 bg-gray-800 mt-4 place-items-center xs:grid-cols-1 gap-2 sm:h-fit md:h-55 sm:grid-cols-2 sm:gap-0 md:grid-cols-4 '>
        {/* first column */}
        <div className='w-fit '>
                <figure className="flex items-center mb-2 w-fit xs:gap-1 ">
                    <img src={firstpart} alt="" className={`xs:h-10 md:h-11 lg:h-14 transition-all ease duration-200 ${dark ? "brightness-90 invert":""}`} />
                    <img src={secondpart} alt="" className={`xs:w-21 h-9 lg:h-10 w-38  transition-all ease duration-200 ${dark ? "brightness-90 invert":""}`}/>
                </figure>
                   {/* title */}
                  <p 
                  className='
                  xs:text-sm
                  sm:text-sm
                  lg:text-md'>we have dishes thats suits your style and which you
                     are proud to woman to men</p> 
                     {/* for the link */}
                  <div className='mt-4 flex h-fit w-40 text-white justify-between'> 
                          <a href="https://www.instagram.com/" target='_blank' >
                              <FaInstagram
                                className='
                                xs:text-xl
                                md:text-xl
                                lg:text-2xl
                                '
                              />
                          </a>
                          <a href="https://www.facebook.com/"  target='_blank' >
                              <FaFacebook
                                 className='
                                 xs:text-xl
                                 md:text-xl
                                lg:text-2xl'
                              />
                          </a>
                          <a href="https://www.github.com/" target='_blank' >
                             <FaGithub
                                className='
                                xs:text-xl
                                md:text-xl
                                lg:text-2xl'
                             />
                          </a>
                          <a href="https://www.twitter.com/" target='_blank' >
                              <FaTwitter
                                  className='
                                  xs:text-xl
                                  md:text-xl
                                lg:text-2xl'
                              />  
                          </a>
                  </div> 
        </div>
        {/* second column */}
        <div className='w-fit md:ml-5 lg:mx-auto'>
                 <p className='font-semibold  capitalize pb-2  sm:text-lg lg:text-xl'>shopping and categories</p>
                   <ul className='capitalize font-light xs:leading-7 sm:leading-8 sm:text-left  text-center  xs:text-sm md:text-md'>
                       <li><Link to={'/menspage'}>men,s shopping</Link></li>
                       <li><Link to={"/womenspage"}>womens shopping</Link></li>
                       <li><Link to={"/kidspage"}>Kids shopping</Link></li>
                   </ul>
        </div>
        {/* third column */}
        <div className='w-fit'>
           <p className='font-semibold  capitalize pb-2 sm:text-lg lg:text-xl'>useful links</p>
                   <ul className='capitalize font-light xs:leading-7 sm:leading-8 sm:text-left xs:text-center xs:text-sm md:text-md '>
                       <li><Link to={'/'}>homepage</Link></li>
                       <li><Link to={'/aboutpage'}>about us</Link></li>
                       <li><Link to={'/helppage'}>help</Link></li>
                       <li><Link to={'/contactpage'}>contact us</Link></li>
                   </ul>

        </div>
        {/* fourth  column */}
        <div className='w-fit '>
              <p className='font-semibold  capitalize pb-2 sm:text-lg lg:text-xl'>help & information</p>
                   <ul className='capitalize font-light xs:leading-7  sm:leading-8 sm:text-left xs:text-center xs:text-sm  md:text-md'>
                       <li><Link to={'/faqpage'}>FAQs</Link></li>
                       <li><Link>shipping</Link></li>
                       <li><Link>tracking</Link></li>
                   </ul>
        </div>
       
    </div>
     <p className="uppercase mt-3 text-center text-white  xs:text-xs md:text-sm">
        @hexashop 2025 edition limited
      </p>
   </div> 
  )
}

export default Footer