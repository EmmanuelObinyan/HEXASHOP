import React from "react";
import Imagecomp from "./Imagecomp";
import {useTheme} from '../config/ThemeContext'
const Exploreproducts = () => {
     const{dark}=useTheme()
  return (
    <div
      className={`
    h-fit
    mb-2
    place-self-center
    grid
    ${dark ? "text-white":"text-gray-800"}
    sm:grid-cols-1
    md:grid-cols-2
    `}
    >
      <div
        className="
         xs:w-88
         sm:w-120 mx-auto 
         md:w-130 
         lg:w-200"
      >
        <h2
          className="
                text-center 
                capitalize
                 font-semibold
                 p-2
                 md:mt-20
                 lg:mt-50
                 md:text-3xl
                lg:text-4xl
                "
        >
          explore our products
        </h2>
        <p
          className="
                font-medium
                md:w-100
                lg:w-180
                xs:text-xs 
                sm:text-xs 
                md:text-xs mx-auto
                lg:text-lg
                md:leading-5.5
                lg:leading-8
                "
        >
          Welcome to HexaShop, your one-stop destination for fashion that
          inspires confidence and creativity. Our Explore Products collection is
          more than just a shop—it’s a world of carefully curated styles
          designed to elevate your everyday look and help you express who you
          truly are. Whether you re updating your wardrobe, finding the perfect
          piece for a special occasion, or simply treating yourself to something
          new, HexaShop brings you an exceptional variety of fashion essentials
          that combine quality, comfort, and timeless appeal. Step into our
          Mens Collection, where sophistication meets casual comfort. From
          crisp shirts and tailored trousers to relaxed T-shirts, denim, and
          versatile outerwear, every piece is designed to give you that
          effortless, modern edge. Pair them with our stylish men’s shoes and
          sleek accessories to complete a look that transitions seamlessly from
          work to weekend. Discover the elegance and versatility of our Women’s
          Collection, crafted for every mood and moment. Whether you’re looking
          for breezy dresses, trendy tops, cozy sweaters, or statement jackets,
          our pieces are made to complement your unique style. Add the finishing
          touches with chic handbags, delicate jewelry, and fashionable shoes
          that effortlessly move from day to night. For the little trendsetters,
          our Kids Collection offers adorable yet practical pieces that keep
          comfort and playfulness in perfect balance. From everyday basics to
          special-occasion outfits, HexaShop ensures that the youngest members
          of your family stay stylish and happy. 
        </p>
      </div>
      <div
        className="
          grid 
          place-self-center
          gap-3
          grid-cols-2
          md:w-110
          lg:w-165
          "
      >
        <Imagecomp
          bg_image="/product1.png"
          bg_headtext="leather bags"
          bg_text="Lorem Ipsum is simply dummy text "
        />
        <Imagecomp bg_image="/product2.png" bg_headtext="accessories" />
        <Imagecomp bg_image="/product3.png" bg_headtext="dressing" />
        <Imagecomp
          bg_image="/product4.png"
          bg_headtext="different types"
          bg_text={"Lorem Ipsum is simply dummy text "}
        />
      </div>
    </div>
  );
};

export default Exploreproducts;
