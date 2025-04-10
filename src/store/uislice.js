import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart : true}
const toggleSlice = createSlice({
    name:'toggle',
    initialState,
    reducers:{
       toggleCart(state){
            state.showCart= !state.showCart
       }
    }
})

export const toggleAction = toggleSlice.actions;
export default toggleSlice;