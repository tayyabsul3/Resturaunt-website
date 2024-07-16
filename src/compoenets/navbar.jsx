import React, { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal";
import ShopStatus from "./ShopStatus";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showcart } from "../features/drawerSlice";
import Login from "./Login";
import myContext from "../context/myContext";

const Navbar = ({ displayrightnav }) => {
  // const drawerState = useSelector(state => state.Drawer.drawer);
  const context = useContext(myContext);
  const { setLoginStatus, loginstatus, UserImageURL } = context;

  const dispatch = useDispatch();
  const [Address, setAdress] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  let cartQTY = 0;
  function handlecartquantityupdate() {
    cartItems.map((item) => {
      cartQTY += item.quantity;
    });
  }
  // setTimeout(() => {
  //   setisOpen((prev) => (prev = !prev));
  // }, 10000);

  let address = document.querySelector(".address");
  if (Address != null) {
    address.textContent =
      Address.length > 20 ? Address.substring(0, 15) + "..." : Address;
  }

  function handleModalopen() {
    setisOpen((prev) => (prev = !prev));
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="h-112">
      {isOpen && (
        <Modal
          handleModalopen={handleModalopen}
          isOpen={isOpen}
          Address={Address}
          setAdress={setAdress}
        />
      )}
      <ShopStatus />

      <div className="sm:flex-row flex justify-between px-10 py-0 bg-yellow-400 items-center flex-row-reverse">
        <div
          className="location flex items-center gap-1 cursor-pointer"
          onClick={() => {
            setisOpen((prev) => (prev = !prev));
          }}
        >
          <FaLocationDot className="text-red-600 text-3xl" />
          <div className="deliverto flex flex-col ">
            <p>Deliver to</p>
            <p className="address text-sm">Address</p>
          </div>
        </div>
        <Link to={"/"}>
          <div className="w-20">
            <img src="./images/logo.webp" alt="Cheezious" />
          </div>
        </Link>
        {displayrightnav ? (
          <div className="toprightnav  text-3xl sm:flex justify-between gap-5 hidden">
            <div className="search  border-l-[1px]  border-red-600 p-2 cursor-pointer">
              <IoSearchSharp className="text-red-600 " />
            </div>
            <div className="account border-l-[1px] border-red-600 p-2 cursor-pointer transition duration-500">
              {console.log(UserImageURL)}
              {UserImageURL ? (
                <img
                  src={UserImageURL}
                  alt=""
                  className="text-red-600 relative w-[30px] bg-red-600 rounded-full"
                  onClick={toggleDropdown}
                />
              ) : (
                <RiAccountCircleFill
                  className="text-red-600 relative"
                  onClick={toggleDropdown}
                />
              )}

              {isDropdownOpen && (
                <div className="absolute mt-3 z-100 ">
                  <ul className="bg-red-500  text-lg w-[100px]">
                    <Link to={loginstatus ? "/signup" : "/login"}>
                      <li className="pl-2 hover:text-white hover:bg-red-600 w-full cursor-pointer py-2 ">
                        {loginstatus ? "Logout" : "Login"}
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                dispatch(showcart());
              }}
              className="cart border-l-[1px]  border-red-600 p-2 relative cursor-pointer"
            >
              <p className="cartquantity absolute bg-white rounded-[50%] text-[20px] font-bold w-6 h-6 flex justify-center items-center p-1  top-[-10px] left-[30px] bottom-1 border-[1px] border-black">
                {cartItems.length}
              </p>
              <FaShoppingCart className="text-red-600 " />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
