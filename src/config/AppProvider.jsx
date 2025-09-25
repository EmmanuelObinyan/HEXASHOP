import { AuthProvider } from "./AuthContext";
import React from "react";
import {CurrencyProvider} from './CurrencyContext'
import {ThemeProvider} from './ThemeContext'
import {AddressProvider} from './AddressContext'
import {CartProvider}  from './CartProvider'
export const AppProvider=({children})=>{
    return(
    <CurrencyProvider> 
    <ThemeProvider>
    <AddressProvider>
    <CartProvider>
     <AuthProvider>
       {children}
     </AuthProvider>
    </CartProvider>
    </AddressProvider>
    </ThemeProvider> 
   </CurrencyProvider>  
    )
}