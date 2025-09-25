import { useContext, createContext } from "react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  //  for the cart
  const [productCart, setProductCart] = useState(() => {
    const saveditems = localStorage.getItem("items");
    return saveditems ? JSON.parse(saveditems) : [];
  });
  // cart for the cartpage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // for the add to product page
  const addProduct = (product) => {
    const items = productCart.find((item) => item.id === product.id);
    if (items) {
      setProductCart(
        productCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setProductCart([...productCart, { ...product, quantity: 1 }]);
    }
    toast.success("view product on product page", {
      style: {
        textTransform: "capitalize",
        fontWeight: "bold",
      },
    });
    setTimeout(() => {
      navigate("/productpage");
    }, 3000);
  };
  // to save items
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(productCart));
  }, [productCart]);
  // removing from product page
  const removeProduct = (id) => {
    setProductCart((productCart) =>
      productCart.filter((item) => item.id !== id)
    );
  };

  // for the scrolling into view
  const scrollRef = useRef(null);
  const handleScrollToTop = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // pushing products into cartpage
  const handleCart = (product) => {
    const items = cart.find((item) => item.id === product.id);
    if (items) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...items, quantity: items.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(
      `the ${product.name || product.title} has been added to cart`,
      { style: { textTransform: "capitalize", fontWeight: "bold" } }
    );
    setTimeout(() => {
      navigate("/cartspage");
    }, 2000);
  };
  //  increase quantity in the cart page
  const increaseQuantity = (product) => {
    const items = cart.find((item) => item.id === product.id);
    if (items) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...items, quantity: items.quantity + 1 }
            : item
        )
      );
    }
  };
  //  reduce quantity in the cartpage
  const decreaseQuantity = (product) => {
    const items = cart.find((item) => item.id === product.id);
    if (items.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };
  // to delete quantity from cart page
  const deleteCart = (id) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };
  //  for the sub total of items price in the cartpage
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // for the discount of items in the cartpage
  let price = 20 / 100;
  const discountPrice = price * totalPrice;
  // to store the shpping fee value
  const [shippingfee, setShippingFee] = useState(0);
  useEffect(() => {
    if (discountPrice >= 200) {
      setShippingFee(10.56);
    } else if (discountPrice <= 100) {
      setShippingFee(5.45);
    } else if (discountPrice <= 200) {
      setShippingFee(9.55);
    }
  }, [discountPrice]);

  const total = discountPrice + shippingfee;
  //  for the accessories page
  // api to fetch accessories data and its state
  const [accessories, setAccessories] = useState([]);
  // loading state
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/`);
      const data = await res.json();
      setAccessories(data);
    } catch (error) {
      if (error.code === "failed to fetch") {
        toast.error("an error occured,cant get items", {
          style: {
            textTransform: "capitalize",
            color: "gray",
          },
        });
      } else {
        console.log(error);
      }
    }
     finally{
      setLoading(false)
     }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // for the category in the cart page ,
  // another api
  const [categories, setCategories] = useState([]);
  const fetchDatas = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories");
      const data = await res.json();
      setCategories(data);
    } 
     catch (error) {
      if (error.code === "failed to fetch") {
        toast.error("an error occured,cant get items", {
          style: {
            textTransform: "capitalize",
            color: "gray",
          },
        });
      } else {
        console.log(error);
      }
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <CartContext.Provider
      value={{
        totalPrice,
        categories,
        discountPrice,
        setShippingFee,
        shippingfee,
        increaseQuantity,
        deleteCart,
        accessories,
        total,
        loading,
        decreaseQuantity,
        addProduct,
        removeProduct,
        cart,
        handleCart,
        productCart,
        scrollRef,
        handleScrollToTop,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
