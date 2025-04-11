import { configureStore, } from "@reduxjs/toolkit";
import  counterSlice  from "./cartslice";
import toggleSlice from "./uislice";
import cartslice from "./cartslice";



const store = configureStore({
    // : counterSlice.reducer,
  reducer:
  {  toggle : toggleSlice.reducer,
    cart : cartslice.reducer
  }
    
})
export default store;