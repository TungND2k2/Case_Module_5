import {configureStore} from "@reduxjs/toolkit";
import employerSlice from "./slice/employerSlice";
import postSlice from "./slice/postSlice";

const Store = configureStore({
    reducer: {
        employ: employerSlice,
        post:postSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default Store;