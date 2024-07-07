
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CounterStatus = 'active' | 'inactive' | 'pending...';
// the CounterStatus is created seperately, it is used when passing the payload type  
type CounterState = {
  count: number;
  status: CounterStatus; // no need of referncing up the above, just direct mention is enough  
};

const initialState: CounterState = {
  count: 15,
  status: 'pending...',
};

// alert("hi")
console.log("1) AAAAAAAAAAAAAAAAA BBBBBBBBBBBBB CCCCCCCCCC ");


//   

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  // note that the state input is present by default here 
  initialState,
//   see the type can be given to initalState
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
    } ,
    // the payload is bascially the data or the type sent at the time of the dispatch of the action 
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    //   this status.status and the action.payload are of the same type 
    },

  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;


export default counterSlice.reducer;
// think of store as the entire state 


// we have set the type for 
// 1) initialSatate 
// 2) action : PayloadAction<CounterStatus>






