import React from "react";
import Nav from "../components/Nav";
import kid3 from "../assets/kid3.png";
import kid7 from "../assets/kid7.png";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../config/useSearch";
import {useCart} from '../config/CartProvider';
import {useTheme} from '../config/ThemeContext'
import { kidClothing } from "../Clothes";
import Search from "../components/Search";
const Kids = () => {
  const { query, setQuery, results } = useSearch(kidClothing);
  const { scrollRef } = useCart();
  const{dark}=useTheme()
  return (
    <>
      <Nav />
      <div
        className={`xs:mt-22 transition-all ease duration-200
            ${dark ? "text-white":"text-gray-700"} sm:mt-25 md:mt-27 lg:mt-29 `}
      >
        <p className="capitalize font-medium w-fit mb-3 ml-4 xs:text-sm sm:text-md">
          {"homepage > kids"}
        </p>
        <Search
          text={query}
          searchtext={"search all kids product"}
          handleChange={(e) => setQuery(e.target.value)}
        />

        {results.length === 0 ? (
          ""
        ) : (
          <h2
            className="mt-4
                               text-center 
                               border-b-1
                               border-gray-300
                               shadow
                               uppercase pb-3 
                               font-bold
                              
                              xs:text-xl
                                sm:text-2xl
                                lg:text-3xl
                              "
                              ref={scrollRef}
          >
            kids latest
          </h2>
        )}
        {results.length === 0 ? (
          <p className="text-center xs:mt-7 sm:mt-3 md:mt-0   xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold capitalize">
            no result found
          </p>
        ) : (
          ""
        )}
        {results ? (
          <ProductCard data={results} show={true} />
        ) : (
          <ProductCard data={kidClothing} show={true} />
        )}
        {query ? (
          ""
        ) : (
          <Collection
            head_text={"kids"}
            image_1={kid3}
            image_2={kid7}
            navigation={"/kidspage"}
          />
        )}
        {/* for casual */}
        {query ? (
          ""
        ) : (
          <h2
            className="mt-4
                               text-center 
                               border-b-1
                               border-gray-300
                               shadow
                               uppercase pb-3 
                               font-bold
                              
                              xs:text-xl
                                sm:text-2xl
                                lg:text-3xl
                              "
          >
            casual
          </h2>
        )}
        {query ? "" : <ProductCard data={kidClothing} show={false} />}
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Kids;
