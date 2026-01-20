
import {createSlice} from '@reduxjs/toolkit';


//  inital state 

const initialState = {
    value: 0
}


// create slice 
export const counterSlice = createSlice({
    name: 'counter', // Name of this slice
    initialState,    // Initial State
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state,action)=> {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})


// export actions 
export const {increment,decrement,incrementByAmount,reset} = counterSlice.actions;

export default counterSlice.reducer;