import React, { useContext, useState } from "react";
import { auth, googleProvider } from "../features/firebase";
import { Link, useNavigate } from "react-router-dom"; // Importing useHistory
import myContext from "../context/myContext";

import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(myContext);
  const { setLoginStatus, loginstatus, setUserImageURL, UserImageURL } =
    context;
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      // You can add navigation or other logic here after successful logout
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error (display error message, etc.)
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setUserImageURL(auth?.currentUser?.photoURL);
      navigate("/login");
      // You can add navigation or other logic here after successful signup
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error (display error message, etc.)
    }
  };
  const sigupWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const url = auth?.currentUser?.photoURL;
      setUserImageURL(url);
      console.log(UserImageURL);
      console.log();
      setLoginStatus(true);
      navigate("/");
      // You can add navigation or other logic here after successful signup
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400">
      <div className="bg-red-500 p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4 ">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="button" // Prevent form submission
            onClick={signUp} // Call signUp function on button click
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Sign Up
          </button>
          <button
            type="button" // Prevent form submission
            onClick={logout} // Call signUp function on button click
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            LOGOUT
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Or sign up with</p>
          <button
            onClick={sigupWithGoogle}
            className="mt-2 bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
