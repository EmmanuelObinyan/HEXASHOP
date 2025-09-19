import React from "react";
import AboutComp from "../components/AboutComp";
import Footer from "../components/Footer";
import {useCart} from '../config/CartProvider'
import AboutPic from "../components/AboutPic";
import Nav from "../components/Nav";
const Aboutpage = () => {
    const{scrollRef}=useCart()
  return (
    <>
      <Nav />
      <div className="xs:mt-22 sm:mt-25 md:mt-25 lg:mt-29">
        <div
          className="mb-5 py-2  bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url('/womanlogin.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
           ref={scrollRef}
        >
          <p className="text-center capitalize font-semibold mb-3 text-white xs:text-2xl sm:text-3xl md:text-3xl lg:text-5xl">
            about us
          </p>
          {/* first layout */}
          <div className="w-[95%] grid place-self-center xs:grid-cols-1 md:grid-cols-2">
            <AboutComp
              cardTitle="mission statement"
              cardText=" At HEXASHOP, our mission is to provide a seamless and enjoyable online
        shopping experience by offering quality fashion and lifestyle products
       at affordable prices. We are committed to innovation, customer
        satisfaction, and creating a platform that connects people with the
       latest trends while ensuring convenience, trust, and reliability in
        every transaction."
            />
            <AboutComp
              cardTitle="vision statement"
              cardText="Our vision at HEXASHOP is
      to become a leading global e-commerce 
    destination where fashion and lifestyle meet
    innovation. We aim to empower individuals by
    making style accessible to everyone,
    building a trusted community of shoppers,
    and continuously enhancing the 
    digital shopping experience with creativity,
    technology, and excellence.”"
              cardClassname={"about-container"}
            />
          </div>
          {/* second layout */}
          <div className="my-4 w-[95%] items-center grid place-self-center xs:grid-cols-1 md:grid-cols-2">
            <AboutPic />
            <div>
              <AboutComp
                cardTitle="core values"
                cardClassname={"core-classname"}
                cardText="  At HEXASHOP, we place our customers at the center of everything we do, ensuring their satisfaction and trust remain our top priority.
 We embrace innovation by combining creativity and technology to deliver a modern and seamless shopping experience.
 We are committed to providing only high-quality products that meet the needs and expectations of our users.
 Integrity guides our business, as we operate with honesty, transparency, and responsibility at all times.
 We believe fashion and lifestyle should be accessible and affordable to everyone, regardless of background."
              />
              <AboutComp
                cardTitle="brief history of company"
                cardText="At HEXASHOP, we place our customers at the center of everything we do, ensuring their satisfaction and trust remain our top priority.
 We embrace innovation by combining creativity and technology to deliver a modern and seamless shopping experience.We are committed to providing only high-quality products that meet the needs and expectations of our users.
 Integrity guides our business, as we operate with honesty, transparency, and responsibility at all times.
We believe fashion and lifestyle should be accessible and affordable to everyone, regardless of background."
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Aboutpage;
