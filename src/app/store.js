import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import drawerReducer from "../features/drawerSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    Drawer: drawerReducer,
  },
});
