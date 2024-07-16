import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { IoLocation} from "react-icons/io5";


const Footer = () => {
  return (
    <div className="w-[90%] bg-white rounded-tr-2xl rounded-tl-2xl p-8 flex flex-col gap-5 mx-auto ">
      <div className="flex gap-5 flex-wrap flex-col lg:flex-row">
        <div className="logo w-full mx-auto flex ">
          <img
            src="./images/logo.webp"
            alt="logo"
            className="w-[150px] rounded-md mx-auto md:mx-0"
          />
          <div className="hidden md:flex flex-1 downloadlinks  justify-center gap-5 items-center mt-5 mb-5">
        <img src="./images/playstore.svg" alt="playstore" className="xl:w-[15%] w-[20%]" />
        <img src="./images/appstore.svg" alt="appstore" className="xl:w-[15%] w-[20%]" />
      </div>
        </div>
        <div className="information lg:w-[35%] ">
          <h1 className="font-bold text-lg">Brand Name</h1>
          <div className="phone flex gap-2 items-center">
            <FaPhone className="text-red-500" />
            <p>999-999-999</p>
          </div>
          <div className="mail flex gap-2 items-center">
            <FaEnvelope className="text-red-500" />
            <p>name@gamil.com</p>
          </div>
          <div className="location  flex gap-2 items-start">
            <IoLocation className=" text-red-500 mt-1" />
            <p className="w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aut
              eius necessitatibus excepturi.
            </p>
          </div>
        </div>
        <div className="timingandfollowbuttons ">
          <div className="timings ">
            <h1 className="font-bold text-lg">Our Timings</h1>
            <div className="timing flex gap-4 ">
              <p>Monday-Sunday</p>
              <p>03:00 PM - 03:30 AM</p>
            </div>
          </div>
          <div className="follow mt-5">
            <h1 className="font-bold text-lg">Follow Us</h1>
            <div className="timing flex gap-4 ">
              <a href="#">
                <FaFacebook className="text-3xl text-blue-700" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl text-orange-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    
      <div className="divider w-full border-[1px] border-black"></div>
      <p className="flex justify-center gap-1">
        <span> &#169; 2024 Powered by</span>
        <span className="font-bold  underline">Blink Co</span>.
      </p>
    </div>
  );
};

export default Footer;
