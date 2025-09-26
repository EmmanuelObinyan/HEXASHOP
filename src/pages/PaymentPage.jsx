import React, { useState, useEffect } from "react";
import { MdOutlinePayments } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../config/AuthContext";
import { db } from "../config/Firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import LoadingComp from "../components/LoadingComp";
import { useCart } from "../config/CartProvider";
import { FaMinusCircle } from "react-icons/fa";
import { useCurrency } from "../config/CurrencyContext";
import bankimg from "../assets/bankimage.png";
import { useAddress } from "../config/AddressContext";
import { useTheme } from "../config/ThemeContext";
import Checkout from "../components/Checkout";
const PaymentPage = () => {
  const { option, currencyData, value } = useCurrency();
  const { shippingfee, cart, total } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const { dark } = useTheme();
  const { deliveryAddress, details } = useAddress();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  // for the currenct change
  const totalPrice = ` ${option === "NGN" ? "NGN" : "$"} ${
    option === "NGN" ? Math.round(currencyData * total) : total
  }`;
  // to navigate the user
  console.log(selected);
  useEffect(() => {
    if (selected === "pay with paystack") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        navigate("/paystackpage");
      }, 3000);
      return () => clearTimeout(timer);
    } else if (selected === "pay with flutterwave") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        navigate("/flutterwavepage");
      }, 3000);
      return () => clearTimeout(timer);
    } else if (selected === "payment on delivery" || value) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [selected, value, navigate]);
  // condition rendering for pay on delivery
  useEffect(() => {
    const fetchData = async () => {
      const orderId = "ORD" + Date.now();
      if (selected === "payment on delivery" || value) {
        // to check user information
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          console.log("it exists");
          try {
            await setDoc(doc(db, "users", user.uid, "orders", orderId), {
              items: cart,
              item_price: totalPrice,
            });
            toast.success("ordered successfully", {
              style: {
                textTransform: "capitalize",
                fontWeight: "bold",
                color: "gray",
              },
            });
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } catch (error) {
            console.log(error);
          }
        }
        if (!snap.data()) {
          setLoading(false);
          toast.error("update profile info to order", {
            style: {
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "gray",
            },
          });
          setTimeout(() => {
            setSelected("");
          }, 2000);
          return;
        }
      }
    };
    fetchData();
  }, [selected, value, user?.uid]);
    if(loading)return <LoadingComp/>
  return (
    <>
      
      <Toaster />
      <div
        className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 transition-all ease duration-200 ${
              dark ? "text-white bg-[#1A1D28]" : "text-gray-700 bg-white"
            } `}
      >
        <Link
          className="capitalize font-semibold mb-3 w-fit ml-4  xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
          to={"/deliverycheckoutpage"}
        >
          back to checkout
        </Link>

        <h2
          className="mt-4
           text-center 
           uppercase pb-3 
           font-bold
          xs:text-lg
            sm:text-xl
            lg:text-2xl
          "
        >
          select payment method
        </h2>
        <Checkout />
        {/* for the payment method and delivery */}
        <section className="mt-8 xs:w-[95%] sm:w-[80%] md:w-[70%] mx-auto">
          {deliveryAddress.length >= 1 ? (
            <FaCheckCircle className="text-green-600" />
          ) : (
            <FaMinusCircle className="text-gray-700" />
          )}
          <p
            className={`flex  items-center justify-between xs:text-md sm:text-lg md:text-xl lg:text-2xl font-medium capitalize transition-all ease duration-200 ${
              dark ? "text-white" : "text-gray-400"
            } `}
          >
            customer address
            <span
              className=" mr-1 xs:text-xs md:text-sm lg:text-md text-orange-400 font-light cursor-pointer"
              onClick={() => navigate("/addresspage")}
            >
              change
            </span>
          </p>
          {deliveryAddress.map((item, index) => (
            <div
              className={` ${
                dark ? "" : "bg-gray-50"
              } border-1 border-gray-200 pb-2 xs:h-20 md:h-17 lg:h-18 px-3  `}
              key={index}
            >
              <p className="capitalize mt-4 mb-2  font-semibold text-sm">
                {`${item.firstname}  ${item.lastname}`}
              </p>
              {/* the picked customer address */}
              <p className="capitalize font-light  xs:text-xs md:text-sm">
                {`${
                  item.address.length > 30
                    ? item.address.slice(0, 30)
                    : item.address
                }${item.address.length > 30 ? "..." : ""}`}
              </p>
            </div>
          ))}
          {/* for the delivery details */}
          <FaCheckCircle className="text-green-600 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-15" />
          <p
            className={`flex  items-center justify-between xs:text-md sm:text-lg md:text-xl lg:text-2xl font-medium capitalize  transition-alll duration-200 ease ${
              dark ? "text-white" : "text-gray-400"
            }`}
          >
            delivery details
            <span
              className=" mr-1 xs:text-xs md:text-sm lg:text-md text-orange-400 font-light cursor-pointer"
              onClick={() => navigate("/deliverycheckoutpage")}
            >
              change
            </span>
          </p>
          <div
            className={`mt-3 border-1 border-gray-200  lg:h-[7rem] p-2 mb-3 ${
              dark ? "" : "bg-gray-50"
            }`}
          >
            {details.map((item) => (
              <div key={item.id}>
                <p className="capitalize font-medium  py-2 xs:text-sm md:text-md lg:text-lg">
                  {item.method}(
                  {`  ${option === "NGN" ? "NGN" : "$"} ${
                    option === "NGN"
                      ? Math.round(currencyData * shippingfee)
                      : shippingfee
                  }`}
                  )
                </p>
                <p className="capitalize  mt-2 font-medium  xs:text-xs md:text-sm lg:text-md">
                  {item.delivery}
                </p>
              </div>
            ))}
          </div>
          {/* for the payment method */}
          <p
            className={`flex  items-center xs:text-lg  md:text-xl lg:text-2xl mt-15 font-medium capitalize transition-all ease duration-200 ${
              dark ? "text-white" : "text-gray-400"
            }`}
          >
            payment options
          </p>

          <div
            className={`mt-3 ${
              dark ? "" : "bg-gray-50"
            } border-1 border-gray-200 lg:h-[7rem] p-2 mb-3 `}
          >
            <aside className="flex justify-between items-center xs:w-[85%] sm:w-[65%] md:w-[60%] lg:w-[40%]">
              <select
                name=""
                id=""
                value={selected}
                className={`xs:p-2 lg:p-3 xs:w-[75%] sm:w-[70%] md:w-[70%] lg:w-[60%] capitalize  font-semibold xs:text-xs sm:text-sm  lg:text-lg transition-all ease duration-200 ${
                  dark ? "bg-[#1A1D25]" : "bg-white"
                }`}
                onChange={handleChange}
              >
                <option value="">choose payment method</option>
                <option value="payment on delivery">payment on delivery</option>
                <option value="pay with paystack">pay with paystack</option>
                <option value="pay with flutterwave">
                  pay with flutterwave
                </option>
              </select>
              <MdOutlinePayments className="xs:text-2xl  md:text-3xl lg:text-5xl  lg:mr-25" />
            </aside>
            {/* image  */}
            <img src={bankimg} className="mt-3 p-1" alt="" />
          </div>

          {/* <div className={` justify-center flex ${selected === "payment on delivery"|| value ? "transition-all ease duration-300 hidden":"flex transition-all ease duration-300"} ${selected === ""? "pointer-events-none opacity-80":""}`}>
                <Button btnText={"confirm order"} /> 
            </div> */}
        </section>
      </div>
      <p
        className={`uppercase my-8 text-center xs:text-xs md:text-sm transition-all ease duration-200 ${
          dark ? "text-white" : "text-gray-700"
        }`}
      >
        @hexashop 2025 edition limited
      </p>
    </>
  );
};

export default PaymentPage;
