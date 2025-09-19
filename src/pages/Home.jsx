import React from 'react'
import Header from '../components/Header'
import Exploreproducts from '../components/Exploreproducts'
import Main from '../components/Main'
import ScrollerDiv from '../components/ScrollerDiv'
import Nav from '../components/Nav'
import { useCart } from '../config/CartProvider'
import Browse from '../components/Browse'
import Footer from '../components/Footer'
const Home = () => {
   const{scrollRef}=useCart()
  return (
    <>
      <Nav/>
    <div className='xs:mt-18 sm:mt-20 md:mt-24 lg:mt-25'>
       <Header 
        ref={scrollRef}
       />
       <ScrollerDiv/>
       <Main/>
       <Exploreproducts/>
       <Browse/>
       <Footer/>
      </div>
      </>
  )
}

export default Home