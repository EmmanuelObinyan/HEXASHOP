import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import WomenPage from "./pages/WomenPage";
import Contact from "./pages/Contact";
import Address from "./pages/Address";
import OrderPage from "./pages/OrderPage";
import FlutterWave from "./pages/FlutterWave";
import DeliveryCheckout from "./pages/DeliveryCheckout";
import PersonalInfo from "./pages/PersonalInfo";
import Aboutpage from "./pages/Aboutpage";
import ProductPage from "./pages/ProductPage";
import Kids from "./pages/Kids";
import PaystackPage from "./pages/PaystackPage";
import Preference from "./pages/Preference";
import PaymentPage from "./pages/PaymentPage";
import Menspage from "./pages/Menspage";
import CartPage from "./pages/CartPage";
import Settingspage from "./pages/Settingspage";
import Notfound from "./pages/Notfound";
import FAQ from "./pages/FAQ";
import Accessories from "./pages/Accessories";
import Help from "./pages/Help";
import { useAuth } from "./config/AuthContext";
import Signup from "./pages/Signup";
import Forgottenpassword from "./pages/Forgottenpassword";
import Home from "./pages/Home";
import LoadingComp from './components/LoadingComp'
import ProtectedRoute from "./config/ProtectedRoute";
function App() {
  const { user,loading } = useAuth();
  return (
    <div>
       {loading ? <LoadingComp/> : ""} 
      <Routes>
        <Route path="/orderspage" element={<OrderPage />} />
        <Route
          path="/flutterwavepage"
          element={
            <ProtectedRoute user={user}>
              <FlutterWave />
            </ProtectedRoute>
          }
        />
        <Route
          path="/paystackpage"
          element={
            <ProtectedRoute user={user}>
              <PaystackPage />
            </ProtectedRoute>
          }
        />
        <Route path="/preferencepage" element={<Preference />} />
        <Route path="/paymentpage" element={
          <ProtectedRoute user={user}>
          <PaymentPage />
          </ProtectedRoute>
          } />
        <Route path="/addresspage" element={<Address />} />
        <Route path="/deliverycheckoutpage" element={
          <ProtectedRoute user={user}>
          <DeliveryCheckout />
           </ProtectedRoute>
          } />
        <Route path="/personalpage" element={<PersonalInfo />} />
        <Route path="/accessoriespage" element={<Accessories />} />
        <Route path="/helppage" element={<Help />} />
        <Route path="/faqpage" element={<FAQ />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/contactpage" element={<Contact />} />
        <Route path="/settingspage" element={<Settingspage />} />
        <Route path="/menspage" element={<Menspage />} />
        <Route path="/kidspage" element={<Kids />} />
        <Route path="/cartspage" element={<CartPage />} />
        <Route path="/womenspage" element={<WomenPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/forgotten" element={<Forgottenpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
