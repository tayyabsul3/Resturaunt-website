import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawer: false,
  },
  reducers: {
   
    
    showcart : (state ,action)=>{
      state.drawer = !state.drawer;
    }
    
  },
});

export const {
 showcart
} = drawerSlice.actions;
export default drawerSlice.reducer;
