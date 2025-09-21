import React from "react";
import Header from "../components/Header";
import Exploreproducts from "../components/Exploreproducts";
import Main from "../components/Main";
import LoadingComp from "../components/LoadingComp";
import ScrollerDiv from "../components/ScrollerDiv";
import Nav from "../components/Nav";
import { useAuth } from "../config/AuthContext";
import { useCart } from "../config/CartProvider";
import Browse from "../components/Browse";
import Footer from "../components/Footer";
const Home = () => {
  const { scrollRef } = useCart();
  const { loading } = useAuth();
  return (
    <>
      {loading ? <LoadingComp /> : ""}
      <Nav />
      <div className="xs:mt-18 sm:mt-20 md:mt-24 lg:mt-25">
        <Header ref={scrollRef} />
        <ScrollerDiv />
        <Main />
        <Exploreproducts />
        <Browse />
        <Footer />
      </div>
    </>
  );
};

export default Home;
