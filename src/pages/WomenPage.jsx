import React from "react";
import Nav from "../components/Nav";
import men1 from "../assets/men1.png";
import men3 from "../assets/men3.png";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import ProductCard from "../components/ProductCard";
import {useCart} from '../config/CartProvider';
import { useSearch } from "../config/useSearch";
import { womenClothing } from "../Clothes";
import Search from "../components/Search";
const WomenPage = () => {
  const { scrollRef } = useCart();
  const { query, setQuery, results } = useSearch(womenClothing);
  return (
    <>
      <Nav />
      <div
        className={`xs:mt-22 
                       sm:mt-25 md:mt-27 lg:mt-29 `}
      >
        <p className="capitalize font-medium mb-2 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md">
          {"homepage > women"}
        </p>
        <Search
          text={query}
          searchtext={"search all womens product"}
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
            womens latest
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
          <ProductCard data={womenClothing} show={true} />
        )}

        {query ? (
          ""
        ) : (
          <Collection
            head_text={"men"}
            image_1={men1}
            image_2={men3}
            navigation={"/menspage"}
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
        {query ? "" : <ProductCard data={womenClothing} show={false} />}
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default WomenPage;
