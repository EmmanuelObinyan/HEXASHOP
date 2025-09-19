import React from 'react'
import {useCart} from '../config/CartProvider'
import Footer from '../components/Footer'
import FaqComp from '../components/FaqComp'
import Nav from '../components/Nav'
const FAQ = () => {
   const{scrollRef}=useCart()
  return (
    <>
        <Nav/>
        <div className='xs:mt-16 sm:mt-17 md:mt-19 lg:mt-22 relative'>
           <div className='xs:h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] ' style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url('/womanlogin.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center",
            backgroundSize: "cover",
          }} ref={scrollRef}>
            <p className=' absolute text-white  font-semibold top-[10%] xs:left-[7%] sm:left-[15%] md:left-[25%] xs:text-3xl sm:text-4xl  lg:text-6xl capitalize'>frequently asked questions</p>
           </div>
              <div className='place-self-center md:-mt-[17%] gap-10 h-fit xs:w-[22rem] sm:w-[35rem] md:w-[55rem] lg:w-[65rem] mb-4 grid xs:grid-cols-1 md:grid-cols-3'>
                                 <FaqComp
                                  title={"how long have you been ?"}
                                  text="Have questions about our products or services? 
                                   we have been around 6 years now, and trust us we have delivered alot 
                                   to nations worldwide
                                    and lets make shopping with HEXASHOP easy and seamless for you."
                                   
                                 />
                                 <FaqComp
                                  title='can i get a fashion desginer here ?'
                                  text='you can get fashion designers here,quality ones.we design different clothes also
                                   there lots more to check on our clothes,
                                  '
                                 />
                                 <FaqComp
                                  title='how fast is your delivery'
                                  text='we have delivered fast orders to customers and gotten nice reviews on it.
                                   we deliver speedily and effective on time.if you still have anything in mind to ask
                                   you can contact us, and get more informations from us
                                  '
                                 />
                                 <FaqComp
                                  title="network issues"
                                  text='experiencing network issues comes once in a while,but it has been sorted out
                                  now that we have enhanced our technologies to boost network and sharing providers
                                  between our customers, so as at now its all good'
                                 />
                                 <FaqComp
                                  title='referal bonus'
                                  text='we give referal bonuses to users who refer people to web application
                                  to purchase goods and services, and also give bonus and funds to affliates.
                                  if you need more questions on this contact us'
                                 />
                                 <FaqComp
                                 title='about our marketing agency'
                                 text='we have series of marketers and agency doing advertisement for us.we also pay influencer also
                                 to market our services,we wouldnt want anybody to left out in receiving good ,quality services from us'
                                 />
                              </div>
                        <Footer/>
          </div> 
        </>
  )
}

export default FAQ;