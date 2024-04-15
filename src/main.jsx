import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from "./compoenets/Product.jsx";
import Login from "./compoenets/Login.jsx";
import Signup from "./compoenets/Signup.jsx";
import Mystate from "./context/myState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Mystate>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  </Mystate>
);
