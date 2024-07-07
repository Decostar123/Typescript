import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "../../final/09-rtk/counterSlice";

const store = configureStore({
    reducer:{
        counter : counterSliceReducer
    }
})

export default store ;