import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const { id } = action.payload;
      const producttoadd = state.cartItems.findIndex((item) => {
        return item.id === id;
      });
      console.log(producttoadd);
      if (producttoadd !== -1) {
        state.cartItems[producttoadd].quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removerfromcart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => action.payload !== item.id
      );
    },
    increaseQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      if (action.payload === 1) {
        return;
      }
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }
      });
    },
    clearcart:(state , action)=>{
      state.cartItems = [];
    }
    
    
  },
});

export const {
  addtocart,
  removerfromcart,
  increaseQuantity,
  decreaseQuantity,
  clearcart,
} = cartSlice.actions;
export default cartSlice.reducer;
