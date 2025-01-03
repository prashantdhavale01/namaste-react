import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    // items: ["Pizza", "Burger"],
  },
  reducers: {
    addItem: (state, action) =>{
      state.items.push(action.payload);
    },
    removeItem: (state) =>{
      state.items.pop();
      // return state.items.filter(item => item.id !== action.payload.id);
    },
    // Handle ImmerJS - mutating data
    clearItem: (state) =>{
      state.items.length = 0;
      // return {items:[]}
    },
  }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;