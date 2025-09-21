import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import WomenPage from './pages/WomenPage'
import Contact from './pages/Contact'
import Address from './pages/Address'
import DeliveryCheckout from './pages/DeliveryCheckout'
import PersonalInfo from './pages/PersonalInfo'
import Aboutpage from './pages/Aboutpage'
import ProductPage from './pages/ProductPage'
import Kids from './pages/Kids'
import Preference from './pages/Preference'
import PaymentPage from './pages/PaymentPage'
import Menspage from './pages/Menspage'
import CartPage from './pages/CartPage'
import Settingspage from './pages/Settingspage'
import Notfound from './pages/Notfound'
import FAQ from './pages/FAQ'
import Accessories from './pages/Accessories'
import Help from './pages/Help'
import Signup from './pages/Signup'
import Forgottenpassword from './pages/Forgottenpassword'
import Home from './pages/Home'
function App() {
  return (
    <>
    <Routes>
       <Route path='/preferencepage' element ={<Preference/>} />
       <Route path='/paymentpage' element={<PaymentPage/>} />
       <Route path='/addresspage' element={<Address/>} />
       <Route path='/deliverycheckoutpage' element={<DeliveryCheckout/>}/> 
        <Route path='/personalpage' element={<PersonalInfo/>} />
        <Route path='/accessoriespage' element={<Accessories/>} />    
        <Route path='/helppage' element={<Help/>} />
        <Route path ='/faqpage' element={<FAQ/>} />
        <Route path='*' element={<Notfound/>} />
        <Route path='/aboutpage' element={<Aboutpage/>} />
        <Route path='/contactpage' element={<Contact/>} />
        <Route path='/settingspage' element={<Settingspage/>} />
        <Route path='/menspage' element={<Menspage/>} />
        <Route path='/kidspage' element={<Kids/>} />
        <Route path="/cartspage" element={<CartPage/>} />
        <Route path="/womenspage" element={<WomenPage/>} />
        <Route path="/productpage" element={<ProductPage/>} />
        <Route path='/forgotten' element={<Forgottenpassword/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signin' element={<Signup/>}/>
        <Route path="/" element={<Home/>}  />
    </Routes>
    </>
  )
}

export default App
