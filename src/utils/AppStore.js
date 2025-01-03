const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "../redux/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

export default appStore;
