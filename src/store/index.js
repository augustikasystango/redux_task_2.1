import { configureStore, } from "@reduxjs/toolkit";
import  counterSlice  from "./counter";
import toggleSlice from "./uislice";




const store = configureStore({
    // : counterSlice.reducer,
  reducer:
  {  toggle : toggleSlice.reducer}
    
})
export default store;