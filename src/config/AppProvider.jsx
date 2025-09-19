import { AuthProvider } from "./AuthContext";
import React from "react";
import {AddressProvider} from './AddressContext'
import {CartProvider}  from './CartProvider'
export const AppProvider=({children})=>{
    return(
    <AddressProvider>
    <CartProvider>
     <AuthProvider>
       {children}
     </AuthProvider>
    </CartProvider>
    </AddressProvider>
    )
}