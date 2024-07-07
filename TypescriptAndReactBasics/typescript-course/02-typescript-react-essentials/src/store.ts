import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./starter/09-rtk/counterSlice";
// by default 
console.log("2) AAAAAAAAAAAAAAAAA BBBBBBBBBBBBB CCCCCCCCCC ");

export const store = configureStore({
    reducer:{
        counter : counterSlice
    }
})

// we have to export 2 types, not knoingthe use but first understand 

// 1) 
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch ;












