import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "../config/ThemeContext";
import { Link } from "react-router-dom";
import { db } from "../config/Firebase";
import { useAuth } from "../config/AuthContext";
import LoadingComp from "../components/LoadingComp";
import { getDocs, collection } from "firebase/firestore";
import { HiEmojiSad } from "react-icons/hi";
import OrderComp from "../components/OrderComp";
const OrderPage = () => {
  const { dark } = useTheme();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
         setLoading(false)
        console.log("no user")
           return;
    }
      try {
        const ref = collection(db, "users", user.uid, "orders");
        const items = await getDocs(ref);
        const snap = items.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrder([].concat(...snap.map((order) => order.items)));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user?.uid]);
  if (loading) {
    return <LoadingComp />;
  }
  return (
    <div
      className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 transition-all ease-in-out duration-300 ${
              dark ? "bg-[#1A1D29] text-white" : "bg-[white] text-gray-700"
            } `}
    >
      <Link
        className="capitalize font-semibold mb-3 w-fit ml-4 xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
        to={"/settingspage"}
      >
        back to settings
      </Link>
      <h2
        className="mt-8
           text-left
           lg:ml-[20%]
           md:ml-[15%]
           sm:ml-[13%]
           xs:ml-[9%]
           uppercase pb-3 
           font-bold
          xs:text-md
            sm:text-xl
            lg:text-2xl
          "
      >
        my orders
      </h2>

      {order.length >= 1 ? (
        <OrderComp products={order} />
      ) : (
        <div
          className={`flex 
                        justify-self-center
                         p-3 h-[35rem]  
                          ${dark ? "bg-[#1A1D25]" : ""}
                         `}
        >
          <HiEmojiSad className="text-gray-400 xs:text-6xl sm:text-8xl  lg:text-9xl xs:mt-55 sm:mt-50 mr-4" />
          <p
            className="w-fit mt-60 capitalize 
                            font-medium
                             text-gray-500 
                             xs:text-2xl 
                            text-center 
                            sm:text-3xl 
                            md:text-4xl 
                            lg:text-5xl"
          >
            no orders made
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
