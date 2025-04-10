import { createSlice } from "@reduxjs/toolkit";


const initialState = {counter : 3}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        
        increase(state,action){state.counter =state.counter+ action.payload},
        decrease(state,action){state.counter =state.counter+ action.payload}


    }
})

export const counterActions = counterSlice.actions;
export default counterSlice;
