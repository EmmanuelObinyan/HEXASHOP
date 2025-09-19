import React from "react";
import Nav from "../components/Nav";
import {useCart} from '../config/CartProvider'
import women14 from "../assets/women14.png";
import women5 from "../assets/women5.png";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../config/useSearch";
import { menClothing } from "../Clothes";
import Search from "../components/Search";
const Menspage = () => {
    const{scrollRef}=useCart()
  // the universal search function
  const { query, setQuery, results } = useSearch(menClothing);
  return (
    <>
      <Nav />
      <div
        className={`xs:mt-22 
            sm:mt-25 md:mt-27 lg:mt-29 `}
      >
        <p className="capitalize font-medium mb-3 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md">
          {"homepage > men"}
        </p>
        <Search
          text={query}
          searchtext={"search all mens product"}
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
            text-gray-700 
          xs:text-xl
            sm:text-2xl
            lg:text-3xl
          "
          ref={scrollRef}
          >

            mens latest
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
          <ProductCard data={menClothing} show={true} />
        )}
        {query ? (
          ""
        ) : (
          <Collection
            head_text={"women"}
            image_1={women5}
            image_2={women14}
            navigation={"/womenspage"}
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
            text-gray-700 
          xs:text-xl
            sm:text-2xl
            lg:text-3xl
          "
          >
            casual
          </h2>
        )}
        {query ? "" : <ProductCard data={menClothing} show={false} />}
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Menspage;
