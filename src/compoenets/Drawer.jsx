import React, { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import {
  clearcart,
  decreaseQuantity,
  increaseQuantity,
  removerfromcart,
} from "../features/cartSlice";
import { showcart } from "../features/drawerSlice";
import { CgClose } from "react-icons/cg";

const Drawer = () => {
  // Function to handle clearing the cart
  const handleClearCart = () => {
    // Clear the cart by setting cartItems to an empty array

    dispatch(clearcart());
    setgrandTotal(0);

    setTimeout(() => {
      dispatch(showcart());
    }, 1000);
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Function to handle increasing the quantity
  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
    // setCartItems((prevCartItems) =>
    //   prevCartItems.map((item) =>
    //     item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    //   )
    // );
  };

  // Function to handle decreasing the quantity
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));

    // setCartItems((prevCartItems) =>
    //   prevCartItems.map((item) =>
    //     item.id === itemId && item.quantity > 1
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item
    //   )
    // );
  };
  const deleteItemfromcart = (itemId) => {
    if (cartItems.length === 1) {
      setgrandTotal(0);
      dispatch(removerfromcart(itemId));
      return;
    }
    dispatch(removerfromcart(itemId));

    cartItems.map((item) => {
      price = item.quantity * item.price;
      subtotal += price;
      setgrandTotal(subtotal);
    });
  };
  const [grandTotdal, setgrandTotal] = useState(0);
  let price = 0;
  let subtotal = 0;

  useEffect(() => {
    const calculatePrice = () => {
      cartItems.map((item) => {
        price = item.quantity * item.price;
        subtotal += price;
        setgrandTotal(subtotal);
      });
    };
    calculatePrice();
  }, [cartItems]);

  function goToCheckoutPage() {
    alert("running server command");
    fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        items: [
          { id: 1, quantity: 2 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
    alert("running server command");
  }

  return (
    <>
      <div
        className=" cursor-pointer fixed top-0 right-0 bg-black h-[100vh] w-full opacity-[60%]"
        onClick={() => {
          dispatch(showcart());
        }}
      >
        {" "}
      </div>
      <div className="z-50 rounded-bl-xl rounded-tl-xl p-2 px-4 fixed top-0 right-0 bg-white h-[100vh] w-full md:w-[500px] transition duration-150">
        <div className="">
          <div className="label flex justify-between relative">
            <h1 className="text-xl font-semibold ">Cart</h1>
            <button
              className=" text-xl md:text-2xl text-yellow-500 hover:underline hover:text-yellow-400"
              onClick={handleClearCart} // Attach onClick event handler
            >
              Clear cart
            </button>
            <button
              className=" text-xl md:text-2xl text-black hover:underline hover:text-2xl"
              onClick={() => {
                dispatch(showcart());
              }} // Attach onClick event handler
            >
              <CgClose className="text-3xl" />
            </button>
          </div>

          <div className="cart_products max-h-[75%]   fixed top-10 overflow-y-scroll">
            <div className="divider mt-4 w-full border-[1px] border-gray-400"></div>
            {cartItems.map((item) => (
              <div className="item flex p-2  gap-2" key={item.id}>
                <div className="img w-[30%]">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-[130px] rounded-md"
                  />
                </div>
                <div className="info flex flex-col justify-between w-full">
                  <div className="title">
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="text-sm">{item.description}</p>
                  </div>
                  <div>
                    <p className="text-right my-1">
                      RS {item.quantity * item.price}.00
                    </p>
                    <div className="modify_item flex justify-between">
                      <div className="qty_controller flex items-center justify-center rounded-full  ">
                        <button
                          className="subtract-button px-2  text-white active:mt-[2px]  bg-red-500 hover:bg-yellow-300  rounded-full"
                          onClick={() => handleDecreaseQuantity(item.id)} // Decrease quantity onClick
                        >
                          -
                        </button>
                        <p className="mx-1 rounded-lg border-gray-600 border-[1px] px-3 ">
                          {item.quantity}
                        </p>
                        <button
                          className="add-button text-white  active:mt-[4px] px-2  bg-red-500 hover:bg-yellow-300   rounded-full "
                          onClick={() => handleIncreaseQuantity(item.id)} // Increase quantity onClick
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          deleteItemfromcart(item.id);
                        }}
                      >
                        <IoTrashBin fontSize={"25px"} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout fixed  bottom-0 w-[90%] md:w-[450px] p-2 bg-white">
            <div className="subtotal flex justify-between w-ful border-t pt-2 bt-[1px] px-4 ">
              <h1 className="text-gray-500"> Subtotal</h1>
              <p className="text-gray-500">Rs {grandTotdal}.00</p>
            </div>
            <div className="delivery flex justify-between w-full px-4">
              <h1 className="text-gray-500"> Delivery Charges</h1>
              <p className="text-gray-500">Rs 0.00</p>
            </div>
            <div className="g_total flex justify-between w-full  px-4">
              <h1 className="font-bold text-xl">Grand total</h1>
              <p className="text-gray-400 font-bold"> Rs {grandTotdal}.00</p>
            </div>
            <button
              onClick={() => {
                goToCheckoutPage();
                setDraweropen(false);
              }}
              className="w-full bg-red-500 p-3 rounded-full text-white font-bold mt-2 hover:bg-gray-200"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
