import React, { useState } from "react";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./navbar";
import { addtocart } from "../features/cartSlice";

export const Product = () => {
  /* Object that i need to work with
{
    "id": 14,
    "name": "Chicken Mushroom",
    "description": "Tender Chunks of Marinated Grilled Chicken Tikka, Lots of Mushrooms, Onion and Tomato Sauce",
    "price": 590,
    "category": "Somewhat Sooper",
    "image": "./images/Chicken Mushroom.webp",
    "hasRange": true,
    "quantity": 1,
    "startingfrom": {
        "Small": 590,
        "Regular": 1250,
        "Large": 1650,
        "Party": 2700
    }
}

  */
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const location = useLocation();
  const { product, setDraweropen } = location.state;
  const {
    quantity,
    name,
    image,
    description,
    price,
    category,
    hasRange,
    id,
    startingfrom,
  } = product;
  let item = {};
  const [bill, setbill] = useState(price);
  const [Quantity, setQuantity] = useState(quantity);

  return (
    <>
      <Navbar displayrightnav={true} />
      <div className="flex flex-col">
        <div className="product p-2 md:p-4 lg:p-8">
          <div className="card bg-white max-w-[1500px] p-2 rounded-lg border-2  border-white    shadow-sm cursor-pointer mx-auto">
            <div className="links">
              <Link to={"/"} className="text-md pr-1">
                Home
              </Link>{" "}
              <FaGreaterThan className="inline text-[10px] text-gray-600 " />
              <span className="text-yellow-500 px-1 text-sm">{name}</span>
            </div>
            <div className="flex py-6 flex-col lg:flex-row">
              <div className="image w-[60%] relative mb-4 mx-auto md:w-[40%] lg:p-10">
                <img src={image} alt="logo" className="rounded-2xl w-full" />
              </div>

              <div className="description mt-2 text-left p-2 ml-10 flex flex-col lg:p-10 flex-1 justify-between">
                <div>
                  <div>
                    <h1 className="font-bold text-3xl text-center lg:text-left">
                      {name}
                    </h1>
                    <p className=" text-sm text-center lg:text-left mb-3">
                      {description}
                    </p>
                  </div>
                  <div className="options">{hasRange ? "" : ""}</div>
                </div>

                <div className="flex gap-6 flex-col lg:flex-row">
                  <div className="quantitycontroller flex gap-1 items-center justify-center ">
                    <button
                      className="subtract-button md:h-12 bg-red-500 px-4 py-1 text-3xl rounded-3xl
                   "
                      onClick={() => {
                        if (Quantity === 1) {
                          alert("cannot be negatice");
                          return;
                        }
                        setQuantity((prev) => (prev -= 1));
                        console.log(bill);
                        setbill(price * Quantity);
                        console.log(Quantity);
                      }}
                    >
                      -
                    </button>
                    <p className="md:h-12 border-[1px] px-4 border-gray-300 md:px-6 py-1 text-3xl rounded-3xl bg-white ">
                      {Quantity}
                    </p>
                    <button
                      on
                      onClick={() => {
                        setQuantity((prev) => (prev += 1));
                        setbill((prev) => (prev += 590));
                        console.log();
                        console.log(Quantity);
                      }}
                      className="add-button md:h-12 bg-red-500 px-4 py-1 text-3xl rounded-3xl "
                    >
                      +
                    </button>
                  </div>
                  <div
                    className="pricing flex justify-between md:px-5 md:gap-10  items-center mx-auto bg-red-600 font-bold py-3 rounded-full ml-auto hover:bg-yellow-400 md:w-[80%] lg:w-[60%]  text-white hover:text-black mt-1 mb-1 transition duration-100
                    w-full px-5
                    "
                    onClick={() => {
                      item = {
                        id,
                        name,
                        description,
                        price,
                        category,
                        image,
                        quantity: Quantity,
                      };

                      dispatch(addtocart(item));

                      setQuantity(1);
                      setbill(price);
                    }}
                  >
                    <h3>Rs {bill.toFixed(2)}</h3>
                    <button className="addtocartbutton">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" self-end">
          <Footer />
        </div>
      </div>
    </>
  );
};
