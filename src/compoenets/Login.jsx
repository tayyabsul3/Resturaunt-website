import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing useHistory
import { auth } from "../features/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import myContext from "../context/myContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { setLoginStatus, loginstatus, setUserImageURL } = context;

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("signing in: success");
      setLoginStatus(true);
      setEmail("");
      setPassword("");
      const avatarpic = auth.currentUser.photoURL;
      setUserImageURL(avatarpic);
      console.log(avatarpic);
      // Navigate to the home page after successful sign-in
      navigate("/"); // Assuming "/" is the path to your home page
    } catch (error) {
      setLoginStatus(false);
      console.log(loginstatus);

      console.error("Error signing in:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-400">
      <div className="bg-red-500 p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>{" "}
        {/* Updated heading */}
        <div className="space-y-4">
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={signIn}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Sign In {/* Updated button text */}
          </button>
        </div>
        <Link to={"/signup"}>
          <p className="mt-3">
            Don't have an account?
            <span className="text-gray-700 mx-5 cursor-pointer hover:text-white  hover:underline">
              Signup
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login; // Updated export name
